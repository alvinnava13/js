function heehaw()
{
    let x = prompt("Please enter a number.")
    let num = parseInt(x);

    for (let i = 1; i <= num; i++)
    {
        if(i % 3 === 0 && i % 5 === 0)
        {
            console.log("Hee Haw!");
        }
        else if(i % 3 === 0)
        {
            console.log("Hee!");
        }
        else if(i % 5 === 0)
        {
            console.log("Haw!");

        }
        else
        {
            console.log(i);
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