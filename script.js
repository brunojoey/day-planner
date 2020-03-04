$(document).ready(function() {
    $(".date-text").text(moment().format("MMMM Do YYYY"));
    $(".time-text").text(moment().format("LT"));
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
        }
    ]

    
    function generateTable() {
        // creates a <table> element and a <tbody> element
        var tbl = $("<table>");
        var tblBody = $("<tbody>");

        // creating all cells
        for (var i = 0; i < 24; i++) {
            // creates a table row
            var row = $("<tr>");
            row.attr("data-time", hours[globalVar].value);
            
            for (var j = 0; j < 1; j++) {
                // Create a <td> element and a text node, make the text
                // node the contents of the <td>, and put the <td> at
                // the end of the table row
                var tdOne = $("<td>");
                var tdTwo = $("<td>");
                var tdThree = $("<td>");
                var inputElement = $("<input>");
                var buttonElement = $("<button>");
                
                tdOne.addClass("tdOne");
                tdOne.text(hours[globalVar].hour);
                inputElement.text({"type": "text", "placeholder": "Place event here"});
                tdTwo.addClass("tdTwo");
                tdTwo.append(inputElement);
                buttonElement.text("Add Event").addClass("btn addBtn");
                tdThree.append(buttonElement);
                row.append(tdOne, tdTwo, tdThree);
            }
            
            // add the row to the end of the table body
            tblBody.append(row);
            globalVar++;
        }
        
        // put the <tbody> in the <table>
        tbl.append(tblBody);
        // appends <table> into <body>
        $(".container").append(tbl);
    }
    
    var showTime = function() {
        var interval = setInterval(function() {
            $(".time-text").text(moment().format("LT"));
        }, 1000);
    };

    var userInput = function() {
        var input = $(".tdTwo").text($("input: text"));

        if (input.val() === "") {
            alert("You must have an event.");
        } else {
            var event = $("<h4>");
            event.text(input.val());
            event.prependTo(".tdTwo")
        }
        clearInput();

    }

    var clearInput = function() {
        $("input: text" === val(""));
    }
    
    showTime();
    generateTable();
    userInput();

    $(".test").on("click", event);
    $(".addBtn").on("click", event);
})