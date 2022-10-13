var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const schememaster = new Schema({
    schemecode: { type: String },
    amc_code: { type: String },
    scheme_name: { type: String },
    color: { type: String },
    flag: { type: String },
}, { versionKey: false });

const schemedetail = new Schema({
    schemecode: { type: String },
    amfi_code: { type: String },
    cams_code: { type: String },
    amc_code: { type: String },
    s_name: { type: String },
    amfi_name: { type: String },
    isin_code: { type: String },
    type_code: { type: String },
    opt_code: { type: String },
    classcode: { type: String },
    theme_code: { type: String },
    rt_code: { type: String },
    plan: { type: String },
    cust_code: { type: String },
    cust_code2: { type: String },
    price_freq: { type: String },
    init_price: { type: String },
    offerprice: { type: String },
    nfo_open: { type: String },
    nfo_close: { type: String },
    reopen_dt: { type: String },
    elf: { type: String },
    etf: { type: String },
    stp: { type: String },
    primary_fund: { type: String },
    primary_fd_code: { type: String },
    sip: { type: String },
    swp: { type: String },
    switch: { type: String },
    mininvt: { type: String },
    multiples: { type: String },
    inc_invest: { type: String },
    adnmultiples: { type: String },
    fund_mgr1: { type: String },
    fund_mgr2: { type: String },
    fund_mgr3: { type: String },
    fund_mgr4: { type: String },
    since: { type: String },
    status: { type: String },
    cutsub: { type: String },
    cutred: { type: String },
    red: { type: String },
    mob_name: { type: String },
    div_freq: { type: String },
    scheme_symbol: { type: String },
    fund_mgr_code1: { type: String },
    FUND_MGR_CODE2: { type: String },
    FUND_MGR_CODE3: { type: String },
    FUND_MGR_CODE4: { type: String },
    Redemption_date: { type: String },
    DateOfAllot: { type: String },
    Div_Code: { type: String },
    LegalNames: { type: String },
    AMFIType: { type: String },
    NonTxnDay: { type: String },
    SchemeBank: { type: String },
    SchemeBankAccountNumber: { type: String },
    SchemeBankBranch: { type: String },
    DividendOptionFlag: { type: String },
    LockIn: { type: String },
    IsPurchaseAvailable: { type: String },
    IsRedeemAvailable: { type: String },
    MinRedemptionAmount: { type: String },
    RedemptionMultipleAmount: { type: String },
    MinRedemptionUnits: { type: String },
    MinSwitchAmount: { type: String },
    SwitchMultipleAmount: { type: String },
    MinSwitchUnits: { type: String },
    SwitchMultiplesUnits: { type: String },
    securitycode: { type: String },
    unit: { type: String },
    SwitchOut: { type: String },
    MinSwitchOutAmount: { type: String },
    SwitchOutMultipleAmount: { type: String },
    MinSwitchOutUnits: { type: String },
    SwitchOutMultiplesUnits: { type: String },
    Incept_date: { type: String },
    Incept_Nav: { type: String },
    DefaultOpt: { type: String },
    DefaultPlan: { type: String },
    LockPeriod: { type: String },
    ODDraftDate: { type: String },
    Liquidated_Date: { type: String },
    Old_Plan: { type: String },
    Direct_Plan: { type: String },
    optionType: { type: String },
    flag: { type: String },
}, { versionKey: false });

///third raw data scheme expence ratio api 
const schemeexpenceratio = new Schema({
    amc_code: { type: String },
    schemecode: { type: Number },
    date: { type: Date },
    expratio: { type: Number },
    flag: { type: String },
}, { versionKey: false });

///third raw data scheme eq detail api 
const schemeeqdetail = new Schema({
    SchemeCode: { type: Number },
    MonthEnd: { type: Number },
    MCAP: { type: Number },
    PE: { type: Number },
    PB: { type: Number },
    Div_Yield: { type: Number },
    FLAG: { type: String },
}, { versionKey: false });

///third raw data  scheme fmp yield details  api 
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
    maturitydate_after_rollover: { type: Date },
    tenure_no_rollover: { type: String },
    tenure_option_rollover: { type: String },
    flag: { type: String },
}, { versionKey: false });

const sclassmstdate = new Schema({
    classcode: { type: Number },
    classname: { type: String },
    asset_code: { type: Number },
    asset_type: { type: String },
    category: { type: String },
    sub_category: { type: String },
    flag: { type: String },
}, { versionKey: false });

const custmstdate = new Schema({
    cust_code: { type: String },
    cust_name: { type: String },
    sebi_reg_no: { type: String },
    add1: { type: String },
    add2: { type: String },
    add3: { type: String },
    flag: { type: String },
}, { versionKey: false });


const optionmstdate = new Schema({
    opt_code: { type: String },
    option: { type: String },
    flag: { type: String },
}, { versionKey: false });

const planmstdate = new Schema({
    plan_code: { type: Number },
    plan: { type: String },
    flag: { type: String },
}, { versionKey: false });

const divmstdate = new Schema({
    div_code: { type: String },
    div_type: { type: String },
    flag: { type: String },
}, { versionKey: false });

