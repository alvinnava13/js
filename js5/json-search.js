let btn = document.getElementById('search'); // button
let output = document.getElementById('output'); // output div
let info = document.getElementById('info'); // info div

// When button is clicked, invoke search() function
btn.onclick = search;


function search()
{
    // Clear the html elements of text if there was a previous search
    clear();
    let searchName = $("#name").val();

    // Search json file
    $.getJSON("json-search.json", function(result){
        let found = false;

        // For each result returned...
        // Check to see if there are partial search matches and display full/partial matches
        $.each(result, function(index, item){
            if(item.name.toLowerCase().includes(searchName.toLowerCase()) && !searchName.empty())
            {
                found = true;

                // Display bio info
                $("#info").append('<p>Name: ' + item.name + '</p>');
                $("#info").append('<p>Gender: ' + item.gender + '</p>');
                $("#info").append('<p>Born: ' + item.born + '</p>');
                $("#info").append('<p>Died: ' + item.died + '</p>');
                $("#info").append('<p>Father: ' + item.father + '</p>');
                $("#info").append('<p>Mother: ' + item.mother + '</p>');
                $("#info").append('<p>************************</p>');
            }

        });
        // If no results were found, display a message
        if(found == false)
        {
            $("#output").append("<p>No results found.</p>");
        }
    });
}

// Function to clear html elements of previous searches
function clear()
{
    $("#info").html("");
    $("#output").html("");
}
