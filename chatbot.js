
var trigger = [
	["hi","hey","hello"],
	["how are you", "how is life", "how are things"],
	["what is hinze hall", "tell me about hinze hall", "what does the main hall have", "hinze hall"],
	["what are you doing", "what is going on"],
	["how old are you"],
	["who are you", "are you human", "are you bot", "are you human or bot"],
	["who created you", "who made you"],
	["your name please",  "your name", "may i know your name", "what is your name"],
	["i love you"],
	["happy", "good"],
	["bad", "bored", "tired"],
	["help me", "tell me a story", "tell me joke", "joke"],
	["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
	["exhibitions", "what is on", "what is happening"],
	["is there a long queue", "queue", "how long is the queue", "queue time"],
	["where is Dippy", "where is the dinosaur from the main hall", "dippy"],
	["bye", "good bye", "goodbye", "see you later"],
	["how do i get to the museum", "directions to museum", "directions"],
];
var reply = [
	["Hi","Hey","Hello"],
	["Fine", "Pretty well", "Fantastic"],
	["It has mammals, fish, birds, minerals, plants and insects, and stories about people whose work has shaped the Museum.", "it's the main hall"],
	["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"],
	["I am 1 day old"],
	["I am just a bot, a dinosaur bot!", "I am a Dino-bot. What are you?"],
	["Jade", "My God"],
	["I am nameless", "I don't have a name"],
	["I love you too", "Me too"],
	["Have you ever felt bad?", "Glad to hear it"],
	["Why?", "Why? You shouldn't!", "Try watching TV"],
	["I will", "What about?"],
	["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"],
	["The Venom and Whales exhibitions are now on, a well as WPY", "Please check our site:http://www.nhm.ac.uk/visit/exhibitions.html"],
	["Normally about 10 mins, however on weekends and school holidays, it can be 30 mins"],
	["Dippy has gone on tour"],
	["Bye", "Goodbye", "See you later"],
	["The nearest tube is South Kensington (on the Piccadilly, District and Circle lines)"]
];
var alternative = ["Haha...", "Eh...", "I don't know", "I don't have any info on that", "I'm confused!", "Please look at NHM website for that", "I can't answer that, I need help!"];
document.querySelector("#input").addEventListener("keypress", function(e){
	var key = e.which || e.keyCode; //determines if enter key was pressed
	if(key === 13){ //Enter button
		var input = document.getElementById("input").value;
		document.getElementById("You").innerHTML = input;
		output(input);
	}
});
function output(input){
	try{ //allows you to define a block of code to be tested for errors while it is being executed.
		var product = input + "=" + eval(input);
	} catch(e){ //allows you to define a block of code to be executed, if an error occurs in the try block.
		var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and
		text = text.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");
		if(compare(trigger, reply, text)){
			var product = compare(trigger, reply, text);
		} else {
			var product = alternative[Math.floor(Math.random()*alternative.length)];
		}
	}
	document.getElementById("NHM").innerHTML = product;
	// speak(product);
	document.getElementById("input").value = ""; //clear input value
}
function compare(arr, array, string){
	var item;
	for(var x=0; x<arr.length; x++){
		for(var y=0; y<array.length; y++){
			if(arr[x][y] == string){
				items = array[x];
				item =  items[Math.floor(Math.random()*items.length)];
			}
		}
	}
	return item;
}
// function speak(string){
// 	var utterance = new SpeechSynthesisUtterance();
// 	utterance.voice = speechSynthesis.getVoices().filter(function(voice){return voice.name == "Agnes";})[0];
// 	utterance.text = string;
// 	utterance.lang = "en-US";
// 	utterance.volume = 1; //0-1 interval
// 	utterance.rate = 1;
// 	utterance.pitch = 2; //0-2 interval
// 	speechSynthesis.speak(utterance);
// }
