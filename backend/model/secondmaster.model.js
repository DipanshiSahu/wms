var Axios = require('axios');
const e = require("express");
const moment = require('moment');
var db = require("../config.js");
var async = require('async');
var { mf_portfolio, amc_aum, scheme_aum, portfolio_inout, sect_allocation, amc_paum, scheme_paum, avg_scheme_aum, current_nav,
    nav_hist, navhist_HL, mf_return, mf_abs_return, mf_ans_return, class_WiseReturn, mf_ratio, mF_Ratios_DefaultBM, bM_AbsoluteReturn, bM_AnnualisedReturn, div_details
} = require('../schema/secondmaster.schema');
// const fetch = require('node-fetch');dd2
let fetch = import('node-fetch');



async function secondrowdatamaster(result) {
    try {
        var tottalmfportfoliodateupdate = 0;
        var result1 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Mf_portfolio&date=16082021&section=MFPortfolio&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await result2.json();
        // console.log(result2.data)
        // return false;
        var totaldata1 = result1.data.Table
        // console.log(result1.data.Table)
        // console.log("gfjgfj ", totaldata1.length);
        // var totaldata1 = result1.data;
        // console.log(result1.data)
        for (var i = 0; i < totaldata1.length; i++) {
            // console.log(totaldata1[i].schemecode);
            const filter = {
                schemecode: totaldata1[i].schemecode,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata1[i].schemecode,
                    invdate: totaldata1[i].invdate,
                    invenddate: totaldata1[i].invenddate,
                    srno: totaldata1[i].srno,
                    fincode: totaldata1[i].fincode,
                    ASECT_CODE: totaldata1[i].ASECT_CODE,
                    sect_code: totaldata1[i].sect_code,
                    noshares: totaldata1[i].noshares,
                    mktval: totaldata1[i].mktval,
                    aum: totaldata1[i].aum,
                    holdpercentage: totaldata1[i].holdpercentage,
                    compname: totaldata1[i].compname,
                    sect_name: totaldata1[i].sect_name,
                    asect_name: totaldata1[i].asect_name,
                    rating: totaldata1[i].rating,
                    flag: totaldata1[i].flag,


                },
            };
            const option = {
                upsert: true,
            };
            const result = await mf_portfolio.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalmfportfoliodateupdate = tottalmfportfoliodateupdate + n;
        }

        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0;
        var result2 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=amc_aum&date=16082021&section=MFPortfolio&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await result2.json();
        // console.log(result2.data)
        // return false;
        var totaldata2 = result2.data.Table
        // console.log(result2.data.Table)
        // console.log("Second ", totaldata2.length);
        // var totaldata2 = result2.data;
        // console.log(result2.data)
        for (var i = 0; i < totaldata2.length; i++) {
            // console.log(totaldata2[i].amc_code);
            const filter = {
                amc_code: totaldata2[i].amc_code,
            };
            const updatedoc = {
                $set: {
                    amc_code: totaldata2[i].amc_code,
                    aumdate: totaldata2[i].aumdate,
                    totalaum: totaldata2[i].totalaum,
                    flag: totaldata2[i].flag,



                },
            };
            const option = {
                upsert: true,
            };
            const result = await amc_aum.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalamcaumdateupdate = tottalamcaumdateupdate + n;
        }


        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0; var tottalschemeaumdateupdate = 0;
        var result3 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=scheme_aum&date=16082021&section=MFPortfolio&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await result3.json();
        // console.log(result3.data)
        // return false;
        var totaldata3 = result3.data.Table
        // console.log(result3.data.Table)
        // console.log("sdssh ", totaldata3.length);
        // var totaldata3 = result3.data;
        // console.log(result3.data)
        for (var i = 0; i < totaldata3.length; i++) {
            // console.log(totaldata3[i].schemecode);
            const filter = {
                schemecode: totaldata3[i].schemecode,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata3[i].schemecode,
                    date: totaldata3[i].date,
                    exfof: totaldata3[i].exfof,
                    fof: totaldata3[i].fof,
                    total: totaldata3[i].total,
                    flag: totaldata3[i].flag,



                },
            };
            const option = {
                upsert: true,
            };
            const result = await scheme_aum.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalschemeaumdateupdate = tottalschemeaumdateupdate + n;
        }


        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0; var tottalschemeaumdateupdate = 0; var tottalportfolioinoutdateupdate = 0;
        var result4 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Portfolio_inout&date=16082021&section=MFPortfolio&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await result4.json();
        // console.log(result4.data)
        // return false;
        var totaldata4 = result4.data.Table
        // console.log(result4.data.Table)
        // console.log("Second ", totaldata4.length);
        // var totaldata4 = result4.data;
        // console.log(result4.data)
        for (var i = 0; i < totaldata4.length; i++) {
            // console.log(totaldata4[i].fincode);
            const filter = {
                fincode: totaldata4[i].fincode,
            };
            const updatedoc = {
                $set: {
                    fincode: totaldata4[i].fincode,
                    invdate: totaldata4[i].invdate,
                    mode: totaldata4[i].mode,
                    compname: totaldata4[i].compname,
                    s_name: totaldata4[i].s_name,
                    mktval: totaldata4[i].mktval,
                    noshares: totaldata4[i].noshares,
                    flag: totaldata4[i].flag,



                },
            };
            const option = {
                upsert: true,
            };
            const result = await portfolio_inout.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalportfolioinoutdateupdate = tottalportfolioinoutdateupdate + n;
        }


        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0; var tottalschemeaumdateupdate = 0; var tottalportfolioinoutdateupdate = 0; var tottalsectallocationdateupdate = 0;
        var result5 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=sect_allocation&date=16082021&section=MFPortfolio&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await result5.json();
        // console.log(result5.data)
        // return false;
        var totaldata5 = result5.data.Table
        // console.log(result5.data.Table)
        // console.log("ngchg ", totaldata5.length);
        // var totaldata5 = result5.data;
        // console.log(result5.data)
        for (var i = 0; i < totaldata5.length; i++) {
            // console.log(totaldata5[i].Amc_Code);
            const filter = {
                InvDate: totaldata5[i].InvDate,
            };
            const updatedoc = {
                $set: {
                    Amc_Code: totaldata5[i].Amc_Code,
                    SchemeCode: totaldata5[i].SchemeCode,
                    InvDate: totaldata5[i].InvDate,
                    InvEndDate: totaldata5[i].InvEndDate,
                    Srno: totaldata5[i].Srno,
                    SECT_CODE: totaldata5[i].SECT_CODE,
                    SECT_NAME: totaldata5[i].SECT_NAME,
                    Asect_Code: totaldata5[i].Asect_Code,
                    Perc_Hold: totaldata5[i].Perc_Hold,
                    VALUE: totaldata5[i].VALUE,
                    AUM: totaldata5[i].AUM,
                    Flag: totaldata5[i].Flag,



                },
            };
            const option = {
                upsert: true,
            };
            const result = await sect_allocation.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalsectallocationdateupdate = tottalsectallocationdateupdate + n;
        }


        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0; var tottalschemeaumdateupdate = 0; var tottalportfolioinoutdateupdate = 0; var tottalsectallocationdateupdate = 0; var tottalamcpaumdateupdate = 0;
        var result6 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Amc_paum&date=16082021&section=MFPortfolio&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await result6.json();
        // console.log(result6.data)
        // return false;
        var totaldata6 = result6.data.Table
        // console.log(result6.data.Table)
        // console.log("ghj ", totaldata6.length);
        // var totaldata6 = result6.data;
        // console.log(result6.data)
        for (var i = 0; i < totaldata6.length; i++) {
            // console.log(totaldata6[i].amc_code);
            const filter = {
                totalaum: totaldata6[i].totalaum,
            };
            const updatedoc = {
                $set: {
                    amc_code: totaldata6[i].amc_code,
                    aumdate: totaldata6[i].aumdate,
                    totalaum: totaldata6[i].totalaum,
                    FLAG: totaldata6[i].FLAG,



                },
            };
            const option = {
                upsert: true,
            };
            const result = await amc_paum.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalamcpaumdateupdate = tottalamcpaumdateupdate + n;
        }



        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0; var tottalschemeaumdateupdate = 0; var tottalportfolioinoutdateupdate = 0;
        var tottalsectallocationdateupdate = 0; var tottalamcpaumdateupdate = 0; var tottalschemepaumdateupdate = 0;
        var result7 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_paum&date=16082021&section=MFPortfolio&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await result7.json();
        // console.log(result7.data)
        // return false;
        var totaldata7 = result7.data.Table
        // console.log(result7.data.Table)
        // console.log("ht ", totaldata7.length);
        // var totaldata7 = result7.data;
        // console.log(result7.data)
        for (var i = 0; i < totaldata7.length; i++) {
            // console.log(totaldata7[i].schemecode);
            const filter = {
                aum: totaldata7[i].aum,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata7[i].schemecode,
                    monthend: totaldata7[i].monthend,
                    amc_code: totaldata7[i].amc_code,
                    aum: totaldata7[i].aum,
                    flag: totaldata7[i].flag,



                },
            };
            const option = {
                upsert: true,
            };
            const result = await scheme_paum.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalschemepaumdateupdate = tottalschemepaumdateupdate + n;
        }



        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0; var tottalschemeaumdateupdate = 0; var tottalportfolioinoutdateupdate = 0;
        var tottalsectallocationdateupdate = 0; var tottalamcpaumdateupdate = 0; var tottalschemepaumdateupdate = 0; var tottalavgschemeaumdateupdate = 0;
        var result8 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Avg_scheme_aum&date=16082021&section=MFPortfolio&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await result8.json();
        // console.log(result8.data)
        // return false;
        var totaldata8 = result8.data.Table
        // console.log(result8.data.Table)
        // console.log("kk ", totaldata8.length);
        // var totaldata8 = result8.data;
        // console.log(result8.data)
        for (var i = 0; i < totaldata8.length; i++) {
            // console.log(totaldata8[i].schemecode);
            const filter = {
                exfof: totaldata8[i].exfof,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata8[i].schemecode,
                    date: totaldata8[i].date,
                    exfof: totaldata8[i].exfof,
                    fof: totaldata8[i].fof,
                    total: totaldata8[i].total,
                    flag: totaldata8[i].flag,



                },
            };
            const option = {
                upsert: true,
            };
            const result = await avg_scheme_aum.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalavgschemeaumdateupdate = tottalavgschemeaumdateupdate + n;
        }



        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0; var tottalschemeaumdateupdate = 0; var tottalportfolioinoutdateupdate = 0;
        var tottalsectallocationdateupdate = 0; var tottalamcpaumdateupdate = 0; var tottalschemepaumdateupdate = 0; var tottalavgschemeaumdateupdate = 0;
        var tottalcurrentnavdateupdate = 0;
        var result9 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Currentnav&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await result9.json();
        // console.log(result9.data)
        // return false;
        var totaldata9 = result9.data.Table
        // console.log(result9.data.Table)
        // console.log("hjfh ", totaldata9.length);
        // var totaldata9 = result9.data;
        // console.log(result9.data)
        for (var i = 0; i < totaldata9.length; i++) {
            // console.log(totaldata9[i].schemecode);
            const filter = {
                saleprice: totaldata9[i].saleprice,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata9[i].schemecode,
                    navdate: totaldata9[i].navdate,
                    navrs: totaldata9[i].navrs,
                    repurprice: totaldata9[i].repurprice,
                    saleprice: totaldata9[i].saleprice,
                    cldate: totaldata9[i].cldate,
                    change: totaldata9[i].change,
                    netchange: totaldata9[i].netchange,
                    prevnav: totaldata9[i].prevnav,
                    prenavdate: totaldata9[i].prenavdate,
                    flag: totaldata9[i].flag,



                },
            };
            const option = {
                upsert: true,
            };
            const result = await current_nav.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalcurrentnavdateupdate = tottalcurrentnavdateupdate + n;
        }



        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0; var tottalschemeaumdateupdate = 0; var tottalportfolioinoutdateupdate = 0;
        var tottalsectallocationdateupdate = 0; var tottalamcpaumdateupdate = 0; var tottalschemepaumdateupdate = 0; var tottalavgschemeaumdateupdate = 0;
        var tottalcurrentnavdateupdate = 0; var tottalnavhistdateupdate = 0;
        var result10 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Navhist&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await resu;l.json();
        // console.log(resu;l.data)
        // return false;
        var totaldata10 = result10.data.Table
        // console.log(result10.data.Table)
        // console.log("gh ", totaldata10.length);
        // var totaldata10 = result10.data;
        // console.log(result10.data)
        for (var i = 0; i < totaldata10.length; i++) {
            // console.log(totaldata10[i].schemecode);
            const filter = {
                adjustednav_c: totaldata10[i].adjustednav_c,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata10[i].schemecode,
                    navdate: totaldata10[i].navdate,
                    navrs: totaldata10[i].navrs,
                    repurprice: totaldata10[i].repurprice,
                    saleprice: totaldata10[i].saleprice,
                    adjustednav_c: totaldata10[i].adjustednav_c,
                    adjustednav_nonc: totaldata10[i].adjustednav_nonc,
                    flag: totaldata10[i].flag,



                },
            };
            const option = {
                upsert: true,
            };
            const result = await nav_hist.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalnavhistdateupdate = tottalnavhistdateupdate + n;
        }



        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0; var tottalschemeaumdateupdate = 0; var tottalportfolioinoutdateupdate = 0;
        var tottalsectallocationdateupdate = 0; var tottalamcpaumdateupdate = 0; var tottalschemepaumdateupdate = 0; var tottalavgschemeaumdateupdate = 0;
        var tottalcurrentnavdateupdate = 0; var tottalnavhistdateupdate = 0; var tottalnavhistHLdateupdate = 0;
        var result11 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Navhist_HL&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await resu;l.json();
        // console.log(resu;l.data)
        // return false;
        var totaldata11 = result11.data.Table
        //  console.log("uuuuuuu=",typeof totaldata11)
        // console.log("ghg ", totaldata11.length);
        // var totaldata11 = result11.data;
        // console.log(result11.data)
        for (var i = 0; i < totaldata11.length; i++) {
            // console.log(totaldata11[i].ninemonthhhigh);
            const filter = {
                schemecode: totaldata11[i].schemecode,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata11[i]["schemecode"],
                    threemonthlow: totaldata11[i]["3monthlow"],
                    threemonthhhigh: totaldata11[i]['3monthhhigh'],
                    threemhdate: totaldata11[i]["3mhdate"],
                    threemldate: totaldata11[i]["3mldate"],
                    sixmonthhhigh: totaldata11[i]["6monthhhigh"],
                    sixmonthlow: totaldata11[i]["6monthlow"],
                    sixmhdate: totaldata11[i]["6mhdate"],
                    sixmldate: totaldata11[i]["6mldate"],
                    ninemonthhhigh: totaldata11[i]["9monthhhigh"],
                    ninemonthlow: totaldata11[i]["9monthlow"],
                    ninemhdate: totaldata11[i]["9mhdate"],
                    ninemldate: totaldata11[i]["9mldate"],
                    fiftytwoweekhhigh: totaldata11[i]["52weekhhigh"],
                    fiftytwoweeklow: totaldata11[i]["52weeklow"],
                    fiftytwowhdate: totaldata11[i]["52whdate"],
                    fiftytwowldate: totaldata11[i]["52wldate"],
                    oneyrhigh: totaldata11[i]["1yrhigh"],
                    oneyrlow: totaldata11[i]["1yrlow"],
                    oneyhdate: totaldata11[i]["1yhdate"],
                    oneyldate: totaldata11[i]["1yldate"],
                    twoyrhigh: totaldata11[i]["2yrhigh"],
                    twoyrlow: totaldata11[i]["2yrlow"],
                    twoyhdate: totaldata11[i]["2yhdate"],
                    twoyldate: totaldata11[i]["2yldate"],
                    threeyrhigh: totaldata11[i]["3yrhigh"],
                    threeyrlow: totaldata11[i]["3yrlow"],
                    threeyhdate: totaldata11[i]["3yhdate"],
                    threeyldate: totaldata11[i]["3yldate"],
                    fiveyrhigh: totaldata11[i]["5yrhigh"],
                    fiveyrlow: totaldata11[i]["5yrlow"],
                    fiveyhdate: totaldata11[i]["5yhdate"],
                    fiveyldate: totaldata11[i]["5yldate"],
                    ytdhigh: totaldata11[i]["ytdhigh"],
                    ytdlow: totaldata11[i]["ytdlow"],
                    ytdhdate: totaldata11[i]["ytdhdate"],
                    ytdldate: totaldata11[i]["ytdldate"],
                    sihigh: totaldata11[i]["sihigh"],
                    siLow: totaldata11[i]["siLow"],
                    sihdate: totaldata11[i]["sihdate"],
                    sildate: totaldata11[i]["sildate"],
                    flag: totaldata11[i]["flag"],
                },
            };
            const option = {
                upsert: true,
            };
            const result = await navhist_HL.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalnavhistHLdateupdate = tottalnavhistHLdateupdate + n;
        }



        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0; var tottalschemeaumdateupdate = 0; var tottalportfolioinoutdateupdate = 0;
        var tottalsectallocationdateupdate = 0; var tottalamcpaumdateupdate = 0; var tottalschemepaumdateupdate = 0; var tottalavgschemeaumdateupdate = 0;
        var tottalcurrentnavdateupdate = 0; var tottalnavhistdateupdate = 0; var tottalnavhistHLdateupdate = 0; var tottalmfreturndateupdate = 0;
        var result12 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Mf_return&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await resu;l.json();
        // console.log(resu;l.data)
        // return false;
        var totaldata12 = result12.data.Table
        // console.log(result12.data.Table)
        //  console.log("uuuuuuu=", totaldata12.length)
        // var totaldata12 = result12.data;
        // console.log(result12.data)
        for (var i = 0; i < totaldata12.length; i++) {
            // console.log(totaldata12[i].schemecode);
            const filter = {
                schemecode: totaldata12[i].schemecode,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata12[i]["schemecode"],
                    c_date: totaldata12[i]["c_date"],
                    p_date: totaldata12[i]["p_date"],
                    c_nav: totaldata12[i]["c_nav"],
                    p_nav: totaldata12[i]["p_nav"],
                    onedayret: totaldata12[i]["1dayret"],
                    oneweekdate: totaldata12[i]["1weekdate"],
                    oneweeknav: totaldata12[i]["1weeknav"],
                    oneweekret: totaldata12[i]["1weekret"],
                    onemthdate: totaldata12[i]["1mthdate"],
                    onemthnav: totaldata12[i]["1mthnav"],
                    onemonthret: totaldata12[i]["1monthret"],
                    threemthdate: totaldata12[i]["3mthdate"],
                    threemthnav: totaldata12[i]["3mthnav"],
                    threemonthret: totaldata12[i]["3monthret"],
                    sixmntdate: totaldata12[i]["6mntdate"],
                    sixmnthnav: totaldata12[i]["6mnthnav"],
                    sixmonthret: totaldata12[i]["6monthret"],
                    ninemnthdate: totaldata12[i]["9mnthdate"],
                    ninemnthnav: totaldata12[i]["9mnthnav"],
                    ninemnthret: totaldata12[i]["9mnthret"],
                    oneyrdate: totaldata12[i]["1yrdate"],
                    oneyrnav: totaldata12[i]["1yrnav"],
                    oneyrret: totaldata12[i]["1yrret"],
                    twoyrdate: totaldata12[i]["2yrdate"],
                    twoyrnav: totaldata12[i]["2yrnav"],
                    twoyearret: totaldata12[i]["2yearret"],
                    threeyrdate: totaldata12[i]["3yrdate"],
                    threeyrnav: totaldata12[i]["3yrnav"],
                    threeyearret: totaldata12[i]["3yearret"],
                    fouryrdate: totaldata12[i]["4yrdate"],
                    fouryrnav: totaldata12[i]["4yrnav"],
                    fouryearret: totaldata12[i]["4yearret"],
                    fiveyrdate: totaldata12[i]["5yrdate"],
                    fiveyrnav: totaldata12[i]["5yrnav"],
                    fiveyearret: totaldata12[i]["5yearret"],
                    incdate: totaldata12[i]["incdate"],
                    incnav: totaldata12[i]["incnav"],
                    incret: totaldata12[i]["incret"],
                    flag: totaldata12[i]["flag"],



                },
            };
            const option = {
                upsert: true,
            };
            const result = await mf_return.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalmfreturndateupdate = tottalmfreturndateupdate + n;
        }


        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0; var tottalschemeaumdateupdate = 0; var tottalportfolioinoutdateupdate = 0;
        var tottalsectallocationdateupdate = 0; var tottalamcpaumdateupdate = 0; var tottalschemepaumdateupdate = 0; var tottalavgschemeaumdateupdate = 0;
        var tottalcurrentnavdateupdate = 0; var tottalnavhistdateupdate = 0; var tottalnavhistHLdateupdate = 0; var tottalmfreturndateupdate = 0; var tottalmfabsreturndateupdate = 0;
        var result13 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Mf_abs_return&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await resu;l.json();
        // console.log(resu;l.data)
        // return false;
        var totaldata13 = result13.data.Table;
        // console.log(result13.data.Table)
        // console.log("fhhh ", totaldata13.length);
        // var totaldata13 = result13.data;
        // console.log(result13.data)
        for (var i = 0; i < totaldata13.length; i++) {
            // console.log(totaldata13[i].schemecode);
            const filter = {
                schemecode: totaldata13[i].schemecode,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata13[i]["schemecode"],
                    c_date: totaldata13[i]["c_date"],
                    p_date: totaldata13[i]["p_date"],
                    c_nav: totaldata13[i]["c_nav"],
                    p_nav: totaldata13[i]["p_nav"],
                    onedayret: totaldata13[i]["1dayret"],
                    oneweekdate: totaldata13[i]["1weekdate"],
                    oneweeknav: totaldata13[i]["1weeknav"],
                    oneweekret: totaldata13[i]["1weekret"],
                    onemthdate: totaldata13[i]["1mthdate"],
                    onemthnav: totaldata13[i]["1mthnav"],
                    onemonthret: totaldata13[i]["1monthret"],
                    threemthdate: totaldata13[i]["1mthdate"],
                    threemthnav: totaldata13[i]["3mthnav"],
                    threemonthret: totaldata13[i]["3monthret"],
                    sixmntdate: totaldata13[i]["6mntdate"],
                    sixmnthnav: totaldata13[i]["6mnthnav"],
                    sixmonthret: totaldata13[i]["6monthret"],
                    ninemnthdate: totaldata13[i]["9mnthdate"],
                    ninemnthnav: totaldata13[i]["9mnthnav"],
                    ninemnthret: totaldata13[i]["9mnthret"],
                    oneyrdate: totaldata13[i]["1yrdate"],
                    oneyrnav: totaldata13[i]["1yrnav"],
                    oneyrret: totaldata13[i]["1yrret"],
                    twoyrdate: totaldata13[i]["2yrdate"],
                    twoyrnav: totaldata13[i]["2yrnav"],
                    twoyearret: totaldata13[i]["2yearret"],
                    threeyrdate: totaldata13[i]["3yrdate"],
                    threeyrnav: totaldata13[i]["3yrnav"],
                    threeyearret: totaldata13[i]["3yearret"],
                    fouryrdate: totaldata13[i]["4yrdate"],
                    fouryrnav: totaldata13[i]["4yrnav"],
                    fouryearret: totaldata13[i]["4yearret"],
                    fiveyrdate: totaldata13[i]["5yrdate"],
                    fiveyrnav: totaldata13[i]["5yrnav"],
                    fiveyearret: totaldata13[i]["5yearret"],
                    incdate: totaldata13[i]["incdate"],
                    incnav: totaldata13[i]["incnav"],
                    incret: totaldata13[i]["incret"],
                    flag: totaldata13[i]["flag"],



                },
            };
            const option = {
                upsert: true,
            };
            const result = await mf_abs_return.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalmfabsreturndateupdate = tottalmfabsreturndateupdate + n;
        }



        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0; var tottalschemeaumdateupdate = 0; var tottalportfolioinoutdateupdate = 0;
        var tottalsectallocationdateupdate = 0; var tottalamcpaumdateupdate = 0; var tottalschemepaumdateupdate = 0; var tottalavgschemeaumdateupdate = 0;
        var tottalcurrentnavdateupdate = 0; var tottalnavhistdateupdate = 0; var tottalnavhistHLdateupdate = 0; var tottalmfreturndateupdate = 0; var tottalmfabsreturndateupdate = 0; var tottalmfansreturndateupdate = 0;
        var result14 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Mf_ans_return&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await resu;l.json();
        // console.log(resu;l.data)
        // return false;
        var totaldata14 = result14.data.Table;
        // console.log(result14.data.Table)
        // console.log("vcc", totaldata14.length);
        // var totaldata14 = result14.data;
        // console.log(result14.data)
        for (var i = 0; i < totaldata14.length; i++) {
            // console.log(totaldata14[i].schemecode);
            const filter = {
                schemecode: totaldata14[i].schemecode,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata14[i]["schemecode"],
                    c_date: totaldata14[i]["c_date"],
                    p_date: totaldata14[i]["p_date"],
                    c_nav: totaldata14[i]["c_nav"],
                    p_nav: totaldata14[i]["p_nav"],
                    onedayret: totaldata14[i]["1dayret"],
                    oneweekdate: totaldata14[i]["1weekdate"],
                    oneweeknav: totaldata14[i]["1weeknav"],
                    oneweekret: totaldata14[i]["1weekret"],
                    onemthdate: totaldata14[i]["1mthdate"],
                    onemthnav: totaldata14[i]["1mthnav"],
                    onemonthret: totaldata14[i]["1monthret"],
                    threemthdate: totaldata14[i]["3mthdate"],
                    threemthnav: totaldata14[i]["3mthnav"],
                    threemonthret: totaldata14[i]["3monthret"],
                    sixmntdate: totaldata14[i]["6mntdate"],
                    sixmnthnav: totaldata14[i]["6mnthnav"],
                    sixmonthret: totaldata14[i]["6monthret"],
                    ninemnthdate: totaldata14[i]["9mnthdate"],
                    ninemnthnav: totaldata14[i]["9mnthnav"],
                    ninemnthret: totaldata14[i]["9mnthret"],
                    oneyrdate: totaldata14[i]["1yrdate"],
                    oneyrnav: totaldata14[i]["1yrnav"],
                    oneyrret: totaldata14[i]["1yrret"],
                    twoyrdate: totaldata14[i]["2yrdate"],
                    twoyrnav: totaldata14[i]["2yrnav"],
                    twoyearret: totaldata14[i]["2yearret"],
                    threeyrdate: totaldata14[i]["3yrdate"],
                    threeyrnav: totaldata14[i]["3yrnav"],
                    threeyearret: totaldata14[i]["3yearret"],
                    fouryrdate: totaldata14[i]["4yrdate"],
                    fouryrnav: totaldata14[i]["4yrnav"],
                    fouryearret: totaldata14[i]["4yearret"],
                    fiveyrdate: totaldata14[i]["5yrdate"],
                    fiveyrnav: totaldata14[i]['5yrnav'],
                    fiveyearret: totaldata14[i]["5yearret"],
                    incdate: totaldata14[i]["incdate"],
                    incnav: totaldata14[i]["incnav"],
                    incret: totaldata14[i]["incret"],
                    flag: totaldata14[i]["flag"],



                },
            };
            const option = {
                upsert: true,
            };
            const result = await mf_ans_return.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalmfansreturndateupdate = tottalmfansreturndateupdate + n;
        }


        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0; var tottalschemeaumdateupdate = 0; var tottalportfolioinoutdateupdate = 0;
        var tottalsectallocationdateupdate = 0; var tottalamcpaumdateupdate = 0; var tottalschemepaumdateupdate = 0; var tottalavgschemeaumdateupdate = 0;
        var tottalcurrentnavdateupdate = 0; var tottalnavhistdateupdate = 0; var tottalnavhistHLdateupdate = 0; var tottalmfreturndateupdate = 0; var tottalmfabsreturndateupdate = 0; var tottalmfansreturndateupdate = 0; var tottalclassWiseReturndateupdate = 0;
        var result15 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=ClassWiseReturn&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await resu;l.json();
        // console.log(resu;l.data)
        // return false;
        var totaldata15 = result15.data.Table
        // console.log(result15.data.Table)
        // console.log("ghv ", totaldata15.length);
        // var totaldata15 = result15.data;
        // console.log(result15.data)
        for (var i = 0; i < totaldata15.length; i++) {
            // console.log(totaldata15[i].classcode);
            const filter = {
                classname: totaldata15[i].classname,
                opt_code: totaldata15[i].opt_code,

            };
            const updatedoc = {
                $set: {
                    classcode: totaldata15[i]["classcode"],
                    classname: totaldata15[i]["classname"],
                    opt_code: totaldata15[i]["opt_code"],
                    date: totaldata15[i]["date"],
                    onedayret: totaldata15[i]["1dayret"],
                    oneweekret: totaldata15[i]["1weekret"],
                    twoweekret: totaldata15[i]["2weekret"],
                    threeweekret: totaldata15[i]["3weekret"],
                    onemonthret: totaldata15[i]["1monthret"],
                    twomonthret: totaldata15[i]["2monthret"],
                    threemonthret: totaldata15[i]["3monthret"],
                    sixmonthret: totaldata15[i]["6monthret"],
                    ninemnthret: totaldata15[i]["9mnthret"],
                    oneyearret: totaldata15[i]["1yearret"],
                    twoyearret: totaldata15[i]["2yearret"],
                    threeyearret: totaldata15[i]["3yearret"],
                    fouryearret: totaldata15[i]["4yearret"],
                    fiveyearret: totaldata15[i]["5yearret"],
                    incret: totaldata15[i]["incret"],
                    ytdret: totaldata15[i]["ytdret"],
                    onewschemecode: totaldata15[i]["1wschemecode"],
                    weekHighRet: totaldata15[i]["weekHighRet"],
                    onemschemecode: totaldata15[i]["1mschemecode"],
                    monthhighret: totaldata15[i]["monthhighret"],
                    threemschemecode: totaldata15[i]["3mschemecode"],
                    threemonthHighret: totaldata15[i]["3monthHighret"],
                    sixmschemecode: totaldata15[i]["6mschemecode"],
                    sixmonthhighret: totaldata15[i]["6monthhighret"],
                    oneyhighret: totaldata15[i]["1yhighret"],
                    threeyschemecode: totaldata15[i]["3yschemecode"],
                    threeyhighret: totaldata15[i]["3yhighret"],
                    fiveyschemecode: totaldata15[i]["5yschemecode"],
                    fiveyhighret: totaldata15[i]["5yhighret"],
                    incretschemecode: totaldata15[i]["incretschemecode"],
                    increthighret: totaldata15[i]["increthighret"],
                    worst1wSchemecode: totaldata15[i]["worst1wSchemecode"],
                    weekWorstRet: totaldata15[i]["weekWorstRet"],
                    worst1mschemecode: totaldata15[i]["worst1mschemecode"],
                    monthworstret: totaldata15[i]["monthworstret"],
                    worst3mschemecode: totaldata15[i]["worst3mschemecode"],
                    threemonthworstret: totaldata15[i]["3monthworstret"],
                    worst6mschemecode: totaldata15[i]["worst6mschemecode"],
                    sixmonthWorstRet: totaldata15[i]["6monthWorstRet"],
                    worst1yschemecode: totaldata15[i]["worst1yschemecode"],
                    oneyworstret: totaldata15[i]["1yworstret"],
                    worst3yschemecode: totaldata15[i]["worst3yschemecode"],
                    threeyworstret: totaldata15[i]["3yworstret"],
                    worst5yschemecode: totaldata15[i]["worst5yschemecode"],
                    fiveyworstret: totaldata15[i]["5yworstret"],
                    Worstincretschemecode: totaldata15[i]["Worstincretschemecode"],
                    incretworstret: totaldata15[i]["incretworstret"],
                    flag: totaldata15[i]["flag"],



                },
            };
            const option = {
                upsert: true,
            };
            const result = await class_WiseReturn.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalclassWiseReturndateupdate = tottalclassWiseReturndateupdate + n;
        }


        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0; var tottalschemeaumdateupdate = 0; var tottalportfolioinoutdateupdate = 0;
        var tottalsectallocationdateupdate = 0; var tottalamcpaumdateupdate = 0; var tottalschemepaumdateupdate = 0; var tottalavgschemeaumdateupdate = 0;
        var tottalcurrentnavdateupdate = 0; var tottalnavhistdateupdate = 0; var tottalnavhistHLdateupdate = 0; var tottalmfreturndateupdate = 0; var tottalmfabsreturndateupdate = 0; var tottalmfansreturndateupdate = 0;
        var tottalclassWiseReturndateupdate = 0; var tottalmfratiodateupdate = 0;
        var result16 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Mf_ratio&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await resu;l.json();
        // console.log(resu;l.data)
        // return false;
        var totaldata16 = result16.data.Table
        // console.log(result16.data.Table)
        // console.log("dfg ", totaldata16.length);
        // var totaldata16 = result16.data;
        // console.log(result16.data)
        for (var i = 0; i < totaldata16.length; i++) {
            // console.log(totaldata16[i].schemecode);
            const filter = {
                schemecode: totaldata16[i].schemecode,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata16[i].schemecode,
                    upddate: totaldata16[i].upddate,
                    datefrom: totaldata16[i].datefrom,
                    dateto: totaldata16[i].dateto,
                    avg_x: totaldata16[i].avg_x,
                    avg_y: totaldata16[i].avg_y,
                    sd_x: totaldata16[i].sd_x,
                    sd_y: totaldata16[i].sd_y,
                    semisd_x: totaldata16[i].semisd_x,
                    semisd_y: totaldata16[i].semisd_y,
                    beta_x: totaldata16[i].beta_x,
                    beta_y: totaldata16[i].beta_y,
                    corelation_x: totaldata16[i].corelation_x,
                    corelation_y: totaldata16[i].corelation_y,
                    betacor_x: totaldata16[i].betacor_x,
                    betacor_y: totaldata16[i].betacor_y,
                    treynor_x: totaldata16[i].treynor_x,
                    treynor_y: totaldata16[i].treynor_y,
                    fama_x: totaldata16[i].fama_x,
                    fama_y: totaldata16[i].fama_y,
                    sharpe_x: totaldata16[i].sharpe_x,
                    sharpe_y: totaldata16[i].sharpe_y,
                    jalpha_x: totaldata16[i].jalpha_x,
                    jalpha_y: totaldata16[i].jalpha_y,
                    sortino_x: totaldata16[i].sortino_x,
                    sortino_y: totaldata16[i].sortino_y,
                    flag: totaldata16[i].flag,




                },
            };
            const option = {
                upsert: true,
            };
            const result = await mf_ratio.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalmfratiodateupdate = tottalmfratiodateupdate + n;
        }


        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0; var tottalschemeaumdateupdate = 0; var tottalportfolioinoutdateupdate = 0;
        var tottalsectallocationdateupdate = 0; var tottalamcpaumdateupdate = 0; var tottalschemepaumdateupdate = 0; var tottalavgschemeaumdateupdate = 0;
        var tottalcurrentnavdateupdate = 0; var tottalnavhistdateupdate = 0; var tottalnavhistHLdateupdate = 0; var tottalmfreturndateupdate = 0; var tottalmfabsreturndateupdate = 0; var tottalmfansreturndateupdate = 0;
        var tottalclassWiseReturndateupdate = 0; var tottalmfratiodateupdate = 0; var tottalmFRatiosDefaultBMdateupdate = 0;
        var result17 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=MF_Ratios_DefaultBM&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await resu;l.json();
        // console.log(resu;l.data)
        // return false;
        var totaldata17 = result17.data.Table;
        // console.log(result17.data.Table)
        // console.log("gfgg ", totaldata17.length);
        // var totaldata17 = result17.data;
        // console.log(result17.data)
        for (var i = 0; i < totaldata17.length; i++) {
            // console.log(totaldata17[i].schemecode);
            const filter = {
                schemecode: totaldata17[i].schemecode,
                average: totaldata17[i].average,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata17[i].schemecode,
                    upddate: totaldata17[i].upddate,
                    datefrom: totaldata17[i].datefrom,
                    dateto: totaldata17[i].dateto,
                    average: totaldata17[i].average,
                    bmaverage: totaldata17[i].bmaverage,
                    sd: totaldata17[i].sd,
                    bmsd: totaldata17[i].bmsd,
                    semisd: totaldata17[i].semisd,
                    semisdii: totaldata17[i].semisdii,
                    beta: totaldata17[i].beta,
                    correlation: totaldata17[i].correlation,
                    beta_corelation: totaldata17[i].beta_corelation,
                    covariance: totaldata17[i].covariance,
                    treynor: totaldata17[i].treynor,
                    fama: totaldata17[i].fama,
                    sharpe: totaldata17[i].sharpe,
                    alpha: totaldata17[i].alpha,
                    sortino: totaldata17[i].sortino,
                    sortinoii: totaldata17[i].sortinoii,
                    ret_improper: totaldata17[i].ret_improper,
                    ret_selectivity: totaldata17[i].ret_selectivity,
                    down_probability: totaldata17[i].down_probability,
                    rsquared: totaldata17[i].rsquared,
                    trackingError: totaldata17[i].trackingError,
                    down_risk: totaldata17[i].down_risk,
                    sd_annualised: totaldata17[i].sd_annualised,
                    informationRatio: totaldata17[i].informationRatio,
                    flag: totaldata17[i].flag,




                },
            };
            const option = {
                upsert: true,
            };
            const result = await mF_Ratios_DefaultBM.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalmFRatiosDefaultBMdateupdate = tottalmFRatiosDefaultBMdateupdate + n;
        }



        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0; var tottalschemeaumdateupdate = 0; var tottalportfolioinoutdateupdate = 0;
        var tottalsectallocationdateupdate = 0; var tottalamcpaumdateupdate = 0; var tottalschemepaumdateupdate = 0; var tottalavgschemeaumdateupdate = 0;
        var tottalcurrentnavdateupdate = 0; var tottalnavhistdateupdate = 0; var tottalnavhistHLdateupdate = 0; var tottalmfreturndateupdate = 0; var tottalmfabsreturndateupdate = 0; var tottalmfansreturndateupdate = 0;
        var tottalclassWiseReturndateupdate = 0; var tottalmfratiodateupdate = 0; var tottalmFRatiosDefaultBMdateupdate = 0; var tottalbMAbsoluteReturndateupdate = 0;
        var result18 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=BM_AbsoluteReturn&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await resu;l.json();
        // console.log(resu;l.data)
        // return false;
        var totaldata18 = result18.data.Table
        // console.log(result18.data.Table)
        // console.log("ghh ", totaldata18.length);
        // var totaldata18 = result18.data;
        // console.log(result18.data)
        for (var i = 0; i < totaldata18.length; i++) {
            // console.log(totaldata18[i].index_code);
            const filter = {
                index_code: totaldata18[i].index_code,
            };
            const updatedoc = {
                $set: {
                    index_code: totaldata18[i]["index_code"],
                    symbol: totaldata18[i]["symbol"],
                    scripcode: totaldata18[i]["scripcode"],
                    date: totaldata18[i]["date"],
                    prev_date: totaldata18[i]["prev_date"],
                    close: totaldata18[i]["close"],
                    prev_close: totaldata18[i]["prev_close"],
                    onedayret: totaldata18[i]["1dayret"],
                    oneweekdate: totaldata18[i]["1weekdate"],
                    oneweekclose: totaldata18[i]["1weekclose"],
                    oneweekret: totaldata18[i]["1weekret"],
                    onemthdate: totaldata18[i]["1mthdate"],
                    onemthclose: totaldata18[i]["1mthclose"],
                    onemonthret: totaldata18[i]["1monthret"],
                    threemthdate: totaldata18[i]["3mthdate"],
                    threemthclose: totaldata18[i]["3mthclose"],
                    threemonthret: totaldata18[i]["3monthret"],
                    sixmntdate: totaldata18[i]["6mntdate"],
                    sixmnthclose: totaldata18[i]["6mnthclose"],
                    sixmonthret: totaldata18[i]["6mnthclose"],
                    ninemnthdate: totaldata18[i]["9mnthdate"],
                    ninemnthdate: totaldata18[i]["9mnthdate"],
                    ninemnthret: totaldata18[i]["9mnthret"],
                    oneyrdate: totaldata18[i]["1yrdate"],
                    oneyrclose: totaldata18[i]['1yrclose'],
                    oneyrret: totaldata18[i]["1yrret"],
                    twoyrdate: totaldata18[i]["2yrdate"],
                    twoyrclose: totaldata18[i]["2yrclose"],
                    twoyearret: totaldata18[i]["2yearret"],
                    threeyrdate: totaldata18[i]["3yrdate"],
                    threeyrclose: totaldata18[i]["3yrclose"],
                    threeyearret: totaldata18[i]["3yearret"],
                    fouryrdate: totaldata18[i]["4yrdate"],
                    fouryrclose: totaldata18[i]["4yrclose"],
                    fouryearret: totaldata18[i]["4yearret"],
                    fiveyrdate: totaldata18[i]["5yrdate"],
                    fiveyrclose: totaldata18[i]["5yrclose"],
                    fiveyearret: totaldata18[i]["5yearret"],
                    incdate: totaldata18[i]["incdate"],
                    incclose: totaldata18[i]["incclose"],
                    incret: totaldata18[i]["incret"],
                    twoweekdate: totaldata18[i]["2weekdate"],
                    twoweekclose: totaldata18[i]["2weekclose"],
                    twoweekret: totaldata18[i]["2weekret"],
                    twoweekdate: totaldata18[i]["2weekdate"],
                    threeweekclose: totaldata18[i]["3weekclose"],
                    threeweekret: totaldata18[i]["3weekret"],
                    twomthdate: totaldata18[i]["2mthdate"],
                    twomthclose: totaldata18[i]["2mthclose"],
                    twomonthret: totaldata18[i]["2monthret"],
                    ytddate: totaldata18[i]["ytddate"],
                    ytdclose: totaldata18[i]["ytdclose"],
                    ytdret: totaldata18[i]["ytdret"],
                    flag: totaldata18[i]["flag"],




                },
            };
            const option = {
                upsert: true,
            };
            const result = await bM_AbsoluteReturn.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalbMAbsoluteReturndateupdate = tottalbMAbsoluteReturndateupdate + n;
        }


        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0; var tottalschemeaumdateupdate = 0; var tottalportfolioinoutdateupdate = 0;
        var tottalsectallocationdateupdate = 0; var tottalamcpaumdateupdate = 0; var tottalschemepaumdateupdate = 0; var tottalavgschemeaumdateupdate = 0;
        var tottalcurrentnavdateupdate = 0; var tottalnavhistdateupdate = 0; var tottalnavhistHLdateupdate = 0; var tottalmfreturndateupdate = 0; var tottalmfabsreturndateupdate = 0; var tottalmfansreturndateupdate = 0;
        var tottalclassWiseReturndateupdate = 0; var tottalmfratiodateupdate = 0; var tottalmFRatiosDefaultBMdateupdate = 0; var tottalbMAbsoluteReturndateupdate = 0; var tottalbMAnnualisedReturndateupdate = 0;
        var result19 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=BM_AnnualisedReturn&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await resu;l.json();
        // console.log(resu;l.data)
        // return false;
        var totaldata19 = result19.data.Table
        // console.log(result19.data.Table)
        // console.log("gggg ", totaldata19.length);
        // var totaldata19 = result19.data;
        // console.log(result19.data)
        for (var i = 0; i < totaldata19.length; i++) {
            // console.log(totaldata19[i].index_code);
            const filter = {
                index_code: totaldata19[i].index_code,
            };
            const updatedoc = {
                $set: {
                    index_code: totaldata19[i].index_code,
                    symbol: totaldata19[i].symbol,
                    scripcode: totaldata19[i].scripcode,
                    date: totaldata19[i].date,
                    prev_date: totaldata19[i].prev_date,
                    close: totaldata19[i].close,
                    prev_close: totaldata19[i].prev_close,
                    onedayret: totaldata19[i].onedayret,
                    oneweekdate: totaldata19[i].oneweekdate,
                    oneweekclose: totaldata19[i].oneweekclose,
                    oneweekret: totaldata19[i].oneweekret,
                    onemthdate: totaldata19[i].onemthdate,
                    onemthclose: totaldata19[i].onemthclose,
                    onemonthret: totaldata19[i].onemonthret,
                    threemthdate: totaldata19[i].threemthdate,
                    threemthclose: totaldata19[i].threemthclose,
                    threemonthret: totaldata19[i].threemonthret,
                    sixmntdate: totaldata19[i].sixmntdate,
                    sixmnthclose: totaldata19[i].sixmnthclose,
                    sixmonthret: totaldata19[i].sixmnthclose,
                    ninemnthdate: totaldata19[i].ninemnthdate,
                    ninemnthdate: totaldata19[i].ninemnthdate,
                    ninemnthret: totaldata19[i].ninemnthret,
                    oneyrdate: totaldata19[i].oneyrdate,
                    oneyrclose: totaldata19[i].oneyrclose,
                    oneyrret: totaldata19[i].oneyrret,
                    twoyrdate: totaldata19[i].twoyrdate,
                    twoyrclose: totaldata19[i].twoyrclose,
                    twoyearret: totaldata19[i].twoyearret,
                    threeyrdate: totaldata19[i].threeyrdate,
                    threeyrclose: totaldata19[i].threeyrclose,
                    threeyearret: totaldata19[i].threeyearret,
                    fouryrdate: totaldata19[i].fouryrdate,
                    fouryrclose: totaldata19[i].fouryrclose,
                    fouryearret: totaldata19[i].fouryearret,
                    fiveyrdate: totaldata19[i].fiveyrdate,
                    fiveyrclose: totaldata19[i].fiveyrclose,
                    fiveyearret: totaldata19[i].fiveyearret,
                    incdate: totaldata19[i].incdate,
                    incclose: totaldata19[i].incclose,
                    incret: totaldata19[i].incret,
                    twoweekdate: totaldata19[i].twoweekdate,
                    twoweekclose: totaldata19[i].twoweekclose,
                    twoweekret: totaldata19[i].twoweekret,
                    twoweekdate: totaldata19[i].twoweekdate,
                    threeweekclose: totaldata19[i].threeweekclose,
                    threeweekret: totaldata19[i].threeweekret,
                    twomthdate: totaldata19[i].twomthdate,
                    twomthclose: totaldata19[i].twomthclose,
                    twomonthret: totaldata19[i].twomonthret,
                    ytddate: totaldata19[i].ytddate,
                    ytdclose: totaldata19[i].ytdclose,
                    ytdret: totaldata19[i].ytdret,
                    flag: totaldata19[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await bM_AnnualisedReturn.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalbMAnnualisedReturndateupdate = tottalbMAnnualisedReturndateupdate + n;
        }


        var tottalmfportfoliodateupdate = 0; var tottalamcaumdateupdate = 0; var tottalschemeaumdateupdate = 0; var tottalportfolioinoutdateupdate = 0;
        var tottalsectallocationdateupdate = 0; var tottalamcpaumdateupdate = 0; var tottalschemepaumdateupdate = 0; var tottalavgschemeaumdateupdate = 0;
        var tottalcurrentnavdateupdate = 0; var tottalnavhistdateupdate = 0; var tottalnavhistHLdateupdate = 0; var tottalmfreturndateupdate = 0; var tottalmfabsreturndateupdate = 0; var tottalmfansreturndateupdate = 0;
        var tottalclassWiseReturndateupdate = 0; var tottalmfratiodateupdate = 0; var tottalmFRatiosDefaultBMdateupdate = 0; var tottalbMAbsoluteReturndateupdate = 0; var tottalbMAnnualisedReturndateupdate = 0; var tottaldivdetailsdateupdate = 0;
        var result20 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Divdetails&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await resu;l.json();
        // console.log(resu;l.data)
        // return false;
        var totaldata20 = result20.data.Table;
        // console.log(result20.data.Table)
        console.log("dsad ", totaldata20.length);
        // var totaldata20 = result20.data;
        console.log(result20.data);
        for (var i = 0; i < totaldata20.length; i++) {
            console.log(totaldata20[i].schemecode);
            const filter = {
                amc_code: totaldata20[i].amc_code,
                schemecode: totaldata20[i].schemecode,
             
            };
            const updatedoc = {
                $set: {
                    amc_code: totaldata20[i].amc_code,
                    schemecode: totaldata20[i].schemecode,
                    recorddate: totaldata20[i].recorddate,
                    div_code: totaldata20[i].div_code,
                    exdivdate: totaldata20[i].exdivdate,
                    Bonusrate1: totaldata20[i].Bonusrate1,
                    Bonusrate2: totaldata20[i].Bonusrate2,
                    gross: totaldata20[i].gross,
                    corporate: totaldata20[i].corporate,
                    noncorporate: totaldata20[i].noncorporate,
                    status: totaldata20[i].status,
                    flag: totaldata20[i].flag,


                },
            };
            const option = {
                upsert: true,
            };
            const result = await div_details.updateMany(filter, updatedoc, option);
            var n = result.n
            tottaldivdetailsdateupdate = tottaldivdetailsdateupdate + n;
        }


        console.log("scheme_divdetailsdate Update=", tottaldivdetailsdateupdate);












        //         // var succmsg = {"msg":"Data save successfully"};
        //         // return result;
        //         // res.json(result);


    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}














module.exports = { secondrowdatamaster }