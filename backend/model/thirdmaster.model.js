var Axios = require('axios');
const e = require("express");
const moment = require('moment');
var db = require("../config.js");
var async = require('async');
var { sch_expenceratio, sch_eqdetail, sch_fmpyielddetail, sch_avgmaturity ,sch_fvchange,sch_nameChange,
    sch_dailyFundmanager,sch_mergedschemes,sch_mFBULKDEALS,sch_assetalloc} = require('../schema/thirdmaster.schema');
// const fetch = require('node-fetch');dd2
let fetch = import('node-fetch');


async function thirdrawdatamaster(result) {
    try {
        var totalexpenceratioupdate = 0;
        //Scheme Expence Ratio URL
        var result1 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Expenceratio&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata1 = result1.data.Table
        // console.log("fffff",totaldata1.length)
        // // console.log("First ", totaldata1.length);
        // var totaldata1 = result1.data;
        // console.log(result1.data)
        for (var i = 0; i < totaldata1.length; i++) {
            const filter = {
                schemecode: totaldata1[i].schemecode,
                amc_code: totaldata1[i].amc_code,
                // schemecode: totaldata1[i].schemecode,

            };
            const updatedoc = {
                $set: {
                    amc_code: Number(totaldata1[i].amc_code),
                    schemecode: Number(totaldata1[i].schemecode),
                    date: moment(new Date(totaldata1[i].date)).format("YYYY-MM-DD"),
                    expratio: Number(totaldata1[i].expratio),
                    flag: totaldata1[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await sch_expenceratio.updateMany(filter, updatedoc, option);
            var n = result.n
            totalexpenceratioupdate = totalexpenceratioupdate + n;
        }
        // console.log("Total Scheme_Expence_Ratio Update=", totalexpenceratioupdate)

        var totalexpenceratioupdate = 0; var totaleqdetailupdate = 0;
        // Scheme EQ Detail URL
        var result2 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_eq_details&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata2 = result2.data.Table
        // console.log("sdfhgf",totaldata2.length)

        // console.log(totaldata2.length)
        // var totaldata2 = result2.data;
        // console.log(result2.data)
        for (var i = 0; i < totaldata2.length; i++) {
            const filter = {
                SchemeCode: totaldata2[i].SchemeCode,
                MonthEnd: totaldata2[i].MonthEnd,
            };
            const updatedoc = {
                $set: {
                    SchemeCode: Number(totaldata2[i].SchemeCode),
                    MonthEnd: Number(totaldata2[i].MonthEnd),
                    MCAP: Number(totaldata2[i].MCAP),
                    PE: Number(totaldata2[i].PE),
                    PB: Number(totaldata2[i].PB),
                    Div_Yield: Number(totaldata2[i].Div_Yield),
                    FLAG: totaldata2[i].FLAG,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await sch_eqdetail.updateMany(filter, updatedoc, option);
            var n = result.n
            totaleqdetailupdate = totaleqdetailupdate + n;
        }
        // console.log("Total Scheme_EQ_Detail Update=", totaleqdetailupdate)

        var totalexpenceratioupdate = 0; var totaleqdetailupdate = 0; var totalfmpyeilddetailupdate = 0;
        //Scheme EQ Detail URL
        var result3 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=fmp_yielddetails&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata3 = result3.data.Table
        // console.log("deepa",totaldata3.length)
        // var totaldata3 = result3.data;
        // console.log(result3.data)
        for (var i = 0; i < totaldata3.length; i++) {
            const filter = {
                schemecode: totaldata3[i].schemecode,
            };
            const updatedoc = {
                $set: {
                    schemecode: (Number(totaldata3[i].schemecode)) ? (Number(totaldata3[i].schemecode)) : (0),
                    maturitydate: moment(new Date(totaldata3[i].maturitydate)).format("YYYY-MM-DD"),
                    tenure_number: Number(totaldata3[i].tenure_number),
                    tenure_option: totaldata3[i].tenure_option,
                    net_inticative_yield1: Number(totaldata3[i].net_inticative_yield1),
                    net_inticative_yield2: Number(totaldata3[i].net_inticative_yield2),
                    post_taxyield_ind1: Number(totaldata3[i].post_taxyield_ind1),
                    post_taxyield_ind2: Number(totaldata3[i].post_taxyield_ind2),
                    post_taxyield_nonind1: Number(totaldata3[i].post_taxyield_nonind1),
                    post_taxyield_nonind2: Number(totaldata3[i].post_taxyield_nonind2),
                    exit_load: totaldata3[i].exit_load,
                    rollover: totaldata3[i].rollover,
                    maturitydate_after_rollover: moment(new Date(totaldata3[i].maturitydate_after_rollover)).format("YYYY-MM-DD"),
                    tenure_no_rollover: totaldata3[i].tenure_no_rollover,
                    tenure_option_rollover: totaldata3[i].tenure_option_rollover,
                    flag: totaldata3[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await sch_fmpyielddetail.updateMany(filter, updatedoc, option);
            var n = result.n
            totalfmpyeilddetailupdate = totalfmpyeilddetailupdate + n;
        }

        // console.log("Total Scheme_Fm_Pyeilddetail Update=", totalfmpyeilddetailupdate)



        
        var totalexpenceratioupdate = 0; var totaleqdetailupdate = 0; var totalfmpyeilddetailupdate = 0; var totalavgmaturityupdate = 0;
        //Scheme EQ Detail URL
        var result4 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Avg_maturity&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata4 = result4.data.Table
        // console.log("first",totaldata4.length)
        // var totaldata4 = result4.data;
        // console.log(result4.data)
        for (var i = 0; i < totaldata4.length; i++) {
            const filter = {
                amc_code: totaldata4[i].amc_code,
            };
            const updatedoc = {
                $set: {
                    amc_code: (Number(totaldata4[i].amc_code)),
                    schemecode: Number(totaldata4[i].schemecode),
                    date: moment(new Date(totaldata4[i].date)).format("YYYY-MM-DD"),
                    invenddate: moment(new Date(totaldata4[i].invenddate)).format("YYYY-MM-DD"),
                    avg_mat_num: (totaldata4[i].avg_mat_num),
                    avg_mat_days: (totaldata4[i].avg_mat_days),
                    mod_dur_num: (totaldata4[i].mod_dur_num),
                    mod_dur_days: (totaldata4[i].mod_dur_days),
                    ytm: (totaldata4[i].ytm),
                    turnover_ratio: Number(totaldata4[i].turnover_ratio),
                    tr_mode: totaldata4[i].tr_mode,
                    flag: totaldata4[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await sch_avgmaturity.updateMany(filter, updatedoc, option);
            var n = result.n
            totalavgmaturityupdate = totalavgmaturityupdate + n;
        }
        // console.log("Total Scheme_AVG_Maturity Update=", totalavgmaturityupdate)



        var totalexpenceratioupdate = 0; var totaleqdetailupdate = 0; var totalfmpyeilddetailupdate = 0; var totalavgmaturityupdate = 0; var totalfvchangeupdate = 0;
        //Scheme EQ Detail URL
        var result5 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Fvchange&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata5 = result5.data.Table
        // console.log("aloo",totaldata5.length)
        var totaldata5 = result5.data;
        // console.log(result5.data)
        for (var i = 0; i < totaldata5.length; i++) {
            const filter = {
                amc_code: totaldata5[i].amc_code,
            };
            const updatedoc = {
                $set: {
                    amc_code: (Number(totaldata5[i].amc_code)),
                    schemecode: Number(totaldata5[i].schemecode),
                    scheme_name: (totaldata5[i].scheme_name),
                    fvbefore: Number(totaldata5[i].fvbefore),
                    fvafter: Number(totaldata5[i].fvafter),
                    fvdate: moment(new Date(totaldata5[i].fvdate)).format("YYYY-MM-DD"),
                    flag: totaldata5[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await sch_fvchange.updateMany(filter, updatedoc, option);
            var n = result.n
            totalfvchangeupdate = totalfvchangeupdate + n;
        }
        // console.log("Total Scheme_fv_change Update=", totalfvchangeupdate)



        var totalexpenceratioupdate = 0; var totaleqdetailupdate = 0; var totalfmpyeilddetailupdate = 0; var totalavgmaturityupdate = 0; 
        var totalfvchangeupdate = 0; var totalnameChangeupdate = 0;
        //Scheme EQ Detail URL
        var result6 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_Name_Change&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata6 = result6.data.Table
        // console.log("pallavi maam",totaldata6.length)
        // var totaldata6 = result6.data;
        // console.log(result6.data)
        for (var i = 0; i < totaldata6.length; i++) {
            const filter = {
                Amc_Code: totaldata6[i].Amc_Code,
            };
            const updatedoc = {
                $set: {
                    Amc_Code: (Number(totaldata6[i].Amc_Code)),
                    SchemeCode: Number(totaldata6[i].SchemeCode),
                    Effectivedate: moment(new Date(totaldata6[i].Effectivedate)).format("YYYY-MM-DD"),
                    OldName: (totaldata6[i].OldName),
                    Newname: (totaldata6[i].Newname),
                    flag: totaldata6[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await sch_nameChange.updateMany(filter, updatedoc, option);
            var n = result.n
            totalnameChangeupdate = totalnameChangeupdate + n;
        }
        // console.log("Total Scheme_nameChange Update=", totalnameChangeupdate)


        var totalexpenceratioupdate = 0; var totaleqdetailupdate = 0; var totalfmpyeilddetailupdate = 0; var totalavgmaturityupdate = 0; 
        var totalfvchangeupdate = 0; var totalnameChangeupdate = 0; var totaldailyFundmanagerupdate = 0;
        //Scheme EQ Detail URL
        var result7 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=DailyFundmanager&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata7 = result7.data.Table
        // console.log("fgjhfg",totaldata7.length)
        // var totaldata7 = result7.data;
        // console.log(result7.data)
        for (var i = 0; i < totaldata7.length; i++) {
            const filter = {
                amc: totaldata7[i].amc,
            };
            const updatedoc = {
                $set: {
                    date:  moment(new Date(totaldata7[i].date)).format("YYYY-MM-DD"),
                    amc: Number(totaldata7[i].amc),
                    schemecode: Number(totaldata7[i].schemecode),
                    fundManger1: Number(totaldata7[i].fundManger1),
                    fundManger2: Number(totaldata7[i].fundManger2),
                    fundManger3: Number(totaldata7[i].fundManger3),
                    fundManger4: Number(totaldata7[i].fundManger4),
                    flag: totaldata7[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await sch_dailyFundmanager.updateMany(filter, updatedoc, option);
            var n = result.n
            totaldailyFundmanagerupdate = totaldailyFundmanagerupdate + n;
        }

        // console.log("Total Scheme_dailyFundmanager Update=", totaldailyFundmanagerupdate)

        
        var totalexpenceratioupdate = 0; var totaleqdetailupdate = 0; var totalfmpyeilddetailupdate = 0; var totalavgmaturityupdate = 0; 
        var totalfvchangeupdate = 0; var totalnameChangeupdate = 0; var totaldailyFundmanagerupdate = 0; var totalmergedschemesupdate = 0;
        //Scheme EQ Detail URL
        var result8 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Mergedschemes&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata8 = result8.data.Table
        // console.log("YTRG",totaldata6.length)
        // var totaldata8 = result8.data;
        // console.log(result8.data)
        for (var i = 0; i < totaldata8.length; i++) {
            const filter = {
                schemecode: totaldata8[i].schemecode,
            };
            const updatedoc = {
                $set: {
                    schemecode: Number(totaldata8[i].schemecode),
                    mergedwith: Number(totaldata8[i].mergedwith),
                    EFFECT_DATE:  moment(new Date(totaldata8[i].EFFECT_DATE)).format("YYYY-MM-DD"),
                    flag: totaldata8[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await sch_mergedschemes.updateMany(filter, updatedoc, option);
            var n = result.n
            totalmergedschemesupdate = totalmergedschemesupdate + n;
        }
        // console.log("Total Scheme_mergedschemes Update=", totalmergedschemesupdate)



         
        var totalexpenceratioupdate = 0; var totaleqdetailupdate = 0; var totalfmpyeilddetailupdate = 0; var totalavgmaturityupdate = 0; 
        var totalfvchangeupdate = 0; var totalnameChangeupdate = 0; var totaldailyFundmanagerupdate = 0; var totalmergedschemesupdate = 0; var totalmFBULKDEALSupdate = 0;
        //Scheme EQ Detail URL
        var result9 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=MFBULKDEALS&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata9 = result9.data.Table
        // console.log("suno",totaldata6.length)
        // var totaldata9 = result9.data;
        // console.log(result9.data)
        for (var i = 0; i < totaldata9.length; i++) {
            const filter = {
                fincode: totaldata9[i].fincode,
            };
            const updatedoc = {
                $set: {
                    fincode: Number(totaldata9[i].fincode),
                    date:  moment(new Date(totaldata9[i].date)).format("YYYY-MM-DD"),
                    exchange: (totaldata9[i].exchange),
                    clientname: (totaldata9[i].clientname),
                    type: (totaldata9[i].type),
                    mfcode: Number(totaldata9[i].mfcode),
                    dealtype: (totaldata9[i].dealtype),
                    volume: Number(totaldata9[i].volume),
                    price: Number(totaldata9[i].price),
                    flag: totaldata9[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await sch_mFBULKDEALS.updateMany(filter, updatedoc, option);
            var n = result.n
            totalmFBULKDEALSupdate = totalmFBULKDEALSupdate + n;
        }
        // console.log("Total Scheme_mFBULKDEALS Update=", totalmFBULKDEALSupdate)



        var totalexpenceratioupdate = 0; var totaleqdetailupdate = 0; var totalfmpyeilddetailupdate = 0; var totalavgmaturityupdate = 0; 
        var totalfvchangeupdate = 0; var totalnameChangeupdate = 0; var totaldailyFundmanagerupdate = 0; var totalmergedschemesupdate = 0; var totalmFBULKDEALSupdate = 0; var totalassetallocupdate = 0;
        //Scheme EQ Detail URL
        var result10 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_assetalloc&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata10 = result10.data.Table
        // console.log("bbbb",totaldata6.length)
        // var totaldata10 = result10.data;
        // console.log(result10.data)
        for (var i = 0; i < totaldata10.length; i++) {
            const filter = {
                schemeinv_id: totaldata10[i].schemeinv_id,
            };
            const updatedoc = {
                $set: {
                    schemeinv_id: Number(totaldata10[i].schemeinv_id),
                    schemecode: Number(totaldata10[i].schemecode),
                    investment: (totaldata10[i].investment),
                    mininv: Number(totaldata10[i].mininv),
                    maxinv: Number(totaldata10[i].maxinv),
                    flag: totaldata10[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await sch_assetalloc.updateMany(filter, updatedoc, option);
            var n = result.n
            totalassetallocupdate = totalassetallocupdate + n;
        }
        // console.log("Total Scheme_Assetalloc Update=", totalassetallocupdate)
    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}















module.exports = { thirdrawdatamaster }