con = document.getElementById("container")
btn = document.getElementById("btn")
algo = document.getElementById("algorithm")
li = []

const tmp = []
for (let i = 0; i < 100; i++){
    tmp.push(i);
}

const arr = _.shuffle(tmp)

for (let i = 0; i < 100; i++){
    const now = document.createElement("div")
    now.style.width = "10px"
    now.style.backgroundColor = "hsl(" + arr[i] + ", 100%, 50%)"
    now.style.order = i + ''
    now.id = arr[i] + ''
    now.className = "element"
    con.appendChild(now)
}

swap_ele = (i, j, li) => {
    let tmp = li[i].style.order
    li[i].style.order = li[j].style.order
    li[j].style.order = tmp

    tmp = li[i]
    li[i] = li[j]
    li[j] = li[i]
}

bubbleSort = () => {
    li = con.children
    li.sort()
    console.log(li)
    for (let i = 0; i < 100; i++){
        for (let j = 0; j < 99; j++){
            if (parseInt(li[j].id) > parseInt(li[j + 1].id)){
                swap_ele(j, j + 1, li)
            }
        }
    }
    console.log('fin')
}

btn.onclick = () => {
    li = con.children
    
    switch(algo.value){
        case "bubble":
            bubbleSort()
    }
}