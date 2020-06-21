// // Chapters 21-25 STRING METHODS
// //1:
var firstName = prompt("Enter your First Name: ")
var lastName = prompt("Enter your Last Name: ")
var fullName = firstName + " " + lastName
alert("Hello"+ " " + fullName)

//2:
var mobileModel = prompt("Enter Your Favorite Mobile Model:")
var length = mobileModel.length
document.write("My favorite mobile model is:" +" "+mobileModel + "<br>" + "Length of String:" +" " +length)

//3:
var word = "Pakistani"
document.write("<br><br>"+"String:" +" " +word)
var indexOfn = word.indexOf("n")
document.write("<br>" + "Index Of 'N' : "+ indexOfn)

//4:
var word = "Hello World!"
document.write("<br><br>"+"String:" +" " +word)
var indexOfl = word.lastIndexOf("l")
document.write("<br>" + "Index Of 'L' : "+ indexOfl)

//5:
var word = "Pakistani"
document.write("<br><br>"+"String:" +" " +word)
var indexOfn = word.charAt(3)
document.write("<br>" + "Character At Index 3 : "+ indexOfn)

//6:
var firstName = prompt("Enter your First Name: ")
var lastName = prompt("Enter your Last Name: ")
var fullName = firstName.concat(lastName)
alert("Hello"+ " " + fullName)

//7:
var city = "Hyderabad"
document.write("<br><br>"+"City:" +" "+city)
var city2 = city.replace("Hyder" , "Islam")
document.write("<br>"+"After replacement:" +" " +city2)

//8:
var message = "Ali and Sami are best friends. They play cricket and football together."
document.write("<br><br>" + "Message: " + " "+  message)
var rep = message.replace(new RegExp ('and' ,'gi'), "&")
document.write("<br>" + "After Replacement: "+" " + rep)

//9:
var num = "427"
document.write("<br><br>" +"Value:" +" "+num +"<br>" +"Type:" +" " +"String")
var num2 = parseInt(num)
document.write("<br>" +" " +"Value: " +" "+num2 +"<br>" + "Type:" +" "+"Number")

//10:
var userInput = prompt("Enter any word:")
document.write("<br><br>" +"User Input:" +" " + userInput)
var con = userInput.toUpperCase();
document.write("<br>" + "Upper Case: " +" " + con)

//11:
var userInput = prompt("Enter any word:")
document.write("<br><br>" +"User Input:" +" " + userInput)
var con = userInput[0].toUpperCase() + userInput.slice(1);
document.write("<br>" + "Title Case: " +" " + con)

//12:
var number = 35.36
document.write("<br><br>" +"Number:" +" " + number)
var a = parseFloat(number)
var res = a.toString();
document.write("<br>" +"Result:" +" "+ res)

//13:
var userName=prompt("Enter your Username: ");
checkValidName(userName);
function checkValidName(un)
{
    var message;
    var split=[];
    var arr=[];
    for(var i=0;i<un.length;i++)
    {
        split[i]=un.split("&nbsp;");
        arr[i]=un.charCodeAt(i);
        if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
        {
                message="Correct User Name";
        }
        while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
        {
            alert("please enter a valid userName");                                                                                                                   
            userName=prompt("Enter your username: ");
            split[i]=un.split("&nbsp;");
            arr[i]=un.charCodeAt(i);
            if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
            {
                message="correct in";
                break;
            }
        }

    }
    alert(message);
}

//14:
var arr = ["cake", "apple Pie","cookie","chips","patties"];
var uIn = prompt("Enter your item to find in our bakery: ")
var i;
var ch=true;
for (i = 0; i < arr.length; i++) {
  if(uIn==arr[i])
  {
  ch=false;
  	alert(uIn +" is available in our bakery");
  }
}
if(ch)
{
 alert(uIn+" is not available in our bakery");
}


//15:
var uni = "university of karachi"
var arr = uni.split("");
var sss;
for (sss=0; sss<arr.length;sss++)
{
document.write(arr[sss]);
document.write("<br >");
}

//16:
var str = prompt("Enter you input: ")
document.write("<br><br>" +"user Input: " + str)
  var res = str.charAt(str.length-1);
  document.write("<br>" +" last Character: " + res)


  //Chapters 26-30 Math Methods:
  //1:
  var aa = prompt("Enter any positive floating number:")
  var bb = parseFloat(aa);
  document.write("<br><br>" +"Number: " + aa)
  document.write("<br>" + "round of value: " + Math.round(bb))
  document.write("<br>" + "floor value: " + Math.floor(bb))
  document.write("<br>" + "ceil of value: " + Math.ceil(bb))
  //2:
  var ab = prompt("Enter any negative floating number:")
  var ba = parseFloat(ab);
  document.write("<br><br>" +"Number: " + ab)
  document.write("<br>" + "round of value: " + Math.round(ba))
  document.write("<br>" + "floor value: " + Math.floor(ba))
  document.write("<br>" + "ceil of value: " + Math.ceil(ba))

  //3:
  var number2 = -4.5
  document.write("<br><br>" + "The absolute value of "+number2 +"is "+ Math.abs(number2))

  //4:
  var diceValue = Math.floor( Math.random() * 6 ) +1;
  document.write("<br><br>" + "Random Dice Value: " + diceValue )
  var diceValue2  = Math.floor( Math.random() * 6 ) +1;
  document.write("<br>" + "Random Dice Value: " + diceValue2 )

  //5:

var coinValue = Math.floor( Math.random() * 2 ) +1;
if(coinValue==1){
    document.write("<br><br>"+coinValue + "<br>"+ "random coin value: Heads")
}
else{
    document.write("<br><br>"+coinValue + "<br>"+ "random coin value: Tails")

}

