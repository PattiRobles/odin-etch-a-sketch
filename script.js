
const drawButton = document.getElementById('drawButton');
drawButton.addEventListener('click', () => {
  const grid = document.createElement('div');
  grid.classList.add('container_grid');
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
})

//add button to clear & restart
  //change size of grid with function that takes number (input?) 

