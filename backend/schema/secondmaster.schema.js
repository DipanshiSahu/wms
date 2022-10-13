var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const mfportfoliodate = new Schema({
    schemecode: { type: Number },
    invdate: { type: Date },
    invenddate: { type: Date },
    srno: { type: Number },
    fincode: { type: Number },
    ASECT_CODE: { type: Number },
    sect_code: { type: String },
    noshares: { type: Number },
    mktval: { type: Number },
    aum: { type: Number },
    holdpercentage: { type: Number },
    compname: { type: String },
    sect_name: { type: String },
    asect_name: { type: String },
    rating: { type: String },
    flag: { type: String },
}, { versionKey: false });

const amcaumdate = new Schema({
    amc_code: { type: Number },
    aumdate: { type: Date },
    totalaum: { type: Number },
    flag: { type: String },
}, { versionKey: false });

const schemeaumdate = new Schema({
    schemecode: { type: Number },
    date: { type: Date },
    exfof: { type: String },
    fof: { type: String },
    total: { type: String },
    flag: { type: String },
}, { versionKey: false });

const portfolioinoutdate = new Schema({
    fincode: { type: Number },
    invdate: { type: Date },
    mode: { type: String },
    compname: { type: String },
    s_name: { type: String },
    mktval: { type: Number },
    noshares: { type: Number },
    flag: { type: String },
}, { versionKey: false });


const sectallocationdate = new Schema({

    Amc_Code: { type: Number },
    SchemeCode: { type: Number },
    InvDate: { type: Date },
    InvEndDate: { type: Date },
    Srno: { type: Number },
    SECT_CODE: { type: Number },
    SECT_NAME: { type: String },
    Asect_Code: { type: Number },
    Perc_Hold: { type: Number },
    VALUE: { type: Number },
    AUM: { type: Number },
    Flag: { type: String },
}, { versionKey: false });

const schemepaumdate = new Schema({


    schemecode: { type: Number },
    monthend: { type: Number },
    amc_code: { type: Number },
    aum: { type: Number },
    flag: { type: String },
}, { versionKey: false });

const currentnavdate = new Schema({

    schemecode: { type: Number },
    navdate: { type: Date },
    navrs: { type: Number },
    repurprice: { type: Number },
    saleprice: { type: Number },
    cldate: { type: Date },
    change: { type: Number },
    netchange: { type: Number },
    prevnav: { type: Number },
    prenavdate: { type: Date },
    flag: { type: String },
}, { versionKey: false });

const navhistdate = new Schema({

    schemecode: { type: Number },
    navdate: { type: Date },
    navrs: { type: Number },
    repurprice: { type: Number },
    saleprice: { type: Number },
    adjustednav_c: { type: Number },
    adjustednav_nonc: { type: Number },
    flag: { type: String },
}, { versionKey: false });

const navhistHLdate = new Schema({

    schemecode: { type: Number },
    threemonthhhigh: { type: String },
    threemonthlow: { type: String },
    threemhdate: { type: Date },
    threemldate: { type: Date },
    sixmonthhhigh: { type: String },
    sixmonthlow: { type: String },
    sixmhdate: { type: Date },
    sixmldate: { type: Date },
    ninemonthhhigh: { type: String },
    ninemonthlow: { type: String },
    ninemhdate: { type: Date },
    ninemldate: { type: Date },
    fiftytwoweekhhigh: { type: String },
    fiftytwoweeklow: { type: String },
    fiftytwowhdate: { type: Date },
    fiftytwowldate: { type: Date },
    oneyrhigh: { type: String },
    oneyrlow: { type: String },
    oneyhdate: { type: Date },
    oneyldate: { type: Date },
    twoyrhigh: { type: String },
    twoyrlow: { type: String },
    twoyhdate: { type: Date },
    twoyldate: { type: Date },
    threeyrhigh: { type: String },
    threeyrlow: { type: String },
    threeyhdate: { type: Date },
    threeyldate: { type: Date },
    fiveyrhigh: { type: String },
    fiveyrlow: { type: String },
    fiveyhdate: { type: Date },
    fiveyldate: { type: Date },
    ytdhigh: { type: String },
    ytdlow: { type: String },
    ytdhdate: { type: Date },
    ytdldate: { type: Date },
    sihigh: { type: String },
    siLow: { type: String },
    sihdate: { type: Date },
    sildate: { type: Date },
    flag: { type: String },
}, { versionKey: false });


