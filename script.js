const con = document.getElementById("container")
const btn = document.getElementById("btn")
const algo = document.getElementById("algorithm")

let a, b
let interval

const build = (arr) => {
    // console.log('build in')
    while (con.children.length > 0)
        con.removeChild(con.firstChild)
    
    for (let i = 0; i < 100; i++) {
        const now = document.createElement("div")
        now.style.width = "10px"
        now.style.backgroundColor = "hsl(" + 3 * arr[i] + ", 100%, 50%)"
        now.id = arr[i] + ''
        now.className = "element"
        con.appendChild(now)
    }
    // console.log('build out')
}

const sleep = (t) => {
    console.log('in')
    const now = new Date().getTime()
    while (new Date().getTime() < now + t){
        
    }
    console.log('out')
}

const tmp = []
for (let i = 0; i < 100; i++){
    tmp.push(i);
}

const arr = _.shuffle(tmp)

build(arr)


bubbleSort = (arr) => {
    b++
    if (b == 99 - a){
        a++
        b = 0
        if (a == 99){
            clearInterval(interval)
            alert('finish!')
        }
    }
    console.log(a, b)

    if (arr[b] > arr[b + 1]){
        let tmp = con.children[b].style.backgroundColor
        con.children[b].style.backgroundColor = con.children[b + 1].style.backgroundColor
        con.children[b + 1].style.backgroundColor = tmp
        tmp = arr[b]
        arr[b] = arr[b + 1]
        arr[b + 1] = tmp
    }
}



btn.onclick = () => {
    clearInterval(interval)
    switch(algo.value){
        case "bubble":
            interval = setInterval(() => {
                bubbleSort(arr)
            }, 5);
    }
}