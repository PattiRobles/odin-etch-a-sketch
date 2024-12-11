
const drawButton = document.getElementById('drawButton');
const body = document.body;
const coloredCells = document.querySelectorAll('.color')


drawButton.addEventListener('click', () => {
  const grid = document.createElement('div');
  grid.classList.add('container-grid');
  body.classList.add('centered');
  drawButton.insertAdjacentElement('afterend', grid);

  for (let i = 1; i <= (16*16); i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell');
    console.log(`Div ${i}`);
    grid.appendChild(cell)
    cell.addEventListener('mouseenter', () => {
      cell.classList.add('color')
    });
  }
  drawButton.remove();

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container')

  const eraseButton = document.createElement('button');
  eraseButton.textContent = 'ERASE';
  eraseButton.classList.add('erase');
  
  const resetButton = document.createElement('button');
  resetButton.textContent = 'RESET';
  resetButton.classList.add('reset')
  
  buttonContainer.append(eraseButton, resetButton)
  grid.insertAdjacentElement('afterend', buttonContainer);

  resetButton.addEventListener('click', () => {
    const coloredCells = document.querySelectorAll('.color')
    console.log(coloredCells)
    // coloredCells.classList.remove('color')
  })

})

//add button to clear & restart
  //change size of grid with function that takes number (input?) 

