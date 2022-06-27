// Write your helper functions here!

require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   let missionTarget = document.getElementbyId("missionTarget");
   missionTarget.innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
                    
}

function validateInput(testInput) {
    if (testInput === "" || testInput === null || testInput === 0){
        return "Empty";
    }else if(isNaN(Number(testInput))){
        return "Not a Number"
    }else{
    return "Is a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //variables
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let launchStatus = document.getElementById("launchStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    //conditionals
    
    //All fields filled?
    if  (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" 
    || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
    alert("Please fill out all fields of form.");
   }
   //C.3 - Fuel and cargo listed as numbers?
   else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
    alert("Enter a valid number for fuel level and cargo weight, please.");
   }else{
    pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready`;
    list.style.visibility = 'hidden'; 
   }

   if (fuelLevel < 10000){
    list.style.visibility = "visible";
    launchStatus.style.color = "red";
    fuelStatus.innerHTML = "Not enough fuel for journey";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    
    } else if (cargoLevel > 10000){
    list.style.visibility = "visible";
    launchStatus.style.color = "red";
    cargoStatus.innerHTML = "Cargo load too heavy; unsafe to launch.";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    
    }else if (cargoLevel <= 10000 && fuelLevel >= 10000){
    launchStatus.style.color = "green";
    launchStatus.innerHTML = "Shuttle is Ready for Launch!";
    list.style.visibility = "visible";
  }

  
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();   

    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planetIndex = Math.floor(Math.random() * planets.length);
    return planets(planetIndex);
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
