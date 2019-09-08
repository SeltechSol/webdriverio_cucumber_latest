
var os = require('os');
var builderNew = require('junit-report-builder');
var date = require('date-and-time');
var versionString = require('child_process').execSync('ver').toString().trim()
module.exports = {
  getFormattedDate : function (sepStr1,sepStr2) {
  var d = new Date();
  var str = d.getDate() + sepStr1 + (d.getMonth()+1)  + sepStr1 + d.getFullYear()
                  + sepStr2+ d.getHours() + sepStr1 + d.getMinutes() + sepStr1 + d.getSeconds();

  return str;
  },
  getNewFormattedDateTime : function (){
    let now = new Date();
    return date.format(now, 'DD/MMM/YYYY/ HH:mm:ss [GMT]');
  },

  getNewFormattedDateTimeJunit : function (){
    let now = new Date();
    return date.format(now, 'YYYY-MM-DD HH:mm:ss[Z]');
  },
 
}
// console.log(os.type());
// console.log(os.release());
// console.log(os.platform());
// console.log(versionString);