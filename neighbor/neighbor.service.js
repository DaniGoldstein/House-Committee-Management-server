const controller = require("./neighbor.controller")

async function getNeighborsDetails(password) {
//     const isExist = await Controller.readOne(header.userName, header.password, header.address);
// if (!isExist) throw {code:400, message:"not permission to get this information"} 
const bp ={buildingPassword:password} 
console.log(bp+"1111");
    const neighbors = await controller.read(bp);
       
    let response = [];
    neighbors.forEach((neighbor) => {let details={fName:neighbor.fName, lName:neighbor.lName, phone:neighbor.phone};
    response.push(details)}
    )
    console.log(response)
    
  
    
    return response

}



module.exports = { getNeighborsDetails }