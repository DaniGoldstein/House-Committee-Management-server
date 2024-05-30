const jwt = require('jsonwebtoken');

const controller = require('../DB/controller');


async function userLogin(username, password) {

    const authorizedUser = await UserAuth(username, password);
console.log(username, "username");
    const accessToken = jwt.sign(username, process.env.TOKEN_SECRET);
    return { accessToken: accessToken };


}

async function adminLogin(username, password) {

    const authorizedUser = await AdminAuth(username, password,true);

    const accessToken = jwt.sign(username, process.env.TOKEN_SECRET);
    return { accessToken: accessToken };


}


async function UserAuth(userName, password) {
    
    const authorizedUser = await controller.readOne({
        neighbors: {
            $elemMatch: {
                userName: userName,
                password: password,
                
            },
        }
    });
    console.log(authorizedUser, "fromLogin");

    if (!authorizedUser) {console.log("not found"); throw { code:404 }}
}

async function AdminAuth(userName, password, permission) {
    console.log(permission);
    const authorizedUser = await controller.readOne({
        neighbors: {
            $elemMatch: {
                userName: userName,
                password: password,
                isResponsible: permission
            },
        }
    });
    console.log(authorizedUser, "fromLogin");

    if (!authorizedUser) throw { code: permission ? 403 : 404 }
}



async function UserRegistration(userDetails) {
    const { fName,
        lName,
        userName,
        phone,
        email,
        password,
        city,
        street,
        houseNumber,
        buildingPassword } = userDetails

    const building = await controller.readOne(



        {
            "address.city": city,
            "address.st": street,
            "address.houseNumber": houseNumber,
            buildingPassword: buildingPassword
        })
    if (!building) throw { code: 404, msg: 'building not found' };


    else {
        const UserExist =await controller.readOne({
            neighbors: {
                $elemMatch: {
                    userName: userName,

                },
            }
        });
        console.log(UserExist,"found");
        if (UserExist) throw { code: 401, msg: 'User already exists' };

        const firstUser=building.neighbors.length;

        const nweNeighbor = {
            fName: fName,
            lName: lName,
            userName: userName,
            phone: phone,
            email: email,
            password: password,
            isResponsible:!firstUser //בודק אם הוא המשתמש הראשון מגדיר אותו כמנה
        }
        building.neighbors.push(nweNeighbor);
        building.save();
    }
    console.log(building, "from Registration");





}

async function BuildingRegistration(buildingDetails) {
    const { houseNumber, street, city, buildingPassword } = buildingDetails;
    console.log(houseNumber, street, city, buildingPassword, "building");

    const building = await controller.readOne({
        "address.city": city,
        "address.st": street,
        "address.houseNumber": houseNumber
    });
    console.log(building, "from Registration");
    if (building) throw { code: 409, msg: "Building already exists " };

    const newBuilding = await controller.create({
        "buildingPassword": buildingPassword,
        "address": {
            "city": city,
            "st": street,
            "houseNumber": houseNumber
        },
    })

}






module.exports = { userLogin,adminLogin, UserRegistration, BuildingRegistration } 