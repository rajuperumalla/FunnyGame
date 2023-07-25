'use strict';

const extra="rajuperumalla";
console.log(extra);
const y=Math.trunc(Math.random()*20+1);
console.log("this random Number is",y);
let count=5;
function shakimom()
{
    document.getElementById("Eval").classList.add('shake');
}

function blastEffect() {
    const button = document.querySelector("button");
    button.classList.add("blast");
    setTimeout(() => button.classList.remove("blast"), 500);
}
// document.querySelector(".per").addEventListener("click",
function perform(){
    document.getElementById("Eval").classList.add('shake');
    const x=Number(document.getElementById("Eval").value);
    console.log(x);
    document.getElementById('past').innerHTML=x;
    ///************Display Functionsss */
    const display=function(message){
       return document.getElementById("guessvalue").innerHTML=message;
    };
    
    if(!x || x>20)
    {
        document.querySelector(".wingame").textContent="Funny Game";
        display("The field should not be empty/less 20");
        count=count-1;
        window.alert("please Enter a numer/less 20");
    }
    else if(x===y)
    {
        document.querySelector(".wingame").textContent=`Congratulations !
        you Won the Game`;
        document.querySelector(".wingame").style.fontSize="40px";
        display(`The Entered value is Matching i.e ${x}`);
        document.querySelector("body").style.backgroundColor="yellow";
        document.querySelector("body").style.color="green";
        // document.getElementById("Eval").removeAttribute("autofocus");    
        document.getElementById("Eval").classList.add('blast');
        document.querySelector(".per").classList.add('blast');
        document.querySelector(".celeb").classList.remove('celeb');
        
    }
    else {
        
        display( x<y ? "The Entered value is LOW so try little Higher":"The Entered value is HIGH so try little Lower");
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
        document.querySelector(".wingame").textContent="Funny Game";
        document.getElementById("Eval").value="";
        count=count-1;
    }
    {
        
    }
    /***************    code Re-factoring applied here  **** */
    // two things mainly happend 1. dipslay message function used instead of detailed code
    //2. ternary operator used instead of if else loops 
    
    /// 
    // else if (x>y)
    // {
        //     document.querySelector("body").style.backgroundColor="black";
        //     document.querySelector("body").style.color="white";
        //     document.querySelector(".wingame").textContent="Funny Game";
        //     display("The Entered value is HIGH so try little Lower");
        //     count=count-1;
        // }
        // else
        // {
            //     document.querySelector("body").style.backgroundColor="black";
            //     document.querySelector("body").style.color="white";
            //         document.querySelector(".wingame").textContent="Funny Game";
            //         display("The Entered value is Not Matching");
            //         document.querySelector("body").style.backgroundColor="red";
            //     }
            document.querySelector(".count").textContent=`Your last choice count is ${count}`;
            if(count<1) {
                location.reload();
                document.getElementById("eval").value="";
            }
            
        };
        document.addEventListener('keydown',function(e){
            if(e.key==='Enter')
            {
                perform();
            }
        })
           
        
        console.log(typeof(y));
        
        // function backg(){
            //     document.querySelector("body").style.backgroundColor="red";
            // }
            // shakimom();
            // shakimom();      

            