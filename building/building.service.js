const controller = require("./building.controller")

async function getNeighborsDetails(filter) {
    //     const isExist = await Controller.readOne(header.userName, header.password, header.address);
    // if (!isExist) throw {code:400, message:"not permission to get this information"} 
   
    console.log(filter,"filter");
   
    const [{neighbors}] = await controller.read({
        neighbors: {
          $elemMatch: {
            userName: filter.username,
            password: filter.password
          },
        },
      });
    // console.log(neighbors,"11111");

    let response = [];
    neighbors.forEach((neighbor) => {
        let details = { fName: neighbor.fName,
           lName: neighbor.lName,
            phone: neighbor.phone,
            email: neighbor.email};
        response.push(details)
    }
    )
    // console.log(response)



    return response

}



module.exports = { getNeighborsDetails }