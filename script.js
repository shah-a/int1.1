const boxContainer = document.getElementById("box-container");
const resetButton = document.getElementById("reset");
const boxesArray = [];

// -----------------------------------
// Handles clicks on boxes - transparent background version
function boxClick(e) {
  if (e.target.style.backgroundImage === '') {
    e.target.style.backgroundImage = 'url("./img/+.svg")';
  } else if (e.target.style.backgroundImage === 'url("./img/+.svg")') {
    e.target.style.backgroundImage = 'url("./img/-.svg")';
  } else if (e.target.style.backgroundImage === 'url("./img/-.svg")') {
    e.target.style.backgroundImage = 'url("./img/o.svg")';
  } else if (e.target.style.backgroundImage === 'url("./img/o.svg")') {
    e.target.style.backgroundImage = 'url("./img/x.png")';
    e.target.style.backgroundSize = 'cover';
  } else {
    e.target.style.backgroundImage = '';
    e.target.style.backgroundSize = '';
  }
}

// -----------------------------------
// Generates calendar skeleton
function generateBoxes() {
  for (var i = 0; i < 42; i++) {
    // Make class of div elements for each box (7x6 grid)
    // Each box has unique ID
    let box = document.createElement("div");
    box.id = `box-${i + 1}`;
    box.className = "boxes";
    boxContainer.appendChild(box);
  
    // Add each box to boxesArray by ID
    let boxNumber = document.getElementById(`box-${i + 1}`);
    boxesArray.push(boxNumber);
  
    // Add click listeners to each box
    boxesArray[i].addEventListener("click", boxClick);
  }
}

generateBoxes();

// -----------------------------------
// Handles clicks on "reset" button
function resetBoxes() {
  while (boxContainer.hasChildNodes()) {
    boxContainer.removeChild(boxContainer.firstChild);
  }
  boxesArray.length = 0;
  generateBoxes();
}

resetButton.addEventListener("click", resetBoxes);