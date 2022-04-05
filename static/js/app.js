// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// build the table by creating a function called buildTable.
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

// Add the forEach Function:
//  Next, loop through each object in the data.
data.forEach((dataRow) => {
    // Tell JavaScript to find the <tbody> tag within the HTML and add/append a table row ("tr").
    let row = tbody.append("tr");

    // add code to loop through each field in the dataRow argument
    // tell avaScript to reference one object from the array of UFO sightings, with Object.values
    // add (dataRow) as the argument
    // add forEach((val) to specify that we want one object per row.
    Object.values(dataRow).forEach((val) => {
        // create a variable to append data to a table 
        // append each value of the object to a cell in the table data tag <td>
        let cell = row.append("td");
         // add the values (When we chain .text(value) to the variable, we are extracting only the text of the value.)
        cell.text(val);
        }
    );
});

