const textArea = document.getElementById("text");
const charCount = document.getElementById("char-count");

textArea.addEventListener("input", ()=>{
    const length = textArea.value.length;
    charCount.innerText =  `Char Count: ${length} / 100`;
    if(length>100){
        charCount.style.color = "red";
    }else{
        charCount.style.color = "black";
    }
})


