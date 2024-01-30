const Model = require('./.model.js');

async function read(filter){
    try {
        console.log(filter);
        const result = await Model.find({ buildingPassword:"3a"},
        {buildingPassword:0,address:0,id:0,
            s:{
                password:0,userName:0,messages:0,isActive:0,isResponsible:0,_id:0, paymentItemization:0
                }
        });
        return result
      } catch (error) {
        console.error("Error during read operation:", error);
      }
}

module.exports ={read}
