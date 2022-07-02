// When size is submitted by the user, call makeGrid()
function makeGrid(myTable) {
    // Input of this function is myTable, an empty table,
    // just like the one given in the html file, called #pixelCanvas
    // Pick height, width from form in html file
    var gridHeight = document.body.querySelector('#inputHeight').value;
    var gridWidth = document.body.querySelector('#inputWidth').value;
    // Generate the "pixels" by nested loops creating rows and columns
    for (var i = 0; i < gridHeight; i++) {
        var newRow = document.createElement('tr');
        for (var j = 0; j < gridWidth; j++) {
            var newCol = document.createElement('td');
            newRow.appendChild(newCol);
        };
        myTable.appendChild(newRow);
    };
};

// Select sizePicker form...
let form = document.forms['sizePicker'];
// ...and add an event listener for the case when 'Submit' button is clicked. 
form.addEventListener('submit', function () {
    var myTable = document.body.querySelector('#pixelCanvas');
    // To reset grid, if myTable is not null, clear the HTML inside it, otherwise do nothing
    if (myTable != null) {
        myTable.innerHTML = '';
    };
    // And now we can make the new grid
    makeGrid(myTable);
});

//Select pixelCanvas for coloring...
let pixelCanvas = document.body.querySelector('#pixelCanvas');
//...and add event listener to choose color of pixel
pixelCanvas.addEventListener('click', function (event) {
    var colorPick = document.body.querySelector('#colorPicker').value;
    // This conditional allows you to turn the pixel transparent if
    // it is already colored. Thought it would be nice to be able to edit and make multicolor designs...
    if (event.target.style.backgroundColor == "") {
        event.target.style.backgroundColor = colorPick;
    } else {
        event.target.style.backgroundColor = ""
    };
});
