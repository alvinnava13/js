let btn = document.getElementById('search'); // button
let textName = document.getElementById('name'); // textbox
let output = document.getElementById('output'); // output div
let info = document.getElementById('info'); // info div

btn.onclick = search;


function search()
{
    let searchName = $("#name").val();

    $.getJSON("json-search.json", function(result){
        let found = false;

        $.each(result, function(index, item){
            if(item.name.toLowerCase().includes(searchName.toLowerCase())){
                found = true;

                $("#info").append('<p>Name: ' + item.name + '</p>');
                $("#info").append('<p>Gender: ' + item.gender + '</p>');
                $("#info").append('<p>Born: ' + item.born + '</p>');
                $("#info").append('<p>Died: ' + item.died + '</p>');
                $("#info").append('<p>Father: ' + item.father + '</p>');
                $("#info").append('<p>Mother: ' + item.mother + '</p>');
            }
        });
    });
}
