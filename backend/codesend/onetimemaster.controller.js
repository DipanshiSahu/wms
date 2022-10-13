var { update_onetimemaster } = require('../model/onetime.model');

async function Updateonetimemaster(req, res){
    try{
        var check = await update_onetimemaster();
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



module.exports = { Updateonetimemaster }