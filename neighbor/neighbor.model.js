const mongoose = require('mongoose');






const addressSchema = new mongoose.Schema({
    city: {
        type: String,
        unique: true,
        required: true,
    },
    st: {
        type: String,
        required: true,
        unique: true
    },
    houseNumber: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});


const messageSchema = new mongoose.Schema({
    title: { type: String },
    date: {
        type: Date,
        default: Date.now
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
const schema = new mongoose.Schema({
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
        required: true
    },
    phone: {
        type: String
    },
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

// const buildingPasswordSchema = new mongoose.Schema({
//     buildingPassword :{
//         type: String,
//          required: true,
//         }
// });

// Schema עבור collection המכילה את כל השכנים
const CollectionSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    buildingPassword :{type: String, required: true},

    address: addressSchema,
    neighbors: [schema],
});
const Model = mongoose.model('buildings',  CollectionSchema);


// Model.create({
    
//     "buildingPassword":"4a",
//     "address": {
//         "city": "jerusalem",
//         "st": "shmuel hanavi",
//         "houseNumber": 55
//     },
//     "neighbors": [
//         {
//             "userName": "John",
//             "fName": "itzchak",
//             "lName": "levi",
//             "phone": "055-5575567",
//             "password": "1234",
//             "messages": [
//                 {
//                     "title": "hello"
                    
//                 },
//                 {
//                     "title": "byby"
                    
//                 }
//             ],
//             "payment_itemization": [
//                 {
//                     "paymentType": "monthly",
//                     "sum" :50
                    
//                 },
//                 {
//                     "paymentType": "fix",
//                     "sum" :35
//                 }
//             ],
//             "isActive": true,
//             "isResponsible": true
//         },
        
//         {
//             "fName": "avi",
//             "lName": "cohen",
//             "phone": "055-5575567",
//             "password": "12345",
//             "messages": [
//                 {
//                     "title": "hello"
                    
//                 },
//                 {
//                     "title": "byby"
                    
//                 }
//             ],
//             "payment_itemization": [
//                 {
//                     "paymentType": "monthly",
//                     "sum" :50
                    
//                 },
//                 {
//                     "paymentType": "fix",
//                     "sum" :35
//                 }
//             ],
//             "isActive": true,
//             "isResponsible": true
//         }
//     ]
// })

// ייצוא ה schema כמודל


module.exports = Model;