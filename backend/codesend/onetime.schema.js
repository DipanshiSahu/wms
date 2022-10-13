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


var amc_keypersons = mongoose.model('amc_keypersons', amckeypersons, 'amc_keypersons');
var amc_mst = mongoose.model('amc_mst', amcmst, 'amc_mst');
var amc_paum = mongoose.model('amc_paum', amcpaum, 'amc_paum');
var asect_mst = mongoose.model('asect_mst', asectmst, 'asect_mst')
var avg_scheme_aum = mongoose.model('avg_scheme_aum', avgschemeaum, 'avg_scheme_aum')
var cust_mst = mongoose.model('cust_mst', custmst, 'cust_mst')
var div_details = mongoose.model('div_details', divdetails, 'div_details');
var div_mst = mongoose.model('div_mst', divmst, 'div_mst')
var fv_change = mongoose.model('fv_change', fvchange, 'fv_change')

module.exports = {
    amc_keypersons, amc_mst, amc_paum, asect_mst, avg_scheme_aum,cust_mst,div_details ,div_mst
};