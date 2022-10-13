var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const schemeexpenceratio = new Schema({
    amc_code: { type: String },
    schemecode: { type: Number },
    date: { type: Date },
    expratio: { type: Number },
    flag: { type: String },
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


const schemeavgmaturity = new Schema({
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

const schemefvchange = new Schema({
    amc_code: { type: Number },
    schemecode: { type: Number },
    scheme_name: { type: String },
    fvbefore: { type: Number },
    fvafter: { type: Number },
    fvdate: { type: Date },
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


const schemeDailyFundmanager = new Schema({
    date: { type: Date },
    amc: { type: Number },
    schemecode: { type: Number },
    fundManger1: { type: Number },
    fundManger2: { type: Number },
    fundManger3: { type: Number },
    fundManger4: { type: Number },
    flag: { type: String },
}, { versionKey: false });


const schemeMergedschemes = new Schema({
    schemecode: { type: Number },
    mergedwith: { type: Number },
    EFFECT_DATE: { type: Date },
    flag: { type: String },
}, { versionKey: false });

const schememFBULKDEALSdate = new Schema({
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


const schemeassetalloc = new Schema({
    schemeinv_id: {type: Number},
    schemecode: {type: Number},
    investment: {type: String},
    mininv: {type: Number},
    maxinv: {type: Number},
    flag: {type: String},
}, { versionKey: false });


var sch_expenceratio = mongoose.model('sch_expenceratiodate', schemeexpenceratio, 'sch_expenceratiodate')
var sch_eqdetail = mongoose.model('sch_eqdetaildate', schemeeqdetail, 'sch_eqdetaildate')
var sch_fmpyielddetail = mongoose.model('sch_fmpyielddetail', schemefmpyielddetail, 'sch_fmpyielddetail')
var sch_avgmaturity = mongoose.model('sch_avgmaturitydate', schemeavgmaturity, 'sch_avgmaturitydate')
var sch_fvchange = mongoose.model('sch_fvchangedate', schemefvchange, 'sch_fvchangedate')
var sch_nameChange = mongoose.model('sch_nameChangedate', schemeNameChange, 'sch_nameChangedate')
var sch_dailyFundmanager = mongoose.model('sch_dailyFundmanagerdate', schemeDailyFundmanager, 'sch_dailyFundmanagerdate')
var sch_mergedschemes = mongoose.model('sch_mergedschemesdate', schemeMergedschemes, 'sch_mergedschemesdate')
var sch_mFBULKDEALS = mongoose.model('sch_mFBULKDEALSdate', schememFBULKDEALSdate, 'sch_mFBULKDEALSdate')
var sch_assetalloc = mongoose.model('sch_assetallocdate', schemeassetalloc, 'sch_assetallocdate')




module.exports = { sch_expenceratio, sch_eqdetail, sch_fmpyielddetail, sch_avgmaturity, sch_fvchange, sch_nameChange, sch_dailyFundmanager, sch_mergedschemes, sch_mFBULKDEALS,sch_assetalloc }