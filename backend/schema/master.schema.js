var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

module.exports = {
       sclass_mst,  cust_mst, option_mst, plan_mst, div_mst,
    rt_mst, sect_mst, type_mst, loadtype_mst, index_mst, scheme_objective, scheme_rtcode,
     mf_sip, mf_swp, mf_stp, scheme_index_part, company_master, fundmanager_mst, scheme_isinmaster, scheme_rgess, industry_mst, scheme_load
};

    // module.exports = {mf_portfolio}