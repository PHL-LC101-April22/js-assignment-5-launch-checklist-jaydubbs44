// Write your JavaScript code here!

window.addEventListener("load", function() {
   //variables 
   const form = document.querySelector("form");
    //Form Submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();  
        let pilotNameInput = document.querySelector("input[name=pilotName]").value;
        let coPilotNameInput = document.querySelector("input[name=copilotName]").value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
        let cargoMassInput = document.querySelector("input[name=cargoMass]").value; 
        let list = document.getElementById('faultyItems');
        //validation 
        formSubmission(document, list, pilotNameInput, coPilotNameInput, fuelLevelInput, cargoMassInput);
         
        });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planetPick = pickPlanet(listedPlanets);
       let name = planetPick.name;
       let diameter = planetPick.diameter;
       let star = planetPick.star;
       let moons = planetPick.moons;
       let distance = planetPick.distance;
       let imageUrl = planetPick.image;
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl); 
   
    })
   
});