const { salonTabArr, salonTabSecArr } = require("../constants/statics");
const SaloonUser = require("../models/saloonUsers");
const Transaction = require("../models/transaction");
const { successResponse, errResponse } = require("../utils/response");
const { cancelSubscription_saloon } = require("../htmlTemplates/cancelsubscription");
const sendEmail = require("../utils/sendEmail");
const ConsultationSettings = require("../models/ConsultationSettings");
const Consultation = require("../models/Consultation");
const stripe = require("stripe")(
  process.env.StripeKey
);


const createSubscription111 = async (req, res) => {
  const { priceId, userId, subscriptionType, couponId } = req.body;
  try {

    const isSubscriptionExist = await Transaction.findOne({ salonId: userId });

    if (isSubscriptionExist) {

      /////
      let createdConsultationSettings = [];
      const salonId = userId; // Get the newly created salon's ID

      // Fetch all admin-created consultations (consultations created by Admin)
      const adminConsultations = await Consultation.find({
         formcreatedbyadminPanel: "667024a0c5c43b7a7c4f2fba" , // Fetch consultations created by admin
      });
      console.log(adminConsultations, "adminConsultationsadminConsultations")
      // Create a ConsultationSettings entry for each admin-created consultation for the new salon
      for (let consultation of adminConsultations) {
        // Create consultation settings for the new salon
        var data = await ConsultationSettings.create({
          consultation_id: consultation._id, // Link to the admin-created consultation
          salon_id: salonId, // Set the salon that owns this consultation
          // created_by_salon: true, // Mark it as created for the salon
          created_by_admin: true, // It was created by admin
          see_consultation: 0, // Default visibility to visible
          see_preset_tab: 0, // Default visibility to visible
        });
        createdConsultationSettings.push(data);
        console.log("Consultation settings created:", data);
      }

      //////



      ////



      const subscriptionId = isSubscriptionExist?.subscriptionId;

      try {

        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        const currentPeriodEnd = new Date(subscription.current_period_end * 1000);
        const currentDate = new Date();
        let isNotExpired = currentDate < currentPeriodEnd;
        if (isSubscriptionExist?.subscriptionType == subscriptionType && isNotExpired) {
          if (subscriptionType == 2) {
            return res.status(400).json({
              success: true,
              msg: `You already have a popular subscription.`,
              data: currentDate > currentPeriodEnd ? 'expired' : currentPeriodEnd
            });
          }
          if (subscriptionType == 1) {
            return res.status(400).json({
              success: true,
              msg: `You already have a standard subscription. Please choose another plan.`,
              data: currentDate > currentPeriodEnd ? 'expired' : currentPeriodEnd
            });
          }
          console.log('Subscription ID:', subscription.id);
          console.log('Current Period End:', currentPeriodEnd);
        }

        if (isSubscriptionExist?.subscriptionType == 2 && isNotExpired) {
          return res.status(400).json({
            success: true,
            msg: `You already have a popular subscription.`,
            data: currentDate > currentPeriodEnd ? 'expired' : currentPeriodEnd
          });
        }

      } catch (err) {
        console.error('Error retrieving subscription:', err);
      }
    }

    var session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      success_url: isSubscriptionExist ? `${process.env.SALON_URL}my_subscription` : `${process.env.SALON_URL}payment/paid_success/${userId}`,
      line_items: [
        {
          price: priceId,
          quantity: 1
        },
      ],
      mode: 'subscription',
      client_reference_id: userId,
      metadata: {
        subscriptionType: subscriptionType, // Add your custom data here
      },
      allow_promotion_codes: true,
    });
    // }


    res.status(200).json({ success: true, session });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createSubscription22 = async (req, res) => {
  const { priceId, userId, subscriptionType, couponId } = req.body;
  try {
    console.log("API hit: createSubscription - Start");
    console.log("API",req.body);
    const isSubscriptionExist = await Transaction.findOne({ salonId: userId });
    console.log("Subscription Exists:", isSubscriptionExist);

    if (isSubscriptionExist) {
      const salonId = userId;

      if (!salonId) {
        console.log("Error: Salon ID is missing!");
        return res.status(400).json({ success: false, msg: "Salon ID is required!" });
      }

      console.log("Fetching admin-created consultations...");

      const adminConsultations = await Consultation.find({
        formcreatedbyadminPanel: { $exists: true } // Fetch consultations created by admin
      });

      console.log("Admin-created consultations found:", adminConsultations.length, adminConsultations);

      if (adminConsultations.length === 0) {
        console.log("No admin-created consultations found!");
      } else {
        const createdConsultationSettings = await Promise.all(
          adminConsultations.map(async (consultation) => {
            return await ConsultationSettings.create({
              consultation_id: consultation._id,
              salon_id: salonId,
              created_by_admin: true,
              see_consultation: 1,
              see_preset_tab: 0,
            });
          })
        );
        console.log("All ConsultationSettings created successfully:", createdConsultationSettings);
      }

      // Subscription validation logic
      const subscriptionId = isSubscriptionExist?.subscriptionId;

      try {
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        const currentPeriodEnd = new Date(subscription.current_period_end * 1000);
        const currentDate = new Date();
        let isNotExpired = currentDate < currentPeriodEnd;

        if (isSubscriptionExist?.subscriptionType == subscriptionType && isNotExpired) {
          const msg = subscriptionType == 2
            ? "You already have a popular subscription."
            : "You already have a standard subscription. Please choose another plan.";

          return res.status(400).json({
            success: true,
            msg,
            data: currentDate > currentPeriodEnd ? "expired" : currentPeriodEnd
          });
        }
      } catch (err) {
        console.error("Error retrieving subscription:", err);
      }
    }

    console.log("Creating Stripe session...");
    var session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      success_url: isSubscriptionExist ? `${process.env.SALON_URL}my_subscription` : `${process.env.SALON_URL}payment/paid_success/${userId}`,
      line_items: [
        {
          price: priceId,
          quantity: 1
        },
      ],
      mode: "subscription",
      client_reference_id: userId,
      metadata: {
        subscriptionType: subscriptionType,
      },
      allow_promotion_codes: true,
    });

    console.log("Stripe session created successfully:", session);
    res.status(200).json({ success: true, session });

  } catch (error) {
    console.error("Error in createSubscription:", error.message);
    res.status(500).json({ error: error.message });
  }
};
const createSubscription = async (req, res) => {
  const { priceId, userId, subscriptionType, couponId } = req.body;

  try {
    console.log("API hit: createSubscription - Start");
    console.log("Request Body:", req.body);

    let isSubscriptionExist = await Transaction.findOne({ salonId: userId });
    console.log("Subscription Exists:", isSubscriptionExist);

    const salonId = userId;
    if (!salonId) {
      console.log("Error: Salon ID is missing!");
      return res.status(400).json({ success: false, msg: "Salon ID is required!" });
    }

    console.log("Fetching admin-created consultations...");
    const adminConsultations = await Consultation.find({
      $or: [
        { formcreatedbyadminPanel: { $exists: true } }, // Admin-created
        { formcreatedby: salonId } // Created by this salon
      ]
    });

    console.log(`Consultations found for salon ${salonId}:`, adminConsultations.length);

    if (adminConsultations.length > 0) {
      const createdConsultationSettings = await Promise.all(
        adminConsultations.map(async (consultation) => {
          const existingSetting = await ConsultationSettings.findOne({
            salon_id: salonId,
            consultation_id: consultation._id
          });

          if (!existingSetting) {
            return await ConsultationSettings.create({
              consultation_id: consultation._id,
              salon_id: salonId,
              created_by_admin: !!consultation.formcreatedbyadminPanel, // True if created by admin
              created_by_salon: !!consultation.formcreatedby, // True if created by salon
              see_consultation: 1,
              see_preset_tab: 0,
            });
          }
          return null;
        })
      );

      console.log("ConsultationSettings created:", createdConsultationSettings.filter(Boolean));
    } else {
      console.log("No consultations found for this salon.");
    }

    if (isSubscriptionExist) {
      try {
        const subscriptionId = isSubscriptionExist?.subscriptionId;
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        const currentPeriodEnd = new Date(subscription.current_period_end * 1000);
        const currentDate = new Date();
        let isNotExpired = currentDate < currentPeriodEnd;

        if (isSubscriptionExist?.subscriptionType == subscriptionType && isNotExpired) {
          const msg = subscriptionType == 2
            ? "You already have a popular subscription."
            : "You already have a standard subscription. Please choose another plan.";

          return res.status(400).json({
            success: true,
            msg,
            data: currentDate > currentPeriodEnd ? "expired" : currentPeriodEnd
          });
        }
      } catch (err) {
        console.error("Error retrieving subscription:", err);
      }
    }

    console.log("Creating Stripe session...");
    var session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      success_url: isSubscriptionExist
        ? `${process.env.SALON_URL}my_subscription`
        : `${process.env.SALON_URL}payment/paid_success/${userId}`,
      line_items: [
        {
          price: priceId,
          quantity: 1
        },
      ],
      mode: "subscription",
      client_reference_id: userId,
      metadata: {
        subscriptionType: subscriptionType,
      },
      allow_promotion_codes: true,
    });

    console.log("Stripe session created successfully:", session);
    res.status(200).json({ success: true, session });

  } catch (error) {
    console.error("Error in createSubscription:", error.message);
    res.status(500).json({ error: error.message });
  }
};



