

const facts = document.getElementById("facts")


    

function Fact(number) {
    return new Promise((resolve, reject) => {
        const res = $.getJSON(`http://numbersapi.com/${number}?json`);
        resolve(res)
        reject(false);
    })
}

let favorite = Fact(7)

favorite.then(res =>{
    const newP = document.createElement("p");
    newP.innerText= (res.text);
    facts.append(newP);
    })
    .catch(rej=> {
    facts.append(rej);
    })





const numbers = [42,42,42,42,42,42,42,42]
const promises = []


for (number of numbers) {
    promises.push(Fact(number))
}

Promise.all(promises)
    .then(promArr => {
        const newb = document.createElement("br")
        facts.append(newb)
        promArr.forEach(res =>{
            const newP = document.createElement("p")
            newP.innerText= (res.text);
            
            facts.append(newP,)
        })
    })