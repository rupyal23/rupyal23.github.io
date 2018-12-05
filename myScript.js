function refresh(){
	location.reload();
}

//Paycheck_Program
function runPayCalc(){
	let hours = prompt("Please Enter the no. of Hours Worked");
	let payRate = prompt("Please Enter the Pay Rate");
	PayCalc(hours, payRate);					//Always remember to put parameters in the function if you wanna use those later in the function
	
}
function PayCalc(hours, payRate){					//parameters are used here from another function
	let regPay;
	regPay = payRate * hours;
	if(hours>40){
		let extraHrs=hours-40;
		regPay = payRate * 40;
		let overTimePay = extraHrs * (payRate*1.5)
		let totalPay = overTimePay + regPay;
		document.getElementById("regpay").innerHTML = "$"+regPay;
		document.getElementById("otpay").innerHTML = "$"+overTimePay;
		//console.log("Your Over Time Pay is: "+overTimePay);	
		document.getElementById("totpay").innerHTML = "$"+totalPay;
		//console.log("Your Total Pay is: "+totalPay);
	}
	else{
		document.getElementById("regpay").innerHTML = "$"+regPay;
		document.getElementById("otpay").innerHTML = "No Overtime";
		document.getElementById("totpay").innerHTML = "$"+regPay;
		//console.log("Your Regular Weekly Pay is: "+regPay);
	}
	
}
//fizzBuzz program
function fizzBuzzCap(){
	let z = fizzBuzz();
	z += z;
	window.alert(z);
}
function fizzBuzz(){
	for (let i = 0; i<=100; i++) {
	
		if (i%3==0&&i%5==0) {
			let both = "fizzBuzz"
			return both;
			//console.log("fizzbuzz");
		}
		else if (i%5==0) {
			let buzz = "buzz";
			return buzz;
			//console.log("buzz");
		}
		else if(i%3==0){
			let fizz = "fizz";
			return fizz;
			//console.log("fizz");
		}
		else {
			return i;
			//console.log(i);
		}	
	}

}



//Whiteboard_Problem_1_stringSplosion
function stringSplosion(stringIn, stringOut){		//create and name function for external HTML 
	stringIn = prompt("Enter any word");			//store user's input in declared variable stringIn
	stringOut="";									//create empty variable to store output- final answer ????Why Empty???
	let i;											// Declare i
	for (i = 0; i <= stringIn.length; i++) {		//for loop to run until the last letter of word --- .length returns the no. of characters in a word.
		stringOut += stringIn.substr(0,i);			// explosion of the word. substring(0,1)+substring(0,1) + ....   ex c+co+cod+code and stores as ccocodcode
													// .substr() extracts the part of the word. ex .substr(0,2) will give cod. And += will concatenate the results... (x+=y == x=x+y)
	}
	document.getElementById("strexpl").innerHTML = stringOut;				
	
}	
// Reverse_a_String
function reverseString(){							//declare function with a parameter
	let stringIn = prompt("Please Enter a Word:");  //User entered word stores in a variable
	//let arrIn = [stringIn];						//convert string to array
	let strBrk = stringIn.split("");				//splits the word into single alphabets
	let revIn = strBrk.reverse();					//reverses it
	let stringOut = revIn.join("");					//joins the reversed alphabets
	//let stringOut = arrOut.toString();			//converts back to string from array
	//console.log(stringOut);		
	document.getElementById("revStr").innerHTML = stringOut;					//displays the output
}
//Capitalize_letter
function capitalize(){
	let z = capEach();
	//console.log(z);
	document.getElementById("capstmt").innerHTML = z;
}

function capEach(stringIn, stringOut){
	stringIn = prompt("Please Enter the statement:");							//hi how are you
	stringIn = stringIn.split(" ");	
	let arr =[]	;												//hi,how,are,you - converted into arrays "hi" "how" "are" "you"
		for(i=0;i<stringIn.length;i++){							//the for loop for going to first letter of each word i.e each array	
		arr[i] = stringIn[i].charAt(0).toUpperCase()+stringIn[i].slice(1);  //POWER OF PROPERTIES and METHODS. charAt() property will give char at that position, uppercase will cap it , slice method will slice the string and returns the left out part. 
		}
	stringOut = arr.join(" ");									//join method will join the arrays into a string.
	return stringOut;
}

//Palindrome
function chkPal(strIn, res){
	strIn=prompt("Please enter a word");
	for(i=0;i<strIn.length;i++){
		res = (strIn[i]==strIn[strIn.length-(i+1)])? "Yes!,this is a Palindrome" : "No, it's not a Palindrome";
	}
	//console.log(res);
	document.getElementById("palchk").innerHTML=res;
}