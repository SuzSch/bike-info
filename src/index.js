import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import bikeInfo from './bike.js';

async function getBikes(location, enteredDate) {
    const response = await bikeInfo.getBikes(location, enteredDate);
    if (response.bikes) {
        printElements(response, location);
        searchDate(response, enteredDate);
    } else {
        printError(this, response);
    }


    // console.log(response);
    // console.log(response.bikes);
    // console.log(location);
}

//This function will loop through all bikes in response and return array of bikes that fall within 7 days of date entered by user
function searchDate(response, enteredDate) {
    let newBikeArray = [];
    response.bikes.forEach(function (bike) {
        console.log(bike);
        if (Math.abs(bike.date_stolen - enteredDate) <= 7) {
            newBikeArray.push(bike);
            console.log(newBikeArray);
            return newBikeArray;
        }
    })
}

function printElements(response, location) {
    document.querySelector("#showResponse").innerText = `The bikes that have been stolen near ${location} are: `;
    let p = document.querySelector("#showResponse");
    for (let i = 0; i <= 10; i++) {
        p.append(response.bikes[i].stolen_location);
    }

}

function printError(error, location) {
    document.querySelector("#showResponse").innerText = `There was an error accessing the bikes from ${location} ${error}`;
}

function handleFormSubmission(event) {
    event.preventDefault();
    const enteredDate = document.querySelector("#date").value;
    const location = document.querySelector("#zip").value;

    getBikes(location, enteredDate);
}

window.addEventListener("load", function () {
    document.querySelector('form').addEventListener("submit", handleFormSubmission);
});