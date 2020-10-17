const boxContainer = document.getElementById("box-container");
const boxesArray = [];

function boxClick(e) {
  if (e.target.style.backgroundColor === "") {
    e.target.style.backgroundColor = "green";
  } else if (e.target.style.backgroundColor === "green") {
    e.target.style.backgroundColor = "red";
  } else if (e.target.style.backgroundColor === "red") {
    e.target.style.backgroundColor = "yellow";
  } else {
    e.target.style.backgroundColor = "";
  }
}

function boxHover(e) {
  e.target.style.removeProperty("background-color");
}

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
  //boxesArray[i].addEventListener("mouseover", boxHover);
}