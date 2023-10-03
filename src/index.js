//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";
let date = new Date();

let colorObj = {
    color: "blue"
} 

function setMessage() {
	let message = "Good evening";
	let hour = date.getHours();
	console.log(hour);
	if (hour > 0 && hour < 12) {
		message = "Good Morning";
        colorObj.color = "red;"
	} else if (hour > 12 && hour < 18) {
		message = "Good afternoon";
        colorObj.color = "yellow";
	}
	return message;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <h1 className="heading" style={colorObj}>{setMessage()}</h1>
);

/* ReactDOM.render(<h1>{setMessage()}</h1>, document.getElementById("root")); */
