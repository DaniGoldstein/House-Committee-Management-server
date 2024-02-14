const Model = require('./building.model');

async function readOne(filter) {
  try {
    
    const building = await Model.findOne(filter);
   
    // {buildingPassword:0,address:0,id:0,
    //     s:{
    //         password:0,userName:0,messages:0,isActive:0,isResponsible:0,_id:0, paymentItemization:0
    //         }
    // });
    // console.log(result + "===fromController");
    return building
  } catch (error) {
    console.error("Error during read operation:", error);
  }
}

module.exports = { readOne }
