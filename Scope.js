//----------  SCOPE -------------------------------------------------
const city = "New York City";
const logCitySkyline = () => {
  let skyscraper = "Empire State Building";
  return `The stars over the ${skyscraper} in ${city}`;
};
console.log(logCitySkyline());

//-----------  GLOBAL SCOPE -------------------------------------------------
const satellite = "The Moon";
const galaxy = "The Milky Way";
const stars = "North Star";

const callMyNightSky = () => {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
};
console.log(callMyNightSky());

//-----------  Block Scope -------------------------------------------------
const logVisibleLightWaves = () => {
  const lightWaves = "Moonlight";
  console.log(lightWaves);
};

logVisibleLightWaves();
console.log(lightWaves); //  ERROR!!! can't call outside of block scope

//-----------  Scope Pollution-------------------------------------------------
const satellite = "The Moon";
const galaxy = "The Milky Way";
let stars = "North Star";

const callMyNightSky = () => {
  stars = "Sirius";
  return "Night Sky: " + satellite + ", " + stars + ", " + galaxy;
};

console.log(stars); // North Star
console.log(callMyNightSky());
console.log(stars); // Sirius


const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if(region === 'The Arctic'){
      let lightWaves = 'Northern Lights';
      console.log(lightWaves)
    }
    console.log(lightWaves);
  };
  
  logVisibleLightWaves();