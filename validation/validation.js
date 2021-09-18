const validationLib = require('./validateFunctions');
//Input checks
const validation  = (req, res, next) => {
    let valid=false;
    valid= validationLib.ifBodyIsEmpty(req.body)
    if(!valid){
        valid=validationLib.ifArrayIsArray(req.body.food);
        if(!valid) {
            valid=validationLib.ifArrayIsEmpty(req.body.food);
            if(!valid){
                valid=validationLib.ifFieldIsEmpty(req.body.food);
                if(!valid)
                    valid=validationLib.isAnumber(req.body.food);
                if(!valid) 
                    valid=validationLib.isNegativePrice(req.body.food);
            }
        }
    }
    if(valid){
        return res.status(valid.status).send({ error: valid.message });
    }
    return  next();
}

module.exports=validation;