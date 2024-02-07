const controller = require("./neighborsDetails.controller")

async function getNeighborsDetails(filter) {
    //     const isExist = await Controller.readOne(header.userName, header.password, header.address);
    // if (!isExist) throw {code:400, message:"not permission to get this information"} 
   
    console.log(filter,"filter");
   
    const [{neighbors}] = await controller.read(filter);
    // console.log(neighbors,"11111");

    let response = [];
    neighbors.forEach((neighbor) => {
        let details = { fName: neighbor.fName, lName: neighbor.lName, phone: neighbor.phone };
        response.push(details)
    }
    )
    // console.log(response)



    return response

}



module.exports = { getNeighborsDetails }