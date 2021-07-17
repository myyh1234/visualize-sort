const con = document.getElementById("container")
const sort_btn = document.getElementById("sort")

const algo = document.getElementById("algorithm")

const size = 100

const algo_id = {
    undefined: 0,
    bubble: 1,
    insertion: 2,
    selection: 3,
    quick: 4,
    merge: 5
}

const queue = {
    bubble: [],
    insertion: [], 
    selection: [],
    quick: [],
    merge: []
}

const algo_idx = {
    bubble: 0,
    insertion: 0, 
    selection: 0,
    quick: 0,
    merge: 0
}

let interval
let state = 0
let start_time
const arr = []

const swap = (i, j, arr) => {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

const swap_color = (i, j) => {
    const tmp = con.children[i].style.backgroundColor
    con.children[i].style.backgroundColor = con.children[j].style.backgroundColor
    con.children[j].style.backgroundColor = tmp
}

const bubble_sort = (arr) => {
    const tmp = arr.slice()
    for (let i = 0; i < size; i++){
        for (let j = i; j < size - 1; j++){
            if (tmp[j] > tmp[j + 1]){
                swap(j, j + 1, tmp)
                queue['bubble'].push([j, j + 1])
            }
        }
    }
    algo_idx['bubble'] = 0
}

const insertion_sort = (arr) => {
    const tmp = arr.slice()
    for (let i = 1; i < size; i++){
        for (let j = i - 1; j >= 0; j--){
            if (tmp[j] > tmp[j + 1]){
                swap(j, j + 1, tmp)
                queue['insertion'].push([j, j + 1])
            }
            else{
                break
            }
        }
    }
    algo_idx['insertion'] = 0
}

const selection_sort = (arr) => {
    const tmp = arr.slice()
    for (let i = 0; i < size; i++){
        let mi = i
        for (let j = i; j < size; j++){
            if (tmp[j] < tmp[mi])
                mi = j
        }
        if (i != mi){
            swap(i, mi, arr)
            queue['selection'].push([i, mi])
        }
    }
    algo_idx['selection'] = 0
}

const rebuild = (arr) => {
    // console.log('build in')
    state = 6

    while (con.children.length > 0)
        con.removeChild(con.firstChild)
    
    const tmp = []
    let idx = 0
    for (let i = 0; i < size; i++)
        tmp.push(i)
    
    for (let i = 0; i < size; i++) {
        idx = Math.floor(Math.random() * (100 - i)) + i
        arr[i] = tmp[idx]
        tmp[idx] = tmp[i]
        tmp[i] = arr[i]

        const now = document.createElement("div")
        now.style.width = "10px"
        now.style.backgroundColor = "hsl(" + 3 * arr[i] + ", 100%, 50%)"
        now.id = arr[i] + ''
        now.className = "element"
        con.appendChild(now)
    }
    
    bubble_sort(arr)
    insertion_sort(arr)
    selection_sort(arr)
    // quick_sort(arr)
    // merge_sort(arr)

    state = 0
}

const run = (algorithm) => {
    // console.log(algorithm, queue[algorithm])
    if (state != algo_id[algorithm]){
        return
    }
    if (algo_idx[algorithm] >= queue[algorithm].length){
        state = 0
        clearInterval(interval)
        return
    }
    if (algorithm == 'merge'){
        return
    }
    else{
        const now = queue[algorithm][algo_idx[algorithm]]
        swap_color(now[0], now[1])
        swap(now[0], now[1], arr)
        algo_idx[algorithm]++
    }
}

rebuild(arr)

sort_btn.onclick = (e) => {
    console.log(state)
    if (!state){
        clearInterval(interval)
        state = algo_id[algo.value]
        start_time = new Date().getTime()
        setInterval(() => {
            run(algo.value)
        }, interval)
        //alert(`finished!\nelapsed time: ${(new Date().getTime() - start_time) / 1000}s`)
    }
}