var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const amckeypersons = new Schema({
    amc_code: { type: String },
    amc_name: { type: String },
    srno: { type: String },
    name: { type: String },
    desig: { type: String },
    flag: { type: String },
}, { versionKey: false });

const amcmst = new Schema({
    amc_code: { type: String },
    amc: { type: String },
    fund: { type: String },
    srno: { type: String },
    office_type: { type: String },
    add1: { type: String },
    add2: { type: String },
    add3: { type: String },
    email: { type: String },
    phone: { type: String },
    fax: { type: String },
    webiste: { type: String },
    setup_date: { type: Date },
    mf_type: { type: String },
    trustee_name: { type: String },
    sponsor_name: { type: String },
    amc_inc_date: { type: Date },
    s_name: { type: String },
    amc_symbol: { type: String },
    city: { type: String },
    rtamccode: { type: String },
    flag: { type: String },
}, { versionKey: false });

const amcpaum = new Schema({
    amc_code: { type: Number },
    aumdate: { type: Date },
    totalaum: { type: Number },
    FLAG: { type: String },
}, { versionKey: false });

const asectmst = new Schema({
    asect_code: { type: String },
    asect_type: { type: String },
    asset: { type: String },
    as_name: { type: String },
    flag: { type: String },
}, { versionKey: false });

const avgschemeaum = new Schema({
    schemecode: { type: Number },
    date: { type: Date },
    exfof: { type: Number },
    fof: { type: Number },
    total: { type: Number },
    flag: { type: String },
}, { versionKey: false });

const custmst = new Schema({
    cust_code: { type: String },
    cust_name: { type: String },
    sebi_reg_no: { type: String },
    add1: { type: String },
    add2: { type: String },
    add3: { type: String },
    flag: { type: String },
}, { versionKey: false });

