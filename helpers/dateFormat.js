const moment = require('moment');

function formatDate(){
    return moment(new Date()).format("DD/MM/YYYY");
}

module.exports=formatDate;