const mfreturndate = new Schema({

    schemecode: { type: Number },
    c_date: { type: Date },
    p_date: { type: Date },
    c_nav: { type: Number },
    p_nav: { type: Number },
    onedayret: { type: String },
    oneweekdate: { type: Date },
    oneweeknav: { type: String },
    oneweekret: { type: String },
    onemthdate: { type: Date },
    onemthnav: { type: String },
    onemonthret: { type: String },
    threemthdate: { type: Date },
    threemthnav: { type: String },
    threemonthret: { type: String },
    sixmntdate: { type: Date },
    sixmnthnav: { type: String },
    sixmonthret: { type: String },
    ninemnthdate: { type: Date },
    ninemnthnav: { type: String },
    ninemnthret: { type: String },
    oneyrdate: { type: Date },
    oneyrnav: { type: String },
    oneyrret: { type: String },
    twoyrdate: { type: Date },
    twoyrnav: { type: String },
    twoyearret: { type: String },
    threeyrdate: { type: Date },
    threeyrnav: { type: String },
    threeyearret: { type: String },
    fouryrdate: { type: Date },
    fouryrnav: { type: String },
    fouryearret: { type: String },
    fiveyrdate: { type: Date },
    fiveyrnav: { type: String },
    fiveyearret: { type: String },
    incdate: { type: Date },
    incnav: { type: String },
    incret: { type: String },
    flag: { type: String },
}, { versionKey: false });

const mfabsreturndate = new Schema({

    schemecode: { type: Number },
    c_date: { type: Date },
    p_date: { type: Date },
    c_nav: { type: Number },
    p_nav: { type: Number },
    onedayret: { type: String },
    oneweekdate: { type: Date },
    oneweeknav: { type: String },
    oneweekret: { type: String },
    onemthdate: { type: Date },
    onemthnav: { type: String },
    onemonthret: { type: String },
    threemthdate: { type: Date },
    threemthnav: { type: String },
    threemonthret: { type: String },
    sixmntdate: { type: Date },
    sixmnthnav: { type: String },
    sixmonthret: { type: String },
    ninemnthdate: { type: Date },
    ninemnthnav: { type: String },
    ninemnthret: { type: String },
    oneyrdate: { type: Date },
    oneyrnav: { type: String },
    oneyrret: { type: String },
    twoyrdate: { type: Date },
    twoyrnav: { type: String },
    twoyearret: { type: String },
    threeyrdate: { type: Date },
    threeyrnav: { type: String },
    threeyearret: { type: String },
    fouryrdate: { type: Date },
    fouryrnav: { type: String },
    fouryearret: { type: String },
    fiveyrdate: { type: Date },
    fiveyrnav: { type: String },
    fiveyearret: { type: String },
    incdate: { type: Date },
    incnav: { type: String },
    incret: { type: String },
    flag: { type: String },
}, { versionKey: false });


