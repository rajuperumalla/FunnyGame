// const friends =['raj','ramesh','santu'];
// console.log(friends);
// console.log(friends[0]);
//exercise tips and calc bill for customer
// using ternary
// const totalBill=function(bill){
    function totalBill(bill){
        const tip= bill>=50 && bill<=300 ? bill*0.15: bill*0.20;
        return `the bill ${bill} and tip is ${tip} and final bill ${tip+bill}`;    
    }
    // console.log(totalBill(555));
    // console.log(totalBill(100));
    const billData=[125,555,44];
    for(i=0;i<billData.length;i++){
        console.log(totalBill(billData[i]));
    }
    console.log(totalBill(billData[0]));
// exercise bracket notation
 
const john={
    firstName:'jonas',
    lastName:'prml',
    dateOfBirth:1991,
    bestFriends:['michael','madan','mohan'],
    calcAge:function(dateOfBirth){
        console.log(this);
        return 2023-dateOfBirth; 
    // Using this keyword makes code lesser
    // calcAge:function(){
    //     return 2023-this.dateOfBirth;
    //using this key word takes property value of dateOfBirth in john
    }
}
john.location='hdyerabad';
john['country']='india';
// const whoIsBest=prompt('type the name of his friends');
// console.log(john[whoIsBest]);
console.log(john);
console.log(john.bestFriends[0]);

console.log(john.calcAge(1995));
// calculate BMI of two person and compare them 
const marks={
    fullName:'marksYarn',
    weight:78,
    Height:1.69,
    bmi:function(){
         return this.weight/(this.Height*this.Height);
        
    },
    //using this keyword we can write like this also 
    newBmi:function(){
        this.marksB=this.weight/(this.Height**2);
        return this.marksB;
    }
}
const jack={
    fullName:'Stephenjack',
    weight:92,
    Height:1.95,
    bmi:function(){
        return this.weight/(this.Height*this.Height);
    },
    over:function(exp){
        return this.weight*this.Height/exp;
    }
}
console.log(marks.bmi());// we can store in container and compare them also 
console.log(jack.bmi());
if(marks.bmi()>jack.bmi()){
    console.log(`${marks.fullName} BMI is ${marks.bmi()} is higher then ${jack.fullName} bmi ${jack.bmi()}`);
}else{
    console.log(`${jack.fullName} BMI is ${jack.bmi()} is higher then ${marks.fullName} bmi ${marks.bmi()}`);
}
console.log(marks.newBmi());// first we  have to call this object method
//***note**  marksB is a local variable we can not call it globally so we have to call newbmi and then we can access markb variable */
console.log(marks.marksB);// then the value has stored here.
console.log(typeof(marks.marksB));
console.log(typeof(marks.newBmi()));
console.log(jack.over(100));
// exercise calctip and store every value in new array
const bills=[22,295,176,440,37,105,10,1100,86,52];
totalTips=[];
totalBill=[];
// const totalBill=
// ***********type one*************
for(i=0;i<bills.length;i++){
// Here we can use calcTip function to pass the 
// arguments but im passing directly to statement
//Better to use function for reperative actions 

const tip= bills[i]>=50 && bills[i]<=300 ? bills[i]*0.15: bills[i]*0.20;
totalTips.push(tip);
totalBill.push([tip+bills[i]]);
}
//************type two********** */
const newTips=[];
const tipss=function(bills){
    return bills>=50 && bills<=300 ? bills*0.15: bills*0.20;
    };
    for (j=0;j<bills.length;j++){
        const totalTipps=tipss(bills[j]);
        newTips.push(totalTipps);
        
    }
console.log(newTips,'this is funtion tipps ');
// we can see use both but fucntion expressionn is better .
console.log(totalTips);
console.log(totalBill);

let sum=0;
// calcAverage of array list 
const calAvg=function(arr){
    for(i=0;i<arr.length;i++){
sum=sum+arr[i];

    }
    return sum/arr.length;
}
const newArr=[10, 10,12,1,5,54,12,1,21,52,1,115,21,5,1,21,51,21,2,15];
console.log(calAvg(newArr));
// find min number in array
const findMin=function(arr){
    let min=arr[0];
    let max=arr[0];
    
    for(i=0;i<arr.length;i++){
        if(typeof arr[i]!=='number') continue;
        if(min>arr[i]) min=arr[i];
        if(max<arr[i]) max=arr[i];
    }
    console.log(`the min number is ${min}, the max number is ${max}`); 
}
const array2=[5,10,15,15,'raj',30,52,125,150,2,5,100,125,1];
findMin(array2);
findMin(totalBill);
findMin(totalTips);
console.log('*******adding two arrays******');
const array4=[1,2,3,4,5,6,7];
const array5=[8,9,10,11,12,13,14,15];
const array6=['raj','perumalla','thirmalagiri','suryapet',array4,'ok'];
const array45=array4.concat(array5);
console.log(array45);//working very smoothly
console.log(array4.concat(array5));// same output as above
console.log(array4.concat(array6));
console.log('*******convert daily temparetures*****?');
// here storing value in empty string ....
const dailyDaily=[12,13,14,15,16];
const convertString=function(arr){
    let newString='';
    for(i=0;i<arr.length;i++){
    newString=newString+` ${arr[i]}C tempareture ${i+1} day,`;
}
return newString;
}
console.log(convertString(dailyDaily));
console.log(convertString(array4));
//DOM manipulation
let x= Math.trunc(Math.random()*20);
console.log(x);

                                                                                                                 