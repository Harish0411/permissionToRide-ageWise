let age = Number(prompt("Enter age group"));
let per = prompt("Allowed to ride? (yes or no)");

if(age>=20 && age<=50){
     document.write(`You are ${age} year old so permission granded for raid.`);
}
else if(age>=10 && age<= 20){
     if(per === "yes"){
	     document.write(`You are ${age} year old and parent say <b> ${per}</b> so permission granded for a raid.`);
		 }
     else{
	     document.write(`You are ${age} year old and parent say <b> ${per} </b> so you are not allowed to go for a raid.`);
		}
}
else{
     document.write(`You are ${age} year old so you are not allowed to go for a raid.`);
}