//6:
var randNum = Math.floor(Math.random() *100)+1;
document.write("<br><br>" +"Random number between 1 and 100: " +randNum)

//7:
var weight = prompt("Enter your weight in kilograms: ")
document.write("<br><br>"+"The weight of user is: " + weight)

//8:
var randomNumber = Math.floor(Math.random() * 10 ) + 1;

var guess = prompt('Guess the number?');

if (parseInt(guess) === randomNumber ) {

  document.write('<p>You guessed the number!</p>');
  
}  else {

  document.write('<p>Sorry. The number was ' + randomNumber + '</p>');

}

//Chapters 31-34 DATE METHODS

//1:
var dateTime = new Date();
document.write("<br><br>" + dateTime)

 //2:
var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var now       = new Date();
var thisMonth = months[now.getMonth()]; 
document.write("<br><br>" + "Current Month: " + thisMonth)

//3: 

var week   = ['sun','Mon', 'Tue', 'Wed' , 'Thur','Fri', 'sat'];
var now       = new Date();
var day = week[now.getDay()]; 
document.write("<br><br>" + "Today is " + day)

//4:
var today = new Date();
var day = today.getDay();
if (day == 6 || day == 0){
    document.write("Its Fun Day!")
}

//5:
var mm = new Date();
var mon = mm.getMonth();
if (mon.getDay <= 15){
    document.write("<br><br>" + "First Fifteen Days of Month")
}
else {
    document.write("<br><br>" +"Last days of the month")
}

//6:
var olddate = new Date("Jan 1, 1970");
var nowdate = new Date();

var e = (nowdate - olddate);
var diffMins = Math.round((e/1000)/60);  // minutes

document.write("<br><br>" + "miliseconds "+ e)
document.write("<br>" + "Minutes since Jan1, 1970: " + diffMins)

//7:
var r = new Date();
var hour = r.getHours();
if(hour<12){
    alert("Its AM")
}
else{
    alert("Its PM")
}

//8:
var d = new Date();
d.setFullYear(2020, 11, 31);
document.write("<br><br>"+ d)

//Chapter 35-38 FUNCTIONS
//1:
function myfunc(){
    var now = new Date();
    alert (now);
}

myfunc();

//2:
function fullname ( first, last){
    alert("Hello"+first+" "+last)
}
 var first = prompt("Enter first name: ")
   var last = prompt("Enter last name:");
fullname(first,last)

//3:
function sum(a,b){
    return a+b;
}
var val1 = prompt("enter value1:")
var a = parseInt(val1);
var val2 = prompt("enter value2:")
var b = parseInt(val2);
alert(sum(a,b))

//4:
function newFunc(value1,value2,op){
    if(op=="+"){
        var add =  value1+value2;
        alert(add)
     }
     else if(op=="-"){
         var sub = value1-value2;
         alert(sub)
     }
     else if(op=="*"){
         var mul = value1*value2;
         alert(mul)
     }
     else if (op=="/"){
         var div = value1/value2;
         alert(div)
     }
     else{
         alert("enter valid inputs")
     }
}


var value0 = prompt("Enter first value:")
var value1 = parseInt(value0)
var value00 = prompt("Enter second value:")
var value2 = parseInt(value00)
var op = prompt("Enter any operation: ")

newFunc(value1,value2,op)

//5:
function sqaure(square){
    value5 = square*square;
    alert(value5)
}


var numm2 = prompt("enter a number to find its square")
var square = parseInt(numm2);
sqaure(square)

//6:
function factorial1(a){
    value6 = 
    alert("Factorial of this number is: "+ value6 )
}
var numm3 = 5
var a = parseInt(numm3);
factorial1(a)


//9;

function check_Palindrome(str_entry){
    
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    
        if(cstr==="") {
            document.writeln("Nothing found!");
            return false;
        }
    
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
  
            if (cstr.length === 1) {
                document.writeln("Entry is a palindrome.");
                return true;
            } else {
    
                ccount = (cstr.length - 1) / 2;
            }
        }
    
        for (var x = 0; x < ccount; x++) {
  
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                document.writeln("Entry is not a palindrome.");
                return false;
            }
        }
        document.writeln("The entry is a palindrome.");
        return true;
    }
    check_Palindrome('madam');
    check_Palindrome('fox');

    //11 
    function coverttoupperletter(str)
    {
        var letters=str.split(" ");
        var sent="";
        for(var a=0;a<letters.length;a++)
        {
            letters[a]=letters[a][0].toUpperCase() + letters[a].slice(1);
            sent +=letters[a]+" ";
        }
        document.writeln("<br>" + sent);
    }

    coverttoupperletter("the quick brown fox");

    //12
    function longestword(str)
    {
        var letters=str.split(" ");
        var longword=0;
        var word;
        for(var a=0;a<letters.length;a++)
        {
           if(letters[a].length>longword)
           {
            longword=letters[a].length;
            word=letters[a];
           }
            
        }
        document.writeln("<br>" + word);
    }

    longestword("Web Development Tutorial");

//13
    function occurrences(str, letter)
    {
        var letters=str.split("");
        var lettercount=0;
       
        for(var a=0;a<letters.length;a++)
        {
           if(letters[a] == letter)
           {
            lettercount++;
           }
            
        }
        document.writeln("<br> The Total number of  occurrences "+ letter +": is "+ lettercount);
    }

    occurrences("JSResourceS.com", 'o');

//14
    function calcCircumference(radius)
    {
        document.writeln("<br>The circumference is "+(2*3.14*radius));

    }

    function calcArea(radius)
    {
        document.writeln("<br>The area is "+((3.14)*(radius*radius)));

    }

    calcCircumference(12);
    calcArea(8);