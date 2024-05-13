const Model = require('./model');

async function create(buildingDetails){
  
  try {
    const newBuilding = await Model.create(buildingDetails);
    console.log(newBuilding,"newBuilding");
    return newBuilding
  }
  catch (err) {
    console.error(err);
  }
}

async function readOne(filter) {
  try {
    
    const building = await Model.findOne(filter);
  
    return building
  } catch (err) {
    console.error("Error during read operation:", err);
  }
}

async function updateOne(filter){
  const update =await Model.updateOne(filter);
  return update;
}


async function deleteOne(filter) {
  const result = await Model.deleteOne(filter);
  return result;
}
module.exports = {create,readOne,updateOne,deleteOne}
