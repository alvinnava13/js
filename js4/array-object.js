function arrayToObject(myArray)
{
    let entries = {
        strings : [],
        numbers : [],
        booleans : []
    };

    for(let i = 0; i < myArray.length; i++)
    {
        switch(typeof myArray[i])
        {
            case 'string':
                entries.strings.push(myArray[i]);
                break;
            case 'number':
                entries.numbers.push(myArray[i]);
                break;
            case 'boolean':
                entries.booleans.push(myArray[i]);
                break;
        }
    }

    return entries;

}

let input = [-1, 5, "cat", false, 10.2, true, "dog"];

let result = arrayToObject(input);
console.log(result);


let string = "<p>strings: " + result.strings.toString() + "</p>";
let number = "<p>numbers: " + result.numbers.toString() + "</p>";
let booleans = "<p>booleans: " + result.booleans.toString() + "</p>";

let collection = [string, number, booleans];


for(let item of collection)
{
    let par = document.createElement("p");
    par.innerHTML += item;
    document.body.appendChild(par);
}