const mfansreturndate = new Schema({

    schemecode: { type: Number },
    c_date: { type: Date },
    p_date: { type: Date },
    c_nav: { type: Number },
    p_nav: { type: Number },
    onedayret: { type: String },
    oneweekdate: { type: Date },
    oneweeknav: { type: String },
    oneweekret: { type: String },
    onemthdate: { type: Date },
    onemthnav: { type: String },
    onemonthret: { type: String },
    threemthdate: { type: Date },
    threemthnav: { type: String },
    threemonthret: { type: String },
    sixmntdate: { type: Date },
    sixmnthnav: { type: String },
    sixmonthret: { type: String },
    ninemnthdate: { type: Date },
    ninemnthnav: { type: String },
    ninemnthret: { type: String },
    oneyrdate: { type: Date },
    oneyrnav: { type: String },
    oneyrret: { type: String },
    twoyrdate: { type: Date },
    twoyrnav: { type: String },
    twoyearret: { type: String },
    threeyrdate: { type: Date },
    threeyrnav: { type: String },
    threeyearret: { type: String },
    fouryrdate: { type: Date },
    fouryrnav: { type: String },
    fouryearret: { type: String },
    fiveyrdate: { type: Date },
    fiveyrnav: { type: String },
    fiveyearret: { type: String },
    incdate: { type: Date },
    incnav: { type: String },
    incret: { type: String },
    flag: { type: String },
}, { versionKey: false });


const classWiseReturndate = new Schema({

    classcode: { type: Number },
    classname: { type: String },
    opt_code: { type: Number },
    date: { type: Date },
    onedayret: { type: String },
    oneweekret: { type: String },
    twoweekret: { type: String },
    threeweekret: { type: String },
    onemonthret: { type: String },
    twomonthret: { type: String },
    threemonthret: { type: String },
    sixmonthret: { type: String },
    ninemnthret: { type: String },
    oneyearret: { type: String },
    twoyearret: { type: String },
    threeyearret: { type: String },
    fouryearret: { type: String },
    fiveyearret: { type: String },
    incret: { type: String },
    ytdret: { type: String },
    onewschemecode: { type: String },
    weekHighRet: { type: String },
    onemschemecode: { type: String },
    monthhighret: { type: String },
    threemschemecode: { type: String },
    threemonthHighret: { type: String },
    sixmschemecode: { type: String },
    sixmonthhighret: { type: String },
    oneyhighret: { type: String },
    threeyschemecode: { type: String },
    threeyhighret: { type: String },
    fiveyschemecode: { type: String },
    fiveyhighret: { type: String },
    incretschemecode: { type: String },
    increthighret: { type: String },
    worst1wSchemecode: { type: String },
    weekWorstRet: { type: String },
    worst1mschemecode: { type: String },
    monthworstret: { type: String },
    worst3mschemecode: { type: String },
    threemonthworstret: { type: String },
    worst6mschemecode: { type: String },
    sixmonthWorstRet: { type: String },
    worst1yschemecode: { type: String },
    oneyworstret: { type: String },
    worst3yschemecode: { type: String },
    threeyworstret: { type: String },
    worst5yschemecode: { type: String },
    fiveyworstret: { type: String },
    Worstincretschemecode: { type: String },
    incretworstret: { type: String },
    flag: { type: String },
}, { versionKey: false });

const mfratiodate = new Schema({

    schemecode: { type: Number },
    upddate: { type: Date },
    datefrom: { type: Date },
    dateto: { type: Date },
    avg_x: { type: Number },
    avg_y: { type: Number },
    sd_x: { type: Number },
    sd_y: { type: Number },
    semisd_x: { type: Number },
    semisd_y: { type: Number },
    beta_x: { type: Number },
    beta_y: { type: Number },
    corelation_x: { type: Number },
    corelation_y: { type: Number },
    betacor_x: { type: Number },
    betacor_y: { type: Number },
    treynor_x: { type: Number },
    treynor_y: { type: Number },
    fama_x: { type: Number },
    fama_y: { type: Number },
    sharpe_x: { type: Number },
    sharpe_y: { type: Number },
    jalpha_x: { type: Number },
    jalpha_y: { type: Number },
    sortino_x: { type: Number },
    sortino_y: { type: Number },
    flag: { type: String },
}, { versionKey: false });


