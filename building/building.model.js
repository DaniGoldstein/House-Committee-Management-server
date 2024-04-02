const mongoose = require('mongoose');






const addressSchema = new mongoose.Schema({
   
    city: {
        type: String,
        required: true,
    },
    st: {
        type: String,
        required: true,
    },
    houseNumber: {
        type: Number,
        required: true
    },

}).index({ city: 1, st: 1, houseNumber: 1 }, { unique: true });




const messageSchema = new mongoose.Schema({
    title: { type: String },
    date: {
        type: Date,
        default: Date.now,
        get: (val) => val ? val.toISOString().split('T')[0] : null
    },


});

// Schema עבור תשלומים
const paymentItemizationSchema = new mongoose.Schema({
    paymentType: {
        type: String,
        required: true,
    },
    sum: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

// Schema עבור שכן
const neighborSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        unique: true
    },
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        minlength:4,
        required: true
    },
    phone: {
        type: String
    },
    email: {
         type: String },

    password: {
        type: String,
        required: true
    },
    messages: [messageSchema],
    paymentItemization: [paymentItemizationSchema],
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    isResponsible: {
        type: Boolean,
        required: true,
        default: false
    }
});



// Schema עבור collection המכילה את כל השכנים
const CollectionSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    buildingPassword: { type: String, required: true },
    generalMessages: [messageSchema],
    address: addressSchema,
    neighbors: [neighborSchema],
});
const Model = mongoose.model('buildings', CollectionSchema);







async function create() {
    try {
        const User = await Model.create({

            "buildingPassword": "5a",
            "address": {
                "city": "bneyBrack",
                "st": "shmuel hanavi",
                "houseNumber": 56
            },
            "neighbors": [
                {
                    "userName": "benedryy",
                    "fName": "itzchak",
                    "lName": "levi",
                    "phone": "055-5575567",
                    "password": "123",
                    "messages": [
                        {
                            "title": "hello"

                        },
                        {
                            "title": "byby"

                        }
                    ],
                    "payment_itemization": [
                        // {
                        //     "paymentType": "monthly",
                        //     "sum" :50

                        // },
                        // {
                        //     "paymentType": "fix",
                        //     "sum" :35
                        // }
                    ],
                    "isActive": true,
                    "isResponsible": true
                },

                {
                    "fName": "דניאל",
                    "lName": "גולדטיין",
                    "userName": "serhidf",
                    "phone": "055-5575567",
                    "email": "danigol054@gmail.com",
                    "password": "1234",
                    "messages": [
                        {
                            "title": "hello"

                        },
                        {
                            "title": "byby"

                        }
                    ],
                    "payment_itemization": [
                        {
                            "paymentType": "monthly",
                            "sum": 50

                        },
                        {
                            "paymentType": "fix",
                            "sum": 35
                        }
                    ],
                    "isActive": true,
                    "isResponsible": true
                }
            ]
        })
    } catch (err) { console.log(err.message) };
}

  create()

// ייצוא ה schema כמודל


module.exports = Model;