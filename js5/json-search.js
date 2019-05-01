let btn = document.getElementById('search'); // button
let name = document.getElementById('name'); // textbox
let output = document.getElementById('output'); // output div

btn.onclick = showResults;

function showResults()
{
    $("#search").on('click', function(){

        let name = $("#name").val();
        let output = $("#output");

        $.getJSON('json-search.json', function(president){
            output.html("<h3>" + name + "</h3>");

            $.each(president, function(value){
                if(value.name.toLowerCase().includes(name.toLowerCase()))
                {

                }
            });

        });
    });
}