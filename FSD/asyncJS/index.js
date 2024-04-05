document.addEventListener("DOMContentLoaded", () => {
    let start = false
    let count = 0

    let counter = (time, work) => {// resolve reject can be any name but first arg is always resolution and 2nd is rejection
        return new Promise((resolve, reject) => {
            if (start){
                setTimeout(() => {
                    resolve(work())
                }, time);
            }
            else{
                reject(console.log("Counter not started!"))
            }
        });
    }

    counter(1000, ()=>{
        count++;
        document.getElementById("h").innerHTML = count;
    })

    .then(()=>{
        return counter(1000, () => {
            document.getElementById("h").innerHTML = ++count;
        })
    })

    .then(()=>{
        return counter(1000, () => {
            document.getElementById("h").innerHTML = ++count;
        })
    })

    .catch(() =>{
        document.getElementById("h").innerHTML = "counter not working!";
        console.log("in catch");
    })

    .finally(() => {
        setTimeout(() => {
            document.getElementById("h").innerHTML = `Finally, counter = ${count}`;  
        }, 2000);
    });

})