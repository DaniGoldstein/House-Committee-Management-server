const mongoose = require('mongoose')
const URL_MONGO = 'mongodb+srv://dg:0548463067@cluster0.h875juj.mongodb.net/homePortal'


async function connect() {
    try {
        mongoose.connect(URL_MONGO)
            .then(res => console.log("**** DB - Connection Success ****"))


    }
    catch (err) {
        console.log("DB - Error : ", err)
    }
}
module.exports = { connect }


//  connect()



// const userSchema = new mongoose.Schema({
//     email: {
//       type: String,
//       unique: true // `email` must be unique
//     }
//   });
//   const User = mongoose.model('User', userSchema);


//   // Throws `MongoError: E11000 duplicate key error collection...`

//    User.create([
//     { email: 'test@google.com' },
// { email: 'test@google.com' }
//   ]);

//   const doc = new User({ email: 'test@google.com' });
// Throws `MongoError: E11000 duplicate key error collection...`
//   await doc.save();
// const schema = mongoose.Schema;


// const addressSchema = new mongoose.Schema({
//     city: {
//         type: String,
//         unique: true,
//         required: true,
//     },
//     st: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     houseNumber: {
//         type: Number,
//         required: true
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     },
// });


// const messageSchema = new mongoose.Schema({
//     title: { type: String },
//     date: {
//         type: Date,
//         default: Date.now
//     },


// });

// // Schema עבור תשלומים
// const paymentItemizationSchema = new mongoose.Schema({
//     paymentType: {
//         type: String,
//         required: true,
//     },
//     sum: {
//         type: Number,
//         required: true
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     },
// });

// // Schema עבור שכן
// const Schema = new mongoose.Schema({
//     userName: {
//         type: String,
//         require: true,
//         unique: true
//     },
//     fName: {
//         type: String,
//         required: true
//     },
//     lName: {
//         type: String,
//         required: true
//     },
//     phone: {
//         type: String
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     messages: [messageSchema],
//     paymentItemization: [paymentItemizationSchema],
//     isActive: {
//         type: Boolean,
//         required: true,
//         default: true
//     },
//     isResponsible: {
//         type: Boolean,
//         required: true,
//         default: false
//     }
// });

// // Schema עבור collection המכילה את כל השכנים
// const sCollectionSchema = new mongoose.Schema({
//     // _id: mongoose.Schema.Types.ObjectId,
//     address: addressSchema,
//     s: [Schema],
// });

// // // ייצוא ה schema כמודל
// const sCollection = mongoose.model('buildings',  sCollectionSchema);
// // console.log(sCollection);

// sCollection.create({
    
//     "buildingPassword":"3a",
//     "address": {
//         "city": "jerusalem",
//         "st": "shmuel hanavi",
//         "houseNumber": 55
//     },
//     "s": [
//         {
//             "userName": "John",
//             "fName": "avi",
//             "lName": "cohen",
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
// add.save();

// connect();


