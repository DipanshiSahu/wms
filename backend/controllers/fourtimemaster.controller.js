var { update_fourtimemaster ,update_fivetimemaster } = require('../model/fourtime.model');

async function Updatefourtimemaster(req, res){
    try{
        var check = await update_fourtimemaster();
        if(check != null){
            resdata = {
                status: 200,
                message: 'list Successfully mklk',
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
    }catch(err){
        console.log('errorrrr=',err);
    }
}

async function Updatefivetimemaster(req, res){
    try{
        var check = await update_fivetimemaster();
        if(check != null){
            resdata = {
                status: 200,
                message: 'list Successfully mklk',
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
    }catch(err){
        console.log('errorrrr=',err);
    }
}



module.exports = { Updatefourtimemaster ,Updatefivetimemaster}