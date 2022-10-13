var Axios = require('axios');
const e = require("express");
const moment = require('moment');
var db = require("../config.js");
var async = require('async');
var { amc_keypersons, amc_mst, amc_paum, asect_mst, cust_mst, div_details ,div_mst} = require('../schema/onetime.schema');



async function update_onetimemaster(result) {
    try {
        var AMC_KeyPerson = await update_amckeyperson();
        console.log("AMC_KeyPerson=", AMC_KeyPerson)

        var AMC_Mst = await update_amcmst();
        console.log("AMC_Mst=", AMC_Mst)

        var AMC_Paum = await update_amcpaum();
        console.log("AMC_Paum=", AMC_Paum)

        var ASECT_Mst = await update_asectmst();
        console.log("ASECT_Mst=", ASECT_Mst)

        var CUST_Mst = await update_custmst();
        console.log("CUST_Mst=", CUST_Mst)

        var DIV_Detail = await update_divdetail();
        console.log("DIV_Detail=", DIV_Detail)

        var DIV_Mst = await update_divmst();
        console.log("DIV_Mst=", DIV_Mst)
    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}


async function update_amckeyperson() {
    try {
        var tottalamckeypersonsupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Amc_keypersons&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')

        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                amc_code: totaldata[i].amc_code,
                amc_name: totaldata[i].amc_name,
                name: totaldata[i].name,
                desig: totaldata[i].desig,
                srno: totaldata[i].srno,
            };
            const updatedoc = {
                $set: {
                    amc_code: totaldata[i].amc_code,
                    amc_name: totaldata[i].amc_name,
                    srno: totaldata[i].srno,
                    name: totaldata[i].name,
                    desig: totaldata[i].desig,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await amc_keypersons.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalamckeypersonsupdate = tottalamckeypersonsupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalamckeypersonsupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_amcmst() {
    try {
        var tottalamcmstdateupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Amc_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')

        var totaldata = apiresponse.data.Table
        console.log(totaldata.length,)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                amc_code: totaldata[i].amc_code,
                amc: totaldata[i].amc,
                s_name: totaldata[i].s_name,
                rtamccode: totaldata[i].rtamccode,
                fund: totaldata[i].fund,
                amc_symbol: totaldata[i].amc_symbol,
            };
            const updatedoc = {
                $set: {
                    amc_code: totaldata[i].amc_code,
                    amc: totaldata[i].amc,
                    fund: totaldata[i].fund,
                    srno: totaldata[i].srno,
                    office_type: totaldata[i].office_type,
                    add1: totaldata[i].add1,
                    add2: totaldata[i].add2,
                    add3: totaldata[i].add3,
                    email: totaldata[i].email,
                    phone: totaldata[i].phone,
                    fax: totaldata[i].fax,
                    webiste: totaldata[i].webiste,
                    setup_date: totaldata[i].setup_date,
                    mf_type: totaldata[i].mf_type,
                    trustee_name: totaldata[i].trustee_name,
                    sponsor_name: totaldata[i].sponsor_name,
                    amc_inc_date: totaldata[i].amc_inc_date,
                    s_name: totaldata[i].s_name,
                    amc_symbol: totaldata[i].amc_symbol,
                    city: totaldata[i].city,
                    rtamccode: totaldata[i].rtamccode,
                    flag: totaldata[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await amc_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalamcmstdateupdate = tottalamcmstdateupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalamcmstdateupdate
        }
        return resdata;
    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_amcpaum() {
    try {
        var tottalamcpaumdateupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Amc_paum&date=16082021&section=MFPortfolio&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                amc_code: totaldata[i].amc_code,
                totalaum: totaldata[i].totalaum,
            };
            const updatedoc = {
                $set: {
                    amc_code: totaldata[i].amc_code,
                    aumdate: totaldata[i].aumdate,
                    totalaum: totaldata[i].totalaum,
                    FLAG: totaldata[i].FLAG,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await amc_paum.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalamcpaumdateupdate = tottalamcpaumdateupdate + n;
        }

        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalamcpaumdateupdate
        }
        return resdata;


    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_asectmst() {
    try {
        var tottalasectmstupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Asect_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                asect_code: totaldata[i].asect_code,
                asect_type: totaldata[i].asect_type,
                asset: totaldata[i].asset,
                as_name: totaldata[i].as_name,
            };
            const updatedoc = {
                $set: {
                    asect_code: totaldata[i].asect_code,
                    asect_type: totaldata[i].asect_type,
                    asset: totaldata[i].asset,
                    as_name: totaldata[i].as_name,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await asect_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalasectmstupdate = tottalasectmstupdate + n;

        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalasectmstupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }


}

async function update_custmst() {
    try {
        var tottalcustmstupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Cust_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                cust_code: totaldata[i].cust_code,
                cust_name: totaldata[i].cust_name,
                sebi_reg_no: totaldata[i].sebi_reg_no,
            };
            const updatedoc = {
                $set: {
                    cust_code: totaldata[i].cust_code,
                    cust_name: totaldata[i].cust_name,
                    sebi_reg_no: totaldata[i].sebi_reg_no,
                    add1: totaldata[i].add1,
                    add2: totaldata[i].add2,
                    add3: totaldata[i].add3,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await cust_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalcustmstupdate = tottalcustmstupdate + n;

        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalcustmstupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_divdetail() {
    try {
        var tottaldivdetailsupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Divdetails&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table;
        console.log(totaldata.length);
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                amc_code: totaldata[i].amc_code,
                schemecode: totaldata[i].schemecode,
                div_code: totaldata[i].div_code,
                status: totaldata[i].status,
                recorddate: totaldata[i].recorddate,
                exdivdate: totaldata[i].exdivdate,
            };
            const updatedoc = {
                $set: {
                    amc_code: totaldata[i].amc_code,
                    schemecode: totaldata[i].schemecode,
                    recorddate: totaldata[i].recorddate,
                    div_code: totaldata[i].div_code,
                    exdivdate: totaldata[i].exdivdate,
                    Bonusrate1: totaldata[i].Bonusrate1,
                    Bonusrate2: totaldata[i].Bonusrate2,
                    gross: totaldata[i].gross,
                    corporate: totaldata[i].corporate,
                    noncorporate: totaldata[i].noncorporate,
                    status: totaldata[i].status,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await div_details.updateMany(filter, updatedoc, option);
            var n = result.n
            tottaldivdetailsupdate = tottaldivdetailsupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottaldivdetailsupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_divmst() {
    try {
        var tottaldivmstupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Div_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
          var totaldata = apiresponse.data.Table
         for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                div_code: totaldata[i].div_code,
                div_type: totaldata[i].div_type,

            };
            const updatedoc = {
                $set: {
                    div_code: totaldata[i].div_code,
                    div_type: totaldata[i].div_type,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await div_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottaldivmstupdate = tottaldivmstupdate + n;

        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottaldivmstupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}






module.exports = { update_onetimemaster }