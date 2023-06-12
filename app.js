const colorHistory = [];

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")
    .toUpperCase()}`;
}

function createDivWithBackground(className, backgroundColor) {
  const div = document.createElement("div");

  div.classList.add(className);
  div.style.backgroundColor = backgroundColor;

  return div;
}

function removeAllChildNodes(entryPoint) {
  while (entryPoint.firstChild) {
    entryPoint.removeChild(entryPoint.firstChild);
  }
}

function addColorToHistory(color) {
  const historyContainer = document.querySelector(".history");

  colorHistory.push(color);

  const historyDiv = createDivWithBackground("history-square", color);

  historyDiv.addEventListener("click", function () {
    colorHistory.filter((colorInHistory) => colorInHistory !== color);
    historyDiv.remove();
  });

  historyContainer.appendChild(historyDiv);
}

function generateColorPalette() {
  for (let i = 0; i < 4; i++) {
    const randomColor = getRandomColor();

    const coloredDiv = createDivWithBackground("selection-square", randomColor);

    coloredDiv.addEventListener("click", function () {
      addColorToHistory(randomColor);
      removeAllChildNodes(selectionContainer);
      generateColorPalette();
    });

    const selectionContainer = document.querySelector(".selection");

    selectionContainer.appendChild(coloredDiv);
  }
}

generateColorPalette();
