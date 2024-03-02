function sandwiches(... items: string[]): void{
    
    console.log("sandwiches orders")

    for(let i = 0; i < items.length; i++) {
        console.log(` -${items[i]}`)
    }
}

console.log('enjoy your sandwich hussain')

sandwiches(`capsicum` , `bbq` , `tomato`)
sandwiches(`beef` , `cheese`)
sandwiches(`mayou` , `garlic chicken`)


