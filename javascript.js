const buttonDiv = document.createElement('div');
buttonDiv.style.display = 'flex';
buttonDiv.style.alignItems = 'center';
buttonDiv.style.justifyContent = 'center';
buttonDiv.style.padding = '10px';
const newButton = document.createElement('button');
newButton.textContent = 'NEW';
newButton.style.padding = '4px 10px 4px 10px';
newButton.addEventListener('click', newSketchTapped);
buttonDiv.appendChild(newButton);
document.body.appendChild(buttonDiv);

createNewSketch(16);

function newSketchTapped() {
    let numberOfSquares = prompt('Enter the number of squares per side for the new grid', 16);
    numberOfSquares = (numberOfSquares > 100) ? 100 : numberOfSquares;
    createNewSketch(numberOfSquares);
}

function createNewSketch(numberOfSquares) {
    let sketchSize = 600;
    let containerDiv = document.getElementById('sketch');
    if (containerDiv == null) {
        containerDiv = document.createElement('div');
        containerDiv.id = 'sketch';
    } else {
        containerDiv.textContent = '';
    }
    containerDiv.style.display = 'flex';
    containerDiv.style.flexWrap = 'wrap';
    containerDiv.style.width = `${sketchSize}px`;
    containerDiv.style.alignItems = 'center';
    containerDiv.style.justifyContent = 'center';
    containerDiv.style.margin = 'auto';

    for (let index = 0; index < (numberOfSquares * numberOfSquares); index++) {
        const squareDiv = document.createElement('div');
        squareDiv.style.backgroundColor = 'white';
        squareDiv.style.width = `${sketchSize / numberOfSquares}px`;
        squareDiv.style.height = `${sketchSize / numberOfSquares}px`;
        squareDiv.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
        containerDiv.appendChild(squareDiv);
    }
    document.body.appendChild(containerDiv);
}