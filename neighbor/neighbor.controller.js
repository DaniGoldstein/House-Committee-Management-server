const Model = require('./neighbor.model');

async function read(filter){
    try {
        console.log(filter + "===filter from controller");
        const result = await Model.find({filter})
        // {buildingPassword:0,address:0,id:0,
        //     s:{
        //         password:0,userName:0,messages:0,isActive:0,isResponsible:0,_id:0, paymentItemization:0
        //         }
        // });
        // console.log(result + "===fromController");
        return result
      } catch (error) {
        console.error("Error during read operation:", error);
      }
}

module.exports ={read}
