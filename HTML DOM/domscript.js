function addParagraph(){
    const para=document.createElement("p"); //p represents <p> HTMl tag
    para.innerText="This is new Paragraph";
    para.style.color="red";
    const parent=document.getElementById("para");
    parent.appendChild(para);
}
function removeParagraph(){
    const para=document.querySelector("p");
    const parent=document.getElementById("para");
    parent.removeChild(para);
    
}
function removeAllParagraph(){
    const para=document.querySelectorAll("p");
    const parent=document.getElementById("para");
    // for(i of para){
    //     parent.removeChild(i);
    // }
    para.forEach(i=>{
        parent.removeChild(i);
    })
        
    
}