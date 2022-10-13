var Axios = require('axios');
const e = require("express");
const moment = require('moment');
var db = require("../config.js");
var async = require('async');
var { scheme_isinmaster, scheme_master, scheme_detail, mf_abs_return, mf_ans_return, class_WiseReturn, mf_return } = require('../schema/fourtime.scheme');

async function update_fourtimemaster(result) {
    try {
        var Scheme_ISIN_Master = await update_scheme_isinmaster();
        console.log("Scheme_ISIN_Master=", Scheme_ISIN_Master)

        var Scheme_Master = await update_scheme_master();
        console.log("Scheme_Master=", Scheme_Master)

        var Scheme_Detail = await update_scheme_detail();
        console.log("Scheme_Detail=", Scheme_Detail)

    } catch (err) {
        console.log("Errorqqqq=", err)
    }

}

async function update_fivetimemaster(result) {
    try {
        var Mf_Abs_Return = await update_mf_abs_return();
        console.log("Mf_Abs_Return=", Mf_Abs_Return)

        var Mf_Ans_Return = await update_mf_ans_return();
        console.log("Mf_Ans_Return=", Mf_Ans_Return)

        var Class_wiseReturn = await update_class_wise_return();
        console.log("Class_wiseReturn=", Class_wiseReturn)

        var Mf_Return = await update_mf_return();
        console.log("Mf_Return=", Mf_Return)

    } catch (err) {
        console.log("Errorqqqq=", err)
    }

}
async function update_scheme_isinmaster() {
    try {
        var tottalschemeisinmasterupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=schemeisinmaster&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                Id: totaldata[i].Id,
                ISIN: totaldata[i].ISIN,
                Schemecode: totaldata[i].Schemecode,
                Amc_code: totaldata[i].Amc_code,
                LongSchemeDescrip: totaldata[i].LongSchemeDescrip,
                ShortSchemeDescrip: totaldata[i].ShortSchemeDescrip,
                Status: totaldata[i].Status,
            };
            const updatedoc = {
                $set: {
                    Id: totaldata[i].Id,
                    ISIN: totaldata[i].ISIN,
                    Schemecode: totaldata[i].Schemecode,
                    Amc_code: totaldata[i].Amc_code,
                    NseSymbol: totaldata[i].NseSymbol,
                    Series: totaldata[i].Series,
                    RTASchemecode: totaldata[i].RTASchemecode,
                    AMCSchemecode: totaldata[i].AMCSchemecode,
                    LongSchemeDescrip: totaldata[i].LongSchemeDescrip,
                    ShortSchemeDescrip: totaldata[i].ShortSchemeDescrip,
                    Status: totaldata[i].Status,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await scheme_isinmaster.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalschemeisinmasterupdate = tottalschemeisinmasterupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalschemeisinmasterupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_scheme_master() {
    try {
        var totalschememasterupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_master&date=16082021&section=MfMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                schemecode: totaldata[i].schemecode,
                amc_code: totaldata[i].amc_code,
                scheme_name: totaldata[i].scheme_name,
                color: totaldata[i].color,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata[i].schemecode,
                    amc_code: totaldata[i].amc_code,
                    scheme_name: totaldata[i].scheme_name,
                    color: totaldata[i].color,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await scheme_master.updateMany(filter, updatedoc, option);
            var n = result.n
            totalschememasterupdate = totalschememasterupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: totalschememasterupdate
        }
        return resdata;
    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_scheme_detail() {
    try {
        var tottalschemedetailupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_details&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table;
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                schemecode: totaldata[i].schemecode,
                amfi_code: totaldata[i].amfi_code,
                cams_code: totaldata[i].cams_code,
                amc_code: totaldata[i].amc_code,
                s_name: totaldata[i].s_name,
                amfi_name: totaldata[i].amfi_name,
                cust_code: totaldata[i].cust_code,
                cust_code2: totaldata[i].cust_code2,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata[i].schemecode,
                    amfi_code: totaldata[i].amfi_code,
                    cams_code: totaldata[i].cams_code,
                    amc_code: totaldata[i].amc_code,
                    s_name: totaldata[i].s_name,
                    amfi_name: totaldata[i].amfi_name,
                    isin_code: totaldata[i].isin_code,
                    type_code: totaldata[i].type_code,
                    opt_code: totaldata[i].opt_code,
                    classcode: totaldata[i].classcode,
                    theme_code: totaldata[i].theme_code,
                    rt_code: totaldata[i].rt_code,
                    plan: totaldata[i].plan,
                    cust_code: totaldata[i].cust_code,
                    cust_code2: totaldata[i].cust_code2,
                    price_freq: totaldata[i].price_freq,
                    init_price: totaldata[i].init_price,
                    offerprice: totaldata[i].offerprice,
                    nfo_open: totaldata[i].nfo_open,
                    nfo_close: totaldata[i].nfo_close,
                    reopen_dt: totaldata[i].reopen_dt,
                    elf: totaldata[i].elf,
                    etf: totaldata[i].etf,
                    stp: totaldata[i].stp,
                    primary_fund: totaldata[i].primary_fund,
                    primary_fd_code: totaldata[i].primary_fd_code,
                    sip: totaldata[i].sip,
                    swp: totaldata[i].swp,
                    switch: totaldata[i].switch,
                    mininvt: totaldata[i].mininvt,
                    multiples: totaldata[i].multiples,
                    inc_invest: totaldata[i].inc_invest,
                    adnmultiples: totaldata[i].adnmultiples,
                    fund_mgr1: totaldata[i].fund_mgr1,
                    fund_mgr2: totaldata[i].fund_mgr2,
                    fund_mgr3: totaldata[i].fund_mgr3,
                    fund_mgr4: totaldata[i].fund_mgr4,
                    since: totaldata[i].since,
                    status: totaldata[i].status,
                    cutsub: totaldata[i].cutsub,
                    cutred: totaldata[i].cutred,
                    red: totaldata[i].red,
                    mob_name: totaldata[i].mob_name,
                    div_freq: totaldata[i].div_freq,
                    scheme_symbol: totaldata[i].scheme_symbol,
                    fund_mgr_code1: totaldata[i].fund_mgr_code1,
                    FUND_MGR_CODE2: totaldata[i].FUND_MGR_CODE2,
                    FUND_MGR_CODE3: totaldata[i].FUND_MGR_CODE3,
                    FUND_MGR_CODE4: totaldata[i].FUND_MGR_CODE4,
                    Redemption_date: totaldata[i].Redemption_date,
                    DateOfAllot: totaldata[i].DateOfAllot,
                    Div_Code: totaldata[i].Div_Code,
                    LegalNames: totaldata[i].LegalNames,
                    AMFIType: totaldata[i].AMFIType,
                    NonTxnDay: totaldata[i].NonTxnDay,
                    SchemeBank: totaldata[i].SchemeBank,
                    SchemeBankAccountNumber: totaldata[i].SchemeBankAccountNumber,
                    SchemeBankBranch: totaldata[i].SchemeBankBranch,
                    DividendOptionFlag: totaldata[i].DividendOptionFlag,
                    LockIn: totaldata[i].LockIn,
                    IsPurchaseAvailable: totaldata[i].IsPurchaseAvailable,
                    IsRedeemAvailable: totaldata[i].IsRedeemAvailable,
                    MinRedemptionAmount: totaldata[i].MinRedemptionAmount,
                    RedemptionMultipleAmount: totaldata[i].RedemptionMultipleAmount,
                    MinRedemptionUnits: totaldata[i].MinRedemptionUnits,
                    MinSwitchAmount: totaldata[i].MinSwitchAmount,
                    SwitchMultipleAmount: totaldata[i].SwitchMultipleAmount,
                    MinSwitchUnits: totaldata[i].MinSwitchUnits,
                    SwitchMultiplesUnits: totaldata[i].SwitchMultiplesUnits,
                    securitycode: totaldata[i].securitycode,
                    unit: totaldata[i].unit,
                    SwitchOut: totaldata[i].SwitchOut,
                    MinSwitchOutAmount: totaldata[i].MinSwitchOutAmount,
                    SwitchOutMultipleAmount: totaldata[i].SwitchOutMultipleAmount,
                    MinSwitchOutUnits: totaldata[i].MinSwitchOutUnits,
                    SwitchOutMultiplesUnits: totaldata[i].SwitchOutMultiplesUnits,
                    Incept_date: totaldata[i].Incept_date,
                    Incept_Nav: totaldata[i].Incept_Nav,
                    DefaultOpt: totaldata[i].DefaultOpt,
                    DefaultPlan: totaldata[i].DefaultPlan,
                    LockPeriod: totaldata[i].LockPeriod,
                    ODDraftDate: totaldata[i].ODDraftDate,
                    Liquidated_Date: totaldata[i].Liquidated_Date,
                    Old_Plan: totaldata[i].Old_Plan,
                    Direct_Plan: totaldata[i].Direct_Plan,
                    optionType: totaldata[i].optionType,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await scheme_detail.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalschemedetailupdate = tottalschemedetailupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalschemedetailupdate
        }
        return resdata;
    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_mf_abs_return() {
    try {
        var tottalmfabsreturnupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Mf_abs_return&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table;
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                schemecode: totaldata[i].schemecode,
                c_date: totaldata[i]["c_date"],
                p_date: totaldata[i]["p_date"],
                c_nav: totaldata[i]["c_nav"],
                incnav: totaldata[i]["incnav"],
                incret: totaldata[i]["incret"],
                onedayret: totaldata[i]["1dayret"],
                oneweekdate: totaldata[i]["1weekdate"],
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata[i]["schemecode"],
                    c_date: totaldata[i]["c_date"],
                    p_date: totaldata[i]["p_date"],
                    c_nav: totaldata[i]["c_nav"],
                    p_nav: totaldata[i]["p_nav"],
                    onedayret: totaldata[i]["1dayret"],
                    oneweekdate: totaldata[i]["1weekdate"],
                    oneweeknav: totaldata[i]["1weeknav"],
                    oneweekret: totaldata[i]["1weekret"],
                    onemthdate: totaldata[i]["1mthdate"],
                    onemthnav: totaldata[i]["1mthnav"],
                    onemonthret: totaldata[i]["1monthret"],
                    threemthdate: totaldata[i]["1mthdate"],
                    threemthnav: totaldata[i]["3mthnav"],
                    threemonthret: totaldata[i]["3monthret"],
                    sixmntdate: totaldata[i]["6mntdate"],
                    sixmnthnav: totaldata[i]["6mnthnav"],
                    sixmonthret: totaldata[i]["6monthret"],
                    ninemnthdate: totaldata[i]["9mnthdate"],
                    ninemnthnav: totaldata[i]["9mnthnav"],
                    ninemnthret: totaldata[i]["9mnthret"],
                    oneyrdate: totaldata[i]["1yrdate"],
                    oneyrnav: totaldata[i]["1yrnav"],
                    oneyrret: totaldata[i]["1yrret"],
                    twoyrdate: totaldata[i]["2yrdate"],
                    twoyrnav: totaldata[i]["2yrnav"],
                    twoyearret: totaldata[i]["2yearret"],
                    threeyrdate: totaldata[i]["3yrdate"],
                    threeyrnav: totaldata[i]["3yrnav"],
                    threeyearret: totaldata[i]["3yearret"],
                    fouryrdate: totaldata[i]["4yrdate"],
                    fouryrnav: totaldata[i]["4yrnav"],
                    fouryearret: totaldata[i]["4yearret"],
                    fiveyrdate: totaldata[i]["5yrdate"],
                    fiveyrnav: totaldata[i]["5yrnav"],
                    fiveyearret: totaldata[i]["5yearret"],
                    incdate: totaldata[i]["incdate"],
                    incnav: totaldata[i]["incnav"],
                    incret: totaldata[i]["incret"],
                    flag: totaldata[i]["flag"],
                },
            };
            const option = {
                upsert: true,
            };
            const result = await mf_abs_return.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalmfabsreturnupdate = tottalmfabsreturnupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalmfabsreturnupdate
        }
        return resdata;
    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_mf_ans_return() {
    try {
        var tottalmfansreturnupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Mf_ans_return&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table;
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                schemecode: totaldata[i].schemecode,
                c_date: totaldata[i]["c_date"],
                p_date: totaldata[i]["p_date"],
                c_nav: totaldata[i]["c_nav"],
                onemthdate: totaldata[i]["1mthdate"],
                onemthnav: totaldata[i]["1mthnav"],
                onemonthret: totaldata[i]["1monthret"],
                threemthdate: totaldata[i]["3mthdate"],
                fiveyearret: totaldata[i]["5yearret"],
                incdate: totaldata[i]["incdate"],
                incnav: totaldata[i]["incnav"],
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata[i]["schemecode"],
                    c_date: totaldata[i]["c_date"],
                    p_date: totaldata[i]["p_date"],
                    c_nav: totaldata[i]["c_nav"],
                    p_nav: totaldata[i]["p_nav"],
                    onedayret: totaldata[i]["1dayret"],
                    oneweekdate: totaldata[i]["1weekdate"],
                    oneweeknav: totaldata[i]["1weeknav"],
                    oneweekret: totaldata[i]["1weekret"],
                    onemthdate: totaldata[i]["1mthdate"],
                    onemthnav: totaldata[i]["1mthnav"],
                    onemonthret: totaldata[i]["1monthret"],
                    threemthdate: totaldata[i]["3mthdate"],
                    threemthnav: totaldata[i]["3mthnav"],
                    threemonthret: totaldata[i]["3monthret"],
                    sixmntdate: totaldata[i]["6mntdate"],
                    sixmnthnav: totaldata[i]["6mnthnav"],
                    sixmonthret: totaldata[i]["6monthret"],
                    ninemnthdate: totaldata[i]["9mnthdate"],
                    ninemnthnav: totaldata[i]["9mnthnav"],
                    ninemnthret: totaldata[i]["9mnthret"],
                    oneyrdate: totaldata[i]["1yrdate"],
                    oneyrnav: totaldata[i]["1yrnav"],
                    oneyrret: totaldata[i]["1yrret"],
                    twoyrdate: totaldata[i]["2yrdate"],
                    twoyrnav: totaldata[i]["2yrnav"],
                    twoyearret: totaldata[i]["2yearret"],
                    threeyrdate: totaldata[i]["3yrdate"],
                    threeyrnav: totaldata[i]["3yrnav"],
                    threeyearret: totaldata[i]["3yearret"],
                    fouryrdate: totaldata[i]["4yrdate"],
                    fouryrnav: totaldata[i]["4yrnav"],
                    fouryearret: totaldata[i]["4yearret"],
                    fiveyrdate: totaldata[i]["5yrdate"],
                    fiveyrnav: totaldata[i]['5yrnav'],
                    fiveyearret: totaldata[i]["5yearret"],
                    incdate: totaldata[i]["incdate"],
                    incnav: totaldata[i]["incnav"],
                    incret: totaldata[i]["incret"],
                    flag: totaldata[i]["flag"],
                },
            };
            const option = {
                upsert: true,
            };
            const result = await mf_ans_return.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalmfansreturnupdate = tottalmfansreturnupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalmfansreturnupdate
        }
        return resdata;
    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_class_wise_return() {
    try {
        var tottalclassWiseReturnupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=ClassWiseReturn&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                classname: totaldata[i].classname,
                opt_code: totaldata[i].opt_code,
                opt_code: totaldata[i]["opt_code"],
                date: totaldata[i]["date"],
                onedayret: totaldata[i]["1dayret"],
                onewschemecode: totaldata[i]["1wschemecode"],
                threemschemecode: totaldata[i]["3mschemecode"],
                threemonthHighret: totaldata[i]["3monthHighret"],
                sixmschemecode: totaldata[i]["6mschemecode"],
                sixmonthhighret: totaldata[i]["6monthhighret"],
                worst3yschemecode: totaldata[i]["worst3yschemecode"],
                threeyworstret: totaldata[i]["3yworstret"],
                worst5yschemecode: totaldata[i]["worst5yschemecode"],
            };
            const updatedoc = {
                $set: {
                    classcode: totaldata[i]["classcode"],
                    classname: totaldata[i]["classname"],
                    opt_code: totaldata[i]["opt_code"],
                    date: totaldata[i]["date"],
                    onedayret: totaldata[i]["1dayret"],
                    oneweekret: totaldata[i]["1weekret"],
                    twoweekret: totaldata[i]["2weekret"],
                    threeweekret: totaldata[i]["3weekret"],
                    onemonthret: totaldata[i]["1monthret"],
                    twomonthret: totaldata[i]["2monthret"],
                    threemonthret: totaldata[i]["3monthret"],
                    sixmonthret: totaldata[i]["6monthret"],
                    ninemnthret: totaldata[i]["9mnthret"],
                    oneyearret: totaldata[i]["1yearret"],
                    twoyearret: totaldata[i]["2yearret"],
                    threeyearret: totaldata[i]["3yearret"],
                    fouryearret: totaldata[i]["4yearret"],
                    fiveyearret: totaldata[i]["5yearret"],
                    incret: totaldata[i]["incret"],
                    ytdret: totaldata[i]["ytdret"],
                    onewschemecode: totaldata[i]["1wschemecode"],
                    weekHighRet: totaldata[i]["weekHighRet"],
                    onemschemecode: totaldata[i]["1mschemecode"],
                    monthhighret: totaldata[i]["monthhighret"],
                    threemschemecode: totaldata[i]["3mschemecode"],
                    threemonthHighret: totaldata[i]["3monthHighret"],
                    sixmschemecode: totaldata[i]["6mschemecode"],
                    sixmonthhighret: totaldata[i]["6monthhighret"],
                    oneyhighret: totaldata[i]["1yhighret"],
                    threeyschemecode: totaldata[i]["3yschemecode"],
                    threeyhighret: totaldata[i]["3yhighret"],
                    fiveyschemecode: totaldata[i]["5yschemecode"],
                    fiveyhighret: totaldata[i]["5yhighret"],
                    incretschemecode: totaldata[i]["incretschemecode"],
                    increthighret: totaldata[i]["increthighret"],
                    worst1wSchemecode: totaldata[i]["worst1wSchemecode"],
                    weekWorstRet: totaldata[i]["weekWorstRet"],
                    worst1mschemecode: totaldata[i]["worst1mschemecode"],
                    monthworstret: totaldata[i]["monthworstret"],
                    worst3mschemecode: totaldata[i]["worst3mschemecode"],
                    threemonthworstret: totaldata[i]["3monthworstret"],
                    worst6mschemecode: totaldata[i]["worst6mschemecode"],
                    sixmonthWorstRet: totaldata[i]["6monthWorstRet"],
                    worst1yschemecode: totaldata[i]["worst1yschemecode"],
                    oneyworstret: totaldata[i]["1yworstret"],
                    worst3yschemecode: totaldata[i]["worst3yschemecode"],
                    threeyworstret: totaldata[i]["3yworstret"],
                    worst5yschemecode: totaldata[i]["worst5yschemecode"],
                    fiveyworstret: totaldata[i]["5yworstret"],
                    Worstincretschemecode: totaldata[i]["Worstincretschemecode"],
                    incretworstret: totaldata[i]["incretworstret"],
                    flag: totaldata[i]["flag"],
                },
            };
            const option = {
                upsert: true,
            };
            const result = await class_WiseReturn.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalclassWiseReturnupdate = tottalclassWiseReturnupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalclassWiseReturnupdate
        }
        return resdata;
    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_mf_return() {
    try {
        var tottalmfreturnupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Mf_return&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                schemecode: totaldata[i].schemecode,
                c_date: totaldata[i]["c_date"],
                p_date: totaldata[i]["p_date"],
                c_nav: totaldata[i]["c_nav"],
                onedayret: totaldata[i]["1dayret"],
                oneweekdate: totaldata[i]["1weekdate"],
                oneweeknav: totaldata[i]["1weeknav"],
                oneweekret: totaldata[i]["1weekret"],
                onemthdate: totaldata[i]["1mthdate"],
                incdate: totaldata[i]["incdate"],
                incnav: totaldata[i]["incnav"],
                incret: totaldata[i]["incret"],
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata[i]["schemecode"],
                    c_date: totaldata[i]["c_date"],
                    p_date: totaldata[i]["p_date"],
                    c_nav: totaldata[i]["c_nav"],
                    p_nav: totaldata[i]["p_nav"],
                    onedayret: totaldata[i]["1dayret"],
                    oneweekdate: totaldata[i]["1weekdate"],
                    oneweeknav: totaldata[i]["1weeknav"],
                    oneweekret: totaldata[i]["1weekret"],
                    onemthdate: totaldata[i]["1mthdate"],
                    onemthnav: totaldata[i]["1mthnav"],
                    onemonthret: totaldata[i]["1monthret"],
                    threemthdate: totaldata[i]["3mthdate"],
                    threemthnav: totaldata[i]["3mthnav"],
                    threemonthret: totaldata[i]["3monthret"],
                    sixmntdate: totaldata[i]["6mntdate"],
                    sixmnthnav: totaldata[i]["6mnthnav"],
                    sixmonthret: totaldata[i]["6monthret"],
                    ninemnthdate: totaldata[i]["9mnthdate"],
                    ninemnthnav: totaldata[i]["9mnthnav"],
                    ninemnthret: totaldata[i]["9mnthret"],
                    oneyrdate: totaldata[i]["1yrdate"],
                    oneyrnav: totaldata[i]["1yrnav"],
                    oneyrret: totaldata[i]["1yrret"],
                    twoyrdate: totaldata[i]["2yrdate"],
                    twoyrnav: totaldata[i]["2yrnav"],
                    twoyearret: totaldata[i]["2yearret"],
                    threeyrdate: totaldata[i]["3yrdate"],
                    threeyrnav: totaldata[i]["3yrnav"],
                    threeyearret: totaldata[i]["3yearret"],
                    fouryrdate: totaldata[i]["4yrdate"],
                    fouryrnav: totaldata[i]["4yrnav"],
                    fouryearret: totaldata[i]["4yearret"],
                    fiveyrdate: totaldata[i]["5yrdate"],
                    fiveyrnav: totaldata[i]["5yrnav"],
                    fiveyearret: totaldata[i]["5yearret"],
                    incdate: totaldata[i]["incdate"],
                    incnav: totaldata[i]["incnav"],
                    incret: totaldata[i]["incret"],
                    flag: totaldata[i]["flag"],
                },
            };
            const option = {
                upsert: true,
            };
            const result = await mf_return.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalmfreturnupdate = tottalmfreturnupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalmfreturnupdate
        }
        return resdata;
    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}
module.exports = { update_fourtimemaster, update_fivetimemaster };