var {thirdrawdatamaster} = require('../model/thirdmaster.model');
var CircularJSON = require('circular-json');


async function Updatethirdmaster(req, res){
    try{
        console.log("hello master controller")
        var check = await thirdrawdatamaster();
    //    console.log("check=",check)
        resdata = {
            status: 200,
            message: 'list Successfully',
           // data:check.Table
           data:check
        }
        res.json(resdata);
    }catch(err){
        console.log('errorrrr=',err);
    }
}


module.exports = {Updatethirdmaster};