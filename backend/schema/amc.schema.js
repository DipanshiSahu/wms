var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const amcmstlist = new Schema({
    amc_code: { type: String },
    amc: { type: String },
    email: { type: String },
    s_name: { type: String },
    rtamccode: { type: String },
    flag: { type: String },
}, { versionKey: false });

// const amcaumdate = new Schema({
//     amc_code: { type: Number },
//     aumdate: { type: Date },
//     totalaum: { type: Number },
//     flag: { type: String },
// }, { versionKey: false });

// const amckeypersonsdate = new Schema({
//     amc_code: { type: String },
//     amc_name: { type: String },
//     srno: { type: String },
//     name: { type: String },
//     desig: { type: String },
//     flag: { type: String },
// }, { versionKey: false });

// const amcpaumdate = new Schema({

//     amc_code: { type: Number },
//     aumdate: { type: Date },
//     totalaum: { type: Number },
//     FLAG: { type: String },
// }, { versionKey: false });

var amc_mst = mongoose.model('amc_mstlist', amcmstlist, 'amc_mstlist')
// var amc_aum = mongoose.model('amc_aumdate', amcaumdate, 'amc_aumdate')
// var amc_keypersons = mongoose.model('amc_keypersonsdate', amckeypersonsdate, 'amc_keypersonsdate')
// var amc_paum = mongoose.model('amc_paumdate', amcpaumdate, 'amc_paumdate')

module.exports={amc_mst};