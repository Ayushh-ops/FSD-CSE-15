const num=[1,2,3,4,5,6,7,8,9];
const even= num.filter((i)=>(i%2==0))
console.log("num= ",num);
console.log("Even= ",even)
const squre=even.map((i)=>(i*i))
console.log("Square= ", squre)
const sum= squre.reduce((s,i)=>(s+i));
console.log("sum = ",sum)