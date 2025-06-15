require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const http = require("http");
const server = http.createServer(app);
const stripe = require("stripe")(
  process.env.StripeKey
);
const { Server } = require("socket.io");
const Transaction = require("./models/transaction");
const SaloonUser = require("./models/saloonUsers");
//middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));


app.use(express.static("public"));
//routes
app.use("/api", require("./routes/admin/landingRoute"));
//customer route
app.use("/api/customer", require('./routes/CustomerRouter/CustomerRouter'))
app.use("/api/saloon", require("./routes/saloon/auth"));
app.use("/api/saloon/other", require("./routes/saloon/salon"));
app.use("/api/staff", require("./routes/staff/auth"));
app.use("/api/staff/other", require("./routes/staff/staff"));
//Adminpanel
app.use("/api/adminpanel", require('./routes/AdminpanelRouter/AdminpanelRouter'))

//socket initialization
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});




require("./sockets/sockets")(io);

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_a26e14d6fd6dbede4d62830678de0319cb7d05e4c00ee8553abc96082b9e0543";

app.post('/webhook', express.raw({ type: 'application/json' }), async (request, response) => {


  // Handle the event
  switch (request.body.type) {
    case 'checkout.session.completed':
      let { client_reference_id, subscription, } = request.body.data.object;
      let { subscriptionType } = request.body.data.object.metadata;

      const isSubscriptionExist = await Transaction.findOne({ salonId: client_reference_id });
      const isSalonExist = await SaloonUser.findOne({ _id: client_reference_id });

      if (!isSubscriptionExist) {
        await Transaction.create({
          salonId: client_reference_id,
          subscriptionId: subscription,
          subscriptionType: subscriptionType
        });
        isSalonExist.subscriptionId = subscription;
        isSalonExist.leaveformstep = 5;
        isSalonExist.completeform = 1;
        await isSalonExist.save();
      } else {
        await Transaction.findOneAndUpdate({ salonId: client_reference_id }, {
          subscriptionType: subscriptionType,
          subscriptionId: subscription,
        }, { new: true })
      }

      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${request.body.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

//connects to database and then starts the server
const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL)
  .then(() =>
    server.listen(PORT, () =>
      console.log(
        `Server is running on port ${PORT}\nMongoDB Connection Established`
      )
    )
  )
  .catch((err) => console.log(err));
