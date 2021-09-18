const mongoose = require('mongoose');
const formatDate = require('../helpers/dateFormat');
require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;

const OrderSchema = mongoose.Schema({

    date: {
        type: String,
        default: formatDate()
    },
    food: [{
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: false
        },
        price: {
            type: SchemaTypes.Double,
            require: true
        }
    }],
    sum: {
        type: SchemaTypes.Double,
        require: false
    }

});


module.exports = mongoose.model('Orders',OrderSchema);