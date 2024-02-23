//Step 1: Store array of suggestedFruits to search

const suggestedFruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];





//Step 2: Declare varibles to interact with html input & ul

const inputBox = document.querySelector("#input-box");
const resultsBox = document.querySelector(".result-box");





//Step 3: Declare a function for inputBox that will execute when typed in

inputBox.onkeydown = function() {											//.keydown - When we start typing run function
	let result = [];									    				//Declare a variable and store an empty array to store suggestFruits so the data can be filtered for our search
	const input = inputBox.value;						    				//Declare variable to set/retrieve the current value of inputBox
	if(input.length) {                                     	 				//Declare conditional that states if input has a value then...
		result = suggestedFruits.filter(function(letters){					//Store filtered data as a 'result'. Within that filter created a function to compair input filtered results to suggestedFruits array
			return letters.toLowerCase().includes(input.toLowerCase());   	//Return the function parameter (which is the filtered fruits array). Lowercase it (because includes() is case sensitive).
		});																	//This arrow function filters the suggestedFruits according to the input (inputBox.value)
	}
	display(result);				                        				//Calling the below function to display results when anything begins typing

	if(!result.length){							//If no value in result then..
		resultsBox.innerHTML = '';				//Have the result box be empty
	}
}





//Step 4: Write a function to display the results below the search bar

function display (result) {
	const content = result.map(function(list){							//.map creates a new array and calls on every elemtn of the originizal array
		return "<li onclick=selectInput(this)>" + list + "</li>";		//Add li at the start. Perform function - .map iterates over the array. Add li at the end.
	});																	//The returned value is stored in the content variable

	resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";     	//Display content on the web page. Add ul at the start. Also need to return results as a string to remove the commas .join"" does this. Add ul close at the end
}					





//Step 5: Create a function to make selected li display in the input field(search bar)when clicked (line 42 onclick=selectInput(this))

function selectInput(list) {
	inputBox.value = list.innerHTML;                             //Display the inputBox value in the HTML field
	resultsBox.innerHTML = '';     								 //Hide the results box once item is selected
}




