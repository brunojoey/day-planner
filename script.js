$(document).ready(function() {
    var todayDate = $(".date-text").text(moment().format("MMMM Do YYYY"));
    var welcomeText = $(".time-text").text(moment().format("LT"));
    var globalVar = 0;

    var hours = [
        {
            hour: "12AM",
            value: "0"
        },
        {
            hour: "1AM",
            value: "1"
        },
        {
            hour: "2AM",
            value: "2"
        },
        {
            hour: "3AM",
            value: "3"
        },
        {
            hour: "4AM",
            value: "4"
        },
        {
            hour: "5AM",
            value: "5"
        },
        {
            hour: "6AM",
            value: "6"
        },
        {
            hour: "7AM",
            value: "7"
        },
        {
            hour: "8AM",
            value: "8"
        },
        {
            hour: "9AM",
            value: "9"
        },
        {
            hour: "10AM",
            value: "10"
        },
        {
            hour: "11AM",
            value: "11"
        },
        {
            hour: "12PM",
            value: "12"
        },
        {
            hour: "1PM",
            value: "13"
        },
        {
            hour: "2PM",
            value: "14"
        },
        {
            hour: "3PM",
            value: "15"
        },
        {
            hour: "4PM",
            value: "16"
        },
        {
            hour: "5PM",
            value: "17"
        },
        {
            hour: "6PM",
            value: "18"
        },
        {
            hour: "7PM",
            value: "19"
        },
        {
            hour: "8PM",
            value: "20"
        },
        {
            hour: "9PM",
            value: "21"
        },
        {
            hour: "10PM",
            value: "22"
        },
        {
            hour: "11PM",
            value: "23"
        },
    ]

})

function generateTable() {
    // creates a <table> element and a <tbody> element
  var tbl = $("<table>");
  var tblBody = $("<tbody>");

  // creating all cells
  for (var i = 0; i < 24; i++) {
    // creates a table row
    var row = $("<tr>");
    row.attr("data-time")

    for (var j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = $("<td>");
      var cellText = document.createTextNode("cell in row "+i+", column "+j);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}

// for loop for the generation of seperate hours