const boxContainer = document.getElementById("box-container");

for (var i = 0; i < 42; i++) {
  let box = document.createElement("div");
  box.id = `box-${i + 1}`;
  box.className = "boxes";
  boxContainer.appendChild(box);
}