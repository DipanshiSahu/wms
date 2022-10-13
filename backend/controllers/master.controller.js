var { update_operationmaster } = require('../model/master.model');
var CircularJSON = require('circular-json');

async function Updatemaster(req, res){
    try{
        console.log("hello master controller")
        var check = await update_operationmaster();
        if(check != null){
            resdata = {
                status: 200,
                message: 'list Successfully mklk',
               // data:check.Table
               data:check
            }
            res.json(resdata);
        }else{
            resdata = {
                status: 400,
                check:check,
                message: 'Something went wrong',
            }
            res.json(resdata);
        }
       // console.log("check=",check)
        

    }catch(err){
        console.log('errorrrr=',err);
    }
}





module.exports = { Updatemaster }