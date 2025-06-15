const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const CustomerSchema = new schema({
    first_name: {
        type: String,
        required: true
    },
    pronouns: {
        type: String,

    },
    last_name: {
        type: String,
        required: true
    },
    passowrd_new_set: {
        type: Number,
        default: 0
    },
    // email: {
    //     type: String,
    //     // unique: true,
    //     // required: ['Email ready exist'],
    //     maxLength: 50,
    //     // match: [
    //     //     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //     //     "Please fill a valid email address",
    //     // ],
    //     // match: [
    //     //     /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    //     //     'Please fill a valid email address',
    //     //   ],
    // },
    email: {
        type: String,
        required: [true, "Email is required"],
        maxLength: 50,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please enter a valid email address",
        ],
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number
    },
    //Male 0
    //Female 1
    //Non Binary 2
    //Others 3
    //Prefer not to say (with text box) 4
    //not select 5
    gender: {
        type: Number,
        default: 6
    },
    self_describe: {
        type: String
    },
    //
    zip_code: {
        type: String
    },
    otherCountries: {
        type: String
    },
    address: {
        type: String
    },
    ///
    first_line_address: {
        type: String
    },
    salonId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SaloonUser'
    },
    profileimage: {
        type: String
    },

    second_line_address: {
        type: String
    },
    city: {
        type: String
    },
    pin_code: {
        type: String
    },
    dob: Date,
    status: {
        type: Number,
        default: 1
    },
    email_verify: {
        type: Number,
        default: 0
    },
    contact_pref_notify: {
        type: Boolean,
    },
    promotionaloffers: {
        type: Boolean,
    },
    checked: {
        type: Boolean,
        default: false
    },


    status_account: {
        type: Number,
        default: 1
    },

    clientnotes: [{
        title: {
            type: String
        }
    }],



    customermedicalhistory: [{
        medicalquestion_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'medicalquestion'
        },
        status: {
            type: Number,
            default: 0
        },
        date: {
            type: Date,
            default: Date.now()
        },
        notes: {
            type: String,

        }
    }],


    medications: [{
        name: {
            type: String
        },
        dosage: {
            type: String
        },
        lengthuses: {
            type: String
        },

    }],




    last_login: {
        type: Date,
        default: Date.now
    },


    document: [
        {
            document_title: String,
            client_document: String
        }
    ]


}, {
    timestamps: true
})

CustomerSchema.index({ email: 1, salonId: 1 }, );
CustomerSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

CustomerSchema.methods.checkPass = async function (givenPassword) {
    return await bcrypt.compare(givenPassword, this.password);
};

module.exports = mongoose.model('Customers', CustomerSchema)