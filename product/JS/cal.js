var readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question(">", (exp)=>{
	try{
		console.log(eval(exp));
	}catch(err){
		console.log("Oops! Something went wrong, Please try again.")
	}
	readline.close();	
})
