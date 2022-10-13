var Axios = require('axios');
const e = require("express");
const moment = require('moment');
var db = require("../config.js");
var async = require('async');
var { amc_keypersons, amc_mst, amc_paum, asect_mst, cust_mst, div_details, div_mst, fv_change, daily_Fundmanager, fundmanager_mst, index_mst, industry_mst, loadtype_mst, merged_schemes, mF_BulkDeal, company_master, mF_Ratios_DefaultBM, current_nav, option_mst, plan_mst, mf_portfolio, scheme_paum, portfolio_inout, sect_allocation, rt_mst, sch_assetalloc, avg_maturity, sclass_mst ,scheme_load ,type_mst, mf_swp, mf_stp, mf_sip, sect_mst, scheme_rtcode, scheme_rgess, mf_ratio, scheme_objective, scheme_namechange, scheme_expenceratio, scheme_index_part, scheme_fmpyielddetail, scheme_eqdetail} = require('../schema/onetime.schema');



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

        var FV_Change = await update_fvchange();
        console.log("FV_Change=", FV_Change)

        var FUND_Manager = await update_fundmanager();
        console.log("FUND_Manager=", FUND_Manager)

        var FUNDManager_Mst = await update_fundmanagermst();
        console.log("FUNDManager_Mst=", FUNDManager_Mst)

        var INDEX_Mst = await update_indexmst();
        console.log("INDEX_Mst=", INDEX_Mst)

        var INDUSTRY_Mst = await update_industrtmst();
        console.log("INDUSTRY_Mst=", INDUSTRY_Mst)

        var Loadtype_mst = await update_loadtypemst();
        console.log("Loadtype_mst=", Loadtype_mst)

        var Merged_Schemes = await update_mergerdschemes();
        console.log("Merged_Schemes=", Merged_Schemes)

        var MF_BulkDeal = await update_mfbulkdeal();
        console.log("MF_BulkDeal=", MF_BulkDeal)

        var Company_Master = await update_companymaster();
        console.log("Company_Master=", Company_Master)

        var MF_Ratios_DefaultBM = await update_mfratioDefaultBM();
        console.log("MF_Ratios_DefaultBM=", MF_Ratios_DefaultBM)

        var Current_nav = await update_currentnav();
        console.log("Current_nav=", Current_nav)

        var Option_Mst = await update_optionmst();
        console.log("Option_Mst=", Option_Mst)

        var Plan_Mst = await update_planmst();
        console.log("Plan_Mst=", Plan_Mst)

        var Mf_portfolio = await update_mfportfolio();
        console.log("Mf_portfolio=", Mf_portfolio)

        var Scheme_Paum = await update_schemepaum();
        console.log("Scheme_Paum=", Scheme_Paum)

        var Portfolio_Inout = await update_portfolio_inout();
        console.log("Portfolio_Inout=", Portfolio_Inout)

        var Sect_Allocation = await update_sect_allocation();
        console.log("Sect_Allocation=", Sect_Allocation)

        var Rt_Mst = await update_rt_mst();
        console.log("Rt_Mst=", Rt_Mst)

        var scheme_AssetAlloc = await update_scheme_assetalloc();
        console.log("scheme_AssetAlloc=", scheme_AssetAlloc)


        var Avg_maturity = await update_avg_maturity();
        console.log("Avg_maturity=", Avg_maturity)

        var Sclass_Mst = await update_sclassmst();
        console.log("Sclass_Mst=", Sclass_Mst)

        var Scheme_Load = await update_schemeload();
        console.log("Scheme_Load=", Scheme_Load)

        var Scheme_EqDetail = await update_schemeeqdetail();
        console.log("Scheme_EqDetail=", Scheme_EqDetail)

        var Scheme_FmpyieldDetail = await update_schemefmpyielddetail();
        console.log("Scheme_FmpyieldDetail=", Scheme_FmpyieldDetail)

        var Scheme_index_Part = await update_schemeindexpart();
        console.log("Scheme_index_Part=", Scheme_index_Part)

        var Scheme_Expence_Ratio = await update_schemeexpenceratio();
        console.log("Scheme_Expence_Ratio=", Scheme_Expence_Ratio)

        var Scheme_Name_Change = await update_schemenamechange();
        console.log("Scheme_Name_Change=", Scheme_Name_Change)

        var Scheme_Objective = await update_schemeobjective();
        console.log("Scheme_Objective=", Scheme_Objective)

        var Mf_Ratio = await update_mfratio();
        console.log("Mf_Ratio=", Mf_Ratio)

        var Scheme_Rgess = await update_schemergess();
        console.log("Scheme_Rgess=", Scheme_Rgess)

        var Scheme_Rtcode = await update_schemertcode();
        console.log("Scheme_Rtcode=", Scheme_Rtcode)

        var Sect_Mst = await update_sectmst();
        console.log("Sect_Mst=", Sect_Mst)

        var Mf_sip = await update_mfsip();
        console.log("Mf_sip=", Mf_sip)

        var Mf_stp = await update_mfstp();
        console.log("Mf_stp=", Mf_stp)

        var Mf_swp = await update_mfswp();
        console.log("Mf_swp=", Mf_swp)

        var TYPE_Mst = await update_typemst();
        console.log("TYPE_Mst=", TYPE_Mst)



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
        console.log(totaldata.length)
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

