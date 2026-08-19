const bookdata=[
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOTppcCu_AJmVC5fYKckbX0TlCbNPKszxColRd7_Jjw&s",price: 425},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQS7rQ0r12WhVPVoEsKNimziIH_ZSDNlUUes_sHCzUg&s=10",price: 627},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRSOJOEN8OCO0sPX1Kv_N7pbFOUxX_r7vrSIyuRWsDcA&s=10",price: 248},
]

function Book(data){
const div=document.createElement("div");
div.setAttribute("class","book");
const image=document.createElement("img");
image.setAttribute("src",data.image);
image.setAttribute("width","100px");
image.setAttribute("height","100px");
const h2=document.createElement("h2");
h2.innerText="Price:₹"+data.price+"";
const bt=document.createElement("button");
bt.innerText="AddToCart";
bt.onclick = () =>addToCart(data);
div.appendChild(image);
div.appendChild(h2);
div.appendChild(bt);
return div;
}
const cart=[];
function addToCart(data){
  cart.push(data);
  console.log("data added",data);
  alert("book added successfully")
}
const bookstore=bookdata.map((i)=>(
    Book(i)
))

const parent=document.getElementById("bookstore");
for(i of bookstore){
    parent.appendChild(i);
}

