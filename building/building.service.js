const { response } = require("express");
const controller = require("./building.controller")

async function getBuilding(username) {

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
    const neighborsMessages = getNeighborsMessages(building.neighbors);
    const userName = username;
    const name = getName(building.neighbors, username);

    return { neighbors, address, generalMessages, neighborsMessages, name, userName };

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
                    username: neighbor.userName,
                    messageId: message._id,
                }


                messages.push(messageObj);
            }
        }
    })

    return messages;
}

function getName(neighbors, username) {
    const neighbor = neighbors.find(neighbor => neighbor.userName === username);
    const name = neighbor.fName + " " + neighbor.lName;
    console.log(name, "name");
    return name;
}




async function addNeighborMessage(username, message) {

    const newMessage = { title: message }
    console.log(newMessage);
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
    building.save();

    return userMessages;
}

async function deleteMessages(deleteMessagesArray, username) {
    ;
    const building = await controller.readOne({
        neighbors: {
            $elemMatch: {
                userName: username
            }
        }
    });
   
    building.neighbors.forEach((neighbor) => {
        if (neighbor.userName === username) {
            deleteMessagesArray.forEach((messageId) => {
            neighbor.messages = neighbor.messages.filter((message) => message._id != messageId);

            }); 
        }
    })
    building.save();

    // building.neighbors.forEach((neighbor) => { neighbor.userName == username ? userMessages = neighbor.messages : null });
    // userMessages = userMessages.filter((message) => !deleteMessagesArray.includes(message._id));
    // console.log(userMessages);
    // await building.save();
}
















module.exports = { getBuilding, addNeighborMessage, deleteMessages }