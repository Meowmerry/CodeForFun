import { animals } from "../MockData/animals";
import React from "react";
// import ReactDOM from 'react-dom';
import '../cssStyly/styles.css'

export default function animalFacts(props) {
  const title = "";
  const background = (
    <img clasesName="background" alt="ocean" src="/images/ocean.jpg" />
  );

  const list = [];
  for (let animal in animals) {
    list.push(
      <img
        key={animal}
        className="animal"
        alt={animal}
        src={animals[animal].image}
        aria-label={animal}
        role="button"
      />
    );
  }

  const displayFact = (e) => {
    const getName = e.target.getAttribute("alt");
    console.log("getName-->", getName);
    const fact = animals[getName].facts;

    const optionIndex = Math.floor(
      Math.random() * animals[getName].facts.length
    );

    document.getElementById("fact").innerHTML = fact[optionIndex];
    console.log("randomname-->", fact[optionIndex]);
  };
  return(
    <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    <div>{background}</div>
    <p id="fact"></p>
    <div className="animals" onClick={displayFact}>
      {list}
    </div>
  </div>
  );
  
}
// ReactDOM.render(animalFacts, document.getElementById('root'))
