// ****** Code about the COLOR **************************************************
const colorPicker = document.querySelector('#colorPicker');
let chosenColor = colorPicker.value;    // default color chosen
console.log(chosenColor);

function changeColor (event) {          // function to load the chosen color
  chosenColor = event.target.value;
  console.log(chosenColor);
}

colorPicker.addEventListener('input',changeColor);      // listen when color is changed

// ******** Code about SIZE of grid *********************************************
const heightPicker = document.querySelector('#inputHeight');
const widthPicker = document.querySelector('#inputWeight');
let chosenHeight = heightPicker.value;  // default height value
let chosenWidth = widthPicker.value;    // default width value
console.log(chosenHeight);
console.log(chosenWidth);

function changeHeight (event) {         // function to load the chosen heigth
  chosenHeight = event.target.value;
  console.log(chosenHeight);
}

function changeWidth (event) {
  chosenWidth = event.target.value;     // function to load the chosen width
  console.log(chosenWidth);
}

heightPicker.addEventListener('input',changeHeight);     // listen when height is changed
widthPicker.addEventListener('input',changeWidth);       // listen when width is changed

// *************** Making Grid **************************************************
// When size is submitted by the user, call makeGrid()
const tableElement = document.querySelector('table');   // get table element from html

function makeGrid() {
// Your code goes here!

  if (tableElement.children.length !== 0) {
    tableElement.removeChild(tableElement.firstChild);
  }

  //if (tableElement.children.length === 0) {

    const tableBody = document.createElement('tbody');

    for (let i = 1; i <= chosenHeight; i++) {             // create rows loop
      const tableRow = document.createElement('tr');
        for (let i = 1; i <= chosenWidth; i++) {          // create columns loop
          const tableCell = document.createElement('td');
          tableRow.appendChild(tableCell);
        }
      tableBody.appendChild(tableRow);        // add rows and columns to <tbody>
    }

    tableElement.appendChild(tableBody);      // add table body to <table>
  //}
  //else {
    //tableElement.removeChild(tableElement.firstChild);
  //}
}

const submitButton = document.querySelector('form').lastElementChild;
console.log(submitButton);

submitButton.addEventListener('click',makeGrid);   // listen when the submit button is pressed

// ************* If a grid square is pressed, color with the chosen color *************

function colorSquare (event) {
  if (event.target.nodeName === 'TD') {
    event.target.style.backgroundColor = chosenColor;
  }

}

tableElement.addEventListener('click',colorSquare);