const mFRatiosDefaultBMdate = new Schema({

    schemecode: { type: Number },
    upddate: { type: Date },
    datefrom: { type: Date },
    dateto: { type: Date },
    average: { type: Number },
    bmaverage: { type: Number },
    sd: { type: Number },
    bmsd: { type: Number },
    semisd: { type: Number },
    semisdii: { type: Number },
    beta: { type: Number },
    correlation: { type: Number },
    beta_corelation: { type: Number },
    covariance: { type: Number },
    treynor: { type: Number },
    fama: { type: Number },
    sharpe: { type: Number },
    alpha: { type: Number },
    sortino: { type: Number },
    sortinoii: { type: Number },
    ret_improper: { type: Number },
    ret_selectivity: { type: Number },
    down_probability: { type: Number },
    rsquared: { type: Number },
    trackingError: { type: Number },
    down_risk: { type: Number },
    sd_annualised: { type: Number },
    informationRatio: { type: Number },
    flag: { type: String },
}, { versionKey: false });


const bMAbsoluteReturndate = new Schema({

    index_code: { type: Number },
    symbol: { type: Number },
    scripcode: { type: Number },
    date: { type: Date },
    prev_date: { type: Date },
    close: { type: Number },
    prev_close: { type: String },
    onedayret: { type: String },
    oneweekdate: { type: Date },
    oneweekclose: { type: String },
    oneweekret: { type: String },
    onemthdate: { type: Date },
    onemthclose: { type: String },
    onemonthret: { type: String },
    threemthdate: { type: Date },
    threemthclose: { type: String },
    threemonthret: { type: String },
    sixmntdate: { type: Date },
    sixmnthclose: { type: String },
    sixmonthret: { type: String },
    ninemnthdate: { type: Date },
    ninemnthdate: { type: Date },
    ninemnthret: { type: String },
    oneyrdate: { type: Date },
    oneyrclose: { type: String },
    oneyrret: { type: String },
    twoyrdate: { type: Date },
    twoyrclose: { type: String },
    twoyearret: { type: String },
    threeyrdate: { type: Date },
    threeyrclose: { type: String },
    threeyearret: { type: String },
    fouryrdate: { type: Date },
    fouryrclose: { type: String },
    fouryearret: { type: String },
    fiveyrdate: { type: Date },
    fiveyrclose: { type: String },
    fiveyearret: { type: String },
    incdate: { type: Date },
    incclose: { type: String },
    incret: { type: String },
    twoweekdate: { type: Date },
    twoweekclose: { type: String },
    twoweekret: { type: String },
    twoweekdate: { type: Date },
    threeweekclose: { type: String },
    threeweekret: { type: String },
    twomthdate: { type: Date },
    twomthclose: { type: String },
    twomonthret: { type: String },
    ytddate: { type: Date },
    ytdclose: { type: String },
    ytdret: { type: String },
    flag: { type: String },
}, { versionKey: false });


const bMAnnualisedReturndate = new Schema({

    index_code: { type: Number },
    symbol: { type: Number },
    scripcode: { type: Number },
    date: { type: Date },
    prev_date: { type: Date },
    close: { type: Number },
    prev_close: { type: String },
    onedayret: { type: String },
    oneweekdate: { type: Date },
    oneweekclose: { type: String },
    oneweekret: { type: String },
    onemthdate: { type: Date },
    onemthclose: { type: String },
    onemonthret: { type: String },
    threemthdate: { type: Date },
    threemthclose: { type: String },
    threemonthret: { type: String },
    sixmntdate: { type: Date },
    sixmnthclose: { type: String },
    sixmonthret: { type: String },
    ninemnthdate: { type: Date },
    ninemnthclose: { type: String },
    ninemnthret: { type: String },
    oneyrdate: { type: Date },
    oneyrclose: { type: String },
    oneyrret: { type: String },
    twoyrdate: { type: Date },
    twoyrclose: { type: String },
    twoyearret: { type: String },
    threeyrdate: { type: Date },
    threeyrclose: { type: String },
    threeyearret: { type: String },
    fouryrdate: { type: Date },
    fouryrclose: { type: String },
    fouryearret: { type: String },
    fiveyrdate: { type: Date },
    fiveyrclose: { type: String },
    fiveyearret: { type: String },
    incdate: { type: Date },
    incclose: { type: String },
    incret: { type: String },
    twoweekdate: { type: Date },
    twoweekclose: { type: String },
    twoweekret: { type: String },
    threeweekdate: { type: Date },
    threeweekclose: { type: String },
    threeweekret: { type: String },
    twomthdate: { type: Date },
    twomthclose: { type: String },
    twomonthret: { type: String },
    ytddate: { type: Date },
    ytdclose: { type: String },
    ytdret: { type: String },
    flag: { type: String },
}, { versionKey: false });


