$(document).ready(function(){


	var randomNum= Math.floor(Math.random()*(120-19)+19)
	console.log(randomNum)

	var button1=Math.floor(Math.random()*(12-1)+1)
	var button2=Math.floor(Math.random()*(12-1)+1)
	var button3=Math.floor(Math.random()*(12-1)+1)
	var button4=Math.floor(Math.random()*(12-1)+1)
	var win=0
	var loses=0
	var sum=0
	$("#numbers").html("numbers to get: <br> " + randomNum);
	//beggining game functions
	function gameStart(){

		$(document).on("click","#one",function(){
			//console.log(button1)
			sum=sum+button1
			$("#sum").html("Your total score is: " + sum);
			console.log(sum)
			gameOver(sum)
		});
		$(document).on("click","#two",function(){
			console.log(button2)
			sum=sum+button2
			$("#sum").html("Your total score is: " + sum);
			console.log(sum)
			gameOver(sum)
		});
		$(document).on("click","#three",function(){
			console.log(button3)
			sum=sum+button3
			$("#sum").html("Your total score is: " + sum);
			console.log(sum)
			gameOver(sum)
		});
		$(document).on("click","#four",function(){
			console.log(button4)
			sum=sum+button4
			$("#sum").html("Your total score is: " + sum);
			console.log(sum)
			gameOver(sum)
		});

	}
	gameStart();
	//game over function
	function gameOver(sum){
		if (sum===randomNum){
			win++;
			gameReset()
			$("#wins").html("wins: " + win);
				
		} else if(sum>randomNum){
			loses++;
			gameReset()
			$("#loses").html("loses: " + loses);	
		}
	}
	//gameOver()
	//reset game
	function gameReset(){
		sum=0
		$("#sum").html("your total score is: 0");
		randomNum= Math.floor(Math.random()*(120-19)+19)
		$("#numbers").html("numbers to get: <br> " + randomNum);
		var button1=Math.floor(Math.random()*(12-1)+1)
		var button2=Math.floor(Math.random()*(12-1)+1)
		var button3=Math.floor(Math.random()*(12-1)+1)
		var button4=Math.floor(Math.random()*(12-1)+1)
		gameStart()

	}
	//gameReset()
});
