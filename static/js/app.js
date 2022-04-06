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

// create a function called "handleClick" to handle what to do after an input is given.

function handleClick() {
    // tell D3 to look for the #datetime id in the HTML tags using d3.select("#datetime").
    // tell D3 to look for where our date values are stored on the webpage and grab that information and
    // hold it in the "date" variable using .property("value");
    let date = d3.select("#datetime").property("value");
    // set a default filter and save it to a new variable.
    let filteredData = tableData;
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Rebuild the table using the filtered data 
    // NOTE@: If no date was entered, the filteredData will
    // just be the original tabelData.
    buildTable(filteredData);
}

// Attach  an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);




}