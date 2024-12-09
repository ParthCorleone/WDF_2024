//1. Area of a Circle:  
//Write a function to calculate the area of a circle given its radius

function rad(radius){
    return Math.PI*Math.pow(radius,2)
}
console.log(rad(5))

//2. String Interpolation:  
//Create a function that takes two strings (first name and last name) and returns the full name.

function flname (fname,lname){
    return fname+lname
}

console.log(flname("Parth","Dhinge"))

//3. Convert Minutes to Hours and Minutes:  
//Write a function to convert total minutes into hours and minutes (e.g., 125 minutes → 2 hours 5 minutes).

function ftime(min){
    console.log(Math.floor(min/60));
    console.log(min%60);
}

ftime(400)

//4. Check Data Type:  
//Create a function that accepts a value and returns its data type.

function mydef(inp){
    return typeof inp
}

console.log(mydef(45))

//5. Temperature Converter:  
//Convert temperatures between Celsius and Fahrenheit using a function.

function convert(value,thing){
    if (thing == "C"){
        return (value*(9/5))+32
    }
    else{
        return ((value-32)*5)/9
    }
}

console.log(convert(75.2,'F'))

//6. Check Even or Odd:  
//Write a function to check if a number is even or odd.

function eve(value){
    if (value%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}

eve(56)

//7. Calculate Total Bill:  
//Write a function to calculate the total bill, including a 10% tip.

function tip(arr){
    sum=0;
    for (i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    sum=sum+(sum/10)
    console.log(sum)
}

tip([1,2,3,4])

//8. Compare Two Numbers:  
//Create a function that returns the larger of two numbers.

function lar(val1,val2){
    if (val1>val2){
        console.log(val1)
    }
    else{
        console.log(val2)
    }
}

lar(5,8)

//9. Reverse a String:  
//Write a function to reverse a given string.

function myfuction(str1){
    str2=" "
    for (i=str1.length-1;i>=0;i--){
        str2+=str1[i]
    }
    console.log(str2)
}

myfuction("Hello")

//10. Calculate Age:  
//Given a birth year, calculate the person's current age.

function age(val){
    return new Date().getFullYear()-val
}

console.log(age(2004))
