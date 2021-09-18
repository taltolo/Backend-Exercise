
const ifArrayIsEmpty = (array) => {
    if(array.length === 0){
        return {
            status: 400,
            message: "Oops! You sent an empty array"
        }
    }
}

const ifArrayIsArray= (array) => {
    if(!Array.isArray(array)){
        return {
        status: 400,
        message: "Oops! You sent an object instead of an array"
        };
    }
}

const ifBodyIsEmpty = (body) => {
    if(Object.keys(body).length===0){
        return {
            status: 500,
            message: "Oops! You sent an empty request"
            };
    }
}

const ifFieldIsEmpty = (array) => {
    for(let i in array){
        if(!array[i].name || !array[i].price){
            return {
                status: 400,
                message: "Oops! You sent an object with empty fiel"
                };
               
        }
    }
}

const isAnumber = (vals) => {
    for(let i in vals){
        if( !(+vals[i].price)){
            return {
                status: 400,
                message: "Oops! You sent an object with a worng price"
                };   
        }
    }
}

const isNegativePrice = (vals) => {
    for(let i in vals){
        if( (vals[i].price<0)){
            return {
                status: 400,
                message: "Oops! You sent an object with a negative Price"
                };
               
        }
    }
}

const checkLastDayOrders = (lastDayOrders) => {
    if(lastDayOrders.length===0){
        return {
            status: 200,
            message: "Ooh! It seems there were no orders today"
        };
    }
}

module.exports={ifArrayIsArray,ifArrayIsEmpty,ifBodyIsEmpty,
    ifFieldIsEmpty,checkLastDayOrders,isAnumber,isNegativePrice};