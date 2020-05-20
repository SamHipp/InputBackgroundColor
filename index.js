let button = document.querySelector('button');
let cColor = document.querySelector('h2');
let global = document.querySelector('body');

button.addEventListener("click", function(){
    let inputText = document.getElementById('hexColor').value;
    console.log(inputText.length);
    switch(inputText){
        case "black": cColor.innerText = `Current color: #000000`;
        global.style.background = "#000000";
        global.style.color = "#ffffff";
        break;
        case "white": cColor.innerText = `Current color: #FFFFFF`;
        global.style.background = "#FFFFFF";
        global.style.color = "#000000";
        break;
        case "red": cColor.innerText = `Current color: #FF0000`;
        global.style.background = "#FF0000";
        global.style.color = "#000000";
        break;
        case "orange": cColor.innerText = `Current color: #FFFF00`;
        global.style.background = "#FF5500";
        global.style.color = "#000000";
        break;
        case "yellow": cColor.innerText = `Current color: #FFFF00`;
        global.style.background = "#FFFF00";
        global.style.color = "#000000";
        break;
        case "green": cColor.innerText = `Current color: #00FF00`;
        global.style.background = "#00FF00";
        global.style.color = "#000000";
        break;
        case "blue": cColor.innerText = `Current color: #0000FF`;
        global.style.background = "#0000FF";
        global.style.color = "#000000";
        break;
        case "purple": cColor.innerText = `Current color: #AA00FF`;
        global.style.background = "#AA00FF";
        global.style.color = "#000000";
        break;
        }
    if(inputText.length = 7 && inputText.includes('#')){
        cColor.innerText = `Current color: ${inputText}`;
        global.style.background = inputText;
    }
    else if(inputText.length != 7 && inputText.includes('#')){
        cColor.innerText = "That's not a valid color.";
    }
    
    
})