//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const button = document.getElementById("btn");

// const p = new Promise((res, rej) =>{
// 	setTimeout(() =>{
//         console.log(text.value);
// 		res(text.value);
// 	},delay.value);
// });

async function display(){
	// const data = await p;
    // console.log(data);
    setTimeout(() =>{
        document.getElementById("output").innerText = text.value;
    },delay.value);
}

button.addEventListener("click", display);