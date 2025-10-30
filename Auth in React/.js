
let a = [
    {
        name : "ahmad",
        shw : true
    },
    {
        name : "rabia",
        show : false
    },
    {
        name : "saif",
        show : false
    },
    {
        name : "hamid",
        show : true
    },
    {
        name : "rifat",
        sho : false
    }
]

let b = []

a.map((e) => {
    {e.show && b.push(e.name)}
    
})

console.log(b)