async function update_fvchange() {
    try {
        var totalfvchangeupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Fvchange&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                amc_code: totaldata[i].amc_code,
                schemecode: totaldata[i].schemecode,
                scheme_name: totaldata[i].scheme_name,
                amc_code: totaldata[i].amc_code,
            };
            const updatedoc = {
                $set: {
                    amc_code: (Number(totaldata[i].amc_code)),
                    schemecode: Number(totaldata[i].schemecode),
                    scheme_name: (totaldata[i].scheme_name),
                    fvbefore: Number(totaldata[i].fvbefore),
                    fvafter: Number(totaldata[i].fvafter),
                    fvdate: moment(new Date(totaldata[i].fvdate)).format("YYYY-MM-DD"),
                    flag: totaldata[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await fv_change.updateMany(filter, updatedoc, option);
            var n = result.n
            totalfvchangeupdate = totalfvchangeupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: totalfvchangeupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_fundmanager() {
    try {
        var totaldailyFundmanagerupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=DailyFundmanager&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                amc: totaldata[i].amc,
                schemecode: totaldata[i].schemecode,
                fundManger1: totaldata[i].fundManger1,
            };
            const updatedoc = {
                $set: {
                    date: moment(new Date(totaldata[i].date)).format("YYYY-MM-DD"),
                    amc: Number(totaldata[i].amc),
                    schemecode: Number(totaldata[i].schemecode),
                    fundManger1: Number(totaldata[i].fundManger1),
                    fundManger2: Number(totaldata[i].fundManger2),
                    fundManger3: Number(totaldata[i].fundManger3),
                    fundManger4: Number(totaldata[i].fundManger4),
                    flag: totaldata[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await daily_Fundmanager.updateMany(filter, updatedoc, option);
            var n = result.n
            totaldailyFundmanagerupdate = totaldailyFundmanagerupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: totaldailyFundmanagerupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_fundmanagermst() {
    try {
        var tottalfundmanagermstupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Fundmanager_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                id: totaldata[i].id,
                initial: totaldata[i].initial,
                fundmanager: totaldata[i].fundmanager,
                experience: totaldata[i].experience,
                reporteddate: totaldata[i].reporteddate,
                basicdetails: totaldata[i].basicdetails,
                designation: totaldata[i].designation,
            };
            const updatedoc = {
                $set: {
                    id: totaldata[i].id,
                    initial: totaldata[i].initial,
                    fundmanager: totaldata[i].fundmanager,
                    qualification: totaldata[i].qualification,
                    experience: totaldata[i].experience,
                    basicdetails: totaldata[i].basicdetails,
                    designation: totaldata[i].designation,
                    age: totaldata[i].age,
                    reporteddate: totaldata[i].reporteddate,
                    flag: totaldata[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await fundmanager_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalfundmanagermstupdate = tottalfundmanagermstupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalfundmanagermstupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_indexmst() {
    try {
        var tottalindexmstupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Index_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                indexcode: totaldata[i].indexcode,
                fincode: totaldata[i].fincode,
                indexname: totaldata[i].indexname,
                index_gp: totaldata[i].index_gp,
            };
            const updatedoc = {
                $set: {
                    indexcode: totaldata[i].indexcode,
                    fincode: totaldata[i].fincode,
                    scripcode: totaldata[i].scripcode,
                    indexname: totaldata[i].indexname,
                    index_gp: totaldata[i].index_gp,
                    subgroup: totaldata[i].subgroup,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await index_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalindexmstupdate = tottalindexmstupdate + n;

        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalindexmstupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_industrtmst() {
    try {
        var tottalindustrymstupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Industry_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                Ind_code: totaldata[i].Ind_code,
                Industry: totaldata[i].Industry,
                Ind_shortname: totaldata[i].Ind_shortname,
                Sector_code: totaldata[i].Sector_code,
            };
            const updatedoc = {
                $set: {
                    Ind_code: totaldata[i].Ind_code,
                    Industry: totaldata[i].Industry,
                    Ind_shortname: totaldata[i].Ind_shortname,
                    Sector: totaldata[i].Sector,
                    Sector_code: totaldata[i].Sector_code,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await industry_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalindustrymstupdate = tottalindustrymstupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalindustrymstupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_loadtypemst() {
    try {
        var tottalloadtypemstupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Loadtype_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table;
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                ltypecode: totaldata[i].ltypecode,
                load: totaldata[i].load,
            };
            const updatedoc = {
                $set: {
                    ltypecode: totaldata[i].ltypecode,
                    load: totaldata[i].load,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await loadtype_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalloadtypemstupdate = tottalloadtypemstupdate + n;

        }

        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalloadtypemstupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_mergerdschemes() {
    try {
        var totalmergedschemesupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Mergedschemes&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                schemecode: totaldata[i].schemecode,
                mergedwith: totaldata[i].mergedwith,
            };
            const updatedoc = {
                $set: {
                    schemecode: Number(totaldata[i].schemecode),
                    mergedwith: Number(totaldata[i].mergedwith),
                    EFFECT_DATE: moment(new Date(totaldata[i].EFFECT_DATE)).format("YYYY-MM-DD"),
                    flag: totaldata[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await merged_schemes.updateMany(filter, updatedoc, option);
            var n = result.n
            totalmergedschemesupdate = totalmergedschemesupdate + n;
        }

        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: totalmergedschemesupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_mfbulkdeal() {
    try {
        var totalmFBULKDEALSupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=MFBULKDEALS&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                fincode: totaldata[i].fincode,
                exchange: totaldata[i].exchange,
                clientname: totaldata[i].clientname,
                type: totaldata[i].type,
                mfcode: totaldata[i].mfcode,
                dealtype: totaldata[i].dealtype,
            };
            const updatedoc = {
                $set: {
                    fincode: Number(totaldata[i].fincode),
                    date: moment(new Date(totaldata[i].date)).format("YYYY-MM-DD"),
                    exchange: (totaldata[i].exchange),
                    clientname: (totaldata[i].clientname),
                    type: (totaldata[i].type),
                    mfcode: Number(totaldata[i].mfcode),
                    dealtype: (totaldata[i].dealtype),
                    volume: Number(totaldata[i].volume),
                    price: Number(totaldata[i].price),
                    flag: totaldata[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await mF_BulkDeal.updateMany(filter, updatedoc, option);
            var n = result.n
            totalmFBULKDEALSupdate = totalmFBULKDEALSupdate + n;
        }

        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: totalmFBULKDEALSupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_companymaster() {
    try {
        var tottalcompanymasterupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Companymaster&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                fincode: totaldata[i].fincode,
                compname: totaldata[i].compname,
                s_name: totaldata[i].s_name,
                ind_code: totaldata[i].ind_code,
                Industry: totaldata[i].Industry,
                status: totaldata[i].status,
            };
            const updatedoc = {
                $set: {
                    fincode: totaldata[i].fincode,
                    scripcode: totaldata[i].scripcode,
                    symbol: totaldata[i].symbol,
                    compname: totaldata[i].compname,
                    s_name: totaldata[i].s_name,
                    ind_code: totaldata[i].ind_code,
                    Industry: totaldata[i].Industry,
                    isin: totaldata[i].isin,
                    status: totaldata[i].status,
                    series: totaldata[i].series,
                    listing: totaldata[i].listing,
                    sublisting: totaldata[i].sublisting,
                    fv: totaldata[i].fv,
                    flag: totaldata[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await company_master.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalcompanymasterupdate = tottalcompanymasterupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalcompanymasterupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_mfratioDefaultBM() {
    try {
        var tottalmFRatiosDefaultBMupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=MF_Ratios_DefaultBM&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table;
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                schemecode: totaldata[i].schemecode,
                upddate: totaldata[i].upddate,
                datefrom: totaldata[i].datefrom,
                dateto: totaldata[i].dateto,
                average: totaldata[i].average,
                sd: totaldata[i].sd,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata[i].schemecode,
                    upddate: totaldata[i].upddate,
                    datefrom: totaldata[i].datefrom,
                    dateto: totaldata[i].dateto,
                    average: totaldata[i].average,
                    bmaverage: totaldata[i].bmaverage,
                    sd: totaldata[i].sd,
                    bmsd: totaldata[i].bmsd,
                    semisd: totaldata[i].semisd,
                    semisdii: totaldata[i].semisdii,
                    beta: totaldata[i].beta,
                    correlation: totaldata[i].correlation,
                    beta_corelation: totaldata[i].beta_corelation,
                    covariance: totaldata[i].covariance,
                    treynor: totaldata[i].treynor,
                    fama: totaldata[i].fama,
                    sharpe: totaldata[i].sharpe,
                    alpha: totaldata[i].alpha,
                    sortino: totaldata[i].sortino,
                    sortinoii: totaldata[i].sortinoii,
                    ret_improper: totaldata[i].ret_improper,
                    ret_selectivity: totaldata[i].ret_selectivity,
                    down_probability: totaldata[i].down_probability,
                    rsquared: totaldata[i].rsquared,
                    trackingError: totaldata[i].trackingError,
                    down_risk: totaldata[i].down_risk,
                    sd_annualised: totaldata[i].sd_annualised,
                    informationRatio: totaldata[i].informationRatio,
                    flag: totaldata[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await mF_Ratios_DefaultBM.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalmFRatiosDefaultBMupdate = tottalmFRatiosDefaultBMupdate + n;
        }

        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalmFRatiosDefaultBMupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_currentnav() {
    try {
        var tottalcurrentnavupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Currentnav&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                schemecode: totaldata[i].schemecode,
                saleprice: totaldata[i].saleprice,
                navdate: totaldata[i].navdate,
                navrs: totaldata[i].navrs,
                netchange: totaldata[i].netchange,
                prenavdate: totaldata[i].prenavdate,
                repurprice: totaldata[i].repurprice,
                change: totaldata[i].change,
                prevnav: totaldata[i].prevnav,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata[i].schemecode,
                    navdate: totaldata[i].navdate,
                    navrs: totaldata[i].navrs,
                    repurprice: totaldata[i].repurprice,
                    saleprice: totaldata[i].saleprice,
                    cldate: totaldata[i].cldate,
                    change: totaldata[i].change,
                    netchange: totaldata[i].netchange,
                    prevnav: totaldata[i].prevnav,
                    prenavdate: totaldata[i].prenavdate,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await current_nav.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalcurrentnavupdate = tottalcurrentnavupdate + n;
        }

        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalcurrentnavupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_optionmst() {
    try {
        var tottaloptionmstupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Option_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                opt_code: totaldata[i].opt_code,
                option: totaldata[i].option,

            };
            const updatedoc = {
                $set: {
                    opt_code: totaldata[i].opt_code,
                    option: totaldata[i].option,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await option_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottaloptionmstupdate = tottaloptionmstupdate + n;

        }


        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottaloptionmstupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_planmst() {
    try {
        var tottalplanmstupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Plan_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                plan_code: totaldata[i].plan_code,
                plan: totaldata[i].plan,

            };
            const updatedoc = {
                $set: {
                    plan_code: totaldata[i].plan_code,
                    plan: totaldata[i].plan,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await plan_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalplanmstupdate = tottalplanmstupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalplanmstupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_mfportfolio() {
    try {
        var tottalmfportfolioupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Mf_portfolio&date=16082021&section=MFPortfolio&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                schemecode: totaldata[i].schemecode,
                compname: totaldata[i].compname,
                asect_name: totaldata[i].asect_name,
                sect_name: totaldata[i].sect_name,
                invdate: totaldata[i].invdate,
                invenddate: totaldata[i].invenddate,
                fincode: totaldata[i].fincode,
                aum: totaldata[i].aum,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata[i].schemecode,
                    invdate: totaldata[i].invdate,
                    invenddate: totaldata[i].invenddate,
                    srno: totaldata[i].srno,
                    fincode: totaldata[i].fincode,
                    ASECT_CODE: totaldata[i].ASECT_CODE,
                    sect_code: totaldata[i].sect_code,
                    noshares: totaldata[i].noshares,
                    mktval: totaldata[i].mktval,
                    aum: totaldata[i].aum,
                    holdpercentage: totaldata[i].holdpercentage,
                    compname: totaldata[i].compname,
                    sect_name: totaldata[i].sect_name,
                    asect_name: totaldata[i].asect_name,
                    rating: totaldata[i].rating,
                    flag: totaldata[i].flag,


                },
            };
            const option = {
                upsert: true,
            };
            const result = await mf_portfolio.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalmfportfolioupdate = tottalmfportfolioupdate + n;
        }

        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalmfportfolioupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_schemepaum() {
    try {
        var tottalschemepaumupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_paum&date=16082021&section=MFPortfolio&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                schemecode: totaldata[i].schemecode,
                monthend: totaldata[i].monthend,
                amc_code: totaldata[i].amc_code,
                aum: totaldata[i].aum,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata[i].schemecode,
                    monthend: totaldata[i].monthend,
                    amc_code: totaldata[i].amc_code,
                    aum: totaldata[i].aum,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await scheme_paum.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalschemepaumupdate = tottalschemepaumupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalschemepaumupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_portfolio_inout() {
    try {
        var tottalportfolioinoutupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Portfolio_inout&date=16082021&section=MFPortfolio&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                fincode: totaldata[i].fincode,
                compname: totaldata[i].compname,
                s_name: totaldata[i].s_name,
                mode: totaldata[i].mode,
                invdate: totaldata[i].invdate,
            };
            const updatedoc = {
                $set: {
                    fincode: totaldata[i].fincode,
                    invdate: totaldata[i].invdate,
                    mode: totaldata[i].mode,
                    compname: totaldata[i].compname,
                    s_name: totaldata[i].s_name,
                    mktval: totaldata[i].mktval,
                    noshares: totaldata[i].noshares,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await portfolio_inout.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalportfolioinoutupdate = tottalportfolioinoutupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalportfolioinoutupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_sect_allocation() {
    try {
        var tottalsectallocationupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=sect_allocation&date=16082021&section=MFPortfolio&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                Amc_Code: totaldata[i].Amc_Code,
                SchemeCode: totaldata[i].SchemeCode,
                InvDate: totaldata[i].InvDate,
                InvEndDate: totaldata[i].InvEndDate,
                InvDate: totaldata[i].InvDate,
                SECT_NAME: totaldata[i].SECT_NAME,
                SECT_CODE: totaldata[i].SECT_CODE,
                Asect_Code: totaldata[i].Asect_Code,
                VALUE: totaldata[i].VALUE,
                AUM: totaldata[i].AUM,
            };
            const updatedoc = {
                $set: {
                    Amc_Code: totaldata[i].Amc_Code,
                    SchemeCode: totaldata[i].SchemeCode,
                    InvDate: totaldata[i].InvDate,
                    InvEndDate: totaldata[i].InvEndDate,
                    Srno: totaldata[i].Srno,
                    SECT_CODE: totaldata[i].SECT_CODE,
                    SECT_NAME: totaldata[i].SECT_NAME,
                    Asect_Code: totaldata[i].Asect_Code,
                    Perc_Hold: totaldata[i].Perc_Hold,
                    VALUE: totaldata[i].VALUE,
                    AUM: totaldata[i].AUM,
                    Flag: totaldata[i].Flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await sect_allocation.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalsectallocationupdate = tottalsectallocationupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalsectallocationupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_rt_mst() {
    try {
        var tottalrtmstupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Rt_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                rt_code: totaldata[i].rt_code,
                rt_name: totaldata[i].rt_name,
                sebi_reg_no: totaldata[i].sebi_reg_no,
                state: totaldata[i].state,
                fax: totaldata[i].fax,
                website: totaldata[i].website,
                reg_address: totaldata[i].reg_address,
                email: totaldata[i].email,
            };
            const updatedoc = {
                $set: {
                    rt_code: totaldata[i].rt_code,
                    rt_name: totaldata[i].rt_name,
                    sebi_reg_no: totaldata[i].sebi_reg_no,
                    address1: totaldata[i].address1,
                    address2: totaldata[i].address2,
                    address3: totaldata[i].address3,
                    state: totaldata[i].state,
                    tel: totaldata[i].tel,
                    fax: totaldata[i].fax,
                    website: totaldata[i].website,
                    reg_address: totaldata[i].reg_address,
                    email: totaldata[i].email,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await rt_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalrtmstupdate = tottalrtmstupdate + n;

        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalrtmstupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_scheme_assetalloc() {
    try {
        var totalschemeassetallocupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_assetalloc&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                schemeinv_id: totaldata[i].schemeinv_id,
                schemecode: Number(totaldata[i].schemecode),
                investment: (totaldata[i].investment),
                mininv: Number(totaldata[i].mininv),
            };
            const updatedoc = {
                $set: {
                    schemeinv_id: Number(totaldata[i].schemeinv_id),
                    schemecode: Number(totaldata[i].schemecode),
                    investment: (totaldata[i].investment),
                    mininv: Number(totaldata[i].mininv),
                    maxinv: Number(totaldata[i].maxinv),
                    flag: totaldata[i].flag,

                },
            };
            const option = {
                upsert: true,
            };
            const result = await sch_assetalloc.updateMany(filter, updatedoc, option);
            var n = result.n
            totalschemeassetallocupdate = totalschemeassetallocupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: totalschemeassetallocupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_avg_maturity() {
    try {
        var totalavgmaturityupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Avg_maturity&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                amc_code: totaldata[i].amc_code,
                schemecode: Number(totaldata[i].schemecode),
                date: moment(new Date(totaldata[i].date)).format("YYYY-MM-DD"),
                invenddate: moment(new Date(totaldata[i].invenddate)).format("YYYY-MM-DD"),
                ytm: (totaldata[i].ytm),
                turnover_ratio: Number(totaldata[i].turnover_ratio),
                tr_mode: totaldata[i].tr_mode,
            };
            const updatedoc = {
                $set: {
                    amc_code: (Number(totaldata[i].amc_code)),
                    schemecode: Number(totaldata[i].schemecode),
                    date: moment(new Date(totaldata[i].date)).format("YYYY-MM-DD"),
                    invenddate: moment(new Date(totaldata[i].invenddate)).format("YYYY-MM-DD"),
                    avg_mat_num: (totaldata[i].avg_mat_num),
                    avg_mat_days: (totaldata[i].avg_mat_days),
                    mod_dur_num: (totaldata[i].mod_dur_num),
                    mod_dur_days: (totaldata[i].mod_dur_days),
                    ytm: (totaldata[i].ytm),
                    turnover_ratio: Number(totaldata[i].turnover_ratio),
                    tr_mode: totaldata[i].tr_mode,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await avg_maturity.updateMany(filter, updatedoc, option);
            var n = result.n
            totalavgmaturityupdate = totalavgmaturityupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: totalavgmaturityupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_sclassmst() {
    try {
        var tottalsclassmstupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Sclass_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                classcode: totaldata[i].classcode,
                classname: totaldata[i].classname,
                asset_code: totaldata[i].asset_code,
                asset_type: totaldata[i].asset_type,
                category: totaldata[i].category,
            };
            const updatedoc = {
                $set: {
                    classcode: totaldata[i].classcode,
                    classname: totaldata[i].classname,
                    asset_code: totaldata[i].asset_code,
                    asset_type: totaldata[i].asset_type,
                    category: totaldata[i].category,
                    sub_category: totaldata[i].sub_category,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await sclass_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalsclassmstupdate = tottalsclassmstupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalsclassmstupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_schemeload() {
    try {
        var tottalschemeloadupdate = 0;
                var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Schemeload&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
                var totaldata = apiresponse.data.Table;
                console.log(totaldata.length)
                   for (var i = 0; i < totaldata.length; i++) {
                     const filter = {
                        SCHEMECODE: totaldata[i].SCHEMECODE,
                        LDATE: totaldata[i].LDATE,
                        LTYPECODE: totaldata[i].LTYPECODE,
                        REMARKS: totaldata[i].REMARKS,
                        Per_Frm: totaldata[i].Per_Frm,
                        Per_To: totaldata[i].Per_To,
                        FRMAMOUNT: totaldata[i].FRMAMOUNT,
                        UPTOAMOUNT: totaldata[i].UPTOAMOUNT,
                        MINPERIOD: totaldata[i].MINPERIOD,
                        Amount_Condition: totaldata[i].Amount_Condition,
                        Amount_Type: totaldata[i].Amount_Type,
                        Per_Condition: totaldata[i].Per_Condition,
                        MIN: totaldata[i].MIN,
                        MAX: totaldata[i].MAX,
                        ENTRYLOAD: totaldata[i].ENTRYLOAD,
                        EXITLOAD: totaldata[i].EXITLOAD,
                    };
                    const updatedoc = {
                        $set: {
                            SCHEMECODE: totaldata[i].SCHEMECODE,
                            LDATE: totaldata[i].LDATE,
                            LTYPECODE: totaldata[i].LTYPECODE,
                            LSRNO: totaldata[i].LSRNO,
                            FRMAMOUNT: totaldata[i].FRMAMOUNT,
                            UPTOAMOUNT: totaldata[i].UPTOAMOUNT,
                            MINPERIOD: totaldata[i].MINPERIOD,
                            MAXPERIOD: totaldata[i].MAXPERIOD,
                            MIN: totaldata[i].MIN,
                            MAX: totaldata[i].MAX,
                            ENTRYLOAD: totaldata[i].ENTRYLOAD,
                            EXITLOAD: totaldata[i].EXITLOAD,
                            REMARKS: totaldata[i].REMARKS,
                            Period_Condition: totaldata[i].Period_Condition,
                            Period_Type: totaldata[i].Period_Type,
                            Period: totaldata[i].Period,
                            Amount_Condition: totaldata[i].Amount_Condition,
                            Amount_Type: totaldata[i].Amount_Type,
                            Per_Condition: totaldata[i].Per_Condition,
                            Per_Frm: totaldata[i].Per_Frm,
                            Per_To: totaldata[i].Per_To,
                            FLAG: totaldata[i].FLAG,
                        },
                    };
                    const option = {
                        upsert: true,
                    };
                    const result = await scheme_load.updateMany(filter, updatedoc, option);
                    var n = result.n
                    tottalschemeloadupdate = tottalschemeloadupdate + n;
                }

        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalschemeloadupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_schemeeqdetail() {
    try {
        var totaleqdetailupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_eq_details&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                SchemeCode: totaldata[i].SchemeCode,
                MonthEnd: totaldata[i].MonthEnd,
            };
            const updatedoc = {
                $set: {
                    SchemeCode: Number(totaldata[i].SchemeCode),
                    MonthEnd: Number(totaldata[i].MonthEnd),
                    MCAP: Number(totaldata[i].MCAP),
                    PE: Number(totaldata[i].PE),
                    PB: Number(totaldata[i].PB),
                    Div_Yield: Number(totaldata[i].Div_Yield),
                    FLAG: totaldata[i].FLAG,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await scheme_eqdetail.updateMany(filter, updatedoc, option);
            var n = result.n
            totaleqdetailupdate = totaleqdetailupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: totaleqdetailupdate
        }
        return resdata;
    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_schemefmpyielddetail() {
    try {
        var totalfmpyeilddetailupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=fmp_yielddetails&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                schemecode: totaldata[i].schemecode,
            };
            const updatedoc = {
                $set: {
                    schemecode: Number(totaldata[i].schemecode),
                    maturitydate: moment(new Date(totaldata[i].maturitydate)).format("YYYY-MM-DD"),
                    tenure_number: Number(totaldata[i].tenure_number),
                    tenure_option: totaldata[i].tenure_option,
                    net_inticative_yield1: Number(totaldata[i].net_inticative_yield1),
                    net_inticative_yield2: Number(totaldata[i].net_inticative_yield2),
                    post_taxyield_ind1: Number(totaldata[i].post_taxyield_ind1),
                    post_taxyield_ind2: Number(totaldata[i].post_taxyield_ind2),
                    post_taxyield_nonind1: Number(totaldata[i].post_taxyield_nonind1),
                    post_taxyield_nonind2: Number(totaldata[i].post_taxyield_nonind2),
                    exit_load: totaldata[i].exit_load,
                    rollover: totaldata[i].rollover,
                    maturitydate_after_rollover: moment(new Date(totaldata[i].maturitydate_after_rollover)).format("YYYY-MM-DD"),
                    tenure_no_rollover: totaldata[i].tenure_no_rollover,
                    tenure_option_rollover: totaldata[i].tenure_option_rollover,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await scheme_fmpyielddetail.updateMany(filter, updatedoc, option);
            var n = result.n
            totalfmpyeilddetailupdate = totalfmpyeilddetailupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: totalfmpyeilddetailupdate
        }
        return resdata;
    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_schemeindexpart() {
    try {
        var tottalschemeindexpartupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_index_part&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length);
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                SCHEMECODE: totaldata[i].SCHEMECODE,
                INDEXCODE: totaldata[i].INDEXCODE,
            };
            const updatedoc = {
                $set: {
                    SCHEMECODE: totaldata[i].SCHEMECODE,
                    INDEXCODE: totaldata[i].INDEXCODE,
                    Benchmark_Weightage: totaldata[i].Benchmark_Weightage,
                    IndexOrder: totaldata[i].IndexOrder,
                    Remark: totaldata[i].Remark,
                    FLAG: totaldata[i].FLAG,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await scheme_index_part.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalschemeindexpartupdate = tottalschemeindexpartupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalschemeindexpartupdate
        }
        return resdata;
    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_schemeexpenceratio() {
    try {
        var totalexpenceratioupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Expenceratio&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                schemecode: totaldata[i].schemecode,
                amc_code: totaldata[i].amc_code,
            };
            const updatedoc = {
                $set: {
                    amc_code: Number(totaldata[i].amc_code),
                    schemecode: Number(totaldata[i].schemecode),
                    date: moment(new Date(totaldata[i].date)).format("YYYY-MM-DD"),
                    expratio: Number(totaldata[i].expratio),
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await scheme_expenceratio.updateMany(filter, updatedoc, option);
            var n = result.n
            totalexpenceratioupdate = totalexpenceratioupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: totalexpenceratioupdate
        }
        return resdata;
    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_schemenamechange() {
    try {
        var totalnameChangeupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_Name_Change&date=16082021&section=MFOther&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                Amc_Code: totaldata[i].Amc_Code,
                SchemeCode: totaldata[i].SchemeCode,
                OldName: totaldata[i].OldName,
                Newname: totaldata[i].Newname,
                Effectivedate: moment(new Date(totaldata[i].Effectivedate)).format("YYYY-MM-DD"),
            };
            const updatedoc = {
                $set: {
                    Amc_Code: (Number(totaldata[i].Amc_Code)),
                    SchemeCode: Number(totaldata[i].SchemeCode),
                    Effectivedate: moment(new Date(totaldata[i].Effectivedate)).format("YYYY-MM-DD"),
                    OldName: totaldata[i].OldName,
                    Newname: totaldata[i].Newname,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await scheme_namechange.updateMany(filter, updatedoc, option);
            var n = result.n
            totalnameChangeupdate = totalnameChangeupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: totalnameChangeupdate
        }
        return resdata;
    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_schemeobjective() {
    try {
        var tottalschemeobjectiveupdate=0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_objective&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table;
        console.log(totaldata.length);
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                schemecode: totaldata[i].schemecode,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata[i].schemecode,
                    objective: totaldata[i].objective,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await scheme_objective.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalschemeobjectiveupdate = tottalschemeobjectiveupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalschemeobjectiveupdate
        }
        return resdata;
    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_mfratio() {
    try {
        var tottalmfratioupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Mf_ratio&date=16082021&section=MFNav&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                schemecode: totaldata[i].schemecode,
                upddate: totaldata[i].upddate,
                datefrom: totaldata[i].datefrom,
                dateto: totaldata[i].dateto,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata[i].schemecode,
                    upddate: totaldata[i].upddate,
                    datefrom: totaldata[i].datefrom,
                    dateto: totaldata[i].dateto,
                    avg_x: totaldata[i].avg_x,
                    avg_y: totaldata[i].avg_y,
                    sd_x: totaldata[i].sd_x,
                    sd_y: totaldata[i].sd_y,
                    semisd_x: totaldata[i].semisd_x,
                    semisd_y: totaldata[i].semisd_y,
                    beta_x: totaldata[i].beta_x,
                    beta_y: totaldata[i].beta_y,
                    corelation_x: totaldata[i].corelation_x,
                    corelation_y: totaldata[i].corelation_y,
                    betacor_x: totaldata[i].betacor_x,
                    betacor_y: totaldata[i].betacor_y,
                    treynor_x: totaldata[i].treynor_x,
                    treynor_y: totaldata[i].treynor_y,
                    fama_x: totaldata[i].fama_x,
                    fama_y: totaldata[i].fama_y,
                    sharpe_x: totaldata[i].sharpe_x,
                    sharpe_y: totaldata[i].sharpe_y,
                    jalpha_x: totaldata[i].jalpha_x,
                    jalpha_y: totaldata[i].jalpha_y,
                    sortino_x: totaldata[i].sortino_x,
                    sortino_y: totaldata[i].sortino_y,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await mf_ratio.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalmfratioupdate = tottalmfratioupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalmfratioupdate
        }
        return resdata;
    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_schemergess() {
    try {
        var tottalschemergessupdate = 0;
                var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_rgess&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
                var totaldata = apiresponse.data.Table
                console.log(totaldata.length);
                for (var i = 0; i < totaldata.length; i++) {
                    const filter = {
                        schemecode: totaldata[i].schemecode,
                        schemename: totaldata[i].schemename,
                    };
                    const updatedoc = {
                        $set: {
                            schemecode: totaldata[i].schemecode,
                            schemename: totaldata[i].schemename,
                            flag: totaldata[i].flag,
                        },
                    };
                    const option = {
                        upsert: true,
                    };
                    const result = await scheme_rgess.updateMany(filter, updatedoc, option);
                    var n = result.n
                    tottalschemergessupdate = tottalschemergessupdate + n;
                }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalschemergessupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}


async function update_schemertcode() {
    try {
        var tottalschemertcodeupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Scheme_rtcode&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                rtschemecode: totaldata[i].rtschemecode,
                schemecode: totaldata[i].schemecode,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata[i].schemecode,
                    rtschemecode: totaldata[i].rtschemecode,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await scheme_rtcode.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalschemertcodeupdate = tottalschemertcodeupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalschemertcodeupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_sectmst() {
    try {
        var tottalsectmstupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Sect_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                sect_code: totaldata[i].sect_code,
                sect_name: totaldata[i].sect_name,
            };
            const updatedoc = {
                $set: {
                    sect_code: totaldata[i].sect_code,
                    sect_name: totaldata[i].sect_name,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await sect_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalsectmstupdate = tottalsectmstupdate + n;

        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalsectmstupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_mfsip() {
    try {
        var tottalmfsipupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Mf_sip&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table;
        console.log(totaldata.length);
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                schemecode: totaldata[i].schemecode,
                amc_code: totaldata[i].amc_code,
                frequency: totaldata[i].frequency,
                sip: totaldata[i].sip,
                sipdatescondition: totaldata[i].sipdatescondition,
                Dates: totaldata[i].Dates,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata[i].schemecode,
                    amc_code: totaldata[i].amc_code,
                    frequency: totaldata[i].frequency,
                    sip: totaldata[i].sip,
                    sipdatescondition: totaldata[i].sipdatescondition,
                    Dates: totaldata[i].Dates,
                    sipdaysall: totaldata[i].sipdaysall,
                    sipmininvest: totaldata[i].sipmininvest,
                    sipaddninvest: totaldata[i].sipaddninvest,
                    sipfrequencyno: totaldata[i].sipfrequencyno,
                    sipminimumperiod: totaldata[i].sipminimumperiod,
                    sipmaximumperiod: totaldata[i].sipmaximumperiod,
                    sipmincumamount: totaldata[i].sipmincumamount,
                    sipminunits: totaldata[i].sipminunits,
                    sipmultiplesunits: totaldata[i].sipmultiplesunits,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await mf_sip.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalmfsipupdate = tottalmfsipupdate + n;

        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalmfsipupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_mfstp() {
    try {
       var tottalmfstpupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Mf_stp&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                schemecode: totaldata[i].schemecode,
                amc_code: totaldata[i].amc_code,
                frequency: totaldata[i].frequency,
                stpinout: totaldata[i].stpinout,
                stp: totaldata[i].stp,
                stpdatescondition: totaldata[i].stpdatescondition,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata[i].schemecode,
                    amc_code: totaldata[i].amc_code,
                    frequency: totaldata[i].frequency,
                    stpinout: totaldata[i].stpinout,
                    stp: totaldata[i].stp,
                    stpdatescondition: totaldata[i].stpdatescondition,
                    Dates: totaldata[i].Dates,
                    stpdaysall: totaldata[i].stpdaysall,
                    stpmininvest: totaldata[i].stpmininvest,
                    stpaddninvest: totaldata[i].stpaddninvest,
                    stpfrequencyno: totaldata[i].stpfrequencyno,
                    stpminimumperiod: totaldata[i].stpminimumperiod,
                    stpmaximumperiod: totaldata[i].stpmaximumperiod,
                    stpmincumamount: totaldata[i].stpmincumamount,
                    stpminunits: totaldata[i].stpminunits,
                    stpmultiplesunits: totaldata[i].stpmultiplesunits,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await mf_stp.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalmfstpupdate = tottalmfstpupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalmfstpupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_mfswp() {
    try {
        var tottalmfswpupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Mf_swp&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                schemecode: totaldata[i].schemecode,
                amc_code: totaldata[i].amc_code,
                frequency: totaldata[i].frequency,
                swp: totaldata[i].swp,
            };
            const updatedoc = {
                $set: {
                    schemecode: totaldata[i].schemecode,
                    amc_code: totaldata[i].amc_code,
                    frequency: totaldata[i].frequency,
                    swp: totaldata[i].swp,
                    swpdatescondition: totaldata[i].swpdatescondition,
                    Dates: totaldata[i].Dates,
                    swpdaysall: totaldata[i].swpdaysall,
                    swpmininvest: totaldata[i].swpmininvest,
                    swpaddninvest: totaldata[i].swpaddninvest,
                    swpfrequencyno: totaldata[i].swpfrequencyno,
                    swpminimumperiod: totaldata[i].swpminimumperiod,
                    swpmaximumperiod: totaldata[i].swpmaximumperiod,
                    swpmincumamount: totaldata[i].swpmincumamount,
                    swpminunits: totaldata[i].swpminunits,
                    swpmultiplesunits: totaldata[i].swpmultiplesunits,
                    Flag: totaldata[i].Flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await mf_swp.updateMany(filter, updatedoc, option);
            var n = result.n
            tottalmfswpupdate = tottalmfswpupdate + n;
        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottalmfswpupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

async function update_typemst() {
    try {
        var tottaltypemstupdate = 0;
        var apiresponse = await Axios.get('https://contentapi.accordwebservices.com/RawData/GetTxtFile?filename=Type_mst&date=16082021&section=MFMaster&sub=&token=fMqHkvwLKoN6rTyt_j7F3HNgnvhBtWWE')
        var totaldata = apiresponse.data.Table
        console.log(totaldata.length)
        for (var i = 0; i < totaldata.length; i++) {
            const filter = {
                type_code: totaldata[i].type_code,
                type: totaldata[i].type,
            };
            const updatedoc = {
                $set: {
                    type_code: totaldata[i].type_code,
                    type: totaldata[i].type,
                    flag: totaldata[i].flag,
                },
            };
            const option = {
                upsert: true,
            };
            const result = await type_mst.updateMany(filter, updatedoc, option);
            var n = result.n
            tottaltypemstupdate = tottaltypemstupdate + n;

        }
        var resdata = {
            totalapiresponse: totaldata.length,
            wmsfunctionresponse: tottaltypemstupdate
        }
        return resdata;

    } catch (err) {
        console.log("Errorqqqq=", err)
    }
}

module.exports = { update_onetimemaster }