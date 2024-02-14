const controller = require("./building.controller")

async function getBuilding(filter){
    const building = await controller.readOne({
        neighbors: {
         $elemMatch: {
          userName: filter.username
         }
        }
       });
       const neighbors =await getNeighborsDetails(building.neighbors);
       
       return neighbors;

}

async function getNeighborsDetails(neighbors) {
    //     const isExist = await Controller.readOne(header.userName, header.password, header.address);
    // if (!isExist) throw {code:400, message:"not permission to get this information"} 
 
   
   
    console.log(neighbors);
    let neighborsDetails = [];
    neighbors.forEach((neighbor) => {
       if(neighbor.isActive){let details = {  
           name: neighbor.fName+" "+neighbor.lName,
            phone: neighbor.phone,
            email: neighbor.email};
            neighborsDetails.push(details)}
    }
    
    );
    return neighborsDetails}
   
    
  



   





module.exports = {getBuilding }