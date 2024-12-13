// grab DOM elements
const initialDiv = document.getElementById('initial-div');
const body = document.body;
//const coloredCells = document.querySelectorAll('.color')

//create and insert new elements
const grid = document.createElement('div');
grid.classList.add('container-grid');
initialDiv.insertAdjacentElement('afterend', grid);

const gridSizeButton = document.getElementById('sizeButton');
let sizeInputField;
let gridSize = 16;

function createGrid (size) {
  //clear existing grid in case of 
  grid.innerHTML = ''

  //create cells
  for (let i = 1; i <= size*size; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell');
    console.log(`Div ${i}`);
    grid.appendChild(cell)

    //add color hover effect
    cell.addEventListener('mouseenter', () => {
      cell.classList.add('color')
    });

    //remove color when clicked
    cell.addEventListener('click', () => {
      if (cell.classList.contains('color')) {
        cell.classList.remove('color')
      }
    })
  }
  
}
createGrid(gridSize);
// 

//event listener to create and insert user input field
sizeButton.addEventListener('click', () => {
  if (!sizeInputField) {
    sizeInputField = document.createElement('input');
    sizeInputField.setAttribute('placeholder', '1 to 100');
    sizeInputField.setAttribute('type', 'number');
    sizeButton.insertAdjacentElement('afterend', sizeInputField)
  }
  //add event listener for user input after the input field is created
  sizeInputField.addEventListener('input', () => {
    console.log('User input:', sizeInputField.value)
   const userInput = parseInt(sizeInputField.value);
   if (userInput >= 1 && userInput <= 100) {
      gridSize = userInput;
      createGrid(gridSize);
   } else {
     createGrid(gridSize)
   }
  })
})

//create reset button (erase potentially handled in cell)
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
  console.log('reset button clicked')
  cells = document.querySelectorAll('.cell')
  for ( let cell of cells) {
      cell.classList.remove('color')
    }
  }
)

// eraseButton.addEventListener('click', () => {
//   console.log('erase button clicked')
//   for (coloredCell of coloredCells) {
//     coloredCell.addEventListener('mouseenter', () => {
//       coloredCell.classList.remove('color')
//     })
//   }
  
// })



// resizeButton.addEventListener('click', () => {
//   sizeInput = document.createElement('input');
//   sizeInput.setAttribute('placeholder', 'max 100')
//   resizeButton.insertAdjacentElement('afterend', sizeInput);

// })


// const sizeChoice = sizeInput.value
// console.log(sizeChoice)

{/* <form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>
 */}

//add button to clear & restart
  //change size of grid with function that takes number (inp