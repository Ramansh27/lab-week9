//part one create a new feature branch to work on
//as you complete each of the following tasks commit the change with a clear logical commit message

//part two add app.js and style.css to index.html in the head section

//part three create a single event listener 
//that will log to console the text value of any div that is clicked on inside div .one
//for example clicking on three will log "three" to the console
document.querySelector(".one").addEventListener('click', (ev)=>{
    console.log(ev.target.textContent)
})

//part four write a function that takes a name argument and returns a paragraph element
//with the text "hello <name>" use template literals
function nameFunc(name){
	const html = `<p>hello ${name}</p>`
	return html
}

//part five write a function that will get the text value from the text input
function getName(){
	const name = document.querySelector("#get-name")
	return name.value
}

//part six write an event handler that will use the two functions created above to insert
//a new paragraph at the end of div .two when the button is clicked.

//desired functionality a user could enter a name in the text field, 
//and when they click the button a new paragraph that reads "hello <name>" where name is the name
//they entered in the input field is created below the button