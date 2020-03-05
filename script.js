$(document).ready(function() {
    $(".date-text").text(moment().format("MMMM Do YYYY"));
    $(".time-text").text(moment().format("LT"));
    var globalVar = 0;

    var getLocalStorageEvents = function(event) {
        event.preventDefault();
        formerEvents = JSON.parse(localStorage.getItem("")) || [];
        localStorage.setItem($(".event-text"), JSON.stringify(allAddedEvents));

        var allAddedEvents = [];
        var allRowEvents = [];
        var rowElement = $("<tr>");

        rowElement.each(function() {
            $(this).children("h4").each(function() {
                allRowEvents.push($(this).text());
                console.log($(this))
            });
            allAddedEvents.push(allRowEvents);
    });
};

    var hours = [
        {
            hour: "12 AM",
            value: "0"
        },
        {
            hour: "1 AM",
            value: "1"
        },
        {
            hour: "2 AM",
            value: "2"
        },
        {
            hour: "3 AM",
            value: "3"
        },
        {
            hour: "4 AM",
            value: "4"
        },
        {
            hour: "5 AM",
            value: "5"
        },
        {
            hour: "6 AM",
            value: "6"
        },
        {
            hour: "7 AM",
            value: "7"
        },
        {
            hour: "8 AM",
            value: "8"
        },
        {
            hour: "9 AM",
            value: "9"
        },
        {
            hour: "10 AM",
            value: "10"
        },
        {
            hour: "11 AM",
            value: "11"
        },
        {
            hour: "12 PM",
            value: "12"
        },
        {
            hour: "1 PM",
            value: "13"
        },
        {
            hour: "2 PM",
            value: "14"
        },
        {
            hour: "3 PM",
            value: "15"
        },
        {
            hour: "4 PM",
            value: "16"
        },
        {
            hour: "5 PM",
            value: "17"
        },
        {
            hour: "6 PM",
            value: "18"
        },
        {
            hour: "7 PM",
            value: "19"
        },
        {
            hour: "8 PM",
            value: "20"
        },
        {
            hour: "9 PM",
            value: "21"
        },
        {
            hour: "10 PM",
            value: "22"
        },
        {
            hour: "11 PM",
            value: "23"
        }
    ]

    
    var generateTable = function() {
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
                inputElement.text({"type": "text", "class": "event-text"});
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
    

    var clearInput = function() {
        $("input:text").val("");
    }

    var userInput = function() {
        var input = $(this).parent().siblings($(".tdTwo")).children($("input:text"));

        if (input.val() === "") {
            alert("You must have an event.");
        } else {
            var eventInput = $("<h4>");
            eventInput.text(input.val());
            eventInput.prependTo($(this).parent().siblings(".tdTwo"));;
            clearInput();
        }
    };


    var rowSelector = function() {
        $("tr").each(function() {
            if (parseInt($(this).data().time) < parseInt(moment().format('H'))) {
                $(this).css("background-color", "olive");
                
            } else if (parseInt($(this).data().time) === parseInt(moment().format('H'))) {
                
            } else {
                $(this).css("background-color", "grey");
            }
        })
    };

    var changeRowColor = function() {
        setInterval(function() {
            rowSelector();
        }, 60000);
    }

    generateTable();
    userInput();
    rowSelector();
    changeRowColor();
    

    $(".addBtn").on("click", userInput);
    $(".addBtn").on("click", getLocalStorageEvents);
});