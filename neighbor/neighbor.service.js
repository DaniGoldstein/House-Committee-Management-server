const Controller = require("./.controller")

async function getAllsDetails(header) {
//     const isExist = await Controller.readOne(header.userName, header.password, header.address);
// if (!isExist) throw {code:400, message:"not permission to get this information"}  
    const [{s}] = await Controller.read();
    console.log(s);
    
    return s.fname;

}



module.exports = { getAllsDetails }