const rtmstdate = new Schema({
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

const sectmstdate = new Schema({
    sect_code: { type: Number },
    sect_name: { type: String },
    flag: { type: String },
}, { versionKey: false });

const typemstdate = new Schema({
    type_code: { type: String },
    type: { type: String },
    flag: { type: String },
}, { versionKey: false });

const loadtypemstdate = new Schema({
    ltypecode: { type: Number },
    load: { type: String },
    flag: { type: String },
}, { versionKey: false });

const indexmstdate = new Schema({
    indexcode: { type: Number },
    fincode: { type: Number },
    scripcode: { type: Number },
    indexname: { type: String },
    index_gp: { type: String },
    subgroup: { type: String },
    flag: { type: String },
}, { versionKey: false });

const schemeobjectivedate = new Schema({
    schemecode: { type: Number },
    objective: { type: String },
    flag: { type: String },
}, { versionKey: false });

const schemertcodedate = new Schema({
    schemecode: { type: Number },
    rtschemecode: { type: String },
    flag: { type: String },
}, { versionKey: false });

const mfsipdate = new Schema({
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

const mfswpdate = new Schema({
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

const mfstpdate = new Schema({
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

const schemeindexpartdate = new Schema({
    SCHEMECODE: { type: Number },
    INDEXCODE: { type: Number },
    Benchmark_Weightage: { type: String },
    IndexOrder: { type: Number },
    Remark: { type: String },
    FLAG: { type: String },

}, { versionKey: false });

const companymasterdate = new Schema({
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

const fundmanagermstdate = new Schema({
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

const schemeisinmasterdate = new Schema({
    Id: { type: Number },
    ISIN: { type: String },
    Schemecode: { type: Number },
    Amc_code: { type: String },
    NseSymbol: { type: String },
    Series: { type: String },
    RTASchemecode: { type: String },
    AMCSchemecode: { type: String },
    LongSchemeDescrip: { type: String },
    ShortSchemeDescrip: { type: String },
    Status: { type: String },
    flag: { type: String },

}, { versionKey: false });

const schemergessdate = new Schema({
    schemecode: { type: Number },
    schemename: { type: String },
    flag: { type: String },

}, { versionKey: false });

const industrymstdate = new Schema({
    Ind_code: { type: Number },
    Industry: { type: String },
    Ind_shortname: { type: String },
    Sector: { type: String },
    Sector_code: { type: Number },
    Flag: { type: String },
}, { versionKey: false });

const schemeloaddate = new Schema({
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


var sch_master = mongoose.model('scheme_master', schememaster, 'scheme_master')
var sch_detail = mongoose.model('scheme_detail', schemedetail, 'scheme_detail')
var sclass_mst = mongoose.model('sclass_mstdate', sclassmstdate, 'sclass_mstdate')
var cust_mst = mongoose.model('cust_mstdate', custmstdate, 'cust_mstdate')
var option_mst = mongoose.model('option_mstdate', optionmstdate, 'option_mstdate')
var plan_mst = mongoose.model('plan_mstdate', planmstdate, 'Plan_mstdate')
var div_mst = mongoose.model('div_mstdate', divmstdate, 'div_mstdate')
var rt_mst = mongoose.model('rt_mstdate', rtmstdate, 'rt_mstdate')
var sect_mst = mongoose.model('sect_mstdate', sectmstdate, 'sect_mstdate')
var type_mst = mongoose.model('type_mstdate', typemstdate, 'type_mstdate')
var loadtype_mst = mongoose.model('loadtype_mstdate', loadtypemstdate, 'loadtype_mstdate')
var index_mst = mongoose.model('index_mstdate', indexmstdate, 'index_mstdate')
var scheme_objective = mongoose.model('scheme_objectivedate', schemeobjectivedate, 'scheme_objectivedate')
var scheme_rtcode = mongoose.model('scheme_rtcodedate', schemertcodedate, 'scheme_rtcodedate')
var mf_sip = mongoose.model('mf_sipdate', mfsipdate, 'mf_sipdate')
var mf_swp = mongoose.model('mf_swpdate', mfswpdate, 'mf_swpdate')
var mf_stp = mongoose.model('mf_stpdate', mfstpdate, 'mf_stpdate')
var scheme_index_part = mongoose.model('scheme_index_partdate', schemeindexpartdate, 'scheme_index_partdate')
var company_master = mongoose.model('company_masterdate', companymasterdate, 'company_masterdate')
var fundmanager_mst = mongoose.model('fundmanager_mstdate', fundmanagermstdate, 'fundmanager_mstdate')
var scheme_isinmaster = mongoose.model('scheme_isinmasterdate', schemeisinmasterdate, 'scheme_isinmasterdate')
var scheme_rgess = mongoose.model('scheme_rgessdate', schemergessdate, 'scheme_rgessdate')
var industry_mst = mongoose.model('industry_mstdate', industrymstdate, 'industry_mstdate')
var scheme_load = mongoose.model('scheme_loaddate', schemeloaddate, 'scheme_loaddate')
var sch_expenceratio = mongoose.model('scheme_expenceratio', schemeexpenceratio, 'scheme_expenceratio')
var sch_eqdetail = mongoose.model('scheme_eqdetail', schemeeqdetail, 'scheme_eqdetail')
var sch_fmpyielddetail = mongoose.model('scheme_fmpyielddetail', schemefmpyielddetail, 'scheme_fmpyielddetail')

module.exports = {
    sch_master, sch_detail, sch_expenceratio, sch_eqdetail, sch_fmpyielddetail, sclass_mst,  cust_mst, option_mst, plan_mst, div_mst,
    rt_mst, sect_mst, type_mst, loadtype_mst, index_mst, scheme_objective, scheme_rtcode,
     mf_sip, mf_swp, mf_stp, scheme_index_part, company_master, fundmanager_mst, scheme_isinmaster, scheme_rgess, industry_mst, scheme_load
};

    // module.exports = {mf_portfolio}