const cancelSubscription = async (req, res) => {
  try {
    const subscription = await stripe.subscriptions.cancel(req.user.subscriptionId);
    var find_sallon = await SaloonUser.findByIdAndUpdate({
      _id: req.user._id
    }, {
      $set: {
        canceldate: new Date(),
        subscription: 0
      }
    },
      {
        new: true

      })

    const unixTimestamp = subscription.current_period_end;
    const date = new Date(unixTimestamp * 1000); // Convert UNIX timestamp to milliseconds

    const formattedDate = date.toLocaleDateString(); // Convert to locale-specific date string

    console.log(formattedDate, "check date");

    const msg = {
      to: `${find_sallon?.email}`,
      from: {
        email: process.env.SEND_GRID_SENDER,
        name: 'Consultify'
      },
      subject: "Your Consultify Subscription Cancellation",
      text: "Dont share this Link",
      html: cancelSubscription_saloon(find_sallon, formattedDate),
    };
    sendEmail(msg);

    res.status(200).json({
      success: true,
      subscription
    });
  } catch (error) {
    console.error('Error retrieving subscription:', error.message);
  }
}

const getSubscriptionById = async (req, res) => {
  try {

    if (req.query.id == 'null') {
      return successResponse(
        res,
        200,
        "Transaction fetched Successfully",

      );
    } else {


      const data = await Transaction.findOne({
        salonId: req.query.id
      });
      let salon = await SaloonUser.findOne({
        _id: req.query.id
      });

      if (data) {
        const subscription = await stripe.subscriptions.retrieve(data?.subscriptionId);

        const currentPeriodEnd = new Date(subscription.current_period_end * 1000);
        const currentDate = new Date();
        let isExpired = currentDate > currentPeriodEnd;

        if (isExpired) {
          await Transaction.findByIdAndDelete({
            _id: data?._id
          });
          salon.subscriptionId = null;
          await salon.save();
        }
      }


      return successResponse(
        res,
        200,
        "Transaction fetched Successfully",
        data
      );
    }
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};


module.exports = {
  createSubscription,
  cancelSubscription,
  getSubscriptionById
};
