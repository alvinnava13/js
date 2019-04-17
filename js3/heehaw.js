function heehaw(x = prompt("Please enter a number."))
{
    let num = parseInt(x);

    for (let i = 1; i <= num; i++)
    {
        if(i % 3 === 0 && i % 5 === 0)
        {
            document.writeln("Hee Haw!" +"<br>");
        }
        if(i % 3 === 0)
        {
            document.writeln("Hee!" + "<br>");
        }
        else if(i % 5 === 0)
        {
            document.writeln("Haw!" + "<br>");

        }
        else
        {
            document.writeln(i + "<br>");
        }

    }
    if(isNaN(num))
    {
        alert("Please enter a number.");
        heehaw();
    }
    else if(num == null || num == "")
    {
        alert("Please enter a number!");
        heehaw();
    }

}

heehaw();