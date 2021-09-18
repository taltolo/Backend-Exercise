function sumFunction(arrayPrice){
   let sumOrder=0;
    for(let i in arrayPrice ){
        sumOrder+=arrayPrice[i];
    }
    return sumOrder;
}

module.exports=sumFunction;