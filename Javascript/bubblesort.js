let list = [1,5,7,3,2,4,9,8,6,1,4,6,3,7,9,10,11,10,4,2,4,5,7,12,13,0,11]

let bubbleSort = (list) => {
    for(let j = 0;  j < list.length; j++){
        for (let i = 0; i < list.length-1; i++){
        if (list[i] > list[i+1]){
            [list[i], list[i+1]] = [list[i+1], list[i]]
            }
        }
    }
}

console.log(list);
bubbleSort(list);
console.log(list);