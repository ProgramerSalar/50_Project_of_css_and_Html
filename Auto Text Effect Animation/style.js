const containerE1 = document.querySelector(".container");

const carrers = ["YouTube","Web Developer", "freelancer", "Instructor"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText(){
    characterIndex++;
  containerEl.innerHTML = `
    <h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
    careerIndex
  ].slice(0, characterIndex)}</h1>
    `;

    if(characterIndex === carrers[careerIndex].length) {
      careerIndex++;
      characterIndex = 0;
    }
    if(careerIndex == carrers.length) {
      careerIndex = 0;
    }
    setTimeout(updateText,400);
}