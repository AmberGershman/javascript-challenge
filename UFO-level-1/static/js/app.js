// retrieve data from local js file
var tableData = data;
// select the botdy of the html table
var tbody = d3.select("tbody");

//assign values for each cell with forEach loop
tableData.forEach(function (instance) {
    var row = tbody.append("tr")
    //unpack the contents
    Object.entries(instance).forEach(([key, value]) => {
        // console.log(value)
        var cell = row.append("td")
        cell.text(value)
    })
});

var search = d3.select("#filter-btn");

function filterDate() {
    // d3.event.preventDefault();
    var date = d3.select("#datetime");
    var datevalue = date.property("value");
    alert(`Careful, they don't want you to see the UFO sightings on ${datevalue}`);

    var filterDate = data.filter(sighting => sighting.datetime === datevalue);

    console.log(filterDate);

    for (var i; i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
};

search.on("click");
