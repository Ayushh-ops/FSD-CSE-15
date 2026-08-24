function Book(props){
    const image=React.createElement("img",{src:props.image,width:"100px",height:"100px"},null);
    const title=React.createElement("h2",{style:{color:"red"}},props.title)
    const price=React.createElement("h2",{style:{color:"blue"}},"Price:"+props.price);
    const btn=React.createElement("button",{style:{color:"green"}},"AddToCart");
    const div=React.createElement("div",{className:"card"},[image,title,price,btn]);
    return div;

}
const bookdata=[
    {image:"",title:"ReactJS",price: 465},
    {image:"",title:"ExpressJS",price: 795},
    {image:"",title:"NodeJS",price: 389},
]
function App(){
    const bookstore=bookdata.map((b)=>{
        Book(b);
        
    })
return bookstore;
}
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(App())

