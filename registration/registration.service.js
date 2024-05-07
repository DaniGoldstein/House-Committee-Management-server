const jwt = require('jsonwebtoken');

const controller = require('../DB/controller');


async function login(username, password) {

    const authorizedUser = await auth(username, password);

    const accessToken = jwt.sign(username, process.env.TOKEN_SECRET);
    return { accessToken: accessToken };


}


async function auth(userName, password) {
    const authorizedUser = await controller.readOne({
        neighbors: {
            $elemMatch: {
                userName: userName,
                password: password
            },
        }
    });
    console.log(authorizedUser, "fromLogin");

    if (!authorizedUser) throw { code: 404 }
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
        const UserExist = controller.readOne({
            neighbors: {
                $elemMatch: {
                    userName: userName,

                },
            }
        });
        if (UserExist) throw { code: 401, msg: 'User already exists' };

        const nweNeighbor = {
            fName: fName,
            lName: lName,
            userName: userName,
            phone: phone,
            email: email,
            password: password,




        }
        building.neighbors.push(nweNeighbor);
        building.save();
    }
    console.log(building, "from Registration");

}

async function BuildingRegistration(buildingDetails) {

    const building = await controller.readOne({
        "address.city": buildingDetails.city,
        "address.st": buildingDetails.street,
        "address.houseNumber": buildingDetails.houseNumber});
   console.log(building, "from Registration");
    if (building) throw { code: 409}
}






module.exports = { login, UserRegistration, BuildingRegistration } 