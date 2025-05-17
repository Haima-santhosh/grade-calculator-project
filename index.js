let subject1=parseFloat(prompt("Enter the Mark of the Subject1 : "));
let subject2=parseFloat(prompt("Enter the Mark of the Subject2 : "));
let subject3=parseFloat(prompt("Enter the Mark of the Subject3 : "));
let subject4=parseFloat(prompt("Enter the Mark of the Subject4 : "));
let subject5=parseFloat(prompt("Enter the Mark of the Subject5 : "));

let totalMark =subject1 + subject2 + subject3 + subject4 + subject5;
let avgMark=totalMark/5;

let grade="";
if (avgMark >= 90)
{
   grade= "A+";
}
else if(avgMark >=80 && avgMark <=89)
{
   grade= "A"; 
}
else if(avgMark >=70 && avgMark <=79)
{
 grade= "B";
}
else if(avgMark >=60 && avgMark <=69)
{
   grade= "C";
}

else if(avgMark >=50 && avgMark <=59)
{
  grade= "D";
} 
else if(avgMark < 50)
{
   grade= "F";
}
else{
    console.log("Invalid");
}
alert("Total Mark of the student =  " +totalMark + " \n Average Mark of the student =  " +avgMark.toFixed(2) + "\n Grade = " +grade);
