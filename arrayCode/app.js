const a= [1,3,5,2,4]    ///output a=[1,9,25,4,16]
const b= a.map((element,index)=>{
    return element*element
})
console.log(b);


const c= [1,3,5,2,4]   ///output c=[1,5,4]


const d=c.filter((e,i)=>{
    return !(i%2)
})

console.log(d);



const f= [1,3,5,2,4]   ///output c=[1,25,16]

const g=f.filter((e,i)=>{
    return !(i%2)
})
const h=g.map((e,i)=>{
    return e*e
})
console.log(h)