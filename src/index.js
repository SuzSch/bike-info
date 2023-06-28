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


    console.log(response);
    console.log(response.bikes);
    console.log(location);
}
function searchDate(response, enteredDate) {
    let date = enteredDate;
    forEach(function (response.bikes) {

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
    // const date = document.querySelector("#date").value;
    const location = document.querySelector("#zip").value;
    document.querySelector("#date").value = null;
    getBikes(location);
}

window.addEventListener("load", function () {
    document.querySelector('form').addEventListener("submit", handleFormSubmission);
});