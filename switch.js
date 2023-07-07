var day= window.prompt("enter a day here");
function printx(){
    switch(day)
    {
        case'monday':
        console.log("today working day");
        output=" working day";
        break;
        case'tuesday':
        output=" half day ";
        break;
        case'friday':
        output="prayer day";
        break;
        case'sunday':
        output=" holiday day";
        break;
        default:output="invalid day";
    }
    var pd=document.getElementById("op");
    pd.innerHTML=`The ${day} is a ${output}`;
}
