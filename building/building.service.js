const controller = require("./building.controller")

async function getBuilding(filter) {
    const building = await controller.readOne({
        neighbors: {
            $elemMatch: {
                userName: filter.username
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











module.exports = { getBuilding }