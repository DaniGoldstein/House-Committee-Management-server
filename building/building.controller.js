const Model = require('./building.model');

async function readOne(filter) {
  try {
    
    const building = await Model.findOne(filter);
  
    return building
  } catch (error) {
    console.error("Error during read operation:", error);
  }
}

async function updateOne(filter){
  const update = Model.updateOne(filter);
  return update;
}

module.exports = { readOne,updateOne}
