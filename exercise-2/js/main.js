// Main JavaScript File
'use strict';

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
  // Use d3.csv to read in your `data/students.csv` dataset: remember, you must be running a local server
    d3.csv('data/students.csv', function(error, data) {
        console.log(data);
        var table = $('<table></table>');
        table.addClass('table');
        
        Object.keys(data[0]).forEach(function(d) {
            var header = $('<th>' + d + '</th>');
            table.append(header);
        });
        
        data.forEach(function(d) {
            var row = $('<tr>');
            
            Object.keys(d).forEach(function(dd) {
                row.append($('<td>' + d[dd] + '</td>'));
            });
            
            table.append(row);
        });
        
        $('#sandbox').append(table);
    });
    // Use jQuery to create a table, and store it in a variable


    // Append a table header for each key in your first observation


    // Iterate through your array and create a new table row for each element in your array

      // Add a cell (<td>) for each key/value pair in your object


    // Select your `sandbox` section, and append your table to it
});
