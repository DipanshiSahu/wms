var Axios = require('axios');
const e = require("express");
const moment = require('moment');
var db = require("../config.js");
var async = require('async');
var { sch_master, sch_detail, sch_expenceratio, sch_eqdetail, sch_fmpyielddetail, amc_mst, sclass_mst, asect_mst, cust_mst, option_mst, plan_mst, div_mst, rt_mst, sect_mst, type_mst, loadtype_mst, index_mst, scheme_objective, scheme_rtcode, amc_keypersons, mf_sip, mf_swp, mf_stp, scheme_index_part, company_master, fundmanager_mst, scheme_isinmaster, scheme_rgess, industry_mst,scheme_load } = require('../schema/master.schema');
// const fetch = require('node-fetch');dd2
let fetch = import('node-fetch');
// const fetch = import("node-fetch")
//const { result } = require('underscore');

async function update_operationmaster(result) {
    try {
        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0;
        var result1 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_master&date=16082021&section=MfMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_master = await result1.json();
        // console.log(result2.data)

        // res.json(result);

        var totaldata1 = result1.data.Table
        // console.log("First ", totaldata1.length);
        // console.log(result1.data)
        for (var i = 0; i < totaldata1.length; i++) {
            const filter = {
                schemecode: totaldata1[i].schemecode,

            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata1[i].schemecode,
                    amc_code: totaldata1[i].amc_code,
                    scheme_name: totaldata1[i].scheme_name,
                    color: totaldata1[i].color,
                    flag: totaldata1[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await sch_master.updateMany(filter, updatedoc, option);
            var n = result.n
            totalschememasterupdate = totalschememasterupdate + n;
        }
        console.log("total Scheme_master update=", totalschememasterupdate)

        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0;
        var result2 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_details&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await result2.json();
        // console.log(result2.data)
        // return false;
        var totaldata2 = result2.data.Table;
        // console.log(result2.data.Table)
        // console.log("Second", totaldata2.length);
        // var totaldata2 = result2.data;
        // console.log(result2.data)
        for (var i = 0; i < totaldata2.length; i++) {
            // console.log(totaldata2[i].schemecode);
            const filter = {
                schemecode: totaldata2[i].schemecode,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata2[i].schemecode,
                    amfi_code: totaldata2[i].amfi_code,
                    cams_code: totaldata2[i].cams_code,
                    amc_code: totaldata2[i].amc_code,
                    s_name: totaldata2[i].s_name,
                    amfi_name: totaldata2[i].amfi_name,
                    isin_code: totaldata2[i].isin_code,
                    type_code: totaldata2[i].type_code,
                    opt_code: totaldata2[i].opt_code,
                    classcode: totaldata2[i].classcode,
                    theme_code: totaldata2[i].theme_code,
                    rt_code: totaldata2[i].rt_code,
                    plan: totaldata2[i].plan,
                    cust_code: totaldata2[i].cust_code,
                    cust_code2: totaldata2[i].cust_code2,
                    price_freq: totaldata2[i].price_freq,
                    init_price: totaldata2[i].init_price,
                    offerprice: totaldata2[i].offerprice,
                    nfo_open: totaldata2[i].nfo_open,
                    nfo_close: totaldata2[i].nfo_close,
                    reopen_dt: totaldata2[i].reopen_dt,
                    elf: totaldata2[i].elf,
                    etf: totaldata2[i].etf,
                    stp: totaldata2[i].stp,
                    primary_fund: totaldata2[i].primary_fund,
                    primary_fd_code: totaldata2[i].primary_fd_code,
                    sip: totaldata2[i].sip,
                    swp: totaldata2[i].swp,
                    switch: totaldata2[i].switch,
                    mininvt: totaldata2[i].mininvt,
                    multiples: totaldata2[i].multiples,
                    inc_invest: totaldata2[i].inc_invest,
                    adnmultiples: totaldata2[i].adnmultiples,
                    fund_mgr1: totaldata2[i].fund_mgr1,
                    fund_mgr2: totaldata2[i].fund_mgr2,
                    fund_mgr3: totaldata2[i].fund_mgr3,
                    fund_mgr4: totaldata2[i].fund_mgr4,
                    since: totaldata2[i].since,
                    status: totaldata2[i].status,
                    cutsub: totaldata2[i].cutsub,
                    cutred: totaldata2[i].cutred,
                    red: totaldata2[i].red,
                    mob_name: totaldata2[i].mob_name,
                    div_freq: totaldata2[i].div_freq,
                    scheme_symbol: totaldata2[i].scheme_symbol,
                    fund_mgr_code1: totaldata2[i].fund_mgr_code1,
                    FUND_MGR_CODE2: totaldata2[i].FUND_MGR_CODE2,
                    FUND_MGR_CODE3: totaldata2[i].FUND_MGR_CODE3,
                    FUND_MGR_CODE4: totaldata2[i].FUND_MGR_CODE4,
                    Redemption_date: totaldata2[i].Redemption_date,
                    DateOfAllot: totaldata2[i].DateOfAllot,
                    Div_Code: totaldata2[i].Div_Code,
                    LegalNames: totaldata2[i].LegalNames,
                    AMFIType: totaldata2[i].AMFIType,
                    NonTxnDay: totaldata2[i].NonTxnDay,
                    SchemeBank: totaldata2[i].SchemeBank,
                    SchemeBankAccountNumber: totaldata2[i].SchemeBankAccountNumber,
                    SchemeBankBranch: totaldata2[i].SchemeBankBranch,
                    DividendOptionFlag: totaldata2[i].DividendOptionFlag,
                    LockIn: totaldata2[i].LockIn,
                    IsPurchaseAvailable: totaldata2[i].IsPurchaseAvailable,
                    IsRedeemAvailable: totaldata2[i].IsRedeemAvailable,
                    MinRedemptionAmount: totaldata2[i].MinRedemptionAmount,
                    RedemptionMultipleAmount: totaldata2[i].RedemptionMultipleAmount,
                    MinRedemptionUnits: totaldata2[i].MinRedemptionUnits,
                    MinSwitchAmount: totaldata2[i].MinSwitchAmount,
                    SwitchMultipleAmount: totaldata2[i].SwitchMultipleAmount,
                    MinSwitchUnits: totaldata2[i].MinSwitchUnits,
                    SwitchMultiplesUnits: totaldata2[i].SwitchMultiplesUnits,
                    securitycode: totaldata2[i].securitycode,
                    unit: totaldata2[i].unit,
                    SwitchOut: totaldata2[i].SwitchOut,
                    MinSwitchOutAmount: totaldata2[i].MinSwitchOutAmount,
                    SwitchOutMultipleAmount: totaldata2[i].SwitchOutMultipleAmount,
                    MinSwitchOutUnits: totaldata2[i].MinSwitchOutUnits,
                    SwitchOutMultiplesUnits: totaldata2[i].SwitchOutMultiplesUnits,
                    Incept_date: totaldata2[i].Incept_date,
                    Incept_Nav: totaldata2[i].Incept_Nav,
                    DefaultOpt: totaldata2[i].DefaultOpt,
                    DefaultPlan: totaldata2[i].DefaultPlan,
                    LockPeriod: totaldata2[i].LockPeriod,
                    ODDraftDate: totaldata2[i].ODDraftDate,
                    Liquidated_Date: totaldata2[i].Liquidated_Date,
                    Old_Plan: totaldata2[i].Old_Plan,
                    Direct_Plan: totaldata2[i].Direct_Plan,
                    optionType: totaldata2[i].optionType,
                    flag: totaldata2[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await sch_detail.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalschemedetailupdate = tottalschemedetailupdate + n;
        }
        console.log("total Scheme_schemedetail update=", tottalschemedetailupdate)


        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0;
        var result3 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Amc_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await result2.json();
        // console.log(result2.data)

        // console.log(result3.data)
        // return false;
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
                    fund: totaldata3[i].fund,
                    srno: totaldata3[i].srno,
                    office_type: totaldata3[i].office_type,
                    add1: totaldata3[i].add1,
                    add2: totaldata3[i].add2,
                    add3: totaldata3[i].add3,
                    email: totaldata3[i].email,
                    phone: totaldata3[i].phone,
                    fax: totaldata3[i].fax,
                    webiste: totaldata3[i].webiste,
                    setup_date: totaldata3[i].setup_date,
                    mf_type: totaldata3[i].mf_type,
                    trustee_name: totaldata3[i].trustee_name,
                    sponsor_name: totaldata3[i].sponsor_name,
                    amc_inc_date: totaldata3[i].amc_inc_date,
                    s_name: totaldata3[i].s_name,
                    amc_symbol: totaldata3[i].amc_symbol,
                    city: totaldata3[i].city,
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
        // console.log("total Scheme_amcmstdate update=", tottalamcmstdateupdate)

        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var result4 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Sclass_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await result2.json();
        // console.log(result2.data)
        // return false;
        var totaldata4 = result4.data.Table
        // console.log(result4.data.Table)
        // return false;
        // console.log("Second ", totaldata2.length);
        // var totaldata4 = result4.data;
        // console.log(result4.data)
        for (var i = 0; i < totaldata4.length; i++) {
            // console.log(totaldata4[i].classcode);
            const filter = {
                classcode: totaldata4[i].classcode,
            };
            const updatedoc = {
                $set: {

                    classcode: totaldata4[i].classcode,
                    classname: totaldata4[i].classname,
                    asset_code: totaldata4[i].asset_code,
                    asset_type: totaldata4[i].asset_type,
                    category: totaldata4[i].category,
                    sub_category: totaldata4[i].sub_category,
                    flag: totaldata4[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await sclass_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalsclassmstdateupdate = tottalsclassmstdateupdate + n;
        }
        console.log("total Scheme_sclassmstdate update=", tottalsclassmstdateupdate)


        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0;
        var result5 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Asect_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_master = await result1.json();
        // console.log(result2.data)

        // res.json(result);

        var totaldata5 = result5.data.Table
        // console.log("asect",totaldata5.length);

        // var totaldata5 = result5.data;
        // console.log(result5.data);

        for (var i = 0; i < totaldata5.length; i++) {
            // console.log(totaldata5[i].asect_code);

            const filter = {
                asect_code: totaldata5[i].asect_code

            };
            const updatedoc = {
                $set: {
                    asect_code: totaldata5[i].asect_code,
                    asect_type: totaldata5[i].asect_type,
                    asset: totaldata5[i].asset,
                    as_name: totaldata5[i].as_name,
                    flag: totaldata5[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await asect_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalasectmstdateupdate = tottalasectmstdateupdate + n;

        }


        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0;
        var result6 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Cust_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_master = await result1.json();
        // console.log(result2.data)

        // res.json(result);

        var totaldata6 = result6.data.Table
        // console.log("First ", totaldata6.length);
        // console.log(result6.data)
        for (var i = 0; i < totaldata6.length; i++) {
            // console.log(totaldata6[i].cust_code);

            const filter = {
                cust_code: totaldata6[i].cust_code,

            };
            const updatedoc = {
                $set: {
                    cust_code: totaldata6[i].cust_code,
                    cust_name: totaldata6[i].cust_name,
                    sebi_reg_no: totaldata6[i].sebi_reg_no,
                    add1: totaldata6[i].add1,
                    add2: totaldata6[i].add2,
                    add3: totaldata6[i].add3,
                    flag: totaldata6[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await cust_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalcustmstdateupdate = tottalcustmstdateupdate + n;

        }

        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0;
        var result7 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Option_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_master = await result1.json();
        // console.log(result2.data)

        // res.json(result);

        var totaldata7 = result7.data.Table
        // console.log("First ", totaldata7.length);
        // console.log(result7.data)
        for (var i = 0; i < totaldata7.length; i++) {
            // console.log(totaldata7[i].classcode);

            const filter = {
                opt_code: totaldata7[i].opt_code,

            };
            const updatedoc = {
                $set: {
                    opt_code: totaldata7[i].opt_code,
                    option: totaldata7[i].option,
                    flag: totaldata7[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await option_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottaloptionmstdateupdate = tottaloptionmstdateupdate + n;

        }


        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0;
        var result8 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Plan_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_master = await result1.json();
        // console.log(result2.data)

        // res.json(result);

        var totaldata8 = result8.data.Table
        // console.log("First ", totaldata8.length);
        // console.log(result8.data)
        for (var i = 0; i < totaldata8.length; i++) {
            // console.log(totaldata8[i].classcode);

            const filter = {
                plan_code: totaldata8[i].plan_code,

            };
            const updatedoc = {
                $set: {
                    plan_code: totaldata8[i].plan_code,
                    plan: totaldata8[i].plan,
                    flag: totaldata8[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await plan_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalplanmstdateupdate = tottalplanmstdateupdate + n;

        }

        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0;
        var result9 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Div_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_master = await result1.json();
        // console.log(result2.data)

        // res.json(result);

        var totaldata9 = result9.data.Table
        // console.log("First ", totaldata9.length);
        // console.log(result9.data)
        for (var i = 0; i < totaldata9.length; i++) {
            // console.log(totaldata9[i].div_code);

            const filter = {
                div_code: totaldata9[i].div_code,

            };
            const updatedoc = {
                $set: {
                    div_code: totaldata9[i].div_code,
                    div_type: totaldata9[i].div_type,
                    flag: totaldata9[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await div_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottaldivmstdateupdate = tottaldivmstdateupdate + n;

        }

        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0; var tottalrtmstdateupdate = 0;
        var result10 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Rt_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_master = await result1.json();
        // console.log(result2.data)

        // res.json(result);

        var totaldata10 = result10.data.Table
        // console.log("First ", totaldata10.length);
        // console.log(result10.data)
        for (var i = 0; i < totaldata10.length; i++) {
            // console.log(totaldata10[i].rt_code);

            const filter = {
                rt_code: totaldata10[i].rt_code,

            };
            const updatedoc = {
                $set: {
                    rt_code: totaldata10[i].rt_code,
                    rt_name: totaldata10[i].rt_name,
                    sebi_reg_no: totaldata10[i].sebi_reg_no,
                    address1: totaldata10[i].address1,
                    address2: totaldata10[i].address2,
                    address3: totaldata10[i].address3,
                    state: totaldata10[i].state,
                    tel: totaldata10[i].tel,
                    fax: totaldata10[i].fax,
                    website: totaldata10[i].website,
                    reg_address: totaldata10[i].reg_address,
                    email: totaldata10[i].email,
                    flag: totaldata10[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await rt_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalrtmstdateupdate = tottalrtmstdateupdate + n;

        }

        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0; var tottalrtmstdateupdate = 0; var tottalsectmstdateupdate = 0;
        var result11 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Sect_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_master = await result1.json();
        // console.log(result2.data)

        // res.json(result);

        var totaldata11 = result11.data.Table
        // console.log("First ", totaldata11.length);
        // console.log(result11.data)
        for (var i = 0; i < totaldata11.length; i++) {
            // console.log(totaldata11[i].sect_code);

            const filter = {
                sect_code: totaldata11[i].sect_code,

            };
            const updatedoc = {
                $set: {
                    sect_code: totaldata11[i].sect_code,
                    sect_name: totaldata11[i].sect_name,
                    flag: totaldata11[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await sect_mst.updateMany(filter, updatedoc, option);
            // console.log("fghhghfgvb", updatedoc)
            var n = result.n
            tottalsectmstdateupdate = tottalsectmstdateupdate + n;

        }

        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0; var tottalrtmstdateupdate = 0; var tottalsectmstdateupdate = 0; var tottaltypemstdateupdate = 0;
        var result12 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Type_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_master = await result1.json();
        // console.log(result2.data)

        // res.json(result);

        var totaldata12 = result12.data.Table
        // console.log("First ", totaldata12.length);
        // console.log( result12.data)
        for (var i = 0; i < totaldata12.length; i++) {
            console.log(totaldata12[i].type_code);

            const filter = {
                type_code: totaldata12[i].type_code,

            };
            const updatedoc = {
                $set: {
                    type_code: totaldata12[i].type_code,
                    type: totaldata12[i].type,
                    flag: totaldata12[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await type_mst.updateMany(filter, updatedoc, option);
            // console.log("fghhghfgvb", updatedoc)
            var n = result.n
            tottaltypemstdateupdate = tottaltypemstdateupdate + n;

        }

        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0; var tottalrtmstdateupdate = 0; var tottalsectmstdateupdate = 0; var tottalloadtypemstdateupdate = 0;
        var result13 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Loadtype_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_master = await result1.json();
        // console.log(result2.data)

        // res.json(result);

        var totaldata13 = result13.data.Table;
        // console.log("First", totaldata13.length);
        // console.log(result13.data)
        for (var i = 0; i < totaldata13.length; i++) {
            const filter = {
                ltypecode: totaldata13[i].ltypecode,

            };
            const updatedoc = {
                $set: {
                    ltypecode: totaldata13[i].ltypecode,
                    load: totaldata13[i].load,
                    flag: totaldata13[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await loadtype_mst.updateMany(filter, updatedoc, option);
            // console.log("fghhghfgvb", updatedoc)
            var n = result.n
            tottalloadtypemstdateupdate = tottalloadtypemstdateupdate + n;

        }

        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0; var tottalrtmstdateupdate = 0; var tottalsectmstdateupdate = 0; var tottalloadtypemstdateupdate = 0; var tottalindexmstdateupdate = 0;
        var result14 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Index_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_master = await result1.json();
        // console.log(result2.data)

        // res.json(result);

        var totaldata14 = result14.data.Table
        // console.log("First ", totaldata14.length);
        // console.log(result14.data)
        for (var i = 0; i < totaldata14.length; i++) {
            const filter = {
                indexcode: totaldata14[i].indexcode,

            };
            const updatedoc = {
                $set: {
                    indexcode: totaldata14[i].indexcode,
                    fincode: totaldata14[i].fincode,
                    scripcode: totaldata14[i].scripcode,
                    indexname: totaldata14[i].indexname,
                    index_gp: totaldata14[i].index_gp,
                    subgroup: totaldata14[i].subgroup,
                    flag: totaldata14[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await index_mst.updateMany(filter, updatedoc, option);
            // console.log("fghhghfgvb", updatedoc)
            var n = result.n
            tottalindexmstdateupdate = tottalindexmstdateupdate + n;

        }

        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0; var tottalrtmstdateupdate = 0; var tottalsectmstdateupdate = 0; var tottalloadtypemstdateupdate = 0; var tottalindexmstdateupdate = 0; var tottalschemeobjectivedateupdate
        var result15 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_objective&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_master = await result1.json();
        // console.log(result2.data)

        // res.json(result);

        var totaldata15 = result15.data.Table;
        // console.log("saggss ", totaldata15.length);
        // console.log(result15.data)
        for (var i = 0; i < totaldata15.length; i++) {
            const filter = {
                schemecode: totaldata15[i].schemecode,

            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata15[i].schemecode,
                    objective: totaldata15[i].objective,
                    flag: totaldata15[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await scheme_objective.updateMany(filter, updatedoc, option);
            // console.log("fghhghfgvb", updatedoc)
            var n = result.n
            tottalschemeobjectivedateupdate = tottalschemeobjectivedateupdate + n;

        }


        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0; var tottalrtmstdateupdate = 0; var tottalsectmstdateupdate = 0; var tottalloadtypemstdateupdate = 0; var tottalindexmstdateupdate = 0; var tottalschemeobjectivedateupdate = 0; var tottalschemertcodedateupdate = 0;
        var result16 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_rtcode&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_master = await result1.json();
        // console.log(result2.data)

        // res.json(result);

        var totaldata16 = result16.data.Table
        // console.log("cgdf ", totaldata16.length);
        // console.log(result16.data)

        for (var i = 0; i < totaldata16.length; i++) {
            const filter = {
                rtschemecode: totaldata16[i].rtschemecode,

            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata16[i].schemecode,
                    rtschemecode: totaldata16[i].rtschemecode,
                    flag: totaldata16[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await scheme_rtcode.updateMany(filter, updatedoc, option);
            // console.log("fghhghfgvb", updatedoc)
            var n = result.n
            tottalschemertcodedateupdate = tottalschemertcodedateupdate + n;

        }

        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0; var tottalrtmstdateupdate = 0; var tottalsectmstdateupdate = 0; var tottalloadtypemstdateupdate = 0; var tottalindexmstdateupdate = 0; var tottalschemeobjectivedateupdate = 0; var tottalschemertcodedateupdate = 0; var tottalamckeypersonsdateupdate = 0;
        var result17 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Amc_keypersons&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_master = await result1.json();
        // console.log(result2.data)

        // res.json(result);

        var totaldata17 = result17.data.Table
        // console.log("fbcc ", totaldata17.length);
        // console.log(result17.data)
        for (var i = 0; i < totaldata17.length; i++) {
            // console.log(totaldata17[i].amc_code)
            const filter = {
                desig: totaldata17[i].desig,

            };
            const updatedoc = {
                $set: {
                    amc_code: totaldata17[i].amc_code,
                    amc_name: totaldata17[i].amc_name,
                    srno: totaldata17[i].srno,
                    name: totaldata17[i].name,
                    desig: totaldata17[i].desig,
                    flag: totaldata17[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await amc_keypersons.updateMany(filter, updatedoc, option);
            // console.log("fghhghfgvb", updatedoc)
            var n = result.n
            tottalamckeypersonsdateupdate = tottalamckeypersonsdateupdate + n;

        }


        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0; var tottalrtmstdateupdate = 0; var tottalsectmstdateupdate = 0; var tottalloadtypemstdateupdate = 0; var tottalindexmstdateupdate = 0; var tottalschemeobjectivedateupdate = 0; var tottalschemertcodedateupdate = 0; var tottalamckeypersonsdateupdate = 0; var tottalmfsipdateupdate = 0;
        var result18 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Mf_sip&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_master = await result1.json();
        // console.log(result2.data)

        // res.json(result);

        var totaldata18 = result18.data.Table;
        // console.log("dssf ", totaldata18.length);
        // console.log(result18.data)

        for (var i = 0; i < totaldata18.length; i++) {
            // console.log(totaldata18[i].schemecode);

            const filter = {
                frequency: totaldata18[i].frequency,

            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata18[i].schemecode,
                    amc_code: totaldata18[i].amc_code,
                    frequency: totaldata18[i].frequency,
                    sip: totaldata18[i].sip,
                    sipdatescondition: totaldata18[i].sipdatescondition,
                    Dates: totaldata18[i].Dates,
                    sipdaysall: totaldata18[i].sipdaysall,
                    sipmininvest: totaldata18[i].sipmininvest,
                    sipaddninvest: totaldata18[i].sipaddninvest,
                    sipfrequencyno: totaldata18[i].sipfrequencyno,
                    sipminimumperiod: totaldata18[i].sipminimumperiod,
                    sipmaximumperiod: totaldata18[i].sipmaximumperiod,
                    sipmincumamount: totaldata18[i].sipmincumamount,
                    sipminunits: totaldata18[i].sipminunits,
                    sipmultiplesunits: totaldata18[i].sipmultiplesunits,
                    flag: totaldata18[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await mf_sip.updateMany(filter, updatedoc, option);
            // console.log("fghhghfgvb", updatedoc)
            var n = result.n
            tottalmfsipdateupdate = tottalmfsipdateupdate + n;

        }
        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0; var tottalrtmstdateupdate = 0; var tottalsectmstdateupdate = 0; var tottalloadtypemstdateupdate = 0; var tottalindexmstdateupdate = 0; var tottalschemeobjectivedateupdate = 0; var tottalschemertcodedateupdate = 0; var tottalamckeypersonsdateupdate = 0; var tottalmfsipdateupdate = 0; var tottalmfswpdateupdate = 0;
        var result19 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Mf_swp&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await result2.json();
        // console.log(result2.data)
        // return false;
        var totaldata19 = result19.data.Table
        // console.log(result19.data.Table)
        // console.log("Second ", totaldata19.length);
        // var totaldata2 = result19.data;
        // console.log(result19.data)
        for (var i = 0; i < totaldata19.length; i++) {
            // console.log(totaldata19[i].schemecode);
            const filter = {
                swp: totaldata19[i].swp,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata19[i].schemecode,
                    amc_code: totaldata19[i].amc_code,
                    frequency: totaldata19[i].frequency,
                    swp: totaldata19[i].swp,
                    swpdatescondition: totaldata19[i].swpdatescondition,
                    Dates: totaldata19[i].Dates,
                    swpdaysall: totaldata19[i].swpdaysall,
                    swpmininvest: totaldata19[i].swpmininvest,
                    swpaddninvest: totaldata19[i].swpaddninvest,
                    swpfrequencyno: totaldata19[i].swpfrequencyno,
                    swpminimumperiod: totaldata19[i].swpminimumperiod,
                    swpmaximumperiod: totaldata19[i].swpmaximumperiod,
                    swpmincumamount: totaldata19[i].swpmincumamount,
                    swpminunits: totaldata19[i].swpminunits,
                    swpmultiplesunits: totaldata19[i].swpmultiplesunits,
                    Flag: totaldata19[i].Flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await mf_swp.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalmfswpdateupdate = tottalmfswpdateupdate + n;
        }

        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0; var tottalrtmstdateupdate = 0; var tottalsectmstdateupdate = 0; var tottalloadtypemstdateupdate = 0;
        var tottalindexmstdateupdate = 0; var tottalschemeobjectivedateupdate = 0; var tottalschemertcodedateupdate = 0; var tottalamckeypersonsdateupdate = 0; var tottalmfsipdateupdate = 0; var tottalmfswpdateupdate = 0; var tottalmfstpdateupdate = 0;
        var result20 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Mf_stp&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await result2.json();
        // console.log(result2.data)
        // return false;
        var totaldata20 = result20.data.Table
        // console.log(result20.data.Table)
        // console.log("Seconcvd ", totaldata20.length);
        // var totaldata20 = result20.data;
        // console.log(result20.data)
        for (var i = 0; i < totaldata20.length; i++) {
            // console.log(totaldata20[i].schemecode);
            const filter = {
                Dates: totaldata20[i].Dates,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata20[i].schemecode,
                    amc_code: totaldata20[i].amc_code,
                    frequency: totaldata20[i].frequency,
                    swp: totaldata20[i].swp,
                    swpdatescondition: totaldata20[i].swpdatescondition,
                    Dates: totaldata20[i].Dates,
                    swpdaysall: totaldata20[i].swpdaysall,
                    swpmininvest: totaldata20[i].swpmininvest,
                    swpaddninvest: totaldata20[i].swpaddninvest,
                    swpfrequencyno: totaldata20[i].swpfrequencyno,
                    swpminimumperiod: totaldata20[i].swpminimumperiod,
                    swpmaximumperiod: totaldata20[i].swpmaximumperiod,
                    swpmincumamount: totaldata20[i].swpmincumamount,
                    swpminunits: totaldata20[i].swpminunits,
                    swpmultiplesunits: totaldata20[i].swpmultiplesunits,
                    flag: totaldata20[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await mf_stp.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalmfstpdateupdate = tottalmfstpdateupdate + n;
        }

        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0; var tottalrtmstdateupdate = 0; var tottalsectmstdateupdate = 0; var tottalloadtypemstdateupdate = 0;
        var tottalindexmstdateupdate = 0; var tottalschemeobjectivedateupdate = 0; var tottalschemertcodedateupdate = 0; var tottalamckeypersonsdateupdate = 0; var tottalmfsipdateupdate = 0; var tottalmfswpdateupdate = 0; var tottalmfstpdateupdate = 0; var tottalschemeindexpartdateupdate = 0;
        var result21 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_index_part&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await result2.json();
        // console.log(result2.data)
        // return false;
        var totaldata21 = result21.data.Table
        // console.log(result21.data.Table)
        // console.log("vd ", totaldata21.length);
        // var totaldata21 = result21.data;
        // console.log(result21.data)
        for (var i = 0; i < totaldata21.length; i++) {
            // console.log(totaldata21[i].schemecode);
            const filter = {
                SCHEMECODE: totaldata21[i].SCHEMECODE,
            };
            const updatedoc = {
                $set: {
                    SCHEMECODE: totaldata21[i].SCHEMECODE,
                    INDEXCODE: totaldata21[i].INDEXCODE,
                    Benchmark_Weightage: totaldata21[i].Benchmark_Weightage,
                    IndexOrder: totaldata21[i].IndexOrder,
                    Remark: totaldata21[i].Remark,
                    FLAG: totaldata21[i].FLAG,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await scheme_index_part.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalschemeindexpartdateupdate = tottalschemeindexpartdateupdate + n;
        }

        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0; var tottalrtmstdateupdate = 0; var tottalsectmstdateupdate = 0; var tottalloadtypemstdateupdate = 0;
        var tottalindexmstdateupdate = 0; var tottalschemeobjectivedateupdate = 0; var tottalschemertcodedateupdate = 0; var tottalamckeypersonsdateupdate = 0; var tottalmfsipdateupdate = 0; var tottalmfswpdateupdate = 0; var tottalmfstpdateupdate = 0; var tottalschemeindexpartdateupdate = 0; var tottalcompanymasterdateupdate = 0;
        var result22 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Companymaster&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await result2.json();
        // console.log(result2.data)
        // return false;
        var totaldata22 = result22.data.Table
        // console.log(result22.data.Table)
        // console.log("sdfg ", totaldata22.length);
        // var totaldata22 = result22.data;
        // console.log(result22.data)
        for (var i = 0; i < totaldata22.length; i++) {
            // console.log(totaldata22[i].fincode);
            const filter = {
                fincode: totaldata22[i].fincode,
            };
            const updatedoc = {
                $set: {
                    fincode: totaldata22[i].fincode,
                    scripcode: totaldata22[i].scripcode,
                    symbol: totaldata22[i].symbol,
                    compname: totaldata22[i].compname,
                    s_name: totaldata22[i].s_name,
                    ind_code: totaldata22[i].ind_code,
                    Industry: totaldata22[i].Industry,
                    isin: totaldata22[i].isin,
                    status: totaldata22[i].status,
                    series: totaldata22[i].series,
                    listing: totaldata22[i].listing,
                    sublisting: totaldata22[i].sublisting,
                    fv: totaldata22[i].fv,
                    flag: totaldata22[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await company_master.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalcompanymasterdateupdate = tottalcompanymasterdateupdate + n;
        }


        var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
        var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0; var tottalrtmstdateupdate = 0; var tottalsectmstdateupdate = 0; var tottalloadtypemstdateupdate = 0;
        var tottalindexmstdateupdate = 0; var tottalschemeobjectivedateupdate = 0; var tottalschemertcodedateupdate = 0; var tottalamckeypersonsdateupdate = 0; var tottalmfsipdateupdate = 0; var tottalmfswpdateupdate = 0; var tottalmfstpdateupdate = 0; var tottalschemeindexpartdateupdate = 0; var tottalcompanymasterdateupdate = 0; var tottalfundmanagermstdateupdate = 0;
        var result23 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Fundmanager_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        // var Scheme_details = await result2.json();
        // console.log(result2.data)
        // return false;
        var totaldata23 = result23.data.Table
        // console.log(result23.data.Table)
        // console.log("cvxcv ", totaldata23.length);
        // var totaldata23 = result23.data;
        // console.log(result23.data)
        for (var i = 0; i < totaldata23.length; i++) {
            // console.log(totaldata23[i].id);
            const filter = {
                initial: totaldata23[i].initial,
            };
            const updatedoc = {
                $set: {
                    id: totaldata23[i].id,
                    initial: totaldata23[i].initial,
                    fundmanager: totaldata23[i].fundmanager,
                    qualification: totaldata23[i].qualification,
                    experience: totaldata23[i].experience,
                    basicdetails: totaldata22[i].basicdetails,
                    designation: totaldata23[i].designation,
                    age: totaldata23[i].age,
                    reporteddate: totaldata23[i].reporteddate,
                    flag: totaldata23[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await fundmanager_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalfundmanagermstdateupdate = tottalfundmanagermstdateupdate + n;
        }


                var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
                var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0; var tottalrtmstdateupdate = 0; var tottalsectmstdateupdate = 0; var tottalloadtypemstdateupdate = 0;
                var tottalindexmstdateupdate = 0; var tottalschemeobjectivedateupdate = 0; var tottalschemertcodedateupdate = 0; var tottalamckeypersonsdateupdate = 0; var tottalmfsipdateupdate = 0; var tottalmfswpdateupdate = 0; var tottalmfstpdateupdate = 0; var tottalschemeindexpartdateupdate = 0; var tottalcompanymasterdateupdate = 0; var tottalfundmanagermstdateupdate = 0; var tottalschemeisinmasterdateupdate = 0;
                var result24 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=schemeisinmaster&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
                // var Scheme_details = await result2.json();
                // console.log(result2.data)
                // return false;
                var totaldata24 = result24.data.Table
                // console.log(result24.data.Table)
                // console.log("sffgff ", totaldata24.length);
                // var totaldata24 = result24.data;
                // console.log(result24.data)
                for (var i = 0; i < totaldata24.length; i++) {
                    // console.log(totaldata24[i].Id);
                    const filter = {
                        ISIN: totaldata24[i].ISIN,
                    };
                    const updatedoc = {
                        $set: {
                            Id: totaldata24[i].Id,
                            ISIN: totaldata24[i].ISIN,
                            Schemecode: totaldata24[i].Schemecode,
                            Amc_code: totaldata24[i].Amc_code,
                            NseSymbol: totaldata24[i].NseSymbol,
                            Series: totaldata22[i].Series,
                            RTASchemecode: totaldata24[i].RTASchemecode,
                            AMCSchemecode: totaldata24[i].AMCSchemecode,
                            LongSchemeDescrip: totaldata24[i].LongSchemeDescrip,
                            ShortSchemeDescrip: totaldata24[i].ShortSchemeDescrip,
                            Status: totaldata24[i].StatusStatus,
                            flag: totaldata24[i].flag,

                        },
                    };
                    const option = {
                        upsert: true,
                    };
                    const result = await scheme_isinmaster.updateMany(filter, updatedoc, option);
                    var n = result.n
                    tottalschemeisinmasterdateupdate = tottalschemeisinmasterdateupdate + n;
                }

                var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
                var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0; var tottalrtmstdateupdate = 0; var tottalsectmstdateupdate = 0; var tottalloadtypemstdateupdate = 0;
                var tottalindexmstdateupdate = 0; var tottalschemeobjectivedateupdate = 0; var tottalschemertcodedateupdate = 0; var tottalamckeypersonsdateupdate = 0; var tottalmfsipdateupdate = 0; var tottalmfswpdateupdate = 0; var tottalmfstpdateupdate = 0; var tottalschemeindexpartdateupdate = 0; var tottalcompanymasterdateupdate = 0; var tottalfundmanagermstdateupdate = 0; var tottalschemeisinmasterdateupdate = 0; var tottalschemergessdateupdate = 0;
                var result25 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_rgess&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
                // var Scheme_details = await result2.json();
                // console.log(result2.data)
                // return false;
                var totaldata25 = result25.data.Table
                // console.log(result25.data.Table)
                console.log("Second ", totaldata25.length);
                // var totaldata25 = result25.data;
                console.log(result25.data)
                for (var i = 0; i < totaldata25.length; i++) {
                    // console.log(totaldata25[i].schemecode);
                    const filter = {
                        schemecode: totaldata25[i].schemecode,
                    };
                    const updatedoc = {
                        $set: {
                            schemecode: totaldata25[i].schemecode,
                            schemename: totaldata25[i].schemename,
                            flag: totaldata25[i].flag,


                        },
                    };
                    const option = {
                        upsert: true,
                    };
                    const result = await scheme_rgess.updateMany(filter, updatedoc, option);
                    var n = result.n
                    tottalschemergessdateupdate = tottalschemergessdateupdate + n;
                }

                var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
                var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0; var tottalrtmstdateupdate = 0; var tottalsectmstdateupdate = 0; var tottalloadtypemstdateupdate = 0;
                var tottalindexmstdateupdate = 0; var tottalschemeobjectivedateupdate = 0; var tottalschemertcodedateupdate = 0; var tottalamckeypersonsdateupdate = 0; var tottalmfsipdateupdate = 0; var tottalmfswpdateupdate = 0; var tottalmfstpdateupdate = 0; var tottalschemeindexpartdateupdate = 0; var tottalcompanymasterdateupdate = 0; var tottalfundmanagermstdateupdate = 0; var tottalschemeisinmasterdateupdate = 0; var tottalschemergessdateupdate = 0; var tottalindustrymstdateupdate = 0;
                var result26 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Industry_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
                // var Scheme_details = await result2.json();
                // console.log(result2.data)
                // return false;
                var totaldata26 = result26.data.Table
                // console.log(result26.data.Table)
                // console.log("Second ", totaldata26.length);
                // var totaldata26 = result26.data;
                // console.log(result26.data)
                for (var i = 0; i < totaldata26.length; i++) {
                    // console.log(totaldata26[i].Ind_code);
                    const filter = {
                        Ind_code: totaldata26[i].Ind_code,
                    };
                    const updatedoc = {
                        $set: {
                            Ind_code: totaldata26[i].Ind_code,
                            Industry: totaldata26[i].Industry,
                            Ind_shortname: totaldata26[i].Ind_shortname,
                            Sector: totaldata26[i].Sector,
                            Sector_code: totaldata26[i].Sector_code,
                            flag: totaldata26[i].flag,


                        },
                    };
                    const option = {
                        upsert: true,
                    };
                    const result = await industry_mst.updateMany(filter, updatedoc, option);
                    var n = result.n
                    tottalindustrymstdateupdate = tottalindustrymstdateupdate + n;
                }

                var totalschememasterupdate = 0; var tottalschemedetailupdate = 0; var tottalamcmstdateupdate = 0; var tottalsclassmstdateupdate = 0;
                var tottalasectmstdateupdate = 0; var tottalcustmstdateupdate = 0; var tottaloptionmstdateupdate = 0; var tottalplanmstdateupdate = 0; var tottaldivmstdateupdate = 0; var tottalrtmstdateupdate = 0; var tottalsectmstdateupdate = 0; var tottalloadtypemstdateupdate = 0;
                var tottalindexmstdateupdate = 0; var tottalschemeobjectivedateupdate = 0; var tottalschemertcodedateupdate = 0; var tottalamckeypersonsdateupdate = 0; var tottalmfsipdateupdate = 0; var tottalmfswpdateupdate = 0; var tottalmfstpdateupdate = 0; var tottalschemeindexpartdateupdate = 0; var tottalcompanymasterdateupdate = 0; var tottalfundmanagermstdateupdate = 0; var tottalschemeisinmasterdateupdate = 0; var tottalschemergessdateupdate = 0; var tottalindustrymstdateupdate = 0;
                var tottalschemeloaddateupdate = 0;
                var result27 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Schemeload&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
                // var Scheme_details = await result2.json();
                // console.log(result2.data)
                // return false;
                var totaldata27 = result27.data.Table;
                // console.log(result27.data.Table)
                console.log("cvffgsf ", totaldata27.length);
                // var totaldata27 = result27.data;
                console.log(result27.data)
                for (var i = 0; i < totaldata27.length; i++) {
                    // console.log(totaldata27[i].SCHEMECODE);
                    const filter = {
                        LTYPECODE: totaldata27[i].LTYPECODE,
                    };
                    const updatedoc = {
                        $set: {
                            SCHEMECODE: totaldata27[i].SCHEMECODE,
                            LDATE: totaldata27[i].LDATE,
                            LTYPECODE: totaldata27[i].LTYPECODE,
                            LSRNO: totaldata27[i].LSRNO,
                            FRMAMOUNT: totaldata27[i].FRMAMOUNT,
                            UPTOAMOUNT: totaldata27[i].UPTOAMOUNT,
                            MINPERIOD: totaldata27[i].MINPERIOD,
                            MAXPERIOD: totaldata27[i].MAXPERIOD,
                            MIN: totaldata27[i].MIN,
                            MAX: totaldata27[i].MAX,
                            ENTRYLOAD: totaldata27[i].ENTRYLOAD,
                            EXITLOAD: totaldata27[i].EXITLOAD,
                            REMARKS: totaldata27[i].REMARKS,
                            Period_Condition: totaldata27[i].Period_Condition,
                            Period_Type: totaldata27[i].Period_Type,
                            Period: totaldata27[i].Period,
                            Amount_Condition: totaldata27[i].Amount_Condition,
                            Amount_Type: totaldata27[i].Amount_Type,
                            Per_Condition: totaldata27[i].Per_Condition,
                            Per_Frm: totaldata27[i].Per_Frm,
                            Per_To: totaldata27[i].Per_To,
                            FLAG: totaldata27[i].FLAG,



                        },
                    };
                    const option = {
                        upsert: true,
                    };
                    const result = await scheme_load.updateMany(filter, updatedoc, option);
                    var n = result.n
                    tottalschemeloaddateupdate = tottalschemeloaddateupdate + n;
                }







        //         // var succmsg = {"msg":"Data save successfully"};
        //         // return result;
        //         // res.json(result);


        //     } catch (err) {
        //         console.log("Errorqqqq=", err)
        //     }
        // }


        // // async function thirdrawdatamaster() {
        // //     try {
        // //         // var totalexpenceratioupdate = 0; 
        // //         // //Scheme Expence Ratio URL
        // //         // var result1 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Expenceratio&date=16092022&section=MFOther&sub=&token=VGVDoJC54Wuvf7coLWYLc1NYUAiaYrCs')
        // //         // var totaldata1 = result1.data.Table
        // //         // console.log(totaldata1.length)
        // //         // for (var i = 0; i < totaldata1.length; i++) {
        // //         //     const filter = {
        // //         //         schemecode: totaldata1[i].schemecode,
        // //         //         amc_code:totaldata1[i].amc_code,
        // //         //     };
        // //         //     const updatedoc = {
        // //         //         $set: {
        // //         //             amc_code: Number(totaldata1[i].amc_code),
        // //         //             schemecode: Number(totaldata1[i].schemecode),
        // //         //             date: moment(new Date(totaldata1[i].date)).format("YYYY-MM-DD"),
        // //         //             expratio: Number(totaldata1[i].expratio),
        // //         //             flag: totaldata1[i].flag,
        // //         //         },
        // //         //     };
        // //         //     const option = {
        // //         //         upsert: true,
        // //         //     };
        // //         //     const result = await sch_expenceratio.updateMany(filter, updatedoc, option);
        // //         //     var n = result.n
        // //         //     totalexpenceratioupdate = totalexpenceratioupdate + n;
        // //         // }
        // //         // console.log("Total Scheme_Expence_Ratio Update=", totalexpenceratioupdate)

        // //         var totaleqdetailupdate = 0;
        // //         //Scheme EQ Detail URL
        // //         var result2 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_eq_details&date=16092022&section=MFOther&sub=&token=VGVDoJC54Wuvf7coLWYLc1NYUAiaYrCs')
        // //         var totaldata2 = result2.data.Table
        // //         console.log(totaldata2.length)
        // //         for (var i = 0; i < totaldata2.length; i++) {
        // //             const filter = {
        // //                 SchemeCode: totaldata2[i].SchemeCode,
        // //                 MonthEnd: totaldata2[i].MonthEnd,
        // //             };
        // //             const updatedoc = {
        // //                 $set: {
        // //                     SchemeCode: Number(totaldata2[i].SchemeCode),
        // //                     MonthEnd: Number(totaldata2[i].MonthEnd),
        // //                     MCAP: Number(totaldata2[i].MCAP),
        // //                     PE: Number(totaldata2[i].PE),
        // //                     PB: Number(totaldata2[i].PB),
        // //                     Div_Yield: Number(totaldata2[i].Div_Yield),
        // //                     FLAG: totaldata2[i].FLAG,

        // //                 },
        // //             };
        // //             const option = {
        // //                 upsert: true,
        // //             };
        // //             const result = await sch_eqdetail.updateMany(filter, updatedoc, option);
        // //             var n = result.n
        // //             totaleqdetailupdate = totaleqdetailupdate + n;
        // //         }
        // //         console.log("Total Scheme_EQ_Detail Update=", totaleqdetailupdate)

        // //         var totalfmpyeilddetailupdate = 0;
        // //         //Scheme EQ Detail URL
        // //         var result3 = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_eq_details&date=16092022&section=MFOther&sub=&token=VGVDoJC54Wuvf7coLWYLc1NYUAiaYrCs')
        // //         var totaldata3 = result3.data.Table
        // //         console.log(totaldata3.length)
        // //         for (var i = 0; i < totaldata3.length; i++) {
        // //             const filter = {
        // //                 schemecode: totaldata3[i].schemecode,
        // //             };
        // //             const updatedoc = {
        // //                 $set: {
        // //                     schemecode: (Number(totaldata3[i].schemecode)) ? (Number(totaldata3[i].schemecode)) : (0),
        // //                     maturitydate: moment(new Date(totaldata3[i].maturitydate)).format("YYYY-MM-DD"),
        // //                     tenure_number: Number(totaldata3[i].tenure_number),
        // //                     tenure_option: totaldata3[i].tenure_option,
        // //                     net_inticative_yield1: Number(totaldata3[i].net_inticative_yield1),
        // //                     net_inticative_yield2: Number(totaldata3[i].net_inticative_yield2),
        // //                     post_taxyield_ind1: Number(totaldata3[i].post_taxyield_ind1),
        // //                     post_taxyield_ind2: Number(totaldata3[i].post_taxyield_ind2),
        // //                     post_taxyield_nonind1: Number(totaldata3[i].post_taxyield_nonind1),
        // //                     post_taxyield_nonind2: Number(totaldata3[i].post_taxyield_nonind2),
        // //                     exit_load: totaldata3[i].exit_load,
        // //                     rollover: totaldata3[i].rollover,
        // //                     maturitydate_after_rollover: moment(new Date(totaldata3[i].maturitydate_after_rollover)).format("YYYY-MM-DD"),
        // //                     tenure_no_rollover: totaldata3[i].tenure_no_rollover,
        // //                     tenure_option_rollover: totaldata3[i].tenure_option_rollover,
        // //                     flag: totaldata3[i].flag,

        // //                 },
        // //             };
        // //             const option = {
        // //                 upsert: true,
        // //             };
        // //             const result = await sch_fmpyielddetail.updateMany(filter, updatedoc, option);
        // //             var n = result.n
        // //             totalfmpyeilddetailupdate = totalfmpyeilddetailupdate + n;
        // //         }
        // //         console.log("Total Scheme_EQ_Detail Update=", totalfmpyeilddetailupdate)
    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

module.exports = { update_operationmaster }