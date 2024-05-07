const Model = require('./model');

async function readOne(filter) {
  try {
    
    const building = await Model.findOne(filter);
  
    return building
  } catch (error) {
    console.error("Error during read operation:", error);
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
module.exports = { readOne,updateOne,deleteOne}