const divdetailsdate = new Schema({
    amc_code: { type: Number },
    schemecode: { type: Number },
    recorddate: { type: Date },
    div_code: { type: Number },
    exdivdate: { type: Date },
    Bonusrate1: { type: Number },
    Bonusrate2: { type: Number },
    gross: { type: Number },
    corporate: { type: Number },
    noncorporate: { type: Number },
    status: { type: String },
    flag: { type: String },
}, { versionKey: false });



var mf_portfolio = mongoose.model('mf_portfoliodate', mfportfoliodate, 'mf_portfoliodate')
var amc_aum = mongoose.model('amc_aumdate', amcaumdate, 'amc_aumdate')
var scheme_aum = mongoose.model('scheme_aumdate', schemeaumdate, 'scheme_aumdate')
var portfolio_inout = mongoose.model('portfolio_inoutdate', portfolioinoutdate, 'portfolio_inoutdate')
var sect_allocation = mongoose.model('sect_allocationdate', sectallocationdate, 'sect_allocationdate')
var scheme_paum = mongoose.model('scheme_paumdate', schemepaumdate, 'scheme_paumdate')
var current_nav = mongoose.model('current_navdate', currentnavdate, 'current_navdate')
var nav_hist = mongoose.model('nav_histdate', navhistdate, 'nav_histdate')
var navhist_HL = mongoose.model('navhist_HLdate', navhistHLdate, 'navhist_HLdate')
var mf_return = mongoose.model('mf_returndate', mfreturndate, 'mf_returndate')
var mf_abs_return = mongoose.model('mf_abs_returndate', mfabsreturndate, 'mf_abs_returndate')
var mf_ans_return = mongoose.model('mf_ans_returndate', mfansreturndate, 'mf_ans_returndate')
var class_WiseReturn = mongoose.model('class_WiseReturndate', classWiseReturndate, 'class_WiseReturndate')
var mf_ratio = mongoose.model('mf_ratiodate', mfratiodate, 'mf_ratiodate')
var mF_Ratios_DefaultBM = mongoose.model('mF_Ratios_DefaultBM&date', mFRatiosDefaultBMdate, 'mF_Ratios_DefaultBMdate')
var bM_AbsoluteReturn = mongoose.model('bM_AbsoluteReturndate', bMAbsoluteReturndate, 'bM_AbsoluteReturndate')
var bM_AnnualisedReturn = mongoose.model('bM_AnnualisedReturndate', bMAnnualisedReturndate, 'bM_AnnualisedReturndate')
var div_details = mongoose.model('div_detailsdate', divdetailsdate, 'div_detailsdate');

















module.exports = {
    mf_portfolio, amc_aum, scheme_aum, portfolio_inout, sect_allocation,
    scheme_paum, current_nav, nav_hist, navhist_HL, mf_return, mf_abs_return,
    mf_ans_return, class_WiseReturn, mf_ratio, mF_Ratios_DefaultBM, bM_AbsoluteReturn, bM_AnnualisedReturn,div_details
}