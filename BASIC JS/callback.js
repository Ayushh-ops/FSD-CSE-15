function register(cb){
    setTimeout(()=>{
        console.log("register here")
        cb();
    }, 5000);
}
function login(cb){
    setTimeout(()=>{
        console.log("login here")
        cb();
    }, 10000);
}
function getData(cb){
    setTimeout(()=>{
        console.log("Fetch data")
        cb();
    }, 6000);
}
function displayData(){
    setTimeout(()=>{
        console.log("Display data")
    }, 8000);
}
//Callback Hell Problem
register(()=>{
    login(()=>{
        getData(()=>{
            displayData();
        });
    });    
});
console.log("Call Another Application")