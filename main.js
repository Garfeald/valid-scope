

let inputValue = document.getElementById('input')

let data = ''

inputValue.oninput = (e) => {
    e.preventDefault();
    
    let value = inputValue.value
    if(value){
        data = value
    }
}

const showResult = (data) => {
    if (data.split("(").length == data.split(")").length 
    && data.split("[").length == data.split("]").length 
    && data.split("{").length == data.split("}").length) 
        alert(true); 
    else 
        alert(false);
}


  
