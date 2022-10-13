var { GetAllamcList } = require('../model/allamc.model');

async function GetAllamc(req,res){

    try{
        const list = await GetAllamcList();
            resdata = {
                status: 200,
                message: 'list found',
                data: list
            }
            res.json(resdata);
    }catch(error){
        console.log("err=",error);
    }
}

module.exports = { GetAllamc };