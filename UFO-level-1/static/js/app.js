// retrieve data from local js file
var tableData = data;
// select the botdy of the html table
var tbody = d3.select("tbody");

//assign values for each cell with forEach loop
tableData.forEach(function(sighting){
    var row= tbody.append("tr")
    //unpack the contents
    Object.entries(sighting).forEach(function([key,value]){
        // console.log(value)
        var cell = row.append("td")
        cell.text(value)
    })
});