const divdetails = new Schema({
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

const divmst = new Schema({
    div_code: { type: String },
    div_type: { type: String },
    flag: { type: String },
}, { versionKey: false });

const fvchange = new Schema({
    amc_code: { type: Number },
    schemecode: { type: Number },
    scheme_name: { type: String },
    fvbefore: { type: Number },
    fvafter: { type: Number },
    fvdate: { type: Date },
    flag: { type: String },
}, { versionKey: false });

const DailyFundmanager = new Schema({
    date: { type: Date },
    amc: { type: Number },
    schemecode: { type: Number },
    fundManger1: { type: Number },
    fundManger2: { type: Number },
    fundManger3: { type: Number },
    fundManger4: { type: Number },
    flag: { type: String },
}, { versionKey: false });

const fundmanagermst = new Schema({
    id: { type: Number },
    initial: { type: String },
    fundmanager: { type: String },
    qualification: { type: String },
    experience: { type: String },
    basicdetails: { type: String },
    designation: { type: String },
    age: { type: Number },
    reporteddate: { type: Date },
    flag: { type: String },

}, { versionKey: false });

const indexmst = new Schema({
    indexcode: { type: Number },
    fincode: { type: Number },
    scripcode: { type: Number },
    indexname: { type: String },
    index_gp: { type: String },
    subgroup: { type: String },
    flag: { type: String },
}, { versionKey: false });

const industrymst = new Schema({
    Ind_code: { type: Number },
    Industry: { type: String },
    Ind_shortname: { type: String },
    Sector: { type: String },
    Sector_code: { type: Number },
    Flag: { type: String },
}, { versionKey: false });

const loadtypemst = new Schema({
    ltypecode: { type: Number },
    load: { type: String },
    flag: { type: String },
}, { versionKey: false });

const Mergedschemes = new Schema({
    schemecode: { type: Number },
    mergedwith: { type: Number },
    EFFECT_DATE: { type: Date },
    flag: { type: String },
}, { versionKey: false });

const mFBULKDEALS = new Schema({
    fincode: { type: Number },
    date: { type: Date },
    exchange: { type: String },
    clientname: { type: String },
    type: { type: String },
    mfcode: { type: Number },
    dealtype: { type: String },
    volume: { type: Number },
    price: { type: Number },
    flag: { type: String },
}, { versionKey: false });

const companymaster = new Schema({
    fincode: { type: Number },
    scripcode: { type: String },
    symbol: { type: String },
    compname: { type: String },
    s_name: { type: String },
    ind_code: { type: Number },
    Industry: { type: String },
    isin: { type: String },
    status: { type: String },
    series: { type: String },
    listing: { type: String },
    sublisting: { type: String },
    fv: { type: String },
    flag: { type: String },

}, { versionKey: false });

const mFRatiosDefaultBM = new Schema({

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

const currentnav = new Schema({

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

const optionmst = new Schema({
    opt_code: { type: String },
    option: { type: String },
    flag: { type: String },
}, { versionKey: false });

const planmst = new Schema({
    plan_code: { type: Number },
    plan: { type: String },
    flag: { type: String },
}, { versionKey: false });

const mfportfolio = new Schema({
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

const schemepaum = new Schema({
    schemecode: { type: Number },
    monthend: { type: Number },
    amc_code: { type: Number },
    aum: { type: Number },
    flag: { type: String },
}, { versionKey: false });

const portfolioinout = new Schema({
    fincode: { type: Number },
    invdate: { type: Date },
    mode: { type: String },
    compname: { type: String },
    s_name: { type: String },
    mktval: { type: Number },
    noshares: { type: Number },
    flag: { type: String },
}, { versionKey: false });

const sectallocation = new Schema({
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

const rtmst = new Schema({
    rt_code: { type: String },
    rt_name: { type: String },
    sebi_reg_no: { type: String },
    address1: { type: String },
    address2: { type: String },
    address3: { type: String },
    state: { type: String },
    tel: { type: String },
    fax: { type: String },
    website: { type: String },
    reg_address: { type: String },
    email: { type: String },
    flag: { type: String },
}, { versionKey: false });

const schemeassetalloc = new Schema({
    schemeinv_id: { type: Number },
    schemecode: { type: Number },
    investment: { type: String },
    mininv: { type: Number },
    maxinv: { type: Number },
    flag: { type: String },
}, { versionKey: false });

const avgmaturity = new Schema({
    amc_code: { type: Number },
    schemecode: { type: Number },
    date: { type: Date },
    invenddate: { type: Date },
    avg_mat_num: { type: String },
    avg_mat_days: { type: String },
    mod_dur_num: { type: String },
    mod_dur_days: { type: String },
    ytm: { type: String },
    turnover_ratio: { type: Number },
    tr_mode: { type: String },
    flag: { type: String },
}, { versionKey: false });

const sclassmst = new Schema({
    classcode: { type: Number },
    classname: { type: String },
    asset_code: { type: Number },
    asset_type: { type: String },
    category: { type: String },
    sub_category: { type: String },
    flag: { type: String },
}, { versionKey: false });

const schemeload = new Schema({
    SCHEMECODE: { type: Number },
    LDATE: { type: Date },
    LTYPECODE: { type: Number },
    LSRNO: { type: String },
    FRMAMOUNT: { type: String },
    UPTOAMOUNT: { type: String },
    MINPERIOD: { type: Number },
    MAXPERIOD: { type: Number },
    MIN: { type: String },
    MAX: { type: String },
    ENTRYLOAD: { type: String },
    EXITLOAD: { type: Number },
    REMARKS: { type: String },
    Period_Condition: { type: String },
    Period_Type: { type: String },
    Period: { type: String },
    Amount_Condition: { type: String },
    Amount_Type: { type: String },
    Per_Condition: { type: String },
    Per_Frm: { type: String },
    Per_To: { type: String },
    FLAG: { type: String },
}, { versionKey: false });

const schemeeqdetail = new Schema({
    SchemeCode: { type: Number },
    MonthEnd: { type: Number },
    MCAP: { type: Number },
    PE: { type: Number },
    PB: { type: Number },
    Div_Yield: { type: Number },
    FLAG: { type: String },
}, { versionKey: false });

const schemefmpyielddetail = new Schema({
    schemecode: { type: Number },
    maturitydate: { type: Date },
    tenure_number: { type: Number },
    tenure_option: { type: String },
    net_inticative_yield1: { type: Number },
    net_inticative_yield2: { type: Number },
    post_taxyield_ind1: { type: Number },
    post_taxyield_ind2: { type: Number },
    post_taxyield_nonind1: { type: Number },
    post_taxyield_nonind2: { type: Number },
    exit_load: { type: String },
    rollover: { type: String },
    maturitydate_after_rollover: { type: String },
    tenure_no_rollover: { type: String },
    tenure_option_rollover: { type: String },
    flag: { type: String },
}, { versionKey: false });

const schemeindexpart = new Schema({
    SCHEMECODE: { type: Number },
    INDEXCODE: { type: Number },
    Benchmark_Weightage: { type: String },
    IndexOrder: { type: Number },
    Remark: { type: String },
    FLAG: { type: String },
}, { versionKey: false });

const schemeexpenceratio = new Schema({
    amc_code: { type: String },
    schemecode: { type: Number },
    date: { type: Date },
    expratio: { type: Number },
    flag: { type: String },
}, { versionKey: false });

const schemeNameChange = new Schema({
    Amc_Code: { type: Number },
    SchemeCode: { type: Number },
    Effectivedate: { type: Date },
    OldName: { type: String },
    Newname: { type: String },
    Flag: { type: String },
}, { versionKey: false });

const schemeobjective = new Schema({
    schemecode: { type: Number },
    objective: { type: String },
    flag: { type: String },
}, { versionKey: false });

const mfratio = new Schema({
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

const schemergess = new Schema({
    schemecode: { type: Number },
    schemename: { type: String },
    flag: { type: String },
}, { versionKey: false });

const schemertcode = new Schema({
    schemecode: { type: Number },
    rtschemecode: { type: String },
    flag: { type: String },
}, { versionKey: false });

const sectmst = new Schema({
    sect_code: { type: Number },
    sect_name: { type: String },
    flag: { type: String },
}, { versionKey: false });

const mfsip = new Schema({
    schemecode: { type: Number },
    amc_code: { type: Number },
    frequency: { type: String },
    sip: { type: String },
    sipdatescondition: { type: String },
    Dates: { type: String },
    sipdaysall: { type: String },
    sipmininvest: { type: String },
    sipaddninvest: { type: String },
    sipfrequencyno: { type: String },
    sipminimumperiod: { type: String },
    sipmaximumperiod: { type: String },
    sipmincumamount: { type: String },
    sipminunits: { type: String },
    sipmultiplesunits: { type: String },
    flag: { type: String },
}, { versionKey: false });

const mfstp = new Schema({
    schemecode: { type: Number },
    amc_code: { type: String },
    frequency: { type: String },
    stpinout: { type: String },
    stp: { type: String },
    stpdatescondition: { type: String },
    Dates: { type: String },
    stpdaysall: { type: String },
    stpmininvest: { type: Number },
    stpaddninvest: { type: Number },
    stpfrequencyno: { type: Number },
    stpminimumperiod: { type: String },
    stpmaximumperiod: { type: String },
    stpmincumamount: { type: String },
    stpminunits: { type: String },
    stpmultiplesunits: { type: String },
    flag: { type: String },
}, { versionKey: false });

const mfswp = new Schema({
    schemecode: { type: Number },
    amc_code: { type: String },
    frequency: { type: String },
    swp: { type: String },
    swpdatesconditio: { type: String },
    Dates: { type: String },
    swpdaysall: { type: String },
    swpmininvest: { type: Number },
    swpaddninvest: { type: Number },
    swpfrequencyno: { type: Number },
    swpminimumperiod: { type: String },
    swpmaximumperiod: { type: String },
    swpmincumamount: { type: String },
    swpminunits: { type: String },
    swpmultiplesunits: { type: String },
    Flag: { type: String },
}, { versionKey: false });

const typemst = new Schema({
    type_code: { type: String },
    type: { type: String },
    flag: { type: String },
}, { versionKey: false });

var amc_keypersons = mongoose.model('amc_keypersons', amckeypersons, 'amc_keypersons')
var amc_mst = mongoose.model('amc_mst', amcmst, 'amc_mst');
var amc_paum = mongoose.model('amc_paum', amcpaum, 'amc_paum');
var asect_mst = mongoose.model('asect_mst', asectmst, 'asect_mst')
var avg_scheme_aum = mongoose.model('avg_scheme_aum', avgschemeaum, 'avg_scheme_aum')
var cust_mst = mongoose.model('cust_mst', custmst, 'cust_mst')
var div_details = mongoose.model('div_details', divdetails, 'div_details')
var div_mst = mongoose.model('div_mst', divmst, 'div_mst')
var fv_change = mongoose.model('fv_change', fvchange, 'fv_change')
var daily_Fundmanager = mongoose.model('dailyFundmanager', DailyFundmanager, 'dailyFundmanager')
var fundmanager_mst = mongoose.model('fundmanager_mst', fundmanagermst, 'fundmanager_mst')
var index_mst = mongoose.model('index_mst', indexmst, 'index_mst')
var industry_mst = mongoose.model('industry_mst', industrymst, 'industry_mst')
var loadtype_mst = mongoose.model('loadtype_mst', loadtypemst, 'loadtype_mst')
var merged_schemes = mongoose.model('mergedschemes', Mergedschemes, 'mergedschemes')
var mF_BulkDeal = mongoose.model('mF_BulkDeal', mFBULKDEALS, 'mF_BulkDeal')
var company_master = mongoose.model('company_master', companymaster, 'company_master')
var mF_Ratios_DefaultBM = mongoose.model('mF_Ratios_DefaultBM', mFRatiosDefaultBM, 'mF_Ratios_DefaultBM')
var current_nav = mongoose.model('current_nav', currentnav, 'current_nav')
var option_mst = mongoose.model('option_mst', optionmst, 'option_mst')
var plan_mst = mongoose.model('plan_mst', planmst, 'Plan_mst')
var mf_portfolio = mongoose.model('mf_portfolio', mfportfolio, 'mf_portfolio')
var scheme_paum = mongoose.model('scheme_paum', schemepaum, 'scheme_paum')
var portfolio_inout = mongoose.model('portfolio_inout', portfolioinout, 'portfolio_inout')
var sect_allocation = mongoose.model('sect_allocation', sectallocation, 'sect_allocation')
var rt_mst = mongoose.model('rt_mst', rtmst, 'rt_mst')
var sch_assetalloc = mongoose.model('sch_assetalloc', schemeassetalloc, 'sch_assetalloc')
var avg_maturity = mongoose.model('avg_maturity', avgmaturity, 'avg_maturity')
var sclass_mst = mongoose.model('sclass_mst', sclassmst, 'sclass_mst')
var scheme_load = mongoose.model('scheme_load', schemeload, 'scheme_load')
var scheme_eqdetail = mongoose.model('scheme_eqdetail', schemeeqdetail, 'scheme_eqdetail')
var scheme_fmpyielddetail = mongoose.model('scheme_fmpyielddetail', schemefmpyielddetail, 'scheme_fmpyielddetail')
var scheme_index_part = mongoose.model('scheme_index_part', schemeindexpart, 'scheme_index_part')
var scheme_expenceratio = mongoose.model('scheme_expenceratio', schemeexpenceratio, 'scheme_expenceratio')
var scheme_namechange = mongoose.model('scheme_namechange', schemeNameChange, 'scheme_namechange')
var scheme_objective = mongoose.model('scheme_objective', schemeobjective, 'scheme_objective')
var mf_ratio = mongoose.model('mf_ratio', mfratio, 'mf_ratio')
var scheme_rgess = mongoose.model('scheme_rgess', schemergess, 'scheme_rgess')
var scheme_rtcode = mongoose.model('scheme_rtcode', schemertcode, 'scheme_rtcode')
var sect_mst = mongoose.model('sect_mst', sectmst, 'sect_mst')
var mf_sip = mongoose.model('mf_sip', mfsip, 'mf_sip')
var mf_stp = mongoose.model('mf_stp', mfstp, 'mf_stp')
var mf_swp = mongoose.model('mf_swp', mfswp, 'mf_swp')
var type_mst = mongoose.model('type_mst', typemst, 'type_mst')


module.exports = {amc_keypersons, amc_mst, amc_paum, asect_mst, avg_scheme_aum, cust_mst, div_details, div_mst, fv_change, daily_Fundmanager, fundmanager_mst, index_mst, industry_mst, loadtype_mst, merged_schemes, mF_BulkDeal, company_master, mF_Ratios_DefaultBM, current_nav, option_mst, plan_mst, mf_portfolio, scheme_paum, portfolio_inout, sect_allocation, rt_mst, sch_assetalloc, avg_maturity, sclass_mst, scheme_load, type_mst, mf_swp, mf_stp, mf_sip, sect_mst, scheme_rtcode, scheme_rgess, mf_ratio, scheme_paum, scheme_objective, scheme_namechange, scheme_expenceratio, scheme_index_part, scheme_fmpyielddetail, scheme_eqdetail};