var db = require('../config.js');
var Axios = require('axios');
var async = require('async');
let fetch = import('node-fetch');
var { amc_mst } = require('../schema/amc.schema');

async function GetAllamcList(){
    try{
        var tottalamcmstdateupdate = 0;
        var result3 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Amc_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
    
        var totaldata3 = result3.data.Table
        // console.log("Second ", totaldata3.length);
        // var totaldata3 = result3.data;
        // console.log(result3.data)
        for (var i = 0; i < totaldata3.length; i++) {
            // console.log(totaldata3[i].amc_code);
            const filter = {
                amc_code: totaldata3[i].amc_code,
            };
            const updatedoc = {
                $set: {
                    amc_code: totaldata3[i].amc_code,
                    amc: totaldata3[i].amc,
                    email: totaldata3[i].email,
                    s_name: totaldata3[i].s_name,
                    amc_symbol: totaldata3[i].amc_symbol,
                    rtamccode: totaldata3[i].rtamccode,
                    flag: totaldata3[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await amc_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalamcmstdateupdate = tottalamcmstdateupdate + n;
        }
        console.log("total Scheme_amcmstdate update=", tottalamcmstdateupdate)
    }catch(error){
        console.log("err=",error);
    }
}

module.exports = { GetAllamcList}