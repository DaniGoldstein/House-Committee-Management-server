const controller = require("./building.controller")

async function getBuilding(username) {
    console.log(username, "sevice")
    const building = await controller.readOne({
        neighbors: {
            $elemMatch: {
                userName: username
            }
        }
    });

    const neighbors = getNeighborsDetails(building.neighbors);
    const address = building.address;
    const generalMessages = building.generalMessages;
    const neighborsMessages = getNeighborsMessages(building.neighbors)
    console.log(address);
    return { neighbors, address, generalMessages, neighborsMessages };

}

function getNeighborsDetails(neighbors) {

    let neighborsDetails = [];
    neighbors.forEach((neighbor) => {
        if (neighbor.isActive) {
            let details = {
                name: neighbor.fName + " " + neighbor.lName,
                phone: neighbor.phone,
                email: neighbor.email
            };
            neighborsDetails.push(details)
        }
    }

    );
    return neighborsDetails
}

function getNeighborsMessages(neighbors) {

    const messages = [];
    neighbors.forEach((neighbor) => {
        if (neighbor.isActive) {
            for (let message of neighbor.messages) {
                console.log(typeof(messageDate),"message");
                let messageObj = {
                    name: neighbor.fName + " " + neighbor.lName,
                    title: message.title,
                    date: message.date,
                }


                messages.push(messageObj);
            }
        }
    })

    return messages;
}


async function addNeighborMessage(username, message) {

    const newMessage = { title: message }
    let building = await controller.readOne({
        neighbors: {
            $elemMatch: {
                userName: username
            }
        }
    });

    let userMessages;
    building.neighbors.forEach((neighbor) => { neighbor.userName == username ? userMessages = neighbor.messages : null });
    userMessages.push(newMessage);
    await building.save();

    return userMessages;
}
















module.exports = { getBuilding, addNeighborMessage }