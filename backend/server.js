const moment = require('moment');
const multisort = require('multisort');
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var morgan = require("morgan");
var db = require("./config.js");
const cors = require('cors');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var json2xml = require('json2xml');
var xml2js = require('xml2js');
var convert = require('xml-js');

// var router = require("./routes/saveapi.routes.js");




//const localtunnel = require('localtunnel');

//var convert = require('xml-js');
//var convert = new xml2js.Parser();
var _ = require('underscore');
var ObjectId = require('mongodb').ObjectID;
var { GetSnapshot } = require('./controllers/port_folio.controller');
var { GetNonZeroFolio, GetSchemeList } = require('./controllers/helper.controller');
var { users, navcams, foliocams, foliokarvy, transcams, transc, transk, transf, transc2A, camsn, family, folioc, foliok, foliof, allcamsn, loginschema, usermaster } = require('./schema/model.schema');
var { GetAMC } = require('./controllers/amc.controller');
var { portfolioApiDetail, portfolioApisnapshot, helper_Minorpan, helper_Individualpan } = require('./routes/portfolio.routes');
var { GetLoginDetail, RegistrationDetail, Updateuser, GetClientDetail } = require('./controllers/login.controller');
var { UploadTransKarvy, UploadTransCams, UploadTransCams2A, UploadFolioCams, UploadFolioKarvy } = require('./controllers/upload.controller');
// var {Amc_keypersonsdate,Type_Mstdate,Scheme_Rtcodedate} = require('./controller/saveapi.controller')
// var {Type,Amc,Scheme,}=require('./schema/accordapiSchema');
var { Updateonetimemaster } = require('./controllers/onetimemaster.controller');
var { Updatefourtimemaster,Updatefivetimemaster } = require('./controllers/fourtimemaster.controller');
var { Updatemaster } = require('./controllers/master.controller');
var { Updatesecondmaster } = require('./controllers/secondmaster.controller');
var { Updatethirdmaster } = require('./controllers/thirdmaster.controller');
// var{ GetSchemeType } =require('./controllers/savapi2.controller')
// var { sch_master, sch_detail,amc_mst,Sclass_mst, sch_expenceratio,sch_eqdetail,sch_fmpyielddetail } = require('./controllers/master.controller');

var localStorage = require('localStorage');
var Schema = mongoose.Schema;
const Axios = require("axios");
const { mongo } = require('mongoose');
const { createVerify } = require('crypto');
var fs = require('fs');
const XLSX = require('xlsx');
let fetch = import('node-fetch');

//moment.suppressDeprecationWarnings = true;
var app = express();
var port = process.env.port || 3001;

var srcpath = path.join(__dirname, '/public');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
// app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// app.use(router);

var newdata = ""; var newdata1 = "";
var newdata2 = ""; var datacon = "";

//mongoose.set('debug', true)

var data = ""; var karvydata = ""; var camsdata = ""; var frankdata = ""; var datacon = "";
var i = 0; var pipeline = ""; var pipeline1 = ""; var pipeline2 = ""; var pipeline3 = "";
var foliokarvydata = ""; var foliocamsdata = ""; var foliofranklindata = "";
var resdata = ""; var pipeline4 = ""; var pipeline5 = ""; var pipeline6 = ""; var finalarr = "";

const auth = {
    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYjcwZTcxOWFiNmFhOWJlYjFiYTZjYjQ2ZGU5ODRhMjkxMGNiMGJkZjFjMWJkNjE0MjdlYTY3NTkyMjg2ZDhhNGFiN2ZlNDUxOGJjZmI2YjMiLCJpYXQiOjE2Mjg4NTA4MzQsIm5iZiI6MTYyODg1MDgzNCwiZXhwIjoxNjYwMzg2ODM0LCJzdWIiOiIxMTEiLCJzY29wZXMiOltdfQ.FtmkE74kDXjlSd8sJP-fBrqGLWLvrxHZICrs-xZ-Jav8xnWVNbkbZXz5giRzaH9CZFaQpBemP6Z56sNr-kfxDlhif12Htf1GiRVolmVV2H2aMEOC8B4qOoDFE9fSKfZSmK8XfaiLSZJE8w2nQyDkE4Q0QOpMMbrIH_0twS9LFK9whOo-sKnxFDzimgUdNkmk7vVaV6560UdzPv9Oy6lObG7_F3kKu4kIXSTyHZBMQLGkqrjeTCnyu6AZSDSyZ7S_2IdwS2WFpEBcf8N1FqeJzLfBif5wljrroCjaqhtOKwED9uEXIUuEAM3IhKnMOz5CwbOGXRLqfN_Msde-lsB1nWRI0QwZHNFv2b81nkuELC6o_nUGSjcElSznaNuPZKT1c_faF4qv7HfqnLv1zaEwoUosyE_mp5KDdzzGYwwHyjiVGGo0bFRbUbUKsQgp8rmoiQn7tB02262arArZAobsmqZ2Rwk57uhtCRHiIbjyyAsJfobnzbORtGyFfyGjfstKnjK7wewBUrhQXj59THelrS5le8Ci1j2O6Dr0FuBlAkI_e5vMOE5yh4yc_weCEqc6_EGT1Y5X4oY2KRZH02Hnqkc8lF9wwO5P-KU2fxNvlZKT8mVWHTilijP22Q3H1f7o5C64mI_DliivzSW2C6sIjZstRXjKHr2U64qE625N2G0"
};

const https = require('https');
const sevenBin = require("7zip-bin");
const seven = require("node-7z");
const { default: axios } = require('axios');


app.post("/api/checklogin", GetLoginDetail);
app.post("/api/registeruser", RegistrationDetail);
app.post("/api/updateuser", Updateuser);
app.get("/api/getallamc", GetAMC);
app.post("/api/getclientdetail", GetClientDetail);
app.post("/api/uploadtranskarvytest", UploadTransKarvy);
app.post("/api/uploadtranscamstest", UploadTransCams);
app.post("/api/uploadtranscams2atest", UploadTransCams2A);
app.post("/api/uploadfoliocamstest", UploadFolioCams);
app.post("/api/uploadfoliokarvytest", UploadFolioKarvy);
app.post("/api/getAmcFolioViaProfileWithOutZero", GetNonZeroFolio);
app.post("/api/getSchemeListAddPur", GetSchemeList);



app.get("/api/scheme_masterdate", Updatemaster);
app.get("/api/scheme_detailsdate", Updatemaster);
app.get("/api/amc_mstdate", Updatemaster);
app.get("/api/sclass_mstdate", Updatemaster);
app.get("/api/asect_mstdate", Updatemaster);
app.get("/api/cust_mstdate", Updatemaster);
app.get("/api/option_mstdate", Updatemaster);
app.get("/api/plan_mstdate", Updatemaster);
app.get("/api/div_mstdate", Updatemaster);
app.get("/app/rt_mstdate", Updatemaster);
app.get("/api/sect_mstdate", Updatemaster);
app.get("/api/type_mstdate", Updatemaster);
app.get("/api/loadtype_mstdate", Updatemaster);
app.get("/api/index_mstdate", Updatemaster);
app.get("/api/scheme_objectivedate", Updatemaster);
app.get("/api/scheme_rtcodedate", Updatemaster);
app.get("/api/amc_keypersonsdate", Updatemaster);
app.get("/api/mf_sipdate", Updatemaster);
app.get("/api/mf_swpdate", Updatemaster);
app.get("/api/mf_stpdate", Updatemaster);
app.get("/api/scheme_indexpartdate", Updatemaster);
app.get("/api/company_masterdate", Updatemaster);
app.get("/api/fundmanager_mstdate", Updatemaster);
app.get("/api/scheme_isinmasterdate", Updatemaster);
app.get("/api/scheme_rgessdate", Updatemaster);
app.get("/api/industry_mstdate", Updatemaster);
app.get("/api/schemeloaddate", Updatemaster);


app.get("/api/mf_portfoliodate", Updatesecondmaster);
app.get("/api/amc_aumdate", Updatesecondmaster);
app.get("/api/scheme_aumdate", Updatesecondmaster);
app.get("/api/portfolio_inoutdate", Updatesecondmaster);
app.get("/api/sect_allocationdate", Updatesecondmaster);
app.get("/api/amc_paumdate", Updatesecondmaster);
app.get("/api/scheme_paumdate", Updatesecondmaster);
app.get("/api/avg_scheme_aumdate", Updatesecondmaster);
app.get("/api/current_navdate", Updatesecondmaster);
app.get("/api/nav_histdate", Updatesecondmaster);
app.get("/api/navhist_HLdate", Updatesecondmaster);
app.get("/api/mf_returndate", Updatesecondmaster);
app.get("/api/mf_abs_returndate", Updatesecondmaster);
app.get("/api/mf_ans_returndate", Updatesecondmaster);
app.get("/api/class_WiseReturndate", Updatesecondmaster);
app.get("/api/mf_ratiodate", Updatesecondmaster);
app.get("/api/mF_Ratios_DefaultBMdate", Updatesecondmaster);
app.get("/api/bM_AbsoluteReturndate", Updatesecondmaster);
app.get("/api/bM_AnnualisedReturndate", Updatesecondmaster);
app.get("/api/div_detailsdate", Updatesecondmaster);


app.get("/api/sch_expenceratiodate", Updatethirdmaster);
app.get("/api/sch_eqdetaildate", Updatethirdmaster);
app.get("/api/sch_fmpyielddetail", Updatethirdmaster);
app.get("/api/sch_avgmaturitydate", Updatethirdmaster);
app.get("/api/sch_fvchangedate", Updatethirdmaster);
app.get("/api/sch_nameChangedate", Updatethirdmaster);
app.get("/api/sch_dailyFundmanagerdate", Updatethirdmaster);
app.get("/api/sch_mergedschemesdate", Updatethirdmaster);
app.get("/api/sch_mFBULKDEALSdate", Updatethirdmaster);
app.get("/api/sch_assetallocdate", Updatethirdmaster);


app.get("/api/end_of_day", Updateonetimemaster)
app.get("/api/intra_day", Updatefourtimemaster)
app.get("/api/abs_cls_sch_return",Updatefivetimemaster)




















app.post("/api/getiin", function (req, res) {
    const requestdata = {
        "pan_card": req.body.pan_card
    }
    Axios.post('https://uat-mfprodigy.bfccapital.com/api/iinstatus', requestdata,
    ).then(function (result) {
        console.log(result.data)
        res.json(result.data);
    });
})

app.get("/api/uploadfile", function (req, res) {
    var newurl = 'https://mailback8.camsonline.com/mailback_result/95438736220230821ZF8MNPMPRFO0GFEKS4U5SHD9L1184092311028BMB132902811R9.zip';

    https.get(newurl, (res) => {
        let currentdate = new Date();
        let am_pm = currentdate.getHours() >= 12 ? "PM" : "AM";
        var foldername = currentdate.getFullYear() + '-' + (("0" + (currentdate.getMonth() + 1)).slice(-2)) + '-' + ("0" + currentdate.getDate()).slice(-2) + '-' + currentdate.getHours() + '-' + currentdate.getMinutes() + '-' + currentdate.getSeconds() + '-' + am_pm;

        const zippath = `${__dirname}` + '/datafolder/' + foldername + '.zip';
        console.log(zippath)
        const filePath = fs.createWriteStream(zippath);
        res.pipe(filePath);
        filePath.on('finish', () => {
            filePath.close();
            console.log('Download Completed');
            try {
                const password = "123456";
                const unzipAndUnlockZipFile = async (filepath, password) => {
                    try {
                        const zipDirectory = await unzipper.Open.file(filepath); // unzip a file
                    } catch (e) {
                        //console.log("errrrrr=",e);
                    }
                };
                unzipAndUnlockZipFile(zippath, password);
            } catch (e) {
                console.log(e);
            }
            const downloadDirectory = `${__dirname}` + '/datafolder/' + foldername;
            const zipStream = seven.extractFull(zippath, downloadDirectory, {
                password: '123456',
                $bin: sevenBin.path7za
            })

            zipStream.on('end', () => {
                console.log("directory")


            })
        })

    })

    res.send("test");

})

app.get("/api/listingclient", function (req, res) {
    Axios.get('https://mfprodigy.bfccapital.com/api/show_client',
    ).then(function (result) {
        res.json(result.data);
    });
})

app.post("/api/clientdetail", function (req, res) {
    Axios.get('https://mfprodigy.bfccapital.com/api/userData/' + req.body.email,
    ).then(function (result) {
        res.json(result.data);

    });
})

app.get("/api/auto_update_nav", function (req, res) {
    Axios.get('https://www.amfiindia.com/spages/NAVAll.txt',
    ).then(function (result) {
        const wb = XLSX.read(result.data, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
        const dataStringLines = data.split(/\r\n|\n/);
        const headers1 = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
        const headers2 = headers1.toString().replace(/ /g, "").split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
        const headers = headers2.toString().replace(/\//g, "").split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
        console.log("headers=", headers);
        console.log("dataStringLines=", dataStringLines.length);
        const list = []; const newlist = [];
        for (let i = 1; i < dataStringLines.length; i++) {
            const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
            if (headers && row.length === headers.length) {
                const obj = {};
                for (let j = 0; j < headers.length; j++) {
                    let d = row[j];
                    if (d.length > 0) {
                        if (d[0] === '"')
                            d = d.substring(1, d.length - 1);
                        if (d[d.length - 1] === '"')
                            d = d.substring(d.length - 2, 1);
                    }
                    if (headers[j]) {
                        obj[headers[j]] = d;
                    }
                }
                // remove the blank rows
                if (Object.values(obj).filter(x => x).length > 0) {
                    list.push(obj);
                }
            }
        }
        for (var k = 0; k < list.length; k++) {
            if (list[k].SchemeName != "" && !isNaN(list[k].NetAssetValue)) {
                newlist.push(list[k])
            }
        }
        db.collection('cams_nav').remove({});
        console.log("newlist length=", newlist.length)
        for (var i = 0; i < newlist.length; i++) {
            camsn.updateMany(
                { $and: [{ SchemeCode: newlist[i].SchemeCode }, { ISINDivPayoutISINGrowth: newlist[i].ISINDivPayoutISINGrowth }, { ISINDivReinvestment: newlist[i].ISINDivReinvestment }, { SchemeName: newlist[i].SchemeName }, { NetAssetValue: Number(newlist[i].NetAssetValue) }, { Date: moment(new Date(newlist[i].Date)).format("YYYY-MM-DD") }] },
                {
                    $set:
                    {
                        SchemeCode: newlist[i].SchemeCode,
                        ISINDivPayoutISINGrowth: newlist[i].ISINDivPayoutISINGrowth,
                        ISINDivReinvestment: newlist[i].ISINDivReinvestment,
                        SchemeName: newlist[i].SchemeName,
                        NetAssetValue: Number(newlist[i].NetAssetValue),
                        Date: moment(new Date(newlist[i].Date)).format("YYYY-MM-DD"),
                    }
                },
                {
                    "upsert": true
                },
                function (err, object) {
                    if (err) {
                        //       console.warn(err.message);  // returns error if no matching object found
                    } else {
                        //   console.log(object)
                    }

                })
            allcamsn.updateMany(
                { $and: [{ SchemeCode: newlist[i].SchemeCode }, { ISINDivPayoutISINGrowth: newlist[i].ISINDivPayoutISINGrowth }, { ISINDivReinvestment: newlist[i].ISINDivReinvestment }, { SchemeName: newlist[i].SchemeName }, { NetAssetValue: Number(newlist[i].NetAssetValue) }, { Date: moment(new Date(newlist[i].Date)).format("YYYY-MM-DD") }] },
                {
                    $set:
                    {
                        SchemeCode: newlist[i].SchemeCode,
                        ISINDivPayoutISINGrowth: newlist[i].ISINDivPayoutISINGrowth,
                        ISINDivReinvestment: newlist[i].ISINDivReinvestment,
                        SchemeName: newlist[i].SchemeName,
                        NetAssetValue: Number(newlist[i].NetAssetValue),
                        Date: moment(new Date(newlist[i].Date)).format("YYYY-MM-DD"),
                    }
                },
                {
                    "upsert": true
                },
                function (err, object) {
                    if (err) {
                        //       console.warn(err.message);  // returns error if no matching object found
                    } else {
                        /// console.log("success msg")
                    }

                })
        }
        //  console.log("list="+list)
    });
})

app.post("/api/StateCitybyPincode", function (req, res) {
    const data_loc = {
        pincode: req.body.pincode,
    };
    Axios.post('https://mfprodigy.bfccapital.com/api/persional_details/getStateCitybyPincode', data_loc, {
        headers: {
            "Authorization": auth.Authorization,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
    }).then(function (result) {
        res.json(result.data);
    });
})

app.get("/api/gettranscams", function (req, res) {
    var model = mongoose.model('trans_cams', transcams, 'trans_cams');
    model.find({}, function (err, camsdata) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(camsdata);
        }
    });
})

//Start Client Mapping  ********

app.post("/api/searchclient", function (req, res) {
    var pan = req.body.pan.toUpperCase();
    // var name = req.body.name.toUpperCase();
    var str1 = ""; var str2 = ""; var str3 = ""; var str4 = "";
    var arr1 = []; var arr2 = []; var arr3 = []; var arr4 = [];
    arr1.push({ FOLIO_DATE: { $gte: new Date(moment(req.body.fromdate).format("YYYY-MM-DD")), $lte: new Date(moment(req.body.todate).format("YYYY-MM-DD")) } })//folio_cams
    arr2.push({ LASTUPDAT1: { $gte: new Date(moment(req.body.fromdate).format("YYYY-MM-DD")), $lte: new Date(moment(req.body.todate).format("YYYY-MM-DD")) } })//folio_karvy
    arr3.push({ TRADDATE: { $gte: new Date(moment(req.body.fromdate).format("YYYY-MM-DD")), $lte: new Date(moment(req.body.todate).format("YYYY-MM-DD")) } })//trans_cams
    arr4.push({ TD_TRDT: { $gte: new Date(moment(req.body.fromdate).format("YYYY-MM-DD")), $lte: new Date(moment(req.body.todate).format("YYYY-MM-DD")) } })//trans_karvy
    if (req.body.pan != "" && req.body.name != "") {
        str1 = { $and: arr1, PAN_NO: req.body.pan.toUpperCase(), INV_NAME: { $regex: req.body.name, $options: 'i' } }//folio_cams
        str2 = { $and: arr2, PANGNO: req.body.pan.toUpperCase(), INVNAME: { $regex: req.body.name, $options: 'i' } }//folio_karvy
        str3 = { $and: arr3, PAN: req.body.pan.toUpperCase(), INV_NAME: { $regex: req.body.name, $options: 'i' } }//trans_cams
        str4 = { $and: arr4, PAN1: req.body.pan.toUpperCase(), INVNAME: { $regex: req.body.name, $options: 'i' } }//trans_karvy
    } else if (req.body.name != "" && req.body.pan === "") {
        str1 = { $and: arr1, INV_NAME: { $regex: req.body.name, $options: 'i' } }//folio_cams
        str2 = { $and: arr2, INVNAME: { $regex: req.body.name, $options: 'i' } }//folio_karvy
        str3 = { $and: arr3, INV_NAME: { $regex: req.body.name, $options: 'i' } }//trans_cams
        str4 = { $and: arr4, INVNAME: { $regex: req.body.name, $options: 'i' } }//trans_karvy
    } else if (req.body.pan != "" && req.body.name === "") {
        str1 = { $and: arr1, PAN_NO: req.body.pan.toUpperCase() }//folio_cams
        str2 = { $and: arr2, PANGNO: req.body.pan.toUpperCase() }//folio_karvy
        str3 = { $and: arr3, PAN: req.body.pan.toUpperCase() }//trans_cams
        str4 = { $and: arr4, PAN1: req.body.pan.toUpperCase() }//trans_karvy
    } else {
        str1 = { FOLIO_DATE: { $gte: new Date(moment(req.body.fromdate).format("YYYY-MM-DD")), $lte: new Date(moment(req.body.todate).format("YYYY-MM-DD")) } }//folio_cams
        str2 = { LASTUPDAT1: { $gte: new Date(moment(req.body.fromdate).format("YYYY-MM-DD")), $lte: new Date(moment(req.body.todate).format("YYYY-MM-DD")) } }//folio_karvy
        str3 = { TRADDATE: { $gte: new Date(moment(req.body.fromdate).format("YYYY-MM-DD")), $lte: new Date(moment(req.body.todate).format("YYYY-MM-DD")) } }//trans_cams
        str4 = { TD_TRDT: { $gte: new Date(moment(req.body.fromdate).format("YYYY-MM-DD")), $lte: new Date(moment(req.body.todate).format("YYYY-MM-DD")) } }//trans_karvy
    }
    pipeline1 = [  //folio_cams
        { $match: str1 },
        { $project: { _id: 1, PAN: "$PAN_NO", GPAN: "$GUARD_PAN", INVNAME: "$INV_NAME", CAPITALNAME: { "$toUpper": ["$INV_NAME"] }, FOLIO: "$FOLIOCHK", NAVDATE: { $dateToString: { format: "%d/%m/%Y", date: "$FOLIO_DATE" } }, ADD1: "$ADDRESS1", ADD2: "$ADDRESS2", ADD3: "$ADDRESS3", USER_ID: "$USER_ID" } },
    ]

    pipeline2 = [  //folio_karvy
        { $match: str2 },
        { $project: { _id: 1, PAN: "$PANGNO", GPAN: "$GUARDPANNO", INVNAME: "$INVNAME", CAPITALNAME: { "$toUpper": ["$INVNAME"] }, FOLIO: "$ACNO", NAVDATE: { $dateToString: { format: "%d/%m/%Y", date: "$LASTUPDAT1" } }, ADD1: "$ADD1", ADD2: "$ADD2", ADD3: "$ADD3", USER_ID: "$USER_ID" } },
    ]
    pipeline3 = [  //trans_cams
        { $match: str3 },
        { $project: { _id: 1, FOLIO_NO: "$FOLIO_NO", INV_NAME: "$INV_NAME", PAN: "$PAN", TRADDATE: "$TRADDATE", USER_ID: "$USER_ID" } },
        // { $lookup: { from: 'folio_cams', localField: 'FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
        {
            $lookup:
            {
                from: "folio_cams",
                let: { folio: "$FOLIO_NO", pan: "$PAN" },
                pipeline: [
                    {
                        $match:
                        {
                            $expr:
                            {
                                $and:
                                    [
                                        { $eq: ["$FOLIOCHK", "$$folio"] },
                                        { $eq: ["$PAN_NO", "$$pan"] }
                                    ]
                            }
                        }
                    },
                    { $project: { _id: 0 } }
                ],
                as: "detail"
            }
        },
        { $unwind: "$detail" },
        { $project: { _id: 1, PAN: "$detail.PAN_NO", GPAN: "$detail.GUARD_PAN", INVNAME: "$INV_NAME", CAPITALNAME: { "$toUpper": ["$INV_NAME"] }, FOLIO: "$FOLIO_NO", NAVDATE: { $dateToString: { format: "%d/%m/%Y", date: "$TRADDATE" } }, ADD1: "$detail.ADDRESS1", ADD2: "$detail.ADDRESS2", ADD3: "$detail.ADDRESS3", USER_ID: "$USER_ID" } },
    ]

    pipeline4 = [  //trans_karvy
        { $match: str4 },
        { $project: { _id: 1, TD_ACNO: "$TD_ACNO", INVNAME: "$INVNAME", PAN1: "$PAN1", TD_TRDT: "$TD_TRDT", USER_ID: "$USER_ID" } },
        //{ $lookup: { from: 'folio_karvy', localField: 'TD_ACNO',foreignField: 'ACNO',as:'detail'} },
        {
            $lookup:
            {
                from: "folio_karvy",
                let: { folio: "$TD_ACNO", pan: "$PAN1" },
                pipeline: [
                    {
                        $match:
                        {
                            $expr:
                            {
                                $and:
                                    [
                                        { $eq: ["$ACNO", "$$folio"] },
                                        { $eq: ["$PANGNO", "$$pan"] }
                                    ]
                            }
                        }
                    },
                    { $project: { _id: 0 } }
                ],
                as: "detail"
            }
        },
        { $unwind: "$detail" },
        { $project: { _id: 1, PAN: "$detail.PANGNO", GPAN: "$detail.GUARDPANNO", INVNAME: "$INVNAME", CAPITALNAME: { "$toUpper": ["$INVNAME"] }, FOLIO: "$TD_ACNO", NAVDATE: { $dateToString: { format: "%d/%m/%Y", date: "$TD_TRDT" } }, ADD1: "$detail.ADD1", ADD2: "$detail.ADD2", ADD3: "$detail.ADD3", USER_ID: "$USER_ID" } },
    ]

    folioc.aggregate(pipeline1, (err, camsdata) => {
        // console.log("camsdata=",camsdata)
        transc.aggregate(pipeline3, (err, transcamsdata) => {
            // console.log("transcamsdata=",transcamsdata)
            foliok.aggregate(pipeline2, (err, karvydata) => {
                //      console.log("karvydata=",karvydata)       
                transk.aggregate(pipeline4, (err, transkarvydata) => {
                    //console.log("transkarvydata=",transkarvydata)
                    if (camsdata != 0 || transcamsdata != 0 || karvydata != 0 || transkarvydata != 0) {
                        resdata = {
                            status: 200,
                            message: 'Successful',
                            data: transkarvydata,
                        }
                        var datacon = transkarvydata.concat(karvydata.concat(transcamsdata.concat(camsdata)));

                        datacon = datacon.filter(
                            (temp => a =>
                                (k => !temp[k] && (temp[k] = true))(a.INVNAME + '|' + a.PAN + '|' + a.ADD1 + '|' + a.USER_ID)
                            )(Object.create(null))
                        );
                        //console.log(datacon)
                        resdata.data = datacon.sort((a, b) => (a.CAPITALNAME > b.CAPITALNAME) ? 1 : -1);
                        res.send(resdata);
                        return resdata;

                    } else {
                        resdata = {
                            status: 400,
                            message: 'Data not found !',
                        }
                        res.json(resdata);
                        return resdata;
                    }
                })
            })
        })
    })
})

app.post("/api/searchClientTranscams", function (req, res) {
    var str = "";
    var str1 = ""; var str2 = ""; var str3 = ""; var str4 = "";
    var arr1 = []; var arr2 = []; var arr3 = []; var arr4 = [];
    if (req.body.pan != "" && req.body.name === "") {
        str = { PAN: req.body.pan.toUpperCase() }//folio_cams
    } else if (req.body.pan === "" && req.body.name != "") {
        str = { NAME: { $regex: req.body.name, $options: 'i' } }
    }
    pipeline = [
        { $match: str },
        { $project: { _id: 0, NAME: "$NAME", PAN: "$PAN", ADD1: "$ADDRESS1", ADD2: "$ADDRESS2", ADD3: "$ADDRESS3", DOCNO: "$DOCNO" } }
    ]
    users.aggregate(pipeline, (err, user) => {
        if (user.length === 1) {
            console.log("user=", user)
            if (user[0].PAN != "") {
                pipeline1 = [
                    { $match: { INVNAME: { $regex: user[0].NAME, $options: 'i' }, PANGNO: user[0].PAN } },
                    { $project: { _id: 0, ACNO: "$ACNO", INVNAME: "$INVNAME", USER_ID: "$USER_ID" } }
                ]
                // foliok.aggregate(pipeline1, (err, member2) => {
                //     for (var j = 0; j < member2.length; j++) {
                //         transk.updateMany(
                //             { TD_ACNO: member2[j].ACNO },
                //             {
                //                 $set: {
                //                     INVNAME: user[0].NAME
                //                 }
                //             },
                //             {
                //                 "upsert": false
                //             },
                //             function (err, object) {
                //                 if (err) {
                //                     console.warn(err.message);  // returns error if no matching object found
                //                 }
                //             })
                //         foliok.updateMany(
                //             { ACNO: member2[j].ACNO },
                //             {
                //                 $set: {
                //                     INVNAME: user[0].NAME, ADD1: user[0].ADD1, ADD2: user[0].ADD2, ADD3: user[0].ADD3
                //                 }
                //             },
                //             {
                //                 "upsert": false
                //             },
                //             function (err, object) {
                //                 if (err) {
                //                     console.warn(err.message);// returns error if no matching object found
                //                 }
                //             })
                //     }
                // });
                folioc.find({ INV_NAME: { $regex: user[0].NAME, $options: 'i' }, PAN_NO: user[0].PAN }).distinct("FOLIOCHK", function (err, member1) {
                    console.log("member1", member1.length)
                    if (member1.length != 0) {
                        for (var k = 0; k < member1.length + 1; k++) {
                            transc.updateMany(
                                { FOLIO_NO: member1[k] },
                                {
                                    $set: {
                                        INV_NAME: user[0].NAME
                                    }
                                },
                                {
                                    "upsert": false
                                },
                                function (err, object) {
                                    if (err) {
                                        console.warn(err.message);  // returns error if no matching object found
                                    }
                                })
                            folioc.updateMany(
                                { FOLIOCHK: member1[k] },
                                {
                                    $set: {
                                        INV_NAME: user[0].NAME, ADDRESS1: user[0].ADD1, ADDRESS2: user[0].ADD2, ADDRESS3: user[0].ADD3
                                    }
                                },
                                {
                                    "upsert": false
                                },
                                function (err, object) {
                                    if (err) {
                                        console.warn(err.message);  // returns error if no matching object found
                                    } else {
                                        console.log("object=", object)
                                    }
                                })
                        }
                    } else {
                        folioc.find({ INV_NAME: { $regex: user[0].NAME, $options: 'i' }, GUARD_PAN: user[0].PAN }).distinct("FOLIOCHK", function (err, member2) {
                            console.log("member2=", member2)
                            for (var k = 0; k < member2.length + 1; k++) {
                                transc.updateMany(
                                    { FOLIO_NO: member2[k] },
                                    {
                                        $set: {
                                            INV_NAME: user[0].NAME
                                        }
                                    },
                                    {
                                        "upsert": false
                                    },
                                    function (err, object) {
                                        if (err) {
                                            console.warn(err.message);  // returns error if no matching object found
                                        } else {
                                            console.log("object transcams=", object)
                                        }
                                    })
                                folioc.updateMany(
                                    { FOLIOCHK: member2[k] },
                                    {
                                        $set: {
                                            INV_NAME: user[0].NAME, ADDRESS1: user[0].ADD1, ADDRESS2: user[0].ADD2, ADDRESS3: user[0].ADD3
                                        }
                                    },
                                    {
                                        "upsert": false
                                    },
                                    function (err, object) {
                                        if (err) {
                                            console.warn(err.message);  // returns error if no matching object found
                                        } else {
                                            console.log("object foliocams=", object)
                                        }
                                    })
                            }
                        });

                    }
                });
            }
        }
        // if (req.body.pan != "" && req.body.name != "") {
        //     str3 = { PAN: req.body.pan.toUpperCase(), INV_NAME: { $regex: req.body.name, $options: 'i' } }//trans_cams
        // } else if (req.body.name != "" && req.body.pan === "") {
        //     str3 = { INV_NAME: { $regex: req.body.name, $options: 'i' } }//trans_cams
        // } else {
        //     str3 = { PAN: req.body.pan.toUpperCase() }//trans_cams
        // }
        if (req.body.pan != "" && req.body.name != "") {
            str3 = { PAN_NO: req.body.pan.toUpperCase(), INV_NAME: { $regex: req.body.name, $options: 'i' } }//trans_cams
        } else if (req.body.name != "" && req.body.pan === "") {
            str3 = { INV_NAME: { $regex: req.body.name, $options: 'i' } }//trans_cams
        } else {
            str3 = { PAN_NO: req.body.pan.toUpperCase() }//trans_cams
        }
        console.log("str=", str3)
        pipeline3 = [  //trans_cams
            // { $match: str3 },
            // { $project: { _id: 1, FOLIO_NO: "$FOLIO_NO", INV_NAME: "$INV_NAME", TRADDATE: "$TRADDATE", USER_ID: "$USER_ID" } },
            // { $lookup: { from: 'folio_cams', localField: 'FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
            // { $unwind: "$detail" },
            // { $project: { _id: 1, PAN: "$detail.PAN_NO", GPAN: "$detail.GUARD_PAN", INVNAME: "$INV_NAME", CAPITALNAME: { "$toUpper": ["$INV_NAME"] }, FOLIO: "$FOLIO_NO", NAVDATE: { $dateToString: { format: "%d/%m/%Y", date: "$TRADDATE" } }, ADD1: "$detail.ADDRESS1", ADD2: "$detail.ADDRESS2", ADD3: "$detail.ADDRESS3", USER_ID: "$USER_ID" } },
            pipeline1 = [  //folio_cams
                { $match: str3 },
                { $project: { _id: 1, PAN: "$PAN_NO", GPAN: "$GUARD_PAN", INVNAME: "$INV_NAME", CAPITALNAME: { "$toUpper": ["$INV_NAME"] }, FOLIO: "$FOLIOCHK", NAVDATE: { $dateToString: { format: "%d/%m/%Y", date: "$FOLIO_DATE" } }, ADD1: "$ADDRESS1", ADD2: "$ADDRESS2", ADD3: "$ADDRESS3", USER_ID: "$USER_ID" } },
            ]
        ]

        folioc.aggregate(pipeline3, (err, transcamsdata) => {

            if (transcamsdata != 0) {
                resdata = {
                    status: 200,
                    message: 'Successful',
                    data: transcamsdata,
                }
                var datacon = transcamsdata;
                datacon = datacon.filter(
                    (temp => a =>
                        (k => !temp[k] && (temp[k] = true))(a.INVNAME + '|' + a.PAN + '|' + a.ADD1)
                    )(Object.create(null))
                );
                resdata.data = datacon.sort((a, b) => (a.CAPITALNAME > b.CAPITALNAME) ? 1 : -1);
                // console.log("transcamsdata=", resdata.data)
                res.send(resdata);
                // console.log(resdata)
                return resdata;

            } else {
                resdata = {
                    status: 400,
                    message: 'Data not found !',
                }
                res.json(resdata);
                return resdata;
            }
        })
    });
})

app.post("/api/searchClientMerge", function (req, res) {
    var str = "";
    var str1 = ""; var str2 = ""; var str3 = ""; var str4 = "";
    var arr1 = []; var arr2 = []; var arr3 = []; var arr4 = [];
    if (req.body.pan != "" && req.body.name === "") {
        str = { PAN: req.body.pan.toUpperCase() }//folio_cams
    } else if (req.body.pan === "" && req.body.name != "") {
        str = { NAME: { $regex: req.body.name, $options: 'i' } }
    }
    pipeline = [
        { $match: str },
        { $project: { _id: 0, NAME: "$NAME", PAN: "$PAN", ADD1: "$ADDRESS1", ADD2: "$ADDRESS2", ADD3: "$ADDRESS3", DOCNO: "$DOCNO" } }
    ]
    users.aggregate(pipeline, (err, user) => {
        if (user.length === 1) {
            //   for(var i=0;i<user.length;i++){
            if (user[0].PAN != "") {
                //  console.log("userrrrr=",user[0])
                pipeline1 = [
                    { $match: { INVNAME: { $regex: user[0].NAME, $options: 'i' }, PANGNO: user[0].PAN } },
                    { $project: { _id: 0, ACNO: "$ACNO", INVNAME: "$INVNAME", USER_ID: "$USER_ID" } }
                ]
                foliok.aggregate(pipeline1, (err, member2) => {
                    // foliok.find({ INVNAME: { $regex: user[i].NAME, $options: 'i' }, PANGNO: user[i].PAN }).distinct("ACNO", function (err, member2) {
                    //    console.log("if datacon=",member2)
                    for (var j = 0; j < member2.length; j++) {
                        //  console.log("hhh=",member2[j].ACNO)
                        transk.updateMany(
                            { TD_ACNO: member2[j].ACNO },
                            {
                                $set: {
                                    INVNAME: user[0].NAME
                                }
                            },
                            {
                                "upsert": false
                            },
                            function (err, object) {
                                if (err) {
                                    console.warn(err.message);  // returns error if no matching object found
                                }
                            })
                        foliok.updateMany(
                            { ACNO: member2[j].ACNO },
                            {
                                $set: {
                                    INVNAME: user[0].NAME, ADD1: user[0].ADD1, ADD2: user[0].ADD2, ADD3: user[0].ADD3
                                }
                            },
                            {
                                "upsert": false
                            },
                            function (err, object) {
                                if (err) {
                                    console.warn(err.message);  // returns error if no matching object found
                                }
                            })
                    }
                });
                folioc.find({ INV_NAME: { $regex: user[0].NAME, $options: 'i' }, PAN_NO: user[0].PAN }).distinct("FOLIOCHK", function (err, member1) {

                    //  console.log("else datacon=",member1)
                    for (var k = 0; k < member1.length + 1; k++) {
                        transc.updateMany(
                            { FOLIO_NO: member1[k] },
                            {
                                $set: {
                                    INV_NAME: user[0].NAME
                                }
                            },
                            {
                                "upsert": false
                            },
                            function (err, object) {
                                if (err) {
                                    console.warn(err.message);  // returns error if no matching object found
                                }
                            })
                        folioc.updateMany(
                            { FOLIOCHK: member1[k] },
                            {
                                $set: {
                                    INV_NAME: user[0].NAME, ADDRESS1: user[0].ADD1, ADDRESS2: user[0].ADD2, ADDRESS3: user[0].ADD3
                                }
                            },
                            {
                                "upsert": false
                            },
                            function (err, object) {
                                if (err) {
                                    console.warn(err.message);  // returns error if no matching object found
                                }
                            })
                    }

                });
            }
            //}
        }
        // else{
        //     console.log("hello")
        //     pipeline = [
        //         { $match: { NAME: { $regex: req.body.name, $options: 'i' } } },
        //         { $project: { _id: 0, NAME: "$NAME", PAN: "$PAN" , ADD1:"$ADDRESS1" , ADD2:"$ADDRESS2" ,ADD3:"$ADDRESS3"  } }
        //     ]
        //     users.aggregate(pipeline, (err, user) => {
        //         console.log("user=",user)
        //         return false;
        //         foliok.find({ INVNAME: { $regex: req.body.name, $options: 'i' }, GUARDPANNO: user[0].PAN }).distinct("ACNO", function (err, member2) {
        //             for (var j = 0; j < member2.length+1; j++) {
        //                 transk.updateMany(
        //                     { TD_ACNO: member2[j] },
        //                     {
        //                         $set: {
        //                             INVNAME: user[0].NAME
        //                         }
        //                     },
        //                     {
        //                         "upsert": false
        //                     },
        //                     function (err, object) {
        //                         if (err) {
        //                             console.warn(err.message);  // returns error if no matching object found
        //                         }
        //                     })
        //                     foliok.updateMany(
        //                         { ACNO: member2[j] },
        //                         {
        //                             $set: {
        //                                 INVNAME: user[0].NAME,ADD1: user[0].ADD1,ADD2: user[0].ADD2,ADD3: user[0].ADD3
        //                             }
        //                         },
        //                         {
        //                             "upsert": false
        //                         },
        //                         function (err, object) {
        //                             if (err) {
        //                                 console.warn(err.message);  // returns error if no matching object found
        //                             }
        //                         })
        //             }
        //         });
        //         folioc.find({  INV_NAME: { $regex: req.body.name, $options: 'i' }, GUARD_PAN: user[0].PAN }).distinct("FOLIOCHK", function (err, member1) {
        //             for (var k = 0; k < member1.length+1; k++) {
        //                 transc.updateMany(
        //                     { FOLIO_NO: member1[k] },
        //                     {
        //                         $set: {
        //                             INV_NAME: user[0].NAME
        //                         }
        //                     },
        //                     {
        //                         "upsert": false
        //                     },
        //                     function (err, object) {
        //                         if (err) {
        //                             console.warn(err.message);  // returns error if no matching object found
        //                         }
        //                     })
        //                     folioc.updateMany(
        //                         { FOLIOCHK: member1[k] },
        //                         {
        //                             $set: {
        //                                 INV_NAME: user[0].NAME,ADDRESS1: user[0].ADD1,ADDRESS2: user[0].ADD2,ADDRESS3: user[0].ADD3
        //                             }
        //                         },
        //                         {
        //                             "upsert": false
        //                         },
        //                         function (err, object) {
        //                             if (err) {
        //                                 console.warn(err.message);  // returns error if no matching object found
        //                             }
        //                         })
        //             }
        //         });
        //     });
        // }
        if (req.body.pan != "" && req.body.name != "") {
            str1 = { PAN_NO: req.body.pan.toUpperCase(), INV_NAME: { $regex: req.body.name, $options: 'i' } }//folio_cams
            str2 = { PANGNO: req.body.pan.toUpperCase(), INVNAME: { $regex: req.body.name, $options: 'i' } }//folio_karvy
            str3 = { PAN: req.body.pan.toUpperCase(), INV_NAME: { $regex: req.body.name, $options: 'i' } }//trans_cams
            str4 = {
                PAN1: req.body.pan.toUpperCase(), INVNAME: {
                    $regex: req.body.name,
                    $options: 'i'
                }
            }//trans_karvy
        } else if (req.body.name != "" && req.body.pan === "") {
            str1 = { INV_NAME: { $regex: req.body.name, $options: 'i' } }//folio_cams
            str2 = { INVNAME: { $regex: req.body.name, $options: 'i' } }//folio_karvy
            str3 = { INV_NAME: { $regex: req.body.name, $options: 'i' } }//trans_cams
            str4 = { INVNAME: { $regex: req.body.name, $options: 'i' } }//trans_karvy
        } else {
            str1 = { PAN_NO: req.body.pan.toUpperCase() }//folio_cams
            str2 = { PANGNO: req.body.pan.toUpperCase() }//folio_karvy
            str3 = { PAN: req.body.pan.toUpperCase() }//trans_cams
            str4 = { PAN1: req.body.pan.toUpperCase() }//trans_karvy
        }

        pipeline1 = [  //folio_cams
            { $match: str1 },
            { $project: { _id: 1, PAN: "$PAN_NO", GPAN: "$GUARD_PAN", INVNAME: "$INV_NAME", CAPITALNAME: { "$toUpper": ["$INV_NAME"] }, FOLIO: "$FOLIOCHK", NAVDATE: { $dateToString: { format: "%d/%m/%Y", date: "$FOLIO_DATE" } }, ADD1: "$ADDRESS1", ADD2: "$ADDRESS2", ADD3: "$ADDRESS3", USER_ID: "$USER_ID" } },
        ]

        pipeline2 = [  //folio_karvy
            { $match: str2 },
            { $project: { _id: 1, PAN: "$PANGNO", GPAN: "$GUARDPANNO", INVNAME: "$INVNAME", CAPITALNAME: { "$toUpper": ["$INVNAME"] }, FOLIO: "$ACNO", NAVDATE: { $dateToString: { format: "%d/%m/%Y", date: "$LASTUPDAT1" } }, ADD1: "$ADD1", ADD2: "$ADD2", ADD3: "$ADD3", USER_ID: "$USER_ID" } },
        ]
        pipeline3 = [  //trans_cams
            { $match: str3 },
            { $project: { _id: 1, FOLIO_NO: "$FOLIO_NO", INV_NAME: "$INV_NAME", PAN: "$PAN", TRADDATE: "$TRADDATE", USER_ID: "$USER_ID" } },
            // { $lookup: { from: 'folio_cams', localField: 'FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
            {
                $lookup:
                {
                    from: "folio_cams",
                    let: { folio: "$FOLIO_NO", pan: "$PAN" },
                    pipeline: [
                        {
                            $match:
                            {
                                $expr:
                                {
                                    $and:
                                        [
                                            { $eq: ["$FOLIOCHK", "$$folio"] },
                                            { $eq: ["$PAN_NO", "$$pan"] }
                                        ]
                                }
                            }
                        },
                        { $project: { _id: 0 } }
                    ],
                    as: "detail"
                }
            },
            { $unwind: "$detail" },
            { $project: { _id: 1, PAN: "$detail.PAN_NO", GPAN: "$detail.GUARD_PAN", INVNAME: "$INV_NAME", CAPITALNAME: { "$toUpper": ["$INV_NAME"] }, FOLIO: "$FOLIO_NO", NAVDATE: { $dateToString: { format: "%d/%m/%Y", date: "$TRADDATE" } }, ADD1: "$detail.ADDRESS1", ADD2: "$detail.ADDRESS2", ADD3: "$detail.ADDRESS3", USER_ID: "$USER_ID" } },
        ]

        pipeline4 = [  //trans_karvy
            { $match: str4 },
            { $project: { _id: 1, TD_ACNO: "$TD_ACNO", INVNAME: "$INVNAME", PAN1: "PAN1", TD_TRDT: "$TD_TRDT", USER_ID: "$USER_ID" } },
            // { $lookup: { from: 'folio_karvy', localField: 'TD_ACNO', foreignField: 'ACNO', as: 'detail' } },
            {
                $lookup:
                {
                    from: "folio_karvy",
                    let: { folio: "$TD_ACNO", pan: "$PAN1" },
                    pipeline: [
                        {
                            $match:
                            {
                                $expr:
                                {
                                    $and:
                                        [
                                            { $eq: ["$ACNO", "$$folio"] },
                                            { $eq: ["$PANGNO", "$$pan"] }
                                        ]
                                }
                            }
                        },
                        { $project: { _id: 0 } }
                    ],
                    as: "detail"
                }
            },
            { $unwind: "$detail" },
            { $project: { _id: 1, PAN: "$detail.PANGNO", GPAN: "$detail.GUARDPANNO", INVNAME: "$INVNAME", CAPITALNAME: { "$toUpper": ["$INVNAME"] }, FOLIO: "$TD_ACNO", NAVDATE: { $dateToString: { format: "%d/%m/%Y", date: "$TD_TRDT" } }, ADD1: "$detail.ADD1", ADD2: "$detail.ADD2", ADD3: "$detail.ADD3", USER_ID: "$USER_ID" } },
        ]

        folioc.aggregate(pipeline1, (err, camsdata) => {
            transc.aggregate(pipeline3, (err, transcamsdata) => {
                foliok.aggregate(pipeline2, (err, karvydata) => {
                    transk.aggregate(pipeline4, (err, transkarvydata) => {
                        if (camsdata != 0 || transcamsdata != 0 || karvydata != 0 || transkarvydata != 0) {
                            resdata = {
                                status: 200,
                                message: 'Successful',
                                data: transkarvydata,
                            }
                            var datacon = transkarvydata.concat(karvydata.concat(transcamsdata.concat(camsdata)));
                            datacon = datacon.filter(
                                (temp => a =>
                                    (k => !temp[k] && (temp[k] = true))(a.INVNAME + '|' + a.PAN + '|' + a.ADD1)
                                )(Object.create(null))
                            );
                            // console.log(datacon)
                            resdata.data = datacon.sort((a, b) => (a.CAPITALNAME > b.CAPITALNAME) ? 1 : -1);
                            res.send(resdata);
                            return resdata;

                        } else {
                            resdata = {
                                status: 400,
                                message: 'Data not found !',
                            }
                            res.json(resdata);
                            return resdata;
                        }
                    })
                })
            })
        })

    });
})

app.post("/api/getselecteddata", function (req, res) {
    var userid = req.body.id;
    var arr1 = [];
    for (var i = 0; i < userid.length; i++) {
        arr1.push({ _id: ObjectId(userid[i]) })
    }
    var str1 = { $or: arr1 }
    pipeline1 = [  //folio_karvy
        { $match: str1 },
        { $project: { _id: 1, DATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.LASTUPDAT1" } }, INVNAME: "$INVNAME", PAN: "$PANGNO", ADD1: "$ADD1", ADD2: "$ADD2", ADD3: "$ADD3", GUARDPAN: "$GUARDPANNO", RTA: "FOLIOKARVY", USER_ID: "$USER_ID" } }
    ]
    pipeline2 = [  //folio_cams
        { $match: str1 },
        { $project: { _id: 1, DATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.FOLIO_DATE" } }, INVNAME: "$INV_NAME", PAN: "$PAN_NO", ADD1: "$ADDRESS1", ADD2: "$ADDRESS2", ADD3: "$ADDRESS3", GUARDPAN: "$GUARD_PAN", RTA: "FOLIOCAMS", USER_ID: "$USER_ID" } }
    ]
    pipeline3 = [  //trans_cams
        { $match: str1 },
        { $project: { _id: 1, FOLIO_NO: "$FOLIO_NO", INV_NAME: "$INV_NAME", TRADDATE: "$TRADDATE", USER_ID: "$USER_ID" } },
        { $lookup: { from: 'folio_cams', localField: 'FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
        { $unwind: "$detail" },
        { $project: { _id: 1, PAN: "$detail.PAN_NO", GUARDPAN: "$detail.GUARD_PAN", INVNAME: "$INV_NAME", FOLIO: "$FOLIO_NO", DATE: { $dateToString: { format: "%d/%m/%Y", date: "$TRADDATE" } }, ADD1: "$detail.ADDRESS1", ADD2: "$detail.ADDRESS2", ADD3: "$detail.ADDRESS3", RTA: "TRANSCAMS", USER_ID: "$USER_ID" } },
        { $sort: { INVNAME: 1 } }
    ]

    pipeline4 = [  //trans_karvy
        { $match: str1 },
        { $project: { _id: 1, TD_ACNO: "$TD_ACNO", INVNAME: "$INVNAME", TD_TRDT: "$TD_TRDT", USER_ID: "$USER_ID" } },
        { $lookup: { from: 'folio_karvy', localField: 'TD_ACNO', foreignField: 'ACNO', as: 'detail' } },
        { $unwind: "$detail" },
        { $project: { _id: 1, PAN: "$detail.PANGNO", GUARDPAN: "$detail.GUARDPANNO", INVNAME: "$INVNAME", FOLIO: "$TD_ACNO", DATE: { $dateToString: { format: "%d/%m/%Y", date: "$TD_TRDT" } }, ADD1: "$detail.ADD1", ADD2: "$detail.ADD2", ADD3: "$detail.ADD3", RTA: "TRANSKARVY", USER_ID: "$USER_ID" } },
        { $sort: { INVNAME: 1 } }
    ]
    foliok.aggregate(pipeline1, (err, karvydata) => {
        folioc.aggregate(pipeline2, (err, camsdata) => {
            transc.aggregate(pipeline3, (err, transcams) => {
                transk.aggregate(pipeline4, (err, transkarvy) => {
                    if (transkarvy != 0 || transcams != 0 || camsdata != 0 || karvydata != 0) {
                        var datacon = transkarvy.concat(transcams.concat(camsdata.concat(karvydata)));
                        datacon = datacon.filter(
                            (temp => a =>
                                (k => !temp[k] && (temp[k] = true))(a.INVNAME + '|' + a.PAN + '|' + a.ADD1 + '|' + a.USER_ID)
                            )(Object.create(null))
                        );

                        resdata.data = datacon.sort((a, b) => (a.INVNAME > b.INVNAME) ? 1 : -1);
                        res.send(datacon);
                    } else {
                        resdata = {
                            status: 400,
                            message: 'Data not found !',
                        }
                        res.json(resdata);
                    }
                });
            });
        });
    });
})

app.post("/api/updatepersonaldetail", function (req, res) {
    var pan = ""; var name = ""; var gpan = ""; var add1 = ""; var add2 = ""; var add3 = "";
    // console.log("id=",req.body.id.length)
    // console.log("id=",req.body.id)
    for (var i = 0; i < req.body.id.length; i++) {
        pan = req.body.id[i].split('_')[0];
        name = req.body.id[i].split('_')[1];
        gpan = req.body.id[i].split('_')[2];
        userid = req.body.id[i].split('_')[3];
        add1 = req.body.id[i].split('_')[4];
        add2 = req.body.id[i].split('_')[5];
        add3 = req.body.id[i].split('_')[6];
        //    console.log(pan,)
        //return false;
        if (gpan === "") {
            folioc.find({ INV_NAME: name, PAN_NO: pan }).distinct("FOLIOCHK", function (err, member1) {
                for (var j = 0; j < member1.length; j++) {
                    transc.updateMany(
                        { FOLIO_NO: member1[j] },
                        {
                            $set: {
                                INV_NAME: req.body.updatename, PAN: req.body.updatepan, USER_ID: req.body.updateuserid
                            }
                        },
                        {
                            "upsert": false
                        },
                        function (err, object) {
                            if (err) {
                                console.warn(err.message);  // returns error if no matching object found
                            }
                        })

                }
            });
            folioc.updateMany(
                { INV_NAME: name, PAN_NO: pan },
                {
                    $set: {
                        INV_NAME: req.body.updatename, PAN_NO: req.body.updatepan, ADDRESS1: req.body.updateadd1, ADDRESS2: req.body.updateadd2, ADDRESS3: req.body.updateadd3, USER_ID: req.body.updateuserid
                    }
                },
                {
                    "upsert": false
                },
                function (err, object) {
                    if (err) {
                        console.warn(err.message);  // returns error if no matching object found
                    }
                })
            foliok.find({ INVNAME: name, PANGNO: pan }).distinct("ACNO", function (err, member2) {
                for (var j = 0; j < member2.length; j++) {
                    transk.updateMany(
                        { TD_ACNO: member2[j] },
                        {
                            $set: {
                                INVNAME: req.body.updatename, PAN1: req.body.updatepan, USER_ID: req.body.updateuserid
                            }
                        },
                        {
                            "upsert": false
                        },
                        function (err, object) {
                            if (err) {
                                console.warn(err.message);  // returns error if no matching object found
                            }
                        })

                }
            });
            foliok.updateMany(
                { INVNAME: name, PANGNO: pan },
                {
                    $set: {
                        INVNAME: req.body.updatename, PANGNO: req.body.updatepan, ADD1: req.body.updateadd1, ADD2: req.body.updateadd2, ADD3: req.body.updateadd3, USER_ID: req.body.updateuserid
                    }
                },
                {
                    "upsert": false
                },
                function (err, object) {
                    if (err) {
                        console.warn(err.message);  // returns error if no matching object found
                    }
                })

        } else {
            folioc.find({ INV_NAME: name, GUARD_PAN: gpan }).distinct("FOLIOCHK", function (err, member1) {
                for (var j = 0; j < member1.length; j++) {
                    transc.updateMany(
                        { FOLIO_NO: member1[j] },
                        {
                            $set: {
                                INV_NAME: req.body.updatename, PAN: req.body.updatepan, USER_ID: req.body.updateuserid
                            }
                        },
                        {
                            "upsert": false
                        },
                        function (err, object) {
                            if (err) {
                                console.warn(err.message);  // returns error if no matching object found
                            }
                        })
                }
            });
            folioc.updateMany(
                { GUARD_PAN: gpan, INV_NAME: name },
                {
                    $set: {
                        // INV_NAME: req.body.updatename,PAN_NO:req.body.updatepan
                        INV_NAME: req.body.updatename, PAN_NO: req.body.updatepan, ADDRESS1: req.body.updateadd1, ADDRESS2: req.body.updateadd2, ADDRESS3: req.body.updateadd3, USER_ID: req.body.updateuserid
                    }
                },
                {
                    "upsert": false
                },
                function (err, object) {
                    if (err) {
                        console.warn(err.message);  // returns error if no matching object found
                    }
                })
            foliok.find({ INVNAME: name, GUARDPANNO: gpan }).distinct("ACNO", function (err, member2) {
                for (var j = 0; j < member2.length; j++) {
                    transk.updateMany(
                        { TD_ACNO: member2[j] },
                        {
                            $set: {
                                INVNAME: req.body.updatename, PANGNO: req.body.updatepan, USER_ID: req.body.updateuserid
                            }
                        },
                        {
                            "upsert": false
                        },
                        function (err, object) {
                            if (err) {
                                console.warn(err.message);  // returns error if no matching object found
                            }
                        })
                }
            });
            foliok.updateMany(
                { GUARDPANNO: gpan, INVNAME: name },
                {
                    $set: {
                        //INVNAME:req.body.updatename,PANGNO:req.body.updatepan
                        INVNAME: req.body.updatename, PANGNO: req.body.updatepan, ADD1: req.body.updateadd1, ADD2: req.body.updateadd2, ADD3: req.body.updateadd3, USER_ID: req.body.updateuserid
                    }
                },
                {
                    "upsert": false
                },
                function (err, object) {
                    if (err) {
                        console.warn(err.message);  // returns error if no matching object found
                    }
                })
        }
    }
    // var msg = "Updated Successfully";
    // res.send(msg);

    pipeline1 = [  //folio_cams
        { $match: { PAN_NO: req.body.updatepan, INV_NAME: req.body.updatename } },
        { $project: { _id: 1, PAN: "$PAN_NO", GPAN: "$GUARD_PAN", INVNAME: "$INV_NAME", FOLIO: "$FOLIOCHK", NAVDATE: { $dateToString: { format: "%d/%m/%Y", date: "$FOLIO_DATE" } }, ADD1: "$ADDRESS1", ADD2: "$ADDRESS2", ADD3: "$ADDRESS3" } },
        { $sort: { INVNAME: 1 } }
    ]

    pipeline2 = [  //folio_karvy
        { $match: { PANGNO: req.body.updatepan, INVNAME: req.body.updatename } },
        { $project: { _id: 1, PAN: "$PANGNO", GPAN: "$GUARDPANNO", INVNAME: "$INVNAME", FOLIO: "$ACNO", NAVDATE: { $dateToString: { format: "%d/%m/%Y", date: "$LASTUPDAT1" } }, ADD1: "$ADD1", ADD2: "$ADD2", ADD3: "$ADD3" } },
        { $sort: { INVNAME: 1 } }
    ]
    pipeline3 = [  //trans_cams
        { $match: { PAN: req.body.updatepan, INV_NAME: req.body.updatename } },
        { $project: { _id: 1, FOLIO_NO: "$FOLIO_NO", INV_NAME: "$INV_NAME", TRADDATE: "$TRADDATE" } },
        { $lookup: { from: 'folio_cams', localField: 'FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
        { $unwind: "$detail" },
        { $project: { _id: 1, PAN: "$detail.PAN_NO", GPAN: "$detail.GUARD_PAN", INVNAME: "$INV_NAME", FOLIO: "$FOLIO_NO", NAVDATE: { $dateToString: { format: "%d/%m/%Y", date: "$TRADDATE" } }, ADD1: "$detail.ADDRESS1", ADD2: "$detail.ADDRESS2", ADD3: "$detail.ADDRESS3" } },
        { $sort: { INVNAME: 1 } }
    ]

    pipeline4 = [  //trans_karvy
        { $match: { PAN1: req.body.updatepan, INVNAME: req.body.updatename } },
        { $project: { _id: 1, TD_ACNO: "$TD_ACNO", INVNAME: "$INVNAME", TD_TRDT: "$TD_TRDT" } },
        { $lookup: { from: 'folio_karvy', localField: 'TD_ACNO', foreignField: 'ACNO', as: 'detail' } },
        { $unwind: "$detail" },
        { $project: { _id: 1, PAN: "$detail.PANGNO", GPAN: "$detail.GUARDPANNO", INVNAME: "$INVNAME", FOLIO: "$TD_ACNO", NAVDATE: { $dateToString: { format: "%d/%m/%Y", date: "$TD_TRDT" } }, ADD1: "$detail.ADD1", ADD2: "$detail.ADD2", ADD3: "$detail.ADD3" } },
        { $sort: { INVNAME: 1 } }
    ]
    foliok.aggregate(pipeline2, (err, karvydata) => {
        folioc.aggregate(pipeline1, (err, camsdata) => {
            transc.aggregate(pipeline3, (err, transcamsdata) => {
                transk.aggregate(pipeline4, (err, transkarvydata) => {
                    if (karvydata != 0 || camsdata != 0 || transcamsdata != 0 || transkarvydata != 0) {
                        resdata = {
                            status: 200,
                            message: 'Successful',
                            data: transkarvydata,
                        }
                        var datacon = transkarvydata.concat(transcamsdata.concat(camsdata.concat(karvydata)));
                        datacon = datacon.filter(
                            (temp => a =>
                                (k => !temp[k] && (temp[k] = true))(a.INVNAME + '|' + a.PAN + '|' + a.ADD1)
                            )(Object.create(null))
                        );

                        resdata.data = datacon.sort((a, b) => (a.INVNAME > b.INVNAME) ? 1 : -1);
                        res.json(resdata);
                        return resdata;

                    } else {
                        resdata = {
                            status: 400,
                            message: 'Data not found !',
                        }
                        res.json(resdata);
                        return resdata;
                    }
                });
            });
        });
    });
})

//End Client Mapping  ********

app.get("/api/gettest", function (req, res) {
    var model = mongoose.model('test', camsna1, 'test');
    model.find({}, function (err, camsdata) {
        if (err) {
            res.send(err);
        }
        else {
            //  console.log("data=" + camsdata);
            res.send(camsdata);
        }
    });
})

app.post("/api/userProfileMemberList", function (req, res) {
    try {
        var arr1 = []; var arr2 = []; var arr3 = [];
        let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        if (req.body.pan === "") {
            resdata = {
                status: 400,
                message: 'Please enter pan',
            }
            res.json(resdata);
            return resdata;
        } else if (!regex.test(req.body.pan)) {
            resdata = {
                status: 400,
                message: 'Please enter valid pan',
            }
            res.json(resdata);
            return resdata;
        } else {
            family.find({ adminPan: { $regex: req.body.pan, $options: 'i' } }, { _id: 0, memberPan: 1 }, function (err, member) {
                if (member != "") {
                    member = [...new Set(member.map(({ memberPan }) => memberPan.toUpperCase()))];
                    arr1.push({ GUARD_PAN: { $regex: req.body.pan.toUpperCase(), $options: 'i' } });
                    arr2.push({ GUARDPANNO: { $regex: req.body.pan.toUpperCase(), $options: 'i' } });
                    arr1.push({ PAN_NO: { $regex: req.body.pan.toUpperCase(), $options: 'i' } });
                    arr2.push({ PANGNO: { $regex: req.body.pan.toUpperCase(), $options: 'i' } });
                    for (var j = 0; j < member.length; j++) {
                        arr1.push({ PAN_NO: member[j] });
                        arr2.push({ PANGNO: member[j] });
                    }
                    var strPan = { $or: arr1 };
                    var strPan1 = { $or: arr2 };
                    pipeline = [  //folio_cams
                        { $match: strPan },
                        { $project: { _id: 0, PAN: { "$toUpper": ["$PAN_NO"] }, INVNAME: { "$toUpper": ["$INV_NAME"] }, PER_STATUS: { "$toUpper": ["$TAX_STATUS"] }, JOINT_NAME1: { "$toUpper": ["$JNT_NAME1"] }, JOINT_NAME2: { "$toUpper": ["$JNT_NAME2"] }, GUARD_PAN: "$GUARD_PAN" } },
                    ]

                    pipeline1 = [  //folio_karvy
                        { $match: strPan1 },
                        { $project: { _id: 0, PAN: { "$toUpper": ["$PANGNO"] }, INVNAME: { "$toUpper": ["$INVNAME"] }, PER_STATUS: { "$toUpper": ["$STATUS"] }, JOINT_NAME1: { "$toUpper": ["$JTNAME1"] }, JOINT_NAME2: { "$toUpper": ["$JTNAME2"] }, GUARD_PAN: "$GUARDPANNO" } },

                    ]
                    folioc.aggregate(pipeline, (err, camsdata) => {
                        foliok.aggregate(pipeline1, (err, karvydata) => {
                            if (camsdata != 0 || karvydata != 0) {
                                resdata = {
                                    status: 200,
                                    message: 'Successfull',
                                    data: camsdata
                                }

                                var datacon = karvydata.concat(camsdata);
                                for (var i = 0; i < datacon.length; i++) {
                                    if (datacon[i]['PER_STATUS'] === "2" || datacon[i]['PER_STATUS'] === "M" || datacon[i]['PER_STATUS'] === "On Behalf Of Minor" || datacon[i]['PER_STATUS'] === "MINOR" || datacon[i]['PER_STATUS'] === "On Behalf of Minor"
                                        || datacon[i]['PER_STATUS'] === "ON BEHALF OF MINOR") {
                                        datacon[i]['PER_STATUS'] = "MINOR";
                                    } if (datacon[i]['PER_STATUS'] === "01" || datacon[i]['PER_STATUS'] === "1" || datacon[i]['PER_STATUS'] === "I" || datacon[i]['PER_STATUS'] === "I" || datacon[i]['PER_STATUS'] === "INDIVIDUAL" || datacon[i]['PER_STATUS'] === "Individual" || datacon[i]['PER_STATUS'] === "Resident Individual" || datacon[i]['PER_STATUS'] === "RESIDENT INDIVIDUAL") {
                                        datacon[i]['PER_STATUS'] = "INDIVIDUAL";
                                    } if (datacon[i]['PER_STATUS'] === "HINDU UNDIVIDED FAMILY" || datacon[i]['PER_STATUS'] === "3" || datacon[i]['PER_STATUS'] === "H" || datacon[i]['PER_STATUS'] === "HINDU UNDIVIDED FAMI") {
                                        datacon[i]['PER_STATUS'] = "HUF";
                                    }
                                    if (datacon[i]['PER_STATUS'] === "MINOR") {
                                        datacon[i]['PAN'] = datacon[i]['GUARD_PAN'];
                                    }
                                }

                                datacon = datacon.filter(
                                    (temp => a =>
                                        (k => !temp[k] && (temp[k] = true))(a.INVNAME + '|' + a.PER_STATUS)
                                    )(Object.create(null))
                                );
                                datacon = datacon.sort((a, b) => (a.INVNAME > b.INVNAME) ? 1 : -1);
                                resdata.data = datacon;
                                res.json(resdata);
                                return resdata;
                            } else {
                                resdata = {
                                    status: 400,
                                    message: 'Data not found',
                                }
                                res.json(resdata);
                                return resdata;
                            }
                        });
                    });
                } else {
                    pipeline = [  //folio_cams
                        { $match: { PAN_NO: { $regex: req.body.pan, $options: 'i' } } },
                        { $project: { _id: 0, PAN: { "$toUpper": ["$PAN_NO"] }, INVNAME: { "$toUpper": ["$INV_NAME"] }, PER_STATUS: { "$toUpper": ["$TAX_STATUS"] }, JOINT_NAME1: { "$toUpper": ["$JNT_NAME1"] }, JOINT_NAME2: { "$toUpper": ["$JNT_NAME2"] }, GUARD_PAN: "$GUARD_PAN" } },
                    ]
                    pipeline1 = [  //folio_karvy
                        { $match: { PANGNO: { $regex: req.body.pan, $options: 'i' } } },
                        { $project: { _id: 0, PAN: { "$toUpper": ["$PANGNO"] }, INVNAME: { "$toUpper": ["$INVNAME"] }, PER_STATUS: { "$toUpper": ["$STATUS"] }, JOINT_NAME1: { "$toUpper": ["$JTNAME1"] }, JOINT_NAME2: { "$toUpper": ["$JTNAME2"] }, GUARD_PAN: "$GUARDPANNO" } },

                    ]

                    folioc.aggregate(pipeline, (err, camsdata) => {
                        foliok.aggregate(pipeline1, (err, karvydata) => {
                            if (camsdata != 0 || karvydata != 0) {
                                resdata = {
                                    status: 200,
                                    message: 'Successfull',
                                    data: camsdata
                                }

                                var datacon = karvydata.concat(camsdata);
                                for (var i = 0; i < datacon.length; i++) {
                                    if (datacon[i]['PER_STATUS'] === "2" || datacon[i]['PER_STATUS'] === "M" || datacon[i]['PER_STATUS'] === "On Behalf Of Minor" || datacon[i]['PER_STATUS'] === "MINOR" || datacon[i]['PER_STATUS'] === "On Behalf of Minor"
                                        || datacon[i]['PER_STATUS'] === "ON BEHALF OF MINOR") {
                                        datacon[i]['PER_STATUS'] = "MINOR";
                                    } if (datacon[i]['PER_STATUS'] === "01" || datacon[i]['PER_STATUS'] === "1" || datacon[i]['PER_STATUS'] === "I" || datacon[i]['PER_STATUS'] === "I" || datacon[i]['PER_STATUS'] === "INDIVIDUAL" || datacon[i]['PER_STATUS'] === "Individual" || datacon[i]['PER_STATUS'] === "Resident Individual" || datacon[i]['PER_STATUS'] === "RESIDENT INDIVIDUAL") {
                                        datacon[i]['PER_STATUS'] = "INDIVIDUAL";
                                    } if (datacon[i]['PER_STATUS'] === "HINDU UNDIVIDED FAMILY" || datacon[i]['PER_STATUS'] === "3" || datacon[i]['PER_STATUS'] === "H" || datacon[i]['PER_STATUS'] === "HINDU UNDIVIDED FAMI") {
                                        datacon[i]['PER_STATUS'] = "HUF";
                                    }
                                    if (datacon[i]['PER_STATUS'] === "MINOR") {
                                        datacon[i]['PAN'] = datacon[i]['GUARD_PAN'];
                                    }
                                }

                                datacon = datacon.filter(
                                    (temp => a =>
                                        (k => !temp[k] && (temp[k] = true))(a.INVNAME + '|' + a.PER_STATUS)
                                    )(Object.create(null))
                                );

                                resdata.data = datacon;
                                res.json(resdata);
                                return resdata;
                            } else {
                                resdata = {
                                    status: 400,
                                    message: 'Data not found',
                                }
                                res.json(resdata);
                                return resdata;
                            }
                        });
                    });
                }
            });
        }
    } catch (err) {
        console.log(err)
    }
})

app.get("/api/getalldata", function (req, res) {

    // const pipeline = [  ///trans_cams
    //     { $group: { _id: { TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
    //     { $project: { _id: 0, TRXN_NATUR: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } } } },
    //    // { $sort: { TRADDATE: -1 } }
    // ]
    // const pipeline1 = [  ///trans_karvy
    //     { $group: { _id: { TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", FUNDDESC: "$FUNDDESC", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
    //     { $project: { _id: 0, TRXN_NATUR: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", SCHEME: "$_id.FUNDDESC", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } } } },
    //    // { $sort: { TRADDATE: -1 } }
    // ]
    pipeline2 = [  ///trans_franklin
        { $group: { _id: { TRXN_TYPE: "$TRXN_TYPE", FOLIO_NO: "$FOLIO_NO", SCHEME_NA1: "$SCHEME_NA1", AMOUNT: "$AMOUNT", TRXN_DATE: "$TRXN_DATE" } } },
        { $project: { _id: 0, NATURE: "$_id.TRXN_TYPE", FOLIO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME_NA1", AMOUNT: "$_id.AMOUNT", DATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRXN_DATE" } } } },
        // { $sort: { TRADDATE: -1 } }
    ]

    // transc.aggregate(pipeline, (err, camsdata) => {
    // transk.aggregate(pipeline1, (err, karvydata) => {
    transf.aggregate(pipeline2, (err, frankdata) => {
        //  if (frankdata.length != 0 || karvydata.length != 0 || camsdata.length != 0) {
        if (frankdata != 0) {
            resdata = {
                status: 200,
                message: 'Successfull',
                data: frankdata
            }
        } else {
            resdata = {
                status: 400,
                message: 'Data not found',
            }
        }
        //var datacon = frankdata.concat(karvydata.concat(camsdata))
        // datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
        //     .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
        //     .reverse().map(JSON.parse);
        resdata.data = frankdata;
        // resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime())
        res.json(resdata)
    });
    //     });
    // });

})

app.post("/api/getsipstpuserwise", function (req, res) {
    try {
        var mon = parseInt(req.body.month);
        var yer = parseInt(req.body.year);
        var pan = req.body.pan;

        if (req.body.name != "" && req.body.pan === "" || req.body.pan === "Please Provide" || req.body.pan === "Not An Assessee") {
            const pipeline = [  ///trans_cams
                { $project: { _id: 0, INVNAME: "$INV_NAME", PAN: "$PAN", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", AMOUNT: "$AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$TRADDATE" } }, month: { $month: ('$TRADDATE') }, year: { $year: ('$TRADDATE') } } },
                { $match: { $and: [{ month: mon }, { year: yer }, { INVNAME: { $regex: `^${req.body.name}.*`, $options: 'i' } }, { TRXN_NATUR: /Systematic/ }] } },
                { $sort: { TRADDATE: -1 } }
            ]
            const pipeline1 = [  ///trans_karvy
                { $project: { _id: 0, TD_TRNO: "$TD_TRNO", INVNAME: "$INVNAME", PAN: "$PAN1", TRXN_NATUR: "$TRDESC", FOLIO_NO: "$TD_ACNO", SCHEME: "$FUNDDESC", AMOUNT: "$TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$TD_TRDT" } }, month: { $month: ('$TD_TRDT') }, year: { $year: ('$TD_TRDT') } } },
                { $match: { $and: [{ month: mon }, { year: yer }, { INVNAME: { $regex: `^${req.body.name}.*`, $options: 'i' } }, { TRXN_NATUR: /Systematic/ }] } },
                { $sort: { TRADDATE: -1 } }
            ]


            transc.aggregate(pipeline, (err, camsdata) => {
                transk.aggregate(pipeline1, (err, karvydata) => {
                    if (karvydata.length != 0 || camsdata.length != 0) {
                        resdata = {
                            status: 200,
                            message: 'Successfull',
                            data: frankdata
                        }
                        datacon = karvydata.concat(camsdata)
                        datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                            .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                            .reverse().map(JSON.parse);
                        for (var i = 0; i < datacon.length; i++) {

                            if ((Math.sign(datacon[i]['AMOUNT']) === -1)) {
                                datacon[i]['TRXN_NATUR'] = "SIPR";
                            }
                            if (datacon[i]['TRXN_NATUR'].match(/Systematic - From.*/)) {
                                datacon[i]['TRXN_NATUR'] = "STP";
                            }
                            if (datacon[i]['TRXN_NATUR'].match(/Systematic.*/)) {
                                datacon[i]['TRXN_NATUR'] = "SIP";
                            }
                        }
                        resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime())
                        res.json(resdata);
                        return resdata;
                    } else {
                        resdata = {
                            status: 400,
                            message: 'Data not found',
                        }
                        res.json(resdata);
                        return resdata;
                    }
                });
            });
        } else if (req.body.pan != "" && req.body.name != "") {
            const pipeline = [  ///trans_cams
                { $project: { _id: 0, INVNAME: "$INV_NAME", PAN: "$PAN", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", AMOUNT: "$AMOUNT", TAX_STATUS: "$TAX_STATUS", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$TRADDATE" } }, month: { $month: ('$TRADDATE') }, year: { $year: ('$TRADDATE') } } },
                { $match: { $and: [{ month: mon }, { year: yer }, { PAN: pan }, { INVNAME: { $regex: `^${req.body.name}.*`, $options: 'i' } }, { TRXN_NATUR: /Systematic/ }] } },
                { $sort: { mon: 1, yer: 1 } }
            ]
            const pipeline1 = [  ///trans_karvy
                { $project: { _id: 0, TD_TRNO: "$TD_TRNO", INVNAME: "$INVNAME", PAN: "$PAN1", TRXN_NATUR: "$TRDESC", FOLIO_NO: "$TD_ACNO", SCHEME: "$FUNDDESC", STATUS: "$STATUS", AMOUNT: "$TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$TD_TRDT" } }, month: { $month: ('$TD_TRDT') }, year: { $year: ('$TD_TRDT') } } },
                { $match: { $and: [{ month: mon }, { year: yer }, { PAN: pan }, { INVNAME: { $regex: `^${req.body.name}.*`, $options: 'i' } }, { TRXN_NATUR: /Systematic/ }] } },
                { $sort: { mon: 1, yer: 1 } }
            ]

            transc.aggregate(pipeline, (err, camsdata) => {
                transk.aggregate(pipeline1, (err, karvydata) => {
                    if (karvydata.length != 0 || camsdata.length != 0) {
                        resdata = {
                            status: 200,
                            message: 'Successfull',
                            data: frankdata
                        }
                        datacon = karvydata.concat(camsdata)
                        datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                            .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                            .reverse().map(JSON.parse);
                        for (var i = 0; i < datacon.length; i++) {

                            if ((Math.sign(datacon[i]['AMOUNT']) === -1)) {
                                datacon[i]['TRXN_NATUR'] = "SIPR";
                            }
                            if (datacon[i]['TRXN_NATUR'].match(/Systematic - From/)) {
                                datacon[i]['TRXN_NATUR'] = "STP";
                            } if (datacon[i]['TRXN_NATUR'].match(/Systematic/)) {
                                datacon[i]['TRXN_NATUR'] = "SIP";
                            }
                        }
                        resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime())
                        res.json(resdata)
                        return resdata
                    } else {
                        resdata = {
                            status: 400,
                            message: 'Data not found',
                        }
                        res.json(resdata)
                        return resdata
                    }
                });
            });
        } else {
            resdata = {
                status: 400,
                message: 'Data not found',
            }
            res.json(resdata)
            return resdata
        }
    } catch (err) {
        console.log(err)
    }
})

app.post("/api/getsipstpuserwiseapiold", function (req, res) {
    try {
        var member = "";
        var guardpan1 = []; var guardpan2 = [];
        var arr1 = []; var arr2 = []; var arr3 = []; var alldata = []; var arrFolio = []; var arrName = [];
        let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        if (req.body.month === "") {
            resdata = {
                status: 400,
                message: 'Please enter month',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.year === "") {
            resdata = {
                status: 400,
                message: 'Please enter year',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.pan === "") {
            resdata = {
                status: 400,
                message: 'Please enter pan',
            }
            res.json(resdata);
            return resdata;
        } else if (!regex.test(req.body.pan)) {
            resdata = {
                status: 400,
                message: 'Please enter valid pan',
            }
            res.json(resdata);
            return resdata;
        } else {
            var lastdate = new Date(req.body.year, req.body.month, 0).getDate();
            var firstdate = req.body.year + "-" + req.body.month + "-" + "01";
            var seconddate = req.body.year + "-" + req.body.month + "-" + lastdate;

            family.find({ adminPan: { $regex: `^${req.body.pan}.*`, $options: 'i' } }, { _id: 0, memberPan: 1 }, function (err, member) {
                if (member != "") {
                    member = [...new Set(member.map(({ memberPan }) => memberPan.toUpperCase()))];
                    guardpan1.push({ GUARD_PAN: req.body.pan.toUpperCase() });
                    guardpan2.push({ GUARDPANNO: req.body.pan.toUpperCase() });
                    arr1.push({ PAN: req.body.pan.toUpperCase() });
                    arr2.push({ PAN1: req.body.pan.toUpperCase() });
                    for (var j = 0; j < member.length; j++) {
                        guardpan1.push({ GUARD_PAN: member[j] });
                        guardpan2.push({ GUARDPANNO: member[j] });
                        arr1.push({ PAN: member[j] });
                        arr2.push({ PAN1: member[j] });
                    }
                    var strPan1 = { $or: guardpan1 };
                    var strPan2 = { $or: guardpan2 };
                    folioc.find(strPan1).distinct("FOLIOCHK", function (err, member1) {
                        foliok.find(strPan2).distinct("ACNO", function (err, member2) {
                            var alldata = member1.concat(member2);
                            for (var j = 0; j < alldata.length; j++) {
                                arr1.push({ FOLIO_NO: alldata[j] });
                                arr2.push({ TD_ACNO: alldata[j] });
                            }
                            var strFolio = { $or: arr1 };
                            var strFolio1 = { $or: arr2 };
                            pipeline = [  ///trans_cams
                                { $match: { $and: [{ TRADDATE: { $gte: new Date(moment(firstdate).format("YYYY-MM-DD")), $lt: new Date(moment(seconddate).format("YYYY-MM-DD")) } }, strFolio, { TRXN_NATUR: /Systematic/ }] } },

                                { $group: { _id: { TAX_STATUS: "$TAX_STATUS", TRXNNO: "$TRXNNO", INV_NAME: "$INV_NAME", PAN: "$PAN", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },

                                { $lookup: { from: 'folio_cams', localField: '_id.FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
                                //{ $unwind: "$detail" },
                                { $project: { _id: 0, GUARD_NAME: "$detail.GUARD_NAME", GUARD_PAN: "$detail.GUARD_PAN", PER_STATUS: "$_id.TAX_STATUS", TRXNNO: "$_id.TRXNNO", INVNAME: "$_id.INV_NAME", PAN: "$_id.PAN", TRXN_NATUR: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } } } },

                                { $sort: { TRADDATE: -1 } }
                            ]
                            pipeline1 = [  ///trans_karvy
                                { $match: { $and: [strFolio1, { TD_TRDT: { $gte: new Date(moment(firstdate).format("YYYY-MM-DD")), $lt: new Date(moment(seconddate).format("YYYY-MM-DD")) } }, { TRDESC: /Systematic/ }] } },

                                { $group: { _id: { STATUS: "$STATUS", TD_TRNO: "$TD_TRNO", INVNAME: "$INVNAME", PAN1: "$PAN1", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", FUNDDESC: "$FUNDDESC", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },

                                { $lookup: { from: 'folio_karvy', localField: '_id.TD_ACNO', foreignField: 'ACNO', as: 'detail' } },
                                //{ $unwind: "$detail" },
                                { $project: { _id: 0, GUARD_NAME: "$detail.GUARDIANN0", GUARD_PAN: "$detail.GUARDPANNO", PER_STATUS: "$_id.STATUS", TRXNNO: "$_id.TD_TRNO", INVNAME: "$_id.INVNAME", PAN: "$_id.PAN1", TRXN_NATUR: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", SCHEME: "$_id.FUNDDESC", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } } } },

                                { $sort: { TRADDATE: -1 } }
                            ]
                            transc.aggregate(pipeline, (err, camsdata) => {
                                transk.aggregate(pipeline1, (err, karvydata) => {
                                    if (karvydata != 0 || camsdata != 0) {
                                        resdata = {
                                            status: 200,
                                            message: 'Successfull',
                                            data: frankdata
                                        }
                                        datacon = karvydata.concat(camsdata);
                                        datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                                            .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                                            .reverse().map(JSON.parse);
                                        datacon = Array.from(new Set(datacon));
                                        var newdata1 = datacon.map(item => {
                                            return [JSON.stringify(item), item]
                                        }); // creates array of array
                                        var maparr1 = new Map(newdata1); // create key value pair from array of array
                                        datacon = [...maparr1.values()];//converting back to array from mapobject 

                                        for (var i = 0; i < datacon.length; i++) {
                                            if (datacon[i]['GUARD_NAME']) {
                                                datacon[i]['GUARD_NAME'] = datacon[i]['GUARD_NAME'][0];
                                            } if (datacon[i]['GUARD_PAN']) {
                                                datacon[i]['GUARD_PAN'] = datacon[i]['GUARD_PAN'][0];
                                            }
                                            if (datacon[i]['TRXN_NATUR'].match(/^Systematic/)) {
                                                datacon[i]['TRXN_NATUR'] = "SIP";
                                            }
                                            if (Math.sign(datacon[i]['AMOUNT']) === -1) {
                                                datacon[i]['TRXN_NATUR'] = "SIPR";
                                            }
                                            if (datacon[i]['TRXN_NATUR'].match(/Systematic - From.*/)) {
                                                datacon[i]['TRXN_NATUR'] = "STP";
                                            } if (datacon[i]['PER_STATUS'] === "On Behalf Of Minor" || datacon[i]['PER_STATUS'] === "MINOR" || datacon[i]['PER_STATUS'] === "On Behalf of Minor") {
                                                datacon[i]['PER_STATUS'] = "Minor";
                                                datacon[i]['PAN'] = "";
                                            } if (datacon[i]['PER_STATUS'] === "INDIVIDUAL" || datacon[i]['PER_STATUS'] === "Resident Individual") {
                                                datacon[i]['PER_STATUS'] = "Individual";
                                            } if (datacon[i]['PER_STATUS'] === "HINDU UNDIVIDED FAMI") {
                                                datacon[i]['PER_STATUS'] = "HUF";
                                            }
                                            if (datacon[i]['GUARD_NAME'] === null && datacon[i]['GUARD_PAN'] === null) {
                                                datacon[i]['GUARD_NAME'] = "";
                                                datacon[i]['GUARD_PAN'] = "";
                                            }
                                        }
                                        resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime());
                                        res.json(resdata);
                                        return resdata;
                                    } else {
                                        resdata = {
                                            status: 400,
                                            message: 'Data not found',
                                        }
                                        res.json(resdata);
                                        return resdata;
                                    }
                                });
                            })
                        });
                    })
                } else {
                    pipeline = [  ///trans_cams
                        { $match: { $and: [{ TRADDATE: { $gte: new Date(moment(firstdate).format("YYYY-MM-DD")), $lt: new Date(moment(seconddate).format("YYYY-MM-DD")) } }, { PAN: req.body.pan }, { TRXN_NATUR: /Systematic/ }] } },

                        { $group: { _id: { TAX_STATUS: "$TAX_STATUS", TRXNNO: "$TRXNNO", INV_NAME: "$INV_NAME", PAN: "$PAN", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
                        { $lookup: { from: 'folio_cams', localField: '_id.FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
                        //{ $unwind: "$detail" },
                        { $project: { _id: 0, GUARD_NAME: "$detail.GUARD_NAME", GUARD_PAN: "$detail.GUARD_PAN", PER_STATUS: "$_id.TAX_STATUS", TRXNNO: "$_id.TRXNNO", INVNAME: "$_id.INV_NAME", PAN: "$_id.PAN", TRXN_NATUR: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } } } },

                        { $sort: { TRADDATE: -1 } }
                    ]
                    pipeline1 = [  ///trans_karvy
                        { $match: { $and: [{ PAN1: req.body.pan }, { TD_TRDT: { $gte: new Date(moment(firstdate).format("YYYY-MM-DD")), $lt: new Date(moment(seconddate).format("YYYY-MM-DD")) } }, { TRDESC: /Systematic/ }] } },

                        { $group: { _id: { STATUS: "$STATUS", TD_TRNO: "$TD_TRNO", INVNAME: "$INVNAME", PAN1: "$PAN1", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", FUNDDESC: "$FUNDDESC", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
                        { $lookup: { from: 'folio_karvy', localField: '_id.TD_ACNO', foreignField: 'ACNO', as: 'detail' } },
                        //{ $unwind: "$detail" },
                        { $project: { _id: 0, GUARD_NAME: "$detail.GUARDIANN0", GUARD_PAN: "$detail.GUARDPANNO", PER_STATUS: "$_id.STATUS", TRXNNO: "$_id.TD_TRNO", INVNAME: "$_id.INVNAME", PAN: "$_id.PAN1", TRXN_NATUR: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", SCHEME: "$_id.FUNDDESC", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } } } },


                        { $sort: { TRADDATE: -1 } }
                    ]
                    transc.aggregate(pipeline, (err, camsdata) => {
                        transk.aggregate(pipeline1, (err, karvydata) => {

                            if (karvydata.length != 0 || camsdata.length != 0) {
                                resdata = {
                                    status: 200,
                                    message: 'Successfull',
                                    data: frankdata
                                }
                                datacon = karvydata.concat(camsdata);
                                datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                                    .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                                    .reverse().map(JSON.parse);
                                datacon = Array.from(new Set(datacon));
                                for (var i = 0; i < datacon.length; i++) {
                                    if (datacon[i]['TRXN_NATUR'].match(/Systematic.*/)) {
                                        datacon[i]['TRXN_NATUR'] = "SIP";
                                    }
                                    if ((Math.sign(datacon[i]['AMOUNT']) === -1)) {
                                        datacon[i]['TRXN_NATUR'] = "SIPR";
                                    }
                                    if (datacon[i]['TRXN_NATUR'].match(/Systematic - From.*/)) {
                                        datacon[i]['TRXN_NATUR'] = "STP";
                                    } if (datacon[i]['GUARD_NAME'] === null && datacon[i]['GUARD_PAN'] === null) {
                                        datacon[i]['GUARD_NAME'] = "";
                                        datacon[i]['GUARD_PAN'] = "";
                                    }
                                    if (datacon[i]['GUARD_NAME']) {
                                        datacon[i]['GUARD_NAME'] = datacon[i]['GUARD_NAME'][0];
                                    } if (datacon[i]['GUARD_PAN']) {
                                        datacon[i]['GUARD_PAN'] = datacon[i]['GUARD_PAN'][0];
                                    }
                                }
                                resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime());
                                res.json(resdata)
                                return resdata;
                            } else {
                                resdata = {
                                    status: 400,
                                    message: 'Data not found',
                                }
                                res.json(resdata);
                                return resdata;
                            }
                        });
                    });
                }
            });
        }
    } catch (err) {
        console.log(err)
    }
})

app.post("/api/getsipstpuserwiseapi", function (req, res) {
    try {
        var member = "";
        var guardpan1 = []; var guardpan2 = [];
        var arr1 = []; var arr2 = []; var arr3 = []; var alldata = []; var arrFolio = []; var arrName = [];
        let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        if (req.body.month === "") {
            resdata = {
                status: 400,
                message: 'Please enter month',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.year === "") {
            resdata = {
                status: 400,
                message: 'Please enter year',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.pan === "") {
            resdata = {
                status: 400,
                message: 'Please enter pan',
            }
            res.json(resdata);
            return resdata;
        } else if (!regex.test(req.body.pan)) {
            resdata = {
                status: 400,
                message: 'Please enter valid pan',
            }
            res.json(resdata);
            return resdata;
        } else {
            var lastdate = new Date(req.body.year, req.body.month, 0).getDate();
            var firstdate = req.body.year + "-" + req.body.month + "-" + "01";
            var seconddate = req.body.year + "-" + req.body.month + "-" + lastdate;

            family.find({ adminPan: { $regex: `^${req.body.pan}.*`, $options: 'i' } }, { _id: 0, memberPan: 1 }, function (err, member) {
                if (member != "") {
                    member = [...new Set(member.map(({ memberPan }) => memberPan.toUpperCase()))];
                    guardpan1.push({ GUARD_PAN: req.body.pan.toUpperCase() });
                    guardpan2.push({ GUARDPANNO: req.body.pan.toUpperCase() });
                    arr1.push({ PAN: req.body.pan.toUpperCase() });
                    arr2.push({ PAN1: req.body.pan.toUpperCase() });
                    for (var j = 0; j < member.length; j++) {
                        guardpan1.push({ GUARD_PAN: member[j] });
                        guardpan2.push({ GUARDPANNO: member[j] });
                        arr1.push({ PAN: member[j] });
                        arr2.push({ PAN1: member[j] });
                    }
                    var strPan1 = { $or: guardpan1 };
                    var strPan2 = { $or: guardpan2 };
                    folioc.find(strPan1).distinct("FOLIOCHK", function (err, member1) {
                        foliok.find(strPan2).distinct("ACNO", function (err, member2) {
                            var alldata = member1.concat(member2);
                            for (var j = 0; j < alldata.length; j++) {
                                arr1.push({ FOLIO_NO: alldata[j] });
                                arr2.push({ TD_ACNO: alldata[j] });
                            }
                            var strFolio = { $or: arr1 };
                            var strFolio1 = { $or: arr2 };
                            pipeline = [  ///trans_cams
                                { $match: { $and: [{ TRADDATE: { $gte: new Date(moment(firstdate).format("YYYY-MM-DD")), $lt: new Date(moment(seconddate).format("YYYY-MM-DD")) } }, strFolio, { TRXN_NATUR: /Systematic/ }] } },

                                { $group: { _id: { TAX_STATUS: "$TAX_STATUS", TRXNNO: "$TRXNNO", INV_NAME: "$INV_NAME", PAN: "$PAN", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },

                                { $lookup: { from: 'folio_cams', localField: '_id.FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
                                //{ $unwind: "$detail" },
                                { $project: { _id: 0, GUARD_NAME: "$detail.GUARD_NAME", GUARD_PAN: "$detail.GUARD_PAN", PER_STATUS: "$_id.TAX_STATUS", TRXNNO: "$_id.TRXNNO", INVNAME: "$_id.INV_NAME", PAN: "$_id.PAN", TRXN_NATUR: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", amount_str: "$_id.AMOUNT", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } } } },

                                { $sort: { TRADDATE: -1 } }
                            ]
                            pipeline1 = [  ///trans_karvy
                                { $match: { $and: [strFolio1, { TD_TRDT: { $gte: new Date(moment(firstdate).format("YYYY-MM-DD")), $lt: new Date(moment(seconddate).format("YYYY-MM-DD")) } }, { TRDESC: /Systematic/ }] } },

                                { $group: { _id: { STATUS: "$STATUS", TD_TRNO: "$TD_TRNO", INVNAME: "$INVNAME", PAN1: "$PAN1", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", FUNDDESC: "$FUNDDESC", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },

                                { $lookup: { from: 'folio_karvy', localField: '_id.TD_ACNO', foreignField: 'ACNO', as: 'detail' } },
                                //{ $unwind: "$detail" },
                                { $project: { _id: 0, GUARD_NAME: "$detail.GUARDIANN0", GUARD_PAN: "$detail.GUARDPANNO", PER_STATUS: "$_id.STATUS", TRXNNO: "$_id.TD_TRNO", INVNAME: "$_id.INVNAME", PAN: "$_id.PAN1", TRXN_NATUR: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", SCHEME: "$_id.FUNDDESC", amount_str: "$_id.TD_AMT", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } } } },

                                { $sort: { TRADDATE: -1 } }
                            ]
                            transc.aggregate(pipeline, (err, camsdata) => {
                                transk.aggregate(pipeline1, (err, karvydata) => {
                                    if (karvydata != 0 || camsdata != 0) {
                                        resdata = {
                                            status: 200,
                                            message: 'Successfull',
                                            data: frankdata
                                        }
                                        datacon = karvydata.concat(camsdata);
                                        datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                                            .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                                            .reverse().map(JSON.parse);
                                        datacon = Array.from(new Set(datacon));
                                        var newdata1 = datacon.map(item => {
                                            return [JSON.stringify(item), item]
                                        }); // creates array of array
                                        var maparr1 = new Map(newdata1); // create key value pair from array of array
                                        datacon = [...maparr1.values()];//converting back to array from mapobject 

                                        for (var i = 0; i < datacon.length; i++) {
                                            if (datacon[i]['GUARD_NAME']) {
                                                datacon[i]['GUARD_NAME'] = datacon[i]['GUARD_NAME'][0];
                                            } if (datacon[i]['GUARD_PAN']) {
                                                datacon[i]['GUARD_PAN'] = datacon[i]['GUARD_PAN'][0];
                                            }
                                            if (datacon[i]['TRXN_NATUR'].match(/^Systematic/)) {
                                                datacon[i]['TRXN_NATUR'] = "SIP";
                                            }
                                            if (Math.sign(datacon[i]['AMOUNT']) === -1) {
                                                datacon[i]['TRXN_NATUR'] = "SIPR";
                                            }
                                            if (datacon[i]['TRXN_NATUR'].match(/Systematic - From.*/)) {
                                                datacon[i]['TRXN_NATUR'] = "STP";
                                            } if (datacon[i]['PER_STATUS'] === "On Behalf Of Minor" || datacon[i]['PER_STATUS'] === "MINOR" || datacon[i]['PER_STATUS'] === "On Behalf of Minor") {
                                                datacon[i]['PER_STATUS'] = "Minor";
                                                datacon[i]['PAN'] = "";
                                            } if (datacon[i]['PER_STATUS'] === "INDIVIDUAL" || datacon[i]['PER_STATUS'] === "Resident Individual") {
                                                datacon[i]['PER_STATUS'] = "Individual";
                                            } if (datacon[i]['PER_STATUS'] === "HINDU UNDIVIDED FAMI") {
                                                datacon[i]['PER_STATUS'] = "HUF";
                                            }
                                            if (datacon[i]['GUARD_NAME'] === null && datacon[i]['GUARD_PAN'] === null) {
                                                datacon[i]['GUARD_NAME'] = "";
                                                datacon[i]['GUARD_PAN'] = "";
                                            } if (datacon[i]['amount_str']) {
                                                datacon[i]['amount_str'] = datacon[i]['amount_str'].toLocaleString('en-IN');
                                            }
                                        }
                                        resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime());
                                        res.json(resdata);
                                        return resdata;
                                    } else {
                                        resdata = {
                                            status: 400,
                                            message: 'Data not found',
                                        }
                                        res.json(resdata);
                                        return resdata;
                                    }
                                });
                            })
                        });
                    })
                } else {
                    pipeline = [  ///trans_cams
                        { $match: { $and: [{ TRADDATE: { $gte: new Date(moment(firstdate).format("YYYY-MM-DD")), $lt: new Date(moment(seconddate).format("YYYY-MM-DD")) } }, { PAN: req.body.pan }, { TRXN_NATUR: /Systematic/ }] } },

                        { $group: { _id: { TAX_STATUS: "$TAX_STATUS", TRXNNO: "$TRXNNO", INV_NAME: "$INV_NAME", PAN: "$PAN", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
                        { $lookup: { from: 'folio_cams', localField: '_id.FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
                        //{ $unwind: "$detail" },
                        { $project: { _id: 0, GUARD_NAME: "$detail.GUARD_NAME", GUARD_PAN: "$detail.GUARD_PAN", PER_STATUS: "$_id.TAX_STATUS", TRXNNO: "$_id.TRXNNO", INVNAME: "$_id.INV_NAME", PAN: "$_id.PAN", TRXN_NATUR: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", amount_str: "$_id.AMOUNT", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } } } },

                        { $sort: { TRADDATE: -1 } }
                    ]
                    pipeline1 = [  ///trans_karvy
                        { $match: { $and: [{ PAN1: req.body.pan }, { TD_TRDT: { $gte: new Date(moment(firstdate).format("YYYY-MM-DD")), $lt: new Date(moment(seconddate).format("YYYY-MM-DD")) } }, { TRDESC: /Systematic/ }] } },

                        { $group: { _id: { STATUS: "$STATUS", TD_TRNO: "$TD_TRNO", INVNAME: "$INVNAME", PAN1: "$PAN1", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", FUNDDESC: "$FUNDDESC", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
                        { $lookup: { from: 'folio_karvy', localField: '_id.TD_ACNO', foreignField: 'ACNO', as: 'detail' } },
                        //{ $unwind: "$detail" },
                        { $project: { _id: 0, GUARD_NAME: "$detail.GUARDIANN0", GUARD_PAN: "$detail.GUARDPANNO", PER_STATUS: "$_id.STATUS", TRXNNO: "$_id.TD_TRNO", INVNAME: "$_id.INVNAME", PAN: "$_id.PAN1", TRXN_NATUR: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", SCHEME: "$_id.FUNDDESC", amount_str: "$_id.TD_AMT", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } } } },


                        { $sort: { TRADDATE: -1 } }
                    ]
                    transc.aggregate(pipeline, (err, camsdata) => {
                        transk.aggregate(pipeline1, (err, karvydata) => {

                            if (karvydata.length != 0 || camsdata.length != 0) {
                                resdata = {
                                    status: 200,
                                    message: 'Successfull',
                                    data: frankdata
                                }
                                datacon = karvydata.concat(camsdata);
                                datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                                    .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                                    .reverse().map(JSON.parse);
                                datacon = Array.from(new Set(datacon));
                                for (var i = 0; i < datacon.length; i++) {
                                    if (datacon[i]['TRXN_NATUR'].match(/Systematic.*/)) {
                                        datacon[i]['TRXN_NATUR'] = "SIP";
                                    }
                                    if ((Math.sign(datacon[i]['AMOUNT']) === -1)) {
                                        datacon[i]['TRXN_NATUR'] = "SIPR";
                                    }
                                    if (datacon[i]['TRXN_NATUR'].match(/Systematic - From.*/)) {
                                        datacon[i]['TRXN_NATUR'] = "STP";
                                    } if (datacon[i]['GUARD_NAME'] === null && datacon[i]['GUARD_PAN'] === null) {
                                        datacon[i]['GUARD_NAME'] = "";
                                        datacon[i]['GUARD_PAN'] = "";
                                    }
                                    if (datacon[i]['GUARD_NAME']) {
                                        datacon[i]['GUARD_NAME'] = datacon[i]['GUARD_NAME'][0];
                                    } if (datacon[i]['GUARD_PAN']) {
                                        datacon[i]['GUARD_PAN'] = datacon[i]['GUARD_PAN'][0];
                                    } if (datacon[i]['amount_str']) {
                                        datacon[i]['amount_str'] = datacon[i]['amount_str'].toLocaleString('en-IN');
                                    }
                                }
                                resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime());
                                res.json(resdata)
                                return resdata;
                            } else {
                                resdata = {
                                    status: 400,
                                    message: 'Data not found',
                                }
                                res.json(resdata);
                                return resdata;
                            }
                        });
                    });
                }
            });
        }
    } catch (err) {
        console.log(err)
    }
})

app.post("/api/getsipstpall", function (req, res) {
    var mon = parseInt(req.body.month);
    var yer = parseInt(req.body.year);

    console.log("mon,yer==", mon, yer)
    const pipeline = [  ///trans_cams
        { $group: { _id: { TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
        { $project: { _id: 0, TRXN_NATUR: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } }, month: { $month: ('$_id.TRADDATE') }, year: { $year: ('$_id.TRADDATE') } } },
        { $match: { $and: [{ month: mon }, { year: yer }, { TRXN_NATUR: /Systematic/ }, { TRXN_NATUR: { $not: /^Systematic - From.*/ } }] } },
        { $sort: { TRADDATE: -1 } }
    ]
    const pipeline1 = [  ///trans_karvy
        { $group: { _id: { TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", FUNDDESC: "$FUNDDESC", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
        { $project: { _id: 0, TRXN_NATUR: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", SCHEME: "$_id.FUNDDESC", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } }, month: { $month: ('$_id.TD_TRDT') }, year: { $year: ('$_id.TD_TRDT') } } },
        { $match: { $and: [{ month: mon }, { year: yer }, { TRXN_NATUR: /Systematic/ }, { TRXN_NATUR: { $not: /^Systematic - From.*/ } }] } },
        { $sort: { TRADDATE: -1 } }
    ]
    transc.aggregate(pipeline, (err, camsdata) => {
        transk.aggregate(pipeline1, (err, karvydata) => {
            // console.log("camsdata=",camsdata)
            // console.log("karvydata=",karvydata)
            if (karvydata.length != 0 || camsdata.length != 0) {
                resdata = {
                    status: 200,
                    message: 'Successfull',
                    data: karvydata
                }
                datacon = karvydata.concat(camsdata);
                datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                    .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                    .reverse().map(JSON.parse);
                for (var i = 0; i < datacon.length; i++) {
                    if (datacon[i]['TRXN_NATUR'].match(/Systematic.*/)) {
                        datacon[i]['TRXN_NATUR'] = "SIP";
                    }
                    if ((Math.sign(datacon[i]['AMOUNT']) === -1)) {
                        datacon[i]['TRXN_NATUR'] = "SIPR";
                    }
                    if (datacon[i]['TRXN_NATUR'].match(/Systematic - From.*/)) {
                        datacon[i]['TRXN_NATUR'] = "STP";
                    }
                }
                resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime())
                // console.log("resdata=",resdata.data)
                res.json(resdata)
                return resdata
            } else {
                resdata = {
                    status: 400,
                    message: 'Data not found',
                }
                res.json(resdata)
                return resdata
            }

        });
    });
})

app.post("/api/gettransactionall", function (req, res) {
    var mon = parseInt(req.body.month);
    var yer = parseInt(req.body.year);
    pipeline = [  ///trans_cams
        { $group: { _id: { TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
        { $project: { _id: 0, TRXN_NATUR: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } }, month: { $month: ('$_id.TRADDATE') }, year: { $year: ('$_id.TRADDATE') } } },
        { $match: { $and: [{ month: mon }, { year: yer }] } },
        { $sort: { TRADDATE: -1 } }
    ]
    pipeline1 = [  ///trans_karvy
        { $group: { _id: { TD_TRNO: "$TD_TRNO", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", FUNDDESC: "$FUNDDESC", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
        { $project: { _id: 0, TD_TRNO: "$_id.TD_TRNO", TRXN_NATUR: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", SCHEME: "$_id.FUNDDESC", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } }, month: { $month: ('$_id.TD_TRDT') }, year: { $year: ('$_id.TD_TRDT') } } },
        { $match: { $and: [{ month: mon }, { year: yer }] } },
        { $sort: { TRADDATE: -1 } }
    ]
    pipeline2 = [  ///trans_franklin
        { $group: { _id: { TRXN_TYPE: "$TRXN_TYPE", FOLIO_NO: "$FOLIO_NO", SCHEME_NA1: "$SCHEME_NA1", AMOUNT: "$AMOUNT", TRXN_DATE: "$TRXN_DATE" } } },
        { $project: { _id: 0, TRXN_NATUR: "$_id.TRXN_TYPE", FOLIO_NO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME_NA1", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRXN_DATE" } }, month: { $month: ('$_id.TRXN_DATE') }, year: { $year: ('$_id.TRXN_DATE') } } },
        { $match: { $and: [{ month: mon }, { year: yer },] } },
        { $sort: { TRADDATE: -1 } }
    ]
    transc.aggregate(pipeline, (err, camsdata) => {
        transk.aggregate(pipeline1, (err, karvydata) => {
            transf.aggregate(pipeline2, (err, frankdata) => {
                if (frankdata.length != 0 || karvydata.length != 0 || camsdata.length != 0) {
                    resdata = {
                        status: 200,
                        message: 'Successfull',
                        data: frankdata
                    }
                } else {
                    resdata = {
                        status: 400,
                        message: 'Data not found',
                    }
                }
                var datacon = frankdata.concat(karvydata.concat(camsdata))
                datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                    .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                    .reverse().map(JSON.parse);
                for (var i = 0; i < datacon.length; i++) {
                    if (datacon[i]['TRXN_NATUR'] === "Redemption" || datacon[i]['TRXN_NATUR'] === "FUL" ||
                        datacon[i]['TRXN_NATUR'] === "Full Redemption" || datacon[i]['TRXN_NATUR'] === "Partial Redemption") {
                        datacon[i]['TRXN_NATUR'] = "RED";
                    } if (datacon[i]['TRXN_NATUR'].match(/Systematic Investment.*/) ||
                        datacon[i]['TRXN_NATUR'].match(/Systematic Withdrawal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - Instalment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - To.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-NSE.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Physical.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-Normal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic (ECS).*/)) {
                        datacon[i]['TRXN_NATUR'] = "SIP";
                    } if (Math.sign(datacon[i]['AMOUNT']) === -1) {
                        datacon[i]['TRXN_NATUR'] = "SIPR";
                    } if (datacon[i]['TRXN_NATUR'].match(/Systematic - From.*/) || datacon[i]['TRXN_NATUR'] === "S T P" || datacon[i]['TRXN_NATUR'] === "S T P In") {
                        datacon[i]['TRXN_NATUR'] = "STP";
                    } if (datacon[i]['TRXN_NATUR'] === "Lateral Shift Out" || datacon[i]['TRXN_NATUR'] === "Switchout"
                        || datacon[i]['TRXN_NATUR'] === "Transfer-Out" || datacon[i]['TRXN_NATUR'] === "Transmission Out"
                        || datacon[i]['TRXN_NATUR'] === "Switch Over Out" || datacon[i]['TRXN_NATUR'] === "LTOP"
                        || datacon[i]['TRXN_NATUR'] === "LTOF" || datacon[i]['TRXN_NATUR'] === "Partial Switch Out" ||
                        datacon[i]['TRXN_NATUR'] === "Full Switch Out") {
                        datacon[i]['TRXN_NATUR'] = "Switch Out";
                    } if (datacon[i]['TRXN_NATUR'] === "Lateral Shift In" || datacon[i]['TRXN_NATUR'] === "Switch-In"
                        || datacon[i]['TRXN_NATUR'] === "Transfer-In" || datacon[i]['TRXN_NATUR'] === "Switch Over In"
                        || datacon[i]['TRXN_NATUR'] === "LTIN" || datacon[i]['TRXN_NATUR'] === "LTIA") {
                        datacon[i]['TRXN_NATUR'] = "Switch In";
                    } if (datacon[i]['TRXN_NATUR'] === "Dividend Reinvest" || datacon[i]['TRXN_NATUR'] === "Dividend Paid"
                        || datacon[i]['TRXN_NATUR'] === "Div. Reinvestment") {
                        datacon[i]['TRXN_NATUR'] = "Dividend";
                    } if (datacon[i]['TRXN_NATUR'] === "Gross Dividend") {
                        datacon[i]['TRXN_NATUR'] = "Dividend Payout";
                    } if (datacon[i]['TRXN_NATUR'] === "Consolidation In") {
                        datacon[i]['TRXN_NATUR'] = "Con In";
                    } if (datacon[i]['TRXN_NATUR'] === "Consolidation Out") {
                        datacon[i]['TRXN_NATUR'] = "Con Out";
                    } if (datacon[i]['TRXN_NATUR'] === "Consolidation Out") {
                        datacon[i]['TRXN_NATUR'] = "Con Out";
                    } if (datacon[i]['TRXN_NATUR'] === "Purchase" || datacon[i]['TRXN_NATUR'] === "NEW" ||
                        datacon[i]['TRXN_NATUR'] === "Initial Allotment"
                        || datacon[i]['TRXN_NATUR'] === "NEWPUR") {
                        datacon[i]['TRXN_NATUR'] = "Purchase";
                    } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "ADD" ||
                        datacon[i]['TRXN_NATUR'] === "ADDPUR") {
                        datacon[i]['TRXN_NATUR'] = "Add. Purchase";
                    }
                }
                resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime())
                res.json(resdata)
                //return resdata
            });
        });
    });
})

app.post("/api/gettransactionuserwise", function (req, res) {
    try {
        var mon = parseInt(req.body.month);
        var yer = parseInt(req.body.year);
        if (req.body.pan === "Please Provide" || req.body.pan === "" || req.body.pan === "Not An Assessee") {
            req.body.pan = "";
            pipeline = [  ///trans_cams
                { $group: { _id: { INV_NAME: "$INV_NAME", PAN: "$PAN", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
                { $project: { _id: 0, INVNAME: "$_id.INV_NAME", PAN: "$_id.PAN", TRXN_NATUR: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } }, month: { $month: ('$_id.TRADDATE') }, year: { $year: ('$_id.TRADDATE') } } },
                { $match: { $and: [{ month: mon }, { year: yer }, { INVNAME: { $regex: `^${req.body.name}.*`, $options: 'i' } }] } },
                { $sort: { TRADDATE: -1 } }
            ]
            pipeline1 = [  ///trans_karvy
                { $group: { _id: { TD_TRNO: "$TD_TRNO", INVNAME: "$INVNAME", PAN1: "$PAN1", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", FUNDDESC: "$FUNDDESC", TD_AMT: "$TD_AMT", TD_PRDT: "$TD_PRDT" } } },
                { $project: { _id: 0, TD_TRNO: "$_id.TD_TRNO", INVNAME: "$_id.INVNAME", PAN: "$_id.PAN1", TRXN_NATUR: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", SCHEME: "$_id.FUNDDESC", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_PRDT" } }, month: { $month: ('$_id.TD_PRDT') }, year: { $year: ('$_id.TD_PRDT') } } },
                { $match: { $and: [{ month: mon }, { year: yer }, { INVNAME: { $regex: `^${req.body.name}.*`, $options: 'i' } }] } },
                { $sort: { TRADDATE: -1 } }
            ]
            pipeline2 = [  ///trans_franklin
                { $group: { _id: { INVESTOR_2: "$INVESTOR_2", IT_PAN_NO1: "$IT_PAN_NO1", TRXN_TYPE: "$TRXN_TYPE", FOLIO_NO: "$FOLIO_NO", SCHEME_NA1: "$SCHEME_NA1", AMOUNT: "$AMOUNT", TRXN_DATE: "$TRXN_DATE" } } },
                { $project: { _id: 0, INVNAME: "$_id.INVESTOR_2", PAN: "$_id.IT_PAN_NO1", TRXN_NATUR: "$_id.TRXN_TYPE", FOLIO_NO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME_NA1", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRXN_DATE" } }, month: { $month: ('$_id.TRXN_DATE') }, year: { $year: ('$_id.TRXN_DATE') } } },
                { $match: { $and: [{ month: mon }, { year: yer }, { INVNAME: { $regex: `^${req.body.name}.*`, $options: 'i' } }] } },
                { $sort: { TRADDATE: -1 } }
            ]

            transc.aggregate(pipeline, (err, camsdata) => {
                transk.aggregate(pipeline1, (err, karvydata) => {
                    transf.aggregate(pipeline2, (err, frankdata) => {
                        if (frankdata.length != 0 || karvydata.length != 0 || camsdata.length != 0) {
                            //   if( newdata != 0){
                            resdata = {
                                status: 200,
                                message: 'Successfull',
                                data: frankdata
                            }
                        } else {
                            resdata = {
                                status: 400,
                                message: 'Data not found',
                            }
                        }
                        datacon = frankdata.concat(karvydata.concat(camsdata))
                        datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                            .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                            .reverse().map(JSON.parse);
                        for (var i = 0; i < datacon.length; i++) {
                            if (datacon[i]['TRXN_NATUR'] === "Redemption" || datacon[i]['TRXN_NATUR'] === "FUL" ||
                                datacon[i]['TRXN_NATUR'] === "Full Redemption" || datacon[i]['TRXN_NATUR'] === "Partial Redemption") {
                                datacon[i]['TRXN_NATUR'] = "RED";
                            } if (datacon[i]['TRXN_NATUR'].match(/Systematic Investment.*/) ||
                                datacon[i]['TRXN_NATUR'].match(/Systematic Withdrawal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - Instalment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - To.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-NSE.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Physical.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-Normal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic (ECS).*/)) {
                                datacon[i]['TRXN_NATUR'] = "SIP";
                            } if (Math.sign(datacon[i]['AMOUNT']) === -1) {
                                datacon[i]['TRXN_NATUR'] = "SIPR";
                            } if (datacon[i]['TRXN_NATUR'].match(/Systematic - From.*/) || datacon[i]['TRXN_NATUR'] === "S T P" || datacon[i]['TRXN_NATUR'] === "S T P In") {
                                datacon[i]['TRXN_NATUR'] = "STP";
                            } if (datacon[i]['TRXN_NATUR'] === "Lateral Shift Out" || datacon[i]['TRXN_NATUR'] === "Switchout"
                                || datacon[i]['TRXN_NATUR'] === "Transfer-Out" || datacon[i]['TRXN_NATUR'] === "Transmission Out"
                                || datacon[i]['TRXN_NATUR'] === "Switch Over Out" || datacon[i]['TRXN_NATUR'] === "LTOP"
                                || datacon[i]['TRXN_NATUR'] === "LTOF" || datacon[i]['TRXN_NATUR'] === "Partial Switch Out" ||
                                datacon[i]['TRXN_NATUR'] === "Full Switch Out") {
                                datacon[i]['TRXN_NATUR'] = "Switch Out";
                            } if (datacon[i]['TRXN_NATUR'] === "Lateral Shift In" || datacon[i]['TRXN_NATUR'] === "Switch-In"
                                || datacon[i]['TRXN_NATUR'] === "Transfer-In" || datacon[i]['TRXN_NATUR'] === "Switch Over In"
                                || datacon[i]['TRXN_NATUR'] === "LTIN" || datacon[i]['TRXN_NATUR'] === "LTIA") {
                                datacon[i]['TRXN_NATUR'] = "Switch In";
                            } if (datacon[i]['TRXN_NATUR'] === "Dividend Reinvest" || datacon[i]['TRXN_NATUR'] === "Dividend Paid"
                                || datacon[i]['TRXN_NATUR'] === "Div. Reinvestment") {
                                datacon[i]['TRXN_NATUR'] = "Dividend";
                            } if (datacon[i]['TRXN_NATUR'] === "Gross Dividend") {
                                datacon[i]['TRXN_NATUR'] = "Dividend Payout";
                            } if (datacon[i]['TRXN_NATUR'] === "Consolidation In") {
                                datacon[i]['TRXN_NATUR'] = "Con In";
                            } if (datacon[i]['TRXN_NATUR'] === "Consolidation Out") {
                                datacon[i]['TRXN_NATUR'] = "Con Out";
                            } if (datacon[i]['TRXN_NATUR'] === "Consolidation Out") {
                                datacon[i]['TRXN_NATUR'] = "Con Out";
                            } if (datacon[i]['TRXN_NATUR'] === "Purchase" || datacon[i]['TRXN_NATUR'] === "NEW" ||
                                datacon[i]['TRXN_NATUR'] === "Initial Allotment"
                                || datacon[i]['TRXN_NATUR'] === "NEWPUR" || datacon[i]['TRXN_NATUR'] === "Fresh Purchase") {
                                datacon[i]['TRXN_NATUR'] = "Purchase";
                            } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "ADD" ||
                                datacon[i]['TRXN_NATUR'] === "ADDPUR") {
                                datacon[i]['TRXN_NATUR'] = "Add. Purchase";
                            }
                        }
                        resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime())
                        res.json(resdata)
                        return resdata
                    });
                });
            });
        } else if (req.body.pan != "" && req.body.name != "") {
            pipeline = [  ///trans_cams
                { $group: { _id: { INV_NAME: "$INV_NAME", PAN: "$PAN", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
                { $project: { _id: 0, INVNAME: "$_id.INV_NAME", PAN: "$_id.PAN", TRXN_NATUR: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } }, month: { $month: ('$_id.TRADDATE') }, year: { $year: ('$_id.TRADDATE') } } },
                { $match: { $and: [{ month: mon }, { year: yer }, { PAN: req.body.pan }, { INVNAME: { $regex: `^${req.body.name}.*`, $options: 'i' } }] } },
                { $sort: { TRADDATE: -1 } }
            ]
            pipeline1 = [  ///trans_karvy
                { $group: { _id: { TD_TRNO: "$TD_TRNO", INVNAME: "$INVNAME", PAN1: "$PAN1", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", FUNDDESC: "$FUNDDESC", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
                { $project: { _id: 0, TD_TRNO: "$_id.TD_TRNO", INVNAME: "$_id.INVNAME", PAN: "$_id.PAN1", TRXN_NATUR: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", SCHEME: "$_id.FUNDDESC", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } }, month: { $month: ('$_id.TD_TRDT') }, year: { $year: ('$_id.TD_TRDT') } } },
                { $match: { $and: [{ month: mon }, { year: yer }, { PAN: req.body.pan }, { INVNAME: { $regex: `^${req.body.name}.*`, $options: 'i' } }] } },
                { $sort: { TRADDATE: -1 } }
            ]
        }
        transc.aggregate(pipeline, (err, camsdata) => {
            transk.aggregate(pipeline1, (err, karvydata) => {
                if (karvydata != 0 || camsdata != 0) {
                    resdata = {
                        status: 200,
                        message: 'Successfull',
                        data: frankdata
                    }
                    var datacon = karvydata.concat(camsdata);
                    datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                        .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                        .reverse().map(JSON.parse);
                    for (var i = 0; i < datacon.length; i++) {
                        if (datacon[i]['TRXN_NATUR'] === "Redemption" || datacon[i]['TRXN_NATUR'] === "FUL" || datacon[i]['TRXN_NATUR'] === "SIPR" ||
                            datacon[i]['TRXN_NATUR'] === "Full Redemption" || datacon[i]['TRXN_NATUR'] === "Partial Redemption") {
                            datacon[i]['TRXN_NATUR'] = "RED";
                        } if (datacon[i]['TRXN_NATUR'].match(/Systematic Investment.*/) ||
                            datacon[i]['TRXN_NATUR'].match(/Systematic - Instalment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - To.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-NSE.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Physical.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-Normal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic (ECS).*/)) {
                            datacon[i]['TRXN_NATUR'] = "SIP";
                        } if (datacon[i]['TRXN_NATUR'] === "Systematic Withdrawal") {
                            datacon[i]['TRXN_NATUR'] = "SWP";
                        } if (Math.sign(datacon[i]['AMOUNT']) === -1) {
                            datacon[i]['TRXN_NATUR'] = "SIPR";
                        } if (datacon[i]['TRXN_NATUR'].match(/Systematic - From.*/) || datacon[i]['TRXN_NATUR'] === "S T P" || datacon[i]['TRXN_NATUR'] === "S T P In") {
                            datacon[i]['TRXN_NATUR'] = "STP";
                        } if (datacon[i]['TRXN_NATUR'] === "Lateral Shift Out" || datacon[i]['TRXN_NATUR'] === "Switchout"
                            || datacon[i]['TRXN_NATUR'] === "Transfer-Out" || datacon[i]['TRXN_NATUR'] === "Transmission Out"
                            || datacon[i]['TRXN_NATUR'] === "Switch Over Out" || datacon[i]['TRXN_NATUR'] === "LTOP"
                            || datacon[i]['TRXN_NATUR'] === "LTOF" || datacon[i]['TRXN_NATUR'] === "Partial Switch Out" ||
                            datacon[i]['TRXN_NATUR'] === "Full Switch Out") {
                            datacon[i]['TRXN_NATUR'] = "Switch Out";
                        } if (datacon[i]['TRXN_NATUR'] === "Lateral Shift In" || datacon[i]['TRXN_NATUR'] === "Switch-In"
                            || datacon[i]['TRXN_NATUR'] === "Transfer-In" || datacon[i]['TRXN_NATUR'] === "Switch Over In"
                            || datacon[i]['TRXN_NATUR'] === "LTIN" || datacon[i]['TRXN_NATUR'] === "LTIA") {
                            datacon[i]['TRXN_NATUR'] = "Switch In";
                        } if (datacon[i]['TRXN_NATUR'] === "Dividend Reinvest" ||
                            datacon[i]['TRXN_NATUR'] === "Dividend Paid"
                            || datacon[i]['TRXN_NATUR'] === "Div. Reinvestment") {
                            datacon[i]['TRXN_NATUR'] = "Dividend";
                        } if (datacon[i]['TRXN_NATUR'] === "Gross Dividend") {
                            datacon[i]['TRXN_NATUR'] = "Dividend Payout";
                        } if (datacon[i]['TRXN_NATUR'] === "Consolidation In") {
                            datacon[i]['TRXN_NATUR'] = "Con In";
                        } if (datacon[i]['TRXN_NATUR'] === "Consolidation Out") {
                            datacon[i]['TRXN_NATUR'] = "Con Out";
                        } if (datacon[i]['TRXN_NATUR'] === "Consolidation Out") {
                            datacon[i]['TRXN_NATUR'] = "Con Out";
                        } if (datacon[i]['TRXN_NATUR'] === "Purchase" || datacon[i]['TRXN_NATUR'] === "NEW" ||
                            datacon[i]['TRXN_NATUR'] === "Initial Allotment"
                            || datacon[i]['TRXN_NATUR'] === "NEWPUR" || datacon[i]['TRXN_NATUR'] === "Fresh Purchase") {
                            datacon[i]['TRXN_NATUR'] = "Purchase";
                        } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "ADD" ||
                            datacon[i]['TRXN_NATUR'] === "ADDPUR") {
                            datacon[i]['TRXN_NATUR'] = "Add. Purchase";
                        }
                    }
                    resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime());
                    res.json(resdata)
                    return resdata
                } else {
                    resdata = {
                        status: 400,
                        message: 'Data not found',
                    }
                }
            });
        });
        // }else{
        //     resdata = {
        //         status: 400,
        //         message: 'Data not found',
        //     }
        //     res.json(resdata)
        //     return resdata
        // }
    } catch (err) {
        console.log(err)
    }
})

app.post("/api/gettransactionuserwiseapi", function (req, res) {
    try {
        var member = ""; var guardpan1 = []; var guardpan2 = [];
        var arr1 = []; var arr2 = []; var arr3 = []; var alldata = []; var arrFolio = []; var arrName = [];
        let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        if (req.body.month === "") {
            resdata = {
                status: 400,
                message: 'Please enter month',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.year === "") {
            resdata = {
                status: 400,
                message: 'Please enter year',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.pan === "") {
            resdata = {
                status: 400,
                message: 'Please enter pan',
            }
            res.json(resdata);
            return resdata;
        } else if (!regex.test(req.body.pan)) {
            resdata = {
                status: 400,
                message: 'Please enter valid pan',
            }
            res.json(resdata);
            return resdata;
        } else {
            var lastdate = new Date(req.body.year, req.body.month, 0).getDate();
            var firstdate = req.body.year + "-" + req.body.month + "-" + "01";
            var seconddate = req.body.year + "-" + req.body.month + "-" + lastdate;
            family.find({ adminPan: { $regex: `^${req.body.pan}.*`, $options: 'i' } }, { _id: 0, memberPan: 1 }, function (err, member) {
                if (member != "") {
                    member = [...new Set(member.map(({ memberPan }) => memberPan.toUpperCase()))];
                    guardpan1.push({ GUARD_PAN: req.body.pan.toUpperCase() });
                    guardpan2.push({ GUARDPANNO: req.body.pan.toUpperCase() });
                    arr1.push({ PAN: req.body.pan.toUpperCase() });
                    arr2.push({ PAN1: req.body.pan.toUpperCase() });
                    for (var j = 0; j < member.length; j++) {
                        guardpan1.push({ GUARD_PAN: member[j] });
                        guardpan2.push({ GUARDPANNO: member[j] });
                        arr1.push({ PAN: member[j] });
                        arr2.push({ PAN1: member[j] });
                    }
                    var strPan1 = { $or: guardpan1 };
                    var strPan2 = { $or: guardpan2 };
                    folioc.find(strPan1).distinct("FOLIOCHK", function (err, member1) {
                        foliok.find(strPan2).distinct("ACNO", function (err, member2) {
                            var alldata = member1.concat(member2);
                            for (var j = 0; j < alldata.length; j++) {
                                arr1.push({ FOLIO_NO: alldata[j] });
                                arr2.push({ TD_ACNO: alldata[j] });
                            }
                            var strFolio = { $or: arr1 };
                            var strFolio1 = { $or: arr2 };
                            pipeline = [  ///trans_cams
                                { $match: { $and: [{ TRADDATE: { $gte: new Date(moment(firstdate).format("YYYY-MM-DD")), $lte: new Date(moment(seconddate).format("YYYY-MM-DD")) } }, strFolio] } },

                                { $group: { _id: { TAX_STATUS: "$TAX_STATUS", TRXNNO: "$TRXNNO", INV_NAME: "$INV_NAME", PAN: "$PAN", TRXN_NATUR: "$TRXN_NATUR", TRXN_TYPE_: "$TRXN_TYPE_", FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
                                { $lookup: { from: 'folio_cams', localField: '_id.FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
                                { $project: { _id: 0, GUARD_NAME: "$detail.GUARD_NAME", GUARD_PAN: "$detail.GUARD_PAN", PER_STATUS: "$_id.TAX_STATUS", TRXNNO: "$_id.TRXNNO", INVNAME: "$_id.INV_NAME", PAN: "$_id.PAN", TRXN_NATUR: "$_id.TRXN_NATUR", TD_TRTYPE: "$_id.TRXN_TYPE_", FOLIO_NO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", amount_str: "$_id.AMOUNT", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } } } },
                                { $sort: { TRADDATE: -1 } }
                            ]
                            pipeline1 = [  ///trans_karvy
                                { $match: { $and: [{ TD_PRDT: { $gte: new Date(moment(firstdate).format("YYYY-MM-DD")), $lte: new Date(moment(seconddate).format("YYYY-MM-DD")) } }, strFolio1] } },

                                { $group: { _id: { STATUS: "$STATUS", TD_TRNO: "$TD_TRNO", INVNAME: "$INVNAME", PAN1: "$PAN1", TRDESC: "$TRDESC", TD_TRTYPE: "$TD_TRTYPE", TD_ACNO: "$TD_ACNO", FUNDDESC: "$FUNDDESC", TD_AMT: "$TD_AMT", TD_PRDT: "$TD_PRDT" } } },
                                { $lookup: { from: 'folio_karvy', localField: '_id.TD_ACNO', foreignField: 'ACNO', as: 'detail' } },
                                { $project: { _id: 0, GUARD_NAME: "$detail.GUARDIANN0", GUARD_PAN: "$detail.GUARDPANNO", PER_STATUS: "$_id.STATUS", TRXNNO: "$_id.TD_TRNO", INVNAME: "$_id.INVNAME", PAN: "$_id.PAN1", TRXN_NATUR: "$_id.TRDESC", TD_TRTYPE: "$_id.TD_TRTYPE", FOLIO_NO: "$_id.TD_ACNO", SCHEME: "$_id.FUNDDESC", amount_str: "$_id.TD_AMT", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_PRDT" } }, month: { $month: ('$_id.TD_PRDT') }, year: { $year: ('$_id.TD_PRDT') } } },
                                { $sort: { TRADDATE: -1 } }
                            ]

                            transc.aggregate(pipeline, (err, camsdata) => {
                                transk.aggregate(pipeline1, (err, karvydata) => {
                                    if (karvydata != 0 || camsdata != 0) {
                                        resdata = {
                                            status: 200,
                                            message: 'Successfull',
                                            data: karvydata
                                        }
                                        var datacon = karvydata.concat(camsdata);
                                        datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                                            .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                                            .reverse().map(JSON.parse);
                                        var newdata1 = datacon.map(item => {
                                            return [JSON.stringify(item), item]
                                        }); // creates array of array
                                        var maparr1 = new Map(newdata1); // create key value pair from array of array
                                        datacon = [...maparr1.values()];//converting back to array from mapobject 

                                        for (var i = 0; i < datacon.length; i++) {
                                            if (Math.sign(datacon[i]['AMOUNT']) === -1) {
                                                datacon[i]['TRXN_NATUR'] = "SIPR";
                                                datacon[i]['AMOUNT'] = datacon[i]['AMOUNT'];
                                                datacon[i]['amount_str'] = (datacon[i]['amount_str']).toLocaleString('en-IN');
                                            }
                                            if ((datacon[i]['TD_TRTYPE'].match(/Redemption/)) && (datacon[i]['TRXN_NATUR'].match(/Systematic.*/))) {
                                                datacon[i]['TRXN_NATUR'] = "SWP";
                                            }
                                            if (datacon[i]['TRXN_NATUR'] === "Redemption" || datacon[i]['TRXN_NATUR'] === "FUL" || datacon[i]['TRXN_NATUR'] === "SIPR" ||
                                                datacon[i]['TRXN_NATUR'] === "Full Redemption" || datacon[i]['TRXN_NATUR'] === "Partial Redemption" || datacon[i]['TRXN_NATUR'] === "RED") {
                                                datacon[i]['TRXN_NATUR'] = "RED";
                                                datacon[i]['AMOUNT'] = -datacon[i]['AMOUNT'];
                                                datacon[i]['amount_str'] = "-" + (datacon[i]['amount_str']).toLocaleString('en-IN');
                                            } if (datacon[i]['TRXN_NATUR'].match(/Systematic Investment.*/) ||
                                                datacon[i]['TRXN_NATUR'].match(/Systematic - Instalment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - To.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-NSE.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Physical.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-Normal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic (ECS).*/)) {
                                                datacon[i]['TRXN_NATUR'] = "SIP";
                                                datacon[i]['AMOUNT'] = datacon[i]['AMOUNT'];
                                                datacon[i]['amount_str'] = (datacon[i]['amount_str']).toLocaleString('en-IN');
                                            } if (datacon[i]['TRXN_NATUR'] === "Systematic Withdrawal") {
                                                datacon[i]['TRXN_NATUR'] = "SWP";
                                                datacon[i]['AMOUNT'] = -datacon[i]['AMOUNT'];
                                                datacon[i]['amount_str'] = "-" + (datacon[i]['amount_str']).toLocaleString('en-IN');
                                            } if (datacon[i]['TRXN_NATUR'].match(/Systematic - From.*/) || datacon[i]['TRXN_NATUR'] === "S T P" || datacon[i]['TRXN_NATUR'] === "S T P In") {
                                                datacon[i]['TRXN_NATUR'] = "STP";
                                                datacon[i]['AMOUNT'] = datacon[i]['AMOUNT'];
                                                datacon[i]['amount_str'] = (datacon[i]['amount_str']).toLocaleString('en-IN');
                                            } if (datacon[i]['TRXN_NATUR'] === "Lateral Shift Out" || datacon[i]['TRXN_NATUR'] === "Switchout"
                                                || datacon[i]['TRXN_NATUR'] === "Transfer-Out" || datacon[i]['TRXN_NATUR'] === "Transmission Out"
                                                || datacon[i]['TRXN_NATUR'] === "Switch Over Out" || datacon[i]['TRXN_NATUR'] === "LTOP"
                                                || datacon[i]['TRXN_NATUR'] === "LTOF" || datacon[i]['TRXN_NATUR'] === "Partial Switch Out" ||
                                                datacon[i]['TRXN_NATUR'] === "Full Switch Out") {
                                                datacon[i]['TRXN_NATUR'] = "Switch Out";
                                                datacon[i]['AMOUNT'] = -datacon[i]['AMOUNT'];
                                                datacon[i]['amount_str'] = "-" + (datacon[i]['amount_str']).toLocaleString('en-IN');
                                            } if (datacon[i]['TRXN_NATUR'] === "Lateral Shift In" || datacon[i]['TRXN_NATUR'] === "Switch-In"
                                                || datacon[i]['TRXN_NATUR'] === "Transfer-In" || datacon[i]['TRXN_NATUR'] === "Switch Over In"
                                                || datacon[i]['TRXN_NATUR'] === "LTIN" || datacon[i]['TRXN_NATUR'] === "LTIA") {
                                                datacon[i]['TRXN_NATUR'] = "Switch In";
                                                datacon[i]['amount_str'] = (datacon[i]['amount_str']).toLocaleString('en-IN');
                                            } if (datacon[i]['TRXN_NATUR'] === "Dividend Reinvest" ||
                                                datacon[i]['TRXN_NATUR'] === "Dividend Paid"
                                                || datacon[i]['TRXN_NATUR'] === "Div. Reinvestment") {
                                                datacon[i]['TRXN_NATUR'] = "Dividend";
                                            } if (datacon[i]['TRXN_NATUR'] === "Gross Dividend") {
                                                datacon[i]['TRXN_NATUR'] = "Dividend Payout";
                                            } if (datacon[i]['TRXN_NATUR'] === "Consolidation In") {
                                                datacon[i]['TRXN_NATUR'] = "Con In";
                                            } if (datacon[i]['TRXN_NATUR'] === "Consolidation Out") {
                                                datacon[i]['TRXN_NATUR'] = "Con Out";
                                            } if (datacon[i]['TRXN_NATUR'] === "Consolidation Out") {
                                                datacon[i]['TRXN_NATUR'] = "Con Out";
                                            } if (datacon[i]['TRXN_NATUR'] === "Purchase" || datacon[i]['TRXN_NATUR'] === "NEW" ||
                                                datacon[i]['TRXN_NATUR'] === "Initial Allotment"
                                                || datacon[i]['TRXN_NATUR'] === "NEWPUR" || datacon[i]['TRXN_NATUR'] === "Fresh Purchase") {
                                                datacon[i]['TRXN_NATUR'] = "Purchase";
                                                datacon[i]['amount_str'] = (datacon[i]['amount_str']).toLocaleString('en-IN');
                                            } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "ADD" ||
                                                datacon[i]['TRXN_NATUR'] === "ADDPUR") {
                                                datacon[i]['TRXN_NATUR'] = "Add. Purchase";
                                                datacon[i]['amount_str'] = (datacon[i]['amount_str']).toLocaleString('en-IN');
                                            } if (datacon[i]['PER_STATUS'] === "On Behalf Of Minor" || datacon[i]['PER_STATUS'] === "MINOR" || datacon[i]['PER_STATUS'] === "On Behalf of Minor") {
                                                datacon[i]['PER_STATUS'] = "Minor";
                                                datacon[i]['PAN'] = "";
                                            } if (datacon[i]['PER_STATUS'] === "INDIVIDUAL" || datacon[i]['PER_STATUS'] === "Resident Individual") {
                                                datacon[i]['PER_STATUS'] = "Individual";
                                            } if (datacon[i]['PER_STATUS'] === "HINDU UNDIVIDED FAMI") {
                                                datacon[i]['PER_STATUS'] = "HUF";
                                            }
                                            if (datacon[i]['GUARD_NAME']) {
                                                datacon[i]['GUARD_NAME'] = datacon[i]['GUARD_NAME'][0];
                                            } if (datacon[i]['GUARD_PAN']) {
                                                datacon[i]['GUARD_PAN'] = datacon[i]['GUARD_PAN'][0];
                                            } if (datacon[i]['GUARD_NAME'] === null && datacon[i]['GUARD_PAN'] === null) {
                                                datacon[i]['GUARD_NAME'] = "";
                                                datacon[i]['GUARD_PAN'] = "";
                                            }

                                        }

                                        resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime());
                                        res.json(resdata);
                                        return resdata;
                                    } else {
                                        resdata = {
                                            status: 400,
                                            message: 'Data not found',

                                        }
                                        res.json(resdata);
                                        return resdata;
                                    }

                                });
                            });
                        });
                    });
                } else {
                    pipeline = [  ///trans_cams
                        { $match: { $and: [{ TRADDATE: { $gte: new Date(moment(firstdate).format("YYYY-MM-DD")), $lte: new Date(moment(seconddate).format("YYYY-MM-DD")) } }, { PAN: req.body.pan }] } },

                        { $group: { _id: { TAX_STATUS: "$TAX_STATUS", TRXNNO: "$TRXNNO", INV_NAME: "$INV_NAME", PAN: "$PAN", TRXN_NATUR: "$TRXN_NATUR", TRXN_TYPE_: "$TRXN_TYPE_", FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
                        { $lookup: { from: 'folio_cams', localField: '_id.FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
                        { $project: { _id: 0, GUARD_NAME: "$detail.GUARD_NAME", GUARD_PAN: "$detail.GUARD_PAN", PER_STATUS: "$_id.TAX_STATUS", TRXNNO: "$_id.TRXNNO", INVNAME: "$_id.INV_NAME", PAN: "$_id.PAN", TRXN_NATUR: "$_id.TRXN_NATUR", TD_TRTYPE: "$_id.TRXN_TYPE_", FOLIO_NO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", amount_str: "$_id.AMOUNT", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } } } },
                        { $sort: { TRADDATE: -1 } }
                    ]
                    pipeline1 = [  ///trans_karvy
                        { $match: { $and: [{ TD_TRDT: { $gte: new Date(moment(firstdate).format("YYYY-MM-DD")), $lte: new Date(moment(seconddate).format("YYYY-MM-DD")) } }, { PAN1: req.body.pan }] } },

                        { $group: { _id: { STATUS: "$STATUS", TD_TRNO: "$TD_TRNO", INVNAME: "$INVNAME", PAN1: "$PAN1", TRDESC: "$TRDESC", TD_TRTYPE: "$TD_TRTYPE", TD_ACNO: "$TD_ACNO", FUNDDESC: "$FUNDDESC", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
                        { $lookup: { from: 'folio_karvy', localField: '_id.TD_ACNO', foreignField: 'ACNO', as: 'detail' } },
                        { $project: { _id: 0, GUARD_NAME: "$detail.GUARDIANN0", GUARD_PAN: "$detail.GUARDPANNO", PER_STATUS: "$_id.STATUS", TRXNNO: "$_id.TD_TRNO", INVNAME: "$_id.INVNAME", PAN: "$_id.PAN1", TRXN_NATUR: "$_id.TRDESC", TD_TRTYPE: "$_id.TD_TRTYPE", FOLIO_NO: "$_id.TD_ACNO", SCHEME: "$_id.FUNDDESC", amount_str: "$_id.TD_AMT", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } }, month: { $month: ('$_id.TD_TRDT') }, year: { $year: ('$_id.TD_TRDT') } } },
                        { $sort: { TRADDATE: -1 } }
                    ]


                    transc.aggregate(pipeline, (err, camsdata) => {
                        transk.aggregate(pipeline1, (err, karvydata) => {
                            if (karvydata.length != 0 || camsdata.length != 0) {
                                resdata = {
                                    status: 200,
                                    message: 'Successfull',
                                    data: karvydata
                                }

                                datacon = karvydata.concat(camsdata)
                                datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                                    .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                                    .reverse().map(JSON.parse);
                                for (var i = 0; i < datacon.length; i++) {
                                    if (Math.sign(datacon[i]['AMOUNT']) === -1) {
                                        datacon[i]['TRXN_NATUR'] = "SIPR";
                                        datacon[i]['AMOUNT'] = datacon[i]['AMOUNT'];
                                        datacon[i]['amount_str'] = (datacon[i]['amount_str']).toLocaleString('en-IN');
                                    }
                                    console.log("nature=", datacon[i]['TD_TRTYPE'], datacon[i]['TRXN_NATUR'])
                                    if ((datacon[i]['TD_TRTYPE'].match(/Redemption/)) && (datacon[i]['TRXN_NATUR'].match(/Systematic.*/))) {
                                        datacon[i]['TRXN_NATUR'] = "SWP";
                                    }
                                    if (datacon[i]['TRXN_NATUR'] === "Redemption" || datacon[i]['TRXN_NATUR'] === "FUL" || datacon[i]['TRXN_NATUR'] === "SIPR" ||
                                        datacon[i]['TRXN_NATUR'] === "Full Redemption" || datacon[i]['TRXN_NATUR'] === "Partial Redemption" || datacon[i]['TRXN_NATUR'] === "RED") {
                                        datacon[i]['TRXN_NATUR'] = "RED";
                                        datacon[i]['AMOUNT'] = -datacon[i]['AMOUNT'];
                                        datacon[i]['amount_str'] = "-" + (datacon[i]['amount_str']).toLocaleString('en-IN');
                                    } if (datacon[i]['TRXN_NATUR'].match(/Systematic Investment.*/) ||
                                        datacon[i]['TRXN_NATUR'].match(/Systematic - Instalment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - To.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-NSE.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Physical.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-Normal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic (ECS).*/)) {
                                        datacon[i]['TRXN_NATUR'] = "SIP";
                                        datacon[i]['AMOUNT'] = datacon[i]['AMOUNT'];
                                        datacon[i]['amount_str'] = (datacon[i]['amount_str']).toLocaleString('en-IN');
                                    } if (datacon[i]['TRXN_NATUR'] === "Systematic Withdrawal") {
                                        datacon[i]['TRXN_NATUR'] = "SWP";
                                        datacon[i]['AMOUNT'] = -datacon[i]['AMOUNT'];
                                        datacon[i]['amount_str'] = "-" + (datacon[i]['amount_str']).toLocaleString('en-IN');
                                    } if (datacon[i]['TRXN_NATUR'].match(/Systematic - From.*/) || datacon[i]['TRXN_NATUR'] === "S T P" || datacon[i]['TRXN_NATUR'] === "S T P In") {
                                        datacon[i]['TRXN_NATUR'] = "STP";
                                        datacon[i]['AMOUNT'] = datacon[i]['AMOUNT'];
                                        datacon[i]['amount_str'] = (datacon[i]['amount_str']).toLocaleString('en-IN');
                                    } if (datacon[i]['TRXN_NATUR'] === "Lateral Shift Out" || datacon[i]['TRXN_NATUR'] === "Switchout"
                                        || datacon[i]['TRXN_NATUR'] === "Transfer-Out" || datacon[i]['TRXN_NATUR'] === "Transmission Out"
                                        || datacon[i]['TRXN_NATUR'] === "Switch Over Out" || datacon[i]['TRXN_NATUR'] === "LTOP"
                                        || datacon[i]['TRXN_NATUR'] === "LTOF" || datacon[i]['TRXN_NATUR'] === "Partial Switch Out" ||
                                        datacon[i]['TRXN_NATUR'] === "Full Switch Out") {
                                        datacon[i]['TRXN_NATUR'] = "Switch Out";
                                        datacon[i]['AMOUNT'] = -datacon[i]['AMOUNT'];
                                        datacon[i]['amount_str'] = "-" + (datacon[i]['amount_str']).toLocaleString('en-IN');
                                    } if (datacon[i]['TRXN_NATUR'] === "Lateral Shift In" || datacon[i]['TRXN_NATUR'] === "Switch-In"
                                        || datacon[i]['TRXN_NATUR'] === "Transfer-In" || datacon[i]['TRXN_NATUR'] === "Switch Over In"
                                        || datacon[i]['TRXN_NATUR'] === "LTIN" || datacon[i]['TRXN_NATUR'] === "LTIA") {
                                        datacon[i]['TRXN_NATUR'] = "Switch In";
                                        datacon[i]['amount_str'] = (datacon[i]['amount_str']).toLocaleString('en-IN');
                                    } if (datacon[i]['TRXN_NATUR'] === "Dividend Reinvest" ||
                                        datacon[i]['TRXN_NATUR'] === "Dividend Paid"
                                        || datacon[i]['TRXN_NATUR'] === "Div. Reinvestment") {
                                        datacon[i]['TRXN_NATUR'] = "Dividend";
                                    } if (datacon[i]['TRXN_NATUR'] === "Gross Dividend") {
                                        datacon[i]['TRXN_NATUR'] = "Dividend Payout";
                                    } if (datacon[i]['TRXN_NATUR'] === "Consolidation In") {
                                        datacon[i]['TRXN_NATUR'] = "Con In";
                                    } if (datacon[i]['TRXN_NATUR'] === "Consolidation Out") {
                                        datacon[i]['TRXN_NATUR'] = "Con Out";
                                    } if (datacon[i]['TRXN_NATUR'] === "Consolidation Out") {
                                        datacon[i]['TRXN_NATUR'] = "Con Out";
                                    } if (datacon[i]['TRXN_NATUR'] === "Purchase" || datacon[i]['TRXN_NATUR'] === "NEW" ||
                                        datacon[i]['TRXN_NATUR'] === "Initial Allotment"
                                        || datacon[i]['TRXN_NATUR'] === "NEWPUR" || datacon[i]['TRXN_NATUR'] === "Fresh Purchase") {
                                        datacon[i]['TRXN_NATUR'] = "Purchase";
                                        datacon[i]['amount_str'] = (datacon[i]['amount_str']).toLocaleString('en-IN');
                                    } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "ADD" ||
                                        datacon[i]['TRXN_NATUR'] === "ADDPUR") {
                                        datacon[i]['TRXN_NATUR'] = "Add. Purchase";
                                        datacon[i]['amount_str'] = (datacon[i]['amount_str']).toLocaleString('en-IN');
                                    } if (datacon[i]['PER_STATUS'] === "On Behalf Of Minor" || datacon[i]['PER_STATUS'] === "MINOR" || datacon[i]['PER_STATUS'] === "On Behalf of Minor") {
                                        datacon[i]['PER_STATUS'] = "Minor";
                                        datacon[i]['PAN'] = "";
                                    } if (datacon[i]['PER_STATUS'] === "INDIVIDUAL" || datacon[i]['PER_STATUS'] === "Resident Individual") {
                                        datacon[i]['PER_STATUS'] = "Individual";
                                    } if (datacon[i]['PER_STATUS'] === "HINDU UNDIVIDED FAMI") {
                                        datacon[i]['PER_STATUS'] = "HUF";
                                    } if (datacon[i]['GUARD_NAME']) {
                                        datacon[i]['GUARD_NAME'] = datacon[i]['GUARD_NAME'][0];
                                    } if (datacon[i]['GUARD_PAN']) {
                                        datacon[i]['GUARD_PAN'] = datacon[i]['GUARD_PAN'][0];
                                    } if (datacon[i]['GUARD_NAME'] === null && datacon[i]['GUARD_PAN'] === null) {
                                        datacon[i]['GUARD_NAME'] = "";
                                        datacon[i]['GUARD_PAN'] = "";
                                    }
                                }
                                resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime())
                                res.json(resdata)
                                return resdata;
                            } else {
                                resdata = {
                                    status: 400,
                                    message: 'Data not found',
                                }
                                res.json(resdata)
                                return resdata;
                            }

                        });
                    });
                }
            });
        }
    } catch (err) {
        console.log(err)
    }
})


app.post("/api/gettaxsavinguserwiseold", function (req, res) {
    try {
        var member = ""; var guardpan1 = []; var guardpan2 = [];
        var arr1 = []; var arr2 = []; var arr3 = []; var alldata = []; var arrFolio = []; var arrName = [];
        let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        if (req.body.fromyear === "") {
            resdata = {
                status: 400,
                message: 'Please enter from year',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.toyear === "") {
            resdata = {
                status: 400,
                message: 'Please enter to year',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.pan === "") {
            resdata = {
                status: 400,
                message: 'Please enter pan',
            }
            res.json(resdata);
            return resdata;
        } else if (!regex.test(req.body.pan)) {
            resdata = {
                status: 400,
                message: 'Please enter valid pan',
            }
            res.json(resdata);
            return resdata;
        } else {
            var amount = 0;
            var balance = 0; var arramt = [];
            var yer = req.body.fromyear;
            var secyer = req.body.toyear;
            yer = yer + "-04-01";
            secyer = secyer + "-03-31"
            family.find({ adminPan: { $regex: `^${req.body.pan}.*`, $options: 'i' } }, { _id: 0, memberPan: 1 }, function (err, member) {
                if (member != "") {
                    arramt = []; index = 0;
                    member = [...new Set(member.map(({ memberPan }) => memberPan.toUpperCase()))];
                    guardpan1.push({ GUARD_PAN: req.body.pan.toUpperCase() });
                    guardpan2.push({ GUARDPANNO: req.body.pan.toUpperCase() });
                    arr1.push({ PAN: req.body.pan.toUpperCase() });
                    arr2.push({ PAN1: req.body.pan.toUpperCase() });
                    arr3.push({ IT_PAN_NO1: req.body.pan.toUpperCase() });
                    for (var j = 0; j < member.length; j++) {
                        guardpan1.push({ GUARD_PAN: member[j] });
                        guardpan2.push({ GUARDPANNO: member[j] });
                        arr1.push({ PAN: member[j] });
                        arr2.push({ PAN1: req.body.pan.toUpperCase() });
                        arr3.push({ IT_PAN_NO1: req.body.pan.toUpperCase() });
                    }
                    var strPan1 = { $or: guardpan1 };
                    var strPan2 = { $or: guardpan2 };
                    folioc.find(strPan1).distinct("FOLIOCHK", function (err, member1) {
                        foliok.find(strPan2).distinct("ACNO", function (err, member2) {
                            var alldata = member1.concat(member2);
                            for (var j = 0; j < alldata.length; j++) {
                                arr1.push({ FOLIO_NO: alldata[j] });
                                arr2.push({ TD_ACNO: alldata[j] });
                                arr3.push({ FOLIO_NO: alldata[j] });
                            }
                            var strFolio = { $or: arr1 };
                            var strFolio1 = { $or: arr2 };
                            var strFolio2 = { $or: arr3 };
                            pipeline = [  ///trans_cams
                                // { $match: { $and: [strFolio, { SCHEME: /Tax/ }, { $or: [{ TRXN_NATUR: { $not: /^Lateral Shift Out.*/ } }, { TRXN_NATUR: { $not: /^Redemption.*/ } }, { TRXN_NATUR: { $not: /^Gross Dividend.*/ } }, { TRXN_NATUR: { $not: /^Dividend Paid.*/ } }, { TRXN_NATUR: { $not: /^Switchout.*/ } }, { TRXN_NATUR: { $not: /^Transfer-Out.*/ } }] }, { TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                                { $match: { $and: [strFolio, { SCHEME: /Tax/ }, { TRXN_NATUR: { $not: /^Lateral Shift Out.*/ } }, { TRXN_NATUR: { $not: /^Redemption.*/ } }, { TRXN_NATUR: { $not: /^Gross Dividend.*/ } }, { TRXN_NATUR: { $not: /^Dividend Paid.*/ } }, { TRXN_NATUR: { $not: /^Switchout.*/ } }, { TRXN_NATUR: { $not: /^Transfer-Out.*/ } }, { AMOUNT: { $gte: 0 } }, { TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                                { $group: { _id: { TAX_STATUS: "$TAX_STATUS", TRXNNO: "$TRXNNO", INV_NAME: "$INV_NAME", PAN: "$PAN", SCHEME: "$SCHEME", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" }, } },
                                { $project: { _id: 0, PER_STATUS: "$_id.TAX_STATUS", TRXNNO: "$_id.TRXNNO", INVNAME: "$_id.INV_NAME", PAN: "$_id.PAN", SCHEME: "$_id.SCHEME", TRXN_NATUR: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } } } },
                                { $lookup: { from: 'folio_cams', localField: 'FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
                                { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                                { $project: { detail: 0, _id: 0, TAX_STATUS: 0, FOLIOCHK: 0, AC_NO: 0, FOLIO_DATE: 0, PRODUCT: 0, SCH_NAME: 0, AMC_CODE: 0, BANK_NAME: 0, HOLDING_NA: 0, IFSC_CODE: 0, JNT_NAME1: 0, JNT_NAME2: 0, JOINT1_PAN: 0, NOM2_NAME: 0, NOM3_NAME: 0, NOM_NAME: 0, PRCODE: 0, HOLDING_NATURE: 0, PAN_NO: 0, INV_NAME: 0, EMAIL: 0 } },
                                { $sort: { TRADDATE: -1 } }
                            ]
                            pipeline1 = [  ///trans_karvy                                             
                                { $match: { $and: [strFolio1, { $or: [{ FUNDDESC: /TAX/ }, { FUNDDESC: /Tax Saver/ }, { FUNDDESC: /Long Term Equity Fund/ }, { FUNDDESC: /IDBI Equity Advantage Fund/ }, { FUNDDESC: /Sundaram Diversified Equity Fund/ }] }, { TD_AMT: { $gte: 0 } }, { TRDESC: { $not: /^Consolidation Out.*/ } }, { TRDESC: { $not: /^Redemption.*/ } }, { TRDESC: { $not: /^Rejection.*/ } }, { TRDESC: { $not: /^Gross Dividend.*/ } }, { TRDESC: { $not: /^Switch Over Out.*/ } }, { TRDESC: { $not: /^Dividend Paid.*/ } }, { TRDESC: { $not: /^Switchout.*/ } }, { TRDESC: { $not: /^Transfer-Out.*/ } }, { TRDESC: { $not: /^Lateral Shift Out.*/ } }, { TD_TRDT: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                                { $group: { _id: { STATUS: "$STATUS", TD_TRNO: "$TD_TRNO", INVNAME: "$INVNAME", PAN1: "$PAN1", FUNDDESC: "$FUNDDESC", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
                                { $project: { _id: 0, PER_STATUS: "$_id.STATUS", TRXNNO: "$_id.TD_TRNO", INVNAME: "$_id.INVNAME", PAN: "$_id.PAN1", SCHEME: "$_id.FUNDDESC", TRXN_NATUR: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } } } },
                                { $lookup: { from: 'folio_karvy', localField: 'FOLIO_NO', foreignField: 'ACNO', as: 'detail' } },
                                { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                                { $project: { detail: 0, _id: 0, STATUS: 0, PRCODE: 0, STATUSDESC: 0, ACNO: 0, BNKACNO: 0, BNKACTYPE: 0, FUNDDESC: 0, NOMINEE: 0, MODEOFHOLD: 0, JTNAME2: 0, FUND: 0, EMAIL: 0, BNAME: 0, PANGNO: 0, JTNAME1: 0, PAN2: 0 } },
                                { $sort: { TRADDATE: -1 } }
                            ]
                            pipeline2 = [  ///trans_franklin
                                // { $match: { $and: [strFolio2, { $or: [{ SCHEME_NA1: /TAX/ }, { SCHEME_NA1: /Taxshield/ }] }, { AMOUNT: { $gte: 0 } }, { $or: [{ TRXN_TYPE: { $not: /^SIPR.*/ } }, { TRXN_TYPE: { $not: /^TO.*/ } }, { TRXN_TYPE: { $not: /^DP.*/ } }, { TRXN_TYPE: { $not: /^RED.*/ } }, { TRXN_TYPE: { $not: /^REDR.*/ } }, { TRXN_TYPE: { $not: /^Gross Dividend.*/ } }, { TRXN_TYPE: { $not: /^Dividend Paid.*/ } }, { TRXN_TYPE: { $not: /^SWOF.*/ } }, { TRXN_TYPE: { $not: /^Transfer-Out.*/ } }, { TRXN_TYPE: { $not: /^Lateral Shift Out.*/ } }] }, { TRXN_DATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                                { $match: { $and: [strFolio2, { SCHEME_NA1: /TAX/ }, { SCHEME_NA1: /Taxshield/ }, { AMOUNT: { $gte: 0 } }, { TRXN_TYPE: { $not: /^SIPR.*/ } }, { TRXN_TYPE: { $not: /^TO.*/ } }, { TRXN_TYPE: { $not: /^DP.*/ } }, { TRXN_TYPE: { $not: /^RED.*/ } }, { TRXN_TYPE: { $not: /^REDR.*/ } }, { TRXN_TYPE: { $not: /^Gross Dividend.*/ } }, { TRXN_TYPE: { $not: /^Dividend Paid.*/ } }, { TRXN_TYPE: { $not: /^SWOF.*/ } }, { TRXN_TYPE: { $not: /^Transfer-Out.*/ } }, { TRXN_TYPE: { $not: /^Lateral Shift Out.*/ } }, { TRXN_DATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                                { $group: { _id: { SOCIAL_S18: "$SOCIAL_S18", TRXN_NO: "$TRXN_NO", INVESTOR_2: "$INVESTOR_2", IT_PAN_NO1: "$IT_PAN_NO1", SCHEME_NA1: "$SCHEME_NA1", TRXN_TYPE: "$TRXN_TYPE", FOLIO_NO: "$FOLIO_NO", AMOUNT: "$AMOUNT", TRXN_DATE: "$TRXN_DATE" } } },
                                { $project: { _id: 0, PER_STATUS: "$_id.SOCIAL_S18", TRXNNO: "$_id.TRXN_NO", INVNAME: "$_id.INVESTOR_2", PAN: "$_id.IT_PAN_NO1", SCHEME: "$_id.SCHEME_NA1", TRXN_NATUR: "$_id.TRXN_TYPE", FOLIO_NO: "$_id.FOLIO_NO", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRXN_DATE" } } } },
                                { $lookup: { from: 'folio_franklin', localField: 'FOLIO_NO', foreignField: 'FOLIO_NO', as: 'detail' } },
                                { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                                { $project: { detail: 0, _id: 0, TAX_STATUS: 0, FOLIO_NO: 0, PERSONAL_9: 0, ACCNT_NO: 0, AC_TYPE: 0, ADDRESS1: 0, BANK_CODE: 0, BANK_NAME: 0, COMP_CODE: 0, D_BIRTH: 0, EMAIL: 0, HOLDING_T6: 0, F_NAME: 0, IFSC_CODE: 0, JOINT_NAM1: 0, JOINT_NAM2: 0, KYC_ID: 0, NEFT_CODE: 0, NOMINEE1: 0, PBANK_NAME: 0, PANNO2: 0, PANNO1: 0, PHONE_RES: 0, SOCIAL_ST7: 0 } },
                                { $sort: { TRADDATE: -1 } }
                            ]
                            transc.aggregate(pipeline, (err, camsdata) => {
                                transk.aggregate(pipeline1, (err, karvydata) => {
                                    transf.aggregate(pipeline2, (err, frankdata) => {
                                        if (frankdata.length != 0 || karvydata.length != 0 || camsdata.length != 0) {
                                            resdata = {
                                                status: 200,
                                                message: 'Successfull',
                                                data: frankdata
                                            }

                                            var datacon = frankdata.concat(karvydata.concat(camsdata))

                                            datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                                                .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                                                .reverse().map(JSON.parse);
                                            var newdata1 = datacon.map(item => {
                                                return [JSON.stringify(item), item]
                                            }); // creates array of array
                                            var maparr1 = new Map(newdata1); // create key value pair from array of array
                                            datacon = [...maparr1.values()];//converting back to array from mapobject 
                                            datacon = datacon.map(function (obj) {
                                                if (obj['GUARDIANN0']) {
                                                    obj['GUARD_NAME'] = obj['GUARDIANN0']; // Assign new key
                                                    obj['GUARD_PAN'] = obj['GUARDPANNO'];
                                                    // Delete old key
                                                    delete obj['GUARDIANN0'];
                                                    delete obj['GUARDPANNO'];
                                                } else if ((obj['GUARDIANN0']) === "") {
                                                    obj['GUARD_NAME'] = obj['GUARDIANN0']; // Assign new key
                                                    obj['GUARD_PAN'] = obj['GUARDPANNO'];
                                                    delete obj['GUARDIANN0'];
                                                    delete obj['GUARDPANNO'];
                                                }
                                                if (obj['GUARDIAN20'] === "") {
                                                    obj['GUARD_NAME'] = obj['GUARDIAN20']; // Assign new key
                                                    // Delete old key
                                                    delete obj['GUARDIAN20'];
                                                } else if ((obj['GUARDIAN20']) === "") {
                                                    obj['GUARD_NAME'] = obj['GUARDIAN20']; // Assign new key
                                                    delete obj['GUARDIAN20'];
                                                }
                                                return obj;
                                            });
                                            //  index=datacon.length-1;
                                            // var fullname = [item.firstname,item.lastname].join(" ");
                                            // arramt=[];
                                            // var avc = 0
                                            for (var i = 0; i < datacon.length; i++) {

                                                //     arr1.map(function(item){

                                                //     if(datacon[i]['PAN'] === item.PAN){
                                                //         avc = parseFloat(datacon[i]['AMOUNT'])+parseFloat(avc);
                                                //         arramt.push(avc);
                                                //     }
                                                //     // console.log("arramt",arramt);
                                                //     });   

                                                // let map = new Map();
                                                // map.set("PAN", datacon[i]['PAN']);
                                                //  arramt.push(datacon[i]['AMOUNT']);
                                                // console.log(map.get("PAN"));
                                                if (datacon[i]['TRXN_NATUR'].match(/Systematic Investment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Withdrawal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - Instalment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - To.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-NSE.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Physical.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-Normal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic (ECS).*/)) {
                                                    datacon[i]['TRXN_NATUR'] = "SIP";
                                                } if (datacon[i]['TRXN_NATUR'].match(/Systematic - From.*/)) {
                                                    datacon[i]['TRXN_NATUR'] = "STP";
                                                } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "Fresh Purchase") {
                                                    datacon[i]['TRXN_NATUR'] = "Purchase";
                                                } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "ADD" ||
                                                    datacon[i]['TRXN_NATUR'] === "ADDPUR") {
                                                    datacon[i]['TRXN_NATUR'] = "Add. Purchase";
                                                } if (datacon[i]['TRXN_NATUR'] === "Purchase" || datacon[i]['TRXN_NATUR'] === "NEW" || datacon[i]['TRXN_NATUR'] === "NFO Purchase" ||
                                                    datacon[i]['TRXN_NATUR'] === "Initial Allotment" || datacon[i]['TRXN_NATUR'] === "NEWPUR") {
                                                    datacon[i]['TRXN_NATUR'] = "Purchase";
                                                } if (datacon[i]['TRXN_NATUR'] === "Lateral Shift In" || datacon[i]['TRXN_NATUR'] === "Switch-In"
                                                    || datacon[i]['TRXN_NATUR'] === "Transfer-In" || datacon[i]['TRXN_NATUR'] === "Switch Over In"
                                                    || datacon[i]['TRXN_NATUR'] === "LTIN" || datacon[i]['TRXN_NATUR'] === "LTIA") {
                                                    datacon[i]['TRXN_NATUR'] = "Switch In";
                                                } if (datacon[i]['PER_STATUS'] === "On Behalf Of Minor" || datacon[i]['PER_STATUS'] === "MINOR" || datacon[i]['PER_STATUS'] === "On Behalf of Minor") {
                                                    datacon[i]['PER_STATUS'] = "Minor";
                                                    datacon[i]['PAN'] = "";
                                                } if (datacon[i]['PER_STATUS'] === "INDIVIDUAL") {
                                                    datacon[i]['PER_STATUS'] = "Individual";
                                                } if (datacon[i]['PER_STATUS'] === "HINDU UNDIVIDED FAMI") {
                                                    datacon[i]['PER_STATUS'] = "HUF";
                                                }

                                            }
                                            //     console.log(arramt) 
                                            //    for(var j=0;j<arramt.length;j++){
                                            //        amount=arramt[j]+amount;
                                            //    }
                                            //    datacon[index]['TOTAL']=amount;
                                            resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime());
                                            res.json(resdata);
                                            return resdata;
                                        } else {
                                            resdata = {
                                                status: 400,
                                                message: 'Data not found',
                                            }
                                            res.json(resdata);
                                            return resdata;
                                        }

                                    });
                                });
                            });
                        });
                    });
                } else {
                    arramt = []; index = 0;
                    pipeline = [  ///trans_cams
                        // { $match: { $and: [{ PAN: req.body.pan }, { SCHEME: /Tax/ }, { $or: [{ TRXN_NATUR: { $not: /^Lateral Shift Out.*/ } }, { TRXN_NATUR: { $not: /^Redemption.*/ } }, { TRXN_NATUR: { $not: /^Gross Dividend.*/ } }, { TRXN_NATUR: { $not: /^Dividend Paid.*/ } }, { TRXN_NATUR: { $not: /^Switchout.*/ } }, { TRXN_NATUR: { $not: /^Transfer-Out.*/ } }] }, { TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                        { $match: { $and: [{ PAN: req.body.pan }, { SCHEME: /Tax/ }, { AMOUNT: { $gte: 0 } }, { TRXN_NATUR: { $not: /^Lateral Shift Out.*/ } }, { TRXN_NATUR: { $not: /^Redemption.*/ } }, { TRXN_NATUR: { $not: /^Gross Dividend.*/ } }, { TRXN_NATUR: { $not: /^Dividend Paid.*/ } }, { TRXN_NATUR: { $not: /^Switchout.*/ } }, { TRXN_NATUR: { $not: /^Transfer-Out.*/ } }, { TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                        { $group: { _id: { TAX_STATUS: "$TAX_STATUS", TRXNNO: "$TRXNNO", INV_NAME: "$INV_NAME", PAN: "$PAN", SCHEME: "$SCHEME", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
                        { $project: { _id: 0, PER_STATUS: "$_id.TAX_STATUS", TRXNNO: "$_id.TRXNNO", INVNAME: "$_id.INV_NAME", PAN: "$_id.PAN", SCHEME: "$_id.SCHEME", TRXN_NATUR: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } } } },
                        { $lookup: { from: 'folio_cams', localField: 'FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
                        { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                        { $project: { detail: 0, _id: 0, TAX_STATUS: 0, FOLIOCHK: 0, AC_NO: 0, FOLIO_DATE: 0, PRODUCT: 0, SCH_NAME: 0, AMC_CODE: 0, BANK_NAME: 0, HOLDING_NA: 0, IFSC_CODE: 0, JNT_NAME1: 0, JNT_NAME2: 0, JOINT1_PAN: 0, NOM2_NAME: 0, NOM3_NAME: 0, NOM_NAME: 0, PRCODE: 0, HOLDING_NATURE: 0, PAN_NO: 0, INV_NAME: 0, EMAIL: 0 } },
                        { $sort: { TRADDATE: -1 } }
                    ]
                    pipeline1 = [  ///trans_karvy                                             
                        { $match: { $and: [{ PAN1: req.body.pan }, { $or: [{ FUNDDESC: /TAX/ }, { FUNDDESC: /Tax/ }, { FUNDDESC: /Tax Saver/ }, { FUNDDESC: /Long Term Equity Fund/ }, { FUNDDESC: /IDBI Equity Advantage Fund/ }, { FUNDDESC: /Sundaram Diversified Equity Fund/ }] }, { TD_AMT: { $gte: 0 } }, { TRDESC: { $not: /^Consolidation Out.*/ } }, { TRDESC: { $not: /^Redemption.*/ } }, { TRDESC: { $not: /^Rejection.*/ } }, { TRDESC: { $not: /^Gross Dividend.*/ } }, { TRDESC: { $not: /^Switch Over Out.*/ } }, { TRDESC: { $not: /^Dividend Paid.*/ } }, { TRDESC: { $not: /^Switchout.*/ } }, { TRDESC: { $not: /^Transfer-Out.*/ } }, { TRDESC: { $not: /^Lateral Shift Out.*/ } }, { TD_TRDT: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                        { $group: { _id: { STATUS: "$STATUS", TD_TRNO: "$TD_TRNO", INVNAME: "$INVNAME", PAN1: "$PAN1", FUNDDESC: "$FUNDDESC", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
                        { $project: { _id: 0, PER_STATUS: "$_id.STATUS", TRXNNO: "$_id.TD_TRNO", INVNAME: "$_id.INVNAME", PAN: "$_id.PAN1", SCHEME: "$_id.FUNDDESC", TRXN_NATUR: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } } } },
                        { $lookup: { from: 'folio_karvy', localField: 'FOLIO_NO', foreignField: 'ACNO', as: 'detail' } },
                        { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                        { $project: { detail: 0, _id: 0, STATUS: 0, PRCODE: 0, STATUSDESC: 0, ACNO: 0, BNKACNO: 0, BNKACTYPE: 0, FUNDDESC: 0, NOMINEE: 0, MODEOFHOLD: 0, JTNAME2: 0, FUND: 0, EMAIL: 0, BNAME: 0, PANGNO: 0, JTNAME1: 0, PAN2: 0 } },
                        { $sort: { TRADDATE: -1 } }
                    ]
                    pipeline2 = [  ///trans_franklin
                        //{ $match: { $and: [{ IT_PAN_NO1: req.body.pan }, { $or: [{ SCHEME_NA1: /TAX/ }, { SCHEME_NA1: /Taxshield/ }] }, { AMOUNT: { $gte: 0 } }, { $or: [{ TRXN_TYPE: { $not: /^SIPR.*/ } }, { TRXN_TYPE: { $not: /^TO.*/ } }, { TRXN_TYPE: { $not: /^DP.*/ } }, { TRXN_TYPE: { $not: /^RED.*/ } }, { TRXN_TYPE: { $not: /^REDR.*/ } }, { TRXN_TYPE: { $not: /^Gross Dividend.*/ } }, { TRXN_TYPE: { $not: /^Dividend Paid.*/ } }, { TRXN_TYPE: { $not: /^SWOF.*/ } }, { TRXN_TYPE: { $not: /^Transfer-Out.*/ } }, { TRXN_TYPE: { $not: /^Lateral Shift Out.*/ } }] }, { TRXN_DATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                        { $match: { $and: [{ IT_PAN_NO1: req.body.pan }, { $or: [{ SCHEME_NA1: /TAX/ }, { SCHEME_NA1: /Taxshield/ }] }, { AMOUNT: { $gte: 0 } }, { TRXN_TYPE: { $not: /^SIPR.*/ } }, { TRXN_TYPE: { $not: /^TO.*/ } }, { TRXN_TYPE: { $not: /^DP.*/ } }, { TRXN_TYPE: { $not: /^RED.*/ } }, { TRXN_TYPE: { $not: /^REDR.*/ } }, { TRXN_TYPE: { $not: /^Gross Dividend.*/ } }, { TRXN_TYPE: { $not: /^Dividend Paid.*/ } }, { TRXN_TYPE: { $not: /^SWOF.*/ } }, { TRXN_TYPE: { $not: /^Transfer-Out.*/ } }, { TRXN_TYPE: { $not: /^Lateral Shift Out.*/ } }, { TRXN_DATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                        { $group: { _id: { SOCIAL_S18: "$SOCIAL_S18", TRXN_NO: "$TRXN_NO", INVESTOR_2: "$INVESTOR_2", IT_PAN_NO1: "$IT_PAN_NO1", SCHEME_NA1: "$SCHEME_NA1", TRXN_TYPE: "$TRXN_TYPE", FOLIO_NO: "$FOLIO_NO", AMOUNT: "$AMOUNT", TRXN_DATE: "$TRXN_DATE" } } },
                        { $project: { _id: 0, PER_STATUS: "$_id.SOCIAL_S18", TRXNNO: "$_id.TRXN_NO", INVNAME: "$_id.INVESTOR_2", PAN: "$_id.IT_PAN_NO1", SCHEME: "$_id.SCHEME_NA1", TRXN_NATUR: "$_id.TRXN_TYPE", FOLIO_NO: "$_id.FOLIO_NO", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRXN_DATE" } } } },
                        { $lookup: { from: 'folio_franklin', localField: 'FOLIO_NO', foreignField: 'FOLIO_NO', as: 'detail' } },
                        { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                        { $project: { detail: 0, _id: 0, TAX_STATUS: 0, FOLIO_NO: 0, PERSONAL_9: 0, ACCNT_NO: 0, AC_TYPE: 0, ADDRESS1: 0, BANK_CODE: 0, BANK_NAME: 0, COMP_CODE: 0, D_BIRTH: 0, EMAIL: 0, HOLDING_T6: 0, F_NAME: 0, IFSC_CODE: 0, JOINT_NAM1: 0, JOINT_NAM2: 0, KYC_ID: 0, NEFT_CODE: 0, NOMINEE1: 0, PBANK_NAME: 0, PANNO2: 0, PANNO1: 0, PHONE_RES: 0, SOCIAL_ST7: 0 } },
                        { $sort: { TRADDATE: -1 } }
                    ]
                    transc.aggregate(pipeline, (err, camsdata) => {
                        transk.aggregate(pipeline1, (err, karvydata) => {
                            transf.aggregate(pipeline2, (err, frankdata) => {
                                if (frankdata.length != 0 || karvydata.length != 0 || camsdata.length != 0) {
                                    resdata = {
                                        status: 200,
                                        message: 'Successfull',
                                        data: frankdata
                                    }

                                    var datacon = frankdata.concat(karvydata.concat(camsdata));

                                    datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                                        .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                                        .reverse().map(JSON.parse);
                                    var newdata1 = datacon.map(item => {
                                        return [JSON.stringify(item), item]
                                    }); // creates array of array
                                    var maparr1 = new Map(newdata1); // create key value pair from array of array
                                    datacon = [...maparr1.values()];//converting back to array from mapobject 
                                    datacon = datacon.map(function (obj) {
                                        if (obj['GUARDIANN0']) {
                                            obj['GUARD_NAME'] = obj['GUARDIANN0']; // Assign new key
                                            obj['GUARD_PAN'] = obj['GUARDPANNO'];
                                            // Delete old key
                                            delete obj['GUARDIANN0'];
                                            delete obj['GUARDPANNO'];
                                        } else if ((obj['GUARDIANN0']) === "") {
                                            obj['GUARD_NAME'] = obj['GUARDIANN0']; // Assign new key
                                            obj['GUARD_PAN'] = obj['GUARDPANNO'];
                                            delete obj['GUARDIANN0'];
                                            delete obj['GUARDPANNO'];
                                        }
                                        if (obj['GUARDIAN20']) {
                                            obj['GUARD_NAME'] = obj['GUARDIAN20']; // Assign new key
                                            // Delete old key
                                            delete obj['GUARDIAN20'];
                                        } else if ((obj['GUARDIAN20']) === "") {
                                            obj['GUARD_NAME'] = obj['GUARDIAN20']; // Assign new key
                                            delete obj['GUARDIAN20'];
                                        }
                                        return obj;
                                    });

                                    var index = datacon.length - 1;
                                    for (var i = 0; i < datacon.length; i++) {


                                        if (datacon[i]['TRXN_NATUR'].match(/Systematic Investment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Withdrawal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - Instalment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - To.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-NSE.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Physical.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-Normal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic (ECS).*/)) {
                                            datacon[i]['TRXN_NATUR'] = "SIP";
                                        } if (datacon[i]['TRXN_NATUR'].match(/Systematic - From.*/)) {
                                            datacon[i]['TRXN_NATUR'] = "STP";
                                        } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "Fresh Purchase") {
                                            datacon[i]['TRXN_NATUR'] = "Purchase";
                                        } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "ADD" ||
                                            datacon[i]['TRXN_NATUR'] === "ADDPUR") {
                                            datacon[i]['TRXN_NATUR'] = "Add. Purchase";
                                        } if (datacon[i]['TRXN_NATUR'] === "Purchase" || datacon[i]['TRXN_NATUR'] === "NEW" || datacon[i]['TRXN_NATUR'] === "NFO Purchase" ||
                                            datacon[i]['TRXN_NATUR'] === "Initial Allotment" || datacon[i]['TRXN_NATUR'] === "NEWPUR") {
                                            datacon[i]['TRXN_NATUR'] = "Purchase";
                                        } if (datacon[i]['TRXN_NATUR'] === "Lateral Shift In" || datacon[i]['TRXN_NATUR'] === "Switch-In"
                                            || datacon[i]['TRXN_NATUR'] === "Transfer-In" || datacon[i]['TRXN_NATUR'] === "Switch Over In"
                                            || datacon[i]['TRXN_NATUR'] === "LTIN" || datacon[i]['TRXN_NATUR'] === "LTIA") {
                                            datacon[i]['TRXN_NATUR'] = "Switch In";
                                        } if (datacon[i]['PER_STATUS'] === "On Behalf Of Minor" || datacon[i]['PER_STATUS'] === "MINOR" || datacon[i]['PER_STATUS'] === "On Behalf of Minor") {
                                            datacon[i]['PER_STATUS'] = "Minor";
                                        } if (datacon[i]['PER_STATUS'] === "INDIVIDUAL") {
                                            datacon[i]['PER_STATUS'] = "Individual";
                                        } if (datacon[i]['PER_STATUS'] === "HINDU UNDIVIDED FAMI") {
                                            datacon[i]['PER_STATUS'] = "HUF";
                                        }

                                    }
                                    // for(var j=0;j<arramt.length;j++){
                                    //     amount=arramt[j]+amount;
                                    // }
                                    // datacon[index]['TOTAL']=amount;
                                    resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime());
                                    res.json(resdata);
                                    return resdata;
                                } else {
                                    resdata = {
                                        status: 400,
                                        message: 'Data not found',
                                    }
                                    res.json(resdata);
                                    return resdata;
                                }

                            });
                        });
                    });
                }
            });
        }
    } catch (err) {
        console.log(err)
    }
})

app.post("/api/gettaxsavinguserwise", function (req, res) {
    try {
        var member = ""; var guardpan1 = []; var guardpan2 = [];
        var arr1 = []; var arr2 = []; var arr3 = []; var alldata = []; var arrFolio = []; var arrName = [];
        let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        if (req.body.fromyear === "") {
            resdata = {
                status: 400,
                message: 'Please enter from year',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.toyear === "") {
            resdata = {
                status: 400,
                message: 'Please enter to year',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.pan === "") {
            resdata = {
                status: 400,
                message: 'Please enter pan',
            }
            res.json(resdata);
            return resdata;
        } else if (!regex.test(req.body.pan)) {
            resdata = {
                status: 400,
                message: 'Please enter valid pan',
            }
            res.json(resdata);
            return resdata;
        } else {
            var yer = req.body.fromyear;
            var secyer = req.body.toyear;
            yer = yer + "-04-01";
            secyer = secyer + "-03-31"
            family.find({ adminPan: { $regex: `^${req.body.pan}.*`, $options: 'i' } }, { _id: 0, memberPan: 1 }, function (err, member) {
                if (member != "") {
                    member = [...new Set(member.map(({ memberPan }) => memberPan.toUpperCase()))];
                    guardpan1.push({ GUARD_PAN: req.body.pan.toUpperCase() });
                    guardpan2.push({ GUARDPANNO: req.body.pan.toUpperCase() });
                    arr1.push({ PAN: req.body.pan.toUpperCase() });
                    arr2.push({ PAN1: req.body.pan.toUpperCase() });
                    // arr3.push({ IT_PAN_NO1: req.body.pan.toUpperCase() });
                    for (var j = 0; j < member.length; j++) {
                        guardpan1.push({ GUARD_PAN: member[j] });
                        guardpan2.push({ GUARDPANNO: member[j] });
                        arr1.push({ PAN: member[j] });
                        arr2.push({ PAN1: req.body.pan.toUpperCase() });
                        //arr3.push({ IT_PAN_NO1: req.body.pan.toUpperCase() });
                    }
                    var strPan1 = { $or: guardpan1 };
                    var strPan2 = { $or: guardpan2 };
                    folioc.find(strPan1).distinct("FOLIOCHK", function (err, member1) {
                        foliok.find(strPan2).distinct("ACNO", function (err, member2) {
                            var alldata = member1.concat(member2);
                            for (var j = 0; j < alldata.length; j++) {
                                arr1.push({ FOLIO_NO: alldata[j] });
                                arr2.push({ TD_ACNO: alldata[j] });
                                //arr3.push({ FOLIO_NO: alldata[j] });
                            }
                            var strFolio = { $or: arr1 };
                            var strFolio1 = { $or: arr2 };
                            //var strFolio2 = { $or: arr3 };
                            pipeline = [  ///trans_cams
                                { $match: { $and: [strFolio, { TRXN_NATUR: { $not: /^Lateral Shift Out.*/ } }, { TRXN_NATUR: { $not: /^Redemption.*/ } }, { TRXN_NATUR: { $not: /^Gross Dividend.*/ } }, { TRXN_NATUR: { $not: /^Dividend Paid.*/ } }, { TRXN_NATUR: { $not: /^Switchout.*/ } }, { TRXN_NATUR: { $not: /^Transfer-Out.*/ } }, { $or: [{ SCHEME: /Tax/ }, { SCHEME: /TAX/ }] }, { AMOUNT: { $gte: 0 } }, { TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                                { $group: { _id: { TAX_STATUS: "$TAX_STATUS", TRXNNO: "$TRXNNO", INV_NAME: "$INV_NAME", PAN: "$PAN", SCHEME: "$SCHEME", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
                                { $project: { _id: 0, PER_STATUS: "$_id.TAX_STATUS", TRXNNO: "$_id.TRXNNO", INVNAME: "$_id.INV_NAME", PAN: "$_id.PAN", SCHEME: "$_id.SCHEME", TRXN_NATUR: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", amount_str: "$_id.AMOUNT", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } } } },
                                { $lookup: { from: 'folio_cams', localField: 'FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
                                { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                                { $project: { detail: 0, _id: 0, TAX_STATUS: 0, FOLIOCHK: 0, AC_NO: 0, FOLIO_DATE: 0, PRODUCT: 0, SCH_NAME: 0, AMC_CODE: 0, BANK_NAME: 0, HOLDING_NA: 0, IFSC_CODE: 0, JNT_NAME1: 0, JNT_NAME2: 0, JOINT1_PAN: 0, NOM2_NAME: 0, NOM3_NAME: 0, NOM_NAME: 0, PRCODE: 0, HOLDING_NATURE: 0, PAN_NO: 0, INV_NAME: 0, EMAIL: 0 } },
                                { $sort: { TRADDATE: -1 } }
                            ]
                            pipeline1 = [  ///trans_karvy                                             
                                { $match: { $and: [strFolio1, { $or: [{ FUNDDESC: /TAX/ }, { FUNDDESC: /Tax Saver/ }, { FUNDDESC: /Long Term Equity Fund/ }, { FUNDDESC: /IDBI Equity Advantage Fund/ }, { FUNDDESC: /Sundaram Diversified Equity Fund/ }] }, { TD_AMT: { $gte: 0 } }, { TRDESC: { $not: /^Consolidation Out.*/ } }, { TRDESC: { $not: /^Redemption.*/ } }, { TRDESC: { $not: /^Rejection.*/ } }, { TRDESC: { $not: /^Gross Dividend.*/ } }, { TRDESC: { $not: /^Switch Over Out.*/ } }, { TRDESC: { $not: /^Dividend Paid.*/ } }, { TRDESC: { $not: /^Switchout.*/ } }, { TRDESC: { $not: /^Transfer-Out.*/ } }, { TRDESC: { $not: /^Lateral Shift Out.*/ } }, { TD_TRDT: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                                { $group: { _id: { STATUS: "$STATUS", TD_TRNO: "$TD_TRNO", INVNAME: "$INVNAME", PAN1: "$PAN1", FUNDDESC: "$FUNDDESC", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
                                { $project: { _id: 0, PER_STATUS: "$_id.STATUS", TRXNNO: "$_id.TD_TRNO", INVNAME: "$_id.INVNAME", PAN: "$_id.PAN1", SCHEME: "$_id.FUNDDESC", TRXN_NATUR: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", amount_str: "$_id.TD_AMT", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } } } },
                                { $lookup: { from: 'folio_karvy', localField: 'FOLIO_NO', foreignField: 'ACNO', as: 'detail' } },
                                { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                                { $project: { detail: 0, _id: 0, STATUS: 0, PRCODE: 0, STATUSDESC: 0, ACNO: 0, BNKACNO: 0, BNKACTYPE: 0, FUNDDESC: 0, NOMINEE: 0, MODEOFHOLD: 0, JTNAME2: 0, FUND: 0, EMAIL: 0, BNAME: 0, PANGNO: 0, JTNAME1: 0, PAN2: 0 } },
                                { $sort: { TRADDATE: -1 } }
                            ]

                            transc.aggregate(pipeline, (err, camsdata) => {
                                transk.aggregate(pipeline1, (err, karvydata) => {
                                    if (karvydata.length != 0 || camsdata.length != 0) {
                                        resdata = {
                                            status: 200,
                                            message: 'Successfull',
                                            data: karvydata
                                        }
                                        var datacon = karvydata.concat(camsdata)

                                        datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                                            .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                                            .reverse().map(JSON.parse);
                                        var newdata1 = datacon.map(item => {
                                            return [JSON.stringify(item), item]
                                        }); // creates array of array
                                        var maparr1 = new Map(newdata1); // create key value pair from array of array
                                        datacon = [...maparr1.values()];//converting back to array from mapobject 
                                        datacon = datacon.map(function (obj) {
                                            if (obj['GUARDIANN0']) {
                                                obj['GUARD_NAME'] = obj['GUARDIANN0']; // Assign new key
                                                obj['GUARD_PAN'] = obj['GUARDPANNO'];
                                                // Delete old key
                                                delete obj['GUARDIANN0'];
                                                delete obj['GUARDPANNO'];
                                            } else if ((obj['GUARDIANN0']) === "") {
                                                obj['GUARD_NAME'] = obj['GUARDIANN0']; // Assign new key
                                                obj['GUARD_PAN'] = obj['GUARDPANNO'];
                                                delete obj['GUARDIANN0'];
                                                delete obj['GUARDPANNO'];
                                            }
                                            if (obj['GUARDIAN20'] === "") {
                                                obj['GUARD_NAME'] = obj['GUARDIAN20']; // Assign new key
                                                // Delete old key
                                                delete obj['GUARDIAN20'];
                                            } else if ((obj['GUARDIAN20']) === "") {
                                                obj['GUARD_NAME'] = obj['GUARDIAN20']; // Assign new key
                                                delete obj['GUARDIAN20'];
                                            }
                                            return obj;
                                        });

                                        for (var i = 0; i < datacon.length; i++) {
                                            if (datacon[i]['TRXN_NATUR'].match(/Systematic Investment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Withdrawal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - Instalment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - To.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-NSE.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Physical.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-Normal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic (ECS).*/)) {
                                                datacon[i]['TRXN_NATUR'] = "SIP";
                                            } if (Math.sign(datacon[i]['AMOUNT']) === -1) {
                                                datacon[i]['TRXN_NATUR'] = "SIPR";
                                            } if (datacon[i]['TRXN_NATUR'].match(/Systematic - From.*/)) {
                                                datacon[i]['TRXN_NATUR'] = "STP";
                                            } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "Fresh Purchase") {
                                                datacon[i]['TRXN_NATUR'] = "Purchase";
                                            } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "ADD" ||
                                                datacon[i]['TRXN_NATUR'] === "ADDPUR") {
                                                datacon[i]['TRXN_NATUR'] = "Add. Purchase";
                                            } if (datacon[i]['TRXN_NATUR'] === "Purchase" || datacon[i]['TRXN_NATUR'] === "NEW" || datacon[i]['TRXN_NATUR'] === "NFO Purchase" ||
                                                datacon[i]['TRXN_NATUR'] === "Initial Allotment" || datacon[i]['TRXN_NATUR'] === "NEWPUR") {
                                                datacon[i]['TRXN_NATUR'] = "Purchase";
                                            } if (datacon[i]['TRXN_NATUR'] === "Lateral Shift In" || datacon[i]['TRXN_NATUR'] === "Switch-In"
                                                || datacon[i]['TRXN_NATUR'] === "Transfer-In" || datacon[i]['TRXN_NATUR'] === "Switch Over In"
                                                || datacon[i]['TRXN_NATUR'] === "LTIN" || datacon[i]['TRXN_NATUR'] === "LTIA") {
                                                datacon[i]['TRXN_NATUR'] = "Switch In";
                                            } if (datacon[i]['PER_STATUS'] === "On Behalf Of Minor" || datacon[i]['PER_STATUS'] === "MINOR" || datacon[i]['PER_STATUS'] === "On Behalf of Minor") {
                                                datacon[i]['PER_STATUS'] = "Minor";
                                                datacon[i]['PAN'] = "";
                                            } if (datacon[i]['PER_STATUS'] === "INDIVIDUAL") {
                                                datacon[i]['PER_STATUS'] = "Individual";
                                            } if (datacon[i]['PER_STATUS'] === "HINDU UNDIVIDED FAMI") {
                                                datacon[i]['PER_STATUS'] = "HUF";
                                            }
                                            if (datacon[i]['amount_str']) {
                                                datacon[i]['amount_str'] = datacon[i]['amount_str'].toLocaleString('en-IN');
                                            }
                                        }
                                        resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime());
                                        res.json(resdata);
                                        return resdata;
                                    } else {
                                        resdata = {
                                            status: 400,
                                            message: 'Data not found',
                                        }
                                        res.json(resdata);
                                        return resdata;
                                    }


                                });
                            });
                        });
                    });
                } else {
                    pipeline = [  ///trans_cams
                        { $match: { $and: [{ PAN: req.body.pan }, { AMOUNT: { $gte: 0 } }, { TRXN_NATUR: { $not: /^Lateral Shift Out.*/ } }, { TRXN_NATUR: { $not: /^Redemption.*/ } }, { TRXN_NATUR: { $not: /^Gross Dividend.*/ } }, { TRXN_NATUR: { $not: /^Dividend Paid.*/ } }, { TRXN_NATUR: { $not: /^Switchout.*/ } }, { TRXN_NATUR: { $not: /^Transfer-Out.*/ } }, { $or: [{ SCHEME: /Tax/ }, { SCHEME: /TAX/ }] }, { TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                        //{ $match: { $and:  [ { TRXN_NATUR: { $not: /^Lateral Shift Out.*/ } } ,{SCHEME: /Tax/ }, { TRXN_NATUR: { $not: /^Redemption.*/ } } , { TRXN_NATUR: { $not: /^Gross Dividend.*/ } },  { TRXN_NATUR: { $not: /^Dividend Paid.*/ } }, { TRXN_NATUR: { $not: /^Switchout.*/ } }, { TRXN_NATUR: { $not: /^Transfer-Out.*/ } },]},{ TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } } ] } },
                        { $group: { _id: { TAX_STATUS: "$TAX_STATUS", TRXNNO: "$TRXNNO", INV_NAME: "$INV_NAME", PAN: "$PAN", SCHEME: "$SCHEME", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
                        { $project: { _id: 0, PER_STATUS: "$_id.TAX_STATUS", TRXNNO: "$_id.TRXNNO", INVNAME: "$_id.INV_NAME", PAN: "$_id.PAN", SCHEME: "$_id.SCHEME", TRXN_NATUR: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", amount_str: "$_id.AMOUNT", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } } } },
                        { $lookup: { from: 'folio_cams', localField: 'FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
                        { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                        { $project: { detail: 0, _id: 0, TAX_STATUS: 0, FOLIOCHK: 0, AC_NO: 0, FOLIO_DATE: 0, PRODUCT: 0, SCH_NAME: 0, AMC_CODE: 0, BANK_NAME: 0, HOLDING_NA: 0, IFSC_CODE: 0, JNT_NAME1: 0, JNT_NAME2: 0, JOINT1_PAN: 0, NOM2_NAME: 0, NOM3_NAME: 0, NOM_NAME: 0, PRCODE: 0, HOLDING_NATURE: 0, PAN_NO: 0, INV_NAME: 0, EMAIL: 0 } },
                        { $sort: { TRADDATE: -1 } }
                    ]
                    pipeline1 = [  ///trans_karvy                                             
                        { $match: { $and: [{ PAN1: req.body.pan }, { $or: [{ FUNDDESC: /TAX/ }, { FUNDDESC: /Tax/ }, { FUNDDESC: /Tax Saver/ }, { FUNDDESC: /Long Term Equity Fund/ }, { FUNDDESC: /IDBI Equity Advantage Fund/ }, { FUNDDESC: /Sundaram Diversified Equity Fund/ }] }, { TD_AMT: { $gte: 0 } }, { TRDESC: { $not: /^Consolidation Out.*/ } }, { TRDESC: { $not: /^Redemption.*/ } }, { TRDESC: { $not: /^Rejection.*/ } }, { TRDESC: { $not: /^Gross Dividend.*/ } }, { TRDESC: { $not: /^Switch Over Out.*/ } }, { TRDESC: { $not: /^Dividend Paid.*/ } }, { TRDESC: { $not: /^Switchout.*/ } }, { TRDESC: { $not: /^Transfer-Out.*/ } }, { TRDESC: { $not: /^Lateral Shift Out.*/ } }, { TD_TRDT: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                        { $group: { _id: { STATUS: "$STATUS", TD_TRNO: "$TD_TRNO", INVNAME: "$INVNAME", PAN1: "$PAN1", FUNDDESC: "$FUNDDESC", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
                        { $project: { _id: 0, PER_STATUS: "$_id.STATUS", TRXNNO: "$_id.TD_TRNO", INVNAME: "$_id.INVNAME", PAN: "$_id.PAN1", SCHEME: "$_id.FUNDDESC", TRXN_NATUR: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", amount_str: "$_id.TD_AMT", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } } } },
                        { $lookup: { from: 'folio_karvy', localField: 'FOLIO_NO', foreignField: 'ACNO', as: 'detail' } },
                        { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                        { $project: { detail: 0, _id: 0, STATUS: 0, PRCODE: 0, STATUSDESC: 0, ACNO: 0, BNKACNO: 0, BNKACTYPE: 0, FUNDDESC: 0, NOMINEE: 0, MODEOFHOLD: 0, JTNAME2: 0, FUND: 0, EMAIL: 0, BNAME: 0, PANGNO: 0, JTNAME1: 0, PAN2: 0 } },
                        { $sort: { TRADDATE: -1 } }
                    ]

                    transc.aggregate(pipeline, (err, camsdata) => {
                        transk.aggregate(pipeline1, (err, karvydata) => {
                            if (karvydata.length != 0 || camsdata.length != 0) {
                                resdata = {
                                    status: 200,
                                    message: 'Successfull',
                                    data: karvydata
                                }

                                var datacon = karvydata.concat(camsdata);

                                datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                                    .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                                    .reverse().map(JSON.parse);
                                var newdata1 = datacon.map(item => {
                                    return [JSON.stringify(item), item]
                                }); // creates array of array
                                var maparr1 = new Map(newdata1); // create key value pair from array of array
                                datacon = [...maparr1.values()];//converting back to array from mapobject 
                                datacon = datacon.map(function (obj) {
                                    if (obj['GUARDIANN0']) {
                                        obj['GUARD_NAME'] = obj['GUARDIANN0']; // Assign new key
                                        obj['GUARD_PAN'] = obj['GUARDPANNO'];
                                        // Delete old key
                                        delete obj['GUARDIANN0'];
                                        delete obj['GUARDPANNO'];
                                    } else if ((obj['GUARDIANN0']) === "") {
                                        obj['GUARD_NAME'] = obj['GUARDIANN0']; // Assign new key
                                        obj['GUARD_PAN'] = obj['GUARDPANNO'];
                                        delete obj['GUARDIANN0'];
                                        delete obj['GUARDPANNO'];
                                    }
                                    if (obj['GUARDIAN20']) {
                                        obj['GUARD_NAME'] = obj['GUARDIAN20']; // Assign new key
                                        // Delete old key
                                        delete obj['GUARDIAN20'];
                                    } else if ((obj['GUARDIAN20']) === "") {
                                        obj['GUARD_NAME'] = obj['GUARDIAN20']; // Assign new key
                                        delete obj['GUARDIAN20'];
                                    }
                                    return obj;
                                });

                                for (var i = 0; i < datacon.length; i++) {
                                    if (datacon[i]['TRXN_NATUR'].match(/Systematic Investment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Withdrawal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - Instalment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - To.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-NSE.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Physical.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-Normal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic (ECS).*/)) {
                                        datacon[i]['TRXN_NATUR'] = "SIP";
                                    } if (Math.sign(datacon[i]['AMOUNT']) === -1) {
                                        datacon[i]['TRXN_NATUR'] = "SIPR";
                                    } if (datacon[i]['TRXN_NATUR'].match(/Systematic - From.*/)) {
                                        datacon[i]['TRXN_NATUR'] = "STP";
                                    } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "Fresh Purchase") {
                                        datacon[i]['TRXN_NATUR'] = "Purchase";
                                    } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "ADD" ||
                                        datacon[i]['TRXN_NATUR'] === "ADDPUR") {
                                        datacon[i]['TRXN_NATUR'] = "Add. Purchase";
                                    } if (datacon[i]['TRXN_NATUR'] === "Purchase" || datacon[i]['TRXN_NATUR'] === "NEW" || datacon[i]['TRXN_NATUR'] === "NFO Purchase" ||
                                        datacon[i]['TRXN_NATUR'] === "Initial Allotment" || datacon[i]['TRXN_NATUR'] === "NEWPUR") {
                                        datacon[i]['TRXN_NATUR'] = "Purchase";
                                    } if (datacon[i]['TRXN_NATUR'] === "Lateral Shift In" || datacon[i]['TRXN_NATUR'] === "Switch-In"
                                        || datacon[i]['TRXN_NATUR'] === "Transfer-In" || datacon[i]['TRXN_NATUR'] === "Switch Over In"
                                        || datacon[i]['TRXN_NATUR'] === "LTIN" || datacon[i]['TRXN_NATUR'] === "LTIA") {
                                        datacon[i]['TRXN_NATUR'] = "Switch In";
                                    } if (datacon[i]['PER_STATUS'] === "On Behalf Of Minor" || datacon[i]['PER_STATUS'] === "MINOR" || datacon[i]['PER_STATUS'] === "On Behalf of Minor") {
                                        datacon[i]['PER_STATUS'] = "Minor";
                                        datacon[i]['PAN'] = "";
                                    } if (datacon[i]['PER_STATUS'] === "INDIVIDUAL") {
                                        datacon[i]['PER_STATUS'] = "Individual";
                                    } if (datacon[i]['PER_STATUS'] === "HINDU UNDIVIDED FAMI") {
                                        datacon[i]['PER_STATUS'] = "HUF";
                                    }
                                    if (datacon[i]['amount_str']) {
                                        datacon[i]['amount_str'] = datacon[i]['amount_str'].toLocaleString('en-IN');
                                    }
                                }
                                resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime());
                                res.json(resdata);
                                return resdata;
                            } else {
                                resdata = {
                                    status: 400,
                                    message: 'Data not found',
                                }
                                res.json(resdata);
                                return resdata;
                            }


                        });
                    });
                }
            });
        }
    } catch (err) {
        console.log(err)
    }
})

app.post("/api/gettaxsavinguserwisetest", function (req, res) {
    try {
        var member = ""; var guardpan1 = []; var guardpan2 = [];
        var arr1 = []; var arr2 = []; var arr3 = []; var alldata = []; var arrFolio = []; var arrName = [];
        let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        if (req.body.fromyear === "") {
            resdata = {
                status: 400,
                message: 'Please enter from year',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.toyear === "") {
            resdata = {
                status: 400,
                message: 'Please enter to year',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.pan === "") {
            resdata = {
                status: 400,
                message: 'Please enter pan',
            }
            res.json(resdata);
            return resdata;
        } else if (!regex.test(req.body.pan)) {
            resdata = {
                status: 400,
                message: 'Please enter valid pan',
            }
            res.json(resdata);
            return resdata;
        } else {
            var yer = req.body.fromyear;
            var secyer = req.body.toyear;
            yer = yer + "-04-01";
            secyer = secyer + "-03-31"
            family.find({ adminPan: { $regex: `^${req.body.pan}.*`, $options: 'i' } }, { _id: 0, memberPan: 1 }, function (err, member) {
                if (member != "") {
                    member = [...new Set(member.map(({ memberPan }) => memberPan.toUpperCase()))];
                    guardpan1.push({ GUARD_PAN: req.body.pan.toUpperCase() });
                    guardpan2.push({ GUARDPANNO: req.body.pan.toUpperCase() });
                    arr1.push({ PAN: req.body.pan.toUpperCase() });
                    arr2.push({ PAN1: req.body.pan.toUpperCase() });
                    // arr3.push({ IT_PAN_NO1: req.body.pan.toUpperCase() });
                    for (var j = 0; j < member.length; j++) {
                        guardpan1.push({ GUARD_PAN: member[j] });
                        guardpan2.push({ GUARDPANNO: member[j] });
                        arr1.push({ PAN: member[j] });
                        arr2.push({ PAN1: req.body.pan.toUpperCase() });
                        //arr3.push({ IT_PAN_NO1: req.body.pan.toUpperCase() });
                    }
                    var strPan1 = { $or: guardpan1 };
                    var strPan2 = { $or: guardpan2 };
                    folioc.find(strPan1).distinct("FOLIOCHK", function (err, member1) {
                        foliok.find(strPan2).distinct("ACNO", function (err, member2) {
                            var alldata = member1.concat(member2);
                            for (var j = 0; j < alldata.length; j++) {
                                arr1.push({ FOLIO_NO: alldata[j] });
                                arr2.push({ TD_ACNO: alldata[j] });
                                //arr3.push({ FOLIO_NO: alldata[j] });
                            }
                            var strFolio = { $or: arr1 };
                            var strFolio1 = { $or: arr2 };
                            //var strFolio2 = { $or: arr3 };
                            pipeline = [  ///trans_cams
                                { $match: { $and: [strFolio, { TRXN_NATUR: { $not: /^Lateral Shift Out.*/ } }, { TRXN_NATUR: { $not: /^Redemption.*/ } }, { TRXN_NATUR: { $not: /^Gross Dividend.*/ } }, { TRXN_NATUR: { $not: /^Dividend Paid.*/ } }, { TRXN_NATUR: { $not: /^Switchout.*/ } }, { TRXN_NATUR: { $not: /^Transfer-Out.*/ } }, { $or: [{ SCHEME: /Tax/ }, { SCHEME: /TAX/ }] }, { AMOUNT: { $gte: 0 } }, { TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                                { $group: { _id: { TAX_STATUS: "$TAX_STATUS", TRXNNO: "$TRXNNO", INV_NAME: "$INV_NAME", PAN: "$PAN", SCHEME: "$SCHEME", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
                                { $project: { _id: 0, PER_STATUS: "$_id.TAX_STATUS", TRXNNO: "$_id.TRXNNO", INVNAME: "$_id.INV_NAME", PAN: "$_id.PAN", SCHEME: "$_id.SCHEME", TRXN_NATUR: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", amount_str: "$_id.AMOUNT", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } } } },
                                { $lookup: { from: 'folio_cams', localField: 'FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
                                { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                                { $project: { detail: 0, _id: 0, TAX_STATUS: 0, FOLIOCHK: 0, AC_NO: 0, FOLIO_DATE: 0, PRODUCT: 0, SCH_NAME: 0, AMC_CODE: 0, BANK_NAME: 0, HOLDING_NA: 0, IFSC_CODE: 0, JNT_NAME1: 0, JNT_NAME2: 0, JOINT1_PAN: 0, NOM2_NAME: 0, NOM3_NAME: 0, NOM_NAME: 0, PRCODE: 0, HOLDING_NATURE: 0, PAN_NO: 0, INV_NAME: 0, EMAIL: 0 } },
                                { $sort: { TRADDATE: -1 } }
                            ]
                            pipeline1 = [  ///trans_karvy                                             
                                { $match: { $and: [strFolio1, { $or: [{ FUNDDESC: /TAX/ }, { FUNDDESC: /Tax Saver/ }, { FUNDDESC: /Long Term Equity Fund/ }, { FUNDDESC: /IDBI Equity Advantage Fund/ }, { FUNDDESC: /Sundaram Diversified Equity Fund/ }] }, { TD_AMT: { $gte: 0 } }, { TRDESC: { $not: /^Consolidation Out.*/ } }, { TRDESC: { $not: /^Redemption.*/ } }, { TRDESC: { $not: /^Rejection.*/ } }, { TRDESC: { $not: /^Gross Dividend.*/ } }, { TRDESC: { $not: /^Switch Over Out.*/ } }, { TRDESC: { $not: /^Dividend Paid.*/ } }, { TRDESC: { $not: /^Switchout.*/ } }, { TRDESC: { $not: /^Transfer-Out.*/ } }, { TRDESC: { $not: /^Lateral Shift Out.*/ } }, { TD_TRDT: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                                { $group: { _id: { STATUS: "$STATUS", TD_TRNO: "$TD_TRNO", INVNAME: "$INVNAME", PAN1: "$PAN1", FUNDDESC: "$FUNDDESC", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
                                { $project: { _id: 0, PER_STATUS: "$_id.STATUS", TRXNNO: "$_id.TD_TRNO", INVNAME: "$_id.INVNAME", PAN: "$_id.PAN1", SCHEME: "$_id.FUNDDESC", TRXN_NATUR: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", amount_str: "$_id.TD_AMT", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } } } },
                                { $lookup: { from: 'folio_karvy', localField: 'FOLIO_NO', foreignField: 'ACNO', as: 'detail' } },
                                { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                                { $project: { detail: 0, _id: 0, STATUS: 0, PRCODE: 0, STATUSDESC: 0, ACNO: 0, BNKACNO: 0, BNKACTYPE: 0, FUNDDESC: 0, NOMINEE: 0, MODEOFHOLD: 0, JTNAME2: 0, FUND: 0, EMAIL: 0, BNAME: 0, PANGNO: 0, JTNAME1: 0, PAN2: 0 } },
                                { $sort: { TRADDATE: -1 } }
                            ]

                            transc.aggregate(pipeline, (err, camsdata) => {
                                transk.aggregate(pipeline1, (err, karvydata) => {
                                    if (karvydata.length != 0 || camsdata.length != 0) {
                                        resdata = {
                                            status: 200,
                                            message: 'Successfull',
                                            data: karvydata
                                        }
                                        var datacon = karvydata.concat(camsdata)

                                        datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                                            .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                                            .reverse().map(JSON.parse);
                                        var newdata1 = datacon.map(item => {
                                            return [JSON.stringify(item), item]
                                        }); // creates array of array
                                        var maparr1 = new Map(newdata1); // create key value pair from array of array
                                        datacon = [...maparr1.values()];//converting back to array from mapobject 
                                        datacon = datacon.map(function (obj) {
                                            if (obj['GUARDIANN0']) {
                                                obj['GUARD_NAME'] = obj['GUARDIANN0']; // Assign new key
                                                obj['GUARD_PAN'] = obj['GUARDPANNO'];
                                                // Delete old key
                                                delete obj['GUARDIANN0'];
                                                delete obj['GUARDPANNO'];
                                            } else if ((obj['GUARDIANN0']) === "") {
                                                obj['GUARD_NAME'] = obj['GUARDIANN0']; // Assign new key
                                                obj['GUARD_PAN'] = obj['GUARDPANNO'];
                                                delete obj['GUARDIANN0'];
                                                delete obj['GUARDPANNO'];
                                            }
                                            if (obj['GUARDIAN20'] === "") {
                                                obj['GUARD_NAME'] = obj['GUARDIAN20']; // Assign new key
                                                // Delete old key
                                                delete obj['GUARDIAN20'];
                                            } else if ((obj['GUARDIAN20']) === "") {
                                                obj['GUARD_NAME'] = obj['GUARDIAN20']; // Assign new key
                                                delete obj['GUARDIAN20'];
                                            }
                                            return obj;
                                        });

                                        for (var i = 0; i < datacon.length; i++) {
                                            if (datacon[i]['TRXN_NATUR'].match(/Systematic Investment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Withdrawal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - Instalment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - To.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-NSE.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Physical.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-Normal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic (ECS).*/)) {
                                                datacon[i]['TRXN_NATUR'] = "SIP";
                                            } if (Math.sign(datacon[i]['AMOUNT']) === -1) {
                                                datacon[i]['TRXN_NATUR'] = "SIPR";
                                            } if (datacon[i]['TRXN_NATUR'].match(/Systematic - From.*/)) {
                                                datacon[i]['TRXN_NATUR'] = "STP";
                                            } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "Fresh Purchase") {
                                                datacon[i]['TRXN_NATUR'] = "Purchase";
                                            } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "ADD" ||
                                                datacon[i]['TRXN_NATUR'] === "ADDPUR") {
                                                datacon[i]['TRXN_NATUR'] = "Add. Purchase";
                                            } if (datacon[i]['TRXN_NATUR'] === "Purchase" || datacon[i]['TRXN_NATUR'] === "NEW" || datacon[i]['TRXN_NATUR'] === "NFO Purchase" ||
                                                datacon[i]['TRXN_NATUR'] === "Initial Allotment" || datacon[i]['TRXN_NATUR'] === "NEWPUR") {
                                                datacon[i]['TRXN_NATUR'] = "Purchase";
                                            } if (datacon[i]['TRXN_NATUR'] === "Lateral Shift In" || datacon[i]['TRXN_NATUR'] === "Switch-In"
                                                || datacon[i]['TRXN_NATUR'] === "Transfer-In" || datacon[i]['TRXN_NATUR'] === "Switch Over In"
                                                || datacon[i]['TRXN_NATUR'] === "LTIN" || datacon[i]['TRXN_NATUR'] === "LTIA") {
                                                datacon[i]['TRXN_NATUR'] = "Switch In";
                                            } if (datacon[i]['PER_STATUS'] === "On Behalf Of Minor" || datacon[i]['PER_STATUS'] === "MINOR" || datacon[i]['PER_STATUS'] === "On Behalf of Minor") {
                                                datacon[i]['PER_STATUS'] = "Minor";
                                                datacon[i]['PAN'] = "";
                                            } if (datacon[i]['PER_STATUS'] === "INDIVIDUAL") {
                                                datacon[i]['PER_STATUS'] = "Individual";
                                            } if (datacon[i]['PER_STATUS'] === "HINDU UNDIVIDED FAMI") {
                                                datacon[i]['PER_STATUS'] = "HUF";
                                            }
                                            if (datacon[i]['amount_str']) {
                                                datacon[i]['amount_str'] = datacon[i]['amount_str'].toLocaleString('en-IN');
                                            }
                                        }
                                        resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime());
                                        res.json(resdata);
                                        return resdata;
                                    } else {
                                        resdata = {
                                            status: 400,
                                            message: 'Data not found',
                                        }
                                        res.json(resdata);
                                        return resdata;
                                    }


                                });
                            });
                        });
                    });
                } else {
                    pipeline = [  ///trans_cams
                        { $match: { $and: [{ PAN: req.body.pan }, { AMOUNT: { $gte: 0 } }, { TRXN_NATUR: { $not: /^Lateral Shift Out.*/ } }, { TRXN_NATUR: { $not: /^Redemption.*/ } }, { TRXN_NATUR: { $not: /^Gross Dividend.*/ } }, { TRXN_NATUR: { $not: /^Dividend Paid.*/ } }, { TRXN_NATUR: { $not: /^Switchout.*/ } }, { TRXN_NATUR: { $not: /^Transfer-Out.*/ } }, { $or: [{ SCHEME: /Tax/ }, { SCHEME: /TAX/ }] }, { TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                        //{ $match: { $and:  [ { TRXN_NATUR: { $not: /^Lateral Shift Out.*/ } } ,{SCHEME: /Tax/ }, { TRXN_NATUR: { $not: /^Redemption.*/ } } , { TRXN_NATUR: { $not: /^Gross Dividend.*/ } },  { TRXN_NATUR: { $not: /^Dividend Paid.*/ } }, { TRXN_NATUR: { $not: /^Switchout.*/ } }, { TRXN_NATUR: { $not: /^Transfer-Out.*/ } },]},{ TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } } ] } },
                        { $group: { _id: { TAX_STATUS: "$TAX_STATUS", TRXNNO: "$TRXNNO", INV_NAME: "$INV_NAME", PAN: "$PAN", SCHEME: "$SCHEME", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
                        { $project: { _id: 0, PER_STATUS: "$_id.TAX_STATUS", TRXNNO: "$_id.TRXNNO", INVNAME: "$_id.INV_NAME", PAN: "$_id.PAN", SCHEME: "$_id.SCHEME", TRXN_NATUR: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", amount_str: "$_id.AMOUNT", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } } } },
                        { $lookup: { from: 'folio_cams', localField: 'FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
                        { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                        { $project: { detail: 0, _id: 0, TAX_STATUS: 0, FOLIOCHK: 0, AC_NO: 0, FOLIO_DATE: 0, PRODUCT: 0, SCH_NAME: 0, AMC_CODE: 0, BANK_NAME: 0, HOLDING_NA: 0, IFSC_CODE: 0, JNT_NAME1: 0, JNT_NAME2: 0, JOINT1_PAN: 0, NOM2_NAME: 0, NOM3_NAME: 0, NOM_NAME: 0, PRCODE: 0, HOLDING_NATURE: 0, PAN_NO: 0, INV_NAME: 0, EMAIL: 0 } },
                        { $sort: { TRADDATE: -1 } }
                    ]
                    pipeline1 = [  ///trans_karvy                                             
                        { $match: { $and: [{ PAN1: req.body.pan }, { $or: [{ FUNDDESC: /TAX/ }, { FUNDDESC: /Tax/ }, { FUNDDESC: /Tax Saver/ }, { FUNDDESC: /Long Term Equity Fund/ }, { FUNDDESC: /IDBI Equity Advantage Fund/ }, { FUNDDESC: /Sundaram Diversified Equity Fund/ }] }, { TD_AMT: { $gte: 0 } }, { TRDESC: { $not: /^Consolidation Out.*/ } }, { TRDESC: { $not: /^Redemption.*/ } }, { TRDESC: { $not: /^Rejection.*/ } }, { TRDESC: { $not: /^Gross Dividend.*/ } }, { TRDESC: { $not: /^Switch Over Out.*/ } }, { TRDESC: { $not: /^Dividend Paid.*/ } }, { TRDESC: { $not: /^Switchout.*/ } }, { TRDESC: { $not: /^Transfer-Out.*/ } }, { TRDESC: { $not: /^Lateral Shift Out.*/ } }, { TD_TRDT: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                        { $group: { _id: { STATUS: "$STATUS", TD_TRNO: "$TD_TRNO", INVNAME: "$INVNAME", PAN1: "$PAN1", FUNDDESC: "$FUNDDESC", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
                        { $project: { _id: 0, PER_STATUS: "$_id.STATUS", TRXNNO: "$_id.TD_TRNO", INVNAME: "$_id.INVNAME", PAN: "$_id.PAN1", SCHEME: "$_id.FUNDDESC", TRXN_NATUR: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", amount_str: "$_id.TD_AMT", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } } } },
                        { $lookup: { from: 'folio_karvy', localField: 'FOLIO_NO', foreignField: 'ACNO', as: 'detail' } },
                        { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                        { $project: { detail: 0, _id: 0, STATUS: 0, PRCODE: 0, STATUSDESC: 0, ACNO: 0, BNKACNO: 0, BNKACTYPE: 0, FUNDDESC: 0, NOMINEE: 0, MODEOFHOLD: 0, JTNAME2: 0, FUND: 0, EMAIL: 0, BNAME: 0, PANGNO: 0, JTNAME1: 0, PAN2: 0 } },
                        { $sort: { TRADDATE: -1 } }
                    ]

                    transc.aggregate(pipeline, (err, camsdata) => {
                        transk.aggregate(pipeline1, (err, karvydata) => {
                            if (karvydata.length != 0 || camsdata.length != 0) {
                                resdata = {
                                    status: 200,
                                    message: 'Successfull',
                                    data: karvydata
                                }

                                var datacon = karvydata.concat(camsdata);

                                datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                                    .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                                    .reverse().map(JSON.parse);
                                var newdata1 = datacon.map(item => {
                                    return [JSON.stringify(item), item]
                                }); // creates array of array
                                var maparr1 = new Map(newdata1); // create key value pair from array of array
                                datacon = [...maparr1.values()];//converting back to array from mapobject 
                                datacon = datacon.map(function (obj) {
                                    if (obj['GUARDIANN0']) {
                                        obj['GUARD_NAME'] = obj['GUARDIANN0']; // Assign new key
                                        obj['GUARD_PAN'] = obj['GUARDPANNO'];
                                        // Delete old key
                                        delete obj['GUARDIANN0'];
                                        delete obj['GUARDPANNO'];
                                    } else if ((obj['GUARDIANN0']) === "") {
                                        obj['GUARD_NAME'] = obj['GUARDIANN0']; // Assign new key
                                        obj['GUARD_PAN'] = obj['GUARDPANNO'];
                                        delete obj['GUARDIANN0'];
                                        delete obj['GUARDPANNO'];
                                    }
                                    if (obj['GUARDIAN20']) {
                                        obj['GUARD_NAME'] = obj['GUARDIAN20']; // Assign new key
                                        // Delete old key
                                        delete obj['GUARDIAN20'];
                                    } else if ((obj['GUARDIAN20']) === "") {
                                        obj['GUARD_NAME'] = obj['GUARDIAN20']; // Assign new key
                                        delete obj['GUARDIAN20'];
                                    }
                                    return obj;
                                });

                                for (var i = 0; i < datacon.length; i++) {
                                    if (datacon[i]['TRXN_NATUR'].match(/Systematic Investment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Withdrawal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - Instalment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - To.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-NSE.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Physical.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-Normal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic (ECS).*/)) {
                                        datacon[i]['TRXN_NATUR'] = "SIP";
                                    } if (Math.sign(datacon[i]['AMOUNT']) === -1) {
                                        datacon[i]['TRXN_NATUR'] = "SIPR";
                                    } if (datacon[i]['TRXN_NATUR'].match(/Systematic - From.*/)) {
                                        datacon[i]['TRXN_NATUR'] = "STP";
                                    } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "Fresh Purchase") {
                                        datacon[i]['TRXN_NATUR'] = "Purchase";
                                    } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "ADD" ||
                                        datacon[i]['TRXN_NATUR'] === "ADDPUR") {
                                        datacon[i]['TRXN_NATUR'] = "Add. Purchase";
                                    } if (datacon[i]['TRXN_NATUR'] === "Purchase" || datacon[i]['TRXN_NATUR'] === "NEW" || datacon[i]['TRXN_NATUR'] === "NFO Purchase" ||
                                        datacon[i]['TRXN_NATUR'] === "Initial Allotment" || datacon[i]['TRXN_NATUR'] === "NEWPUR") {
                                        datacon[i]['TRXN_NATUR'] = "Purchase";
                                    } if (datacon[i]['TRXN_NATUR'] === "Lateral Shift In" || datacon[i]['TRXN_NATUR'] === "Switch-In"
                                        || datacon[i]['TRXN_NATUR'] === "Transfer-In" || datacon[i]['TRXN_NATUR'] === "Switch Over In"
                                        || datacon[i]['TRXN_NATUR'] === "LTIN" || datacon[i]['TRXN_NATUR'] === "LTIA") {
                                        datacon[i]['TRXN_NATUR'] = "Switch In";
                                    } if (datacon[i]['PER_STATUS'] === "On Behalf Of Minor" || datacon[i]['PER_STATUS'] === "MINOR" || datacon[i]['PER_STATUS'] === "On Behalf of Minor") {
                                        datacon[i]['PER_STATUS'] = "Minor";
                                        datacon[i]['PAN'] = "";
                                    } if (datacon[i]['PER_STATUS'] === "INDIVIDUAL") {
                                        datacon[i]['PER_STATUS'] = "Individual";
                                    } if (datacon[i]['PER_STATUS'] === "HINDU UNDIVIDED FAMI") {
                                        datacon[i]['PER_STATUS'] = "HUF";
                                    }
                                    if (datacon[i]['amount_str']) {
                                        datacon[i]['amount_str'] = datacon[i]['amount_str'].toLocaleString('en-IN');
                                    }
                                }
                                resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime());
                                res.json(resdata);
                                return resdata;
                            } else {
                                resdata = {
                                    status: 400,
                                    message: 'Data not found',
                                }
                                res.json(resdata);
                                return resdata;
                            }


                        });
                    });
                }
            });
        }
    } catch (err) {
        console.log(err)
    }
})

app.post("/api/gettaxsaving", function (req, res) {
    var yer = req.body.fromyear;
    var secyer = req.body.toyear;
    yer = yer + "-04-01";
    secyer = secyer + "-03-31"
    pipeline = [  ///trans_cams
        { $match: { $and: [{ TRXN_NATUR: { $not: /^Redemption.*/ } }, { TRXN_NATUR: { $not: /^Dividend.*/ } }, { TRXN_NATUR: { $not: /^Switchout.*/ } }, { TRXN_NATUR: { $not: /^Transfer-Out.*/ } }, { TRXN_NATUR: { $not: /^Lateral Shift Out.*/ } }, { $or: [{ SCHEME: /Tax/ }, { SCHEME: /TAX/ }] }, { TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
        { $group: { _id: { SCHEME: "$SCHEME", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
        { $project: { _id: 0, SCHEME: "$_id.SCHEME", TRXN_NATUR: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", amount_str: "$_id.AMOUNT", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } } } },

        { $sort: { TRADDATE: -1 } }
    ]
    pipeline1 = [  ///trans_karvy
        { $match: { $and: [{ $or: [{ FUNDDESC: /TAX/ }, { FUNDDESC: /Long Term Equity Fund/ }, { FUNDDESC: /IDBI Equity Advantage Fund/ }, { FUNDDESC: /Sundaram Diversified Equity Fund/ }] }, { TRDESC: { $not: /^Gross Dividend.*/ } }, { TRDESC: { $not: /^Redemption.*/ } }, { TRDESC: { $not: /^Switch Over Out.*/ } }, { TRDESC: { $not: /^S T P Out.*/ } }, { TRDESC: { $not: /^Dividend.*/ } }, { TRDESC: { $not: /^Switchout.*/ } }, { TRDESC: { $not: /^Transfer-Out.*/ } }, { TRDESC: { $not: /^Lateral Shift Out.*/ } }, { TD_TRDT: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
        { $group: { _id: { FUNDDESC: "$FUNDDESC", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
        { $project: { _id: 0, SCHEME: "$_id.FUNDDESC", TRXN_NATUR: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", amount_str: "$_id.TD_AMT", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } } } },
        { $sort: { TRADDATE: -1 } }
    ]

    transc.aggregate(pipeline, (err, camsdata) => {
        transk.aggregate(pipeline1, (err, karvydata) => {
            if (karvydata.length != 0 || camsdata.length != 0) {
                resdata = {
                    status: 200,
                    message: 'Successfull',
                    data: karvydata
                }
                var datacon = karvydata.concat(camsdata)
                datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                    .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                    .reverse().map(JSON.parse);
                for (var i = 0; i < datacon.length; i++) {
                    if (datacon[i]['TRXN_NATUR'].match(/Systematic Investment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Withdrawal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - Instalment.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic - To.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-NSE.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic Physical.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic-Normal.*/) || datacon[i]['TRXN_NATUR'].match(/Systematic (ECS).*/)) {
                        datacon[i]['TRXN_NATUR'] = "SIP";
                    } if (Math.sign(datacon[i]['AMOUNT']) === -1) {
                        datacon[i]['TRXN_NATUR'] = "SIPR";
                    } if (datacon[i]['TRXN_NATUR'].match(/Systematic - From.*/)) {
                        datacon[i]['TRXN_NATUR'] = "STP";
                    } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "Fresh Purchase") {
                        datacon[i]['TRXN_NATUR'] = "Purchase";
                    } if (datacon[i]['TRXN_NATUR'] === "Additional Purchase" || datacon[i]['TRXN_NATUR'] === "ADD" ||
                        datacon[i]['TRXN_NATUR'] === "ADDPUR") {
                        datacon[i]['TRXN_NATUR'] = "Add. Purchase";
                    } if (datacon[i]['TRXN_NATUR'] === "Purchase" || datacon[i]['TRXN_NATUR'] === "NEW" ||
                        datacon[i]['TRXN_NATUR'] === "Initial Allotment" || datacon[i]['TRXN_NATUR'] === "NEWPUR") {
                        datacon[i]['TRXN_NATUR'] = "Purchase";
                    } if (datacon[i]['TRXN_NATUR'] === "Lateral Shift In" || datacon[i]['TRXN_NATUR'] === "Switch-In"
                        || datacon[i]['TRXN_NATUR'] === "Transfer-In" || datacon[i]['TRXN_NATUR'] === "Switch Over In"
                        || datacon[i]['TRXN_NATUR'] === "LTIN" || datacon[i]['TRXN_NATUR'] === "LTIA") {
                        datacon[i]['TRXN_NATUR'] = "Switch In";
                    } if (datacon[i]['amount_str']) {
                        datacon[i]['amount_str'] = datacon[i]['amount_str'].toLocaleString('en-IN');
                    }
                }
                resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime())
                res.json(resdata);
                return resdata;
            } else {
                resdata = {
                    status: 400,
                    message: 'Data not found',
                }
                res.json(resdata);
                return resdata;
            }

        })
    });
});

app.post("/api/getdividendall", function (req, res) {
    var yer = req.body.fromyear;
    var secyer = req.body.toyear;
    yer = yer + "-04-01";
    secyer = secyer + "-03-31"
    // var transk = mongoose.model('trans_karvy', transkarvy, 'trans_karvy');
    // var transc = mongoose.model('trans_cams', transcams, 'trans_cams');
    // var transf = mongoose.model('trans_franklin', transfranklin, 'trans_franklin');
    const pipeline = [  ///trans_cams
        { $match: { $and: [{ TRXN_NATUR: /Dividend/ }, { TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
        { $group: { _id: { SCHEME: "$SCHEME", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
        { $project: { _id: 0, SCHEME: "$_id.SCHEME", TRXN_NATURE: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } }, year1: { $year: ('$_id.TRADDATE') }, year2: { $year: ('$_id.TRADDATE') } } },
        { $sort: { TRADDATE: -1 } }
    ]
    const pipeline1 = [  ///trans_karvy
        { $match: { $and: [{ TRDESC: /Dividend/ }, { TD_TRDT: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
        { $group: { _id: { FUNDDESC: "$FUNDDESC", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
        { $project: { _id: 0, SCHEME: "$_id.FUNDDESC", TRXN_NATURE: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } }, year1: { $year: ('$_id.TD_TRDT') }, year2: { $year: ('$_id.TD_TRDT') } } },
        { $sort: { TRADDATE: -1 } }
    ]


    transc.aggregate(pipeline, (err, camsdata) => {
        transk.aggregate(pipeline1, (err, karvydata) => {
            if (karvydata.length != 0 || camsdata.length != 0) {
                resdata = {
                    status: 200,
                    message: 'Successfull',
                    data: karvydata
                }
            } else {
                resdata = {
                    status: 400,
                    message: 'Data not found',
                }
            }
            var datacon = karvydata.concat(camsdata)
            datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                .reverse().map(JSON.parse);
            for (var i = 0; i < datacon.length; i++) {
                if (datacon[i]['TRXN_NATURE'] === "Gross Dividend") {
                    datacon[i]['TRXN_NATURE'] = "Dividend Payout";
                } if (datacon[i]['TRXN_NATURE'].match(/Div. Rei.*/) || datacon[i]['TRXN_NATURE'].match(/Dividend Reinvest.*/)) {
                    datacon[i]['TRXN_NATURE'] = "Div. Reinv.";
                }
            }
            resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime())
            res.json(resdata)
            return resdata

        });
    })

});

app.post("/api/getdividenduserwise", function (req, res) {
    try {
        var yer = req.body.fromyear;
        var secyer = req.body.toyear;
        yer = yer + "-04-01";
        secyer = secyer + "-03-31"
        // var transk = mongoose.model('trans_karvy', transkarvy, 'trans_karvy');
        //  var transc = mongoose.model('trans_cams', transcams, 'trans_cams');
        //var transf = mongoose.model('trans_franklin', transfranklin, 'trans_franklin');
        if (req.body.pan === null || req.body.pan === '') {
            const pipeline = [  ///trans_cams
                { $match: { $and: [{ TRXN_NATUR: /Div/ }, { INV_NAME: req.body.name }, { TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                { $group: { _id: { INV_NAME: "$INV_NAME", PAN: "$PAN", SCHEME: "$SCHEME", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
                { $project: { _id: 0, INVNAME: "$_id.INV_NAME", PAN: "$_id.PAN", SCHEME: "$_id.SCHEME", TRXN_NATURE: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } }, } },
            ]
            const pipeline1 = [  ///trans_karvy
                { $match: { $and: [{ TRDESC: /Div/ }, { INVNAME: req.body.name }, { TD_TRDT: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                { $group: { _id: { INVNAME: "$INVNAME", PAN1: "$PAN1", FUNDDESC: "$FUNDDESC", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
                { $project: { _id: 0, INVNAME: "$_id.INVNAME", PAN: "$_id.PAN1", SCHEME: "$_id.FUNDDESC", TRXN_NATURE: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } } } },
            ]
            const pipeline2 = [  ///trans_franklin
                { $match: { $and: [{ $or: [{ TRXN_TYPE: /DIR/ }, { TRXN_TYPE: /DP/ }] }, { INVESTOR_2: req.body.name }, { TRXN_DATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                { $group: { _id: { INVESTOR_2: "$INVESTOR_2", IT_PAN_NO1: "$IT_PAN_NO1", SCHEME_NA1: "$SCHEME_NA1", TRXN_TYPE: "$TRXN_TYPE", FOLIO_NO: "$FOLIO_NO", AMOUNT: "$AMOUNT", TRXN_DATE: "$TRXN_DATE" } } },
                { $project: { _id: 0, INVNAME: "$_id.INVESTOR_2", PAN: "$_id.IT_PAN_NO1", SCHEME: "$_id.SCHEME_NA1", TRXN_NATURE: "$_id.TRXN_TYPE", FOLIO_NO: "$_id.FOLIO_NO", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRXN_DATE" } } } },
            ]
            transf.aggregate(pipeline2, (err, frankdata) => {
                transc.aggregate(pipeline, (err, camsdata) => {
                    transk.aggregate(pipeline1, (err, karvydata) => {
                        if (karvydata.length != 0 || camsdata.length != 0 || frankdata.length != 0) {
                            resdata = {
                                status: 200,
                                message: 'Successfull',
                                data: karvydata
                            }
                        } else {
                            resdata = {
                                status: 400,
                                message: 'Data not found',
                            }
                        }
                        var datacon = karvydata.concat(camsdata.concat(frankdata))
                        datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                            .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                            .reverse().map(JSON.parse);
                        for (var i = 0; i < datacon.length; i++) {
                            if (datacon[i]['TRXN_NATURE'] === "Gross Dividend") {
                                datacon[i]['TRXN_NATURE'] = "Dividend Payout";
                            } if (datacon[i]['TRXN_NATURE'].match(/Div. Rei.*/)) {
                                datacon[i]['TRXN_NATURE'] = "Div. Reinv.";
                            }
                        }
                        resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime())
                        res.json(resdata)
                        return resdata
                    });
                });
            });
        } else if (req.body.name != "" && req.body.pan != "") {
            const pipeline = [  ///trans_cams
                { $match: { $and: [{ TRXN_NATUR: /Div/ }, { INV_NAME: { $regex: `^${req.body.name}.*`, $options: 'i' } }, { PAN: req.body.pan }, { TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                { $group: { _id: { INV_NAME: "$INV_NAME", PAN: "$PAN", SCHEME: "$SCHEME", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
                { $project: { _id: 0, INVNAME: "$_id.INV_NAME", PAN: "$_id.PAN", SCHEME: "$_id.SCHEME", TRXN_NATURE: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } }, } },
            ]
            const pipeline1 = [  ///trans_karvy
                { $match: { $and: [{ TRDESC: /Div/ }, { PAN1: req.body.pan }, { INVNAME: { $regex: `^${req.body.name}.*`, $options: 'i' } }, { TD_TRDT: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                { $group: { _id: { INVNAME: "$INVNAME", PAN1: "$PAN1", FUNDDESC: "$FUNDDESC", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
                { $project: { _id: 0, INVNAME: "$_id.INVNAME", PAN: "$_id.PAN1", SCHEME: "$_id.FUNDDESC", TRXN_NATURE: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } } } },
            ]
            const pipeline2 = [  ///trans_franklin
                { $match: { $and: [{ $or: [{ TRXN_TYPE: /DIR/ }, { TRXN_TYPE: /DP/ }] }, { INVESTOR_2: { $regex: `^${req.body.name}.*`, $options: 'i' } }, { IT_PAN_NO1: req.body.pan }, { TRXN_DATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                { $group: { _id: { INVESTOR_2: "$INVESTOR_2", IT_PAN_NO1: "$IT_PAN_NO1", SCHEME_NA1: "$SCHEME_NA1", TRXN_TYPE: "$TRXN_TYPE", FOLIO_NO: "$FOLIO_NO", AMOUNT: "$AMOUNT", TRXN_DATE: "$TRXN_DATE" } } },
                { $project: { _id: 0, INVNAME: "$_id.INVESTOR_2", PAN: "$_id.IT_PAN_NO1", SCHEME: "$_id.SCHEME_NA1", TRXN_NATURE: "$_id.TRXN_TYPE", FOLIO_NO: "$_id.FOLIO_NO", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRXN_DATE" } } } },
            ]
            transf.aggregate(pipeline2, (err, frankdata) => {
                transc.aggregate(pipeline, (err, camsdata) => {
                    transk.aggregate(pipeline1, (err, karvydata) => {
                        if (karvydata.length != 0 || camsdata.length != 0 || frankdata.length != 0) {
                            resdata = {
                                status: 200,
                                message: 'Successfull',
                                data: karvydata
                            }
                        } else {
                            resdata = {
                                status: 400,
                                message: 'Data not found',
                            }
                        }
                        var datacon = karvydata.concat(camsdata.concat(frankdata))
                        datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                            .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                            .reverse().map(JSON.parse);
                        for (var i = 0; i < datacon.length; i++) {
                            if (datacon[i]['TRXN_NATURE'] === "Gross Dividend") {
                                datacon[i]['TRXN_NATURE'] = "Dividend Payout";
                            } if (datacon[i]['TRXN_NATURE'].match(/Div. Rei.*/)) {
                                datacon[i]['TRXN_NATURE'] = "Div. Reinv.";
                            }
                        }
                        resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime())
                        res.json(resdata)
                        return resdata
                    });
                });
            });
        } else {
            resdata = {
                status: 400,
                message: 'Data not found',
            }
        }
    } catch (err) {
        console.log(err)
    }
});

app.post("/api/getdividendschemeold", function (req, res) {
    try {
        let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        if (req.body.fromyear === "") {
            resdata = {
                status: 400,
                message: 'Please enter from year',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.toyear === "") {
            resdata = {
                status: 400,
                message: 'Please enter to year',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.pan === "") {
            resdata = {
                status: 400,
                message: 'Please enter pan',
            }
            res.json(resdata);
            return resdata;
        } else if (!regex.test(req.body.pan)) {
            resdata = {
                status: 400,
                message: 'Please enter valid pan',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.scheme === "") {
            resdata = {
                status: 400,
                message: 'Please enter scheme',
            }
            res.json(resdata);
            return resdata;
        } else {

            var yer = req.body.fromyear;
            var secyer = req.body.toyear;
            yer = yer + "-04-01";
            secyer = secyer + "-03-31"
            //    if(req.body.pan != "" ){
            const pipeline = [  ///trans_cams                                                     
                { $match: { $and: [{ TRXN_NATUR: /Div/ }, { SCHEME: req.body.scheme }, { PAN: req.body.pan }, { TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                { $group: { _id: { INV_NAME: "$INV_NAME", SCHEME: "$SCHEME", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
                { $project: { _id: 0, INVNAME: "$_id.INV_NAME", SCHEME: "$_id.SCHEME", TRXN_NATUR: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } } } },
            ]
            const pipeline1 = [  ///trans_karvy
                { $match: { $and: [{ TRDESC: /Div/ }, { FUNDDESC: req.body.scheme }, { PAN1: req.body.pan }, { TD_TRDT: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                { $group: { _id: { INVNAME: "$INVNAME", FUNDDESC: "$FUNDDESC", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
                { $project: { _id: 0, INVNAME: "$_id.INVNAME", SCHEME: "$_id.FUNDDESC", TRXN_NATUR: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } } } },
            ]
            const pipeline2 = [  ///trans_franklin
                { $match: { $and: [{ $or: [{ TRXN_TYPE: /DIR/ }, { TRXN_TYPE: /DP/ }] }, { IT_PAN_NO1: req.body.pan }, { TRXN_DATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                { $group: { _id: { INVESTOR_2: "$INVESTOR_2", SCHEME_NA1: "$SCHEME_NA1", TRXN_TYPE: "$TRXN_TYPE", FOLIO_NO: "$FOLIO_NO", AMOUNT: "$AMOUNT", TRXN_DATE: "$TRXN_DATE" } } },
                { $project: { _id: 0, INVNAME: "$_id.INVESTOR_2", SCHEME: "$_id.SCHEME_NA1", TRXN_NATUR: "$_id.TRXN_TYPE", FOLIO_NO: "$_id.FOLIO_NO", AMOUNT: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRXN_DATE" } } } },
            ]
            transc.aggregate(pipeline, (err, camsdata) => {
                transk.aggregate(pipeline1, (err, karvydata) => {
                    transf.aggregate(pipeline2, (err, frankdata) => {
                        if (camsdata != 0 || karvydata != 0 || frankdata != 0) {
                            resdata = {
                                status: 200,
                                message: 'Successfull',
                                data: frankdata
                            }
                            var datacon = frankdata.concat(karvydata.concat(camsdata));

                            datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                                .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                                .reverse().map(JSON.parse);
                            for (var i = 0; i < datacon.length; i++) {
                                if (datacon[i]['TRXN_NATUR'] === "Gross Dividend") {
                                    datacon[i]['TRXN_NATUR'] = "Dividend Payout";
                                } if (datacon[i]['TRXN_NATUR'].match(/Div. Rei.*/) || datacon[i]['TRXN_NATUR'].match(/Dividend Reinvest*/)) {
                                    datacon[i]['TRXN_NATUR'] = "Div. Reinv.";
                                } if (datacon[i]['TRXN_NATUR'].match(/Dividend Paid*/)) {
                                    datacon[i]['TRXN_NATUR'] = "Div. Paid";
                                }
                            }
                            //resdata.data = datacon;
                            resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime())
                            res.json(resdata);
                            return resdata;
                        } else {
                            resdata = {
                                status: 400,
                                message: 'Data not found',
                            }
                            res.json(resdata);
                            return resdata;
                        }

                    });
                });
            });
            // }else{
            //     resdata = {
            //         status: 400,
            //         message: 'Data not found',
            //     }
            // }
        }
    } catch (err) {
        console.log(err)
    }
});

app.post("/api/getdividendscheme", function (req, res) {
    try {
        let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        if (req.body.fromyear === "") {
            resdata = {
                status: 400,
                message: 'Please enter from year',
            }
        } else if (req.body.toyear === "") {
            resdata = {
                status: 400,
                message: 'Please enter to year',
            }
        } else if (req.body.pan === "") {
            resdata = {
                status: 400,
                message: 'Please enter pan',
            }
        } else if (!regex.test(req.body.pan)) {
            resdata = {
                status: 400,
                message: 'Please enter valid pan',
            }
        } else if (req.body.scheme === "") {
            resdata = {
                status: 400,
                message: 'Please enter scheme',
            }
        } else {

            var yer = req.body.fromyear;
            var secyer = req.body.toyear;
            yer = yer + "-04-01";
            secyer = secyer + "-03-31"
            //    if(req.body.pan != "" ){
            const pipeline = [  ///trans_cams                                                     
                { $match: { $and: [{ TRXN_NATUR: /Div/ }, { SCHEME: req.body.scheme }, { PAN: req.body.pan }, { TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                { $group: { _id: { INV_NAME: "$INV_NAME", SCHEME: "$SCHEME", TRXN_NATUR: "$TRXN_NATUR", FOLIO_NO: "$FOLIO_NO", AMOUNT: "$AMOUNT", TRADDATE: "$TRADDATE" } } },
                { $project: { _id: 0, INVNAME: "$_id.INV_NAME", SCHEME: "$_id.SCHEME", TRXN_NATUR: "$_id.TRXN_NATUR", FOLIO_NO: "$_id.FOLIO_NO", AMOUNT: "$_id.AMOUNT", amount_str: "$_id.AMOUNT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } } } },
            ]
            const pipeline1 = [  ///trans_karvy
                { $match: { $and: [{ TRDESC: /Div/ }, { FUNDDESC: req.body.scheme }, { PAN1: req.body.pan }, { TD_TRDT: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                { $group: { _id: { INVNAME: "$INVNAME", FUNDDESC: "$FUNDDESC", TRDESC: "$TRDESC", TD_ACNO: "$TD_ACNO", TD_AMT: "$TD_AMT", TD_TRDT: "$TD_TRDT" } } },
                { $project: { _id: 0, INVNAME: "$_id.INVNAME", SCHEME: "$_id.FUNDDESC", TRXN_NATUR: "$_id.TRDESC", FOLIO_NO: "$_id.TD_ACNO", amount_str: "$_id.TD_AMT", AMOUNT: "$_id.TD_AMT", TRADDATE: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } } } },
            ]

            transc.aggregate(pipeline, (err, camsdata) => {
                transk.aggregate(pipeline1, (err, karvydata) => {
                    if (camsdata != 0 || karvydata != 0) {
                        resdata = {
                            status: 200,
                            message: 'Successfull',
                            data: karvydata
                        }
                        var datacon = karvydata.concat(camsdata);

                        datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                            .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                            .reverse().map(JSON.parse);
                        for (var i = 0; i < datacon.length; i++) {
                            if (datacon[i]['TRXN_NATUR'] === "Gross Dividend") {
                                datacon[i]['TRXN_NATUR'] = "Dividend Payout";
                            } if (datacon[i]['TRXN_NATUR'].match(/Div. Rei.*/) || datacon[i]['TRXN_NATUR'].match(/Dividend Reinvest*/)) {
                                datacon[i]['TRXN_NATUR'] = "Div. Reinv.";
                            } if (datacon[i]['TRXN_NATUR'].match(/Dividend Paid*/)) {
                                datacon[i]['TRXN_NATUR'] = "Div. Paid";
                            } if (datacon[i]['amount_str']) {
                                datacon[i]['amount_str'] = datacon[i]['amount_str'].toLocaleString('en-IN');
                            }
                        }
                        resdata.data = datacon.sort((a, b) => new Date(b.TRADDATE.split("-").reverse().join("/")).getTime() - new Date(a.TRADDATE.split("-").reverse().join("/")).getTime())
                        res.json(resdata)
                        return resdata
                    } else {
                        resdata = {
                            status: 400,
                            message: 'Data not found',
                        }
                        res.json(resdata);
                    }
                });
            });
        }
    } catch (err) {
        console.log(err)
    }
});

app.post("/api/getdividendold", function (req, res) {
    try {
        var member = "";
        var guardpan1 = []; var guardpan2 = []; var alldata = []; var arrFolio = []; var arrName = [];
        let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        if (req.body.fromyear === "") {
            resdata = {
                status: 400,
                message: 'Please enter from year',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.toyear === "") {
            resdata = {
                status: 400,
                message: 'Please enter to year',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.pan === "") {
            resdata = {
                status: 400,
                message: 'Please enter pan',
            }
            res.json(resdata);
            return resdata;
        } else if (!regex.test(req.body.pan)) {
            resdata = {
                status: 400,
                message: 'Please enter valid pan',
            }
            res.json(resdata);
            return resdata;
        } else {

            var yer = req.body.fromyear;
            var secyer = req.body.toyear;
            yer = yer + "-04-01";
            secyer = secyer + "-03-31"
            var arr1 = []; var arr2 = []; var arr3 = [];
            family.find({ adminPan: { $regex: `^${req.body.pan}.*`, $options: 'i' } }, { _id: 0, memberPan: 1 }, function (err, member) {
                if (member != "") {
                    member = [...new Set(member.map(({ memberPan }) => memberPan.toUpperCase()))];
                    guardpan1.push({ GUARD_PAN: req.body.pan.toUpperCase() });
                    guardpan2.push({ GUARDPANNO: req.body.pan.toUpperCase() });
                    arr1.push({ PAN: req.body.pan.toUpperCase() });
                    arr2.push({ PAN1: req.body.pan.toUpperCase() });
                    arr3.push({ IT_PAN_NO1: req.body.pan.toUpperCase() });
                    for (var j = 0; j < member.length; j++) {
                        guardpan1.push({ GUARD_PAN: member[j] });
                        guardpan2.push({ GUARDPANNO: member[j] });
                        arr1.push({ PAN: member[j] });
                        arr2.push({ PAN1: member[j] });
                        arr3.push({ IT_PAN_NO1: member[j] });
                    }
                    var strPan1 = { $or: guardpan1 };
                    var strPan2 = { $or: guardpan2 };

                    //arr1.push({PAN:arr1});

                    folioc.find(strPan1).distinct("FOLIOCHK", function (err, member1) {
                        foliok.find(strPan2).distinct("ACNO", function (err, member2) {
                            var alldata = member1.concat(member2);


                            for (var j = 0; j < alldata.length; j++) {
                                arr1.push({ FOLIO_NO: alldata[j] });
                                arr2.push({ TD_ACNO: alldata[j] });
                                arr3.push({ FOLIO_NO: alldata[j] });
                            }

                            var strFolio = { $or: arr1 };
                            var strFolio1 = { $or: arr2 };
                            var strFolio2 = { $or: arr3 };

                            pipeline = [  ///trans_cams                                                     
                                { $match: { $and: [strFolio, { TRXN_NATUR: /Div/ }, { TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                                { $group: { _id: { PAN: "$PAN", TRXN_TYPE_: "$TRXN_TYPE_", TAX_STATUS: "$TAX_STATUS", SCHEME: "$SCHEME", FOLIO_NO: "$FOLIO_NO", INV_NAME: "$INV_NAME" }, AMOUNT: { $sum: "$AMOUNT" } } },
                                { $project: { _id: 0, PAN: "$_id.PAN", TRXN_NATUR: "$_id.TRXN_TYPE_", PER_STATUS: "$_id.TAX_STATUS", SCHEME: "$_id.SCHEME", FOLIO_NO: "$_id.FOLIO_NO", INVNAME: "$_id.INV_NAME", AMOUNT: { $sum: "$AMOUNT" } } },
                                { $lookup: { from: 'folio_cams', localField: 'FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
                                { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                                { $project: { detail: 0, _id: 0, TAX_STATUS: 0, FOLIOCHK: 0, AC_NO: 0, FOLIO_DATE: 0, PRODUCT: 0, SCH_NAME: 0, AMC_CODE: 0, BANK_NAME: 0, HOLDING_NA: 0, IFSC_CODE: 0, JNT_NAME1: 0, JNT_NAME2: 0, JOINT1_PAN: 0, NOM2_NAME: 0, NOM3_NAME: 0, NOM_NAME: 0, PRCODE: 0, HOLDING_NATURE: 0, PAN_NO: 0, INV_NAME: 0, EMAIL: 0 } },
                                { $sort: { TRADDATE: -1 } }
                            ]
                            pipeline1 = [  ///trans_karvy
                                { $match: { $and: [strFolio1, { $or: [{ TD_TRTYPE: /DIV/ }, { TRDESC: /.*Div.*/ }] }, { TD_TRDT: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                                { $group: { _id: { PAN1: "$PAN1", TD_TRTYPE: "$TD_TRTYPE", STATUS: "$STATUS", FUNDDESC: "$FUNDDESC", TD_ACNO: "$TD_ACNO", INVNAME: "$INVNAME" }, TD_AMT: { $sum: "$TD_AMT" } } },
                                { $project: { _id: 0, PAN: "$_id.PAN1", TRXN_NATUR: "$_id.TD_TRTYPE", PER_STATUS: "$_id.STATUS", SCHEME: "$_id.FUNDDESC", FOLIO_NO: "$_id.TD_ACNO", INVNAME: "$_id.INVNAME", AMOUNT: { $sum: "$TD_AMT" } } },
                                { $lookup: { from: 'folio_karvy', localField: 'FOLIO_NO', foreignField: 'ACNO', as: 'detail' } },
                                { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                                { $project: { detail: 0, _id: 0, STATUS: 0, PRCODE: 0, STATUSDESC: 0, ACNO: 0, BNKACNO: 0, BNKACTYPE: 0, FUNDDESC: 0, NOMINEE: 0, MODEOFHOLD: 0, JTNAME2: 0, FUND: 0, EMAIL: 0, BNAME: 0, PANGNO: 0, JTNAME1: 0, PAN2: 0 } },
                                { $sort: { TRADDATE: -1 } }
                            ]
                            //  pipeline2 = [  ///trans_franklin
                            //         { $match: { $and: [strFolio2, { $or: [{ TRXN_TYPE: /DIR/ }, { TRXN_TYPE: /DP/ }] }, { TRXN_DATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                            //         { $group: { _id: { IT_PAN_NO1:"$IT_PAN_NO1",TRXN_TYPE:"$TRXN_TYPE",SOCIAL_S18:"$SOCIAL_S18",SCHEME_NA1: "$SCHEME_NA1",FOLIO_NO:"$FOLIO_NO", INVESTOR_2: "$INVESTOR_2" }, AMOUNT: { $sum: "$AMOUNT" } } },
                            //         { $project: { _id: 0,PAN:"$_id.IT_PAN_NO1",TRXN_NATUR:"$_id.TRXN_TYPE",PER_STATUS:"$_id.SOCIAL_S18", SCHEME: "$_id.SCHEME_NA1", FOLIO_NO:"$_id.FOLIO_NO",INVNAME: "$_id.INVESTOR_2", AMOUNT: { $sum: "$AMOUNT" } } },
                            //         { $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$detail", 0 ] }, "$$ROOT" ] } } } ,
                            //         { $lookup: { from: 'folio_franklin', localField: 'FOLIO_NO', foreignField: 'FOLIO_NO', as: 'detail' } },
                            //         { $project: { detail: 0 ,_id:0,TAX_STATUS:0,FOLIO_NO:0,PERSONAL_9:0,ACCNT_NO:0,AC_TYPE:0,ADDRESS1:0,BANK_CODE:0,BANK_NAME:0,COMP_CODE:0,D_BIRTH:0,EMAIL:0,HOLDING_T6:0,F_NAME:0,IFSC_CODE:0,JOINT_NAM1:0,JOINT_NAM2:0,KYC_ID:0,NEFT_CODE:0,NOMINEE1:0,PBANK_NAME:0,PANNO2:0,PANNO1:0,PHONE_RES:0,SOCIAL_ST7:0} },
                            //         { $sort: { TRADDATE: -1 } }
                            // ]

                            transc.aggregate(pipeline, (err, camsdata) => {
                                transk.aggregate(pipeline1, (err, karvydata) => {
                                    //transf.aggregate(pipeline2, (err, frankdata) => {
                                    if (karvydata != 0 || camsdata != 0) {
                                        resdata = {
                                            status: 200,
                                            message: 'Successfull',
                                            data: karvydata
                                        }

                                        var datacon = karvydata.concat(camsdata);
                                        //console.log(datacon);
                                        datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                                            .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                                            .reverse().map(JSON.parse);
                                        var newdata1 = datacon.map(item => {
                                            return [JSON.stringify(item), item]
                                        }); // creates array of array
                                        var maparr1 = new Map(newdata1); // create key value pair from array of array
                                        datacon = [...maparr1.values()];//converting back to array from mapobject 
                                        datacon = datacon.map(function (obj) {
                                            if (obj['GUARDIANN0']) {
                                                obj['GUARD_NAME'] = obj['GUARDIANN0']; // Assign new key
                                                obj['GUARD_PAN'] = obj['GUARDPANNO'];
                                                // Delete old key
                                                delete obj['GUARDIANN0'];
                                                delete obj['GUARDPANNO'];
                                            } else if ((obj['GUARDIANN0']) === "") {
                                                obj['GUARD_NAME'] = obj['GUARDIANN0']; // Assign new key
                                                obj['GUARD_PAN'] = obj['GUARDPANNO'];
                                                delete obj['GUARDIANN0'];
                                                delete obj['GUARDPANNO'];
                                            }
                                            if (obj['GUARDIAN20']) {
                                                obj['GUARD_NAME'] = obj['GUARDIAN20']; // Assign new key
                                                // Delete old key
                                                delete obj['GUARDIAN20'];
                                            } else if ((obj['GUARDIAN20']) === "") {
                                                obj['GUARD_NAME'] = obj['GUARDIAN20']; // Assign new key
                                                delete obj['GUARDIAN20'];
                                            }
                                            return obj;
                                        });
                                        for (var i = 0; i < datacon.length; i++) {
                                            if (datacon[i]['PER_STATUS'] === "On Behalf Of Minor" || datacon[i]['PER_STATUS'] === "MINOR" || datacon[i]['PER_STATUS'] === "On Behalf of Minor") {
                                                datacon[i]['PER_STATUS'] = "Minor";
                                            } if (datacon[i]['PER_STATUS'] === "INDIVIDUAL") {
                                                datacon[i]['PER_STATUS'] = "Individual";
                                            } if (datacon[i]['PER_STATUS'] === "HINDU UNDIVIDED FAMI") {
                                                datacon[i]['PER_STATUS'] = "HUF";
                                            } if (datacon[i]['PER_STATUS'] === "HINDU UNDIVIDED FAMI") {
                                                datacon[i]['PER_STATUS'] = "HUF";
                                            }
                                        }
                                        resdata.data = datacon;
                                        res.json(resdata);
                                        return resdata;
                                    } else {
                                        resdata = {
                                            status: 400,
                                            message: 'Data Not Found',
                                        }
                                        res.json(resdata);
                                        return resdata;
                                    }

                                    //  });
                                });
                            });
                        });
                    });
                } else {
                    pipeline = [  ///trans_cams                                                                    
                        { $match: { $and: [{ TRXN_NATUR: /Div/ }, { PAN: req.body.pan }, { TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                        { $group: { _id: { PAN: "$PAN", TRXN_TYPE_: "$TRXN_TYPE_", TAX_STATUS: "$TAX_STATUS", SCHEME: "$SCHEME", FOLIO_NO: "$FOLIO_NO", INV_NAME: "$INV_NAME" }, AMOUNT: { $sum: "$AMOUNT" } } },
                        { $project: { _id: 0, PAN: "$_id.PAN", TRXN_NATUR: "$_id.TRXN_TYPE_", PER_STATUS: "$_id.TAX_STATUS", SCHEME: "$_id.SCHEME", FOLIO_NO: "$_id.FOLIO_NO", INVNAME: "$_id.INV_NAME", AMOUNT: { $sum: "$AMOUNT" } } },
                        { $lookup: { from: 'folio_cams', localField: 'FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
                        { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                        { $project: { detail: 0, _id: 0, TAX_STATUS: 0, FOLIOCHK: 0, AC_NO: 0, FOLIO_DATE: 0, PRODUCT: 0, SCH_NAME: 0, AMC_CODE: 0, BANK_NAME: 0, HOLDING_NA: 0, IFSC_CODE: 0, JNT_NAME1: 0, JNT_NAME2: 0, JOINT1_PAN: 0, NOM2_NAME: 0, NOM3_NAME: 0, NOM_NAME: 0, PRCODE: 0, HOLDING_NATURE: 0, PAN_NO: 0, INV_NAME: 0, EMAIL: 0 } },
                        { $sort: { TRADDATE: -1 } }
                    ]
                    pipeline1 = [  ///trans_karvy
                        { $match: { $and: [{ $or: [{ TD_TRTYPE: /DIV/ }, { TRDESC: /Div/ }] }, { PAN1: req.body.pan }, { TD_TRDT: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                        { $group: { _id: { PAN1: "$PAN1", TD_TRTYPE: "$TD_TRTYPE", STATUS: "$STATUS", FUNDDESC: "$FUNDDESC", TD_ACNO: "$TD_ACNO", INVNAME: "$INVNAME" }, TD_AMT: { $sum: "$TD_AMT" } } },
                        { $project: { _id: 0, PAN: "$_id.PAN1", TRXN_NATUR: "$_id.TD_TRTYPE", PER_STATUS: "$_id.STATUS", SCHEME: "$_id.FUNDDESC", FOLIO_NO: "$_id.TD_ACNO", INVNAME: "$_id.INVNAME", AMOUNT: { $sum: "$TD_AMT" } } },
                        { $lookup: { from: 'folio_karvy', localField: 'FOLIO_NO', foreignField: 'ACNO', as: 'detail' } },
                        { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                        { $project: { detail: 0, _id: 0, STATUS: 0, PRCODE: 0, STATUSDESC: 0, ACNO: 0, BNKACNO: 0, BNKACTYPE: 0, FUNDDESC: 0, NOMINEE: 0, MODEOFHOLD: 0, JTNAME2: 0, FUND: 0, EMAIL: 0, BNAME: 0, PANGNO: 0, JTNAME1: 0, PAN2: 0 } },
                        { $sort: { TRADDATE: -1 } }
                    ]
                    pipeline2 = [  ///trans_franklin
                        { $match: { $and: [{ $or: [{ TRXN_TYPE: /DIR/ }, { TRXN_TYPE: /DP/ }] }, { IT_PAN_NO1: req.body.pan }, { TRXN_DATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                        { $group: { _id: { IT_PAN_NO1: "$IT_PAN_NO1", TRXN_TYPE: "$TRXN_TYPE", SOCIAL_S18: "$SOCIAL_S18", SCHEME_NA1: "$SCHEME_NA1", FOLIO_NO: "$FOLIO_NO", INVESTOR_2: "$INVESTOR_2" }, AMOUNT: { $sum: "$AMOUNT" } } },
                        { $project: { _id: 0, PAN: "$_id.IT_PAN_NO1", TRXN_NATUR: "$_id.TRXN_TYPE", PER_STATUS: "$_id.SOCIAL_S18", SCHEME: "$_id.SCHEME_NA1", FOLIO_NO: "$_id.FOLIO_NO", INVNAME: "$_id.INVESTOR_2", AMOUNT: { $sum: "$AMOUNT" } } },
                        { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                        { $lookup: { from: 'folio_franklin', localField: 'FOLIO_NO', foreignField: 'FOLIO_NO', as: 'detail' } },
                        { $project: { detail: 0, _id: 0, TAX_STATUS: 0, FOLIO_NO: 0, PERSONAL_9: 0, ACCNT_NO: 0, AC_TYPE: 0, ADDRESS1: 0, BANK_CODE: 0, BANK_NAME: 0, COMP_CODE: 0, D_BIRTH: 0, EMAIL: 0, HOLDING_T6: 0, F_NAME: 0, IFSC_CODE: 0, JOINT_NAM1: 0, JOINT_NAM2: 0, KYC_ID: 0, NEFT_CODE: 0, NOMINEE1: 0, PBANK_NAME: 0, PANNO2: 0, PANNO1: 0, PHONE_RES: 0, SOCIAL_ST7: 0 } },
                        { $sort: { TRADDATE: -1 } }
                    ]
                    transc.aggregate(pipeline, (err, camsdata) => {
                        transk.aggregate(pipeline1, (err, karvydata) => {
                            transf.aggregate(pipeline2, (err, frankdata) => {
                                if (camsdata != 0 || karvydata != 0 || frankdata != 0) {
                                    resdata = {
                                        status: 200,
                                        message: 'Successfull',
                                        data: frankdata
                                    }
                                    var datacon = frankdata.concat(karvydata.concat(camsdata))
                                    datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                                        .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                                        .reverse().map(JSON.parse);
                                    resdata.data = datacon;
                                    res.json(resdata);
                                    return resdata;
                                } else {
                                    resdata = {
                                        status: 400,
                                        message: 'Data not found',
                                    }
                                    res.json(resdata);
                                    return resdata;
                                }
                            });
                        });
                    });
                }
            });
        }
    } catch (err) {
        console.log(err)
    }
});

app.post("/api/getdividend", function (req, res) {
    try {
        var member = "";
        var guardpan1 = []; var guardpan2 = []; var alldata = []; var arrFolio = []; var arrName = [];
        let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        if (req.body.fromyear === "") {
            resdata = {
                status: 400,
                message: 'Please enter from year',
            }

        } else if (req.body.toyear === "") {
            resdata = {
                status: 400,
                message: 'Please enter to year',
            }
        } else if (req.body.pan === "") {
            resdata = {
                status: 400,
                message: 'Please enter pan',
            }
        } else if (!regex.test(req.body.pan)) {
            resdata = {
                status: 400,
                message: 'Please enter valid pan',
            }
        } else {

            var yer = req.body.fromyear;
            var secyer = req.body.toyear;
            yer = yer + "-04-01";
            secyer = secyer + "-03-31"
            var arr1 = []; var arr2 = []; var arr3 = [];
            family.find({ adminPan: { $regex: `^${req.body.pan}.*`, $options: 'i' } }, { _id: 0, memberPan: 1 }, function (err, member) {
                if (member != "") {
                    member = [...new Set(member.map(({ memberPan }) => memberPan.toUpperCase()))];
                    guardpan1.push({ GUARD_PAN: req.body.pan.toUpperCase() });
                    guardpan2.push({ GUARDPANNO: req.body.pan.toUpperCase() });
                    arr1.push({ PAN: req.body.pan.toUpperCase() });
                    arr2.push({ PAN1: req.body.pan.toUpperCase() });
                    arr3.push({ IT_PAN_NO1: req.body.pan.toUpperCase() });
                    for (var j = 0; j < member.length; j++) {
                        guardpan1.push({ GUARD_PAN: member[j] });
                        guardpan2.push({ GUARDPANNO: member[j] });
                        arr1.push({ PAN: member[j] });
                        arr2.push({ PAN1: member[j] });
                        arr3.push({ IT_PAN_NO1: member[j] });
                    }
                    var strPan1 = { $or: guardpan1 };
                    var strPan2 = { $or: guardpan2 };

                    //arr1.push({PAN:arr1});

                    folioc.find(strPan1).distinct("FOLIOCHK", function (err, member1) {
                        foliok.find(strPan2).distinct("ACNO", function (err, member2) {
                            var alldata = member1.concat(member2);


                            for (var j = 0; j < alldata.length; j++) {
                                arr1.push({ FOLIO_NO: alldata[j] });
                                arr2.push({ TD_ACNO: alldata[j] });
                                //   arr3.push({ FOLIO_NO: alldata[j] });
                            }

                            var strFolio = { $or: arr1 };
                            var strFolio1 = { $or: arr2 };
                            // var strFolio2 = { $or: arr3 };

                            pipeline = [  //trans_cams                                                     
                                { $match: { $and: [strFolio, { TRXN_NATUR: /Div/ }, { TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                                { $group: { _id: { PAN: "$PAN", TAX_STATUS: "$TAX_STATUS", SCHEME: "$SCHEME", FOLIO_NO: "$FOLIO_NO", INV_NAME: "$INV_NAME" }, AMOUNT: { $sum: "$AMOUNT" } } },
                                { $project: { _id: 0, PAN: "$_id.PAN", PER_STATUS: "$_id.TAX_STATUS", SCHEME: "$_id.SCHEME", FOLIO_NO: "$_id.FOLIO_NO", INVNAME: "$_id.INV_NAME", amount_str: { $sum: "$AMOUNT" }, AMOUNT: { $sum: "$AMOUNT" } } },
                                { $lookup: { from: 'folio_cams', localField: 'FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
                                { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                                { $project: { detail: 0, _id: 0, TAX_STATUS: 0, FOLIOCHK: 0, AC_NO: 0, FOLIO_DATE: 0, PRODUCT: 0, SCH_NAME: 0, AMC_CODE: 0, BANK_NAME: 0, HOLDING_NA: 0, IFSC_CODE: 0, JNT_NAME1: 0, JNT_NAME2: 0, JOINT1_PAN: 0, NOM2_NAME: 0, NOM3_NAME: 0, NOM_NAME: 0, PRCODE: 0, HOLDING_NATURE: 0, PAN_NO: 0, INV_NAME: 0, EMAIL: 0 } },
                                { $sort: { TRADDATE: -1 } }
                            ]
                            pipeline1 = [  ///trans_karvy
                                { $match: { $and: [strFolio1, { $or: [{ TD_TRTYPE: /DIV/ }, { TRDESC: /.*Div.*/ }] }, { TD_TRDT: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                                { $group: { _id: { PAN1: "$PAN1", STATUS: "$STATUS", FUNDDESC: "$FUNDDESC", TD_ACNO: "$TD_ACNO", INVNAME: "$INVNAME" }, TD_AMT: { $sum: "$TD_AMT" } } },
                                { $project: { _id: 0, PAN: "$_id.PAN1", PER_STATUS: "$_id.STATUS", SCHEME: "$_id.FUNDDESC", FOLIO_NO: "$_id.TD_ACNO", INVNAME: "$_id.INVNAME", amount_str: { $sum: "$TD_AMT" }, AMOUNT: { $sum: "$TD_AMT" } } },
                                { $lookup: { from: 'folio_karvy', localField: 'FOLIO_NO', foreignField: 'ACNO', as: 'detail' } },
                                { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                                { $project: { detail: 0, _id: 0, STATUS: 0, PRCODE: 0, STATUSDESC: 0, ACNO: 0, BNKACNO: 0, BNKACTYPE: 0, FUNDDESC: 0, NOMINEE: 0, MODEOFHOLD: 0, JTNAME2: 0, FUND: 0, EMAIL: 0, BNAME: 0, PANGNO: 0, JTNAME1: 0, PAN2: 0 } },
                                { $sort: { TRADDATE: -1 } }
                            ]
                            transc.aggregate(pipeline, (err, camsdata) => {
                                transk.aggregate(pipeline1, (err, karvydata) => {
                                    if (karvydata != 0 || camsdata != 0) {
                                        resdata = {
                                            status: 200,
                                            message: 'Successfull',
                                            data: karvydata
                                        }

                                        var datacon = karvydata.concat(camsdata);
                                        datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                                            .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                                            .reverse().map(JSON.parse);
                                        var newdata1 = datacon.map(item => {
                                            return [JSON.stringify(item), item]
                                        }); // creates array of array
                                        var maparr1 = new Map(newdata1); // create key value pair from array of array
                                        datacon = [...maparr1.values()];//converting back to array from mapobject 
                                        datacon = datacon.map(function (obj) {
                                            if (obj['GUARDIANN0']) {
                                                obj['GUARD_NAME'] = obj['GUARDIANN0']; // Assign new key
                                                obj['GUARD_PAN'] = obj['GUARDPANNO'];
                                                // Delete old key
                                                delete obj['GUARDIANN0'];
                                                delete obj['GUARDPANNO'];
                                            } else if ((obj['GUARDIANN0']) === "") {
                                                obj['GUARD_NAME'] = obj['GUARDIANN0']; // Assign new key
                                                obj['GUARD_PAN'] = obj['GUARDPANNO'];
                                                delete obj['GUARDIANN0'];
                                                delete obj['GUARDPANNO'];
                                            }
                                            if (obj['GUARDIAN20'] === "") {
                                                obj['GUARD_NAME'] = obj['GUARDIAN20']; // Assign new key
                                                // Delete old key
                                                delete obj['GUARDIAN20'];
                                            } else if ((obj['GUARDIAN20']) === "") {
                                                obj['GUARD_NAME'] = obj['GUARDIAN20']; // Assign new key
                                                delete obj['GUARDIAN20'];
                                            }
                                            return obj;
                                        });
                                        for (var i = 0; i < datacon.length; i++) {
                                            if (datacon[i]['PER_STATUS'] === "On Behalf Of Minor" || datacon[i]['PER_STATUS'] === "MINOR" || datacon[i]['PER_STATUS'] === "On Behalf of Minor") {
                                                datacon[i]['PER_STATUS'] = "Minor";
                                                datacon[i]['PAN'] = "";
                                            } if (datacon[i]['PER_STATUS'] === "INDIVIDUAL") {
                                                datacon[i]['PER_STATUS'] = "Individual";
                                            } if (datacon[i]['PER_STATUS'] === "HINDU UNDIVIDED FAMI") {
                                                datacon[i]['PER_STATUS'] = "HUF";
                                            } if (datacon[i]['amount_str']) {
                                                datacon[i]['amount_str'] = datacon[i]['amount_str'].toLocaleString('en-IN');
                                            }
                                        }
                                        resdata.data = datacon;
                                        res.json(resdata);
                                        return resdata;
                                    } else {
                                        resdata = {
                                            status: 400,
                                            message: 'Data Not Found',
                                        }
                                        res.json(resdata);
                                        return resdata;
                                    }
                                });
                            });
                        });
                    });
                } else {
                    pipeline = [  ///trans_cams                                                                    
                        { $match: { $and: [{ TRXN_NATUR: /Div/ }, { PAN: req.body.pan }, { TRADDATE: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                        { $group: { _id: { PAN: "$PAN", TAX_STATUS: "$TAX_STATUS", SCHEME: "$SCHEME", FOLIO_NO: "$FOLIO_NO", INV_NAME: "$INV_NAME" }, AMOUNT: { $sum: "$AMOUNT" } } },
                        { $project: { _id: 0, PAN: "$_id.PAN", PER_STATUS: "$_id.TAX_STATUS", SCHEME: "$_id.SCHEME", FOLIO_NO: "$_id.FOLIO_NO", INVNAME: "$_id.INV_NAME", amount_str: { $sum: "$AMOUNT" }, AMOUNT: { $sum: "$AMOUNT" } } },
                        { $lookup: { from: 'folio_cams', localField: 'FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
                        { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                        { $project: { detail: 0, _id: 0, TAX_STATUS: 0, FOLIOCHK: 0, AC_NO: 0, FOLIO_DATE: 0, PRODUCT: 0, SCH_NAME: 0, AMC_CODE: 0, BANK_NAME: 0, HOLDING_NA: 0, IFSC_CODE: 0, JNT_NAME1: 0, JNT_NAME2: 0, JOINT1_PAN: 0, NOM2_NAME: 0, NOM3_NAME: 0, NOM_NAME: 0, PRCODE: 0, HOLDING_NATURE: 0, PAN_NO: 0, INV_NAME: 0, EMAIL: 0 } },
                        { $sort: { TRADDATE: -1 } }
                    ]
                    pipeline1 = [  ///trans_karvy
                        { $match: { $and: [{ $or: [{ TD_TRTYPE: /DIV/ }, { TRDESC: /Div/ }] }, { PAN1: req.body.pan }, { TD_TRDT: { $gte: new Date(moment(yer).format("YYYY-MM-DD")), $lt: new Date(moment(secyer).format("YYYY-MM-DD")) } }] } },
                        { $group: { _id: { PAN1: "$PAN1", STATUS: "$STATUS", FUNDDESC: "$FUNDDESC", TD_ACNO: "$TD_ACNO", INVNAME: "$INVNAME" }, TD_AMT: { $sum: "$TD_AMT" } } },
                        { $project: { _id: 0, PAN: "$_id.PAN1", PER_STATUS: "$_id.STATUS", SCHEME: "$_id.FUNDDESC", FOLIO_NO: "$_id.TD_ACNO", INVNAME: "$_id.INVNAME", amount_str: { $sum: "$TD_AMT" }, AMOUNT: { $sum: "$TD_AMT" } } },
                        { $lookup: { from: 'folio_karvy', localField: 'FOLIO_NO', foreignField: 'ACNO', as: 'detail' } },
                        { $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$detail", 0] }, "$$ROOT"] } } },
                        { $project: { detail: 0, _id: 0, STATUS: 0, PRCODE: 0, STATUSDESC: 0, ACNO: 0, BNKACNO: 0, BNKACTYPE: 0, FUNDDESC: 0, NOMINEE: 0, MODEOFHOLD: 0, JTNAME2: 0, FUND: 0, EMAIL: 0, BNAME: 0, PANGNO: 0, JTNAME1: 0, PAN2: 0 } },
                        { $sort: { TRADDATE: -1 } }
                    ]

                    transc.aggregate(pipeline, (err, camsdata) => {
                        transk.aggregate(pipeline1, (err, karvydata) => {
                            if (camsdata != 0 || karvydata != 0) {
                                resdata = {
                                    status: 200,
                                    message: 'Successfull',
                                    data: karvydata
                                }
                                var datacon = karvydata.concat(camsdata)
                                datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                                    .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                                    .reverse().map(JSON.parse);

                                for (var i = 0; i < datacon.length; i++) {
                                    if (datacon[i]['PER_STATUS'] === "On Behalf Of Minor" || datacon[i]['PER_STATUS'] === "MINOR" || datacon[i]['PER_STATUS'] === "On Behalf of Minor") {
                                        datacon[i]['PER_STATUS'] = "Minor";
                                        datacon[i]['PAN'] = "";
                                    } if (datacon[i]['PER_STATUS'] === "INDIVIDUAL") {
                                        datacon[i]['PER_STATUS'] = "Individual";
                                    } if (datacon[i]['PER_STATUS'] === "HINDU UNDIVIDED FAMI") {
                                        datacon[i]['PER_STATUS'] = "HUF";
                                    } if (datacon[i]['amount_str']) {
                                        datacon[i]['amount_str'] = datacon[i]['amount_str'].toLocaleString('en-IN');
                                    }
                                }
                                resdata.data = datacon;
                                res.json(resdata);
                                return resdata;
                            } else {
                                resdata = {
                                    status: 400,
                                    message: 'Data not found',
                                }
                                res.json(resdata);
                                return resdata;
                            }
                        });
                    });
                }
            });
        }
    } catch (err) {
        console.log(err)
    }
});

app.post("/api/isPANexist", function (req, res) {
    try {
        const emailRegex = /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/; //Email Validation
        const EmailValid = emailRegex.test(req.body.email)
        if (req.body.email === "") {
            resdata = {
                status: 400,
                message: 'Please enter email',
            }
            res.json(resdata)
            return resdata;
        } else if (EmailValid === false) {
            resdata = {
                status: 400,
                message: 'Please enter valid email',
            }
            res.json(resdata)
            return resdata;
        } else if (req.body.memberPan === "") {
            resdata = {
                status: 400,
                message: 'Please enter pan',
            }
            res.json(resdata)
            return resdata;
        } else {
            let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
            if (!regex.test(req.body.memberPan)) {
                resdata = {
                    status: 400,
                    message: 'Please enter valid pan',
                }
                res.json(resdata);
                return resdata;
            } else {
                const requestdata = {
                    "pan_number": req.body.memberPan,
                    "email": req.body.email
                }

                Axios.post('https://mfprodigy.bfccapital.com/api/showexistinguser', requestdata,
                ).then(function (result) {
                    //   console.log("result=",result)
                    if (result.data.status === 200) {
                        //console.log("api=",result.data)
                        foliok.find({ PANGNO: req.body.memberPan }, { _id: 0, EMAIL: 1 }, function (err, foliokarvydata) {
                            folioc.find({ PAN_NO: req.body.memberPan }, { _id: 0, EMAIL: 1 }, function (err, foliocamsdata) {
                                if (foliokarvydata != "" || foliocamsdata != "") {
                                    resdata = {
                                        status: 200,
                                        message: 'Successful',
                                        //    data: foliocamsdata,
                                    }
                                    datacon = foliokarvydata.concat(foliocamsdata);
                                    datacon = datacon.filter(
                                        (temp => a =>
                                            (k => !temp[k] && (temp[k] = true))(a.email + '|' + a.email)
                                        )(Object.create(null))
                                    );
                                    //   console.log("res=",datacon)
                                    //  resdata.data = datacon;
                                    res.json(resdata)
                                    return resdata;
                                } else {
                                    resdata = {
                                        status: 400,
                                        message: 'PAN not found!',
                                    }
                                    res.json(resdata)
                                    return resdata;
                                }
                            });
                        });
                    } else {
                        resdata = {
                            status: 201,
                            message: result.data.message,
                        }
                        res.json(resdata)
                        return resdata;
                    }

                    // res.json(result.data);
                });

            }
        }
    } catch (err) {
        console.log(err)
    }
});

app.post("/api/PANVerification", function (req, res) {
    try {
        let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        if (req.body.memberPan === "") {
            resdata = {
                status: 400,
                message: 'Please Enter Member Pan!',
            }
            res.json(resdata)
            return resdata;
        } else if (!regex.test(req.body.memberPan)) {
            resdata = {
                status: 400,
                message: 'Member Pan is invalid!',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.adminPan === "") {
            resdata = {
                status: 400,
                message: 'Please Enter Admin Pan!',
            }
            res.json(resdata);
            return resdata;
        } else if (!regex.test(req.body.adminPan)) {
            resdata = {
                status: 400,
                message: 'Admin Pan is invalid!',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.memberPan === req.body.adminPan) {
            resdata = {
                status: 400,
                message: 'The PAN is already registered as Primary User.',
            }
            res.json(resdata);
        } else {
            //var mod = new family({ memberPan: req.body.memberPan });

            // family.find({ memberPan: req.body.memberPan }).distinct("memberPan", function (err, memberdata) {
            family.find({ memberPan: req.body.memberPan, adminPan: req.body.adminPan }, { _id: 0 }, function (err, memberdata) {
                if (memberdata.length === 0) {
                    foliok.find({ PANGNO: req.body.memberPan }, { _id: 0, EMAIL: 1, Name: "$INVNAME", Phone: "$MOBILE" }, function (err, foliokarvydata) {
                        folioc.find({ PAN_NO: req.body.memberPan }, { _id: 0, EMAIL: 1, Name: "$INV_NAME", Phone: "$MOBILE_NO" }, function (err, foliocamsdata) {
                            foliof.find({ PANNO1: req.body.memberPan }, { _id: 0, EMAIL: 1, Name: "$INV_NAME", Phone: "$PHONE_RES" }, function (err, foliofranklindata) {
                                if (foliokarvydata != "" || foliocamsdata != "" || foliofranklindata != "") {
                                    resdata = {
                                        status: 200,
                                        message: 'Successful',
                                        data: foliofranklindata,
                                    }
                                    datacon = foliokarvydata.concat(foliocamsdata.concat(foliofranklindata));
                                    datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                                        .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                                        .reverse().map(JSON.parse);
                                    var digits = '0123456789';
                                    let OTP = '';
                                    for (let k = 0; k < 6; k++) {
                                        OTP += digits[Math.floor(Math.random() * 10)];
                                    }

                                    localStorage.setItem('otp', OTP);
                                    localStorage.setItem('memberPan', req.body.memberPan);
                                    var name = datacon[0].Name;
                                    var phone = datacon[0].Phone;
                                    //  var phone="8859908258";
                                    // 				 for(var j=0;j<datacon.length;j++){
                                    //                                     datacon[j].EMAIL = datacon[j].EMAIL.toUpperCase();
                                    //                                     datacon[j].Name = datacon[j].Name.toUpperCase();
                                    //                                 }
                                    // 			    datacon = datacon.filter(
                                    //                                     (temp => a =>
                                    //                                         (k => !temp[k] && (temp[k] = true))(a.EMAIL + '|'+ a.Phone)
                                    //                                     )(Object.create(null))
                                    //                                 );
                                    //var name= datacon[0].Name;
                                    //  for(var j=0;j<datacon.length;j++){
                                    //datacon[j].Phone=datacon[j].Phone;
                                    // 				datacon[j].EMAIL = datacon[j].EMAIL.toUpperCase();
                                    // 				datacon[j].Name = datacon[j].Name.toUpperCase();


                                    // Axios.get("http://nimbusit.biz/api/SmsApi/SendSingleApi?UserID=bfccapital&Password=obmh6034OB&SenderID=BFCCAP&EntityID=1201160224111799498&TemplateID=1207162615727439769&Phno=" + phone + "&Msg=Dear " + name + ",Your Family Member has requested to link your Mutual Fund Investment Folio(s) to his/her portfolio.You can authorize the same by sharing the OTP - " + OTP + " with your family member. BFC Capital.",
                                    // ).then(function (result) {
                                    //     console.log('SMS send successfully', phone);
                                    // });
                                    //   }
                                    resdata.data = [...new Set(datacon.map(({ EMAIL }) => EMAIL.toLowerCase()))]
                                    //resdata.data = datacon;
                                    for (var j = 0; j < resdata.data.length; j++) {
                                        var toemail = resdata.data[j];
                                        // var transporter = nodemailer.createTransport({
                                        //     host: 'mail.bfccapital.com',
                                        //     port: 465,
                                        //     secure: true,
                                        //     auth: {
                                        //         user: "customersupport@bfccapital.com",
                                        //         pass: "customersupport@123"
                                        //     }
                                        // });
                                        var transporter = nodemailer.createTransport({
                                            host: 'email-smtp.ap-south-1.amazonaws.com',
                                            port: 587,
                                            secure: false,
                                            auth: {
                                                user: "AKIAVISWQSDTXGSKZLFM",
                                                pass: "BNISad+Qvf8JxoQQkREt26YyGxtru+njvsO5EWFCf8xH"
                                            }
                                        });
                                        transporter.verify(function (error, success) {
                                            if (error) {
                                                console.log("EMAIL: Error==>", error);
                                            } else {
                                                console.log("Server is ready to take our messages!");
                                            }
                                        });

                                        let mailOptions = {
                                            //    from: "customersupport@bfccapital.com",
                                            from: {
                                                name: 'BFC Capital',
                                                address: 'no-reply@bfccapital.com'
                                            },
                                            // to: toemail,
                                            to: "saurabhp.bfc@gmail.com",
                                            //cc: "pallavisinghbfcinfotech@gmail.com",
                                            subject: "Mapping of Family Member's Folio(s)",
                                            html: "Dear " + name + ",<br><br>Your Family Member has requested to link your Mutual Fund Investment Folio(s) to his/her portfolio.You can authorize the same by sharing the OTP- <b>" + OTP + "</b> with your family member. <br><br>Note - By accepting this request, your family member can view your investment folios and initiate transactions on your behalf and such transactions will be processed only after your approval subject to your payment confirmation or OTP confirmation wherever applicable.<br><br>In case you need any clarification, please contact us on 9506031502 or you can also email to customersupport@bfccapital.com, quoting your PAN, mobile no. and your query.<br><br>Thanks & Regards<br>Team BFC Capital"
                                        }
                                        transporter.sendMail(mailOptions, function (error, info) {
                                            if (error) {
                                                console.log(error);
                                            } else {
                                                console.log('Email sent: ' + info.response);
                                            }
                                        });
                                    }
                                    res.json(resdata)
                                    return resdata;
                                } else {
                                    resdata = {
                                        status: 400,
                                        message: 'We don\'t have any investments on this PAN.',
                                    }
                                    res.json(resdata)
                                    return resdata;
                                }
                            });
                        });
                    });
                } else {
                    resdata = {
                        status: 400,
                        message: 'This PAN is already added.',
                    }
                    res.json(resdata)
                    return resdata;
                }
            });
        }
    } catch (err) {
        console.log(err)
    }
});

app.post("/api/verifiyPanOtpAddFamily", function (req, res) {
    try {
        if (req.body.adminPan === "") {
            resdata = {
                status: 400,
                message: 'Please enter admin pan!',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.memberPan === "") {
            resdata = {
                status: 400,
                message: 'Please enter member pan!',
            }
            res.json(resdata);
        } else if (req.body.memberRelation === "") {
            resdata = {
                status: 400,
                message: 'Please enter member relation!',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.otp === "") {
            resdata = {
                status: 400,
                message: 'Please enter otp!',
            }
            res.json(resdata);
            return resdata;
        } else if (req.body.memberPan === req.body.adminPan) {
            resdata = {
                status: 400,
                message: 'Admin Pan & Family member Pan must not be same!',
            }
            res.json(resdata);
        } else {
            var memberdata = "";
            var OTP = localStorage.getItem('otp');
            var memberPan = localStorage.getItem('memberPan');
            if (memberPan != req.body.memberPan) {
                resdata = {
                    status: 400,
                    message: 'Member Pan not match!',
                }
                res.json(resdata);
                return resdata;

            } if (OTP != req.body.otp) {
                resdata = {
                    status: 400,
                    message: 'OTP not matched!',
                }
                res.json(resdata);
                return resdata;
            } else {
                try {
                    var mod = new family({ memberPan: { '$regex': memberPan, '$options': 'i' }, adminPan: { '$regex': req.body.adminPan, '$options': 'i' }, memberRelation: req.body.memberRelation, email: req.body.email, date: moment(new Date()).format("YYYY-MM-DD") });
                    family.find({ memberPan: { '$regex': req.body.memberPan, '$options': 'i' }, adminPan: { '$regex': req.body.adminPan, '$options': 'i' } }, { _id: 0 }, function (err, memberdata) {
                        if (memberdata != "") {
                            resdata = {
                                status: 400,
                                message: 'Family member already exist!',
                            }
                            res.json(resdata)
                            return resdata;
                        } else {
                            mod.save(function (err, data) {
                                if (err) {
                                    console.log(err);
                                }
                                else {
                                    console.log("Insert Successfully");
                                }
                            });
                            resdata = {
                                status: 200,
                                message: 'Insert Successfully',
                            }
                            res.json(resdata)
                            return resdata;
                        }
                    });
                } catch (err) {
                    console.log(err)
                }
            }
        }

    } catch (err) {
        console.log(err)
    }
});

app.post("/api/removeFamilyMember", function (req, res) {
    try {
        req.body.adminPan = req.body.adminPan.toUpperCase();
        req.body.memberPan = req.body.memberPan.toUpperCase();
        if (req.body.adminPan != undefined && req.body.memberPan != undefined && req.body.memberRelation != undefined) {
            let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
            if (req.body.adminPan === "") {
                resdata = {
                    status: 400,
                    message: 'Please enter admin pan!',
                }
                res.json(resdata);
                return resdata;
            } else if (!regex.test(req.body.adminPan)) {
                resdata = {
                    status: 400,
                    message: 'Please enter valid pan',
                }
                res.json(resdata);
                return resdata;
            } else if (req.body.memberPan === "") {
                resdata = {
                    status: 400,
                    message: 'Please enter member pan!',
                }
                res.json(resdata);
            } else if (!regex.test(req.body.memberPan)) {
                resdata = {
                    status: 400,
                    message: 'Please enter valid pan',
                }
                res.json(resdata);
                return resdata;
            } else if (req.body.memberRelation === "") {
                resdata = {
                    status: 400,
                    message: 'Please enter member relation!',
                }
                res.json(resdata);
                return resdata;
            } else if (req.body.primary_user_id === "") {
                resdata = {
                    status: 400,
                    message: 'Please enter user id!',
                }
                res.json(resdata);
            } else if (req.body.memberPan === req.body.adminPan) {
                resdata = {
                    status: 400,
                    message: 'Admin Pan & Family member Pan must not be same!',
                }
                res.json(resdata);
            } else {
                try {
                    family.find({ memberPan: req.body.memberPan, adminPan: req.body.adminPan, memberRelation: { $regex: req.body.memberRelation, $options: 'i' } }, function (err, memberdata) {
                        if (memberdata != "") {
                            var myquery = { memberPan: req.body.memberPan, adminPan: req.body.adminPan, memberRelation: { $regex: req.body.memberRelation, $options: 'i' } }
                            family.remove(myquery, function (err, obj) {
                                const request_data = {
                                    "memberPan": req.body.memberPan,
                                    "adminPan": req.body.adminPan,
                                }
                                Axios.post("https://mfprodigy.bfccapital.com/api/deleteFamilyMember", request_data).then(function (apires) {
                                    console.log("apires=", apires)
                                    if (apires.data.status === 200) {
                                        resdata = {
                                            status: 200,
                                            message: 'Record deleted!',
                                        }
                                        res.json(resdata)
                                        return resdata;
                                    } else {
                                        resdata = {
                                            status: 200,
                                            message: 'Record deleted!',
                                        }
                                        res.json(resdata)
                                        return resdata;
                                    }
                                })
                            });
                        } else {
                            resdata = {
                                status: 400,
                                message: 'This relation not exists!',
                            }
                            res.json(resdata)
                            return resdata;
                        }
                    });
                } catch (err) {
                    console.log(err)
                }
            }
        } else {
            resdata = {
                status: 400,
                message: 'Key not found',
            }
            res.json(resdata);
        }
    } catch (err) {
        console.log(err)
    }
});

app.post("/api/addIINFamilyGroup", function (req, res) {
    try {
        if (req.body.adminPan != undefined && req.body.memberPan != undefined && req.body.memberRelation != undefined && req.body.email != undefined) {
            let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
            if (req.body.adminPan === "") {
                resdata = {
                    status: 400,
                    message: 'Please enter admin pan!',
                }
                res.json(resdata);
                return resdata;
            } else if (!regex.test(req.body.adminPan)) {
                resdata = {
                    status: 400,
                    message: 'Admin Pan is invalid!',
                }
                res.json(resdata);
                return resdata;
            } else if (req.body.memberPan === "") {
                resdata = {
                    status: 400,
                    message: 'Please enter member pan!',
                }
                res.json(resdata);
            } else if (!regex.test(req.body.memberPan)) {
                resdata = {
                    status: 400,
                    message: 'Member Pan is invalid!',
                }
                res.json(resdata);
                return resdata;
            } else if (req.body.memberRelation === "") {
                resdata = {
                    status: 400,
                    message: 'Please enter member relation!',
                }
                res.json(resdata);
                return resdata;
            } else if (req.body.memberPan === req.body.adminPan) {
                resdata = {
                    status: 400,
                    message: 'Admin Pan & Family member Pan must not be same!',
                }
                res.json(resdata);
            } else {
                var memberdata = "";
                try {
                    foliok.find({ PANGNO: req.body.adminPan }, { _id: 0, EMAIL: 1 }, function (err, foliokarvydata) {
                        folioc.find({ PAN_NO: req.body.adminPan }, { _id: 0, EMAIL: 1 }, function (err, foliocamsdata) {
                            if (foliokarvydata != "" || foliocamsdata != "") {
                                var mod = new family({ memberPan: req.body.memberPan, adminPan: req.body.adminPan, memberRelation: req.body.memberRelation, email: req.body.email, date: moment(new Date()).format("YYYY-MM-DD") });
                                family.find({ memberPan: req.body.memberPan, adminPan: req.body.adminPan }, { _id: 0 }, function (err, memberdata) {
                                    if (memberdata != "") {
                                        resdata = {
                                            status: 400,
                                            message: 'Family member already exist!',
                                        }
                                        res.json(resdata)
                                        return resdata;
                                    } else {
                                        mod.save(function (err, data) {
                                            if (err) {
                                                console.log(err);
                                            }
                                            else {
                                                console.log("insert successfully");
                                            }
                                        });
                                        resdata = {
                                            status: 200,
                                            message: 'insert successfully',
                                        }
                                        res.json(resdata)
                                        return resdata;
                                    }
                                });
                            } else {
                                resdata = {
                                    status: 400,
                                    message: 'PAN not found!',
                                }
                                res.json(resdata)
                                return resdata;
                            }
                        });

                    });
                } catch (err) {
                    console.log(err)
                }
                //}
            }
        } else {
            resdata = {
                status: 400,
                message: 'Key not found',
            }
            res.json(resdata);
        }
    } catch (err) {
        console.log(err)
    }
});

app.get("/api/getfoliolist", function (req, res) {
    Axios.get('https://prodigyfinallive.herokuapp.com/getUserDetails',
        { data: { email: req.body.email } }
    ).then(function (result) {
        if (result.data.data === undefined || req.body.email == '') {
            resdata = {
                status: 400,
                message: 'Data not found',
            }
            res.json(resdata)
            return resdata;
        } else {
            if (result.data.data === undefined && result.data.data == '' && result.data.message == "Bank details not found ") {
                resdata = {
                    status: 400,
                    message: 'Data not found',
                }
                res.json(resdata)
                return resdata;
            } else {
                var pan = result.data.data.User[0].pan_card;
                var folioc = mongoose.model('folio_cams', foliocams, 'folio_cams');
                var foliok = mongoose.model('folio_karvy', foliokarvy, 'folio_karvy');
                var foliof = mongoose.model('folio_franklin', foliofranklin, 'folio_franklin');
                var transc = mongoose.model('trans_cams', transcams, 'trans_cams');
                var transf = mongoose.model('trans_franklin', transfranklin, 'trans_franklin');
                folioc.find({ "pan_no": pan }).distinct("foliochk", function (err, newdata) {
                    foliok.find({ "PANNumber": pan }).distinct("Folio", function (err, newdata1) {
                        foliof.find({ "PANNO1": pan }).distinct("FOLIO_NO", function (err, newdata2) {
                            transc.find({ "PAN": pan }).distinct("FOLIO_NO", function (err, newdata3) {
                                transf.find({ "IT_PAN_NO1": pan }).distinct("FOLIO_NO", function (err, newdata4) {
                                    if (newdata4 != 0 || newdata3 != 0 || newdata2 != 0 || newdata1 != 0 || newdata != 0) {
                                        resdata = {
                                            status: 200,
                                            message: 'Successfull',
                                            data: newdata4
                                        }
                                    } else {
                                        resdata = {
                                            status: 400,
                                            message: 'Data not found',
                                        }
                                    }
                                    var datacon = newdata4.concat(newdata3.concat(newdata2.concat(newdata1.concat(newdata))))
                                    var removeduplicates = Array.from(new Set(datacon));
                                    resdata.data = removeduplicates
                                    res.json(resdata)
                                    return resdata
                                });
                            });
                        });
                    });
                });
            }
        }
    });
})

app.get("/api/getapplicant", function (req, res) {

    pipeline = [  //trans_cams
        //   {"$group" : {_id : {INV_NAME:{"$toUpper":["$INV_NAME"]}, PAN:"$PAN"}}}, 
        { "$project": { _id: 0, INVNAME: { "$toUpper": ["$INV_NAME"] }, PAN: "$PAN" } }
    ]
    pipeline1 = [  //trans_karvy
        //   {"$group" : {_id : {INVNAME:{"$toUpper":["$INVNAME"]}, PAN1:"$PAN1"}}}, 
        { "$project": { _id: 0, INVNAME: { "$toUpper": ["$INVNAME"] }, PAN: "$PAN1" } }
    ]

    transc.aggregate(pipeline, (err, newdata) => {
        transk.aggregate(pipeline1, (err, newdata1) => {
            // transf.aggregate(pipeline2,  (err, newdata2) => {
            if (newdata1.length != 0 || newdata.length != 0) {
                var datacon = newdata1.concat(newdata);
                //    datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                //       .filter(function(item, index, arr){ return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                //       .reverse().map(JSON.parse) ;
                datacon = datacon.filter(
                    (temp => a =>
                        (k => !temp[k] && (temp[k] = true))(a.INVNAME + '|' + a.PAN)
                    )(Object.create(null))
                );
                res.json(datacon)
            }
            //});
        });
    });
})

app.get("/api/getapplicantfolio", function (req, res) {

    const pipeline = [  //trans_cams
        { "$group": { _id: { INV_NAME: "$INV_NAME", PAN: "$PAN" } } },
        { "$project": { _id: 0, INVNAME: "$_id.INV_NAME", PAN: "$_id.PAN" } }
    ]
    const pipeline1 = [  //trans_karvy
        { "$group": { _id: { INVNAME: "$INVNAME", PAN1: "$PAN1" } } },
        { "$project": { _id: 0, INVNAME: "$_id.INVNAME", PAN: "$_id.PAN1" } }
    ]

    transc.aggregate(pipeline, (err, newdata) => {
        transk.aggregate(pipeline1, (err, newdata1) => {
            if (newdata1.length != 0 || newdata.length != 0) {
                var datacon = newdata1.concat(newdata)
                var removeduplicates = Array.from(new Set(datacon));
                res.json(removeduplicates)
            }
        });
    });
})

app.get("/api/getschemetype", function (req, res) {
    transc.find().distinct("SCHEME_TYPE", function (err, camsdata) {
        transk.find().distinct("ASSETTYPE", function (err, karvydata) {
            var datacon = karvydata.concat(camsdata)
            res.json(datacon)
        });
    });
})

app.post("/api/getschemename", function (req, res) {
    transc.find({ AMC_CODE: req.body.name }).distinct("SCHEME", function (err, camsdata) {
        transk.find({ TD_FUND: req.body.name }).distinct("FUNDDESC", function (err, karvydata) {
            var datacon = karvydata.concat(camsdata)
            res.json(datacon)
        });
    });
})

app.post("/api/getschemewisefolio", function (req, res) {
    transc.find({ SCHEME: req.body.scheme, PAN: req.body.pan }).distinct("FOLIO_NO", function (err, camsdata) {
        transk.find({ FUNDDESC: req.body.scheme, PAN1: req.body.pan }).distinct("TD_ACNO", function (err, karvydata) {
            var datacon = camsdata.concat(karvydata)
            res.json(datacon)
        });
    });
})

app.post("/api/getschemepersonaldetail", function (req, res) {
    try {
        pipeline1 = [  ///trans_karvy
            { $match: { FMCODE: req.body.scheme, PAN1: req.body.pan, TD_ACNO: req.body.folio } },
            { $group: { _id: { PAN1: "$PAN1", INVNAME: "$INVNAME", FUNDDESC: "$FUNDDESC", TD_ACNO: "$TD_ACNO", STATUS: "$STATUS", FMCODE: "$FMCODE" } } },
            { $lookup: { from: 'folio_karvy', localField: '_id.TD_ACNO', foreignField: 'ACNO', as: 'detail' } },
            { $unwind: "$detail" },
            { $project: { _id: 0, PAN: "$_id.PAN1", INVNAME: "$_id.INVNAME", FOLIO: "$_id.TD_ACNO", SCHEME: "$_id.FUNDDESC", STATUS: "$_id.STATUS", ADDRESS: { '$concat': ['$detail.ADD1', ',', '$detail.ADD2', ',', '$detail.ADD3', ' ', '$detail.CITY', ' ', '$detail.COUNTRY'] }, EMAIL: "$detail.EMAIL", MOBILE: "$detail.MOBILE", GUARDIANNAME: "$detail.GUARDIANN0", MODE: "$detail.MODEOFHOLD", NOMINEE: "$detail.NOMINEE", NOMINEE2: "$detail.NOMINEE2", NOMINEE3: "$detail.NOMINEE3", JTNAME1: "$detail.JTNAME1", JTNAME2: "$detail.JTNAME2", BANK: "$detail.BNAME", ACCOUNTNO: "$detail.BNKACNO", PRODCODE: "$_id.FMCODE" } },
        ]

        pipeline3 = [  //trans_cams
            { $match: { PAN: req.body.pan, PRODCODE: req.body.scheme, FOLIO_NO: req.body.folio } },
            { $group: { _id: { PAN: "$PAN", INV_NAME: "$INV_NAME", FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", SCHEME_TYP: "$SCHEME_TYP", AC_NO: "$AC_NO", BANK_NAME: "$BANK_NAME", TAX_STATUS: "$TAX_STATUS", PRODCODE: "$PRODCODE" } } },
            { $lookup: { from: 'folio_cams', localField: '_id.FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
            { $unwind: "$detail" },
            { $project: { _id: 0, PAN: "$_id.PAN", INVNAME: "$_id.INV_NAME", FOLIO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", ACCOUNTNO: "$_id.AC_NO", BANK: "$_id.BANK_NAME", NOMINEE: "$detail.NOM_NAME", PRODCODE: "$_id.PRODCODE" } },
        ]
        transc.aggregate(pipeline3, (err, camsdata) => {
            //   transf.aggregate(pipeline2, (err, frankdata) => {
            transk.aggregate(pipeline1, (err, karvydata) => {
                if (karvydata != 0 || camsdata != 0) {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        var datacon = karvydata.concat(camsdata);
                        var removeduplicates = datacon.map(JSON.stringify)
                            .reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                            .filter(function (item, index, arr) {
                                return arr.indexOf(item, index + 1) === -1;
                            }) // check if there is any occurence of the item in whole array
                            .reverse().map(JSON.parse);
                        datacon = Array.from(new Set(removeduplicates));
                        var filtered = datacon.filter(
                            (temp => a =>
                                (k => !temp[k] && (temp[k] = true))(a.FOLIO + '|' + a.PRODCODE)
                            )(Object.create(null))
                        );
                        datacon = filtered;
                        res.send(datacon);
                        return datacon;
                    }
                }
                // });
            });
        });
    } catch (err) {
        console.log(e)
    }
})

app.post("/api/getportfolio", function (req, res) {
    var marketvalue = 0; var gain = 0; var days = 0; var date1 = ""; var date2 = ""; var totaldays = 0; var avgDays = 0;
    var cagr = "";
    var camsn = mongoose.model('cams_nav', navcams, 'cams_nav');
    var transk = mongoose.model('trans_karvy', transkarvy, 'trans_karvy');

    const pipeline1 = [
        { $match: { PAN1: req.body.pan } },
        { $group: { _id: { PAN1: "$PAN1", FUNDDESC: "$FUNDDESC", SCHEMEISIN: "$SCHEMEISIN", TD_ACNO: "$TD_ACNO", ASSETTYPE: "$ASSETTYPE", cnav: "$nav.NetAssetValue" }, TD_UNITS: { $sum: "$TD_UNITS" }, TD_AMT: { $sum: "$TD_AMT" } } },
        { $group: { _id: { PAN1: "$_id.PAN1", FUNDDESC: "$_id.FUNDDESC", SCHEMEISIN: "$_id.SCHEMEISIN", TD_ACNO: "$_id.TD_ACNO", ASSETTYPE: "$_id.ASSETTYPE", cnav: "$nav.NetAssetValue" }, TD_UNITS: { $sum: "$TD_UNITS" }, TD_AMT: { $sum: "$TD_AMT" } } },
        { $lookup: { from: 'cams_nav', localField: '_id.SCHEMEISIN', foreignField: 'ISINDivPayoutISINGrowth', as: 'nav' } },
        { $unwind: "$nav" },
        { $project: { _id: 0, SCHEME: "$_id.FUNDDESC", SCHEMEISIN: "$_id.SCHEMEISIN", FOLIO_NO: "$_id.TD_ACNO", SCHEME_TYPE: "$_id.ASSETTYPE", cnav: "$nav.NetAssetValue", UNITS: { $sum: "$TD_UNITS" }, AMOUNT: { $sum: "$TD_AMT" } } },
    ]

    transk.aggregate(pipeline1, (err, data) => {
        ///   transk.aggregate(pipeline11, (err, data11) => {
        if (err) {
            res.send(err);
        }
        else {
            //   console.log(data11)
            for (i = 0; i < data.length; i++) {
                // console.log(data)
                marketvalue = data[i].cnav * data[i].UNITS;
                gain = marketvalue - data[i].AMOUNT;
                cagr = 0;
                data[i].marketvalue = marketvalue;
                data[i].gain = marketvalue - data[i].AMOUNT;

                const pipeline11 = [
                    { $match: { PAN1: req.body.pan, FUNDDESC: data[i].SCHEME, SCHEMEISIN: data[i].SCHEMEISIN } },
                    { $group: { _id: { SCHEMEISIN: "$SCHEMEISIN", FUNDDESC: "$FUNDDESC", cnav: "$nav.Date", TD_TRDT: "$TD_TRDT" } } },
                    { $lookup: { from: 'cams_nav', localField: '_id.SCHEMEISIN', foreignField: 'ISINDivPayoutISINGrowth', as: 'nav' } },
                    { $unwind: "$nav" },
                    { $project: { _id: 0, scheme: "$_id.FUNDDESC", TD_TRDT: { $dateToString: { format: "%m/%d/%Y", date: "$_id.TD_TRDT" } }, navdate: { $dateToString: { format: "%m/%d/%Y", date: "$nav.Date" } } } },
                ]

                // const pipeline11 = [
                //     { $match: { PAN1: req.body.pan , FUNDDESC: data[i].SCHEME} },
                //     { $group: { _id: { TD_TRDT: "$TD_TRDT" } } },
                //     { $project: { _id: 0,  TD_TRDT: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TD_TRDT" } } } },
                // ]
                // const pipeline111 = [
                //     { $match: { ISINDivPayoutISINGrowth:data[i].SCHEMEISIN  } },
                //     { $group: { _id: { Date: "$Date" } } },
                //     { $project: { _id: 0,  Date: { $dateToString: { format: "%d-%m-%Y", date: "$_id.Date" } } } },
                // ]
                var avgtotday = ""
                var schemename = data[i].SCHEME;
                // console.log(schemename)
                transk.aggregate(pipeline11, (err, data11) => {
                    for (var j = 0; j < data11.length; j++) {
                        date1 = data11[j].TD_TRDT;
                        date2 = data11[j].navdate;
                        var a = moment(date1, 'MM/DD/YYYY');
                        var b = moment(date2, 'MM/DD/YYYY');
                        var days = b.diff(a, 'days');
                        console.log("days", days)
                        if (data[0].SCHEME === data11[j].scheme) {
                            totaldays = days + totaldays;
                        }
                        // avgtotday = days+avgtotday;

                        //  avgDays = Math.round(parseFloat(totaldays)/parseFloat(data11.length))
                        //     totaldays = parseFloat(days) + parseFloat(totaldays);
                        console.log("totaldays", totaldays)
                        //    data11[j].days = totaldays;
                        //    avgDays = Math.round(parseFloat(totaldays)/parseFloat(data11.length))
                        //    console.log("avgdays",avgDays)
                        // console.log("length",data11.length)
                    }

                    // console.log(avgtotday);
                })
                data[i].days = days;
                data[i].cagr = totaldays;
                // camsn.aggregate(pipeline111, (err, data111) => {
                //     console.log(data111)
                // })
            }
            res.send(data);
            return data;
        }
    });
})

app.post("/api/getdetailnamewise", function (req, res) {
    var pipeline1 = ""; var pipeline2 = ""; var pipeline3 = "";
    if (req.body.searchtype === "searchName") {
        pipeline1 = [  //trans_cams
            { $match: { INV_NAME: { $regex: `^${req.body.searchvalue}.*`, $options: 'i' }, SCHEME: { $ne: null }, FOLIO_NO: { $ne: null } } },
            { $group: { _id: { PAN: "$PAN", FOLIO_NO: "$FOLIO_NO", PRODCODE: "$PRODCODE" } } },
            { $project: { _id: 0, PAN: "$_id.PAN", FOLIO: "$_id.FOLIO_NO", PRODCODE: "$_id.PRODCODE" } }
        ]
        pipeline2 = [  //trans_karvy
            { $match: { INVNAME: { $regex: `^${req.body.searchvalue}.*`, $options: 'i' }, FUNDDESC: { $ne: null }, TD_ACNO: { $ne: null } } },
            { $group: { _id: { PAN1: "$PAN1", TD_ACNO: "$TD_ACNO", FMCODE: "$FMCODE" } } },
            { $project: { _id: 0, PAN: "$_id.PAN1", FOLIO: "$_id.TD_ACNO", PRODCODE: "$_id.FMCODE" } }
        ]
    } else if (req.body.searchtype === "searchPan") {
        pipeline1 = [  //trans_cams
            { $match: { PAN: { $regex: `^${req.body.searchvalue}.*`, $options: 'i' }, SCHEME: { $ne: null }, FOLIO_NO: { $ne: null } } },
            { $group: { _id: { PAN: "$PAN", FOLIO_NO: "$FOLIO_NO", PRODCODE: "$PRODCODE" } } },
            { $project: { _id: 0, PAN: "$_id.PAN", FOLIO: "$_id.FOLIO_NO", PRODCODE: "$_id.PRODCODE" } }
        ]
        pipeline2 = [  //trans_karvy
            { $match: { PAN1: { $regex: `^${req.body.searchvalue}.*`, $options: 'i' }, FUNDDESC: { $ne: null }, TD_ACNO: { $ne: null } } },
            { $group: { _id: { PAN1: "$PAN1", TD_ACNO: "$TD_ACNO", FMCODE: "$FMCODE" } } },
            { $project: { _id: 0, PAN: "$_id.PAN1", FOLIO: "$_id.TD_ACNO", PRODCODE: "$_id.FMCODE" } }
        ]
    } else {
        pipeline1 = [  //trans_cams
            { $match: { FOLIO_NO: req.body.searchvalue, SCHEME: { $ne: null } } },
            { $group: { _id: { PAN: "$PAN", FOLIO_NO: "$FOLIO_NO", PRODCODE: "$PRODCODE" } } },
            { $project: { _id: 0, PAN: "$_id.PAN", FOLIO: "$_id.FOLIO_NO", PRODCODE: "$_id.PRODCODE" } }
        ]
        pipeline2 = [  //trans_karvy
            { $match: { TD_ACNO: req.body.searchvalue, FUNDDESC: { $ne: null } } },
            { $group: { _id: { PAN1: "$PAN1", TD_ACNO: "$TD_ACNO", FMCODE: "$FMCODE" } } },
            { $project: { _id: 0, PAN: "$_id.PAN1", FOLIO: "$_id.TD_ACNO", PRODCODE: "$_id.FMCODE" } }
        ]
    }
    transc.aggregate(pipeline1, (err, camsdata) => {
        transk.aggregate(pipeline2, (err, karvydata) => {

            if (karvydata.length != 0 || camsdata.length != 0) {
                var datacon = karvydata.concat(camsdata)
                datacon = datacon.map(JSON.stringify).reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                    .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; }) // check if there is any occurence of the item in whole array
                    .reverse().map(JSON.parse);
                // console.log(datacon);
                res.json(datacon)
            }
        });
    });
})

app.post("/api/getsearchdatamanagement", function (req, res) {

    var marketvalue = 0; var cnav = 0;
    var unit = 0; var balance = 0;
    var searchtype = req.body.searchtype;
    var pipeline1 = ""; var pipeline2 = ""; var pipeline3 = "";
    pipeline1 = [  //trans_cams
        { $match: { PRODCODE: req.body.scheme, PAN: { $regex: `^${req.body.pan}.*`, $options: 'i' }, FOLIO_NO: req.body.folio } },
        { $group: { _id: { PAN: "$PAN", INV_NAME: { "$toLower": ["$INV_NAME"] }, FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", TRXN_TYPE_: "$TRXN_TYPE_", TRADDATE: "$TRADDATE", AMC_CODE: "$AMC_CODE", PRODCODE: "$PRODCODE", code: { $reduce: { input: { $split: ["$PRODCODE", "$AMC_CODE"] }, initialValue: "", in: { $concat: ["$$value", "$$this"] } } } }, UNITS: { $sum: "$UNITS" } } },
        {
            $lookup:
            {
                from: "products",
                let: { ccc: "$_id.code", amc: "$_id.AMC_CODE" },
                pipeline: [
                    {
                        $match:
                        {
                            $expr:
                            {
                                $and:
                                    [
                                        { $eq: ["$PRODUCT_CODE", "$$ccc"] },
                                        { $eq: ["$AMC_CODE", "$$amc"] }
                                    ]
                            }
                        }
                    },
                    { $project: { _id: 0 } }
                ],
                as: "products"
            }
        },

        //{ $unwind: "$products" },
        { $group: { _id: { PAN: "$_id.PAN", INV_NAME: { "$toLower": ["$_id.INV_NAME"] }, FOLIO_NO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", TRXN_TYPE_: "$_id.TRXN_TYPE_", TRADDATE: "$_id.TRADDATE", ISIN: "$products.ISIN", PRODCODE: "$_id.PRODCODE" }, UNITS: { $sum: "$UNITS" } } },
        { $lookup: { from: 'cams_nav', localField: '_id.ISIN', foreignField: 'ISINDivPayoutISINGrowth', as: 'nav' } },
        // { $unwind: "$nav" },
        { $project: { _id: 1, PAN: "$_id.PAN", INVNAME: { "$toLower": ["$_id.INV_NAME"] }, FOLIO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", NATURE: "$_id.TRXN_TYPE_", DATE: { $dateToString: { format: "%m/%d/%Y", date: "$_id.TRADDATE" } }, RTA: "CAMS", cnav: "$nav.NetAssetValue", navdate: "$nav.Date", UNITS: { $sum: "$UNITS" }, PRODCODE: "$_id.PRODCODE" } },
        { $sort: { INVNAME: 1 } }
    ]

    pipeline2 = [  //trans_karvy
        { $match: { FMCODE: req.body.scheme, PAN1: { $regex: `^${req.body.pan}.*`, $options: 'i' }, TD_ACNO: req.body.folio, SCHEMEISIN: { $ne: "" }, SCHEMEISIN: { $ne: null } } },
        { $group: { _id: { PAN1: "$PAN1", INVNAME: "$INVNAME", TD_ACNO: "$TD_ACNO", FUNDDESC: "$FUNDDESC", TD_TRTYPE: "$TD_TRTYPE", TD_TRDT: "$TD_TRDT", SCHEMEISIN: "$SCHEMEISIN", FMCODE: "$FMCODE" }, TD_UNITS: { $sum: "$TD_UNITS" } } },
        {
            $lookup:
            {
                from: "cams_nav",
                let: { isin: "$_id.SCHEMEISIN" },
                pipeline: [
                    {
                        $match:
                        {
                            $expr:
                            {
                                $or:
                                    [
                                        { $eq: ["$ISINDivPayoutISINGrowth", "$$isin"] },
                                        { $eq: ["$ISINDivReinvestment", "$$isin"] }
                                    ]
                            }
                        }
                    },
                    { $project: { _id: 0 } }
                ],
                as: "nav"
            }
        },
        //{ $unwind: "$nav" },
        { $project: { _id: 1, PAN: "$_id.PAN1", INVNAME: { "$toLower": ["$_id.INVNAME"] }, FOLIO: "$_id.TD_ACNO", SCHEME: "$_id.FUNDDESC", NATURE: "$_id.TD_TRTYPE", DATE: { $dateToString: { format: "%m/%d/%Y", date: "$_id.TD_TRDT" } }, RTA: "KARVY", cnav: "$nav.NetAssetValue", navdate: "$nav.Date", UNITS: { $sum: "$TD_UNITS" }, PRODCODE: "$_id.FMCODE" } },
        { $sort: { INVNAME: 1 } }
    ]

    transc.aggregate(pipeline1, (err, camsdata) => {
        transk.aggregate(pipeline2, (err, karvydata) => {
            if (camsdata != 0 || karvydata != 0) {
                resdata = {
                    status: 200,
                    message: 'Successfull',
                    data: karvydata
                }
            } else {
                resdata = {
                    status: 400,
                    message: 'Data not found',
                }
            }
            var datacon = karvydata.concat(camsdata);
            var removeduplicates = datacon.map(JSON.stringify)
                .reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                .filter(function (item, index, arr) {
                    return arr.indexOf(item, index + 1) === -1;
                }) // check if there is any occurence of the item in whole array
                .reverse()
                .map(JSON.parse);
            var uniquedata = Array.from(new Set(removeduplicates));
            //    datacon =uniquedata.sort((a, b) => new Date(a.DATE.split("-").reverse().join("/")).getTime() - new Date(b.DATE.split("-").reverse().join("/")).getTime())
            //    for(var j=0 ; j<datacon.length;j++){
            //     if(datacon[j].NATURE === 'RED' || datacon[j].NATURE === 'LTOP' || 
            //     datacon[j].NATURE === 'Lateral Shift Out' || datacon[j].NATURE === 'LTOF' 
            //     || datacon[j].NATURE === 'IPOR' || datacon[j].NATURE === 'Switch Out' ||
            //     datacon[j].NATURE === 'FUL' || datacon[j].NATURE === 'STPO' || datacon[j].NATURE === 'CNO'
            //      || datacon[j].NATURE === 'FULR'|| datacon[j].NATURE === 'Full Redemption'||
            //       datacon[j].NATURE === 'Partial Switch Out'|| datacon[j].NATURE === 'Full Switch Out'||
            //        datacon[j].NATURE === 'Partial Redemption'){
            //         unit = "-"+uniquedata[i].UNITS
            //       }else{
            //         unit = uniquedata[i].UNITS
            //       }
            //     balance = parseFloat(unit)+parseFloat(balance) ;
            //     cnav = datacon[i].cnav;
            //     //marketvalue = uniquedata[i].cnav*balance;
            //     //uniquedata[i].AMOUNT = marketvalue;
            //   }
            //   marketvalue = cnav*balance;
            //   uniquedata.AMOUNT = marketvalue;
            //   console.log("marketvalue=",marketvalue)
            //   console.log("uniquedata.AMOUNT=",uniquedata.AMOUNT)
            resdata.data = uniquedata.sort((a, b) => (a.INVNAME.replace(/ /g, '') > b.INVNAME.replace(/ /g, '')) ? 1 : (b.INVNAME.replace(/ /g, '') > a.INVNAME.replace(/ /g, '')) ? -1 : 0);
            res.send(resdata);
            return resdata;
        });
    });
})

app.post("/api/getsearchfoliodetail", function (req, res) {
    var pipeline = ""; var trans = ''; var rta = "";
    if (req.body.rta === "CAMS") {
        pipeline = [  //trans_cams
            { $match: { FOLIO_NO: req.body.folio, SCHEME: req.body.scheme } },
            { $group: { _id: { PAN: "$PAN", INV_NAME: "$INV_NAME", FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", AMOUNT: "$AMOUNT", SCHEME_TYP: "$SCHEME_TYP", AC_NO: "$AC_NO", BANK_NAME: "$BANK_NAME" } } },
            { $lookup: { from: 'folio_cams', localField: '_id.FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
            { $unwind: "$detail" },
            { $project: { _id: 0, PAN: "$_id.PAN", INVNAME: "$_id.INV_NAME", FOLIO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", TYPE: "$_id.SCHEME_TYP", ACCOUNTNO: "$_id.AC_NO", BANK: "$_id.BANK_NAME", MODEOFHOLD: "$detail.HOLDING_NA", NOMINEE: "$detail.NOM_NAME", EMAIL: "$detail.EMAIL" } },
        ]
        trans = mongoose.model('trans_cams', transcams, 'trans_cams');
    } else if (req.body.rta === "KARVY") {
        pipeline = [  //trans_karvy
            { $match: { TD_ACNO: req.body.folio, FUNDDESC: req.body.scheme } },
            { $group: { _id: { PAN1: "$PAN1", INVNAME: "$INVNAME", TD_ACNO: "$TD_ACNO", FUNDDESC: "$FUNDDESC", TD_AMT: "$TD_AMT", ASSETTYPE: "$ASSETTYPE", AC_NO: "$AC_NO" } } },
            { $lookup: { from: 'folio_karvy', localField: '_id.TD_ACNO', foreignField: 'ACNO', as: 'detail' } },
            { $unwind: "$detail" },
            { $project: { _id: 0, PAN: "$_id.PAN1", INVNAME: "$_id.INVNAME", FOLIO: "$_id.TD_ACNO", SCHEME: "$_id.FUNDDESC", TYPE: "$_id.ASSETTYPE", ACCOUNTNO: "$detail.BNKACNO", BANK: "$detail.BNAME", BANKTYPE: "$detail.BNKACTYPE", MODEOFHOLD: "$detail.MODEOFHOLD", NOMINEE: "$detail.NOMINEE", EMAIL: "$detail.EMAIL" } },
        ]
        trans = mongoose.model('trans_karvy', transkarvy, 'trans_karvy');
    } else {
        pipeline = [  //trans_franklin
            { $match: { FOLIO_NO: req.body.folio, SCHEME_NA1: req.body.scheme } },
            { $group: { _id: { IT_PAN_NO1: "$IT_PAN_NO1", INVESTOR_2: "$INVESTOR_2", FOLIO_NO: "$FOLIO_NO", SCHEME_NA1: "$SCHEME_NA1", AMOUNT: "$AMOUNT", PLAN_TYPE: "$PLAN_TYPE", PERSONAL23: "$PERSONAL23", PBANK_NAME: "$PBANK_NAME", ACCOUNT_25: "$ACCOUNT_25", HOLDING_19: "$HOLDING_19", NOMINEE1: "$NOMINEE1", EMAIL: "$EMAIL" } } },
            { $project: { _id: 0, PAN: "$_id.IT_PAN_NO1", INVNAME: "$_id.INVESTOR_2", FOLIO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME_NA1", TYPE: "$_id.PLAN_TYPE", ACCOUNTNO: "$_id.PERSONAL23", BANK: "$_id.PBANK_NAME", BANKTYPE: "$_id.ACCOUNT_25", MODEOFHOLD: "$_id.HOLDING_19", NOMINEE: "$_id.NOMINEE1", EMAIL: "$_id.EMAIL" } },
        ]
        trans = mongoose.model('trans_franklin', transfranklin, 'trans_franklin');
    }
    trans.aggregate(pipeline, (err, data) => {
        if (data != 0) {
            resdata = {
                status: 200,
                message: 'Successfull',
                data: data
            }
        } else {
            resdata = {
                status: 400,
                message: 'Data not found',
            }
        }
        var removeduplicates = data.map(JSON.stringify)
            .reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
            .filter(function (item, index, arr) {
                return arr.indexOf(item, index + 1) === -1;
            }) // check if there is any occurence of the item in whole array
            .reverse()
            .map(JSON.parse);
        var datacon = Array.from(new Set(removeduplicates));
        resdata.data = datacon;
        res.send(resdata);
        return resdata;
    });
})

app.post("/api/getsearchname", function (req, res) {
    pipeline1 = [  //folio_karvy
        { $match: { INVNAME: { $regex: `^${req.body.name}.*`, $options: 'i' } } },
        { $project: { _id: 0, INVNAME: "$INVNAME", CAPITALNAME: { "$toUpper": ["$INVNAME"] }, PAN: "$PANGNO", GPAN: "$GUARDPANNO" } }
    ]
    pipeline2 = [  //folio_cams
        { $match: { INV_NAME: { $regex: `^${req.body.name}.*`, $options: 'i' } } },
        { $project: { _id: 0, INVNAME: "$INV_NAME", CAPITALNAME: { "$toUpper": ["$INV_NAME"] }, PAN: "$PAN_NO", GPAN: "$GUARD_PAN" } }
    ]
    foliok.aggregate(pipeline1, (err, karvydata) => {
        folioc.aggregate(pipeline2, (err, camsdata) => {
            if (camsdata != 0 || karvydata != 0) {
                var datacon = camsdata.concat(karvydata);
                for (var i = 0; i < datacon.length; i++) {
                    if (datacon[i].GPAN === "0") {
                        datacon[i].GPAN = "";
                    }
                }
                datacon = datacon.filter(
                    (temp => a =>
                        (k => !temp[k] && (temp[k] = true))(a.CAPITALNAME + '|' + a.PAN + '|' + a.GPAN)
                    )(Object.create(null))
                );
                resdata = {
                    status: 200,
                    message: 'Data found successfully',
                    data: datacon,
                }

                res.send(resdata);
                return resdata;
            }
            else {
                resdata = {
                    status: 400,
                    message: 'Data not found'
                }
                res.send(resdata);
                return resdata;
            }
        });
    });
})

app.post("/api/searchamc", function (req, res) {
    var amccode = "";
    pipeline1 = [  //trans_cams
        //   { $match: { INV_NAME: { $regex: `^${req.body.name}.*`, $options: 'i' } } },
        { $group: { _id: { AMC_CODE: "$AMC_CODE" } } },
        { $lookup: { from: 'amc_list', localField: '_id.AMC_CODE', foreignField: 'amc_code', as: 'amclist' } },
        { $unwind: "$amclist" },
        { $project: { _id: 0, amcname: "$amclist.long_name", AMCCODE: "$_id.AMC_CODE", RTA: "CAMS" } },
    ]

    pipeline2 = [  //trans_karvy
        // { $match: { INVNAME: { $regex: `^${req.body.name}.*`, $options: 'i' } } },
        { $group: { _id: { TD_FUND: "$TD_FUND" } } },
        { $lookup: { from: 'amc_list', localField: '_id.TD_FUND', foreignField: 'amc_code', as: 'amclist' } },
        { $unwind: "$amclist" },
        { $project: { _id: 0, amcname: "$amclist.long_name", AMCCODE: "$_id.TD_FUND", RTA: "KARVY" } },
    ]

    transk.aggregate(pipeline2, (err, karvydata) => {
        transc.aggregate(pipeline1, (err, camsdata) => {
            if (camsdata != 0 || karvydata != 0) {
                if (err) {
                    res.send(err);
                }
                else {
                    resdata = {
                        status: 200,
                        message: 'Successful',
                        amc: karvydata,
                    }
                    var datacon = camsdata.concat(karvydata);
                    amccode = datacon.filter(
                        (temp => a =>
                            (k => !temp[k] && (temp[k] = true))(a.amcname + '|' + a.amcname)
                        )(Object.create(null))
                    );
                    resdata.amc = amccode.sort((a, b) => (a.amcname > b.amcname) ? 1 : -1);

                    res.send(resdata);
                    return resdata;
                }
            }
        });
    });
})

app.post("/api/searchtransaction", function (req, res) {
    var amccode = ""; var str1 = ""; var str2 = "";
    var name = req.body.name;
    var fund = req.body.fund;
    var scheme = req.body.scheme;
    var folio = req.body.folio;
    var arr1 = []; var arr2 = []; var arr3 = []; var arr4 = [];
    arr1.push({ TRADDATE: { $gte: new Date(moment(req.body.fromdate).format("YYYY-MM-DD")), $lt: new Date(moment(req.body.todate).format("YYYY-MM-DD")) } })
    arr2.push({ NAVDATE: { $gte: new Date(moment(req.body.fromdate).format("YYYY-MM-DD")), $lt: new Date(moment(req.body.todate).format("YYYY-MM-DD")) } })
    if (fund != undefined && fund != "") {
        arr1.push({ AMC_CODE: fund })
        arr2.push({ TD_FUND: fund })
    } if (scheme != undefined && scheme != "") {
        arr1.push({ SCHEME: scheme })
        arr2.push({ FUNDDESC: scheme })
    } if (folio != undefined && folio != "") {
        arr1.push({ FOLIO_NO: folio })
        arr2.push({ TD_ACNO: folio })
    }

    str1 = { $and: arr1, INV_NAME: { $regex: `^${name}`, $options: 'i' } }
    str2 = { $and: arr2, INVNAME: { $regex: `^${name}`, $options: 'i' } }
    pipeline1 = [  //trans_cams
        { $match: str1 },
        { $project: { _id: 1, PAN: "$PAN", INVNAME: "$INV_NAME", FOLIO: "$FOLIO_NO", SCHEME: "$SCHEME", NATURE: "$TRXN_TYPE_", NAVDATE: { $dateToString: { format: "%d/%m/%Y", date: "$TRADDATE" } }, RTA: "CAMS", AMCCODE: "$AMC_CODE", UNITS: "$UNITS", AMOUNT: "$AMOUNT", NAV: "$PURPRICE" } },
        { $sort: { NAVDATE: -1 } }
    ]

    pipeline2 = [  //trans_karvy
        { $match: str2 },
        { $project: { _id: 1, PAN: "$PAN1", INVNAME: "$INVNAME", FOLIO: "$TD_ACNO", SCHEME: "$FUNDDESC", NATURE: "$TD_TRTYPE", RTA: "KARVY", NAV: "$TD_NAV", NAVDATE: { $dateToString: { format: "%d/%m/%Y", date: "$NAVDATE" } }, AMCCODE: "$TD_FUND", UNITS: "$TD_UNITS", AMOUNT: "$TD_AMT" } },
        { $sort: { NAVDATE: -1 } }
    ]

    transk.aggregate(pipeline2, (err, karvydata) => {
        transc.aggregate(pipeline1, (err, camsdata) => {
            if (camsdata != 0 || karvydata != 0) {
                resdata = {
                    status: 200,
                    message: 'Successful',
                    data: karvydata,
                }
                var datacon = camsdata.concat(karvydata);
                var removeduplicates = datacon.map(JSON.stringify)
                    .reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                    .filter(function (item, index, arr) {
                        return arr.indexOf(item, index + 1) === -1;
                    }) // check if there is any occurence of the item in whole array
                    .reverse()
                    .map(JSON.parse);
                datacon = Array.from(new Set(removeduplicates));

                for (var i = 0; i < datacon.length; i++) {
                    if (datacon[i]['NATURE'] === "Redemption" || datacon[i]['NATURE'] === "R" || datacon[i]['NATURE'] === "RED" ||
                        datacon[i]['NATURE'] === "SIPR" || datacon[i]['NATURE'] === "Full Redemption" ||
                        datacon[i]['NATURE'] === "Partial Redemption" || datacon[i]['NATURE'] === "Lateral Shift Out" ||
                        datacon[i]['NATURE'] === "Switchout" || datacon[i]['NATURE'] === "Transfer-Out" ||
                        datacon[i]['NATURE'] === "Transmission Out" || datacon[i]['NATURE'] === "Switch Over Out" ||
                        datacon[i]['NATURE'] === "LTOP" || datacon[i]['NATURE'] === "LTOF" || datacon[i]['NATURE'] === "FULR" ||
                        datacon[i]['NATURE'] === "Partial Switch Out" || datacon[i]['NATURE'] === "Full Switch Out" ||
                        datacon[i]['NATURE'] === "IPOR" || datacon[i]['NATURE'] === "FUL" ||
                        datacon[i]['NATURE'] === "STPO" || datacon[i]['NATURE'] === "SWOF") {
                        datacon[i]['NATURE'] = "Switch Out";
                    }
                    if (datacon[i]['NATURE'].match(/Systematic Investment.*/) ||
                        datacon[i]['NATURE'].match(/Systematic - Instalment.*/) ||
                        datacon[i]['NATURE'].match(/Systematic - To.*/) ||
                        datacon[i]['NATURE'].match(/Systematic-NSE.*/) ||
                        datacon[i]['NATURE'].match(/Systematic Physical.*/) ||
                        datacon[i]['NATURE'].match(/Systematic.*/) ||
                        datacon[i]['NATURE'].match(/Systematic-Normal.*/) ||
                        datacon[i]['NATURE'].match(/Systematic (ECS).*/) || datacon[i]['NATURE'] === "SIN") {
                        datacon[i]['NATURE'] = "SIP";
                    }
                    if ((Math.sign(datacon[i]['AMOUNT']) === -1)) {
                        datacon[i]['NATURE'] = "SIPR";
                    }
                    if (datacon[i]['NATURE'].match(/Systematic - From.*/)) {
                        datacon[i]['NATURE'] = "STP";
                    }
                    if (datacon[i]['NATURE'] === "Div. Reinvestment") {
                        datacon[i]['NATURE'] = "Div. Reinv.";
                    }
                    if (datacon[i]['NATURE'] === "Gross Dividend") {
                        datacon[i]['NATURE'] = "Gross Div.";
                    }
                    if (datacon[i]['NATURE'] === "Lateral Shift In") {
                        datacon[i]['NATURE'] = "Switch In";
                    }
                    if (datacon[i]['NATURE'] === "Consolidation Out") {
                        datacon[i]['NATURE'] = "CNO";
                    }
                    if (datacon[i]['NATURE'] === "Consolidation In") {
                        datacon[i]['NATURE'] = "CNI";
                    }
                    if (datacon[i]['NATURE'] === "ADDPUR" || datacon[i]['NATURE'] === "Additional Purchase" || datacon[i]['NATURE'] === "NEW" || datacon[i]['NATURE'] === "ADD") {
                        datacon[i]['NATURE'] = "Purchase";
                    }
                }
                resdata.data = datacon.sort((a, b) => new Date(b.NAVDATE.split("-").reverse().join("/")).getTime() - new Date(a.NAVDATE.split("-").reverse().join("/")).getTime());
                res.send(resdata);
                return resdata;

            } else {
                resdata = {
                    status: 400,
                    message: 'Data not found !',
                }
                res.send(resdata);
                return resdata;
            }
        });
    });
})

app.post("/api/getnavdate", function (req, res) {
    const pipeline = [
        { $match: { ISINDivPayoutISINGrowth: req.body.isin } },
        { $group: { _id: { SchemeName: "$SchemeName", Date: "$Date" } } },
        { $project: { _id: 0, SchemeName: "$_id.SchemeName", navdate: { $dateToString: { format: "%m/%d/%Y", date: "$_id.Date" } } } }
    ]

    var camsn = mongoose.model('cams_nav', navcams, 'cams_nav');
    camsn.aggregate(pipeline, (err, data) => {

        var removeduplicates = Array.from(new Set(data));
        var datacon = removeduplicates.map(JSON.stringify)
            .reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
            .filter(function (item, index, arr) {
                return arr.indexOf(item, index + 1) === -1;
            }) // check if there is any occurence of the item in whole array
            .reverse()
            .map(JSON.parse);
        //  console.log(datacon)
        res.send(datacon);
    });
})

app.post("/api/getportfolioscheme", function (req, res) {

    //  db.collection('trans_karvy').remove( {TD_ACNO:"90776",FMCODE:'120CFGP'} );

    if (req.body.category === "ALL") {
        pipeline1 = [  //trans_cams
            { $match: { PAN: req.body.pan, INV_NAME: { $regex: `^${req.body.name}.*`, $options: 'i' } } },
            { $project: { _id: 0, NAME: { "$toUpper": ["$INV_NAME"] }, PAN: "$PAN", FOLIO: "$FOLIO_NO", RTA: "CAMS", PRODCODE: "$PRODCODE", SCHEME: "$SCHEME" } },
        ]
        pipeline2 = [  //trans_karvy
            { $match: { PAN1: req.body.pan, INVNAME: { $regex: `^${req.body.name}.*`, $options: 'i' } } },
            { $project: { _id: 0, NAME: { "$toUpper": ["$INVNAME"] }, PAN: "$PAN1", FOLIO: "$TD_ACNO", RTA: "KARVY", PRODCODE: "$FMCODE", SCHEME: "$FUNDDESC" } },
        ]

    } else {
        pipeline1 = [  //trans_cams
            { $match: { PAN: req.body.pan, INV_NAME: { $regex: `^${req.body.name}.*`, $options: 'i' }, SCHEME_TYP: { $regex: `^${req.body.category}.*`, $options: 'i' } } },
            { $project: { _id: 0, NAME: { "$toUpper": ["$INV_NAME"] }, PAN: "$PAN", FOLIO: "$FOLIO_NO", RTA: "CAMS", PRODCODE: "$PRODCODE", SCHEME: "$SCHEME" } },

        ]
        pipeline2 = [  //trans_karvy
            { $match: { PAN1: req.body.pan, INVNAME: { $regex: `^${req.body.name}.*`, $options: 'i' }, ASSETTYPE: { $regex: `^${req.body.category}.*`, $options: 'i' } } },
            { $project: { _id: 0, NAME: { "$toUpper": ["$INVNAME"] }, PAN: "$PAN1", FOLIO: "$TD_ACNO", RTA: "KARVY", PRODCODE: "$FMCODE", SCHEME: "$FUNDDESC" } }
        ]
    }

    transc.aggregate(pipeline1, (err, data1) => {

        transk.aggregate(pipeline2, (err, data2) => {

            if (data2.length != 0 || data1.length != 0) {
                let datacon = data1.concat(data2);
                datacon = datacon.filter(
                    (temp => a =>
                        (k => !temp[k] && (temp[k] = true))(a.PRODCODE + '|' + a.FOLIO)
                    )(Object.create(null))
                );

                datacon = datacon.sort((a, b) => (a.SCHEME > b.SCHEME) ? 1 : -1);
                res.json(datacon);
                return datacon;
            }
        });
    });
})

app.get("/api/getfolio", function (req, res) {
    pipeline1 = [  //trans_cams
        { $match: { PAN: req.query.pan, INV_NAME: { $regex: `^${req.query.name}.*`, $options: 'i' } } },
        { $group: { _id: { FOLIO_NO: "$FOLIO_NO", AMC_CODE: "$AMC_CODE" } } },
        { $lookup: { from: 'amc_list', localField: '_id.AMC_CODE', foreignField: 'amc_code', as: 'amclist' } },
        { $unwind: "$amclist" },
        { $project: { _id: 0, AMC: "$amclist.long_name", FOLIO: "$_id.FOLIO_NO" } },
        { $sort: { AMC: 1 } }
    ]
    pipeline2 = [  //trans_karvy
        { $match: { PAN1: req.query.pan, INVNAME: { $regex: `^${req.query.name}.*`, $options: 'i' } } },
        { $group: { _id: { TD_ACNO: "$TD_ACNO", TD_FUND: "$TD_FUND" } } },
        { $lookup: { from: 'amc_list', localField: '_id.TD_FUND', foreignField: 'amc_code', as: 'amclist' } },
        { $unwind: "$amclist" },
        { $project: { _id: 0, AMC: "$amclist.long_name", FOLIO: "$_id.TD_ACNO" } },
        { $sort: { AMC: 1 } }
    ]
    pipeline3 = [  //trans_franklin
        { $match: { IT_PAN_NO1: req.query.pan, INVESTOR_2: { $regex: `^${req.query.name}.*`, $options: 'i' } } },
        { $group: { _id: { FOLIO_NO: "$FOLIO_NO", COMP_CODE: "$COMP_CODE" } } },
        { $lookup: { from: 'amc_list', localField: '_id.COMP_CODE', foreignField: 'amc_code', as: 'amclist' } },
        { $unwind: "$amclist" },
        { $project: { _id: 0, AMC: "$amclist.long_name", FOLIO: "$_id.FOLIO_NO" } },
        { $sort: { AMC: 1 } }
    ]
    transc.aggregate(pipeline1, (err, camsdata) => {
        transk.aggregate(pipeline2, (err, karvydata) => {
            transf.aggregate(pipeline3, (err, frankdata) => {
                if (frankdata.length != 0 || karvydata.length != 0 || camsdata.length != 0) {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        var datacon = frankdata.concat(karvydata.concat(camsdata))
                        var removeduplicates = Array.from(new Set(datacon));
                        datacon = removeduplicates.map(JSON.stringify)
                            .reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                            .filter(function (item, index, arr) {
                                return arr.indexOf(item, index + 1) === -1;
                            }) // check if there is any occurence of the item in whole array
                            .reverse()
                            .map(JSON.parse);
                        datacon = datacon.sort((a, b) => (a.AMC > b.AMC) ? 1 : -1);
                        res.send(datacon);
                        return datacon;
                    }
                }
            });
        });
    });
})

app.post("/api/getfolioapi", function (req, res) {
    try {
        var perstatus = req.body.per_status;
        var statusvalue = "Minor";

        if (perstatus.toLowerCase() === statusvalue.toLowerCase()) {

            pipeline1 = [  //folio_cams
                { $match: { GUARD_PAN: req.body.pan, INV_NAME: { $regex: `^${req.body.name}.*`, $options: 'i' } } },
                { $group: { _id: { FOLIOCHK: "$FOLIOCHK", AMC_CODE: "$AMC_CODE" } } },
                // { $lookup: { from: 'amc_list', localField: '_id.AMC_CODE', foreignField: 'amc_code', as: 'amclist' } },
                // { $unwind: "$amclist" },
                { $project: { _id: 0, amc_code: "$_id.AMC_CODE", folio: "$_id.FOLIOCHK" } },
                { $sort: { amc_code: 1 } }
            ]
            pipeline2 = [  //folio_karvy
                { $match: { GUARDPANNO: req.body.pan, INVNAME: { $regex: `^${req.body.name}.*`, $options: 'i' } } },
                { $group: { _id: { ACNO: "$ACNO", FUND: "$FUND" } } },
                // { $lookup: { from: 'amc_list', localField: '_id.FUND', foreignField: 'amc_code', as: 'amclist' } },
                // { $unwind: "$amclist" },
                { $project: { _id: 0, amc_code: "$_id.FUND", folio: "$_id.ACNO" } },
                { $sort: { amc_code: 1 } }
            ]
            folioc.aggregate(pipeline1, (err, camsdata) => {
                foliok.aggregate(pipeline2, (err, karvydata) => {
                    if (karvydata != 0 || camsdata != 0) {
                        resdata = {
                            status: 200,
                            message: 'Successful',
                            data: karvydata
                        }
                        var datacon = karvydata.concat(camsdata);
                        var removeduplicates = Array.from(new Set(datacon));
                        datacon = removeduplicates.map(JSON.stringify)
                            .reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                            .filter(function (item, index, arr) {
                                return arr.indexOf(item, index + 1) === -1;
                            }) // check if there is any occurence of the item in whole array
                            .reverse()
                            .map(JSON.parse);
                        resdata.data = datacon.sort((a, b) => (a.amc_code > b.amc_code) ? 1 : -1);
                        res.send(resdata);
                        return resdata;
                    } else {
                        resdata = {
                            status: 600,
                            message: 'Data not found',
                        }
                        res.send(resdata);
                        return resdata;
                    }
                });
            });
        } else {
            pipeline1 = [  //trans_cams
                { $match: { PAN: req.body.pan, INV_NAME: { $regex: `^${req.body.name}.*`, $options: 'i' } } },
                { $group: { _id: { FOLIO_NO: "$FOLIO_NO", AMC_CODE: "$AMC_CODE" } } },
                // { $lookup: { from: 'amc_list', localField: '_id.AMC_CODE', foreignField: 'amc_code', as: 'amclist' } },
                // { $unwind: "$amclist" },
                { $project: { _id: 0, amc_code: "$_id.AMC_CODE", folio: "$_id.FOLIO_NO" } },
                { $sort: { amc_code: 1 } }
            ]
            pipeline2 = [  //trans_karvy
                { $match: { PAN1: req.body.pan, INVNAME: { $regex: `^${req.body.name}.*`, $options: 'i' } } },
                { $group: { _id: { TD_ACNO: "$TD_ACNO", TD_FUND: "$TD_FUND" } } },
                // { $lookup: { from: 'amc_list', localField: '_id.FUND', foreignField: 'amc_code', as: 'amclist' } },
                // { $unwind: "$amclist" },
                { $project: { _id: 0, amc_code: "$_id.TD_FUND", folio: "$_id.TD_ACNO" } },
                { $sort: { amc_code: 1 } }
            ]

            transc.aggregate(pipeline1, (err, camsdata) => {
                transk.aggregate(pipeline2, (err, karvydata) => {
                    if (karvydata.length != 0 || camsdata.length != 0) {
                        resdata = {
                            status: 200,
                            message: 'Successful',
                            data: karvydata
                        }
                        var datacon = karvydata.concat(camsdata)
                        var removeduplicates = Array.from(new Set(datacon));
                        datacon = removeduplicates.map(JSON.stringify)
                            .reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                            .filter(function (item, index, arr) {
                                return arr.indexOf(item, index + 1) === -1;
                            }) // check if there is any occurence of the item in whole array
                            .reverse()
                            .map(JSON.parse);
                        resdata.data = datacon.sort((a, b) => (a.amc_code > b.amc_code) ? 1 : -1);
                        res.send(resdata);
                        return resdata;
                    } else {
                        resdata = {
                            status: 500,
                            message: 'Data not found',
                        }
                        res.send(resdata);
                        return resdata;
                    }
                });
            });

        }
    } catch (err) {
        console.log(err)
    }
})

app.get("/api/getscheme", function (req, res) {
    transc.find({ "FOLIO_NO": req.query.folio }).distinct("SCHEME", function (err, data) {
        transk.find({ "TD_ACNO": req.query.folio }).distinct("FUNDDESC", function (err, data1) {
            transf.find({ "FOLIO_NO": req.query.folio }).distinct("SCHEME_NA1", function (err, data2) {

                if (err) {
                    res.send(err);
                }
                else {
                    var datacon = data2.concat(data1.concat(data))
                    var removeduplicates = Array.from(new Set(datacon));
                    res.send(removeduplicates);
                    return removeduplicates;
                }
            });
        });
    });
})

app.get("/api/getReversalData", function (req, res) {
    console.log("hello");
    // var staticarray = [{
    //     TD_TRNO: '91024',
    //     PRODUCT: '120BFRG',
    //     UNITS: '-1153.07',
    //     FOLIO: '201470',
    //     TDate: '2010-05-03T00:00:00.000Z',
    //     _id: '60d1b0cdfcc80ba348f81053'
    //   },
    //   {
    //     TD_TRNO: '90808',
    //     PRODUCT: '120BFRG',
    //     UNITS: '1153.07',
    //     FOLIO: '201470',
    //     TDate: '2010-05-03T00:00:00.000Z',
    //     _id: '60d1b0cdfcc80ba348f81063'
    //   },
    //   {
    //     TD_TRNO: '131537',
    //     PRODUCT: '120BFRG',
    //     UNITS: '-1153.07',
    //     FOLIO: '201470',
    //     TDate: '2010-12-06T00:00:00.000Z',
    //     _id: '60d1b0cdfcc80ba348f81055'
    //   },
    //   {
    //     TD_TRNO: '131128',
    //     PRODUCT: '120BFRG',
    //     UNITS: '1153.07',
    //     FOLIO: '201470',
    //     TDate: '2010-12-06T00:00:00.000Z',
    //     _id: '60d1b0cdfcc80ba348f81065'
    //   },
    //   {
    //     TD_TRNO: '131128',
    //     PRODUCT: '120BFRG',
    //     UNITS: '1153.07',
    //     FOLIO: '201470',
    //     TDate: '2010-12-06T00:00:00.000Z',
    //     _id: '60d1b0cdfcc80ba348f81065'
    //   }];
    // var newarray=[];
    // for(var i=0;i<staticarray.length;i++){
    //     console.log(staticarray[i].UNITS)
    //     if(staticarray[i].UNITS){

    //     }
    // }




    transk.find({ TRDESC: /Rej/ }, { TDate: "$TD_TRDT", FOLIO: "$TD_ACNO", UNITS: "$TD_UNITS", PRODUCT: "$FMCODE", TD_TRNO: "$TD_TRNO" }, function (err, data) {
        for (var i = 0; i < data.length; i++) {
            transk.find({ TD_ACNO: data[i]._doc.FOLIO, FMCODE: data[i]._doc.PRODUCT, TD_TRDT: { $eq: new Date(moment(data[i]._doc.TDate).format("YYYY-MM-DD")) } }, { TDate: "$TD_TRDT", FOLIO: "$TD_ACNO", UNITS: "$TD_UNITS", PRODUCT: "$FMCODE", TD_TRNO: "$TD_TRNO" }, function (err, data1) {
                console.log("length=", data1.length)
                if (data1.length === 2) {
                    for (var j = 0; j < data1.length; j++) {
                        console.log(data1[j]._doc)
                    }
                } else {
                    for (var j = 0; j < data1.length; j++) {
                        console.log("else length=", data1.length, data1[j]._doc.FOLIO, data1[j]._doc.PRODUCT)
                    }

                }

            })
            if (err) {
                res.send(err);
            }
        }
        res.send(data);
        return data;
    });
})

app.post("/api/getnavdate1", function (req, res) {
    var camsn = mongoose.model('cams_nav', navcams, 'cams_nav');
    camsn.find({ ISINDivPayoutISINGrowth: req.body.isin }, { _id: 0, Date: { $dateToString: { format: "%m/%d/%Y", date: "$Date" } } }, function (err, data) {

        if (err) {
            res.send(err);
        }
        else {
            // console.log(data)
            res.json(data);
            return data;
        }
    });
})

app.post("/api/getfoliodetailweb", function (req, res) {
    var unit = 0; var balance = 0; var currentvalue = 0; var amt = 0; var cnav = 0;
    const pipeline1 = [  //trans_cams
        { $match: { FOLIO_NO: req.body.folio, SCHEME: req.body.scheme, PAN: req.body.pan } },
        // { $group: { _id: { FOLIO_NO:"$FOLIO_NO",INV_NAME: "$INV_NAME",SCHEME:"$SCHEME",BANK_NAME: "$BANK_NAME", AC_NO: "$AC_NO",TRXN_TYPE_: "$TRXN_TYPE_",TRADDATE:"$TRADDATE",AMC_CODE: "$AMC_CODE", PRODCODE: "$PRODCODE", code:{ $ltrim: { input: "$PRODCODE", chars: "$AMC_CODE"} } } , UNITS: { $sum: "$UNITS" }, AMOUNT: { $sum: "$AMOUNT" }  } },
        { $group: { _id: { FOLIO_NO: "$FOLIO_NO", INV_NAME: "$INV_NAME", SCHEME: "$SCHEME", BANK_NAME: "$BANK_NAME", AC_NO: "$AC_NO", TRXN_TYPE_: "$TRXN_TYPE_", TRADDATE: "$TRADDATE", AMC_CODE: "$AMC_CODE", PRODCODE: "$PRODCODE", code: { $substr: ["$PRODCODE", { $strLenCP: "$AMC_CODE" }, -1] } }, UNITS: { $sum: "$UNITS" }, AMOUNT: { $sum: "$AMOUNT" } } },
        {
            $lookup:
            {
                from: "products",
                let: { ccc: "$_id.code", amc: "$_id.AMC_CODE" },
                pipeline: [
                    {
                        $match:
                        {
                            $expr:
                            {
                                $and:
                                    [
                                        { $eq: ["$PRODUCT_CODE", "$$ccc"] },
                                        { $eq: ["$AMC_CODE", "$$amc"] }
                                    ]
                            }
                        }
                    },
                    { $project: { _id: 0 } }
                ],
                as: "products"
            }
        },
        // { $unwind: "$products" },
        { $lookup: { from: 'cams_nav', localField: 'products.ISIN', foreignField: 'ISINDivPayoutISINGrowth', as: 'nav' } },
        // { $unwind: "$nav" },
        { $lookup: { from: 'folio_cams', localField: '_id.FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
        // { $unwind: "$detail" },
        { $project: { _id: 0, FOLIO: "$_id.FOLIO_NO", INVNAME: "$_id.INV_NAME", SCHEME: "$_id.SCHEME", NATURE: "$_id.TRXN_TYPE_", TD_TRDT: "$_id.TRADDATE", ISIN: "$products.ISIN", NOMINEE: "$detail.NOM_NAME", BANK_NAME: "$_id.BANK_NAME", AC_NO: "$_id.AC_NO", JTNAME2: "$detail.JNT_NAME2", JTNAME1: "$detail.JNT_NAME1", cnav: "$nav.NetAssetValue", UNITS: { $sum: "$UNITS" }, AMOUNT: { $sum: "$AMOUNT" } } },
    ]

    const pipeline2 = [  //trans_karvy
        { $match: { TD_ACNO: req.body.folio, FUNDDESC: req.body.scheme, PAN1: req.body.pan } },
        { $group: { _id: { TD_ACNO: "$TD_ACNO", INVNAME: "$INVNAME", FUNDDESC: "$FUNDDESC", TD_TRTYPE: "$TD_TRTYPE", TD_TRDT: "$TD_TRDT", SCHEMEISIN: "$SCHEMEISIN" }, TD_UNITS: { $sum: "$TD_UNITS" }, TD_AMT: { $sum: "$TD_AMT" } } },
        {
            $lookup:
            {
                from: "cams_nav",
                let: { isin: "$_id.SCHEMEISIN" },
                pipeline: [
                    {
                        $match:
                        {
                            $expr:
                            {
                                $or:
                                    [
                                        { $eq: ["$ISINDivPayoutISINGrowth", "$$isin"] },
                                        { $eq: ["$ISINDivReinvestment", "$$isin"] }
                                    ]
                            }
                        }
                    },
                    { $project: { _id: 0 } }
                ],
                as: "nav"
            }
        },
        //  { $unwind: "$nav" },
        { $lookup: { from: 'folio_karvy', localField: '_id.TD_ACNO', foreignField: 'ACNO', as: 'detail' } },
        //  { $unwind: "$detail" },
        { $project: { _id: 0, FOLIO: "$_id.TD_ACNO", INVNAME: "$_id.INVNAME", SCHEME: "$_id.FUNDDESC", NATURE: "$_id.TD_TRTYPE", TD_TRDT: "$_id.TD_TRDT", ISIN: "$_id.SCHEMEISIN", NOMINEE: "$detail.NOMINEE", BANK_NAME: "$detail.BNAME", AC_NO: "$detail.BNKACNO", JTNAME2: "$detail.JTNAME2", JTNAME1: "$detail.JTNAME1", cnav: "$nav.NetAssetValue", UNITS: { $sum: "$TD_UNITS" }, AMOUNT: { $sum: "$TD_AMT" } } },
    ]

    const pipeline3 = [  //trans_franklin
        { $match: { FOLIO_NO: req.body.folio, SCHEME_NA1: req.body.scheme, IT_PAN_NO1: req.body.pan } },
        { $group: { _id: { FOLIO_NO: "$FOLIO_NO", INVESTOR_2: "$INVESTOR_2", SCHEME_NA1: "$SCHEME_NA1", TRXN_TYPE: "$TRXN_TYPE", TRXN_DATE: "$TRXN_DATE", ISIN: "$ISIN", NOMINEE1: "$NOMINEE1", PBANK_NAME: "$PBANK_NAME", PERSONAL23: "$PERSONAL23", JOINT_NAM2: "$JOINT_NAM2", JOINT_NAM1: "$JOINT_NAM1" }, UNITS: { $sum: "$UNITS" }, AMOUNT: { $sum: "$AMOUNT" } } },
        // { $unwind: "$nav" },
        {
            $lookup:
            {
                from: "cams_nav",
                let: { isin: "$_id.ISIN" },
                pipeline: [
                    {
                        $match:
                        {
                            $expr:
                            {
                                $or:
                                    [
                                        { $eq: ["$ISINDivPayoutISINGrowth", "$$isin"] },
                                        { $eq: ["$ISINDivReinvestment", "$$isin"] }
                                    ]
                            }
                        }
                    },
                    { $project: { _id: 0 } }
                ],
                as: "nav"
            }
        },
        // { $unwind: "$nav" },
        { $project: { _id: 0, FOLIO: "$_id.FOLIO_NO", INVNAME: "$_id.INVESTOR_2", SCHEME: "$_id.SCHEME_NA1", NATURE: "$_id.TRXN_TYPE", TD_TRDT: "$_id.TRXN_DATE", ISIN: "$_id.ISIN", NOMINEE: "$_id.NOMINEE1", BANK_NAME: "$_id.PBANK_NAME", AC_NO: "$_id.PERSONAL23", JTNAME2: "$_id.JOINT_NAM2", JTNAME1: "$_id.JOINT_NAM1", cnav: "$nav.NetAssetValue", UNITS: { $sum: "$UNITS" }, AMOUNT: { $sum: "$AMOUNT" } } },
    ]

    transc.aggregate(pipeline1, (err, camsdata) => {
        transk.aggregate(pipeline2, (err, karvydata) => {
            transf.aggregate(pipeline3, (err, frankdata) => {
                if (frankdata != 0 || karvydata != 0 || camsdata != 0) {
                    resdata = {
                        status: 200,
                        message: "Successfull",
                        data: frankdata
                    };
                } else {
                    resdata = {
                        status: 400,
                        message: "Data not found"
                    };
                }
                var datacon = frankdata.concat(karvydata.concat(camsdata));
                datacon = datacon
                    .map(JSON.stringify)
                    .reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                    .filter(function (item, index, arr) {
                        return arr.indexOf(item, index + 1) === -1;
                    }) // check if there is any occurence of the item in whole array
                    .reverse()
                    .map(JSON.parse);

                for (i = 0; i < datacon.length; i++) {
                    if (datacon[i]['NATURE'] === "RED" || datacon[i]['NATURE'] === "LTOP" || datacon[i]['NATURE'] === "Lateral Shift Out" ||
                        datacon[i]['NATURE'] === "Switch Out" || datacon[i]['NATURE'] === "IPOR" || datacon[i]['NATURE'] === "LTOF" ||
                        datacon[i]['NATURE'] === "FUL" || datacon[i]['NATURE'] === "STPO" || datacon[i]['NATURE'] === "CNO" ||
                        datacon[i]['NATURE'] === "FULR" || datacon[i]['NATURE'] === "Full Redemption" || datacon[i]['NATURE'] === "Partial Switch Out"
                        || datacon[i]['NATURE'] === "Full Switch Out" || datacon[i]['NATURE'] === "Partial Redemption"
                        || datacon[i]['NATURE'] === "SWD" || datacon[i]['NATURE'] === "SWOF" || datacon[i]['NATURE'] === "TOCOB") {
                        unit = "-" + datacon[i].UNITS;
                    } else {
                        unit = datacon[i].UNITS;
                    }

                    balance = parseFloat(unit) + parseFloat(balance);
                    cnav = datacon[i].cnav;

                }
                var index = datacon.length - 1;

                if (balance > 0) {
                    datacon[index].UNITS = balance;
                    datacon[index].AMOUNT = parseFloat(cnav) * parseFloat(balance);
                } else if (balance.isNaN || cnav != "") {
                    datacon[index].UNITS = 0;
                    datacon[index].AMOUNT = 0;
                }
                else {
                    datacon[index].UNITS = 0;
                    datacon[index].AMOUNT = 0;
                }
                if (datacon[0].BANK_NAME === "") {
                    datacon[index].BANK_NAME = datacon[0].BANK_NAME;
                }
                else if (datacon[0].BANK_NAME[0] === "" || datacon[0].BANK_NAME[0] === undefined || datacon[0].BANK_NAME[0].length < 2) {
                    datacon[index].BANK_NAME = datacon[0].BANK_NAME;
                } else {
                    datacon[index].BANK_NAME = datacon[0].BANK_NAME[0];
                }
                if (datacon[0].AC_NO === "") {
                    datacon[index].AC_NO = datacon[0].AC_NO;
                }
                else if (datacon[0].AC_NO[0] === "" || datacon[0].AC_NO[0] === undefined || datacon[0].AC_NO[0].length < 2) {
                    datacon[index].AC_NO = datacon[0].AC_NO;
                } else {
                    datacon[index].AC_NO = datacon[0].AC_NO[0];
                }
                if (datacon[0].JTNAME2 === "") {
                    datacon[index].JTNAME2 = datacon[0].JTNAME2;
                }
                else if (datacon[0].JTNAME2[0] === "" || datacon[0].JTNAME2[0] === undefined || datacon[0].JTNAME2[0].length < 2) {
                    datacon[index].JTNAME2 = datacon[0].JTNAME2;
                } else {
                    datacon[index].JTNAME2 = datacon[0].JTNAME2[0];
                }
                //  if(datacon[0].JTNAME2 === "" ){
                //     datacon[index].JTNAME2 = datacon[0].JTNAME2; 
                //    }
                //  else if(datacon[0].JTNAME2[0].length <2 ||  datacon[0].JTNAME2[0] === "" ||datacon[0].JTNAME2 === ""  ){
                //     datacon[index].JTNAME2 =  datacon[0].JTNAME2;
                //   }else{
                //    datacon[index].JTNAME2 =  datacon[0].JTNAME2[0];
                //    } 
                // console.log(typeof datacon[0].JTNAME1[0])
                if (datacon[0].JTNAME1 === "") {
                    datacon[index].JTNAME1 = datacon[0].JTNAME1;
                }
                else if (datacon[0].JTNAME1[0] === "" || datacon[0].JTNAME1[0] === undefined || datacon[0].JTNAME1[0].length < 2) {
                    datacon[index].JTNAME1 = datacon[0].JTNAME1;
                } else {
                    datacon[index].JTNAME1 = datacon[0].JTNAME1[0];
                }
                if (datacon[0].NOMINEE === "") {
                    datacon[index].NOMINEE = datacon[0].NOMINEE;
                }
                else if (datacon[0].NOMINEE[0] === "" || datacon[0].NOMINEE[0] === undefined || datacon[0].NOMINEE[0].length < 2) {
                    datacon[index].NOMINEE = datacon[0].NOMINEE;
                } else {
                    datacon[index].NOMINEE = datacon[0].NOMINEE[0];
                }
                datacon[index].INVNAME = datacon[0].INVNAME;




                resdata.data = [datacon[index]];

                res.json(resdata);
                return resdata;

            });
        });
    });
})

app.post("/api/getfoliodetail", function (req, res) {
    try {
        var balance = 0; var currentvalue = 0; var amt = 0; var cnav = 0;
        var dataarr = []; var bank = ""; var acno = ""; var joint1 = ""; var joint2 = "";
        var nominee = ""; var invname = ""; var folio = ""; var scheme = ""; var nature = "";
        var navdate = ""; var isin = "";
        var pcode = req.body.amc_code + req.body.prodcode;
        const pipeline1 = [  //trans_cams
            { $match: { FOLIO_NO: req.body.folio, AMC_CODE: req.body.amc_code, PRODCODE: pcode } },
            { $group: { _id: { INV_NAME: "$INV_NAME", FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", TRXN_TYPE_: "$TRXN_TYPE_", BANK_NAME: "$BANK_NAME", AC_NO: "$AC_NO", AMC_CODE: "$AMC_CODE", PRODCODE: "$PRODCODE", code: { $substr: ["$PRODCODE", { $strLenCP: "$AMC_CODE" }, -1] } }, UNITS: { $sum: "$UNITS" }, AMOUNT: { $sum: "$AMOUNT" } } },
            {
                $lookup:
                {
                    from: "products",
                    let: { ccc: "$_id.code", amc: "$_id.AMC_CODE" },
                    pipeline: [
                        {
                            $match:
                            {
                                $expr:
                                {
                                    $and:
                                        [
                                            { $eq: ["$PRODUCT_CODE", "$$ccc"] },
                                            { $eq: ["$AMC_CODE", "$$amc"] }
                                        ]
                                }
                            }
                        },
                        { $project: { _id: 0 } }
                    ],
                    as: "products"
                }
            },
            { $unwind: "$products" },
            { $lookup: { from: 'cams_nav', localField: 'products.ISIN', foreignField: 'ISINDivPayoutISINGrowth', as: 'nav' } },
            { $unwind: "$nav" },
            { $lookup: { from: 'folio_cams', localField: '_id.FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
            { $project: { _id: 0, FOLIO: "$_id.FOLIO_NO", INVNAME: "$_id.INV_NAME", SCHEME: "$_id.SCHEME", NATURE: "$_id.TRXN_TYPE_", navdate: { $dateToString: { format: "%Y/%m/%d", date: "$nav.Date" } }, SCHEMEISIN: "$products.ISIN", NOMINEE: "$detail.NOM_NAME", JTNAME2: "$detail.JNT_NAME2", JTNAME1: "$detail.JNT_NAME1", BANK_NAME: "$_id.BANK_NAME", AC_NO: "$_id.AC_NO", cnav: "$nav.NetAssetValue", UNITS: { $sum: "$UNITS" }, amount_str: { $sum: "$AMOUNT" }, AMOUNT: { $sum: "$AMOUNT" } } },
        ]


        const pipeline2 = [  //trans_karvy
            { $match: { TD_ACNO: req.body.folio, SCHEMEISIN: req.body.isin } },
            { $group: { _id: { TD_ACNO: "$TD_ACNO", INVNAME: "$INVNAME", FUNDDESC: "$FUNDDESC", TD_TRTYPE: "$TD_TRTYPE", TD_TRDT: "$TD_TRDT", SCHEMEISIN: "$SCHEMEISIN" }, TD_UNITS: { $sum: "$TD_UNITS" }, TD_AMT: { $sum: "$TD_AMT" } } },
            {
                $lookup:
                {
                    from: "cams_nav",
                    let: { isin: "$_id.SCHEMEISIN" },
                    pipeline: [
                        {
                            $match:
                            {
                                $expr:
                                {
                                    $or:
                                        [
                                            { $eq: ["$ISINDivPayoutISINGrowth", "$$isin"] },
                                            { $eq: ["$ISINDivReinvestment", "$$isin"] }
                                        ]
                                }
                            }
                        },
                        { $project: { _id: 0 } }
                    ],
                    as: "nav"
                }
            },
            { $unwind: "$nav" },
            { $lookup: { from: 'folio_karvy', localField: '_id.TD_ACNO', foreignField: 'ACNO', as: 'detail' } },
            { $project: { _id: 0, FOLIO: "$_id.TD_ACNO", INVNAME: "$_id.INVNAME", SCHEME: "$_id.FUNDDESC", NATURE: "$_id.TD_TRTYPE", navdate: { $dateToString: { format: "%Y/%m/%d", date: "$nav.Date" } }, SCHEMEISIN: "$_id.SCHEMEISIN", NOMINEE: "$detail.NOMINEE", BANK_NAME: "$detail.BNAME", AC_NO: "$detail.BNKACNO", JTNAME2: "$detail.JTNAME2", JTNAME1: "$detail.JTNAME1", cnav: "$nav.NetAssetValue", UNITS: { $sum: "$TD_UNITS" }, amount_str: { $sum: "$TD_AMT" }, AMOUNT: { $sum: "$TD_AMT" } } },
        ]


        transc.aggregate(pipeline1, (err, camsdata) => {
            transk.aggregate(pipeline2, (err, karvydata) => {
                if (karvydata != 0 || camsdata != 0) {
                    resdata = {
                        status: 200,
                        message: "Successfull",
                        data: karvydata
                    };

                    var datacon = camsdata.concat(karvydata);

                    datacon = datacon
                        .map(JSON.stringify)
                        .reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                        .filter(function (item, index, arr) {
                            return arr.indexOf(item, index + 1) === -1;
                        }) // check if there is any occurence of the item in whole array
                        .reverse()
                        .map(JSON.parse);
                    datacon = Array.from(new Set(datacon));
                    var unit = 0;
                    for (var i = 0; i < datacon.length; i++) {
                        if (datacon[i]['NATURE'] === "RED" || datacon[i]['NATURE'] === "LTOP" || datacon[i]['NATURE'] === "Lateral Shift Out" ||
                            datacon[i]['NATURE'] === "Switch Out" || datacon[i]['NATURE'] === "IPOR" || datacon[i]['NATURE'] === "LTOF" ||
                            datacon[i]['NATURE'] === "FUL" || datacon[i]['NATURE'] === "STPO" || datacon[i]['NATURE'] === "CNO" ||
                            datacon[i]['NATURE'] === "FULR" || datacon[i]['NATURE'] === "Full Redemption" || datacon[i]['NATURE'] === "Partial Switch Out"
                            || datacon[i]['NATURE'] === "Full Switch Out" || datacon[i]['NATURE'] === "Partial Redemption"
                            || datacon[i]['NATURE'] === "SWD" || datacon[i]['NATURE'] === "SWOF" || datacon[i]['NATURE'] === "TOCOB") {
                            unit = "-" + datacon[i].UNITS;
                        } else {
                            unit = datacon[i].UNITS;
                        }

                        balance = parseFloat(unit) + parseFloat(balance);
                        cnav = datacon[i].cnav;
                        bank = datacon[i].BANK_NAME;
                        acno = datacon[i].AC_NO;
                        joint1 = datacon[i].JTNAME1;
                        joint2 = datacon[i].JTNAME2;
                        nominee = datacon[i].NOMINEE;
                        invname = datacon[i].INVNAME;
                        folio = datacon[i].FOLIO;
                        scheme = datacon[i].SCHEME;
                        nature = datacon[i].NATURE;
                        navdate = datacon[i].navdate;
                        isin = datacon[i].SCHEMEISIN;
                    }
                    if (Array.isArray(bank) === true) {
                        bank = bank.filter(function (e) { return e });
                        if (bank.length === 0) {
                            bank = "";
                        } else {
                            bank = bank[0];
                        }
                    }
                    if (Array.isArray(acno) === true) {
                        acno = acno.filter(function (e) { return e });
                        if (acno.length === 0) {
                            acno = "";
                        } else {
                            acno = acno[0];
                        }
                    }
                    if (Array.isArray(joint1) === true) {
                        joint1 = joint1.filter(function (e) { return e });
                        if (joint1.length === 0) {
                            joint1 = "";
                        } else {
                            joint1 = joint1[0];
                        }
                    }
                    if (Array.isArray(joint2) === true) {
                        joint2 = joint2.filter(function (e) { return e });
                        if (joint2.length === 0) {
                            joint2 = "";
                        } else {
                            joint2 = joint2[0];
                        }
                    }
                    if (Array.isArray(nominee) === true) {
                        nominee = nominee.filter(function (e) { return e });
                        if (nominee.length === 0) {
                            nominee = "";
                        } else {
                            nominee = nominee[0];
                        }
                    }

                    if (balance.isNaN || cnav === "" || balance < 0) {
                        balance = 0;
                        cnav = 0;
                    }
                    dataarr.push({ UNITS: parseFloat(balance.toFixed(3)), amount_str: (Math.round(parseFloat(cnav) * parseFloat(balance))).toLocaleString('en-IN'), AMOUNT: Math.round(parseFloat(cnav) * parseFloat(balance)), BANK_NAME: bank, AC_NO: acno, JTNAME1: joint1, JTNAME2: joint2, NOMINEE: nominee, INVNAME: invname, FOLIO: folio, SCHEME: scheme, NATURE: nature, navdate: navdate, SCHEMEISIN: isin, cnav: cnav })
                    resdata.data = dataarr
                } else {
                    resdata = {
                        status: 400,
                        message: "Data not found"
                    };
                }
                res.json(resdata);
                return resdata;
            });
        })
    } catch (err) {
        console.log(err)
    }
})

app.post("/api/getfoliodetailnew", function (req, res) {
    try {
        var balance = 0; var currentvalue = 0; var amt = 0; var cnav = 0;
        var dataarr = []; var bank = ""; var acno = ""; var joint1 = ""; var joint2 = "";
        var nominee = ""; var invname = ""; var folio = ""; var scheme = ""; var nature = "";
        var navdate = ""; var isin = ""; var jointpan1 = ""; var jointpan2 = ""; var holding = "";
        var pcode = req.body.amc_code + req.body.prodcode;
        const pipeline1 = [  //trans_cams
            { $match: { FOLIO_NO: req.body.folio, AMC_CODE: req.body.amc_code, PRODCODE: pcode } },
            { $group: { _id: { INV_NAME: "$INV_NAME", FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", TRXN_TYPE_: "$TRXN_TYPE_", BANK_NAME: "$BANK_NAME", AC_NO: "$AC_NO", PRODCODE: "$PRODCODE" }, UNITS: { $sum: "$UNITS" }, AMOUNT: { $sum: "$AMOUNT" } } },
            { $lookup: { from: 'masterdata', localField: '_id.PRODCODE', foreignField: 'Merged', as: 'master' } },
            { $unwind: "$master" },
            { $group: { _id: { INV_NAME: "$_id.INV_NAME", FOLIO_NO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", TRXN_TYPE_: "$_id.TRXN_TYPE_", BANK_NAME: "$_id.BANK_NAME", AC_NO: "$_id.AC_NO", PRODCODE: "$_id.PRODCODE", ISIN: "$master.ISIN", AMFI: "$master.AMFI_Code", }, UNITS: { $sum: "$UNITS" }, AMOUNT: { $sum: "$AMOUNT" } } },
            {
                $lookup:
                {
                    from: "cams_nav",
                    let: { isin: "$_id.ISIN", amfi: "$_id.AMFI" },
                    pipeline: [
                        {
                            $match:
                            {
                                $expr:
                                {
                                    $or:
                                        [
                                            { $eq: ["$ISINDivPayoutISINGrowth", "$$isin"] },
                                            { $eq: ["$SchemeCode", "$$amfi"] }
                                        ]
                                }
                            }
                        },
                        { $project: { _id: 0 } }
                    ],
                    as: "nav"
                }
            },
            { $unwind: "$nav" },
            { $lookup: { from: 'folio_cams', localField: '_id.FOLIO_NO', foreignField: 'FOLIOCHK', as: 'detail' } },
            { $project: { _id: 0, FOLIO: "$_id.FOLIO_NO", INVNAME: "$_id.INV_NAME", SCHEME: "$_id.SCHEME", NATURE: "$_id.TRXN_TYPE_", navdate: { $dateToString: { format: "%Y/%m/%d", date: "$nav.Date" } }, SCHEMEISIN: "$_id.ISIN", NOMINEE: "$detail.NOM_NAME", JTNAME2: "$detail.JNT_NAME2", JTNAME1: "$detail.JNT_NAME1", JTPAN2: "$detail.JOINT2_PAN", JTPAN1: "$detail.JOINT1_PAN", MODEOFHOLD: "$detail.HOLDING_NA", BANK_NAME: "$_id.BANK_NAME", AC_NO: "$_id.AC_NO", cnav: "$nav.NetAssetValue", UNITS: { $sum: "$UNITS" }, AMOUNT: { $sum: "$AMOUNT" } } },
        ]
        const pipeline2 = [  //trans_karvy
            { $match: { TD_ACNO: req.body.folio, FMCODE: req.body.prodcode, TD_FUND: req.body.amc_code } },
            { $group: { _id: { TD_ACNO: "$TD_ACNO", INVNAME: "$INVNAME", FUNDDESC: "$FUNDDESC", TD_TRTYPE: "$TD_TRTYPE", TD_TRDT: "$TD_TRDT", FMCODE: "$FMCODE" }, TD_UNITS: { $sum: "$TD_UNITS" }, TD_AMT: { $sum: "$TD_AMT" } } },
            { $lookup: { from: 'masterdata', localField: '_id.FMCODE', foreignField: 'SCH_CODE', as: 'master' } },
            { $unwind: "$master" },
            { $group: { _id: { TD_ACNO: "$_id.TD_ACNO", INVNAME: "$_id.INVNAME", FUNDDESC: "$_id.FUNDDESC", TD_TRTYPE: "$_id.TD_TRTYPE", TD_TRDT: "$_id.TD_TRDT", FMCODE: "$_id.FMCODE", ISIN: "$master.ISIN", AMFI: "$master.AMFI_Code" }, TD_UNITS: { $sum: "$TD_UNITS" }, TD_AMT: { $sum: "$TD_AMT" } } },
            {
                $lookup:
                {
                    from: "cams_nav",
                    let: { isin: "$_id.ISIN", amfi: "$_id.AMFI" },
                    pipeline: [
                        {
                            $match:
                            {
                                $expr:
                                {
                                    $or:
                                        [
                                            { $eq: ["$ISINDivPayoutISINGrowth", "$$isin"] },
                                            { $eq: ["$SchemeCode", "$$amfi"] }
                                        ]
                                }
                            }
                        },
                        { $project: { _id: 0 } }
                    ],
                    as: "nav"
                }
            },
            { $unwind: "$nav" },
            { $lookup: { from: 'folio_karvy', localField: '_id.TD_ACNO', foreignField: 'ACNO', as: 'detail' } },
            { $project: { _id: 0, FOLIO: "$_id.TD_ACNO", INVNAME: "$_id.INVNAME", SCHEME: "$_id.FUNDDESC", NATURE: "$_id.TD_TRTYPE", navdate: { $dateToString: { format: "%Y/%m/%d", date: "$nav.Date" } }, SCHEMEISIN: "$_id.ISIN", NOMINEE: "$detail.NOMINEE", BANK_NAME: "$detail.BNAME", AC_NO: "$detail.BNKACNO", JTNAME2: "$detail.JTNAME2", JTNAME1: "$detail.JTNAME1", JTPAN2: "$detail.PAN3", JTPAN1: "$detail.PAN2", MODEOFHOLD: "$detail.MODEOFHOLD", cnav: "$nav.NetAssetValue", UNITS: { $sum: "$TD_UNITS" }, AMOUNT: { $sum: "$TD_AMT" } } },
        ]


        transc.aggregate(pipeline1, (err, camsdata) => {
            transk.aggregate(pipeline2, (err, karvydata) => {
                if (karvydata != 0 || camsdata != 0) {
                    resdata = {
                        status: 200,
                        message: "Successfull",
                        data: karvydata
                    };

                    var datacon = camsdata.concat(karvydata);

                    datacon = datacon
                        .map(JSON.stringify)
                        .reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
                        .filter(function (item, index, arr) {
                            return arr.indexOf(item, index + 1) === -1;
                        }) // check if there is any occurence of the item in whole array
                        .reverse()
                        .map(JSON.parse);
                    datacon = Array.from(new Set(datacon));
                    var unit = 0;
                    for (var i = 0; i < datacon.length; i++) {
                        if (datacon[i]['NATURE'] === "RED" || datacon[i]['NATURE'] === "LTOP" || datacon[i]['NATURE'] === "Lateral Shift Out" ||
                            datacon[i]['NATURE'] === "Switch Out" || datacon[i]['NATURE'] === "IPOR" || datacon[i]['NATURE'] === "LTOF" ||
                            datacon[i]['NATURE'] === "FUL" || datacon[i]['NATURE'] === "STPO" || datacon[i]['NATURE'] === "CNO" ||
                            datacon[i]['NATURE'] === "FULR" || datacon[i]['NATURE'] === "Full Redemption" || datacon[i]['NATURE'] === "Partial Switch Out"
                            || datacon[i]['NATURE'] === "Full Switch Out" || datacon[i]['NATURE'] === "Partial Redemption"
                            || datacon[i]['NATURE'] === "SWD" || datacon[i]['NATURE'] === "SWOF" || datacon[i]['NATURE'] === "TOCOB") {
                            unit = "-" + datacon[i].UNITS;
                        } else {
                            unit = datacon[i].UNITS;
                        }

                        balance = parseFloat(unit) + parseFloat(balance);
                        cnav = datacon[i].cnav;
                        bank = datacon[i].BANK_NAME;
                        acno = datacon[i].AC_NO;
                        joint1 = datacon[i].JTNAME1;
                        joint2 = datacon[i].JTNAME2;
                        jointpan1 = datacon[i].JTPAN1;
                        jointpan2 = datacon[i].JTPAN2;
                        nominee = datacon[i].NOMINEE;
                        invname = datacon[i].INVNAME;
                        holding = datacon[i].MODEOFHOLD;
                        folio = datacon[i].FOLIO;
                        scheme = datacon[i].SCHEME;
                        nature = datacon[i].NATURE;
                        navdate = datacon[i].navdate;
                        isin = datacon[i].SCHEMEISIN;
                    }
                    if (Array.isArray(bank) === true) {
                        bank = bank.filter(function (e) { return e });
                        if (bank.length === 0) {
                            bank = "";
                        } else {
                            bank = bank[0];
                        }
                    }
                    if (Array.isArray(acno) === true) {
                        acno = acno.filter(function (e) { return e });
                        if (acno.length === 0) {
                            acno = "";
                        } else {
                            acno = acno[0];
                        }
                    }
                    if (Array.isArray(joint1) === true) {
                        joint1 = joint1.filter(function (e) { return e });
                        if (joint1.length === 0) {
                            joint1 = "";
                        } else {
                            joint1 = joint1[0];
                        }
                    }
                    if (Array.isArray(joint2) === true) {
                        joint2 = joint2.filter(function (e) { return e });
                        if (joint2.length === 0) {
                            joint2 = "";
                        } else {
                            joint2 = joint2[0];
                        }
                    }
                    if (Array.isArray(jointpan1) === true) {
                        jointpan1 = jointpan1.filter(function (e) { return e });
                        if (jointpan1.length === 0) {
                            jointpan1 = "";
                        } else {
                            jointpan1 = jointpan1[0];
                        }
                    }
                    if (Array.isArray(jointpan2) === true) {
                        jointpan2 = jointpan2.filter(function (e) { return e });
                        if (jointpan2.length === 0) {
                            jointpan2 = "";
                        } else {
                            jointpan2 = jointpan2[0];
                        }
                    }
                    if (Array.isArray(nominee) === true) {
                        nominee = nominee.filter(function (e) { return e });
                        if (nominee.length === 0) {
                            nominee = "";
                        } else {
                            nominee = nominee[0];
                        }
                    }
                    if (Array.isArray(holding) === true) {
                        holding = holding.filter(function (e) { return e });
                        if (holding.length === 0) {
                            holding = "";
                        } else {
                            holding = holding[0];
                        }
                    }
                    if (balance.isNaN || cnav === "" || balance < 0) {
                        balance = 0;
                        cnav = 0;
                    }
                    dataarr.push({ UNITS: parseFloat(balance.toFixed(3)), AMOUNT: Math.round(parseFloat(cnav) * parseFloat(balance)), BANK_NAME: bank, AC_NO: acno, JTNAME1: joint1, JTNAME2: joint2, JTPAN1: jointpan1, JTPAN2: jointpan2, HOLDING_NATURE: holding, NOMINEE: nominee, INVNAME: invname, FOLIO: folio, SCHEME: scheme, NATURE: nature, navdate: navdate, SCHEMEISIN: isin, cnav: cnav })
                    resdata.data = dataarr
                } else {
                    resdata = {
                        status: 400,
                        message: "Data not found"
                    };
                }
                res.json(resdata);
                return resdata;
            });
        })
    } catch (err) {
        console.log(err)
    }
})

app.post("/api/portfolio_FolioDetails", function (req, res) {
    try {
        if (req.body.folio != undefined && req.body.prodcode != undefined) {
            var dataarr = []; var isin = ""; var product_code = "";
            var joint1 = ""; var joint2 = ""; var holding = ""; var amc = "";
            var jointpan1 = ""; var jointpan2 = ""; var pan = ""; var status = "";
            pipeline1 = [  //folio_cams
                { $match: { FOLIOCHK: req.body.folio, PRODUCT: req.body.prodcode } },
                { $group: { _id: { PAN_NO: "$PAN_NO", HOLDING_NA: "$HOLDING_NA", PRODUCT: "$PRODUCT", JNT_NAME1: "$JNT_NAME1", JNT_NAME2: "$JNT_NAME2", JOINT1_PAN: "$JOINT1_PAN", JOINT2_PAN: "$JOINT2_PAN", TAX_STATUS: "$TAX_STATUS", AMC_CODE: "$AMC_CODE" } } },
                { $lookup: { from: 'masterdata', localField: '_id.PRODUCT', foreignField: 'Merged', as: 'master' } },
                { $unwind: "$master" },
                { $project: { _id: 0, PAN: "$_id.PAN_NO", MODE: "$_id.HOLDING_NA", JTNAME1: "$_id.JNT_NAME1", JTNAME2: "$_id.JNT_NAME2", JTPAN1: "$_id.JOINT1_PAN", JTPAN2: "$_id.JOINT2_PAN", PCODE: "$_id.PRODUCT", ISIN: "$master.ISIN", AMC: "$_id.AMC_CODE", STATUS: "$_id.TAX_STATUS" } },
            ]
            pipeline2 = [  //folio_karvy
                { $match: { ACNO: req.body.folio, PRCODE: req.body.prodcode } },
                { $group: { _id: { PANGNO: "$PANGNO", MODEOFHOLD: "$MODEOFHOLD", PRCODE: "$PRCODE", JTNAME1: "$JTNAME1", JTNAME2: "$JTNAME2", PAN2: "$PAN2", PAN3: "$PAN3", STATUS: "$STATUS", FUND: "$FUND" } } },
                { $lookup: { from: 'masterdata', localField: '_id.PRCODE', foreignField: 'SCH_CODE', as: 'master' } },
                { $unwind: "$master" },

                { $project: { _id: 0, PAN: "$_id.PANGNO", MODE: "$_id.MODEOFHOLD", JTNAME1: "$_id.JTNAME1", JTNAME2: "$_id.JTNAME2", JTPAN1: "$_id.PAN2", JTPAN2: "$_id.PAN3", PCODE: "$_id.PRCODE", ISIN: "$master.ISIN", AMC: "$_id.FUND", STATUS: "$_id.STATUS" } },
            ]
            folioc.aggregate(pipeline1, (err, camsdata) => {
                foliok.aggregate(pipeline2, (err, karvydata) => {
                    if (karvydata != 0 || camsdata != 0) {
                        resdata = {
                            status: 200,
                            message: "Successfull",
                            data: karvydata
                        }

                        var datacon = camsdata.concat(karvydata);
                        for (var i = 0; i < datacon.length; i++) {
                            if (datacon[i]['STATUS'] === "On Behalf Of Minor" || datacon[i]['STATUS'] === "Minor" || datacon[i]['STATUS'] === "On Behalf of Minor") {
                                datacon[i]['STATUS'] = "M";
                            }
                            joint1 = datacon[i].JTNAME1;
                            joint2 = datacon[i].JTNAME2;
                            jointpan1 = datacon[i].JTPAN1;
                            jointpan2 = datacon[i].JTPAN2;
                            holding = datacon[i].MODE;
                            isin = datacon[i].ISIN;
                            product_code = datacon[i].PCODE;
                            amc = datacon[i].AMC;
                            pan = datacon[i].PAN;
                            status = datacon[i].STATUS;
                        }


                        dataarr.push({ jh1_name: joint1, jh2_name: joint2, jh1_pan: jointpan1, jh2_pan: jointpan2, holder_nature: holding, isin: isin, product_code: product_code, amc: amc, pan: pan, status: status })
                        resdata.data = dataarr[0];
                    } else {
                        resdata = {
                            status: 400,
                            message: "Data not found"
                        }
                    }
                    res.json(resdata);
                    return resdata;
                });
            })
        } else {
            resdata = {
                status: 400,
                message: "Key not found"
            }
            res.json(resdata);
            return resdata;
        }
    } catch (err) {
        console.log(err)
    }
})

app.post("/api/getschemedetail", function (req, res) {
    if (req.body.rta === "CAMS") {
        const pipeline3 = [  //trans_cams
            { $match: { PRODCODE: req.body.scheme, PAN: req.body.pan, FOLIO_NO: req.body.folio } },
            {
                $group: {
                    _id: {
                        PAN: "$PAN", SCHEME: "$SCHEME", PURPRICE: "$PURPRICE", TRXN_TYPE_: "$TRXN_TYPE_", TRXN_NATUR: "$TRXN_NATUR",
                        TRADDATE: "$TRADDATE", INV_NAME: "$INV_NAME", AMC_CODE: "$AMC_CODE", PRODCODE: "$PRODCODE", UNITS: "$UNITS", AMOUNT: "$AMOUNT", TRXNNO: "$TRXNNO"
                    }
                }
            },
            { $lookup: { from: 'masterdata', localField: '_id.PRODCODE', foreignField: 'Merged', as: 'products' } },
            { $unwind: "$products" },
            { $group: { _id: { PAN: "$_id.PAN", SCHEME: "$_id.SCHEME", PURPRICE: "$_id.PURPRICE", TRXN_TYPE_: "$_id.TRXN_TYPE_", TRXN_NATUR: "$_id.TRXN_NATUR", TRADDATE: "$_id.TRADDATE", INV_NAME: "$_id.INV_NAME", ISIN: "$products.ISIN", UNITS: "$_id.UNITS", AMOUNT: "$_id.AMOUNT", TRXNNO: "$_id.TRXNNO", PRODCODE: "$_id.PRODCODE" } } },
            { $lookup: { from: 'cams_nav', localField: '_id.ISIN', foreignField: 'ISINDivPayoutISINGrowth', as: 'nav' } },
            { $unwind: "$nav" },
            { $project: { _id: 0, PAN: "$_id.PAN", SCHEME: "$_id.SCHEME", TD_NAV: "$_id.PURPRICE", NATURE: "$_id.TRXN_TYPE_", TRDESC: "$_id.TRXN_NATUR", TD_TRDT: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } }, INVNAME: "$_id.INV_NAME", cnav: "$nav.NetAssetValue", UNITS: "$_id.UNITS", AMOUNT: "$_id.AMOUNT", RTA: "CAMS", TRXNNO: "$_id.TRXNNO", PRODCODE: "$_id.PRODCODE" } },
        ]
        transc.aggregate(pipeline3, (err, camsdata) => {
            camsdata = camsdata.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime());
            const pipeline2 = [  //trans_cams2A
                { $match: { PRODCODE: req.body.scheme, PAN: req.body.pan, FOLIO_NO: req.body.folio } },
                {
                    $group: {
                        _id: {
                            PAN: "$PAN", SCHEME: "$SCHEME", PURPRICE: "$PURPRICE", TRXN_TYPE_: "$TRXN_TYPE_", TRXN_NATUR: "$TRXN_NATUR",
                            TRADDATE: "$TRADDATE", INV_NAME: "$INV_NAME", AMC_CODE: "$AMC_CODE", PRODCODE: "$PRODCODE", code: { $substr: ["$PRODCODE", { $strLenCP: "$AMC_CODE" }, -1] }, UNITS: "$UNITS", AMOUNT: "$AMOUNT", TRXNNO: "$TRXNNO"
                        }
                    }
                },
                { $lookup: { from: 'masterdata', localField: '_id.PRODCODE', foreignField: 'Merged', as: 'products' } },

                { $unwind: "$products" },
                { $group: { _id: { PAN: "$_id.PAN", SCHEME: "$_id.SCHEME", PURPRICE: "$_id.PURPRICE", TRXN_TYPE_: "$_id.TRXN_TYPE_", TRXN_NATUR: "$_id.TRXN_NATUR", TRADDATE: "$_id.TRADDATE", INV_NAME: "$_id.INV_NAME", ISIN: "$products.ISIN", UNITS: "$_id.UNITS", AMOUNT: "$_id.AMOUNT", TRXNNO: "$_id.TRXNNO", PRODCODE: "$_id.PRODCODE" } } },
                { $lookup: { from: 'cams_nav', localField: '_id.ISIN', foreignField: 'ISINDivPayoutISINGrowth', as: 'nav' } },
                { $unwind: "$nav" },
                { $project: { _id: 0, PAN: "$_id.PAN", SCHEME: "$_id.SCHEME", TD_NAV: "$_id.PURPRICE", NATURE: "$_id.TRXN_TYPE_", TRDESC: "$_id.TRXN_NATUR", TD_TRDT: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } }, INVNAME: "$_id.INV_NAME", cnav: "$nav.NetAssetValue", UNITS: "$_id.UNITS", AMOUNT: "$_id.AMOUNT", RTA: "CAMS", TRXNNO: "$_id.TRXNNO", PRODCODE: "$_id.PRODCODE" } },
            ]
            transc2A.aggregate(pipeline2, (err, camsdata2A) => {
                camsdata2A = camsdata2A.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime());
                if (camsdata != 0) {
                    resdata = {
                        status: 200,
                        message: "Successfull",
                        data: camsdata
                    }
                    var datacon = "";

                    if (camsdata2A != 0) {
                        camsdata.shift();
                        datacon = camsdata2A.concat(camsdata)
                    } else {
                        datacon = camsdata
                    }

                    for (var i = 0; i < datacon.length; i++) {
                        if (datacon[i]['TRDESC'].match(/Systematic - To/) && datacon[i]['NATURE'] === "Partial Switch Out" && Math.sign(datacon[i]['AMOUNT']) === -1) {
                            datacon[i]['NATURE'] = "SWO Rejection";
                            datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                            datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                        }
                        if (datacon[i]['TRDESC'].match(/Switchout/) && datacon[i]['NATURE'] === "Partial Switch Out" && Math.sign(datacon[i]['AMOUNT']) === -1) {
                            datacon[i]['NATURE'] = "SWO Rejection";
                            datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                            datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                        }
                        if (datacon[i]['TRDESC'].match(/Redemption/) && datacon[i]['NATURE'].match(/Redemption/) && Math.sign(datacon[i]['AMOUNT']) === -1) {
                            datacon[i]['NATURE'] = "SWO Rejection";
                            datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                            datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                        }
                        if (datacon[i]['TRDESC'].match(/Rej/) && (datacon[i]['NATURE'] === "REDR" || datacon[i]['NATURE'] === "SWOFR" || datacon[i]['NATURE'] === "SWOPR" || datacon[i]['NATURE'] === "FULR" || datacon[i]['NATURE'] === "STPOR" || datacon[i]['NATURE'] === "LTOPR" || datacon[i]['NATURE'] === "LTOFR") && Math.sign(datacon[i]['AMOUNT']) === -1) {
                            datacon[i]['NATURE'] = "SWO Rejection";
                            datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                            datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                        }
                        if ((Math.sign(datacon[i]['AMOUNT']) === -1)) {
                            datacon[i]['NATURE'] = "Sys. Reversal";
                        }
                        if (datacon[i]['NATURE'] === "Redemption" || datacon[i]['NATURE'] === "R" || datacon[i]['NATURE'] === "RED" ||
                            datacon[i]['NATURE'] === "SIPR" || datacon[i]['NATURE'] === "Full Redemption" ||
                            datacon[i]['NATURE'] === "Partial Redemption" || datacon[i]['NATURE'] === "Lateral Shift Out" ||
                            datacon[i]['NATURE'] === "Switchout" || datacon[i]['NATURE'] === "Transfer-Out" ||
                            datacon[i]['NATURE'] === "Transmission Out" || datacon[i]['NATURE'] === "Switch Over Out" ||
                            datacon[i]['NATURE'] === "LTOP" || datacon[i]['NATURE'] === "LTOF" || datacon[i]['NATURE'] === "FULR" || datacon[i]['NATURE'] === "TOCOB" ||
                            datacon[i]['NATURE'] === "Partial Switch Out" || datacon[i]['NATURE'] === "Full Switch Out" || datacon[i]['NATURE'] === "SO" ||
                            datacon[i]['NATURE'] === "IPOR" || datacon[i]['NATURE'] === "FUL" ||
                            datacon[i]['NATURE'] === "STPO" || datacon[i]['NATURE'] === "SWOF") {
                            datacon[i]['NATURE'] = "Switch Out";
                        }
                        if (datacon[i]['NATURE'].match(/Systematic Investment.*/) ||
                            datacon[i]['NATURE'].match(/Systematic - Instalment.*/) ||
                            datacon[i]['NATURE'].match(/Systematic - To.*/) ||
                            datacon[i]['NATURE'].match(/Systematic-NSE.*/) ||
                            datacon[i]['NATURE'].match(/Systematic Physical.*/) ||
                            datacon[i]['NATURE'].match(/Systematic.*/) ||
                            datacon[i]['NATURE'].match(/Systematic-Normal.*/) ||
                            datacon[i]['NATURE'].match(/Systematic (ECS).*/) || datacon[i]['NATURE'] === "SIN") {
                            datacon[i]['NATURE'] = "SIP";
                        }

                        if (datacon[i]['NATURE'].match(/Systematic - From.*/)) {
                            datacon[i]['NATURE'] = "STP";
                        }
                        if (datacon[i]['NATURE'] === "Div. Reinvestment") {
                            datacon[i]['NATURE'] = "Div. Reinv.";
                        }
                        if (datacon[i]['NATURE'] === "Gross Dividend" || datacon[i]['NATURE'] === "Dividend Payout" || datacon[i]['NATURE'] === "Dividend Paid") {
                            datacon[i]['NATURE'] = "Gross Div.";
                        }
                        if (datacon[i]['NATURE'] === "Lateral Shift In") {
                            datacon[i]['NATURE'] = "Switch In";
                        }
                        if (datacon[i]['NATURE'] === "Consolidation Out") {
                            datacon[i]['NATURE'] = "CNO";
                        }
                        if (datacon[i]['NATURE'] === "Consolidation In") {
                            datacon[i]['NATURE'] = "CNI";
                        }
                        if (datacon[i]['NATURE'] === "ADDPUR" || datacon[i]['NATURE'] === "Additional Purchase" || datacon[i]['NATURE'] === 'Fresh Purchase') {
                            datacon[i]['NATURE'] = "Purchase";
                        }
                        if (datacon[i]['NATURE'] === "Switch In" || datacon[i]['NATURE'] === "LTIA" ||
                            datacon[i]['NATURE'] === "LTIN") {
                            datacon[i]['NATURE'] = "Switch In";
                        }
                    }
                    //  console.log("datacon cams=",datacon)
                    resdata.data = datacon.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime())
                    //resdata.data = datacon.sort((a, b) => (a.SCHEME > b.SCHEME) ? 1 : -1);
                    res.json(resdata);
                    return resdata;
                } else {
                    resdata = {
                        status: 400,
                        message: "Data not found"
                    }
                }
            });

        });
    } else {
        const pipeline1 = [  //trans_karvy    
            { $match: { FMCODE: req.body.scheme, PAN1: req.body.pan, TD_ACNO: req.body.folio } },
            { $group: { _id: { PAN1: "$PAN1", FUNDDESC: "$FUNDDESC", TD_POP: "$TD_POP", TD_TRTYPE: "$TD_TRTYPE", NAVDATE: "$NAVDATE", TRDESC: "$TRDESC", TRFLAG: "$TRFLAG", INVNAME: "$INVNAME", SCHEMEISIN: "$SCHEMEISIN", TD_UNITS: "$TD_UNITS", TD_AMT: "$TD_AMT", TD_TRNO: "$TD_TRNO", UNQNO: "$UNQNO", FMCODE: "$FMCODE" } } },
            { $lookup: { from: 'cams_nav', localField: '_id.SCHEMEISIN', foreignField: 'ISINDivPayoutISINGrowth', as: 'nav' } },
            //   { $unwind: "$nav"},
            { $project: { _id: 0, PAN: "$_id.PAN1", SCHEME: "$_id.FUNDDESC", TD_NAV: "$_id.TD_POP", NATURE: "$_id.TD_TRTYPE", TRDESC: "$_id.TRDESC", TRFLAG: "$_id.TRFLAG", TD_TRDT: { $dateToString: { format: "%d-%m-%Y", date: "$_id.NAVDATE" } }, INVNAME: "$_id.INVNAME", cnav: "$nav.NetAssetValue", UNITS: "$_id.TD_UNITS", AMOUNT: "$_id.TD_AMT", TRXNNO: "$_id.TD_TRNO", UNQNO: "$_id.UNQNO", RTA: "KARVY", PRODCODE: "$_id.FMCODE" } },
        ]
        transk.aggregate(pipeline1, (err, karvydata) => {
            if (karvydata != 0) {
                resdata = {
                    status: 200,
                    message: "Successfull",
                    data: karvydata
                }
                var datacon = karvydata;
                for (var i = 0; i < datacon.length; i++) {
                    if (datacon[i]['NATURE'] === "SIN" && datacon[i]['TRDESC'].match(/Systematic/) && datacon[i]['TRFLAG'] === "TO") {
                        datacon[i]['NATURE'] = "Switch Out";
                    }
                    if (datacon[i]['NATURE'] === "ADD" && datacon[i]['TRDESC'].match(/Purchase/) && datacon[i]['TRFLAG'] === "TO") {
                        datacon[i]['NATURE'] = "Switch Out";
                    }
                    if (datacon[i]['TRDESC'].match(/Systematic - To/) && datacon[i]['NATURE'] === "Partial Switch Out" && Math.sign(datacon[i]['AMOUNT']) === -1) {
                        datacon[i]['NATURE'] = "SWO Rejection";
                        datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                        datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                    }
                    if (datacon[i]['TRDESC'].match(/Switchout/) && datacon[i]['NATURE'] === "Partial Switch Out" && Math.sign(datacon[i]['AMOUNT']) === -1) {
                        datacon[i]['NATURE'] = "SWO Rejection";
                        datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                        datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                    }
                    if (datacon[i]['TRDESC'].match(/Redemption/) && datacon[i]['NATURE'].match(/Redemption/) && Math.sign(datacon[i]['AMOUNT']) === -1) {
                        datacon[i]['NATURE'] = "SWO Rejection";
                        datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                        datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                    }
                    if (datacon[i]['TRDESC'].match(/Rej/) && (datacon[i]['NATURE'] === "REDR" || datacon[i]['NATURE'] === "SWOFR" || datacon[i]['NATURE'] === "SWOPR" || datacon[i]['NATURE'] === "FULR" || datacon[i]['NATURE'] === "STPOR" || datacon[i]['NATURE'] === "LTOPR" || datacon[i]['NATURE'] === "LTOFR") && Math.sign(datacon[i]['AMOUNT']) === -1) {
                        datacon[i]['NATURE'] = "SWO Rejection";
                        datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                        datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                    }
                    if ((Math.sign(datacon[i]['AMOUNT']) === -1)) {
                        datacon[i]['NATURE'] = "Sys. Reversal";
                    }
                    if (datacon[i]['NATURE'] === "Redemption" || datacon[i]['NATURE'] === "R" || datacon[i]['NATURE'] === "RED" ||
                        datacon[i]['NATURE'] === "SIPR" || datacon[i]['NATURE'] === "Full Redemption" ||
                        datacon[i]['NATURE'] === "Partial Redemption" || datacon[i]['NATURE'] === "Lateral Shift Out" ||
                        datacon[i]['NATURE'] === "Switchout" || datacon[i]['NATURE'] === "Transfer-Out" || datacon[i]['NATURE'] === "TRMO" ||
                        datacon[i]['NATURE'] === "Transmission Out" || datacon[i]['NATURE'] === "Switch Over Out" ||
                        datacon[i]['NATURE'] === "LTOP" || datacon[i]['NATURE'] === "LTOF" || datacon[i]['NATURE'] === "FULR" || datacon[i]['NATURE'] === "TOCOB" ||
                        datacon[i]['NATURE'] === "Partial Switch Out" || datacon[i]['NATURE'] === "Full Switch Out" || datacon[i]['NATURE'] === "SO" ||
                        datacon[i]['NATURE'] === "IPOR" || datacon[i]['NATURE'] === "FUL" ||
                        datacon[i]['NATURE'] === "STPO" || datacon[i]['NATURE'] === "SWOF") {
                        datacon[i]['NATURE'] = "Switch Out";
                    }
                    if (datacon[i]['NATURE'].match(/Systematic Investment.*/) ||
                        datacon[i]['NATURE'].match(/Systematic - Instalment.*/) ||
                        datacon[i]['NATURE'].match(/Systematic - To.*/) ||
                        datacon[i]['NATURE'].match(/Systematic-NSE.*/) ||
                        datacon[i]['NATURE'].match(/Systematic Physical.*/) ||
                        datacon[i]['NATURE'].match(/Systematic.*/) ||
                        datacon[i]['NATURE'].match(/Systematic-Normal.*/) ||
                        datacon[i]['NATURE'].match(/Systematic (ECS).*/) || datacon[i]['NATURE'] === "SIN") {
                        datacon[i]['NATURE'] = "SIP";
                    }
                    // if (datacon[i]['NATURE'] === "Switch Over Out" || datacon[i]['NATURE'] === "LTOP" || datacon[i]['NATURE'] === "LTOF" || datacon[i]['NATURE'] === "Lateral Shift Out") {
                    //     datacon[i]['NATURE'] = "Switch Out";
                    // }


                    if (datacon[i]['NATURE'].match(/Systematic - From.*/)) {
                        datacon[i]['NATURE'] = "STP";
                    }
                    if (datacon[i]['NATURE'] === "Div. Reinvestment") {
                        datacon[i]['NATURE'] = "Div. Reinv.";
                    }
                    if (datacon[i]['NATURE'] === "Gross Dividend" || datacon[i]['NATURE'] === "Dividend Payout" || datacon[i]['NATURE'] === "Dividend Paid") {
                        datacon[i]['NATURE'] = "Gross Div.";
                    }
                    if (datacon[i]['NATURE'] === "Lateral Shift In") {
                        datacon[i]['NATURE'] = "Switch In";
                    }
                    if (datacon[i]['NATURE'] === "Consolidation Out") {
                        datacon[i]['NATURE'] = "CNO";
                    }
                    if (datacon[i]['NATURE'] === "Consolidation In") {
                        datacon[i]['NATURE'] = "CNI";
                    }
                    if (datacon[i]['NATURE'] === "ADDPUR" || datacon[i]['NATURE'] === "Additional Purchase" || datacon[i]['NATURE'] === 'Fresh Purchase') {
                        datacon[i]['NATURE'] = "Purchase";
                    }
                    if (datacon[i]['NATURE'] === "Switch In" || datacon[i]['NATURE'] === "LTIA" ||
                        datacon[i]['NATURE'] === "LTIN") {
                        datacon[i]['NATURE'] = "Switch In";
                    }
                }
                // console.log("datacon karvy=",datacon)
                resdata.data = datacon.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime())

                res.json(resdata);
                return resdata;
            } else {
                resdata = {
                    status: 400,
                    message: "Data not found"
                }
            }
        });
    }


})

app.post("/api/getschemedetailapi", function (req, res) {
    var balance = 0; var nav = 0; var currentval = 0;
    if (req.body.rta === "CAMS") {
        const pipeline3 = [  //trans_cams
            { $match: { PRODCODE: req.body.scheme, PAN: req.body.pan, FOLIO_NO: req.body.folio } },
            {
                $group: {
                    _id: {
                        PAN: "$PAN", SCHEME: "$SCHEME", PURPRICE: "$PURPRICE", TRXN_TYPE_: "$TRXN_TYPE_", TRXN_NATUR: "$TRXN_NATUR",
                        TRADDATE: "$TRADDATE", INV_NAME: "$INV_NAME", AMC_CODE: "$AMC_CODE", PRODCODE: "$PRODCODE", UNITS: "$UNITS", AMOUNT: "$AMOUNT", TRXNNO: "$TRXNNO"
                    }
                }
            },
            { $lookup: { from: 'masterdata', localField: '_id.PRODCODE', foreignField: 'Merged', as: 'products' } },
            { $unwind: "$products" },
            { $group: { _id: { PAN: "$_id.PAN", SCHEME: "$_id.SCHEME", PURPRICE: "$_id.PURPRICE", TRXN_TYPE_: "$_id.TRXN_TYPE_", TRXN_NATUR: "$_id.TRXN_NATUR", TRADDATE: "$_id.TRADDATE", INV_NAME: "$_id.INV_NAME", ISIN: "$products.ISIN", UNITS: "$_id.UNITS", AMOUNT: "$_id.AMOUNT", TRXNNO: "$_id.TRXNNO", PRODCODE: "$_id.PRODCODE" } } },
            { $lookup: { from: 'cams_nav', localField: '_id.ISIN', foreignField: 'ISINDivPayoutISINGrowth', as: 'nav' } },
            { $unwind: "$nav" },
            { $project: { _id: 0, PAN: "$_id.PAN", SCHEME: "$_id.SCHEME", TD_NAV: "$_id.PURPRICE", NATURE: "$_id.TRXN_TYPE_", TRDESC: "$_id.TRXN_NATUR", TD_TRDT: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } }, INVNAME: "$_id.INV_NAME", cnav: "$nav.NetAssetValue", UNITS: "$_id.UNITS", AMOUNT: "$_id.AMOUNT", RTA: "CAMS", TRXNNO: "$_id.TRXNNO", PRODCODE: "$_id.PRODCODE", BALANCE: "" } },
        ]
        transc.aggregate(pipeline3, (err, camsdata) => {
            camsdata = camsdata.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime());
            const pipeline2 = [  //trans_cams2A
                { $match: { PRODCODE: req.body.scheme, PAN: req.body.pan, FOLIO_NO: req.body.folio } },
                {
                    $group: {
                        _id: {
                            PAN: "$PAN", SCHEME: "$SCHEME", PURPRICE: "$PURPRICE", TRXN_TYPE_: "$TRXN_TYPE_", TRXN_NATUR: "$TRXN_NATUR",
                            TRADDATE: "$TRADDATE", INV_NAME: "$INV_NAME", AMC_CODE: "$AMC_CODE", PRODCODE: "$PRODCODE", code: { $substr: ["$PRODCODE", { $strLenCP: "$AMC_CODE" }, -1] }, UNITS: "$UNITS", AMOUNT: "$AMOUNT", TRXNNO: "$TRXNNO"
                        }
                    }
                },
                { $lookup: { from: 'masterdata', localField: '_id.PRODCODE', foreignField: 'Merged', as: 'products' } },

                { $unwind: "$products" },
                { $group: { _id: { PAN: "$_id.PAN", SCHEME: "$_id.SCHEME", PURPRICE: "$_id.PURPRICE", TRXN_TYPE_: "$_id.TRXN_TYPE_", TRXN_NATUR: "$_id.TRXN_NATUR", TRADDATE: "$_id.TRADDATE", INV_NAME: "$_id.INV_NAME", ISIN: "$products.ISIN", UNITS: "$_id.UNITS", AMOUNT: "$_id.AMOUNT", TRXNNO: "$_id.TRXNNO", PRODCODE: "$_id.PRODCODE" } } },
                { $lookup: { from: 'cams_nav', localField: '_id.ISIN', foreignField: 'ISINDivPayoutISINGrowth', as: 'nav' } },
                { $unwind: "$nav" },
                { $project: { _id: 0, PAN: "$_id.PAN", SCHEME: "$_id.SCHEME", TD_NAV: "$_id.PURPRICE", NATURE: "$_id.TRXN_TYPE_", TRDESC: "$_id.TRXN_NATUR", TD_TRDT: { $dateToString: { format: "%d-%m-%Y", date: "$_id.TRADDATE" } }, INVNAME: "$_id.INV_NAME", cnav: "$nav.NetAssetValue", UNITS: "$_id.UNITS", AMOUNT: "$_id.AMOUNT", RTA: "CAMS", TRXNNO: "$_id.TRXNNO", PRODCODE: "$_id.PRODCODE", BALANCE: "" } },
            ]
            transc2A.aggregate(pipeline2, (err, camsdata2A) => {
                camsdata2A = camsdata2A.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime());
                if (camsdata != 0) {
                    resdata = {
                        status: 200,
                        message: "Successfull",
                        data: camsdata
                    }
                    var datacon = "";

                    if (camsdata2A != 0) {
                        camsdata.shift();
                        datacon = camsdata2A.concat(camsdata)
                    } else {
                        datacon = camsdata
                    }
                    datacon = datacon.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime())
                    for (var i = 0; i < datacon.length; i++) {

                        if (datacon[i]['TRDESC'].match(/Systematic - To/) && datacon[i]['NATURE'] === "Partial Switch Out" && Math.sign(datacon[i]['AMOUNT']) === -1) {
                            datacon[i]['NATURE'] = "SWO Rejection";
                            datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                            datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                        }
                        if (datacon[i]['TRDESC'].match(/Switchout/) && datacon[i]['NATURE'] === "Partial Switch Out" && Math.sign(datacon[i]['AMOUNT']) === -1) {
                            datacon[i]['NATURE'] = "SWO Rejection";
                            datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                            datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                        }
                        if (datacon[i]['TRDESC'].match(/Redemption/) && datacon[i]['NATURE'].match(/Redemption/) && Math.sign(datacon[i]['AMOUNT']) === -1) {
                            datacon[i]['NATURE'] = "SWO Rejection";
                            datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                            datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                        }
                        if (datacon[i]['TRDESC'].match(/Rej/) && (datacon[i]['NATURE'] === "REDR" || datacon[i]['NATURE'] === "SWOFR" || datacon[i]['NATURE'] === "SWOPR" || datacon[i]['NATURE'] === "FULR" || datacon[i]['NATURE'] === "STPOR" || datacon[i]['NATURE'] === "LTOPR" || datacon[i]['NATURE'] === "LTOFR") && Math.sign(datacon[i]['AMOUNT']) === -1) {
                            datacon[i]['NATURE'] = "SWO Rejection";
                            datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                            datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                        }
                        if ((Math.sign(datacon[i]['AMOUNT']) === -1)) {
                            datacon[i]['NATURE'] = "Sys. Reversal";
                        }
                        if (datacon[i]['NATURE'] === "Redemption" || datacon[i]['NATURE'] === "R" || datacon[i]['NATURE'] === "RED" ||
                            datacon[i]['NATURE'] === "SIPR" || datacon[i]['NATURE'] === "Full Redemption" || datacon[i]['NATURE'] === "SWD" ||
                            datacon[i]['NATURE'] === "Partial Redemption" || datacon[i]['NATURE'] === "Lateral Shift Out" || datacon[i]['NATURE'] === "SWOP" ||
                            datacon[i]['NATURE'] === "Switchout" || datacon[i]['NATURE'] === "Transfer-Out" ||
                            datacon[i]['NATURE'] === "Transmission Out" || datacon[i]['NATURE'] === "Switch Over Out" ||
                            datacon[i]['NATURE'] === "LTOP" || datacon[i]['NATURE'] === "LTOF" || datacon[i]['NATURE'] === "FULR" || datacon[i]['NATURE'] === "TOCOB" ||
                            datacon[i]['NATURE'] === "Partial Switch Out" || datacon[i]['NATURE'] === "Full Switch Out" || datacon[i]['NATURE'] === "SO" ||
                            datacon[i]['NATURE'] === "IPOR" || datacon[i]['NATURE'] === "FUL" ||
                            datacon[i]['NATURE'] === "STPO" || datacon[i]['NATURE'] === "SWOF") {
                            datacon[i]['NATURE'] = "Switch Out";
                            datacon[i]['UNITS'] = "-" + datacon[i]['UNITS']
                        }
                        if (datacon[i]['NATURE'].match(/Systematic Investment.*/) ||
                            datacon[i]['NATURE'].match(/Systematic - Instalment.*/) ||
                            datacon[i]['NATURE'].match(/Systematic - To.*/) ||
                            datacon[i]['NATURE'].match(/Systematic-NSE.*/) ||
                            datacon[i]['NATURE'].match(/Systematic Physical.*/) ||
                            datacon[i]['NATURE'].match(/Systematic.*/) ||
                            datacon[i]['NATURE'].match(/Systematic-Normal.*/) ||
                            datacon[i]['NATURE'].match(/Systematic (ECS).*/) || datacon[i]['NATURE'] === "SIN") {
                            datacon[i]['NATURE'] = "SIP";
                        }

                        if (datacon[i]['NATURE'].match(/Systematic - From.*/)) {
                            datacon[i]['NATURE'] = "STP";
                        }
                        if (datacon[i]['NATURE'] === "Div. Reinvestment") {
                            datacon[i]['NATURE'] = "Div. Reinv.";
                        }
                        if (datacon[i]['NATURE'] === "Gross Dividend" || datacon[i]['NATURE'] === "Dividend Payout" || datacon[i]['NATURE'] === "Dividend Paid") {
                            datacon[i]['NATURE'] = "Gross Div.";
                        }
                        if (datacon[i]['NATURE'] === "Lateral Shift In") {
                            datacon[i]['NATURE'] = "Switch In";
                        }
                        if (datacon[i]['NATURE'] === "Consolidation Out") {
                            datacon[i]['NATURE'] = "CNO";
                        }
                        if (datacon[i]['NATURE'] === "Consolidation In") {
                            datacon[i]['NATURE'] = "CNI";
                        }
                        if (datacon[i]['NATURE'] === "ADDPUR" || datacon[i]['NATURE'] === "Additional Purchase" || datacon[i]['NATURE'] === 'Fresh Purchase') {
                            datacon[i]['NATURE'] = "Purchase";
                        }
                        if (datacon[i]['NATURE'] === "Switch In" || datacon[i]['NATURE'] === "LTIA" ||
                            datacon[i]['NATURE'] === "LTIN") {
                            datacon[i]['NATURE'] = "Switch In";
                        }
                        balance = parseFloat(datacon[i]['UNITS']) + parseFloat(balance);
                        balance = balance.toFixed(4);
                        datacon[i]['BALANCE'] = balance;
                        nav = datacon[i]['cnav'];
                    }

                    currentval = nav * balance;
                    currentval = currentval.toFixed(4);

                    resdata.data = datacon.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime())
                    resdata.totalvalue = { balance, nav, currentval };

                    res.json(resdata);
                    return resdata;
                } else {
                    resdata = {
                        status: 400,
                        message: "Data not found"
                    }
                }
            });

        });
    } else {
        const pipeline1 = [  //trans_karvy    
            { $match: { FMCODE: req.body.scheme, PAN1: req.body.pan, TD_ACNO: req.body.folio } },
            { $group: { _id: { PAN1: "$PAN1", FUNDDESC: "$FUNDDESC", TD_POP: "$TD_POP", TD_TRTYPE: "$TD_TRTYPE", NAVDATE: "$NAVDATE", TRDESC: "$TRDESC", TRFLAG: "$TRFLAG", INVNAME: "$INVNAME", SCHEMEISIN: "$SCHEMEISIN", TD_UNITS: "$TD_UNITS", TD_AMT: "$TD_AMT", TD_TRNO: "$TD_TRNO", UNQNO: "$UNQNO", FMCODE: "$FMCODE" } } },
            { $lookup: { from: 'cams_nav', localField: '_id.SCHEMEISIN', foreignField: 'ISINDivPayoutISINGrowth', as: 'nav' } },
            { $unwind: "$nav" },
            { $project: { _id: 0, PAN: "$_id.PAN1", SCHEME: "$_id.FUNDDESC", TD_NAV: "$_id.TD_POP", NATURE: "$_id.TD_TRTYPE", TRDESC: "$_id.TRDESC", TRFLAG: "$_id.TRFLAG", TD_TRDT: { $dateToString: { format: "%d-%m-%Y", date: "$_id.NAVDATE" } }, INVNAME: "$_id.INVNAME", cnav: "$nav.NetAssetValue", UNITS: "$_id.TD_UNITS", AMOUNT: "$_id.TD_AMT", TRXNNO: "$_id.TD_TRNO", UNQNO: "$_id.UNQNO", RTA: "KARVY", PRODCODE: "$_id.FMCODE", BALANCE: "" } },
        ]
        transk.aggregate(pipeline1, (err, karvydata) => {
            if (karvydata != 0) {
                resdata = {
                    status: 200,
                    message: "Successfull",
                    data: karvydata
                }
                var datacon = karvydata;

                datacon = datacon.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime())
                for (var i = 0; i < datacon.length; i++) {
                    if (datacon[i]['NATURE'] === "SIN" && datacon[i]['TRDESC'].match(/Systematic/) && datacon[i]['TRFLAG'] === "TO") {
                        datacon[i]['NATURE'] = "Switch Out";
                    }
                    if (datacon[i]['NATURE'] === "ADD" && datacon[i]['TRDESC'].match(/Purchase/) && datacon[i]['TRFLAG'] === "TO") {
                        datacon[i]['NATURE'] = "Switch Out";
                    }
                    if (datacon[i]['TRDESC'].match(/Systematic - To/) && datacon[i]['NATURE'] === "Partial Switch Out" && Math.sign(datacon[i]['AMOUNT']) === -1) {
                        datacon[i]['NATURE'] = "SWO Rejection";
                        datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                        datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                    }
                    if (datacon[i]['TRDESC'].match(/Switchout/) && datacon[i]['NATURE'] === "Partial Switch Out" && Math.sign(datacon[i]['AMOUNT']) === -1) {
                        datacon[i]['NATURE'] = "SWO Rejection";
                        datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                        datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                    }
                    if (datacon[i]['TRDESC'].match(/Redemption/) && datacon[i]['NATURE'].match(/Redemption/) && Math.sign(datacon[i]['AMOUNT']) === -1) {
                        datacon[i]['NATURE'] = "SWO Rejection";
                        datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                        datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                    }
                    if (datacon[i]['TRDESC'].match(/Rej/) && (datacon[i]['NATURE'] === "REDR" || datacon[i]['NATURE'] === "SWOFR" || datacon[i]['NATURE'] === "SWOPR" || datacon[i]['NATURE'] === "FULR" || datacon[i]['NATURE'] === "STPOR" || datacon[i]['NATURE'] === "LTOPR" || datacon[i]['NATURE'] === "LTOFR") && Math.sign(datacon[i]['AMOUNT']) === -1) {
                        datacon[i]['NATURE'] = "SWO Rejection";
                        datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                        datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                    }
                    if ((Math.sign(datacon[i]['AMOUNT']) === -1)) {
                        datacon[i]['NATURE'] = "Sys. Reversal";
                    }
                    if (datacon[i]['NATURE'] === "Redemption" || datacon[i]['NATURE'] === "R" || datacon[i]['NATURE'] === "RED" || datacon[i]['NATURE'] === "SWD" ||
                        datacon[i]['NATURE'] === "SIPR" || datacon[i]['NATURE'] === "Full Redemption" ||
                        datacon[i]['NATURE'] === "Partial Redemption" || datacon[i]['NATURE'] === "Lateral Shift Out" ||
                        datacon[i]['NATURE'] === "Switchout" || datacon[i]['NATURE'] === "Transfer-Out" || datacon[i]['NATURE'] === "TRMO" ||
                        datacon[i]['NATURE'] === "Transmission Out" || datacon[i]['NATURE'] === "Switch Over Out" || datacon[i]['NATURE'] === "SWOP" ||
                        datacon[i]['NATURE'] === "LTOP" || datacon[i]['NATURE'] === "LTOF" || datacon[i]['NATURE'] === "FULR" || datacon[i]['NATURE'] === "TOCOB" ||
                        datacon[i]['NATURE'] === "Partial Switch Out" || datacon[i]['NATURE'] === "Full Switch Out" || datacon[i]['NATURE'] === "SO" ||
                        datacon[i]['NATURE'] === "IPOR" || datacon[i]['NATURE'] === "FUL" ||
                        datacon[i]['NATURE'] === "STPO" || datacon[i]['NATURE'] === "SWOF") {
                        datacon[i]['NATURE'] = "Switch Out";
                        datacon[i]['UNITS'] = "-" + datacon[i]['UNITS']
                    }
                    if (datacon[i]['NATURE'].match(/Systematic Investment.*/) ||
                        datacon[i]['NATURE'].match(/Systematic - Instalment.*/) ||
                        datacon[i]['NATURE'].match(/Systematic - To.*/) ||
                        datacon[i]['NATURE'].match(/Systematic-NSE.*/) ||
                        datacon[i]['NATURE'].match(/Systematic Physical.*/) ||
                        datacon[i]['NATURE'].match(/Systematic.*/) ||
                        datacon[i]['NATURE'].match(/Systematic-Normal.*/) ||
                        datacon[i]['NATURE'].match(/Systematic (ECS).*/) || datacon[i]['NATURE'] === "SIN") {
                        datacon[i]['NATURE'] = "SIP";
                    }
                    // if (datacon[i]['NATURE'] === "Switch Over Out" || datacon[i]['NATURE'] === "LTOP" || datacon[i]['NATURE'] === "LTOF" || datacon[i]['NATURE'] === "Lateral Shift Out") {
                    //     datacon[i]['NATURE'] = "Switch Out";
                    // }


                    if (datacon[i]['NATURE'].match(/Systematic - From.*/)) {
                        datacon[i]['NATURE'] = "STP";
                    }
                    if (datacon[i]['NATURE'] === "Div. Reinvestment") {
                        datacon[i]['NATURE'] = "Div. Reinv.";
                    }
                    if (datacon[i]['NATURE'] === "Gross Dividend" || datacon[i]['NATURE'] === "Dividend Payout" || datacon[i]['NATURE'] === "Dividend Paid") {
                        datacon[i]['NATURE'] = "Gross Div.";
                    }
                    if (datacon[i]['NATURE'] === "Lateral Shift In") {
                        datacon[i]['NATURE'] = "Switch In";
                    }
                    if (datacon[i]['NATURE'] === "Consolidation Out") {
                        datacon[i]['NATURE'] = "CNO";
                    }
                    if (datacon[i]['NATURE'] === "Consolidation In") {
                        datacon[i]['NATURE'] = "CNI";
                    }
                    if (datacon[i]['NATURE'] === "ADDPUR" || datacon[i]['NATURE'] === "Additional Purchase" || datacon[i]['NATURE'] === 'Fresh Purchase') {
                        datacon[i]['NATURE'] = "Purchase";
                    }
                    if (datacon[i]['NATURE'] === "Switch In" || datacon[i]['NATURE'] === "LTIA" ||
                        datacon[i]['NATURE'] === "LTIN") {
                        datacon[i]['NATURE'] = "Switch In";
                    }
                    balance = parseFloat(datacon[i]['UNITS']) + parseFloat(balance);
                    balance = balance.toFixed(4);
                    datacon[i]['BALANCE'] = balance;
                    nav = datacon[i]['cnav'];
                }
                // balance = parseFloat(balance.toFixed(4));
                currentval = nav * balance;
                currentval = currentval.toFixed(4);

                resdata.data = datacon.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime())
                resdata.totalvalue = { balance, nav, currentval };
                res.json(resdata);
                return resdata;
            } else {
                resdata = {
                    status: 400,
                    message: "Data not found"
                }
            }
        });
    }

})

app.post("/api/gettransschemedetail", function (req, res) {
    try {
        const pipeline1 = [  //trans_karvy    
            { $match: { FMCODE: req.body.scheme, PAN1: req.body.pan, TD_ACNO: req.body.folio } },
            { $project: { _id: 1, PAN: "$PAN1", FUNDDESC: "$FUNDDESC", TD_NAV: "$TD_NAV", NATURE: "$TD_TRTYPE", TD_TRDT: { $dateToString: { format: "%d-%m-%Y", date: "$TD_TRDT" } }, TRDESC: "$TRDESC", INVNAME: "$INVNAME", UNITS: { $sum: "$TD_UNITS" }, AMOUNT: { $sum: "$TD_AMT" }, RTA: "KARVY" } },
            { $sort: { TD_TRDT: -1 } }
        ]

        const pipeline3 = [  //trans_cams
            { $match: { PRODCODE: req.body.scheme, PAN: req.body.pan, FOLIO_NO: req.body.folio } },
            { $project: { _id: 1, PAN: "$PAN", FUNDDESC: "$SCHEME", TD_NAV: "$PURPRICE", NATURE: "$TRXN_TYPE_", TD_TRDT: { $dateToString: { format: "%d-%m-%Y", date: "$TRADDATE" } }, TRDESC: "$TRXN_TYPE_", INVNAME: "$INV_NAME", UNITS: { $sum: "$UNITS" }, AMOUNT: { $sum: "$AMOUNT" }, RTA: "CAMS" } },
            { $sort: { TD_TRDT: -1 } }
        ]

        transk.aggregate(pipeline1, (err, karvydata) => {
            transc.aggregate(pipeline3, (err, camsdata) => {
                if (karvydata != 0 || camsdata != 0) {
                    resdata = {
                        status: 200,
                        message: "Successfull",
                        data: karvydata
                    }
                    var datacon = karvydata.concat(camsdata);
                    for (var i = 0; i < datacon.length; i++) {
                        if (datacon[i]['NATURE'] === "R" || datacon[i]['NATURE'] === "Redemption" || datacon[i]['NATURE'] === "FUL" || datacon[i]['NATURE'] === "Full Redemption" || datacon[i]['NATURE'] === "Partial Redemption") {
                            datacon[i]['NATURE'] = "RED";
                        } if (datacon[i]['NATURE'].match(/Systematic Investment.*/) || datacon[i]['NATURE'] === "SIN" ||
                            datacon[i]['NATURE'].match(/Systematic Withdrawal.*/) ||
                            datacon[i]['NATURE'].match(/Systematic - Instalment.*/) || datacon[i]['NATURE'].match(/Systematic - To.*/) || datacon[i]['NATURE'].match(/Systematic-NSE.*/) || datacon[i]['NATURE'].match(/Systematic Physical.*/) || datacon[i]['NATURE'].match(/Systematic.*/) || datacon[i]['NATURE'].match(/Systematic-Normal.*/) || datacon[i]['NATURE'].match(/Systematic (ECS).*/)) {
                            datacon[i]['NATURE'] = "SIP";
                        }
                        if (datacon[i]['NATURE'] === "Transmission Out" || datacon[i]['NATURE'] === "Switch Over Out" || datacon[i]['NATURE'] === "LTOP" || datacon[i]['NATURE'] === "LTOF" || datacon[i]['NATURE'] === "Lateral Shift Out" || datacon[i]['NATURE'] === "Partial Switch Out" || datacon[i]['NATURE'] === "Full Switch Out") {
                            datacon[i]['NATURE'] = "Switch Out";
                        }
                        if ((Math.sign(datacon[i]['AMOUNT']) === -1) || datacon[i]['NATURE'] === "SINR") {
                            datacon[i]['NATURE'] = "SIP Rej.";
                        }
                        if (datacon[i]['NATURE'].match(/Systematic - From.*/)) {
                            datacon[i]['NATURE'] = "STP";
                        }
                        if (datacon[i]['NATURE'] === "Div. Reinvestment") {
                            datacon[i]['NATURE'] = "Div. Reinv.";
                        }
                        if (datacon[i]['NATURE'] === "Gross Dividend") {
                            datacon[i]['NATURE'] = "Dividend Payout";
                        }
                        if (datacon[i]['NATURE'] === "Lateral Shift In" ||
                            datacon[i]['NATURE'] === "Switch Over In" || datacon[i]['NATURE'] === "LTIN" || datacon[i]['NATURE'] === "LTIA") {
                            datacon[i]['NATURE'] = "Switch In";
                        }
                        if (datacon[i]['NATURE'] === "Consolidation Out") {
                            datacon[i]['NATURE'] = "CNO";
                        }
                        if (datacon[i]['NATURE'] === "Consolidation In") {
                            datacon[i]['NATURE'] = "CNI";
                        }
                        if (datacon[i]['NATURE'] === "Purchase" || datacon[i]['NATURE'] === "IPO" ||
                            datacon[i]['NATURE'] === "NEW" || datacon[i]['NATURE'] === "Initial Allotment"
                            || datacon[i]['NATURE'] === "NEWPUR") {
                            datacon[i]['NATURE'] = "Purchase";
                        }
                        if (datacon[i]['NATURE'] === "Additional Purchase" || datacon[i]['NATURE'] === "ADD" || datacon[i]['NATURE'] === "ADDPUR") {
                            datacon[i]['NATURE'] = "Add. Purchase";
                        }
                    }
                    resdata.data = datacon.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime())

                    res.json(resdata);
                    return resdata;
                } else {
                    resdata = {
                        status: 400,
                        message: "Data not found"
                    };
                }

            });
        })
    } catch (err) {
        console.log(e)
    }
})

app.post("/api/getschemeportfoliodetail", function (req, res) {
    if (req.body.RTA === "CAMS") {
        pipeline1 = [  //trans_cams
            { $match: { PRODCODE: req.body.scheme, PAN: req.body.pan, FOLIO_NO: req.body.folio } },
            { $group: { _id: { INV_NAME: { "$toUpper": ["$INV_NAME"] }, FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", PURPRICE: "$PURPRICE", TRXN_TYPE_: "$TRXN_TYPE_", TRXN_NATUR: "$TRXN_NATUR", TRADDATE: "$TRADDATE", TRXNNO: "$TRXNNO", AMC_CODE: "$AMC_CODE", PRODCODE: "$PRODCODE", UNITS: "$UNITS", AMOUNT: "$AMOUNT" } } },

            { $lookup: { from: 'masterdata', localField: '_id.PRODCODE', foreignField: 'Merged', as: 'products' } },

            { $unwind: "$products" },
            { $group: { _id: { INV_NAME: { "$toUpper": ["$_id.INV_NAME"] }, FOLIO_NO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", PURPRICE: "$_id.PURPRICE", TRXN_TYPE_: "$_id.TRXN_TYPE_", TRXN_NATUR: "$_id.TRXN_NATUR", TRADDATE: "$_id.TRADDATE", TRXNNO: "$_id.TRXNNO", ISIN: "$products.ISIN", PRODCODE: "$_id.PRODCODE", UNITS: "$_id.UNITS", AMOUNT: "$_id.AMOUNT" } } },
            { $lookup: { from: 'cams_nav', localField: '_id.ISIN', foreignField: 'ISINDivPayoutISINGrowth', as: 'nav' } },
            { $unwind: "$nav" },

            { $project: { _id: 0, INVNAME: { "$toUpper": ["$_id.INV_NAME"] }, FOLIO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", TD_NAV: "$_id.PURPRICE", TRDESC: "$_id.TRXN_NATUR", NATURE: "$_id.TRXN_TYPE_", newdate: "$_id.TRADDATE", TD_TRDT: { $dateToString: { format: "%m/%d/%Y", date: "$_id.TRADDATE" } }, TRXNNO: "$_id.TRXNNO", ISIN: "$_id.ISIN", cnav: "$nav.NetAssetValue", navdate: "$nav.Date", UNITS: "$_id.UNITS", AMOUNT: "$_id.AMOUNT", PRODCODE: "$_id.PRODCODE", RTA: "CAMS" } },
        ]

        transc.aggregate(pipeline1, (err, camsdata) => {
            camsdata = camsdata.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime())
            pipeline3 = [  //trans_cams2A
                { $match: { PRODCODE: req.body.scheme, PAN: req.body.pan, FOLIO_NO: req.body.folio } },
                { $group: { _id: { INV_NAME: { "$toUpper": ["$INV_NAME"] }, FOLIO_NO: "$FOLIO_NO", SCHEME: "$SCHEME", PURPRICE: "$PURPRICE", TRXN_TYPE_: "$TRXN_TYPE_", TRXN_NATUR: "$TRXN_NATUR", TRADDATE: "$TRADDATE", TRXNNO: "$TRXNNO", AMC_CODE: "$AMC_CODE", PRODCODE: "$PRODCODE", UNITS: "$UNITS", AMOUNT: "$AMOUNT" } } },

                { $lookup: { from: 'masterdata', localField: '_id.PRODCODE', foreignField: 'Merged', as: 'products' } },

                { $unwind: "$products" },
                { $group: { _id: { INV_NAME: { "$toUpper": ["$_id.INV_NAME"] }, FOLIO_NO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", PURPRICE: "$_id.PURPRICE", TRXN_TYPE_: "$_id.TRXN_TYPE_", TRXN_NATUR: "$_id.TRXN_NATUR", TRADDATE: "$_id.TRADDATE", TRXNNO: "$_id.TRXNNO", ISIN: "$products.ISIN", PRODCODE: "$_id.PRODCODE", UNITS: "$_id.UNITS", AMOUNT: "$_id.AMOUNT" } } },
                { $lookup: { from: 'cams_nav', localField: '_id.ISIN', foreignField: 'ISINDivPayoutISINGrowth', as: 'nav' } },
                { $unwind: "$nav" },

                { $project: { _id: 0, INVNAME: { "$toUpper": ["$_id.INV_NAME"] }, FOLIO: "$_id.FOLIO_NO", SCHEME: "$_id.SCHEME", TD_NAV: "$_id.PURPRICE", TRDESC: "$_id.TRXN_NATUR", NATURE: "$_id.TRXN_TYPE_", newdate: "$_id.TRADDATE", TD_TRDT: { $dateToString: { format: "%m/%d/%Y", date: "$_id.TRADDATE" } }, TRXNNO: "$_id.TRXNNO", ISIN: "$_id.ISIN", cnav: "$nav.NetAssetValue", navdate: "$nav.Date", UNITS: "$_id.UNITS", AMOUNT: "$_id.AMOUNT", PRODCODE: "$_id.PRODCODE", RTA: "CAMS" } },
            ]
            transc2A.aggregate(pipeline3, (err, camsdata2A) => {
                camsdata2A = camsdata2A.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime())
                if (camsdata != 0) {
                    resdata = {
                        status: 200,
                        message: "Successfull",
                        data: camsdata
                    }
                    var datacon = "";

                    if (camsdata2A != 0) {
                        camsdata.shift();
                        datacon = camsdata2A.concat(camsdata)
                    } else {
                        datacon = camsdata
                    }
                    //  console.log("datacon cams=",datacon)
                    for (var i = 0; i < datacon.length; i++) {

                        if (datacon[i]['TRDESC'].match(/Systematic - To/) && datacon[i]['NATURE'] === "Partial Switch Out" && Math.sign(datacon[i]['AMOUNT']) === -1) {
                            datacon[i]['NATURE'] = "SWO Rejection";
                            datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                            datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                        }
                        if (datacon[i]['TRDESC'].match(/Switchout/) && datacon[i]['NATURE'] === "Partial Switch Out" && Math.sign(datacon[i]['AMOUNT']) === -1) {
                            datacon[i]['NATURE'] = "SWO Rejection";
                            datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                            datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                        }
                        if (datacon[i]['TRDESC'].match(/Redemption/) && datacon[i]['NATURE'].match(/Redemption/) && Math.sign(datacon[i]['AMOUNT']) === -1) {
                            datacon[i]['NATURE'] = "SWO Rejection";
                            datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                            datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                        }
                        if (datacon[i]['TRDESC'].match(/Rej/) && (datacon[i]['NATURE'] === "REDR" || datacon[i]['NATURE'] === "SWOFR" || datacon[i]['NATURE'] === "SWOPR" || datacon[i]['NATURE'] === "FULR" || datacon[i]['NATURE'] === "STPOR" || datacon[i]['NATURE'] === "LTOPR" || datacon[i]['NATURE'] === "LTOFR") && Math.sign(datacon[i]['AMOUNT']) === -1) {
                            datacon[i]['NATURE'] = "SWO Rejection";
                            datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                            datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                        }
                        if ((Math.sign(datacon[i]['AMOUNT']) === -1)) {
                            datacon[i]['NATURE'] = "Sys. Reversal";
                        }
                        if (datacon[i]['NATURE'] === "Redemption" || datacon[i]['NATURE'] === "R" || datacon[i]['NATURE'] === "RED" || datacon[i]['NATURE'] === "SO" ||
                            datacon[i]['NATURE'] === "SIPR" || datacon[i]['NATURE'] === "Full Redemption" ||
                            datacon[i]['NATURE'] === "Partial Redemption" || datacon[i]['NATURE'] === "Lateral Shift Out" || datacon[i]['NATURE'] === "TOCOB" ||
                            datacon[i]['NATURE'] === "Switchout" || datacon[i]['NATURE'] === "Transfer-Out" ||
                            datacon[i]['NATURE'] === "Transmission Out" || datacon[i]['NATURE'] === "Switch Over Out" ||
                            datacon[i]['NATURE'] === "LTOP" || datacon[i]['NATURE'] === "LTOF" || datacon[i]['NATURE'] === "FULR" ||
                            datacon[i]['NATURE'] === "Partial Switch Out" || datacon[i]['NATURE'] === "Full Switch Out" ||
                            datacon[i]['NATURE'] === "IPOR" || datacon[i]['NATURE'] === "FUL" ||
                            datacon[i]['NATURE'] === "STPO" || datacon[i]['NATURE'] === "SWOF" ||
                            datacon[i]['NATURE'] === "SWD" || datacon[i]['NATURE'] === "SWOP") {
                            datacon[i]['NATURE'] = "Switch Out";
                        }
                        if (datacon[i]['NATURE'].match(/Systematic Investment.*/) ||
                            datacon[i]['NATURE'] === "SIN" ||
                            // datacon[i]['NATURE'].match(/Systematic Withdrawal.*/) ||
                            datacon[i]['NATURE'].match(/Systematic - Instalment.*/) ||
                            datacon[i]['NATURE'].match(/Systematic - To.*/) ||
                            datacon[i]['NATURE'].match(/Systematic-NSE.*/) ||
                            datacon[i]['NATURE'].match(/Systematic Physical.*/) ||
                            datacon[i]['NATURE'].match(/Systematic.*/) ||
                            datacon[i]['NATURE'].match(/Systematic-Normal.*/) ||
                            datacon[i]['NATURE'].match(/Systematic (ECS).*/)) {
                            datacon[i]['NATURE'] = "SIP";
                        }

                        if (datacon[i]['NATURE'] === "ADDPUR" || datacon[i]['NATURE'] === "Additional Purchase" || datacon[i]['NATURE'] === "NFO FP") {
                            datacon[i]['NATURE'] = "Purchase";
                        }
                        if (datacon[i]['NATURE'] === "Switch In" || datacon[i]['NATURE'] === "LTIA" ||
                            datacon[i]['NATURE'] === "LTIN") {
                            datacon[i]['NATURE'] = "Switch In";
                        }
                    }

                    resdata.data = datacon.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime())
                    resdata.data = datacon.sort((a, b) => (a.SCHEME > b.SCHEME) ? 1 : -1);
                    res.json(resdata);
                    return resdata;
                } else {
                    resdata = {
                        status: 400,
                        message: "Data not found"
                    }
                }
            });
            //}
        });
    } else {
        pipeline2 = [  //trans_karvy    "TD_TRTYPE":{$not: /^SINR.*/
            { $match: { FMCODE: req.body.scheme, PAN1: req.body.pan, TD_ACNO: req.body.folio } },
            { $group: { _id: { INVNAME: { "$toUpper": ["$INVNAME"] }, TD_ACNO: "$TD_ACNO", FUNDDESC: "$FUNDDESC", TD_NAV: "$TD_NAV", TRDESC: "$TRDESC", TD_TRTYPE: "$TD_TRTYPE", TRFLAG: "$TRFLAG", NAVDATE: "$NAVDATE", SCHEMEISIN: "$SCHEMEISIN", UNQNO: "$UNQNO", FMCODE: "$FMCODE", TD_UNITS: "$TD_UNITS", TD_AMT: "$TD_AMT" } } },
            { $lookup: { from: 'masterdata', localField: '_id.FMCODE', foreignField: 'SCH_CODE', as: 'products' } },
            { $unwind: "$products" },
            { $group: { _id: { INVNAME: { "$toUpper": ["$_id.INVNAME"] }, TD_ACNO: "$_id.TD_ACNO", FUNDDESC: "$_id.FUNDDESC", TD_NAV: "$_id.TD_NAV", TRDESC: "$_id.TRDESC", TD_TRTYPE: "$_id.TD_TRTYPE", TRFLAG: "$_id.TRFLAG", NAVDATE: "$_id.NAVDATE", SCHEMEISIN: "$_id.SCHEMEISIN", UNQNO: "$_id.UNQNO", FMCODE: "$_id.FMCODE", ISIN: "$products.ISIN", TD_UNITS: "$_id.TD_UNITS", TD_AMT: "$_id.TD_AMT" } } },
            { $lookup: { from: 'cams_nav', localField: '_id.ISIN', foreignField: 'ISINDivPayoutISINGrowth', as: 'nav' } },
            { $unwind: "$nav" },
            { $project: { _id: 0, INVNAME: { "$toUpper": ["$_id.INVNAME"] }, FOLIO: "$_id.TD_ACNO", SCHEME: "$_id.FUNDDESC", TD_NAV: "$_id.TD_NAV", TRDESC: "$_id.TRDESC", NATURE: "$_id.TD_TRTYPE", TRFLAG: "$_id.TRFLAG", newdate: "$_id.NAVDATE", TD_TRDT: { $dateToString: { format: "%d-%m-%Y", date: "$_id.NAVDATE" } }, ISIN: "$_id.ISIN", UNQNO: "$_id.UNQNO", cnav: "$nav.NetAssetValue", navdate: "$nav.Date", UNITS: "$_id.TD_UNITS", AMOUNT: "$_id.TD_AMT", PRODCODE: "$_id.FMCODE", RTA: "KARVY" } },
        ]
        transk.aggregate(pipeline2, (err, karvydata) => {

            if (karvydata != 0) {
                resdata = {
                    status: 200,
                    message: "Successfull",
                    data: karvydata
                }
            } else {
                resdata = {
                    status: 400,
                    message: "Data not found"
                }
            }
            datacon = karvydata;

            for (var i = 0; i < datacon.length; i++) {
                if (datacon[i]['NATURE'] === "SIN" && datacon[i]['TRDESC'].match(/Systematic/) && datacon[i]['TRFLAG'] === "TO") {
                    datacon[i]['NATURE'] = "Switch Out";
                }
                if (datacon[i]['NATURE'] === "ADD" && datacon[i]['TRDESC'].match(/Purchase/) && datacon[i]['TRFLAG'] === "TO") {
                    datacon[i]['NATURE'] = "Switch Out";
                }
                if (datacon[i]['TRDESC'].match(/Systematic - To/) && datacon[i]['NATURE'] === "Partial Switch Out" && Math.sign(datacon[i]['AMOUNT']) === -1) {
                    datacon[i]['NATURE'] = "SWO Rejection";
                    datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                    datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                }
                if (datacon[i]['TRDESC'].match(/Switchout/) && datacon[i]['NATURE'] === "Partial Switch Out" && Math.sign(datacon[i]['AMOUNT']) === -1) {
                    datacon[i]['NATURE'] = "SWO Rejection";
                    datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                    datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                }
                if (datacon[i]['TRDESC'].match(/Redemption/) && datacon[i]['NATURE'].match(/Redemption/) && Math.sign(datacon[i]['AMOUNT']) === -1) {
                    datacon[i]['NATURE'] = "SWO Rejection";
                    datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                    datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                }
                if (datacon[i]['TRDESC'].match(/Rej/) && (datacon[i]['NATURE'] === "REDR" || datacon[i]['NATURE'] === "SWOFR" || datacon[i]['NATURE'] === "SWOPR" || datacon[i]['NATURE'] === "FULR" || datacon[i]['NATURE'] === "STPOR" || datacon[i]['NATURE'] === "LTOPR" || datacon[i]['NATURE'] === "LTOFR") && Math.sign(datacon[i]['AMOUNT']) === -1) {
                    datacon[i]['NATURE'] = "SWO Rejection";
                    datacon[i]['UNITS'] = Math.abs(datacon[i]['UNITS']);
                    datacon[i]['AMOUNT'] = Math.abs(datacon[i]['AMOUNT']);
                }
                if ((Math.sign(datacon[i]['AMOUNT']) === -1)) {
                    datacon[i]['NATURE'] = "Sys. Reversal";
                }
                if (datacon[i]['NATURE'] === "Redemption" || datacon[i]['NATURE'] === "RED" ||
                    datacon[i]['NATURE'] === "SIPR" || datacon[i]['NATURE'] === "Full Redemption" ||
                    datacon[i]['NATURE'] === "Partial Redemption" || datacon[i]['NATURE'] === "Lateral Shift Out" || datacon[i]['NATURE'] === "TOCOB" ||
                    datacon[i]['NATURE'] === "Switchout" || datacon[i]['NATURE'] === "Transfer-Out" ||
                    datacon[i]['NATURE'] === "Transmission Out" || datacon[i]['NATURE'] === "Switch Over Out" || datacon[i]['NATURE'] === "TRMO" ||
                    datacon[i]['NATURE'] === "LTOP" || datacon[i]['NATURE'] === "LTOF" || datacon[i]['NATURE'] === "FULR" ||
                    datacon[i]['NATURE'] === "Partial Switch Out" || datacon[i]['NATURE'] === "Full Switch Out" || datacon[i]['NATURE'] === "SO" ||
                    datacon[i]['NATURE'] === "IPOR" || datacon[i]['NATURE'] === "FUL" ||
                    datacon[i]['NATURE'] === "STPO" || datacon[i]['NATURE'] === "SWOF" ||
                    datacon[i]['NATURE'] === "SWD" || datacon[i]['NATURE'] === "SWOP") {
                    datacon[i]['NATURE'] = "Switch Out";
                }
                if (datacon[i]['NATURE'].match(/Systematic Investment.*/) ||
                    datacon[i]['NATURE'] === "SIN" ||
                    //datacon[i]['NATURE'].match(/Systematic Withdrawal.*/) ||
                    datacon[i]['NATURE'].match(/Systematic - Instalment.*/) ||
                    datacon[i]['NATURE'].match(/Systematic - To.*/) ||
                    datacon[i]['NATURE'].match(/Systematic-NSE.*/) ||
                    datacon[i]['NATURE'].match(/Systematic Physical.*/) ||
                    datacon[i]['NATURE'].match(/Systematic.*/) ||
                    datacon[i]['NATURE'].match(/Systematic-Normal.*/) ||
                    datacon[i]['NATURE'].match(/Systematic (ECS).*/)) {
                    datacon[i]['NATURE'] = "SIP";
                }
                if (datacon[i]['NATURE'] === "ADDPUR" || datacon[i]['NATURE'] === "Additional Purchase" || datacon[i]['NATURE'] === "NFO FP") {
                    datacon[i]['NATURE'] = "Purchase";
                }

                if (datacon[i]['NATURE'] === "Switch In" || datacon[i]['NATURE'] === "LTIA" ||
                    datacon[i]['NATURE'] === "LTIN") {
                    datacon[i]['NATURE'] = "Switch In";
                }

            }
            //   console.log("datacon karvy=",datacon)
            resdata.data = datacon.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime())
            resdata.data = datacon.sort((a, b) => (a.SCHEME > b.SCHEME) ? 1 : -1);
            res.json(resdata);
            return resdata;
        });
    }

})

app.post("/api/getamclistnew", function (req, res) {
    try {
        if (req.body.pan === "" && req.body.guard_pan === "") {
            resdata = {
                status: 400,
                message: 'Please enter user pan or guardian pan!',
            }
            res.json(resdata)
            return resdata;
        } else if (req.body.guard_pan != "") {
            helper_Minorpan(req.body.guard_pan, result => {
                res.json(result)
                return result;
            })
        } else {
            var pan = req.body.pan;
            helper_Individualpan(pan, result => {
                res.json(result)
                return result;
            })
            // const pipeline1 = [   //trans_cams
            //     { $match: { PAN: pan } },
            //     { $group: { _id: { FOLIO_NO: "$FOLIO_NO", AMC_CODE: "$AMC_CODE" } } },
            //     {
            //         $project: {
            //             _id: 0,
            //             folio: "$_id.FOLIO_NO",
            //             amc_code: "$_id.AMC_CODE",
            //         }
            //     },
            //     { $sort: { amc_code: 1 } }
            // ];
            // const pipeline2 = [  //trans_karvy
            //     { $match: { PAN1: pan } },
            //     { $group: { _id: { TD_ACNO: "$TD_ACNO", TD_FUND: "$TD_FUND" } } },
            //     {
            //         $project: {
            //             _id: 0,
            //             folio: "$_id.TD_ACNO",
            //             amc_code: "$_id.TD_FUND",
            //         }
            //     },
            //     { $sort: { amc_code: 1 } }
            // ];
            // transc.aggregate(pipeline1, (err, newdata1) => {
            //     transk.aggregate(pipeline2, (err, newdata2) => {
            //         if (newdata2.length != 0 || newdata1.length != 0) {
            //             resdata = {
            //                 status: 200,
            //                 message: "Successfull",
            //                 data: newdata2
            //             }
            //             var datacon = newdata1.concat(newdata2);
            //             datacon = datacon
            //                 .map(JSON.stringify)
            //                 .reverse() // convert to JSON string the array content, then reverse it (to check from end to begining)
            //                 .filter(function (item, index, arr) {
            //                     return arr.indexOf(item, index + 1) === -1;
            //                 }) // check if there is any occurence of the item in whole array
            //                 .reverse()
            //                 .map(JSON.parse);
            //             for (var i = 0; i < datacon.length; i++) {
            //                 if (datacon[i]['amc_code'] != "" && datacon[i]['folio'] != "" && datacon[i]['scheme'] != "") {
            //                     resdata.data = datacon[i];
            //                 }
            //             }
            //             resdata.data = datacon.sort((a, b) => (a.amc_code > b.amc_code) ? 1 : -1);
            //             res.json(resdata);
            //             return resdata;
            //         } else {
            //             resdata = {
            //                 status: 400,
            //                 message: "Data not found"
            //             }
            //             res.json(resdata)
            //             return resdata;
            //         }


            //     });
            //   });
        }
    } catch (err) {
        console.log(err)
    }
});

app.post("/api/getamclist", function (req, res) {
    try {
        let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        if (req.body.pan === "") {
            if (req.body.guard_pan != "") {
                const pipeline1 = [   //folio_cams
                    { $match: { GUARD_PAN: req.body.guard_pan } },
                    { $project: { _id: 0, folio: "$FOLIOCHK", amc_code: "$AMC_CODE", } },
                    { $sort: { amc_code: 1 } }
                ]
                const pipeline2 = [   //folio_karvy
                    { $match: { GUARDPANNO: req.body.guard_pan } },
                    { $project: { _id: 0, folio: "$ACNO", amc_code: "$FUND", } },
                    { $sort: { amc_code: 1 } }
                ]
                folioc.aggregate(pipeline1, (err, foliocams) => {
                    foliok.aggregate(pipeline2, (err, foliokarvy) => {
                        if (foliocams != 0 || foliokarvy != 0) {
                            resdata = {
                                status: 200,
                                message: "Successfull",
                                data: foliokarvy
                            }
                            var datacon = foliocams.concat(foliokarvy);
                            datacon = datacon.filter(
                                (temp => a =>
                                    (k => !temp[k] && (temp[k] = true))(a.folio + '|' + a.amc_code)
                                )(Object.create(null))
                            );

                            resdata.data = datacon.sort((a, b) => (a.amc_code > b.amc_code) ? 1 : -1);
                            res.json(resdata);
                            return resdata;
                        } else {
                            resdata = {
                                status: 400,
                                message: "Data not found"
                            }
                            res.json(resdata);
                            return resdata;
                        }
                    })
                })
            } else {
                resdata = {
                    status: 400,
                    message: "Data not found"
                }
                res.json(resdata);
                return resdata;
            }
        } else if (!regex.test(req.body.pan)) {
            resdata = {
                status: 400,
                message: 'Please enter valid pan',
            }
            res.json(resdata);
            return resdata;
        } else {
            var pan = req.body.pan;
            const pipeline1 = [   //trans_cams
                { $match: { PAN: pan } },
                { $group: { _id: { FOLIO_NO: "$FOLIO_NO", AMC_CODE: "$AMC_CODE" } } },
                {
                    $project: {
                        _id: 0,
                        folio: "$_id.FOLIO_NO",
                        amc_code: "$_id.AMC_CODE",
                    }
                },
                { $sort: { amc_code: 1 } }
            ];
            const pipeline2 = [  //trans_karvy
                { $match: { PAN1: pan } },
                { $group: { _id: { TD_ACNO: "$TD_ACNO", TD_FUND: "$TD_FUND" } } },
                {
                    $project: {
                        _id: 0,
                        folio: "$_id.TD_ACNO",
                        amc_code: "$_id.TD_FUND",
                    }
                },
                { $sort: { amc_code: 1 } }
            ];
            transc.aggregate(pipeline1, (err, newdata1) => {
                transk.aggregate(pipeline2, (err, newdata2) => {
                    if (newdata2.length != 0 || newdata1.length != 0) {
                        resdata = {
                            status: 200,
                            message: "Successfull",
                            data: newdata2
                        }
                        var datacon = newdata1.concat(newdata2);
                        datacon = datacon.filter(
                            (temp => a =>
                                (k => !temp[k] && (temp[k] = true))(a.folio + '|' + a.amc_code)
                            )(Object.create(null))
                        );
                        for (var i = 0; i < datacon.length; i++) {
                            if (datacon[i]['amc_code'] != "" && datacon[i]['folio'] != "") {
                                resdata.data = datacon[i];
                            }
                        }
                        resdata.data = datacon.sort((a, b) => (a.amc_code > b.amc_code) ? 1 : -1);
                        res.json(resdata);
                        return resdata;
                    } else {
                        resdata = {
                            status: 400,
                            message: "Data not found"
                        }
                        res.json(resdata)
                        return resdata;
                    }


                });
            });
        }
    } catch (err) {
        console.log(err)
    }
});

app.post("/api/getAmcFolioViaProfile", function (req, res) {
    try {
        if (req.body.investor_pan != undefined && req.body.guard_pan != undefined && req.body.jh1_pan != undefined && req.body.jh2_pan != undefined) {
            var regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
            if (req.body.investor_pan === "") {
                if (req.body.guard_pan != "") {
                    pipeline1 = [   //folio_cams
                        { $match: { GUARD_PAN: req.body.guard_pan } },
                        { $project: { _id: 0, folio: "$FOLIOCHK", amc_code: "$AMC_CODE" } },
                        { $sort: { amc_code: 1 } }
                    ]
                    pipeline2 = [   //folio_karvy
                        { $match: { GUARDPANNO: req.body.guard_pan } },
                        { $project: { _id: 0, folio: "$ACNO", amc_code: "$FUND" } },
                        { $sort: { amc_code: 1 } }
                    ]
                    folioc.aggregate(pipeline1, (err, foliocams) => {
                        foliok.aggregate(pipeline2, (err, foliokarvy) => {
                            if (foliocams != 0 || foliokarvy != 0) {
                                resdata = {
                                    status: 200,
                                    message: "Successfull",
                                    data: foliokarvy
                                }
                                var datacon = foliocams.concat(foliokarvy);
                                datacon = datacon.filter(
                                    (temp => a =>
                                        (k => !temp[k] && (temp[k] = true))(a.folio + '|' + a.amc_code)
                                    )(Object.create(null))
                                );

                                resdata.data = datacon.sort((a, b) => (a.amc_code > b.amc_code) ? 1 : -1);
                                res.json(resdata);
                                return resdata;
                            } else {
                                resdata = {
                                    status: 400,
                                    message: "Data not found"
                                }
                                res.json(resdata);
                                return resdata;
                            }
                        })
                    })
                } else {
                    resdata = {
                        status: 400,
                        message: "Data not found"
                    }
                    res.json(resdata);
                    return resdata;
                }
            } else if (!regex.test(req.body.investor_pan)) {
                resdata = {
                    status: 400,
                    message: 'Please enter valid pan',
                }
                res.json(resdata);
                return resdata;
            } else {
                if (req.body.jh2_pan != "") {
                    pipeline1 = [   //folio_cams
                        { $match: { $and: [{ PAN_NO: req.body.investor_pan }, { JOINT1_PAN: req.body.jh1_pan }, { JOINT2_PAN: req.body.jh2_pan }] } },
                        { $project: { _id: 0, folio: "$FOLIOCHK", amc_code: "$AMC_CODE", } },
                    ]
                    pipeline2 = [  //folio_karvy
                        { $match: { $and: [{ PANGNO: req.body.investor_pan }, { PAN2: req.body.jh1_pan }, { PAN3: req.body.jh2_pan }] } },
                        { $project: { _id: 0, folio: "$ACNO", amc_code: "$FUND" } },
                    ]
                    folioc.aggregate(pipeline1, (err, newdata1) => {
                        foliok.aggregate(pipeline2, (err, newdata2) => {
                            if (newdata2.length != 0 || newdata1.length != 0) {
                                resdata = {
                                    status: 200,
                                    message: "Successfull",
                                    data: newdata2
                                }
                                var datacon = newdata1.concat(newdata2);
                                datacon = datacon.filter(
                                    (temp => a =>
                                        (k => !temp[k] && (temp[k] = true))(a.folio + '|' + a.amc_code)
                                    )(Object.create(null))
                                );
                                for (var i = 0; i < datacon.length; i++) {
                                    if (datacon[i]['amc_code'] != "" && datacon[i]['folio'] != "") {
                                        resdata.data = datacon[i];
                                    }
                                }
                                resdata.data = datacon.sort((a, b) => (a.amc_code > b.amc_code) ? 1 : -1);
                                res.json(resdata);
                                return resdata;
                            } else {
                                resdata = {
                                    status: 400,
                                    message: "Data not found"
                                }
                                res.json(resdata)
                                return resdata;
                            }
                        });
                    });

                } else if (req.body.jh1_pan != "") {
                    pipeline1 = [   //folio_cams
                        { $match: { $and: [{ PAN_NO: req.body.investor_pan }, { JOINT1_PAN: req.body.jh1_pan }, { JOINT2_PAN: "" }] } },
                        { $project: { _id: 0, folio: "$FOLIOCHK", amc_code: "$AMC_CODE", } },
                    ]
                    pipeline2 = [  //folio_karvy
                        { $match: { $and: [{ PANGNO: req.body.investor_pan }, { PAN2: req.body.jh1_pan }, { PAN3: "" }] } },
                        { $project: { _id: 0, folio: "$ACNO", amc_code: "$FUND" } },
                    ]
                    folioc.aggregate(pipeline1, (err, newdata1) => {
                        foliok.aggregate(pipeline2, (err, newdata2) => {
                            if (newdata2.length != 0 || newdata1.length != 0) {
                                resdata = {
                                    status: 200,
                                    message: "Successfull",
                                    data: newdata2
                                }
                                var datacon = newdata1.concat(newdata2);
                                datacon = datacon.filter(
                                    (temp => a =>
                                        (k => !temp[k] && (temp[k] = true))(a.folio + '|' + a.amc_code)
                                    )(Object.create(null))
                                );
                                for (var i = 0; i < datacon.length; i++) {
                                    if (datacon[i]['amc_code'] != "" && datacon[i]['folio'] != "") {
                                        resdata.data = datacon[i];
                                    }
                                }
                                resdata.data = datacon.sort((a, b) => (a.amc_code > b.amc_code) ? 1 : -1);
                                res.json(resdata);
                                return resdata;
                            } else {
                                resdata = {
                                    status: 400,
                                    message: "Data not found"
                                }
                                res.json(resdata)
                                return resdata;
                            }
                        });
                    });
                } else {
                    pipeline1 = [   //folio_cams
                        { $match: { $and: [{ PAN_NO: req.body.investor_pan }, { JOINT1_PAN: "" }, { JOINT2_PAN: "" }] } },
                        { $project: { _id: 0, folio: "$FOLIOCHK", amc_code: "$AMC_CODE", } },
                    ]
                    pipeline2 = [  //folio_karvy
                        { $match: { $and: [{ PANGNO: req.body.investor_pan }, { PAN2: "" }, { PAN3: "" }] } },
                        { $project: { _id: 0, folio: "$ACNO", amc_code: "$FUND" } },
                    ]
                    folioc.aggregate(pipeline1, (err, newdata1) => {
                        foliok.aggregate(pipeline2, (err, newdata2) => {
                            if (newdata2.length != 0 || newdata1.length != 0) {
                                resdata = {
                                    status: 200,
                                    message: "Successfull",
                                    data: newdata2
                                }
                                var datacon = newdata1.concat(newdata2);
                                datacon = datacon.filter(
                                    (temp => a =>
                                        (k => !temp[k] && (temp[k] = true))(a.folio + '|' + a.amc_code)
                                    )(Object.create(null))
                                );
                                for (var i = 0; i < datacon.length; i++) {
                                    if (datacon[i]['amc_code'] != "" && datacon[i]['folio'] != "") {
                                        resdata.data = datacon[i];
                                    }
                                }
                                resdata.data = datacon.sort((a, b) => (a.amc_code > b.amc_code) ? 1 : -1);
                                res.json(resdata);
                                return resdata;
                            } else {
                                resdata = {
                                    status: 400,
                                    message: "Data not found"
                                }
                                res.json(resdata)
                                return resdata;
                            }
                        });
                    });
                }
            }
        } else {
            resdata = {
                status: 400,
                message: "Key not found"
            }
            res.json(resdata)
            return resdata;
        }
    } catch (err) {
        console.log(err)
    }
});

app.post("/api/getAmcListHoldingNatureWise", function (req, res) {
    try {
        if (req.body.pan != undefined) {
            let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
            if (req.body.pan === "") {
                resdata = {
                    status: 400,
                    message: 'Please enter pan !',
                }
                res.json(resdata);
                return resdata;
            } else if (!regex.test(req.body.pan)) {
                resdata = {
                    status: 400,
                    message: 'Please enter valid pan !',
                }
                res.json(resdata);
                return resdata;
            } else if (req.body.holder_nature === "") {
                resdata = {
                    status: 400,
                    message: 'Please enter holding nature !',
                }
                res.json(resdata);
                return resdata;
            } else {
                if (req.body.holder_nature === "SI") {
                    pipeline1 = [  //folio_cams
                        { $match: { PAN_NO: req.body.pan, HOLDING_NA: "SI" } },
                        { $project: { _id: 0, folio: "$FOLIOCHK", amc_code: "$AMC_CODE", scheme: "$SCH_NAME" } },
                        { $sort: { amc_code: 1 } }
                    ]
                    pipeline2 = [ //folio_karvy
                        { $match: { PANGNO: req.body.pan, MODEOFHOLD: "SINGLE" } },
                        { $project: { _id: 0, folio: "$ACNO", amc_code: "$FUND", scheme: "$FUNDDESC" } },
                        { $sort: { amc_code: 1 } }
                    ]
                    folioc.aggregate(pipeline1, (err, newdata1) => {
                        foliok.aggregate(pipeline2, (err, newdata2) => {
                            if (newdata2 != 0 || newdata1 != 0) {
                                resdata = {
                                    status: 200,
                                    message: "Successfull",
                                    data: newdata2
                                }
                                var datacon = newdata2.concat(newdata1);
                                datacon = datacon.filter(
                                    (temp => a =>
                                        (k => !temp[k] && (temp[k] = true))(a.folio + '|' + a.amc_code)
                                    )(Object.create(null))
                                );
                                for (var i = 0; i < datacon.length; i++) {
                                    if (datacon[i]['amc_code'] != "" && datacon[i]['folio'] != "" && datacon[i]['scheme'] != "") {
                                        resdata.data = datacon[i];
                                    }
                                }
                                resdata.data = datacon.sort((a, b) => (a.amc_code > b.amc_code) ? 1 : -1);
                                res.json(resdata);
                                return resdata;
                            } else {
                                resdata = {
                                    status: 400,
                                    message: "Data not found!"
                                }
                                res.json(resdata);
                                return resdata;
                            }
                        });
                    });
                } else {
                    if (req.body.holder_pan1 === "") {
                        resdata = {
                            status: 400,
                            message: 'Please enter joint holder pan!',
                        }
                        res.json(resdata);
                        return resdata;
                    } else if (!regex.test(req.body.holder_pan1)) {
                        resdata = {
                            status: 400,
                            message: 'Please enter valid joint holder pan!',
                        }
                        res.json(resdata);
                        return resdata;

                    } else {
                        pipeline1 = [  //trans_cams
                            { $match: { PAN: req.body.pan } },
                            { $project: { _id: 0, folio: "$FOLIO_NO", amc_code: "$AMC_CODE", scheme: "$SCHEME" } },
                            { $sort: { amc_code: 1 } }
                        ]
                        pipeline2 = [ //trans_karvy
                            { $match: { $and: [{ PAN1: req.body.pan }, { PAN2: req.body.holder_pan1 }] } },
                            { $project: { _id: 0, folio: "$TD_ACNO", amc_code: "$TD_FUND", scheme: "$FUNDDESC" } },
                            { $sort: { amc_code: 1 } }
                        ]
                        transc.aggregate(pipeline1, (err, newdata1) => {
                            transk.aggregate(pipeline2, (err, newdata2) => {
                                if (newdata2 != 0 || newdata1 != 0) {
                                    resdata = {
                                        status: 200,
                                        message: "Successfull",
                                        data: newdata2
                                    }
                                    var datacon = newdata2.concat(newdata1);
                                    datacon = datacon.filter(
                                        (temp => a =>
                                            (k => !temp[k] && (temp[k] = true))(a.folio + '|' + a.amc_code)
                                        )(Object.create(null))
                                    );
                                    for (var i = 0; i < datacon.length; i++) {
                                        if (datacon[i]['amc_code'] != "" && datacon[i]['folio'] != "" && datacon[i]['scheme'] != "") {
                                            resdata.data = datacon[i];
                                        }
                                    }
                                    resdata.data = datacon.sort((a, b) => (a.amc_code > b.amc_code) ? 1 : -1);
                                    res.json(resdata);
                                    return resdata;
                                } else {
                                    resdata = {
                                        status: 400,
                                        message: "Data not found!"
                                    }
                                    res.json(resdata);
                                    return resdata;
                                }
                            });
                        });
                    }
                }

            }
        } else {
            resdata = {
                status: 400,
                message: "Key not found!"
            }
            res.json(resdata);
            return resdata;
        }
    } catch (err) {
        console.log(e)
    }
});

app.post("/api/getschemelistold", function (req, res) {
    try {
        if (req.body.folio != undefined) {
            if (req.body.folio === "") {
                resdata = {
                    status: 400,
                    message: 'Please enter folio !',
                }
                res.json(resdata);
                return resdata;
            } else {
                var folio = req.body.folio;
                var products = [];
                var amc = req.body.AMC_CODE;
                var accetclass = req.body.ASSET_CLASS.toLowerCase();
                var divsw = req.body.DIV_GW.toLowerCase();
                const pipeline = [
                    { $match: { FOLIO_NO: folio } },
                    { $group: { _id: { AMC_CODE: "$AMC_CODE", PRODCODE: "$PRODCODE", code: { $substr: ["$PRODCODE", { $strLenCP: "$AMC_CODE" }, -1] } } } },
                    {
                        $lookup:
                        {
                            from: "products",
                            let: { ccc: "$_id.code", amc: "$_id.AMC_CODE" },
                            pipeline: [
                                {
                                    $match:
                                    {
                                        $expr:
                                        {
                                            $and:
                                                [
                                                    { $eq: ["$PRODUCT_CODE", "$$ccc"] },
                                                    { $eq: ["$AMC_CODE", "$$amc"] }
                                                ]
                                        }
                                    }
                                },
                                { $project: { _id: 0 } }
                            ],
                            as: "products"
                        }
                    },
                    { $unwind: "$products" },
                    { $project: { _id: 0, products: "$products" } },
                ]
                const pipeline1 = [  //trans_karvy
                    { $match: { TD_ACNO: folio, SCHEMEISIN: { $ne: null } } },
                    { $group: { _id: { SCHEMEISIN: "$SCHEMEISIN" } } },
                    { $lookup: { from: 'products', localField: '_id.SCHEMEISIN', foreignField: 'ISIN', as: 'master' } },
                    { $unwind: "$master" },
                    { $project: { _id: 0, products: "$master" } },
                ]
                transc.aggregate(pipeline, (err, newdata2) => {
                    transk.aggregate(pipeline1, (err, newdata1) => {
                        if (newdata2.length != 0 || newdata1.length != 0) {
                            resdata = {
                                status: 200,
                                message: 'Successfull',
                                data: newdata2
                            }
                        } else {
                            resdata = {
                                status: 400,
                                message: 'Data not found',
                            }
                        }
                        var datacon = newdata2.concat(newdata1)
                        datacon = datacon.sort((a, b) => (a.products.PRODUCT_LONG_NAME > b.products.PRODUCT_LONG_NAME) ? 1 : -1);
                        if (accetclass === "" && divsw === "") {
                            products.push(datacon);
                            resdata.data = products;
                            res.json(resdata);
                            return resdata;
                        } else if (accetclass != "" && divsw === "") {
                            for (var i = 0; i < datacon.length; i++) {
                                datacon[i].products.ASSET_CLASS = (datacon[i].products.ASSET_CLASS).toLowerCase();
                                if (datacon[i].products.ASSET_CLASS === 'debt' || datacon[i].products.ASSET_CLASS === 'income' || datacon[i].products.ASSET_CLASS === 'cash') {
                                    datacon[i].products.ASSET_CLASS = 'debt';
                                } else {
                                    datacon[i].products.ASSET_CLASS = 'equity';
                                }
                                if (datacon[i].products.ASSET_CLASS === accetclass) {
                                    products.push(datacon[i]);
                                }
                                if (i + 1 === datacon.length) {
                                    resdata.data = products;
                                    res.json(resdata)
                                    return resdata
                                }
                            }
                        } else if (accetclass === "" && divsw != "") {
                            for (var i = 0; i < datacon.length; i++) {
                                datacon[i].products.PRODUCT_LONG_NAME = (datacon[i].products.PRODUCT_LONG_NAME).toLowerCase();
                                if (datacon[i].products.PRODUCT_LONG_NAME.search(divsw) > 0) {
                                    products.push(datacon[i]);
                                }
                                if (i + 1 === datacon.length) {
                                    resdata.data = products;
                                    res.json(resdata)
                                    return resdata
                                }
                            }
                        } else {
                            for (var i = 0; i < datacon.length; i++) {
                                console.log("line 8263=", datacon[i].products.PRODUCT_LONG_NAME.toLowerCase())
                                datacon[i].products.ASSET_CLASS = (datacon[i].products.ASSET_CLASS).toLowerCase();
                                datacon[i].products.PRODUCT_LONG_NAME = (datacon[i].products.PRODUCT_LONG_NAME).toLowerCase();

                                if (datacon[i].products.ASSET_CLASS === 'debt' || datacon[i].products.ASSET_CLASS === 'income' || datacon[i].products.ASSET_CLASS === 'cash') {
                                    datacon[i].products.ASSET_CLASS = 'debt';
                                } else {
                                    datacon[i].products.ASSET_CLASS = 'equity';
                                }
                                if (datacon[i].products.PRODUCT_LONG_NAME.search(divsw) > 0 && datacon[i].products.ASSET_CLASS === accetclass) {
                                    products.push(datacon[i]);
                                }
                                console.log("line 8260=", i, datacon.length)
                                if (i + 1 === datacon.length) {
                                    resdata.data = products;
                                    res.json(resdata)
                                    return resdata
                                }
                            }
                        }
                    });
                });
            }
        } else {
            resdata = {
                status: 400,
                message: 'Key not found',
            }
        }
    } catch (err) {
        console.log(err)
    }
})

app.post("/api/getschemelistusingnse", function (req, res) {
    try {

        var products = [];
        var folio = req.body.folio;
        transc.find({ FOLIO_NO: folio }, { _id: 0, PCODE: "$PRODCODE", AMC: "$AMC_CODE", ISIN: "" }, function (err, transcams) {
            transk.find({ TD_ACNO: folio }, { _id: 0, PCODE: "$FMCODE", AMC: "$TD_FUND", ISIN: "$SCHEMEISIN" }, function (err, transkarvy) {

                var datacon = transcams.concat(transkarvy);
                // console.log("datacon ",transkarvy._doc);

                resdata = {
                    status: 200,
                    message: "Successfull",
                    data: datacon
                }
                for (var i = 0; i < datacon.length; i++) {
                    datacon[i] = datacon[i]._doc;
                }
                datacon = datacon.filter(
                    (temp => a =>
                        (k => !temp[k] && (temp[k] = true))(a.PCODE + '|' + a.AMC)
                    )(Object.create(null))
                );
                // console.log(datacon)

                var dataisin = ""; var datapcode = ""; var dataamc = "";
                //  console.log(ash_xml_agamji)
                for (var j = 0; j < datacon.length; j++) {
                    dataamc = datacon[j].AMC;
                    dataisin = datacon[j].ISIN;
                    console.log("dataisin=", dataisin)
                    datapcode = datacon[j].PCODE;
                    var newdatapcode = datapcode.replace(dataamc, '');
                    console.log("newdatapcode=", newdatapcode);
                    Axios.get('https://nsenmf.com/NMFIIService/NMFService/product?BrokerCode=ARN-21399&Appln_Id=MFS21399&Password=CO3062WOJ1RPXM19&amccode=' + datacon[j].AMC).then(function (result) {
                        let result1 = convert.xml2js(result.data, { compact: true, spaces: 4 });

                        let status = result1.DataSet['diffgr:diffgram'].NewDataSet.service_status.service_return_code._text;

                        let fatcaresult2 = result1.DataSet['diffgr:diffgram'].NewDataSet.product_master;
                        for (var i = 0; i < fatcaresult2.length; i++) {
                            if (dataisin === "" || dataisin === undefined) {
                                if (fatcaresult2[i].PRODUCT_CODE._text === newdatapcode) {
                                    products.push({
                                        AMC_CODE: fatcaresult2[i].AMC_CODE._text, PRODUCT_CODE: fatcaresult2[i].PRODUCT_CODE._text,
                                        PRODUCT_LONG_NAME: fatcaresult2[i].PRODUCT_LONG_NAME._text,
                                        SYSTEMATIC_FREQUENCIES: fatcaresult2[i].SYSTEMATIC_FREQUENCIES._text,
                                        SIP_DATES: fatcaresult2[i].SIP_DATES._text,
                                        STP_DATES: fatcaresult2[i].STP_DATES._text,
                                        SWP_DATES: fatcaresult2[i].SWP_DATES._text,
                                        PURCHASE_ALLOWED: fatcaresult2[i].PURCHASE_ALLOWED._text,
                                        SWITCH_ALLOWED: fatcaresult2[i].SWITCH_ALLOWED._text,
                                        REDEMPTION_ALLOWED: fatcaresult2[i].REDEMPTION_ALLOWED._text,
                                        SIP_ALLOWED: fatcaresult2[i].SIP_ALLOWED._text,
                                        STP_ALLOWED: fatcaresult2[i].STP_ALLOWED._text,
                                        SWP_ALLOWED: fatcaresult2[i].SWP_ALLOWED._text,
                                        REINVEST_TAG: fatcaresult2[i].REINVEST_TAG._text,
                                        ISIN: fatcaresult2[i].ISIN._text,
                                        ASSET_CLASS: fatcaresult2[i].ASSET_CLASS._text,
                                        PLAN_TYPE: fatcaresult2[i].PLAN_TYPE._text
                                    })
                                }
                            } else {
                                if (fatcaresult2[i].ISIN._text === dataisin) {
                                    products.push({
                                        AMC_CODE: fatcaresult2[i].AMC_CODE._text, PRODUCT_CODE: fatcaresult2[i].PRODUCT_CODE._text, PRODUCT_LONG_NAME: fatcaresult2[i].PRODUCT_LONG_NAME._text, SYSTEMATIC_FREQUENCIES: fatcaresult2[i].SYSTEMATIC_FREQUENCIES._text,
                                        SIP_DATES: fatcaresult2[i].SIP_DATES._text,
                                        STP_DATES: fatcaresult2[i].STP_DATES._text,
                                        SWP_DATES: fatcaresult2[i].SWP_DATES._text,
                                        PURCHASE_ALLOWED: fatcaresult2[i].PURCHASE_ALLOWED._text, SWITCH_ALLOWED: fatcaresult2[i].SWITCH_ALLOWED._text,
                                        REDEMPTION_ALLOWED: fatcaresult2[i].REDEMPTION_ALLOWED._text,
                                        SIP_ALLOWED: fatcaresult2[i].SIP_ALLOWED._text,
                                        STP_ALLOWED: fatcaresult2[i].STP_ALLOWED._text,
                                        SWP_ALLOWED: fatcaresult2[i].SWP_ALLOWED._text,
                                        REINVEST_TAG: fatcaresult2[i].REINVEST_TAG._text,
                                        ISIN: fatcaresult2[i].ISIN._text,
                                        ASSET_CLASS: fatcaresult2[i].ASSET_CLASS._text,
                                        PLAN_TYPE: fatcaresult2[i].PLAN_TYPE._text
                                    })
                                }
                            }
                        }
                        // var products = products.push(newProjuct)
                        console.log(j, i, datacon.length, products)
                        resdata.data = [{ products }];
                        res.json(resdata);
                    })
                }
            })
        })
    } catch (err) {
        console.log(err)
    }
})

app.post("/api/Removedata", function (req, res) {
    transk.remove({ _id: req.body.id }, function (err) {
        transc.remove({ _id: req.body.id }, function (err) {
            if (err) {
                res.send(err);
            }
            else {
                resdata = {
                    status: 200,
                    message: 'Deleted',
                }
                res.send(resdata);
                return resdata;
            }
        });
    });
})
///upload data section start
app.post("/api/savefoliocams", function (req, res) {
    try {
        var totaluploaded = [];
        var model = mongoose.model('folio_cams', foliocams, 'folio_cams');
        var j = req.body.length;
        for (i = 0; i < req.body.length; i++) {
            folioc.updateMany(
                { FOLIOCHK: req.body[i].FOLIOCHK, SCH_NAME: req.body[i].SCH_NAME, AC_NO: req.body[i].AC_NO, PRODUCT: req.body[i].PRODUCT, FOLIO_DATE: moment(new Date(req.body[i].FOLIO_DATE)).format("YYYY-MM-DD") },
                {
                    $set:
                    {
                        FOLIOCHK: req.body[i].FOLIOCHK,
                        INV_NAME: req.body[i].INV_NAME,
                        ADDRESS1: req.body[i].ADDRESS1,
                        ADDRESS2: req.body[i].ADDRESS2,
                        ADDRESS3: req.body[i].ADDRESS3,
                        CITY: req.body[i].CITY,
                        PINCODE: req.body[i].PINCODE,
                        PRODUCT: req.body[i].PRODUCT,
                        SCH_NAME: req.body[i].SCH_NAME,
                        REP_DATE: moment(new Date(req.body[i].REP_DATE)).format("YYYY-MM-DD"),
                        CLOS_BAL: Number(req.body[i].CLOS_BAL),
                        RUPEE_BAL: Number(req.body[i].RUPEE_BAL),
                        JNT_NAME1: req.body[i].JNT_NAME1,
                        JNT_NAME2: req.body[i].JNT_NAME2,
                        PHONE_OFF: req.body[i].PHONE_OFF,
                        PHONE_RES: req.body[i].PHONE_RES,
                        EMAIL: req.body[i].EMAIL,
                        HOLDING_NA: req.body[i].HOLDING_NA,
                        UIN_NO: req.body[i].UIN_NO,
                        PAN_NO: req.body[i].PAN_NO,
                        JOINT1_PAN: req.body[i].JOINT1_PAN,
                        JOINT2_PAN: req.body[i].JOINT2_PAN,
                        GUARD_PAN: req.body[i].GUARD_PAN,
                        TAX_STATUS: req.body[i].TAX_STATUS,
                        BROKER_COD: req.body[i].BROKER_COD,
                        SUBBROKER: req.body[i].SUBBROKER,
                        REINV_FLAG: req.body[i].REINV_FLAG,
                        BANK_NAME: req.body[i].BANK_NAME,
                        BRANCH: req.body[i].BRANCH,
                        AC_TYPE: req.body[i].AC_TYPE,
                        AC_NO: req.body[i].AC_NO,
                        B_ADDRESS1: req.body[i].B_ADDRESS1,
                        B_ADDRESS2: req.body[i].B_ADDRESS2,
                        B_ADDRESS3: req.body[i].B_ADDRESS3,
                        B_CITY: req.body[i].B_CITY,
                        B_PINCODE: req.body[i].B_PINCODE,
                        INV_DOB: req.body[i].INV_DOB,
                        MOBILE_NO: req.body[i].MOBILE_NO,
                        OCCUPATION: req.body[i].OCCUPATION,
                        INV_IIN: req.body[i].INV_IIN,
                        NOM_NAME: req.body[i].NOM_NAME,
                        RELATION: req.body[i].RELATION,
                        NOM_ADDR1: req.body[i].NOM_ADDR1,
                        NOM_ADDR2: req.body[i].NOM_ADDR2,
                        NOM_ADDR3: req.body[i].NOM_ADDR3,
                        NOM_CITY: req.body[i].NOM_CITY,
                        NOM_STATE: req.body[i].NOM_STATE,
                        NOM_PINCOD: req.body[i].NOM_PINCOD,
                        NOM_PH_OFF: req.body[i].NOM_PH_OFF,
                        NOM_PH_RES: req.body[i].NOM_PH_RES,
                        NOM_EMAIL: req.body[i].NOM_EMAIL,
                        NOM_PERCEN: req.body[i].NOM_PERCEN,
                        NOM2_NAME: req.body[i].NOM2_NAME,
                        NOM2_RELAT: req.body[i].NOM2_RELAT,
                        NOM2_ADDR1: req.body[i].NOM2_ADDR1,
                        NOM2_ADDR2: req.body[i].NOM2_ADDR2,
                        NOM2_ADDR3: req.body[i].NOM2_ADDR3,
                        NOM2_CITY: req.body[i].NOM2_CITY,
                        NOM2_STATE: req.body[i].NOM2_STATE,
                        NOM2_PINCO: req.body[i].NOM2_PINCO,
                        NOM2_PH_OF: req.body[i].NOM2_PH_OF,
                        NOM2_PH_RE: req.body[i].NOM2_PH_RE,
                        NOM2_EMAIL: req.body[i].NOM2_EMAIL,
                        NOM2_PERCE: req.body[i].NOM2_PERCE,
                        NOM3_NAME: req.body[i].NOM3_NAME,
                        NOM3_RELAT: req.body[i].NOM3_RELAT,
                        NOM3_ADDR1: req.body[i].NOM3_ADDR1,
                        NOM3_ADDR2: req.body[i].NOM3_ADDR2,
                        NOM3_ADDR3: req.body[i].NOM3_ADDR3,
                        NOM3_CITY: req.body[i].NOM3_CITY,
                        NOM3_STATE: req.body[i].NOM3_STATE,
                        NOM3_PINCO: req.body[i].NOM3_PINCO,
                        NOM3_PH_OF: req.body[i].NOM3_PH_OF,
                        NOM3_PH_RE: req.body[i].NOM3_PH_RE,
                        NOM3_EMAIL: req.body[i].NOM3_EMAIL,
                        NOM3_PERCE: req.body[i].NOM3_PERCE,
                        IFSC_CODE: req.body[i].IFSC_CODE,
                        DP_ID: req.body[i].DP_ID,
                        DEMAT: req.body[i].DEMAT,
                        GUARD_NAME: req.body[i].GUARD_NAME,
                        BROKCODE: req.body[i].BROKCODE,
                        FOLIO_DATE: moment(new Date(req.body[i].FOLIO_DATE)).format("YYYY-MM-DD"),
                        AADHAAR: req.body[i].AADHAAR,
                        TPA_LINKED: req.body[i].TPA_LINKED,
                        FH_CKYC_NO: req.body[i].FH_CKYC_NO,
                        JH1_CKYC: req.body[i].JH1_CKYC,
                        JH2_CKYC: req.body[i].JH2_CKYC,
                        G_CKYC_NO: req.body[i].G_CKYC_NO,
                        JH1_DOB: req.body[i].JH1_DOB,
                        JH2_DOB: req.body[i].JH2_DOB,
                        GUARDIAN_D: req.body[i].GUARDIAN_D,
                        AMC_CODE: req.body[i].AMC_CODE,
                        GST_STATE_: req.body[i].GST_STATE_,
                        FOLIO_OLD: req.body[i].FOLIO_OLD,
                        SCHEME_FOL: req.body[i].SCHEME_FOL,
                        USER_ID: "initial value",
                    }
                },
                {
                    "upsert": true
                },
                function (err, object) {
                    if (err) {
                        //    console.warn(err.message);  // returns error if no matching object found
                    }
                })
            model.find({ FOLIOCHK: req.body[i].FOLIOCHK, PRODUCT: req.body[i].PRODUCT, FOLIO_DATE: moment(new Date(req.body[i].FOLIO_DATE)).format("YYYY-MM-DD") }, function (err, data) {
                totaluploaded.push(data)
                if (j === totaluploaded.length) {
                    resdata = {
                        status: 200,
                        message: 'Data uploaded',
                    }
                    res.json(resdata);
                    return resdata;
                } else {
                    resdata = {
                        status: 400,
                        message: 'Data not uploaded',
                    }
                }
            });
        }
    } catch (error) {
        console.log(`Error found. ${error}`)
    }

})

app.post("/api/savefoliokarvy", function (req, res) {
    try {
        var totaluploaded = [];
        var model = mongoose.model('folio_karvy', foliokarvy, 'folio_karvy');
        var j = req.body.length;
        for (i = 0; i < req.body.length; i++) {
            foliok.updateMany(
                { INVNAME: req.body[i].INVNAME, JTNAME1: req.body[i].JTNAME1, ACNO: req.body[i].ACNO, FUNDDESC: req.body[i].FUNDDESC, BNKACNO: req.body[i].BNKACNO, PANGNO: req.body[i].PANGNO },
                {

                    $set:
                    {
                        PRCODE: req.body[i].PRCODE,
                        FUND: req.body[i].FUND,
                        ACNO: req.body[i].ACNO,
                        FUNDDESC: req.body[i].FUNDDESC,
                        INVNAME: req.body[i].INVNAME,
                        JTNAME1: req.body[i].JTNAME1,
                        JTNAME2: req.body[i].JTNAME2,
                        ADD1: req.body[i].ADD1,
                        ADD2: req.body[i].ADD2,
                        ADD3: req.body[i].ADD3,
                        CITY: req.body[i].CITY,
                        PIN: req.body[i].PIN,
                        STATE: req.body[i].STATE,
                        COUNTRY: req.body[i].COUNTRY,
                        TPIN: req.body[i].TPIN,
                        DOB: req.body[i].DOB,
                        FNAME: req.body[i].FNAME,
                        MNAME: req.body[i].MNAME,
                        RPHONE: req.body[i].RPHONE,
                        PH_RES1: req.body[i].PH_RES1,
                        PH_RES2: req.body[i].PH_RES2,
                        OPHONE: req.body[i].OPHONE,
                        PH_OFF1: req.body[i].PH_OFF1,
                        PH_OFF2: req.body[i].PH_OFF2,
                        FAX: req.body[i].FAX,
                        FAX_OFF: req.body[i].FAX_OFF,
                        STATUS: req.body[i].STATUS,
                        OCCPN: req.body[i].OCCPN,
                        EMAIL: req.body[i].EMAIL,
                        BNKACNO: req.body[i].BNKACNO,
                        BNAME: req.body[i].BNAME,
                        BNKACTYPE: req.body[i].BNKACTYPE,
                        BRANCH: req.body[i].BRANCH,
                        BADD1: req.body[i].BADD1,
                        BADD2: req.body[i].BADD2,
                        BADD3: req.body[i].BADD3,
                        BCITY: req.body[i].BCITY,
                        BPHONE: req.body[i].BPHONE,
                        BSTATE: req.body[i].BSTATE,
                        BCOUNTRY: req.body[i].BCOUNTRY,
                        INV_ID: req.body[i].INV_ID,
                        BROKCODE: req.body[i].BROKCODE,
                        CRDATE: moment(new Date(req.body[i].CRDATE)).format("YYYY-MM-DD"),
                        CRTIME: req.body[i].CRTIME,
                        PANGNO: req.body[i].PANGNO,
                        MOBILE: req.body[i].MOBILE,
                        DIVOPT: req.body[i].DIVOPT,
                        OCCP_DESC: req.body[i].OCCP_DESC,
                        MODEOFHOLD: req.body[i].MODEOFHOLD,
                        MAPIN: req.body[i].MAPIN,
                        PAN2: req.body[i].PAN2,
                        PAN3: req.body[i].PAN3,
                        IMCATEGORY: req.body[i].IMCATEGORY,
                        GUARDIANN0: req.body[i].GUARDIANN0,
                        NOMINEE: req.body[i].NOMINEE,
                        CLIENTID: req.body[i].CLIENTID,
                        // DPID: req.body[i].DPID,
                        // CATEGORYD1: req.body[i].CATEGORYD1,
                        STATUSDESC: req.body[i].STATUSDESC,
                        IFSC: req.body[i].IFSC,
                        NOMINEE2: req.body[i].NOMINEE2,
                        NOMINEE3: req.body[i].NOMINEE3,
                        KYC1FLAG: req.body[i].KYC1FLAG,
                        KYC2FLAG: req.body[i].KYC2FLAG,
                        KYC3FLAG: req.body[i].KYC3FLAG,
                        GUARDPANNO: req.body[i].GUARDPANNO,
                        LASTUPDAT0: (req.body[i].LASTUPDAT0) ? moment(new Date(req.body[i].LASTUPDAT0)).format("YYYY-MM-DD") : (req.body[i].LASTUPDAT1) ? moment(new Date(req.body[i].LASTUPDAT1)).format("YYYY-MM-DD") : moment(new Date()).format("YYYY-MM-DD"),
                        //CAN: req.body[i].CAN,
                        NOMINEEREL: req.body[i].NOMINEEREL,
                        NOMINEE2R2: req.body[i].NOMINEE2R2,
                        NOMINEE3R3: req.body[i].NOMINEE3R3,
                        //NOMINEE2R1: req.body[i].NOMINEE2R1,
                        // NOMINEE3R2: req.body[i].NOMINEE3R2,
                        // NOMINEERA3: req.body[i].NOMINEERA3,
                        // NOMINEE2R4: req.body[i].NOMINEE2R4,
                        // NOMINEE3R5: req.body[i].NOMINEE3R5,
                        ADRH1INFO: req.body[i].ADRH1INFO,
                        ADRH2INFO: req.body[i].ADRH2INFO,
                        ADRH3NFO: req.body[i].ADRH3NFO,
                        ADRGINFO: req.body[i].ADRGINFO,
                        USER_ID: "initial value",
                    }
                },
                {
                    "upsert": true
                },
                function (err, object) {
                    if (err) {
                        //  console.warn(err.message);  // returns error if no matching object found
                    }
                })
            model.find({ ACNO: req.body[i].ACNO, FUND: req.body[i].FUND, LASTUPDAT0: moment(new Date(req.body[i].LASTUPDAT0)).format("YYYY-MM-DD") }, function (err, data) {
                totaluploaded.push(data)
                if (j === totaluploaded.length) {
                    resdata = {
                        status: 200,
                        message: 'Data uploaded',
                    }
                    res.json(resdata);
                    return resdata;
                } else {
                    resdata = {
                        status: 400,
                        message: 'Data not uploaded',
                    }
                }
            });
        }
    } catch (error) {
        console.log(`Error found. ${error}`)
    }
})

app.post("/api/savetranscams2A", function (req, res) {
    try {
        var totaluploaded = [];
        // var model = mongoose.model('trans_cams', transcams, 'trans_cams');
        var j = req.body.length;
        // console.log("j=",j)
        for (i = 0; i < req.body.length; i++) {
            transc2A.updateMany(
                { TRXNNO: req.body[i].TRXNNO, FOLIO_NO: req.body[i].FOLIO_NO, TRADDATE: moment(new Date(req.body[i].TRADDATE)).format("YYYY-MM-DD"), AMOUNT: Number(req.body[i].AMOUNT) },
                {
                    $set:
                    {
                        AMC_CODE: req.body[i].AMC_CODE,
                        FOLIO_NO: req.body[i].FOLIO_NO,
                        PRODCODE: req.body[i].PRODCODE,
                        SCHEME: req.body[i].SCHEME,
                        INV_NAME: req.body[i].INV_NAME,
                        TRXNTYPE: req.body[i].TRXNTYPE,
                        TRXNNO: req.body[i].TRXNNO,
                        TRXNMODE: req.body[i].TRXNMODE,
                        TRXNSTAT: req.body[i].TRXNSTAT,
                        USERCODE: req.body[i].USERCODE,
                        USRTRXNO: req.body[i].USRTRXNO,
                        TRADDATE: moment(new Date(req.body[i].TRADDATE)).format("YYYY-MM-DD"),
                        POSTDATE: moment(new Date(req.body[i].POSTDATE)).format("YYYY-MM-DD"),
                        PURPRICE: Number(req.body[i].PURPRICE),
                        UNITS: Number(req.body[i].UNITS),
                        AMOUNT: Number(req.body[i].AMOUNT),
                        BROKCODE: req.body[i].BROKCODE,
                        SUBBROK: req.body[i].SUBBROK,
                        BROKPERC: req.body[i].BROKPERC,
                        BROKCOMM: req.body[i].BROKCOMM,
                        ALTFOLIO: req.body[i].ALTFOLIO,
                        REP_DATE: moment(new Date(req.body[i].REP_DATE)).format("YYYY-MM-DD"),
                        TIME1: req.body[i].TIME1,
                        TRXNSUBTYP: req.body[i].TRXNSUBTYP,
                        APPLICATIO: req.body[i].APPLICATIO,
                        TRXN_NATUR: req.body[i].TRXN_NATUR,
                        TAX: Number(req.body[i].TAX),
                        TOTAL_TAX: Number(req.body[i].TOTAL_TAX),
                        TE_15H: req.body[i].TE_15H,
                        MICR_NO: req.body[i].MICR_NO,
                        REMARKS: req.body[i].REMARKS,
                        SWFLAG: req.body[i].SWFLAG,
                        OLD_FOLIO: req.body[i].OLD_FOLIO,
                        SEQ_NO: req.body[i].SEQ_NO,
                        REINVEST_F: req.body[i].REINVEST_F,
                        MULT_BROK: req.body[i].MULT_BROK,
                        STT: Number(req.body[i].STT),
                        LOCATION: req.body[i].LOCATION,
                        SCHEME_TYP: req.body[i].SCHEME_TYP,
                        TAX_STATUS: req.body[i].TAX_STATUS,
                        LOAD: Number(req.body[i].LOAD),
                        SCANREFNO: req.body[i].SCANREFNO,
                        PAN: req.body[i].PAN,
                        INV_IIN: req.body[i].INV_IIN,
                        TARG_SRC_S: req.body[i].TARG_SRC_S,
                        TRXN_TYPE_: req.body[i].TRXN_TYPE_,
                        TICOB_TRTY: req.body[i].TICOB_TRTY,
                        TICOB_TRNO: req.body[i].TICOB_TRNO,
                        TICOB_POST: req.body[i].TICOB_POST,
                        DP_ID: req.body[i].DP_ID,
                        TRXN_CHARG: Number(req.body[i].TRXN_CHARG),
                        ELIGIB_AMT: Number(req.body[i].ELIGIB_AMT),
                        SRC_OF_TXN: req.body[i].SRC_OF_TXN,
                        TRXN_SUFFI: req.body[i].TRXN_SUFFI,
                        SIPTRXNNO: req.body[i].SIPTRXNNO,
                        TER_LOCATI: req.body[i].TER_LOCATI,
                        EUIN: req.body[i].EUIN,
                        EUIN_VALID: req.body[i].EUIN_VALID,
                        EUIN_OPTED: req.body[i].EUIN_OPTED,
                        SUB_BRK_AR: req.body[i].SUB_BRK_AR,
                        EXCH_DC_FL: req.body[i].EXCH_DC_FL,
                        SRC_BRK_CO: req.body[i].SRC_BRK_CO,
                        SYS_REGN_D: req.body[i].SYS_REGN_D,
                        AC_NO: req.body[i].AC_NO,
                        BANK_NAME: req.body[i].BANK_NAME,
                        REVERSAL_C: req.body[i].REVERSAL_C,
                        EXCHANGE_F: req.body[i].EXCHANGE_F,
                        CA_INITIAT: req.body[i].CA_INITIAT,
                        GST_STATE_: req.body[i].GST_STATE_,
                        IGST_AMOUN: Number(req.body[i].IGST_AMOUN),
                        CGST_AMOUN: Number(req.body[i].CGST_AMOUN),
                        SGST_AMOUN: Number(req.body[i].SGST_AMOUN),
                        REV_REMARK: req.body[i].REV_REMARK,
                        ORIGINAL_T: req.body[i].ORIGINAL_T,
                        STAMP_DUTY: Number(req.body[i].STAMP_DUTY),
                        FOLIO_OLD: req.body[i].FOLIO_OLD,
                        SCHEME_FOL: req.body[i].SCHEME_FOL,
                        AMC_REF_NO: req.body[i].AMC_REF_NO,
                        REQUEST_RE: req.body[i].REQUEST_RE,
                        USER_ID: "initial value",
                    }
                },
                {
                    "upsert": true
                },
                function (err, object) {
                    if (err) {
                        //  console.warn(err.message);  // returns error if no matching object found
                    }
                })
            transc2A.find({ TRXNNO: req.body[i].TRXNNO, PRODCODE: req.body[i].PRODCODE, FOLIO_NO: req.body[i].FOLIO_NO, TRADDATE: moment(new Date(req.body[i].TRADDATE)).format("YYYY-MM-DD") }, function (err, data) {
                totaluploaded.push(data)
                //console.log("all=",totaluploaded.length)
                if (j === totaluploaded.length) {
                    resdata = {
                        status: 200,
                        message: 'Data uploaded',
                    }
                    res.json(resdata);
                    return resdata;
                } else {
                    resdata = {
                        status: 400,
                        message: 'Data not uploaded',
                    }
                }
            });
        }
        //   console.dir("successfully");
    } catch (error) {
        console.log(`Error found. ${error}`)
    }
})

app.post("/api/savetranscams", function (req, res) {
    try {
        var totaluploaded = [];
        // var model = mongoose.model('trans_cams', transcams, 'trans_cams');
        var j = req.body.length;
        // console.log("j=",j)
        for (i = 0; i < req.body.length; i++) {
            transc.updateMany(
                { TRXNNO: req.body[i].TRXNNO, FOLIO_NO: req.body[i].FOLIO_NO, TRADDATE: moment(new Date(req.body[i].TRADDATE)).format("YYYY-MM-DD"), AMOUNT: Number(req.body[i].AMOUNT) },
                {
                    $set:
                    {
                        AMC_CODE: req.body[i].AMC_CODE,
                        FOLIO_NO: req.body[i].FOLIO_NO,
                        PRODCODE: req.body[i].PRODCODE,
                        SCHEME: req.body[i].SCHEME,
                        INV_NAME: req.body[i].INV_NAME,
                        TRXNTYPE: req.body[i].TRXNTYPE,
                        TRXNNO: req.body[i].TRXNNO,
                        TRXNMODE: req.body[i].TRXNMODE,
                        TRXNSTAT: req.body[i].TRXNSTAT,
                        USERCODE: req.body[i].USERCODE,
                        USRTRXNO: req.body[i].USRTRXNO,
                        TRADDATE: moment(new Date(req.body[i].TRADDATE)).format("YYYY-MM-DD"),
                        POSTDATE: moment(new Date(req.body[i].POSTDATE)).format("YYYY-MM-DD"),
                        PURPRICE: Number(req.body[i].PURPRICE),
                        UNITS: Number(req.body[i].UNITS),
                        AMOUNT: Number(req.body[i].AMOUNT),
                        BROKCODE: req.body[i].BROKCODE,
                        SUBBROK: req.body[i].SUBBROK,
                        BROKPERC: req.body[i].BROKPERC,
                        BROKCOMM: req.body[i].BROKCOMM,
                        ALTFOLIO: req.body[i].ALTFOLIO,
                        REP_DATE: moment(new Date(req.body[i].REP_DATE)).format("YYYY-MM-DD"),
                        TIME1: req.body[i].TIME1,
                        TRXNSUBTYP: req.body[i].TRXNSUBTYP,
                        APPLICATIO: req.body[i].APPLICATIO,
                        TRXN_NATUR: req.body[i].TRXN_NATUR,
                        TAX: Number(req.body[i].TAX),
                        TOTAL_TAX: Number(req.body[i].TOTAL_TAX),
                        TE_15H: req.body[i].TE_15H,
                        MICR_NO: req.body[i].MICR_NO,
                        REMARKS: req.body[i].REMARKS,
                        SWFLAG: req.body[i].SWFLAG,
                        OLD_FOLIO: req.body[i].OLD_FOLIO,
                        SEQ_NO: req.body[i].SEQ_NO,
                        REINVEST_F: req.body[i].REINVEST_F,
                        MULT_BROK: req.body[i].MULT_BROK,
                        STT: Number(req.body[i].STT),
                        LOCATION: req.body[i].LOCATION,
                        SCHEME_TYP: req.body[i].SCHEME_TYP,
                        TAX_STATUS: req.body[i].TAX_STATUS,
                        LOAD: Number(req.body[i].LOAD),
                        SCANREFNO: req.body[i].SCANREFNO,
                        PAN: req.body[i].PAN,
                        INV_IIN: req.body[i].INV_IIN,
                        TARG_SRC_S: req.body[i].TARG_SRC_S,
                        TRXN_TYPE_: req.body[i].TRXN_TYPE_,
                        TICOB_TRTY: req.body[i].TICOB_TRTY,
                        TICOB_TRNO: req.body[i].TICOB_TRNO,
                        TICOB_POST: req.body[i].TICOB_POST,
                        DP_ID: req.body[i].DP_ID,
                        TRXN_CHARG: Number(req.body[i].TRXN_CHARG),
                        ELIGIB_AMT: Number(req.body[i].ELIGIB_AMT),
                        SRC_OF_TXN: req.body[i].SRC_OF_TXN,
                        TRXN_SUFFI: req.body[i].TRXN_SUFFI,
                        SIPTRXNNO: req.body[i].SIPTRXNNO,
                        TER_LOCATI: req.body[i].TER_LOCATI,
                        EUIN: req.body[i].EUIN,
                        EUIN_VALID: req.body[i].EUIN_VALID,
                        EUIN_OPTED: req.body[i].EUIN_OPTED,
                        SUB_BRK_AR: req.body[i].SUB_BRK_AR,
                        EXCH_DC_FL: req.body[i].EXCH_DC_FL,
                        SRC_BRK_CO: req.body[i].SRC_BRK_CO,
                        SYS_REGN_D: req.body[i].SYS_REGN_D,
                        AC_NO: req.body[i].AC_NO,
                        BANK_NAME: req.body[i].BANK_NAME,
                        REVERSAL_C: req.body[i].REVERSAL_C,
                        EXCHANGE_F: req.body[i].EXCHANGE_F,
                        CA_INITIAT: req.body[i].CA_INITIAT,
                        GST_STATE_: req.body[i].GST_STATE_,
                        IGST_AMOUN: Number(req.body[i].IGST_AMOUN),
                        CGST_AMOUN: Number(req.body[i].CGST_AMOUN),
                        SGST_AMOUN: Number(req.body[i].SGST_AMOUN),
                        REV_REMARK: req.body[i].REV_REMARK,
                        ORIGINAL_T: req.body[i].ORIGINAL_T,
                        STAMP_DUTY: Number(req.body[i].STAMP_DUTY),
                        FOLIO_OLD: req.body[i].FOLIO_OLD,
                        SCHEME_FOL: req.body[i].SCHEME_FOL,
                        AMC_REF_NO: req.body[i].AMC_REF_NO,
                        REQUEST_RE: req.body[i].REQUEST_RE,
                        USER_ID: "initial value",
                    }
                },
                {
                    "upsert": true
                },
                function (err, object) {
                    if (err) {
                        //   console.warn(err.message);  // returns error if no matching object found
                    }
                })
            transc.find({ TRXNNO: req.body[i].TRXNNO, PRODCODE: req.body[i].PRODCODE, FOLIO_NO: req.body[i].FOLIO_NO, TRADDATE: moment(new Date(req.body[i].TRADDATE)).format("YYYY-MM-DD") }, function (err, data) {
                totaluploaded.push(data)
                //console.log("all=",totaluploaded.length)
                if (j === totaluploaded.length) {

                    resdata = {
                        status: 200,
                        message: 'Data uploaded',
                    }
                    res.json(resdata);
                    return resdata;
                } else {
                    resdata = {
                        status: 400,
                        message: 'Data not uploaded',
                    }
                }
            });
        }
        console.dir("successfully");
    } catch (error) {
        console.log(`Error found. ${error}`)
    }
})

app.post("/api/uploadtranskarvyold", async function (req, res) {
    try {
        var totaluploaded = [];
        var j = req.body.length;
        var newclientarray = [];
        var j = '';
        for (i = 0; i < req.body.length; i++) {
            let data = users.findOne({ NAME: { $regex: req.body[i].INVNAME, $options: 'i' }, PAN: req.body[i].PAN1 }, { _id: 0, NAME: "$NAME", PAN: "$PAN" }).exec();
            if (data != null) {
                console.log("data=", data._doc.PAN, data._doc.NAME)
            }
            if (data === null) {
                newclientarray.push({
                    FMCODE: req.body[i].FMCODE, TD_FUND: req.body[i].TD_FUND, TD_SCHEME: req.body[i].TD_SCHEME, TD_PLAN: req.body[i].TD_PLAN, TD_ACNO: req.body[i].TD_ACNO, SCHPLN: req.body[i].SCHPLN, DIVOPT: req.body[i].DIVOPT, FUNDDESC: req.body[i].FUNDDESC, TD_PURRED: req.body[i].TD_PURRED, TD_TRNO: req.body[i].TD_TRNO, SMCODE: req.body[i].SMCODE, CHQNO: req.body[i].CHQNO, INVNAME: req.body[i].INVNAME, TRNMODE: req.body[i].TRNMODE, TRNSTAT: req.body[i].TRNSTAT, TD_BRANCH: req.body[i].TD_BRANCH, ISCTRNO: req.body[i].ISCTRNO, TD_TRDT: moment(new Date(req.body[i].TD_TRDT)).format("YYYY-MM-DD"), TD_PRDT: moment(new Date(req.body[i].TD_PRDT)).format("YYYY-MM-DD"), TD_UNITS: req.body[i].TD_UNITS, TD_AMT: req.body[i].TD_AMT, TD_AGENT: req.body[i].TD_AGENT, TD_BROKER: req.body[i].TD_BROKER, BROKPER: req.body[i].BROKPER, BROKCOMM: req.body[i].BROKCOMM, INVID: req.body[i].INVID, CRDATE: moment(new Date(req.body[i].CRDATE)).format("YYYY-MM-DD"), CRTIME: req.body[i].CRTIME, TRNSUB: req.body[i].TRNSUB, TD_APPNO: req.body[i].TD_APPNO, UNQNO: req.body[i].UNQNO, TRDESC: req.body[i].TRDESC, TD_TRTYPE: req.body[i].TD_TRTYPE, NAVDATE: moment(new Date(req.body[i].NAVDATE)).format("YYYY-MM-DD"), PORTDT: moment(new Date(req.body[i].PORTDT)).format("YYYY-MM-DD"), ASSETTYPE: req.body[i].ASSETTYPE, SUBTRTYPE: req.body[i].SUBTRTYPE, CITYCATEG0: req.body[i].CITYCATEG0, EUIN: req.body[i].EUIN, TRCHARGES: req.body[i].TRCHARGES, CLIENTID: req.body[i].CLIENTID, DPID: req.body[i].DPID, STT: req.body[i].STT, IHNO: req.body[i].IHNO, BRANCHCODE: req.body[i].BRANCHCODE, INWARDNUM1: req.body[i].INWARDNUM1, PAN1: req.body[i].PAN1, PAN2: req.body[i].PAN2, PAN3: req.body[i].PAN3, TDSAMOUNT: req.body[i].TDSAMOUNT, CHQDATE: moment(new Date(req.body[i].CHQDATE)).format("YYYY-MM-DD"), CHQBANK: req.body[i].CHQBANK, TRFLAG: req.body[i].TRFLAG, LOAD1: req.body[i].LOAD1, BROK_ENTDT: req.body[i].BROK_ENTDT, NCTREMARKS: req.body[i].NCTREMARKS, PRCODE1: req.body[i].PRCODE1, STATUS: req.body[i].STATUS, SCHEMEISIN: req.body[i].SCHEMEISIN, TD_NAV: req.body[i].TD_NAV, INSAMOUNT: req.body[i].INSAMOUNT, REJTRNOOR2: req.body[i].REJTRNOOR2, EVALID: req.body[i].EVALID, EDECLFLAG: req.body[i].EDECLFLAG, SUBARNCODE: req.body[i].SUBARNCODE, ATMCARDRE3: req.body[i].ATMCARDRE3, ATMCARDST4: req.body[i].ATMCARDST4, SCH1: req.body[i].SCH1, PLN1: req.body[i].PLN1, TD_TRXNMO5: req.body[i].TD_TRXNMO5, NEWUNQNO: req.body[i].NEWUNQNO, SIPREGDT: req.body[i].SIPREGDT, DIVPER: req.body[i].DIVPER, CAN: req.body[i].CAN, EXCHORGTR6: req.body[i].EXCHORGTR6, ELECTRXNF7: req.body[i].ELECTRXNF7, SIPREGSLNO: req.body[i].SIPREGSLNO, CLEARED: req.body[i].CLEARED, TD_POP: req.body[i].TD_POP, INVSTATE: req.body[i].INVSTATE, STAMPDUTY: req.body[i].STAMPDUTY
                });
                resdata = {
                    status: 400,
                    message: 'User not found',
                    data: newclientarray
                }

            } else {
                try {
                    j = req.body.length;
                    transk.updateMany(
                        { TD_TRNO: req.body[i].TD_TRNO, UNQNO: req.body[i].UNQNO, NEWUNQNO: req.body[i].NEWUNQNO, TD_AMT: req.body[i].TD_AMT, TD_ACNO: req.body[i].TD_ACNO, FMCODE: req.body[i].FMCODE },
                        {
                            $set:
                            {
                                FMCODE: req.body[i].FMCODE,
                                TD_FUND: req.body[i].TD_FUND,
                                TD_SCHEME: req.body[i].TD_SCHEME,
                                TD_PLAN: req.body[i].TD_PLAN,
                                TD_ACNO: req.body[i].TD_ACNO,
                                SCHPLN: req.body[i].SCHPLN,
                                DIVOPT: req.body[i].DIVOPT,
                                FUNDDESC: req.body[i].FUNDDESC,
                                TD_PURRED: req.body[i].TD_PURRED,
                                TD_TRNO: req.body[i].TD_TRNO,
                                SMCODE: req.body[i].SMCODE,
                                CHQNO: req.body[i].CHQNO,
                                INVNAME: data._doc.NAME,
                                TRNMODE: req.body[i].TRNMODE,
                                TRNSTAT: req.body[i].TRNSTAT,
                                TD_BRANCH: req.body[i].TD_BRANCH,
                                ISCTRNO: req.body[i].ISCTRNO,
                                TD_TRDT: moment(new Date(req.body[i].TD_TRDT)).format("YYYY-MM-DD"),
                                TD_PRDT: moment(new Date(req.body[i].TD_PRDT)).format("YYYY-MM-DD"),
                                TD_UNITS: Number(req.body[i].TD_UNITS),
                                TD_AMT: Number(req.body[i].TD_AMT),
                                TD_AGENT: req.body[i].TD_AGENT,
                                TD_BROKER: req.body[i].TD_BROKER,
                                BROKPER: req.body[i].BROKPER,
                                BROKCOMM: req.body[i].BROKCOMM,
                                INVID: req.body[i].INVID,
                                CRDATE: moment(new Date(req.body[i].CRDATE)).format("YYYY-MM-DD"),
                                CRTIME: req.body[i].CRTIME,
                                TRNSUB: req.body[i].TRNSUB,
                                TD_APPNO: req.body[i].TD_APPNO,
                                UNQNO: req.body[i].UNQNO,
                                TRDESC: req.body[i].TRDESC,
                                TD_TRTYPE: req.body[i].TD_TRTYPE,
                                NAVDATE: moment(new Date(req.body[i].NAVDATE)).format("YYYY-MM-DD"),
                                PORTDT: moment(new Date(req.body[i].PORTDT)).format("YYYY-MM-DD"),
                                ASSETTYPE: req.body[i].ASSETTYPE,
                                SUBTRTYPE: req.body[i].SUBTRTYPE,
                                CITYCATEG0: req.body[i].CITYCATEG0,
                                EUIN: req.body[i].EUIN,
                                TRCHARGES: req.body[i].TRCHARGES,
                                CLIENTID: req.body[i].CLIENTID,
                                DPID: req.body[i].DPID,
                                STT: req.body[i].STT,
                                IHNO: req.body[i].IHNO,
                                BRANCHCODE: req.body[i].BRANCHCODE,
                                INWARDNUM1: req.body[i].INWARDNUM1,
                                PAN1: req.body[i].PAN1,
                                PAN2: req.body[i].PAN2,
                                PAN3: req.body[i].PAN3,
                                TDSAMOUNT: req.body[i].TDSAMOUNT,
                                CHQDATE: req.body[i].CHQDATE,
                                CHQBANK: req.body[i].CHQBANK,
                                TRFLAG: req.body[i].TRFLAG,
                                LOAD1: req.body[i].LOAD1,
                                BROK_ENTDT: req.body[i].BROK_ENTDT,
                                NCTREMARKS: req.body[i].NCTREMARKS,
                                PRCODE1: req.body[i].PRCODE1,
                                STATUS: req.body[i].STATUS,
                                SCHEMEISIN: req.body[i].SCHEMEISIN,
                                TD_NAV: Number(req.body[i].TD_NAV),
                                INSAMOUNT: req.body[i].INSAMOUNT,
                                REJTRNOOR2: req.body[i].REJTRNOOR2,
                                EVALID: req.body[i].EVALID,
                                EDECLFLAG: req.body[i].EDECLFLAG,
                                SUBARNCODE: req.body[i].SUBARNCODE,
                                ATMCARDRE3: req.body[i].ATMCARDRE3,
                                ATMCARDST4: req.body[i].ATMCARDST4,
                                SCH1: req.body[i].SCH1,
                                PLN1: req.body[i].PLN1,
                                TD_TRXNMO5: req.body[i].TD_TRXNMO5,
                                NEWUNQNO: req.body[i].NEWUNQNO,
                                SIPREGDT: req.body[i].SIPREGDT,
                                SIPREGSLNO: req.body[i].SIPREGSLNO,
                                DIVPER: req.body[i].DIVPER,
                                CAN: req.body[i].CAN,
                                EXCHORGTR6: req.body[i].EXCHORGTR6,
                                ELECTRXNF7: req.body[i].ELECTRXNF7,
                                CLEARED: req.body[i].CLEARED,
                                BROK_VALU8: req.body[i].BROK_VALU8,
                                TD_POP: Number(req.body[i].TD_POP),
                                INVSTATE: req.body[i].INVSTATE,
                                STAMPDUTY: req.body[i].STAMPDUTY,
                            }
                        },
                        {
                            "upsert": true
                        },
                        function (err, object) {
                            if (err) {
                                //  console.warn(err.message);  // returns error if no matching object found
                            }
                        })
                    transk.find({ TD_TRNO: req.body[i].TD_TRNO, UNQNO: req.body[i].UNQNO, NEWUNQNO: req.body[i].NEWUNQNO, TD_AMT: req.body[i].TD_AMT, TD_ACNO: req.body[i].TD_ACNO }, function (err, data) {
                        totaluploaded.push(data)
                        // if(j === totaluploaded.length){

                        //     resdata = {
                        //                 status: 200,
                        //                 message: 'Data uploaded',
                        //             }
                        //             res.json(resdata);
                        //             return resdata;
                        // }else{
                        //     resdata = {
                        //         status: 400,
                        //         message: 'Data not uploaded',
                        //     }                     
                        // }                 
                    });

                } catch (error) {
                    console.log(`Error found. ${error}`)
                }
            }
            if (newclientarray.length > 0 || j === totaluploaded.length) {

                resdata = {
                    status: 200,
                    message: 'Data uploaded',
                    data: newclientarray
                }

            } else {
                resdata = {
                    status: 400,
                    message: 'Data not uploaded',
                }

            }
        }
        res.json(resdata);
        return resdata;
    } catch (error) {
        console.log(`Error found. ${error}`)
    }
})

app.get("/api/Updatestaticclientid", function (req, res) {
    transc.updateMany(
        { PAN: "ANNPS9131L" },
        {
            $set:
            {
                "INV_NAME": "ANJU SINGH",
            }
        },
        {
            "upsert": false,
        },
        function (err, object) {
            if (err) {
                console.warn(err.message);  // returns error if no matching object found
            } else {
                console.log("hello11")
            }
        })
})

app.get("/api/Updateclientid", function (req, res) {
    const pipeline1 = [   //user_master
        { $match: { PAN: { $ne: "" } } },
        { $project: { _id: 0, DOCNO: "$DOCNO", PAN: "$PAN", NAME: "$NAME" } }
    ]
    users.aggregate(pipeline1, (err, user) => {
        var datacon = user;
        datacon = datacon.filter(
            (temp => a =>
                (k => !temp[k] && (temp[k] = true))(a.DOCNO + '|' + a.PAN)
            )(Object.create(null))
        );
        //console.log("data=", datacon)
        for (var i = 0; i < datacon.length; i++) {
            foliok.updateMany(
                { PANGNO: datacon[i].PAN, INVNAME: { $regex: datacon[i].NAME, $options: 'i' } },
                {
                    $set:
                    {
                        "USER_ID": datacon[i].DOCNO,
                    }
                },
                {
                    "upsert": false,
                },
                function (err, object) {
                    if (err) {
                        console.warn(err.message);  // returns error if no matching object found
                    } else {
                        console.log("hello11")
                    }
                })


            console.log(datacon[i].PAN, datacon[i].DOCNO, datacon[i].NAME)
            // foliok.updateMany(
            //     {  PANGNO: datacon[i].PAN  },
            //     {
            //                 $set:
            //                 {
            //                     "USER_ID": datacon[i].DOCNO,
            //                 }
            //             },
            //             {
            //                 "upsert": false,
            //             },
            //             function (err, object) {
            //                 if (err) {
            //                     console.warn(err.message);  // returns error if no matching object found
            //                 } else {
            //                     console.log("hello11")
            //                 }
            // })
            // foliok.updateMany(
            //     {  GUARDPANNO: datacon[i].PAN  },
            //     {
            //                 $set:
            //                 {
            //                     "USER_ID": datacon[i].DOCNO,
            //                 }
            //             },
            //             {
            //                 "upsert": false,
            //             },
            //             function (err, object) {
            //                 if (err) {
            //                     console.warn(err.message);  // returns error if no matching object found
            //                 } else {
            //                     console.log("hello222")
            //                 }
            // })
            // transk.updateMany(
            //     { PAN1: datacon[i].PAN, INVNAME: { $regex: datacon[i].NAME, $options: 'i' } },
            //     {
            //         $set:
            //         {
            //             "USER_ID": datacon[i].DOCNO,
            //         }
            //     },
            //     {
            //         "upsert": false,
            //     },
            //     function (err, object) {
            //         if (err) {
            //             console.warn(err.message);  // returns error if no matching object found
            //         } else {
            //             console.log("hello")
            //         }
            //     })
        }
    });
})

app.post("/api/addtranscams", async function (req, res) {
    try {

        var current = new Date();
        const timeStamp = new Date(Date.UTC(current.getFullYear(),
            current.getMonth(), current.getDate(), current.getHours(),
            current.getMinutes(), current.getSeconds(), current.getMilliseconds()));
        var uniquenum = Math.floor(100000 + Math.random() * 900000);
        console.log(req.body.name, req.body.pan)
        console.log(uniquenum);
        var users = mongoose.model('user_master', usermaster, 'user_master')
        try {
            var user = new users({
                NAME: req.body.name,
                PAN: req.body.pan,
                DOCNO: uniquenum,
                CREATEDATE: timeStamp,
            });

            user.save(function (err, data) {
                if (err) {
                    console.warn(err.message);

                }
                else {
                    console.log(data._doc);
                    console.log(typeof parseInt(data._doc.DOCNO), typeof uniquenum);
                    if (parseInt(uniquenum) === parseInt(data._doc.DOCNO)) {
                        for (i = 0; i < req.body.data.length; i++) {
                            console.log(req.body.data[i].TRXNNO)
                            transc.updateMany(
                                { TRXNNO: req.body.data[i].TRXNNO, FOLIO_NO: req.body.data[i].FOLIO_NO, TRADDATE: moment(new Date(req.body.data[i].TRADDATE)).format("YYYY-MM-DD"), AMOUNT: Number(req.body.data[i].AMOUNT), PRODCODE: req.body.data[i].PRODCODE, SEQ_NO: req.body.data[i].SEQ_NO },
                                {
                                    $set:
                                    {
                                        AMC_CODE: req.body.data[i].AMC_CODE,
                                        FOLIO_NO: req.body.data[i].FOLIO_NO,
                                        PRODCODE: req.body.data[i].PRODCODE,
                                        SCHEME: req.body.data[i].SCHEME,
                                        INV_NAME: req.body.data[i].INV_NAME,
                                        TRXNTYPE: req.body.data[i].TRXNTYPE,
                                        TRXNNO: req.body.data[i].TRXNNO,
                                        TRXNMODE: req.body.data[i].TRXNMODE,
                                        TRXNSTAT: req.body.data[i].TRXNSTAT,
                                        USERCODE: req.body.data[i].USERCODE,
                                        USRTRXNO: req.body.data[i].USRTRXNO,
                                        TRADDATE: moment(new Date(req.body.data[i].TRADDATE)).format("YYYY-MM-DD"),
                                        POSTDATE: moment(new Date(req.body.data[i].POSTDATE)).format("YYYY-MM-DD"),
                                        PURPRICE: Number(req.body.data[i].PURPRICE),
                                        UNITS: Number(req.body.data[i].UNITS),
                                        AMOUNT: Number(req.body.data[i].AMOUNT),
                                        BROKCODE: req.body.data[i].BROKCODE,
                                        SUBBROK: req.body.data[i].SUBBROK,
                                        BROKPERC: req.body.data[i].BROKPERC,
                                        BROKCOMM: req.body.data[i].BROKCOMM,
                                        ALTFOLIO: req.body.data[i].ALTFOLIO,
                                        REP_DATE: moment(new Date(req.body.data[i].REP_DATE)).format("YYYY-MM-DD"),
                                        TIME1: req.body.data[i].TIME1,
                                        TRXNSUBTYP: req.body.data[i].TRXNSUBTYP,
                                        APPLICATIO: req.body.data[i].APPLICATIO,
                                        TRXN_NATUR: req.body.data[i].TRXN_NATUR,
                                        TAX: Number(req.body.data[i].TAX),
                                        TOTAL_TAX: Number(req.body.data[i].TOTAL_TAX),
                                        TE_15H: req.body.data[i].TE_15H,
                                        MICR_NO: req.body.data[i].MICR_NO,
                                        REMARKS: req.body.data[i].REMARKS,
                                        SWFLAG: req.body.data[i].SWFLAG,
                                        OLD_FOLIO: req.body.data[i].OLD_FOLIO,
                                        SEQ_NO: req.body.data[i].SEQ_NO,
                                        REINVEST_F: req.body.data[i].REINVEST_F,
                                        MULT_BROK: req.body.data[i].MULT_BROK,
                                        STT: Number(req.body.data[i].STT),
                                        LOCATION: req.body.data[i].LOCATION,
                                        SCHEME_TYP: req.body.data[i].SCHEME_TYP,
                                        TAX_STATUS: req.body.data[i].TAX_STATUS,
                                        LOAD: Number(req.body.data[i].LOAD),
                                        SCANREFNO: req.body.data[i].SCANREFNO,
                                        PAN: (req.body.data[i].PAN).toUpperCase(),
                                        INV_IIN: req.body.data[i].INV_IIN,
                                        TARG_SRC_S: req.body.data[i].TARG_SRC_S,
                                        TRXN_TYPE_: req.body.data[i].TRXN_TYPE_,
                                        TICOB_TRTY: req.body.data[i].TICOB_TRTY,
                                        TICOB_TRNO: req.body.data[i].TICOB_TRNO,
                                        TICOB_POST: req.body.data[i].TICOB_POST,
                                        DP_ID: req.body.data[i].DP_ID,
                                        TRXN_CHARG: Number(req.body.data[i].TRXN_CHARG),
                                        ELIGIB_AMT: Number(req.body.data[i].ELIGIB_AMT),
                                        SRC_OF_TXN: req.body.data[i].SRC_OF_TXN,
                                        TRXN_SUFFI: req.body.data[i].TRXN_SUFFI,
                                        SIPTRXNNO: req.body.data[i].SIPTRXNNO,
                                        TER_LOCATI: req.body.data[i].TER_LOCATI,
                                        EUIN: req.body.data[i].EUIN,
                                        EUIN_VALID: req.body.data[i].EUIN_VALID,
                                        EUIN_OPTED: req.body.data[i].EUIN_OPTED,
                                        SUB_BRK_AR: req.body.data[i].SUB_BRK_AR,
                                        EXCH_DC_FL: req.body.data[i].EXCH_DC_FL,
                                        SRC_BRK_CO: req.body.data[i].SRC_BRK_CO,
                                        SYS_REGN_D: req.body.data[i].SYS_REGN_D,
                                        AC_NO: req.body.data[i].AC_NO,
                                        BANK_NAME: req.body.data[i].BANK_NAME,
                                        REVERSAL_C: req.body.data[i].REVERSAL_C,
                                        EXCHANGE_F: req.body.data[i].EXCHANGE_F,
                                        CA_INITIAT: req.body.data[i].CA_INITIAT,
                                        GST_STATE_: req.body.data[i].GST_STATE_,
                                        IGST_AMOUN: Number(req.body.data[i].IGST_AMOUN),
                                        CGST_AMOUN: Number(req.body.data[i].CGST_AMOUN),
                                        SGST_AMOUN: Number(req.body.data[i].SGST_AMOUN),
                                        REV_REMARK: req.body.data[i].REV_REMARK,
                                        ORIGINAL_T: req.body.data[i].ORIGINAL_T,
                                        STAMP_DUTY: Number(req.body.data[i].STAMP_DUTY),
                                        FOLIO_OLD: req.body.data[i].FOLIO_OLD,
                                        SCHEME_FOL: req.body.data[i].SCHEME_FOL,
                                        AMC_REF_NO: req.body.data[i].AMC_REF_NO,
                                        REQUEST_RE: req.body.data[i].REQUEST_RE,
                                        USER_ID: uniquenum,
                                    }
                                },
                                {
                                    "upsert": true
                                },
                                function (err, object) {
                                    if (err) {
                                        //  console.warn(err.message);  // returns error if no matching object found
                                    } else {
                                        console.log("object=", object);
                                    }
                                })
                        }
                    } else {
                        console.log("yyyyyyyyyyyyyyyyyyyy=");
                    }
                }
            });
        } catch (err) {
            console.log(e)
        }

        resdata = {
            status: 200,
            message: 'Data uploaded',
        }
        res.json(resdata);
        return resdata;
    } catch (error) {
        console.log(`Error found. ${error}`)
    }
})

app.post("/api/addtranskarvy", async function (req, res) {
    try {

        var current = new Date();
        const timeStamp = new Date(Date.UTC(current.getFullYear(),
            current.getMonth(), current.getDate(), current.getHours(),
            current.getMinutes(), current.getSeconds(), current.getMilliseconds()));
        var uniquenum = Math.floor(100000 + Math.random() * 900000);
        console.log(req.body.name, req.body.pan)
        console.log(uniquenum);
        var users = mongoose.model('user_master', usermaster, 'user_master')
        try {
            var user = new users({
                NAME: req.body.name,
                PAN: req.body.pan,
                DOCNO: uniquenum,
                CREATEDATE: timeStamp,
            });

            user.save(function (err, data) {
                if (err) {
                    console.warn(err.message);
                }
                else {
                    console.log(data._doc);
                    console.log(typeof parseInt(data._doc.DOCNO), typeof uniquenum);
                    if (parseInt(uniquenum) === parseInt(data._doc.DOCNO)) {
                        for (i = 0; i < req.body.data.length; i++) {
                            console.log(req.body.data[i].TD_TRNO)
                            transk.updateMany(
                                { TD_TRNO: req.body.data[i].TD_TRNO, UNQNO: req.body.data[i].UNQNO, NEWUNQNO: req.body.data[i].NEWUNQNO, TD_ACNO: req.body.data[i].TD_ACNO, FMCODE: req.body.data[i].FMCODE, TRFLAG: req.body.data[i].TRFLAG },
                                {
                                    $set:
                                    {
                                        FMCODE: req.body.data[i].FMCODE,
                                        TD_FUND: req.body.data[i].TD_FUND,
                                        TD_SCHEME: req.body.data[i].TD_SCHEME,
                                        TD_PLAN: req.body.data[i].TD_PLAN,
                                        TD_ACNO: req.body.data[i].TD_ACNO,
                                        SCHPLN: req.body.data[i].SCHPLN,
                                        DIVOPT: req.body.data[i].DIVOPT,
                                        FUNDDESC: req.body.data[i].FUNDDESC,
                                        TD_PURRED: req.body.data[i].TD_PURRED,
                                        TD_TRNO: req.body.data[i].TD_TRNO,
                                        SMCODE: req.body.data[i].SMCODE,
                                        CHQNO: req.body.data[i].CHQNO,
                                        INVNAME: req.body.data[i].INVNAME,
                                        TRNMODE: req.body.data[i].TRNMODE,
                                        TRNSTAT: req.body.data[i].TRNSTAT,
                                        TD_BRANCH: req.body.data[i].TD_BRANCH,
                                        ISCTRNO: req.body.data[i].ISCTRNO,
                                        TD_TRDT: moment(new Date(req.body.data[i].TD_TRDT)).format("YYYY-MM-DD"),
                                        TD_PRDT: moment(new Date(req.body.data[i].TD_PRDT)).format("YYYY-MM-DD"),
                                        TD_UNITS: Number(req.body.data[i].TD_UNITS),
                                        TD_AMT: Number(req.body.data[i].TD_AMT),
                                        TD_AGENT: req.body.data[i].TD_AGENT,
                                        TD_BROKER: req.body.data[i].TD_BROKER,
                                        BROKPER: req.body.data[i].BROKPER,
                                        BROKCOMM: req.body.data[i].BROKCOMM,
                                        INVID: req.body.data[i].INVID,
                                        CRDATE: moment(new Date(req.body.data[i].CRDATE)).format("YYYY-MM-DD"),
                                        CRTIME: req.body.data[i].CRTIME,
                                        TRNSUB: req.body.data[i].TRNSUB,
                                        TD_APPNO: req.body.data[i].TD_APPNO,
                                        UNQNO: req.body.data[i].UNQNO,
                                        TRDESC: req.body.data[i].TRDESC,
                                        TD_TRTYPE: req.body.data[i].TD_TRTYPE,
                                        NAVDATE: moment(new Date(req.body.data[i].NAVDATE)).format("YYYY-MM-DD"),
                                        PORTDT: moment(new Date(req.body.data[i].PORTDT)).format("YYYY-MM-DD"),
                                        ASSETTYPE: req.body.data[i].ASSETTYPE,
                                        SUBTRTYPE: req.body.data[i].SUBTRTYPE,
                                        CITYCATEG0: req.body.data[i].CITYCATEG0,
                                        EUIN: req.body.data[i].EUIN,
                                        TRCHARGES: req.body.data[i].TRCHARGES,
                                        CLIENTID: req.body.data[i].CLIENTID,
                                        DPID: req.body.data[i].DPID,
                                        STT: req.body.data[i].STT,
                                        IHNO: req.body.data[i].IHNO,
                                        BRANCHCODE: req.body.data[i].BRANCHCODE,
                                        INWARDNUM1: req.body.data[i].INWARDNUM1,
                                        PAN1: req.body.data[i].PAN1,
                                        PAN2: req.body.data[i].PAN2,
                                        PAN3: req.body.data[i].PAN3,
                                        TDSAMOUNT: req.body.data[i].TDSAMOUNT,
                                        CHQDATE: req.body.data[i].CHQDATE,
                                        CHQBANK: req.body.data[i].CHQBANK,
                                        TRFLAG: req.body.data[i].TRFLAG,
                                        LOAD1: req.body.data[i].LOAD1,
                                        BROK_ENTDT: req.body.data[i].BROK_ENTDT,
                                        NCTREMARKS: req.body.data[i].NCTREMARKS,
                                        PRCODE1: req.body.data[i].PRCODE1,
                                        STATUS: req.body.data[i].STATUS,
                                        SCHEMEISIN: req.body.data[i].SCHEMEISIN,
                                        TD_NAV: Number(req.body.data[i].TD_NAV),
                                        INSAMOUNT: req.body.data[i].INSAMOUNT,
                                        REJTRNOOR2: req.body.data[i].REJTRNOOR2,
                                        EVALID: req.body.data[i].EVALID,
                                        EDECLFLAG: req.body.data[i].EDECLFLAG,
                                        SUBARNCODE: req.body.data[i].SUBARNCODE,
                                        ATMCARDRE3: req.body.data[i].ATMCARDRE3,
                                        ATMCARDST4: req.body.data[i].ATMCARDST4,
                                        SCH1: req.body.data[i].SCH1,
                                        PLN1: req.body.data[i].PLN1,
                                        TD_TRXNMO5: req.body.data[i].TD_TRXNMO5,
                                        NEWUNQNO: req.body.data[i].NEWUNQNO,
                                        SIPREGDT: req.body.data[i].SIPREGDT,
                                        SIPREGSLNO: req.body.data[i].SIPREGSLNO,
                                        DIVPER: req.body.data[i].DIVPER,
                                        CAN: req.body.data[i].CAN,
                                        EXCHORGTR6: req.body.data[i].EXCHORGTR6,
                                        ELECTRXNF7: req.body.data[i].ELECTRXNF7,
                                        CLEARED: req.body.data[i].CLEARED,
                                        BROK_VALU8: req.body.data[i].BROK_VALU8,
                                        TD_POP: Number(req.body.data[i].TD_POP),
                                        INVSTATE: req.body.data[i].INVSTATE,
                                        STAMPDUTY: req.body.data[i].STAMPDUTY,
                                        USER_ID: uniquenum,
                                    }
                                },
                                {
                                    "upsert": true
                                },
                                function (err, object) {
                                    if (err) {
                                        //  console.warn(err.message);  // returns error if no matching object found
                                    } else {
                                        console.log("object=", object);
                                    }
                                })
                        }
                    } else {
                        console.log("yyyyyyyyyyyyyyyyyyyy=");
                    }
                }
            });
        } catch (err) {
            console.log(e)
        }

        resdata = {
            status: 200,
            message: 'Data uploaded',
        }
        res.json(resdata);
        return resdata;
    } catch (error) {
        console.log(`Error found. ${error}`)
    }
})

app.post("/api/addfoliokarvy", async function (req, res) {
    try {
        console.log(req.body)
        var current = new Date();
        const timeStamp = new Date(Date.UTC(current.getFullYear(),
            current.getMonth(), current.getDate(), current.getHours(),
            current.getMinutes(), current.getSeconds(), current.getMilliseconds()));
        var uniquenum = Math.floor(100000 + Math.random() * 900000);
        //     console.log(req.body.name, req.body.pan)
        // console.log(addfoliokarvy);
        var users = mongoose.model('user_master', usermaster, 'user_master')
        try {
            var user = new users({
                NAME: req.body.name,
                PAN: req.body.pan,
                DOCNO: uniquenum,
                ADDRESS1: req.body.add1,
                ADDRESS2: req.body.add2,
                ADDRESS3: req.body.add3,
                CREATEDATE: timeStamp,
            });

            user.save(function (err, data) {
                if (err) {
                    console.warn(err.message);
                }
                else {
                    console.log("line==9547", data._doc);
                    console.log(typeof parseInt(data._doc.DOCNO), typeof uniquenum);
                    if (parseInt(uniquenum) === parseInt(data._doc.DOCNO)) {
                        for (i = 0; i < req.body.data.length; i++) {
                            console.log(req.body.data[i].PRCODE)
                            foliok.updateMany(
                                { ACNO: req.body.data[i].ACNO, PRCODE: req.body.data[i].PRCODE, BNKACNO: req.body.data[i].BNKACNO, PANGNO: (req.body.data[i].PANGNO).toUpperCase() },
                                {
                                    $set:
                                    {
                                        PRCODE: req.body.data[i].PRCODE,
                                        FUND: req.body.data[i].FUND,
                                        ACNO: req.body.data[i].ACNO,
                                        FUNDDESC: req.body.data[i].FUNDDESC,
                                        INVNAME: req.body.data[i].INVNAME,
                                        JTNAME1: req.body.data[i].JTNAME1,
                                        JTNAME2: req.body.data[i].JTNAME2,
                                        ADD1: req.body.data[i].ADD1,
                                        ADD2: req.body.data[i].ADD2,
                                        ADD3: req.body.data[i].ADD3,
                                        CITY: req.body.data[i].CITY,
                                        PIN: req.body.data[i].PIN,
                                        STATE: req.body.data[i].STATE,
                                        COUNTRY: req.body.data[i].COUNTRY,
                                        TPIN: req.body.data[i].TPIN,
                                        DOB: req.body.data[i].DOB,
                                        FNAME: req.body.data[i].FNAME,
                                        MNAME: req.body.data[i].MNAME,
                                        RPHONE: req.body.data[i].RPHONE,
                                        PH_RES1: req.body.data[i].PH_RES1,
                                        PH_RES2: req.body.data[i].PH_RES2,
                                        OPHONE: req.body.data[i].OPHONE,
                                        PH_OFF1: req.body.data[i].PH_OFF1,
                                        PH_OFF2: req.body.data[i].PH_OFF2,
                                        FAX: req.body.data[i].FAX,
                                        FAX_OFF: req.body.data[i].FAX_OFF,
                                        STATUS: req.body.data[i].STATUS,
                                        OCCPN: req.body.data[i].OCCPN,
                                        EMAIL: req.body.data[i].EMAIL,
                                        BNKACNO: req.body.data[i].BNKACNO,
                                        BNAME: req.body.data[i].BNAME,
                                        BNKACTYPE: req.body.data[i].BNKACTYPE,
                                        BRANCH: req.body.data[i].BRANCH,
                                        BADD1: req.body.data[i].BADD1,
                                        BADD2: req.body.data[i].BADD2,
                                        BADD3: req.body.data[i].BADD3,
                                        BCITY: req.body.data[i].BCITY,
                                        BPHONE: req.body.data[i].BPHONE,
                                        BSTATE: req.body.data[i].BSTATE,
                                        BCOUNTRY: req.body.data[i].BCOUNTRY,
                                        INV_ID: req.body.data[i].INV_ID,
                                        BROKCODE: req.body.data[i].BROKCODE,
                                        CRDATE: moment(new Date(req.body.data[i].CRDATE)).format("YYYY-MM-DD"),
                                        CRTIME: req.body.data[i].CRTIME,
                                        PANGNO: (req.body.data[i].PANGNO).toUpperCase(),
                                        MOBILE: req.body.data[i].MOBILE,
                                        DIVOPT: req.body.data[i].DIVOPT,
                                        OCCP_DESC: req.body.data[i].OCCP_DESC,
                                        MODEOFHOLD: req.body.data[i].MODEOFHOLD,
                                        MAPIN: req.body.data[i].MAPIN,
                                        PAN2: req.body.data[i].PAN2,
                                        PAN3: req.body.data[i].PAN3,
                                        IMCATEGORY: req.body.data[i].IMCATEGORY,
                                        GUARDIANN0: req.body.data[i].GUARDIANN0,
                                        NOMINEE: req.body.data[i].NOMINEE,
                                        CLIENTID: req.body.data[i].CLIENTID,
                                        STATUSDESC: req.body.data[i].STATUSDESC,
                                        IFSC: req.body.data[i].IFSC,
                                        NOMINEE2: req.body.data[i].NOMINEE2,
                                        NOMINEE3: req.body.data[i].NOMINEE3,
                                        KYC1FLAG: req.body.data[i].KYC1FLAG,
                                        KYC2FLAG: req.body.data[i].KYC2FLAG,
                                        KYC3FLAG: req.body.data[i].KYC3FLAG,
                                        GUARDPANNO: req.body.data[i].GUARDPANNO,
                                        LASTUPDAT1: moment(new Date(req.body.data[i].LASTUPDAT1)).format("YYYY-MM-DD"),
                                        NOMINEEREL: req.body.data[i].NOMINEEREL,
                                        NOMINEE2R2: req.body.data[i].NOMINEE2R2,
                                        NOMINEE3R3: req.body.data[i].NOMINEE3R3,
                                        ADRH1INFO: req.body.data[i].ADRH1INFO,
                                        ADRH2INFO: req.body.data[i].ADRH2INFO,
                                        ADRH3NFO: req.body.data[i].ADRH3NFO,
                                        ADRGINFO: req.body.data[i].ADRGINFO,
                                        USER_ID: uniquenum,
                                    }
                                },
                                {
                                    "upsert": true
                                },
                                function (err, object) {
                                    if (err) {
                                        //  console.warn(err.message);  // returns error if no matching object found
                                    } else {
                                        console.log("object=", object);
                                    }
                                })
                        }
                    } else {
                        console.log("yyyyyyyyyyyyyyyyyyyy=");
                    }
                }
            });
        } catch (err) {
            console.log(e)
        }

        resdata = {
            status: 200,
            message: 'Data uploaded',
        }
        res.json(resdata);
        return resdata;
    } catch (error) {
        console.log(`Error found. ${error}`)
    }
})

app.post("/api/addfoliocams", async function (req, res) {
    try {

        var current = new Date();
        const timeStamp = new Date(Date.UTC(current.getFullYear(),
            current.getMonth(), current.getDate(), current.getHours(),
            current.getMinutes(), current.getSeconds(), current.getMilliseconds()));
        var uniquenum = Math.floor(100000 + Math.random() * 900000);
        console.log(req.body.name, req.body.pan)
        console.log(uniquenum);
        var users = mongoose.model('user_master', usermaster, 'user_master')
        try {
            var user = new users({
                NAME: req.body.name,
                PAN: req.body.pan,
                DOCNO: uniquenum,
                ADDRESS1: req.body.add1,
                ADDRESS2: req.body.add2,
                ADDRESS3: req.body.add3,
                CREATEDATE: timeStamp,
            });

            user.save(function (err, data) {
                if (err) {
                    console.warn(err.message);
                }
                else {
                    console.log(data._doc);
                    console.log(typeof parseInt(data._doc.DOCNO), typeof uniquenum);
                    if (parseInt(uniquenum) === parseInt(data._doc.DOCNO)) {
                        for (i = 0; i < req.body.data.length; i++) {
                            console.log(req.body.data[i].FOLIOCHK)
                            folioc.updateMany(
                                { FOLIOCHK: req.body.data[i].FOLIOCHK, AC_NO: req.body.data[i].AC_NO, PRODUCT: req.body.data[i].PRODUCT, FOLIO_DATE: moment(new Date(req.body.data[i].FOLIO_DATE)).format("YYYY-MM-DD") },
                                {
                                    $set:
                                    {
                                        FOLIOCHK: req.body.data[i].FOLIOCHK,
                                        INV_NAME: req.body.data[i].INV_NAME,
                                        ADDRESS1: req.body.data[i].ADDRESS1,
                                        ADDRESS2: req.body.data[i].ADDRESS2,
                                        ADDRESS3: req.body.data[i].ADDRESS3,
                                        CITY: req.body.data[i].CITY,
                                        PINCODE: req.body.data[i].PINCODE,
                                        PRODUCT: req.body.data[i].PRODUCT,
                                        SCH_NAME: req.body.data[i].SCH_NAME,
                                        REP_DATE: moment(new Date(req.body.data[i].REP_DATE)).format("YYYY-MM-DD"),
                                        CLOS_BAL: Number(req.body.data[i].CLOS_BAL),
                                        RUPEE_BAL: Number(req.body.data[i].RUPEE_BAL),
                                        JNT_NAME1: req.body.data[i].JNT_NAME1,
                                        JNT_NAME2: req.body.data[i].JNT_NAME2,
                                        PHONE_OFF: req.body.data[i].PHONE_OFF,
                                        PHONE_RES: req.body.data[i].PHONE_RES,
                                        EMAIL: req.body.data[i].EMAIL,
                                        HOLDING_NA: req.body.data[i].HOLDING_NA,
                                        UIN_NO: req.body.data[i].UIN_NO,
                                        PAN_NO: (req.body.data[i].PAN_NO).toUpperCase(),
                                        JOINT1_PAN: req.body.data[i].JOINT1_PAN,
                                        JOINT2_PAN: req.body.data[i].JOINT2_PAN,
                                        GUARD_PAN: req.body.data[i].GUARD_PAN,
                                        TAX_STATUS: req.body.data[i].TAX_STATUS,
                                        BROKER_COD: req.body.data[i].BROKER_COD,
                                        SUBBROKER: req.body.data[i].SUBBROKER,
                                        REINV_FLAG: req.body.data[i].REINV_FLAG,
                                        BANK_NAME: req.body.data[i].BANK_NAME,
                                        BRANCH: req.body.data[i].BRANCH,
                                        AC_TYPE: req.body.data[i].AC_TYPE,
                                        AC_NO: req.body.data[i].AC_NO,
                                        B_ADDRESS1: req.body.data[i].B_ADDRESS1,
                                        B_ADDRESS2: req.body.data[i].B_ADDRESS2,
                                        B_ADDRESS3: req.body.data[i].B_ADDRESS3,
                                        B_CITY: req.body.data[i].B_CITY,
                                        B_PINCODE: req.body.data[i].B_PINCODE,
                                        INV_DOB: req.body.data[i].INV_DOB,
                                        MOBILE_NO: req.body.data[i].MOBILE_NO,
                                        OCCUPATION: req.body.data[i].OCCUPATION,
                                        INV_IIN: req.body.data[i].INV_IIN,
                                        NOM_NAME: req.body.data[i].NOM_NAME,
                                        RELATION: req.body.data[i].RELATION,
                                        NOM_ADDR1: req.body.data[i].NOM_ADDR1,
                                        NOM_ADDR2: req.body.data[i].NOM_ADDR2,
                                        NOM_ADDR3: req.body.data[i].NOM_ADDR3,
                                        NOM_CITY: req.body.data[i].NOM_CITY,
                                        NOM_STATE: req.body.data[i].NOM_STATE,
                                        NOM_PINCOD: req.body.data[i].NOM_PINCOD,
                                        NOM_PH_OFF: req.body.data[i].NOM_PH_OFF,
                                        NOM_PH_RES: req.body.data[i].NOM_PH_RES,
                                        NOM_EMAIL: req.body.data[i].NOM_EMAIL,
                                        NOM_PERCEN: req.body.data[i].NOM_PERCEN,
                                        NOM2_NAME: req.body.data[i].NOM2_NAME,
                                        NOM2_RELAT: req.body.data[i].NOM2_RELAT,
                                        NOM2_ADDR1: req.body.data[i].NOM2_ADDR1,
                                        NOM2_ADDR2: req.body.data[i].NOM2_ADDR2,
                                        NOM2_ADDR3: req.body.data[i].NOM2_ADDR3,
                                        NOM2_CITY: req.body.data[i].NOM2_CITY,
                                        NOM2_STATE: req.body.data[i].NOM2_STATE,
                                        NOM2_PINCO: req.body.data[i].NOM2_PINCO,
                                        NOM2_PH_OF: req.body.data[i].NOM2_PH_OF,
                                        NOM2_PH_RE: req.body.data[i].NOM2_PH_RE,
                                        NOM2_EMAIL: req.body.data[i].NOM2_EMAIL,
                                        NOM2_PERCE: req.body.data[i].NOM2_PERCE,
                                        NOM3_NAME: req.body.data[i].NOM3_NAME,
                                        NOM3_RELAT: req.body.data[i].NOM3_RELAT,
                                        NOM3_ADDR1: req.body.data[i].NOM3_ADDR1,
                                        NOM3_ADDR2: req.body.data[i].NOM3_ADDR2,
                                        NOM3_ADDR3: req.body.data[i].NOM3_ADDR3,
                                        NOM3_CITY: req.body.data[i].NOM3_CITY,
                                        NOM3_STATE: req.body.data[i].NOM3_STATE,
                                        NOM3_PINCO: req.body.data[i].NOM3_PINCO,
                                        NOM3_PH_OF: req.body.data[i].NOM3_PH_OF,
                                        NOM3_PH_RE: req.body.data[i].NOM3_PH_RE,
                                        NOM3_EMAIL: req.body.data[i].NOM3_EMAIL,
                                        NOM3_PERCE: req.body.data[i].NOM3_PERCE,
                                        IFSC_CODE: req.body.data[i].IFSC_CODE,
                                        DP_ID: req.body.data[i].DP_ID,
                                        DEMAT: req.body.data[i].DEMAT,
                                        GUARD_NAME: req.body.data[i].GUARD_NAME,
                                        BROKCODE: req.body.data[i].BROKCODE,
                                        FOLIO_DATE: moment(new Date(req.body.data[i].FOLIO_DATE)).format("YYYY-MM-DD"),
                                        AADHAAR: req.body.data[i].AADHAAR,
                                        TPA_LINKED: req.body.data[i].TPA_LINKED,
                                        FH_CKYC_NO: req.body.data[i].FH_CKYC_NO,
                                        JH1_CKYC: req.body.data[i].JH1_CKYC,
                                        JH2_CKYC: req.body.data[i].JH2_CKYC,
                                        G_CKYC_NO: req.body.data[i].G_CKYC_NO,
                                        JH1_DOB: req.body.data[i].JH1_DOB,
                                        JH2_DOB: req.body.data[i].JH2_DOB,
                                        GUARDIAN_D: req.body.data[i].GUARDIAN_D,
                                        AMC_CODE: req.body.data[i].AMC_CODE,
                                        GST_STATE_: req.body.data[i].GST_STATE_,
                                        FOLIO_OLD: req.body.data[i].FOLIO_OLD,
                                        SCHEME_FOL: req.body.data[i].SCHEME_FOL,
                                        USER_ID: uniquenum,
                                    }
                                },
                                {
                                    "upsert": true
                                },
                                function (err, object) {
                                    if (err) {
                                        //  console.warn(err.message);  // returns error if no matching object found
                                    } else {
                                        console.log("object=", object);
                                    }
                                })
                        }
                    } else {
                        console.log("yyyyyyyyyyyyyyyyyyyy=");
                    }
                }
            });
        } catch (err) {
            console.log(e)
        }

        resdata = {
            status: 200,
            message: 'Data uploaded',
        }
        res.json(resdata);
        return resdata;
    } catch (error) {
        console.log(`Error found. ${error}`)
    }
})
app.post("/api/savefoliokarvytest", async function (req, res) {
    try {
        if (req.body.pan === "") {
            //   console.log("pan1=", req.body.pan, "name=", req.body.name)
            for (var i = 0; i < req.body.data.length; i++) {
                foliok.updateMany(
                    { ACNO: req.body.data[i].ACNO, PRCODE: req.body.data[i].PRCODE, BNKACNO: req.body.data[i].BNKACNO, PANGNO: (req.body.data[i].PANGNO).toUpperCase() },
                    {
                        $set:
                        {
                            PRCODE: req.body.data[i].PRCODE,
                            FUND: req.body.data[i].FUND,
                            ACNO: req.body.data[i].ACNO,
                            FUNDDESC: req.body.data[i].FUNDDESC,
                            INVNAME: req.body.name,
                            JTNAME1: req.body.data[i].JTNAME1,
                            JTNAME2: req.body.data[i].JTNAME2,
                            ADD1: req.body.add1,
                            ADD2: req.body.add2,
                            ADD3: req.body.add3,
                            CITY: req.body.data[i].CITY,
                            PIN: req.body.data[i].PIN,
                            STATE: req.body.data[i].STATE,
                            COUNTRY: req.body.data[i].COUNTRY,
                            TPIN: req.body.data[i].TPIN,
                            DOB: req.body.data[i].DOB,
                            FNAME: req.body.data[i].FNAME,
                            MNAME: req.body.data[i].MNAME,
                            RPHONE: req.body.data[i].RPHONE,
                            PH_RES1: req.body.data[i].PH_RES1,
                            PH_RES2: req.body.data[i].PH_RES2,
                            OPHONE: req.body.data[i].OPHONE,
                            PH_OFF1: req.body.data[i].PH_OFF1,
                            PH_OFF2: req.body.data[i].PH_OFF2,
                            FAX: req.body.data[i].FAX,
                            FAX_OFF: req.body.data[i].FAX_OFF,
                            STATUS: req.body.data[i].STATUS,
                            OCCPN: req.body.data[i].OCCPN,
                            EMAIL: req.body.data[i].EMAIL,
                            BNKACNO: req.body.data[i].BNKACNO,
                            BNAME: req.body.data[i].BNAME,
                            BNKACTYPE: req.body.data[i].BNKACTYPE,
                            BRANCH: req.body.data[i].BRANCH,
                            BADD1: req.body.data[i].BADD1,
                            BADD2: req.body.data[i].BADD2,
                            BADD3: req.body.data[i].BADD3,
                            BCITY: req.body.data[i].BCITY,
                            BPHONE: req.body.data[i].BPHONE,
                            BSTATE: req.body.data[i].BSTATE,
                            BCOUNTRY: req.body.data[i].BCOUNTRY,
                            INV_ID: req.body.data[i].INV_ID,
                            BROKCODE: req.body.data[i].BROKCODE,
                            CRDATE: moment(new Date(req.body.data[i].CRDATE)).format("YYYY-MM-DD"),
                            CRTIME: req.body.data[i].CRTIME,
                            PANGNO: (req.body.data[i].PANGNO).toUpperCase(),
                            MOBILE: req.body.data[i].MOBILE,
                            DIVOPT: req.body.data[i].DIVOPT,
                            OCCP_DESC: req.body.data[i].OCCP_DESC,
                            MODEOFHOLD: req.body.data[i].MODEOFHOLD,
                            MAPIN: req.body.data[i].MAPIN,
                            PAN2: req.body.data[i].PAN2,
                            PAN3: req.body.data[i].PAN3,
                            IMCATEGORY: req.body.data[i].IMCATEGORY,
                            GUARDIANN0: req.body.data[i].GUARDIANN0,
                            NOMINEE: req.body.data[i].NOMINEE,
                            CLIENTID: req.body.data[i].CLIENTID,
                            STATUSDESC: req.body.data[i].STATUSDESC,
                            IFSC: req.body.data[i].IFSC,
                            NOMINEE2: req.body.data[i].NOMINEE2,
                            NOMINEE3: req.body.data[i].NOMINEE3,
                            KYC1FLAG: req.body.data[i].KYC1FLAG,
                            KYC2FLAG: req.body.data[i].KYC2FLAG,
                            KYC3FLAG: req.body.data[i].KYC3FLAG,
                            GUARDPANNO: req.body.data[i].GUARDPANNO,
                            LASTUPDAT1: moment(new Date(req.body.data[i].LASTUPDAT1)).format("YYYY-MM-DD"),
                            NOMINEEREL: req.body.data[i].NOMINEEREL,
                            NOMINEE2R2: req.body.data[i].NOMINEE2R2,
                            NOMINEE3R3: req.body.data[i].NOMINEE3R3,
                            ADRH1INFO: req.body.data[i].ADRH1INFO,
                            ADRH2INFO: req.body.data[i].ADRH2INFO,
                            ADRH3NFO: req.body.data[i].ADRH3NFO,
                            ADRGINFO: req.body.data[i].ADRGINFO,
                            USER_ID: req.body.userid,
                        }
                    },
                    {
                        "upsert": true
                    },
                    function (err, object) {
                        if (err) {
                            //  console.warn(err.message);  // returns error if no matching object found
                        }
                    })

                // });
            }
        } else {
            // console.log("pan2=", req.body.pan)
            for (var i = 0; i < req.body.data.length; i++) {
                foliok.updateMany(
                    { ACNO: req.body.data[i].ACNO, PRCODE: req.body.data[i].PRCODE, BNKACNO: req.body.data[i].BNKACNO, PANGNO: (req.body.data[i].PANGNO).toUpperCase() },
                    {
                        $set:
                        {
                            PRCODE: req.body.data[i].PRCODE,
                            FUND: req.body.data[i].FUND,
                            ACNO: req.body.data[i].ACNO,
                            FUNDDESC: req.body.data[i].FUNDDESC,
                            INVNAME: req.body.name,
                            JTNAME1: req.body.data[i].JTNAME1,
                            JTNAME2: req.body.data[i].JTNAME2,
                            ADD1: req.body.add1,
                            ADD2: req.body.add2,
                            ADD3: req.body.add3,
                            CITY: req.body.data[i].CITY,
                            PIN: req.body.data[i].PIN,
                            STATE: req.body.data[i].STATE,
                            COUNTRY: req.body.data[i].COUNTRY,
                            TPIN: req.body.data[i].TPIN,
                            DOB: req.body.data[i].DOB,
                            FNAME: req.body.data[i].FNAME,
                            MNAME: req.body.data[i].MNAME,
                            RPHONE: req.body.data[i].RPHONE,
                            PH_RES1: req.body.data[i].PH_RES1,
                            PH_RES2: req.body.data[i].PH_RES2,
                            OPHONE: req.body.data[i].OPHONE,
                            PH_OFF1: req.body.data[i].PH_OFF1,
                            PH_OFF2: req.body.data[i].PH_OFF2,
                            FAX: req.body.data[i].FAX,
                            FAX_OFF: req.body.data[i].FAX_OFF,
                            STATUS: req.body.data[i].STATUS,
                            OCCPN: req.body.data[i].OCCPN,
                            EMAIL: req.body.data[i].EMAIL,
                            BNKACNO: req.body.data[i].BNKACNO,
                            BNAME: req.body.data[i].BNAME,
                            BNKACTYPE: req.body.data[i].BNKACTYPE,
                            BRANCH: req.body.data[i].BRANCH,
                            BADD1: req.body.data[i].BADD1,
                            BADD2: req.body.data[i].BADD2,
                            BADD3: req.body.data[i].BADD3,
                            BCITY: req.body.data[i].BCITY,
                            BPHONE: req.body.data[i].BPHONE,
                            BSTATE: req.body.data[i].BSTATE,
                            BCOUNTRY: req.body.data[i].BCOUNTRY,
                            INV_ID: req.body.data[i].INV_ID,
                            BROKCODE: req.body.data[i].BROKCODE,
                            CRDATE: moment(new Date(req.body.data[i].CRDATE)).format("YYYY-MM-DD"),
                            CRTIME: req.body.data[i].CRTIME,
                            PANGNO: (req.body.data[i].PANGNO).toUpperCase(),
                            MOBILE: req.body.data[i].MOBILE,
                            DIVOPT: req.body.data[i].DIVOPT,
                            OCCP_DESC: req.body.data[i].OCCP_DESC,
                            MODEOFHOLD: req.body.data[i].MODEOFHOLD,
                            MAPIN: req.body.data[i].MAPIN,
                            PAN2: req.body.data[i].PAN2,
                            PAN3: req.body.data[i].PAN3,
                            IMCATEGORY: req.body.data[i].IMCATEGORY,
                            GUARDIANN0: req.body.data[i].GUARDIANN0,
                            NOMINEE: req.body.data[i].NOMINEE,
                            CLIENTID: req.body.data[i].CLIENTID,
                            STATUSDESC: req.body.data[i].STATUSDESC,
                            IFSC: req.body.data[i].IFSC,
                            NOMINEE2: req.body.data[i].NOMINEE2,
                            NOMINEE3: req.body.data[i].NOMINEE3,
                            KYC1FLAG: req.body.data[i].KYC1FLAG,
                            KYC2FLAG: req.body.data[i].KYC2FLAG,
                            KYC3FLAG: req.body.data[i].KYC3FLAG,
                            GUARDPANNO: req.body.data[i].GUARDPANNO,
                            LASTUPDAT1: moment(new Date(req.body.data[i].LASTUPDAT1)).format("YYYY-MM-DD"),
                            NOMINEEREL: req.body.data[i].NOMINEEREL,
                            NOMINEE2R2: req.body.data[i].NOMINEE2R2,
                            NOMINEE3R3: req.body.data[i].NOMINEE3R3,
                            ADRH1INFO: req.body.data[i].ADRH1INFO,
                            ADRH2INFO: req.body.data[i].ADRH2INFO,
                            ADRH3NFO: req.body.data[i].ADRH3NFO,
                            ADRGINFO: req.body.data[i].ADRGINFO,
                            USER_ID: req.body.userid,
                        }
                    },
                    {
                        "upsert": true
                    },
                    function (err, object) {
                        if (err) {
                            //  console.warn(err.message);  // returns error if no matching object found
                        }
                    })
            }
        }
        resdata = {
            status: 200,
            message: 'Data uploaded',
        }
        res.json(resdata);
        return resdata;
    } catch (error) {
        console.log(`Error found. ${error}`)
    }
})

app.post("/api/savekarvytest", async function (req, res) {
    try {
        if (req.body.pan === "") {
            console.log("pan1=", req.body.pan, "name=", req.body.name)
            for (var i = 0; i < req.body.data.length; i++) {
                transk.updateMany(
                    { TD_TRNO: req.body.data[i].TD_TRNO, UNQNO: req.body.data[i].UNQNO, NEWUNQNO: req.body.data[i].NEWUNQNO, TD_ACNO: req.body.data[i].TD_ACNO, FMCODE: req.body.data[i].FMCODE, },
                    {
                        $set:
                        {
                            FMCODE: req.body.data[i].FMCODE,
                            TD_FUND: req.body.data[i].TD_FUND,
                            TD_SCHEME: req.body.data[i].TD_SCHEME,
                            TD_PLAN: req.body.data[i].TD_PLAN,
                            TD_ACNO: req.body.data[i].TD_ACNO,
                            SCHPLN: req.body.data[i].SCHPLN,
                            DIVOPT: req.body.data[i].DIVOPT,
                            FUNDDESC: req.body.data[i].FUNDDESC,
                            TD_PURRED: req.body.data[i].TD_PURRED,
                            TD_TRNO: req.body.data[i].TD_TRNO,
                            SMCODE: req.body.data[i].SMCODE,
                            CHQNO: req.body.data[i].CHQNO,
                            INVNAME: req.body.name,
                            TRNMODE: req.body.data[i].TRNMODE,
                            TRNSTAT: req.body.data[i].TRNSTAT,
                            TD_BRANCH: req.body.data[i].TD_BRANCH,
                            ISCTRNO: req.body.data[i].ISCTRNO,
                            TD_TRDT: moment(new Date(req.body.data[i].TD_TRDT)).format("YYYY-MM-DD"),
                            TD_PRDT: moment(new Date(req.body.data[i].TD_PRDT)).format("YYYY-MM-DD"),
                            TD_UNITS: Number(req.body.data[i].TD_UNITS),
                            TD_AMT: Number(req.body.data[i].TD_AMT),
                            TD_AGENT: req.body.data[i].TD_AGENT,
                            TD_BROKER: req.body.data[i].TD_BROKER,
                            BROKPER: req.body.data[i].BROKPER,
                            BROKCOMM: req.body.data[i].BROKCOMM,
                            INVID: req.body.data[i].INVID,
                            CRDATE: moment(new Date(req.body.data[i].CRDATE)).format("YYYY-MM-DD"),
                            CRTIME: req.body.data[i].CRTIME,
                            TRNSUB: req.body.data[i].TRNSUB,
                            TD_APPNO: req.body.data[i].TD_APPNO,
                            UNQNO: req.body.data[i].UNQNO,
                            TRDESC: req.body.data[i].TRDESC,
                            TD_TRTYPE: req.body.data[i].TD_TRTYPE,
                            NAVDATE: moment(new Date(req.body.data[i].NAVDATE)).format("YYYY-MM-DD"),
                            PORTDT: moment(new Date(req.body.data[i].PORTDT)).format("YYYY-MM-DD"),
                            ASSETTYPE: req.body.data[i].ASSETTYPE,
                            SUBTRTYPE: req.body.data[i].SUBTRTYPE,
                            CITYCATEG0: req.body.data[i].CITYCATEG0,
                            EUIN: req.body.data[i].EUIN,
                            TRCHARGES: req.body.data[i].TRCHARGES,
                            CLIENTID: req.body.data[i].CLIENTID,
                            DPID: req.body.data[i].DPID,
                            STT: req.body.data[i].STT,
                            IHNO: req.body.data[i].IHNO,
                            BRANCHCODE: req.body.data[i].BRANCHCODE,
                            INWARDNUM1: req.body.data[i].INWARDNUM1,
                            PAN1: req.body.data[i].PAN1,
                            PAN2: req.body.data[i].PAN2,
                            PAN3: req.body.data[i].PAN3,
                            TDSAMOUNT: req.body.data[i].TDSAMOUNT,
                            CHQDATE: req.body.data[i].CHQDATE,
                            CHQBANK: req.body.data[i].CHQBANK,
                            TRFLAG: req.body.data[i].TRFLAG,
                            LOAD1: req.body.data[i].LOAD1,
                            BROK_ENTDT: req.body.data[i].BROK_ENTDT,
                            NCTREMARKS: req.body.data[i].NCTREMARKS,
                            PRCODE1: req.body.data[i].PRCODE1,
                            STATUS: req.body.data[i].STATUS,
                            SCHEMEISIN: req.body.data[i].SCHEMEISIN,
                            TD_NAV: Number(req.body.data[i].TD_NAV),
                            INSAMOUNT: req.body.data[i].INSAMOUNT,
                            REJTRNOOR2: req.body.data[i].REJTRNOOR2,
                            EVALID: req.body.data[i].EVALID,
                            EDECLFLAG: req.body.data[i].EDECLFLAG,
                            SUBARNCODE: req.body.data[i].SUBARNCODE,
                            ATMCARDRE3: req.body.data[i].ATMCARDRE3,
                            ATMCARDST4: req.body.data[i].ATMCARDST4,
                            SCH1: req.body.data[i].SCH1,
                            PLN1: req.body.data[i].PLN1,
                            TD_TRXNMO5: req.body.data[i].TD_TRXNMO5,
                            NEWUNQNO: req.body.data[i].NEWUNQNO,
                            SIPREGDT: req.body.data[i].SIPREGDT,
                            SIPREGSLNO: req.body.data[i].SIPREGSLNO,
                            DIVPER: req.body.data[i].DIVPER,
                            CAN: req.body.data[i].CAN,
                            EXCHORGTR6: req.body.data[i].EXCHORGTR6,
                            ELECTRXNF7: req.body.data[i].ELECTRXNF7,
                            CLEARED: req.body.data[i].CLEARED,
                            BROK_VALU8: req.body.data[i].BROK_VALU8,
                            TD_POP: Number(req.body.data[i].TD_POP),
                            INVSTATE: req.body.data[i].INVSTATE,
                            STAMPDUTY: req.body.data[i].STAMPDUTY,
                            USER_ID: req.body.userid,
                        }
                    },
                    {
                        "upsert": true
                    },
                    function (err, object) {
                        if (err) {
                            //  console.warn(err.message);  // returns error if no matching object found
                        }
                    })

                // });
            }
        } else {
            console.log("pan2=", req.body.pan, req.body.name)
            for (var i = 0; i < req.body.data.length; i++) {
                transk.updateMany(
                    { TD_TRNO: req.body.data[i].TD_TRNO, UNQNO: req.body.data[i].UNQNO, NEWUNQNO: req.body.data[i].NEWUNQNO, TD_ACNO: req.body.data[i].TD_ACNO, FMCODE: req.body.data[i].FMCODE, TRFLAG: req.body.data[i].TRFLAG },
                    {
                        $set:
                        {
                            FMCODE: req.body.data[i].FMCODE,
                            TD_FUND: req.body.data[i].TD_FUND,
                            TD_SCHEME: req.body.data[i].TD_SCHEME,
                            TD_PLAN: req.body.data[i].TD_PLAN,
                            TD_ACNO: req.body.data[i].TD_ACNO,
                            SCHPLN: req.body.data[i].SCHPLN,
                            DIVOPT: req.body.data[i].DIVOPT,
                            FUNDDESC: req.body.data[i].FUNDDESC,
                            TD_PURRED: req.body.data[i].TD_PURRED,
                            TD_TRNO: req.body.data[i].TD_TRNO,
                            SMCODE: req.body.data[i].SMCODE,
                            CHQNO: req.body.data[i].CHQNO,
                            INVNAME: req.body.name,
                            TRNMODE: req.body.data[i].TRNMODE,
                            TRNSTAT: req.body.data[i].TRNSTAT,
                            TD_BRANCH: req.body.data[i].TD_BRANCH,
                            ISCTRNO: req.body.data[i].ISCTRNO,
                            TD_TRDT: moment(new Date(req.body.data[i].TD_TRDT)).format("YYYY-MM-DD"),
                            TD_PRDT: moment(new Date(req.body.data[i].TD_PRDT)).format("YYYY-MM-DD"),
                            TD_UNITS: Number(req.body.data[i].TD_UNITS),
                            TD_AMT: Number(req.body.data[i].TD_AMT),
                            TD_AGENT: req.body.data[i].TD_AGENT,
                            TD_BROKER: req.body.data[i].TD_BROKER,
                            BROKPER: req.body.data[i].BROKPER,
                            BROKCOMM: req.body.data[i].BROKCOMM,
                            INVID: req.body.data[i].INVID,
                            CRDATE: moment(new Date(req.body.data[i].CRDATE)).format("YYYY-MM-DD"),
                            CRTIME: req.body.data[i].CRTIME,
                            TRNSUB: req.body.data[i].TRNSUB,
                            TD_APPNO: req.body.data[i].TD_APPNO,
                            UNQNO: req.body.data[i].UNQNO,
                            TRDESC: req.body.data[i].TRDESC,
                            TD_TRTYPE: req.body.data[i].TD_TRTYPE,
                            NAVDATE: moment(new Date(req.body.data[i].NAVDATE)).format("YYYY-MM-DD"),
                            PORTDT: moment(new Date(req.body.data[i].PORTDT)).format("YYYY-MM-DD"),
                            ASSETTYPE: req.body.data[i].ASSETTYPE,
                            SUBTRTYPE: req.body.data[i].SUBTRTYPE,
                            CITYCATEG0: req.body.data[i].CITYCATEG0,
                            EUIN: req.body.data[i].EUIN,
                            TRCHARGES: req.body.data[i].TRCHARGES,
                            CLIENTID: req.body.data[i].CLIENTID,
                            DPID: req.body.data[i].DPID,
                            STT: req.body.data[i].STT,
                            IHNO: req.body.data[i].IHNO,
                            BRANCHCODE: req.body.data[i].BRANCHCODE,
                            INWARDNUM1: req.body.data[i].INWARDNUM1,
                            PAN1: req.body.data[i].PAN1,
                            PAN2: req.body.data[i].PAN2,
                            PAN3: req.body.data[i].PAN3,
                            TDSAMOUNT: req.body.data[i].TDSAMOUNT,
                            CHQDATE: req.body.data[i].CHQDATE,
                            CHQBANK: req.body.data[i].CHQBANK,
                            TRFLAG: req.body.data[i].TRFLAG,
                            LOAD1: req.body.data[i].LOAD1,
                            BROK_ENTDT: req.body.data[i].BROK_ENTDT,
                            NCTREMARKS: req.body.data[i].NCTREMARKS,
                            PRCODE1: req.body.data[i].PRCODE1,
                            STATUS: req.body.data[i].STATUS,
                            SCHEMEISIN: req.body.data[i].SCHEMEISIN,
                            TD_NAV: Number(req.body.data[i].TD_NAV),
                            INSAMOUNT: req.body.data[i].INSAMOUNT,
                            REJTRNOOR2: req.body.data[i].REJTRNOOR2,
                            EVALID: req.body.data[i].EVALID,
                            EDECLFLAG: req.body.data[i].EDECLFLAG,
                            SUBARNCODE: req.body.data[i].SUBARNCODE,
                            ATMCARDRE3: req.body.data[i].ATMCARDRE3,
                            ATMCARDST4: req.body.data[i].ATMCARDST4,
                            SCH1: req.body.data[i].SCH1,
                            PLN1: req.body.data[i].PLN1,
                            TD_TRXNMO5: req.body.data[i].TD_TRXNMO5,
                            NEWUNQNO: req.body.data[i].NEWUNQNO,
                            SIPREGDT: req.body.data[i].SIPREGDT,
                            SIPREGSLNO: req.body.data[i].SIPREGSLNO,
                            DIVPER: req.body.data[i].DIVPER,
                            CAN: req.body.data[i].CAN,
                            EXCHORGTR6: req.body.data[i].EXCHORGTR6,
                            ELECTRXNF7: req.body.data[i].ELECTRXNF7,
                            CLEARED: req.body.data[i].CLEARED,
                            BROK_VALU8: req.body.data[i].BROK_VALU8,
                            TD_POP: Number(req.body.data[i].TD_POP),
                            INVSTATE: req.body.data[i].INVSTATE,
                            STAMPDUTY: req.body.data[i].STAMPDUTY,
                            USER_ID: req.body.userid,
                        }
                    },
                    {
                        "upsert": true
                    },
                    function (err, object) {
                        if (err) {
                            //  console.warn(err.message);  // returns error if no matching object found
                        }
                    })
            }
        }
        resdata = {
            status: 200,
            message: 'Data uploaded',
        }
        res.json(resdata);
        return resdata;
    } catch (error) {
        console.log(`Error found. ${error}`)
    }
})

app.post("/api/savefoliocamstest", async function (req, res) {
    try {
        if (req.body.pan === "") {
            // console.log("pan1=", req.body.pan, "name=", req.body.name)
            // console.log("if length=",req.body.data.length)
            for (var i = 0; i < req.body.data.length; i++) {
                folioc.updateMany(
                    { FOLIOCHK: req.body.data[i].FOLIOCHK, AC_NO: req.body.data[i].AC_NO, PRODUCT: req.body.data[i].PRODUCT, FOLIO_DATE: moment(new Date(req.body.data[i].FOLIO_DATE)).format("YYYY-MM-DD") },
                    {
                        $set:
                        {
                            FOLIOCHK: req.body.data[i].FOLIOCHK,
                            INV_NAME: req.body.name,
                            ADDRESS1: req.body.add1,
                            ADDRESS2: req.body.add2,
                            ADDRESS3: req.body.add3,
                            CITY: req.body.data[i].CITY,
                            PINCODE: req.body.data[i].PINCODE,
                            PRODUCT: req.body.data[i].PRODUCT,
                            SCH_NAME: req.body.data[i].SCH_NAME,
                            REP_DATE: moment(new Date(req.body.data[i].REP_DATE)).format("YYYY-MM-DD"),
                            CLOS_BAL: Number(req.body.data[i].CLOS_BAL),
                            RUPEE_BAL: Number(req.body.data[i].RUPEE_BAL),
                            JNT_NAME1: req.body.data[i].JNT_NAME1,
                            JNT_NAME2: req.body.data[i].JNT_NAME2,
                            PHONE_OFF: req.body.data[i].PHONE_OFF,
                            PHONE_RES: req.body.data[i].PHONE_RES,
                            EMAIL: req.body.data[i].EMAIL,
                            HOLDING_NA: req.body.data[i].HOLDING_NA,
                            UIN_NO: req.body.data[i].UIN_NO,
                            PAN_NO: (req.body.data[i].PAN_NO).toUpperCase(),
                            JOINT1_PAN: req.body.data[i].JOINT1_PAN,
                            JOINT2_PAN: req.body.data[i].JOINT2_PAN,
                            GUARD_PAN: req.body.data[i].GUARD_PAN,
                            TAX_STATUS: req.body.data[i].TAX_STATUS,
                            BROKER_COD: req.body.data[i].BROKER_COD,
                            SUBBROKER: req.body.data[i].SUBBROKER,
                            REINV_FLAG: req.body.data[i].REINV_FLAG,
                            BANK_NAME: req.body.data[i].BANK_NAME,
                            BRANCH: req.body.data[i].BRANCH,
                            AC_TYPE: req.body.data[i].AC_TYPE,
                            AC_NO: req.body.data[i].AC_NO,
                            B_ADDRESS1: req.body.data[i].B_ADDRESS1,
                            B_ADDRESS2: req.body.data[i].B_ADDRESS2,
                            B_ADDRESS3: req.body.data[i].B_ADDRESS3,
                            B_CITY: req.body.data[i].B_CITY,
                            B_PINCODE: req.body.data[i].B_PINCODE,
                            INV_DOB: req.body.data[i].INV_DOB,
                            MOBILE_NO: req.body.data[i].MOBILE_NO,
                            OCCUPATION: req.body.data[i].OCCUPATION,
                            INV_IIN: req.body.data[i].INV_IIN,
                            NOM_NAME: req.body.data[i].NOM_NAME,
                            RELATION: req.body.data[i].RELATION,
                            NOM_ADDR1: req.body.data[i].NOM_ADDR1,
                            NOM_ADDR2: req.body.data[i].NOM_ADDR2,
                            NOM_ADDR3: req.body.data[i].NOM_ADDR3,
                            NOM_CITY: req.body.data[i].NOM_CITY,
                            NOM_STATE: req.body.data[i].NOM_STATE,
                            NOM_PINCOD: req.body.data[i].NOM_PINCOD,
                            NOM_PH_OFF: req.body.data[i].NOM_PH_OFF,
                            NOM_PH_RES: req.body.data[i].NOM_PH_RES,
                            NOM_EMAIL: req.body.data[i].NOM_EMAIL,
                            NOM_PERCEN: req.body.data[i].NOM_PERCEN,
                            NOM2_NAME: req.body.data[i].NOM2_NAME,
                            NOM2_RELAT: req.body.data[i].NOM2_RELAT,
                            NOM2_ADDR1: req.body.data[i].NOM2_ADDR1,
                            NOM2_ADDR2: req.body.data[i].NOM2_ADDR2,
                            NOM2_ADDR3: req.body.data[i].NOM2_ADDR3,
                            NOM2_CITY: req.body.data[i].NOM2_CITY,
                            NOM2_STATE: req.body.data[i].NOM2_STATE,
                            NOM2_PINCO: req.body.data[i].NOM2_PINCO,
                            NOM2_PH_OF: req.body.data[i].NOM2_PH_OF,
                            NOM2_PH_RE: req.body.data[i].NOM2_PH_RE,
                            NOM2_EMAIL: req.body.data[i].NOM2_EMAIL,
                            NOM2_PERCE: req.body.data[i].NOM2_PERCE,
                            NOM3_NAME: req.body.data[i].NOM3_NAME,
                            NOM3_RELAT: req.body.data[i].NOM3_RELAT,
                            NOM3_ADDR1: req.body.data[i].NOM3_ADDR1,
                            NOM3_ADDR2: req.body.data[i].NOM3_ADDR2,
                            NOM3_ADDR3: req.body.data[i].NOM3_ADDR3,
                            NOM3_CITY: req.body.data[i].NOM3_CITY,
                            NOM3_STATE: req.body.data[i].NOM3_STATE,
                            NOM3_PINCO: req.body.data[i].NOM3_PINCO,
                            NOM3_PH_OF: req.body.data[i].NOM3_PH_OF,
                            NOM3_PH_RE: req.body.data[i].NOM3_PH_RE,
                            NOM3_EMAIL: req.body.data[i].NOM3_EMAIL,
                            NOM3_PERCE: req.body.data[i].NOM3_PERCE,
                            IFSC_CODE: req.body.data[i].IFSC_CODE,
                            DP_ID: req.body.data[i].DP_ID,
                            DEMAT: req.body.data[i].DEMAT,
                            GUARD_NAME: req.body.data[i].GUARD_NAME,
                            BROKCODE: req.body.data[i].BROKCODE,
                            FOLIO_DATE: moment(new Date(req.body.data[i].FOLIO_DATE)).format("YYYY-MM-DD"),
                            AADHAAR: req.body.data[i].AADHAAR,
                            TPA_LINKED: req.body.data[i].TPA_LINKED,
                            FH_CKYC_NO: req.body.data[i].FH_CKYC_NO,
                            JH1_CKYC: req.body.data[i].JH1_CKYC,
                            JH2_CKYC: req.body.data[i].JH2_CKYC,
                            G_CKYC_NO: req.body.data[i].G_CKYC_NO,
                            JH1_DOB: req.body.data[i].JH1_DOB,
                            JH2_DOB: req.body.data[i].JH2_DOB,
                            GUARDIAN_D: req.body.data[i].GUARDIAN_D,
                            AMC_CODE: req.body.data[i].AMC_CODE,
                            GST_STATE_: req.body.data[i].GST_STATE_,
                            FOLIO_OLD: req.body.data[i].FOLIO_OLD,
                            SCHEME_FOL: req.body.data[i].SCHEME_FOL,
                            USER_ID: req.body.userid,
                        }
                    },
                    {
                        "upsert": true
                    },
                    function (err, object) {
                        if (err) {
                            //  console.warn(err.message);  // returns error if no matching object found
                        }
                    })

                // });
            }
        } else {
            // console.log("pan2=", req.body.data.pan)
            // console.log("else length=",req.body.data.length)
            for (var i = 0; i < req.body.data.length; i++) {
                folioc.updateMany(
                    { FOLIOCHK: req.body.data[i].FOLIOCHK, AC_NO: req.body.data[i].AC_NO, PRODUCT: req.body.data[i].PRODUCT, FOLIO_DATE: moment(new Date(req.body.data[i].FOLIO_DATE)).format("YYYY-MM-DD") },
                    {
                        $set:
                        {
                            FOLIOCHK: req.body.data[i].FOLIOCHK,
                            INV_NAME: req.body.name,
                            ADDRESS1: req.body.add1,
                            ADDRESS2: req.body.add2,
                            ADDRESS3: req.body.add3,
                            CITY: req.body.data[i].CITY,
                            PINCODE: req.body.data[i].PINCODE,
                            PRODUCT: req.body.data[i].PRODUCT,
                            SCH_NAME: req.body.data[i].SCH_NAME,
                            REP_DATE: moment(new Date(req.body.data[i].REP_DATE)).format("YYYY-MM-DD"),
                            CLOS_BAL: Number(req.body.data[i].CLOS_BAL),
                            RUPEE_BAL: Number(req.body.data[i].RUPEE_BAL),
                            JNT_NAME1: req.body.data[i].JNT_NAME1,
                            JNT_NAME2: req.body.data[i].JNT_NAME2,
                            PHONE_OFF: req.body.data[i].PHONE_OFF,
                            PHONE_RES: req.body.data[i].PHONE_RES,
                            EMAIL: req.body.data[i].EMAIL,
                            HOLDING_NA: req.body.data[i].HOLDING_NA,
                            UIN_NO: req.body.data[i].UIN_NO,
                            PAN_NO: (req.body.data[i].PAN_NO).toUpperCase(),
                            JOINT1_PAN: req.body.data[i].JOINT1_PAN,
                            JOINT2_PAN: req.body.data[i].JOINT2_PAN,
                            GUARD_PAN: req.body.data[i].GUARD_PAN,
                            TAX_STATUS: req.body.data[i].TAX_STATUS,
                            BROKER_COD: req.body.data[i].BROKER_COD,
                            SUBBROKER: req.body.data[i].SUBBROKER,
                            REINV_FLAG: req.body.data[i].REINV_FLAG,
                            BANK_NAME: req.body.data[i].BANK_NAME,
                            BRANCH: req.body.data[i].BRANCH,
                            AC_TYPE: req.body.data[i].AC_TYPE,
                            AC_NO: req.body.data[i].AC_NO,
                            B_ADDRESS1: req.body.data[i].B_ADDRESS1,
                            B_ADDRESS2: req.body.data[i].B_ADDRESS2,
                            B_ADDRESS3: req.body.data[i].B_ADDRESS3,
                            B_CITY: req.body.data[i].B_CITY,
                            B_PINCODE: req.body.data[i].B_PINCODE,
                            INV_DOB: req.body.data[i].INV_DOB,
                            MOBILE_NO: req.body.data[i].MOBILE_NO,
                            OCCUPATION: req.body.data[i].OCCUPATION,
                            INV_IIN: req.body.data[i].INV_IIN,
                            NOM_NAME: req.body.data[i].NOM_NAME,
                            RELATION: req.body.data[i].RELATION,
                            NOM_ADDR1: req.body.data[i].NOM_ADDR1,
                            NOM_ADDR2: req.body.data[i].NOM_ADDR2,
                            NOM_ADDR3: req.body.data[i].NOM_ADDR3,
                            NOM_CITY: req.body.data[i].NOM_CITY,
                            NOM_STATE: req.body.data[i].NOM_STATE,
                            NOM_PINCOD: req.body.data[i].NOM_PINCOD,
                            NOM_PH_OFF: req.body.data[i].NOM_PH_OFF,
                            NOM_PH_RES: req.body.data[i].NOM_PH_RES,
                            NOM_EMAIL: req.body.data[i].NOM_EMAIL,
                            NOM_PERCEN: req.body.data[i].NOM_PERCEN,
                            NOM2_NAME: req.body.data[i].NOM2_NAME,
                            NOM2_RELAT: req.body.data[i].NOM2_RELAT,
                            NOM2_ADDR1: req.body.data[i].NOM2_ADDR1,
                            NOM2_ADDR2: req.body.data[i].NOM2_ADDR2,
                            NOM2_ADDR3: req.body.data[i].NOM2_ADDR3,
                            NOM2_CITY: req.body.data[i].NOM2_CITY,
                            NOM2_STATE: req.body.data[i].NOM2_STATE,
                            NOM2_PINCO: req.body.data[i].NOM2_PINCO,
                            NOM2_PH_OF: req.body.data[i].NOM2_PH_OF,
                            NOM2_PH_RE: req.body.data[i].NOM2_PH_RE,
                            NOM2_EMAIL: req.body.data[i].NOM2_EMAIL,
                            NOM2_PERCE: req.body.data[i].NOM2_PERCE,
                            NOM3_NAME: req.body.data[i].NOM3_NAME,
                            NOM3_RELAT: req.body.data[i].NOM3_RELAT,
                            NOM3_ADDR1: req.body.data[i].NOM3_ADDR1,
                            NOM3_ADDR2: req.body.data[i].NOM3_ADDR2,
                            NOM3_ADDR3: req.body.data[i].NOM3_ADDR3,
                            NOM3_CITY: req.body.data[i].NOM3_CITY,
                            NOM3_STATE: req.body.data[i].NOM3_STATE,
                            NOM3_PINCO: req.body.data[i].NOM3_PINCO,
                            NOM3_PH_OF: req.body.data[i].NOM3_PH_OF,
                            NOM3_PH_RE: req.body.data[i].NOM3_PH_RE,
                            NOM3_EMAIL: req.body.data[i].NOM3_EMAIL,
                            NOM3_PERCE: req.body.data[i].NOM3_PERCE,
                            IFSC_CODE: req.body.data[i].IFSC_CODE,
                            DP_ID: req.body.data[i].DP_ID,
                            DEMAT: req.body.data[i].DEMAT,
                            GUARD_NAME: req.body.data[i].GUARD_NAME,
                            BROKCODE: req.body.data[i].BROKCODE,
                            FOLIO_DATE: moment(new Date(req.body.data[i].FOLIO_DATE)).format("YYYY-MM-DD"),
                            AADHAAR: req.body.data[i].AADHAAR,
                            TPA_LINKED: req.body.data[i].TPA_LINKED,
                            FH_CKYC_NO: req.body.data[i].FH_CKYC_NO,
                            JH1_CKYC: req.body.data[i].JH1_CKYC,
                            JH2_CKYC: req.body.data[i].JH2_CKYC,
                            G_CKYC_NO: req.body.data[i].G_CKYC_NO,
                            JH1_DOB: req.body.data[i].JH1_DOB,
                            JH2_DOB: req.body.data[i].JH2_DOB,
                            GUARDIAN_D: req.body.data[i].GUARDIAN_D,
                            AMC_CODE: req.body.data[i].AMC_CODE,
                            GST_STATE_: req.body.data[i].GST_STATE_,
                            FOLIO_OLD: req.body.data[i].FOLIO_OLD,
                            SCHEME_FOL: req.body.data[i].SCHEME_FOL,
                            USER_ID: req.body.userid,
                        }
                    },
                    {
                        "upsert": true
                    },
                    function (err, object) {
                        if (err) {
                            //  console.warn(err.message);  // returns error if no matching object found
                        }
                    })
            }
        }
        resdata = {
            status: 200,
            message: 'Data uploaded',
        }
        res.json(resdata);
        return resdata;
    } catch (error) {
        console.log(`Error found. ${error}`)
    }
})

app.post("/api/savecamstest", async function (req, res) {
    try {
        if (req.body.pan === "") {
            console.log("req.body.data.length=", req.body.data.length)
            for (var i = 0; i < req.body.data.length; i++) {
                console.log("pan1=", req.body.pan, "name=", req.body.name, req.body.data[i].FOLIO_NO)
                transc.updateMany(
                    { TRXNNO: req.body.data[i].TRXNNO, FOLIO_NO: req.body.data[i].FOLIO_NO, TRADDATE: moment(new Date(req.body.data[i].TRADDATE)).format("YYYY-MM-DD"), PRODCODE: req.body.data[i].PRODCODE, SEQ_NO: req.body.data[i].SEQ_NO },
                    {
                        $set:
                        {
                            AMC_CODE: req.body.data[i].AMC_CODE,
                            FOLIO_NO: req.body.data[i].FOLIO_NO,
                            PRODCODE: req.body.data[i].PRODCODE,
                            SCHEME: req.body.data[i].SCHEME,
                            INV_NAME: req.body.name,
                            TRXNTYPE: req.body.data[i].TRXNTYPE,
                            TRXNNO: req.body.data[i].TRXNNO,
                            TRXNMODE: req.body.data[i].TRXNMODE,
                            TRXNSTAT: req.body.data[i].TRXNSTAT,
                            USERCODE: req.body.data[i].USERCODE,
                            USRTRXNO: req.body.data[i].USRTRXNO,
                            TRADDATE: moment(new Date(req.body.data[i].TRADDATE)).format("YYYY-MM-DD"),
                            POSTDATE: moment(new Date(req.body.data[i].POSTDATE)).format("YYYY-MM-DD"),
                            PURPRICE: Number(req.body.data[i].PURPRICE),
                            UNITS: Number(req.body.data[i].UNITS),
                            AMOUNT: Number(req.body.data[i].AMOUNT),
                            BROKCODE: req.body.data[i].BROKCODE,
                            SUBBROK: req.body.data[i].SUBBROK,
                            BROKPERC: req.body.data[i].BROKPERC,
                            BROKCOMM: req.body.data[i].BROKCOMM,
                            ALTFOLIO: req.body.data[i].ALTFOLIO,
                            REP_DATE: moment(new Date(req.body.data[i].REP_DATE)).format("YYYY-MM-DD"),
                            TIME1: req.body.data[i].TIME1,
                            TRXNSUBTYP: req.body.data[i].TRXNSUBTYP,
                            APPLICATIO: req.body.data[i].APPLICATIO,
                            TRXN_NATUR: req.body.data[i].TRXN_NATUR,
                            TAX: Number(req.body.data[i].TAX),
                            TOTAL_TAX: Number(req.body.data[i].TOTAL_TAX),
                            TE_15H: req.body.data[i].TE_15H,
                            MICR_NO: req.body.data[i].MICR_NO,
                            REMARKS: req.body.data[i].REMARKS,
                            SWFLAG: req.body.data[i].SWFLAG,
                            OLD_FOLIO: req.body.data[i].OLD_FOLIO,
                            SEQ_NO: req.body.data[i].SEQ_NO,
                            REINVEST_F: req.body.data[i].REINVEST_F,
                            MULT_BROK: req.body.data[i].MULT_BROK,
                            STT: Number(req.body.data[i].STT),
                            LOCATION: req.body.data[i].LOCATION,
                            SCHEME_TYP: req.body.data[i].SCHEME_TYP,
                            TAX_STATUS: req.body.data[i].TAX_STATUS,
                            LOAD: Number(req.body.data[i].LOAD),
                            SCANREFNO: req.body.data[i].SCANREFNO,
                            PAN: (req.body.data[i].PAN).toUpperCase(),
                            INV_IIN: req.body.data[i].INV_IIN,
                            TARG_SRC_S: req.body.data[i].TARG_SRC_S,
                            TRXN_TYPE_: req.body.data[i].TRXN_TYPE_,
                            TICOB_TRTY: req.body.data[i].TICOB_TRTY,
                            TICOB_TRNO: req.body.data[i].TICOB_TRNO,
                            TICOB_POST: req.body.data[i].TICOB_POST,
                            DP_ID: req.body.data[i].DP_ID,
                            TRXN_CHARG: Number(req.body.data[i].TRXN_CHARG),
                            ELIGIB_AMT: Number(req.body.data[i].ELIGIB_AMT),
                            SRC_OF_TXN: req.body.data[i].SRC_OF_TXN,
                            TRXN_SUFFI: req.body.data[i].TRXN_SUFFI,
                            SIPTRXNNO: req.body.data[i].SIPTRXNNO,
                            TER_LOCATI: req.body.data[i].TER_LOCATI,
                            EUIN: req.body.data[i].EUIN,
                            EUIN_VALID: req.body.data[i].EUIN_VALID,
                            EUIN_OPTED: req.body.data[i].EUIN_OPTED,
                            SUB_BRK_AR: req.body.data[i].SUB_BRK_AR,
                            EXCH_DC_FL: req.body.data[i].EXCH_DC_FL,
                            SRC_BRK_CO: req.body.data[i].SRC_BRK_CO,
                            SYS_REGN_D: req.body.data[i].SYS_REGN_D,
                            AC_NO: req.body.data[i].AC_NO,
                            BANK_NAME: req.body.data[i].BANK_NAME,
                            REVERSAL_C: req.body.data[i].REVERSAL_C,
                            EXCHANGE_F: req.body.data[i].EXCHANGE_F,
                            CA_INITIAT: req.body.data[i].CA_INITIAT,
                            GST_STATE_: req.body.data[i].GST_STATE_,
                            IGST_AMOUN: Number(req.body.data[i].IGST_AMOUN),
                            CGST_AMOUN: Number(req.body.data[i].CGST_AMOUN),
                            SGST_AMOUN: Number(req.body.data[i].SGST_AMOUN),
                            REV_REMARK: req.body.data[i].REV_REMARK,
                            ORIGINAL_T: req.body.data[i].ORIGINAL_T,
                            STAMP_DUTY: Number(req.body.data[i].STAMP_DUTY),
                            FOLIO_OLD: req.body.data[i].FOLIO_OLD,
                            SCHEME_FOL: req.body.data[i].SCHEME_FOL,
                            AMC_REF_NO: req.body.data[i].AMC_REF_NO,
                            REQUEST_RE: req.body.data[i].REQUEST_RE,
                            USER_ID: req.body.userid,
                        }
                    },
                    {
                        "upsert": true
                    },
                    function (err, object) {
                        if (err) {
                            //  console.warn(err.message);  // returns error if no matching object found
                        }
                    })

                // });
            }
        } else {
            console.log("pan2=", req.body.pan)
            for (var i = 0; i < req.body.data.length; i++) {
                transc.updateMany(
                    { TRXNNO: req.body.data[i].TRXNNO, FOLIO_NO: req.body.data[i].FOLIO_NO, TRADDATE: moment(new Date(req.body.data[i].TRADDATE)).format("YYYY-MM-DD"), PRODCODE: req.body.data[i].PRODCODE, SEQ_NO: req.body.data[i].SEQ_NO },
                    {
                        $set:
                        {
                            AMC_CODE: req.body.data[i].AMC_CODE,
                            FOLIO_NO: req.body.data[i].FOLIO_NO,
                            PRODCODE: req.body.data[i].PRODCODE,
                            SCHEME: req.body.data[i].SCHEME,
                            INV_NAME: req.body.name,
                            TRXNTYPE: req.body.data[i].TRXNTYPE,
                            TRXNNO: req.body.data[i].TRXNNO,
                            TRXNMODE: req.body.data[i].TRXNMODE,
                            TRXNSTAT: req.body.data[i].TRXNSTAT,
                            USERCODE: req.body.data[i].USERCODE,
                            USRTRXNO: req.body.data[i].USRTRXNO,
                            TRADDATE: moment(new Date(req.body.data[i].TRADDATE)).format("YYYY-MM-DD"),
                            POSTDATE: moment(new Date(req.body.data[i].POSTDATE)).format("YYYY-MM-DD"),
                            PURPRICE: Number(req.body.data[i].PURPRICE),
                            UNITS: Number(req.body.data[i].UNITS),
                            AMOUNT: Number(req.body.data[i].AMOUNT),
                            BROKCODE: req.body.data[i].BROKCODE,
                            SUBBROK: req.body.data[i].SUBBROK,
                            BROKPERC: req.body.data[i].BROKPERC,
                            BROKCOMM: req.body.data[i].BROKCOMM,
                            ALTFOLIO: req.body.data[i].ALTFOLIO,
                            REP_DATE: moment(new Date(req.body.data[i].REP_DATE)).format("YYYY-MM-DD"),
                            TIME1: req.body.data[i].TIME1,
                            TRXNSUBTYP: req.body.data[i].TRXNSUBTYP,
                            APPLICATIO: req.body.data[i].APPLICATIO,
                            TRXN_NATUR: req.body.data[i].TRXN_NATUR,
                            TAX: Number(req.body.data[i].TAX),
                            TOTAL_TAX: Number(req.body.data[i].TOTAL_TAX),
                            TE_15H: req.body.data[i].TE_15H,
                            MICR_NO: req.body.data[i].MICR_NO,
                            REMARKS: req.body.data[i].REMARKS,
                            SWFLAG: req.body.data[i].SWFLAG,
                            OLD_FOLIO: req.body.data[i].OLD_FOLIO,
                            SEQ_NO: req.body.data[i].SEQ_NO,
                            REINVEST_F: req.body.data[i].REINVEST_F,
                            MULT_BROK: req.body.data[i].MULT_BROK,
                            STT: Number(req.body.data[i].STT),
                            LOCATION: req.body.data[i].LOCATION,
                            SCHEME_TYP: req.body.data[i].SCHEME_TYP,
                            TAX_STATUS: req.body.data[i].TAX_STATUS,
                            LOAD: Number(req.body.data[i].LOAD),
                            SCANREFNO: req.body.data[i].SCANREFNO,
                            PAN: (req.body.data[i].PAN).toUpperCase(),
                            INV_IIN: req.body.data[i].INV_IIN,
                            TARG_SRC_S: req.body.data[i].TARG_SRC_S,
                            TRXN_TYPE_: req.body.data[i].TRXN_TYPE_,
                            TICOB_TRTY: req.body.data[i].TICOB_TRTY,
                            TICOB_TRNO: req.body.data[i].TICOB_TRNO,
                            TICOB_POST: req.body.data[i].TICOB_POST,
                            DP_ID: req.body.data[i].DP_ID,
                            TRXN_CHARG: Number(req.body.data[i].TRXN_CHARG),
                            ELIGIB_AMT: Number(req.body.data[i].ELIGIB_AMT),
                            SRC_OF_TXN: req.body.data[i].SRC_OF_TXN,
                            TRXN_SUFFI: req.body.data[i].TRXN_SUFFI,
                            SIPTRXNNO: req.body.data[i].SIPTRXNNO,
                            TER_LOCATI: req.body.data[i].TER_LOCATI,
                            EUIN: req.body.data[i].EUIN,
                            EUIN_VALID: req.body.data[i].EUIN_VALID,
                            EUIN_OPTED: req.body.data[i].EUIN_OPTED,
                            SUB_BRK_AR: req.body.data[i].SUB_BRK_AR,
                            EXCH_DC_FL: req.body.data[i].EXCH_DC_FL,
                            SRC_BRK_CO: req.body.data[i].SRC_BRK_CO,
                            SYS_REGN_D: req.body.data[i].SYS_REGN_D,
                            AC_NO: req.body.data[i].AC_NO,
                            BANK_NAME: req.body.data[i].BANK_NAME,
                            REVERSAL_C: req.body.data[i].REVERSAL_C,
                            EXCHANGE_F: req.body.data[i].EXCHANGE_F,
                            CA_INITIAT: req.body.data[i].CA_INITIAT,
                            GST_STATE_: req.body.data[i].GST_STATE_,
                            IGST_AMOUN: Number(req.body.data[i].IGST_AMOUN),
                            CGST_AMOUN: Number(req.body.data[i].CGST_AMOUN),
                            SGST_AMOUN: Number(req.body.data[i].SGST_AMOUN),
                            REV_REMARK: req.body.data[i].REV_REMARK,
                            ORIGINAL_T: req.body.data[i].ORIGINAL_T,
                            STAMP_DUTY: Number(req.body.data[i].STAMP_DUTY),
                            FOLIO_OLD: req.body.data[i].FOLIO_OLD,
                            SCHEME_FOL: req.body.data[i].SCHEME_FOL,
                            AMC_REF_NO: req.body.data[i].AMC_REF_NO,
                            REQUEST_RE: req.body.data[i].REQUEST_RE,
                            USER_ID: req.body.userid,
                        }
                    },
                    {
                        "upsert": true
                    },
                    function (err, object) {
                        if (err) {
                            //  console.warn(err.message);  // returns error if no matching object found
                        } else {
                            console.log("object=", object)
                        }
                    })
            }
        }
        resdata = {
            status: 200,
            message: 'Data uploaded',
        }
        res.json(resdata);
        return resdata;
    } catch (error) {
        console.log(`Error found. ${error}`)
    }
})

app.post("/api/savecams2atest", async function (req, res) {
    try {
        if (req.body.pan === "") {
            console.log("pan1=", req.body.pan, "name=", req.body.name)
            for (var i = 0; i < req.body.data.length; i++) {
                transc2A.updateMany(
                    { TRXNNO: req.body.data[i].TRXNNO, FOLIO_NO: req.body.data[i].FOLIO_NO, TRADDATE: moment(new Date(req.body.data[i].TRADDATE)).format("YYYY-MM-DD"), AMOUNT: Number(req.body.data[i].AMOUNT), PRODCODE: req.body.data[i].PRODCODE, SEQ_NO: req.body.data[i].SEQ_NO },
                    {
                        $set:
                        {
                            AMC_CODE: req.body.data[i].AMC_CODE,
                            FOLIO_NO: req.body.data[i].FOLIO_NO,
                            PRODCODE: req.body.data[i].PRODCODE,
                            SCHEME: req.body.data[i].SCHEME,
                            INV_NAME: req.body.name,
                            TRXNTYPE: req.body.data[i].TRXNTYPE,
                            TRXNNO: req.body.data[i].TRXNNO,
                            TRXNMODE: req.body.data[i].TRXNMODE,
                            TRXNSTAT: req.body.data[i].TRXNSTAT,
                            USERCODE: req.body.data[i].USERCODE,
                            USRTRXNO: req.body.data[i].USRTRXNO,
                            TRADDATE: moment(new Date(req.body.data[i].TRADDATE)).format("YYYY-MM-DD"),
                            POSTDATE: moment(new Date(req.body.data[i].POSTDATE)).format("YYYY-MM-DD"),
                            PURPRICE: Number(req.body.data[i].PURPRICE),
                            UNITS: Number(req.body.data[i].UNITS),
                            AMOUNT: Number(req.body.data[i].AMOUNT),
                            BROKCODE: req.body.data[i].BROKCODE,
                            SUBBROK: req.body.data[i].SUBBROK,
                            BROKPERC: req.body.data[i].BROKPERC,
                            BROKCOMM: req.body.data[i].BROKCOMM,
                            ALTFOLIO: req.body.data[i].ALTFOLIO,
                            REP_DATE: moment(new Date(req.body.data[i].REP_DATE)).format("YYYY-MM-DD"),
                            TIME1: req.body.data[i].TIME1,
                            TRXNSUBTYP: req.body.data[i].TRXNSUBTYP,
                            APPLICATIO: req.body.data[i].APPLICATIO,
                            TRXN_NATUR: req.body.data[i].TRXN_NATUR,
                            TAX: Number(req.body.data[i].TAX),
                            TOTAL_TAX: Number(req.body.data[i].TOTAL_TAX),
                            TE_15H: req.body.data[i].TE_15H,
                            MICR_NO: req.body.data[i].MICR_NO,
                            REMARKS: req.body.data[i].REMARKS,
                            SWFLAG: req.body.data[i].SWFLAG,
                            OLD_FOLIO: req.body.data[i].OLD_FOLIO,
                            SEQ_NO: req.body.data[i].SEQ_NO,
                            REINVEST_F: req.body.data[i].REINVEST_F,
                            MULT_BROK: req.body.data[i].MULT_BROK,
                            STT: Number(req.body.data[i].STT),
                            LOCATION: req.body.data[i].LOCATION,
                            SCHEME_TYP: req.body.data[i].SCHEME_TYP,
                            TAX_STATUS: req.body.data[i].TAX_STATUS,
                            LOAD: Number(req.body.data[i].LOAD),
                            SCANREFNO: req.body.data[i].SCANREFNO,
                            PAN: (req.body.data[i].PAN).toUpperCase(),
                            INV_IIN: req.body.data[i].INV_IIN,
                            TARG_SRC_S: req.body.data[i].TARG_SRC_S,
                            TRXN_TYPE_: req.body.data[i].TRXN_TYPE_,
                            TICOB_TRTY: req.body.data[i].TICOB_TRTY,
                            TICOB_TRNO: req.body.data[i].TICOB_TRNO,
                            TICOB_POST: req.body.data[i].TICOB_POST,
                            DP_ID: req.body.data[i].DP_ID,
                            TRXN_CHARG: Number(req.body.data[i].TRXN_CHARG),
                            ELIGIB_AMT: Number(req.body.data[i].ELIGIB_AMT),
                            SRC_OF_TXN: req.body.data[i].SRC_OF_TXN,
                            TRXN_SUFFI: req.body.data[i].TRXN_SUFFI,
                            SIPTRXNNO: req.body.data[i].SIPTRXNNO,
                            TER_LOCATI: req.body.data[i].TER_LOCATI,
                            EUIN: req.body.data[i].EUIN,
                            EUIN_VALID: req.body.data[i].EUIN_VALID,
                            EUIN_OPTED: req.body.data[i].EUIN_OPTED,
                            SUB_BRK_AR: req.body.data[i].SUB_BRK_AR,
                            EXCH_DC_FL: req.body.data[i].EXCH_DC_FL,
                            SRC_BRK_CO: req.body.data[i].SRC_BRK_CO,
                            SYS_REGN_D: req.body.data[i].SYS_REGN_D,
                            AC_NO: req.body.data[i].AC_NO,
                            BANK_NAME: req.body.data[i].BANK_NAME,
                            REVERSAL_C: req.body.data[i].REVERSAL_C,
                            EXCHANGE_F: req.body.data[i].EXCHANGE_F,
                            CA_INITIAT: req.body.data[i].CA_INITIAT,
                            GST_STATE_: req.body.data[i].GST_STATE_,
                            IGST_AMOUN: Number(req.body.data[i].IGST_AMOUN),
                            CGST_AMOUN: Number(req.body.data[i].CGST_AMOUN),
                            SGST_AMOUN: Number(req.body.data[i].SGST_AMOUN),
                            REV_REMARK: req.body.data[i].REV_REMARK,
                            ORIGINAL_T: req.body.data[i].ORIGINAL_T,
                            STAMP_DUTY: Number(req.body.data[i].STAMP_DUTY),
                            FOLIO_OLD: req.body.data[i].FOLIO_OLD,
                            SCHEME_FOL: req.body.data[i].SCHEME_FOL,
                            AMC_REF_NO: req.body.data[i].AMC_REF_NO,
                            REQUEST_RE: req.body.data[i].REQUEST_RE,
                            USER_ID: req.body.userid,
                        }
                    },
                    {
                        "upsert": true
                    },
                    function (err, object) {
                        if (err) {
                            //  console.warn(err.message);  // returns error if no matching object found
                        }
                    })

                // });
            }
        } else {
            console.log("pan2=", req.body.data.pan)
            for (var i = 0; i < req.body.data.data.length; i++) {
                transc2A.updateMany(
                    { TRXNNO: req.body.data[i].TRXNNO, FOLIO_NO: req.body.data[i].FOLIO_NO, TRADDATE: moment(new Date(req.body.data[i].TRADDATE)).format("YYYY-MM-DD"), AMOUNT: Number(req.body.data[i].AMOUNT), PRODCODE: req.body.data[i].PRODCODE, SEQ_NO: req.body.data[i].SEQ_NO },
                    {
                        $set:
                        {
                            AMC_CODE: req.body.data[i].AMC_CODE,
                            FOLIO_NO: req.body.data[i].FOLIO_NO,
                            PRODCODE: req.body.data[i].PRODCODE,
                            SCHEME: req.body.data[i].SCHEME,
                            INV_NAME: req.body.name,
                            TRXNTYPE: req.body.data[i].TRXNTYPE,
                            TRXNNO: req.body.data[i].TRXNNO,
                            TRXNMODE: req.body.data[i].TRXNMODE,
                            TRXNSTAT: req.body.data[i].TRXNSTAT,
                            USERCODE: req.body.data[i].USERCODE,
                            USRTRXNO: req.body.data[i].USRTRXNO,
                            TRADDATE: moment(new Date(req.body.data[i].TRADDATE)).format("YYYY-MM-DD"),
                            POSTDATE: moment(new Date(req.body.data[i].POSTDATE)).format("YYYY-MM-DD"),
                            PURPRICE: Number(req.body.data[i].PURPRICE),
                            UNITS: Number(req.body.data[i].UNITS),
                            AMOUNT: Number(req.body.data[i].AMOUNT),
                            BROKCODE: req.body.data[i].BROKCODE,
                            SUBBROK: req.body.data[i].SUBBROK,
                            BROKPERC: req.body.data[i].BROKPERC,
                            BROKCOMM: req.body.data[i].BROKCOMM,
                            ALTFOLIO: req.body.data[i].ALTFOLIO,
                            REP_DATE: moment(new Date(req.body.data[i].REP_DATE)).format("YYYY-MM-DD"),
                            TIME1: req.body.data[i].TIME1,
                            TRXNSUBTYP: req.body.data[i].TRXNSUBTYP,
                            APPLICATIO: req.body.data[i].APPLICATIO,
                            TRXN_NATUR: req.body.data[i].TRXN_NATUR,
                            TAX: Number(req.body.data[i].TAX),
                            TOTAL_TAX: Number(req.body.data[i].TOTAL_TAX),
                            TE_15H: req.body.data[i].TE_15H,
                            MICR_NO: req.body.data[i].MICR_NO,
                            REMARKS: req.body.data[i].REMARKS,
                            SWFLAG: req.body.data[i].SWFLAG,
                            OLD_FOLIO: req.body.data[i].OLD_FOLIO,
                            SEQ_NO: req.body.data[i].SEQ_NO,
                            REINVEST_F: req.body.data[i].REINVEST_F,
                            MULT_BROK: req.body.data[i].MULT_BROK,
                            STT: Number(req.body.data[i].STT),
                            LOCATION: req.body.data[i].LOCATION,
                            SCHEME_TYP: req.body.data[i].SCHEME_TYP,
                            TAX_STATUS: req.body.data[i].TAX_STATUS,
                            LOAD: Number(req.body.data[i].LOAD),
                            SCANREFNO: req.body.data[i].SCANREFNO,
                            PAN: (req.body.data[i].PAN).toUpperCase(),
                            INV_IIN: req.body.data[i].INV_IIN,
                            TARG_SRC_S: req.body.data[i].TARG_SRC_S,
                            TRXN_TYPE_: req.body.data[i].TRXN_TYPE_,
                            TICOB_TRTY: req.body.data[i].TICOB_TRTY,
                            TICOB_TRNO: req.body.data[i].TICOB_TRNO,
                            TICOB_POST: req.body.data[i].TICOB_POST,
                            DP_ID: req.body.data[i].DP_ID,
                            TRXN_CHARG: Number(req.body.data[i].TRXN_CHARG),
                            ELIGIB_AMT: Number(req.body.data[i].ELIGIB_AMT),
                            SRC_OF_TXN: req.body.data[i].SRC_OF_TXN,
                            TRXN_SUFFI: req.body.data[i].TRXN_SUFFI,
                            SIPTRXNNO: req.body.data[i].SIPTRXNNO,
                            TER_LOCATI: req.body.data[i].TER_LOCATI,
                            EUIN: req.body.data[i].EUIN,
                            EUIN_VALID: req.body.data[i].EUIN_VALID,
                            EUIN_OPTED: req.body.data[i].EUIN_OPTED,
                            SUB_BRK_AR: req.body.data[i].SUB_BRK_AR,
                            EXCH_DC_FL: req.body.data[i].EXCH_DC_FL,
                            SRC_BRK_CO: req.body.data[i].SRC_BRK_CO,
                            SYS_REGN_D: req.body.data[i].SYS_REGN_D,
                            AC_NO: req.body.data[i].AC_NO,
                            BANK_NAME: req.body.data[i].BANK_NAME,
                            REVERSAL_C: req.body.data[i].REVERSAL_C,
                            EXCHANGE_F: req.body.data[i].EXCHANGE_F,
                            CA_INITIAT: req.body.data[i].CA_INITIAT,
                            GST_STATE_: req.body.data[i].GST_STATE_,
                            IGST_AMOUN: Number(req.body.data[i].IGST_AMOUN),
                            CGST_AMOUN: Number(req.body.data[i].CGST_AMOUN),
                            SGST_AMOUN: Number(req.body.data[i].SGST_AMOUN),
                            REV_REMARK: req.body.data[i].REV_REMARK,
                            ORIGINAL_T: req.body.data[i].ORIGINAL_T,
                            STAMP_DUTY: Number(req.body.data[i].STAMP_DUTY),
                            FOLIO_OLD: req.body.data[i].FOLIO_OLD,
                            SCHEME_FOL: req.body.data[i].SCHEME_FOL,
                            AMC_REF_NO: req.body.data[i].AMC_REF_NO,
                            REQUEST_RE: req.body.data[i].REQUEST_RE,
                            USER_ID: req.body.userid,
                        }
                    },
                    {
                        "upsert": true
                    },
                    function (err, object) {
                        if (err) {
                            //  console.warn(err.message);  // returns error if no matching object found
                        }
                    })
            }
        }
        resdata = {
            status: 200,
            message: 'Data uploaded',
        }
        res.json(resdata);
        return resdata;
    } catch (error) {
        console.log(`Error found. ${error}`)
    }
})

app.post("/api/savekarvy", async function (req, res) {
    try {
        console.log("pan=", req.body.pan)
        console.log("name=", req.body.name)
        // console.log("data=",req.body.data)
        // return false;
        if (req.body.pan === "") {

            console.log("pan1=", req.body.pan, "name=", req.body.name)
            foliok.find({ ACNO: req.body.data.ACNO }).distinct("ACNO", function (err, member2) {
                transk.updateMany(
                    { TD_TRNO: req.body.data.TD_TRNO, UNQNO: req.body.data.UNQNO, NEWUNQNO: req.body.data.NEWUNQNO, TD_AMT: req.body.data.TD_AMT, TD_ACNO: req.body.data.TD_ACNO, FMCODE: req.body.data.FMCODE },
                    {
                        $set:
                        {
                            FMCODE: req.body.data.FMCODE,
                            TD_FUND: req.body.data.TD_FUND,
                            TD_SCHEME: req.body.data.TD_SCHEME,
                            TD_PLAN: req.body.data.TD_PLAN,
                            TD_ACNO: req.body.data.TD_ACNO,
                            SCHPLN: req.body.data.SCHPLN,
                            DIVOPT: req.body.data.DIVOPT,
                            FUNDDESC: req.body.data.FUNDDESC,
                            TD_PURRED: req.body.data.TD_PURRED,
                            TD_TRNO: req.body.data.TD_TRNO,
                            SMCODE: req.body.data.SMCODE,
                            CHQNO: req.body.data.CHQNO,
                            INVNAME: req.body.name,
                            TRNMODE: req.body.data.TRNMODE,
                            TRNSTAT: req.body.data.TRNSTAT,
                            TD_BRANCH: req.body.data.TD_BRANCH,
                            ISCTRNO: req.body.data.ISCTRNO,
                            TD_TRDT: moment(new Date(req.body.data.TD_TRDT)).format("YYYY-MM-DD"),
                            TD_PRDT: moment(new Date(req.body.data.TD_PRDT)).format("YYYY-MM-DD"),
                            TD_UNITS: Number(req.body.data.TD_UNITS),
                            TD_AMT: Number(req.body.data.TD_AMT),
                            TD_AGENT: req.body.data.TD_AGENT,
                            TD_BROKER: req.body.data.TD_BROKER,
                            BROKPER: req.body.data.BROKPER,
                            BROKCOMM: req.body.data.BROKCOMM,
                            INVID: req.body.data.INVID,
                            CRDATE: moment(new Date(req.body.data.CRDATE)).format("YYYY-MM-DD"),
                            CRTIME: req.body.data.CRTIME,
                            TRNSUB: req.body.data.TRNSUB,
                            TD_APPNO: req.body.data.TD_APPNO,
                            UNQNO: req.body.data.UNQNO,
                            TRDESC: req.body.data.TRDESC,
                            TD_TRTYPE: req.body.data.TD_TRTYPE,
                            NAVDATE: moment(new Date(req.body.data.NAVDATE)).format("YYYY-MM-DD"),
                            PORTDT: moment(new Date(req.body.data.PORTDT)).format("YYYY-MM-DD"),
                            ASSETTYPE: req.body.data.ASSETTYPE,
                            SUBTRTYPE: req.body.data.SUBTRTYPE,
                            CITYCATEG0: req.body.data.CITYCATEG0,
                            EUIN: req.body.data.EUIN,
                            TRCHARGES: req.body.data.TRCHARGES,
                            CLIENTID: req.body.data.CLIENTID,
                            DPID: req.body.data.DPID,
                            STT: req.body.data.STT,
                            IHNO: req.body.data.IHNO,
                            BRANCHCODE: req.body.data.BRANCHCODE,
                            INWARDNUM1: req.body.data.INWARDNUM1,
                            PAN1: req.body.data.PAN1,
                            PAN2: req.body.data.PAN2,
                            PAN3: req.body.data.PAN3,
                            TDSAMOUNT: req.body.data.TDSAMOUNT,
                            CHQDATE: req.body.data.CHQDATE,
                            CHQBANK: req.body.data.CHQBANK,
                            TRFLAG: req.body.data.TRFLAG,
                            LOAD1: req.body.data.LOAD1,
                            BROK_ENTDT: req.body.data.BROK_ENTDT,
                            NCTREMARKS: req.body.data.NCTREMARKS,
                            PRCODE1: req.body.data.PRCODE1,
                            STATUS: req.body.data.STATUS,
                            SCHEMEISIN: req.body.data.SCHEMEISIN,
                            TD_NAV: Number(req.body.data.TD_NAV),
                            INSAMOUNT: req.body.data.INSAMOUNT,
                            REJTRNOOR2: req.body.data.REJTRNOOR2,
                            EVALID: req.body.data.EVALID,
                            EDECLFLAG: req.body.data.EDECLFLAG,
                            SUBARNCODE: req.body.data.SUBARNCODE,
                            ATMCARDRE3: req.body.data.ATMCARDRE3,
                            ATMCARDST4: req.body.data.ATMCARDST4,
                            SCH1: req.body.data.SCH1,
                            PLN1: req.body.data.PLN1,
                            TD_TRXNMO5: req.body.data.TD_TRXNMO5,
                            NEWUNQNO: req.body.data.NEWUNQNO,
                            SIPREGDT: req.body.data.SIPREGDT,
                            SIPREGSLNO: req.body.data.SIPREGSLNO,
                            DIVPER: req.body.data.DIVPER,
                            CAN: req.body.data.CAN,
                            EXCHORGTR6: req.body.data.EXCHORGTR6,
                            ELECTRXNF7: req.body.data.ELECTRXNF7,
                            CLEARED: req.body.data.CLEARED,
                            BROK_VALU8: req.body.data.BROK_VALU8,
                            TD_POP: Number(req.body.data.TD_POP),
                            INVSTATE: req.body.data.INVSTATE,
                            STAMPDUTY: req.body.data.STAMPDUTY,
                        }
                    },
                    {
                        "upsert": true
                    },
                    function (err, object) {
                        if (err) {
                            //  console.warn(err.message);  // returns error if no matching object found
                        }
                    })
            });

        } else {
            console.log("pan2=", req.body.pan)
            transk.updateMany(
                { TD_TRNO: req.body.data.TD_TRNO, UNQNO: req.body.data.UNQNO, NEWUNQNO: req.body.data.NEWUNQNO, TD_AMT: req.body.data.TD_AMT, TD_ACNO: req.body.data.TD_ACNO, FMCODE: req.body.data.FMCODE },
                {
                    $set:
                    {
                        FMCODE: req.body.data.FMCODE,
                        TD_FUND: req.body.data.TD_FUND,
                        TD_SCHEME: req.body.data.TD_SCHEME,
                        TD_PLAN: req.body.data.TD_PLAN,
                        TD_ACNO: req.body.data.TD_ACNO,
                        SCHPLN: req.body.data.SCHPLN,
                        DIVOPT: req.body.data.DIVOPT,
                        FUNDDESC: req.body.data.FUNDDESC,
                        TD_PURRED: req.body.data.TD_PURRED,
                        TD_TRNO: req.body.data.TD_TRNO,
                        SMCODE: req.body.data.SMCODE,
                        CHQNO: req.body.data.CHQNO,
                        INVNAME: req.body.name,
                        TRNMODE: req.body.data.TRNMODE,
                        TRNSTAT: req.body.data.TRNSTAT,
                        TD_BRANCH: req.body.data.TD_BRANCH,
                        ISCTRNO: req.body.data.ISCTRNO,
                        TD_TRDT: moment(new Date(req.body.data.TD_TRDT)).format("YYYY-MM-DD"),
                        TD_PRDT: moment(new Date(req.body.data.TD_PRDT)).format("YYYY-MM-DD"),
                        TD_UNITS: Number(req.body.data.TD_UNITS),
                        TD_AMT: Number(req.body.data.TD_AMT),
                        TD_AGENT: req.body.data.TD_AGENT,
                        TD_BROKER: req.body.data.TD_BROKER,
                        BROKPER: req.body.data.BROKPER,
                        BROKCOMM: req.body.data.BROKCOMM,
                        INVID: req.body.data.INVID,
                        CRDATE: moment(new Date(req.body.data.CRDATE)).format("YYYY-MM-DD"),
                        CRTIME: req.body.data.CRTIME,
                        TRNSUB: req.body.data.TRNSUB,
                        TD_APPNO: req.body.data.TD_APPNO,
                        UNQNO: req.body.data.UNQNO,
                        TRDESC: req.body.data.TRDESC,
                        TD_TRTYPE: req.body.data.TD_TRTYPE,
                        NAVDATE: moment(new Date(req.body.data.NAVDATE)).format("YYYY-MM-DD"),
                        PORTDT: moment(new Date(req.body.data.PORTDT)).format("YYYY-MM-DD"),
                        ASSETTYPE: req.body.data.ASSETTYPE,
                        SUBTRTYPE: req.body.data.SUBTRTYPE,
                        CITYCATEG0: req.body.data.CITYCATEG0,
                        EUIN: req.body.data.EUIN,
                        TRCHARGES: req.body.data.TRCHARGES,
                        CLIENTID: req.body.data.CLIENTID,
                        DPID: req.body.data.DPID,
                        STT: req.body.data.STT,
                        IHNO: req.body.data.IHNO,
                        BRANCHCODE: req.body.data.BRANCHCODE,
                        INWARDNUM1: req.body.data.INWARDNUM1,
                        PAN1: req.body.data.PAN1,
                        PAN2: req.body.data.PAN2,
                        PAN3: req.body.data.PAN3,
                        TDSAMOUNT: req.body.data.TDSAMOUNT,
                        CHQDATE: req.body.data.CHQDATE,
                        CHQBANK: req.body.data.CHQBANK,
                        TRFLAG: req.body.data.TRFLAG,
                        LOAD1: req.body.data.LOAD1,
                        BROK_ENTDT: req.body.data.BROK_ENTDT,
                        NCTREMARKS: req.body.data.NCTREMARKS,
                        PRCODE1: req.body.data.PRCODE1,
                        STATUS: req.body.data.STATUS,
                        SCHEMEISIN: req.body.data.SCHEMEISIN,
                        TD_NAV: Number(req.body.data.TD_NAV),
                        INSAMOUNT: req.body.data.INSAMOUNT,
                        REJTRNOOR2: req.body.data.REJTRNOOR2,
                        EVALID: req.body.data.EVALID,
                        EDECLFLAG: req.body.data.EDECLFLAG,
                        SUBARNCODE: req.body.data.SUBARNCODE,
                        ATMCARDRE3: req.body.data.ATMCARDRE3,
                        ATMCARDST4: req.body.data.ATMCARDST4,
                        SCH1: req.body.data.SCH1,
                        PLN1: req.body.data.PLN1,
                        TD_TRXNMO5: req.body.data.TD_TRXNMO5,
                        NEWUNQNO: req.body.data.NEWUNQNO,
                        SIPREGDT: req.body.data.SIPREGDT,
                        SIPREGSLNO: req.body.data.SIPREGSLNO,
                        DIVPER: req.body.data.DIVPER,
                        CAN: req.body.data.CAN,
                        EXCHORGTR6: req.body.data.EXCHORGTR6,
                        ELECTRXNF7: req.body.data.ELECTRXNF7,
                        CLEARED: req.body.data.CLEARED,
                        BROK_VALU8: req.body.data.BROK_VALU8,
                        TD_POP: Number(req.body.data.TD_POP),
                        INVSTATE: req.body.data.INVSTATE,
                        STAMPDUTY: req.body.data.STAMPDUTY,
                    }
                },
                {
                    "upsert": true
                },
                function (err, object) {
                    if (err) {
                        //  console.warn(err.message);  // returns error if no matching object found
                    }
                })
        }
        resdata = {
            status: 200,
            message: 'Data uploaded',
        }
        res.json(resdata);
        return resdata;
    } catch (error) {
        console.log(`Error found. ${error}`)
    }
})

app.post("/api/savetranskarvy", function (req, res) {

    try {
        var totaluploaded = [];
        var j = req.body.length;
        for (i = 0; i < req.body.length; i++) {
            // let data =  users.find({   PAN: req.body[i].PAN1, }, { _id: 0, DOCNO: "$DOCNO", PAN: "$PAN", NAME: "$NAME"  }).exec();


            transk.updateMany(
                { TD_TRNO: req.body[i].TD_TRNO, UNQNO: req.body[i].UNQNO, NEWUNQNO: req.body[i].NEWUNQNO, TD_ACNO: req.body[i].TD_ACNO, FMCODE: req.body[i].FMCODE, TRFLAG: req.body[i].TRFLAG },
                {
                    $set:
                    {
                        FMCODE: req.body[i].FMCODE,
                        TD_FUND: req.body[i].TD_FUND,
                        TD_SCHEME: req.body[i].TD_SCHEME,
                        TD_PLAN: req.body[i].TD_PLAN,
                        TD_ACNO: req.body[i].TD_ACNO,
                        SCHPLN: req.body[i].SCHPLN,
                        DIVOPT: req.body[i].DIVOPT,
                        FUNDDESC: req.body[i].FUNDDESC,
                        TD_PURRED: req.body[i].TD_PURRED,
                        TD_TRNO: req.body[i].TD_TRNO,
                        SMCODE: req.body[i].SMCODE,
                        CHQNO: req.body[i].CHQNO,
                        INVNAME: req.body[i].INVNAME,
                        TRNMODE: req.body[i].TRNMODE,
                        TRNSTAT: req.body[i].TRNSTAT,
                        TD_BRANCH: req.body[i].TD_BRANCH,
                        ISCTRNO: req.body[i].ISCTRNO,
                        TD_TRDT: moment(new Date(req.body[i].TD_TRDT)).format("YYYY-MM-DD"),
                        TD_PRDT: moment(new Date(req.body[i].TD_PRDT)).format("YYYY-MM-DD"),
                        TD_UNITS: Number(req.body[i].TD_UNITS),
                        TD_AMT: Number(req.body[i].TD_AMT),
                        TD_AGENT: req.body[i].TD_AGENT,
                        TD_BROKER: req.body[i].TD_BROKER,
                        BROKPER: req.body[i].BROKPER,
                        BROKCOMM: req.body[i].BROKCOMM,
                        INVID: req.body[i].INVID,
                        CRDATE: moment(new Date(req.body[i].CRDATE)).format("YYYY-MM-DD"),
                        CRTIME: req.body[i].CRTIME,
                        TRNSUB: req.body[i].TRNSUB,
                        TD_APPNO: req.body[i].TD_APPNO,
                        UNQNO: req.body[i].UNQNO,
                        TRDESC: req.body[i].TRDESC,
                        TD_TRTYPE: req.body[i].TD_TRTYPE,
                        NAVDATE: moment(new Date(req.body[i].NAVDATE)).format("YYYY-MM-DD"),
                        PORTDT: moment(new Date(req.body[i].PORTDT)).format("YYYY-MM-DD"),
                        ASSETTYPE: req.body[i].ASSETTYPE,
                        SUBTRTYPE: req.body[i].SUBTRTYPE,
                        CITYCATEG0: req.body[i].CITYCATEG0,
                        EUIN: req.body[i].EUIN,
                        TRCHARGES: req.body[i].TRCHARGES,
                        CLIENTID: req.body[i].CLIENTID,
                        DPID: req.body[i].DPID,
                        STT: req.body[i].STT,
                        IHNO: req.body[i].IHNO,
                        BRANCHCODE: req.body[i].BRANCHCODE,
                        INWARDNUM1: req.body[i].INWARDNUM1,
                        PAN1: req.body[i].PAN1,
                        PAN2: req.body[i].PAN2,
                        PAN3: req.body[i].PAN3,
                        TDSAMOUNT: req.body[i].TDSAMOUNT,
                        CHQDATE: req.body[i].CHQDATE,
                        CHQBANK: req.body[i].CHQBANK,
                        TRFLAG: req.body[i].TRFLAG,
                        LOAD1: req.body[i].LOAD1,
                        BROK_ENTDT: req.body[i].BROK_ENTDT,
                        NCTREMARKS: req.body[i].NCTREMARKS,
                        PRCODE1: req.body[i].PRCODE1,
                        STATUS: req.body[i].STATUS,
                        SCHEMEISIN: req.body[i].SCHEMEISIN,
                        TD_NAV: Number(req.body[i].TD_NAV),
                        INSAMOUNT: req.body[i].INSAMOUNT,
                        REJTRNOOR2: req.body[i].REJTRNOOR2,
                        EVALID: req.body[i].EVALID,
                        EDECLFLAG: req.body[i].EDECLFLAG,
                        SUBARNCODE: req.body[i].SUBARNCODE,
                        ATMCARDRE3: req.body[i].ATMCARDRE3,
                        ATMCARDST4: req.body[i].ATMCARDST4,
                        SCH1: req.body[i].SCH1,
                        PLN1: req.body[i].PLN1,
                        TD_TRXNMO5: req.body[i].TD_TRXNMO5,
                        NEWUNQNO: req.body[i].NEWUNQNO,
                        SIPREGDT: req.body[i].SIPREGDT,
                        SIPREGSLNO: req.body[i].SIPREGSLNO,
                        DIVPER: req.body[i].DIVPER,
                        CAN: req.body[i].CAN,
                        EXCHORGTR6: req.body[i].EXCHORGTR6,
                        ELECTRXNF7: req.body[i].ELECTRXNF7,
                        CLEARED: req.body[i].CLEARED,
                        BROK_VALU8: req.body[i].BROK_VALU8,
                        TD_POP: Number(req.body[i].TD_POP),
                        INVSTATE: req.body[i].INVSTATE,
                        STAMPDUTY: req.body[i].STAMPDUTY,
                        USER_ID: "initial value",
                    }
                },
                {
                    "upsert": true
                },
                function (err, object) {
                    if (err) {
                        //  console.warn(err.message);  // returns error if no matching object found
                    }
                })
            transk.find({ TD_TRNO: req.body[i].TD_TRNO, UNQNO: req.body[i].UNQNO, NEWUNQNO: req.body[i].NEWUNQNO, TD_ACNO: req.body[i].TD_ACNO }, function (err, data) {
                totaluploaded.push(data)
                if (j === totaluploaded.length) {

                    resdata = {
                        status: 200,
                        message: 'Data uploaded',
                    }
                    res.json(resdata);
                    return resdata;
                } else {
                    resdata = {
                        status: 400,
                        message: 'Data not uploaded',
                    }
                }
            });



        }
        console.dir("successfully");
    } catch (error) {
        console.log(`Error found. ${error}`)
    }
})

app.post("/api/savetransfranklin", function (req, res) {
    for (i = 0; i < req.body.length; i++) {
        transf.updateMany(
            { FOLIO_NO: req.body[i].FOLIO_NO, TRXN_NO: req.body[i].TRXN_NO, TRXN_DATE: new Date(moment(req.body[i].TRXN_DATE).format("YYYY-MM-DD")), AMOUNT: Number(req.body[i].AMOUNT), },
            {
                $set:
                {
                    COMP_CODE: req.body[i].COMP_CODE,
                    SCHEME_CO0: req.body[i].SCHEME_CO0,
                    SCHEME_NA1: req.body[i].SCHEME_NA1,
                    FOLIO_NO: req.body[i].FOLIO_NO,
                    TRXN_TYPE: req.body[i].TRXN_TYPE,
                    TRXN_NO: req.body[i].TRXN_NO,
                    INVESTOR_2: req.body[i].INVESTOR_2,
                    TRXN_DATE: new Date(moment(req.body[i].TRXN_DATE).format("YYYY-MM-DD")),
                    POSTDT_DA3: new Date(moment(req.body[i].POSTDT_DA3).format("YYYY-MM-DD")),
                    NAV: Number(req.body[i].NAV),
                    POP: req.body[i].POP,
                    UNITS: Number(req.body[i].UNITS),
                    AMOUNT: Number(req.body[i].AMOUNT),
                    JOINT_NAM1: req.body[i].JOINT_NAM1,
                    JOINT_NAM2: req.body[i].JOINT_NAM2,
                    ADDRESS1: req.body[i].ADDRESS1,
                    ADDRESS2: req.body[i].ADDRESS2,
                    ADDRESS3: req.body[i].ADDRESS3,
                    CITY: req.body[i].CITY,
                    PIN_CODE: req.body[i].PIN_CODE,
                    STATE: req.body[i].STATE,
                    COUNTRY: req.body[i].COUNTRY,
                    D_BIRTH: req.body[i].D_BIRTH,
                    PHONE_RES: req.body[i].PHONE_RES,
                    PHONE_OFF: req.body[i].PHONE_OFF,
                    TAX_STATUS: req.body[i].TAX_STATUS,
                    EMAIL: req.body[i].EMAIL,
                    TRXN_MODE: req.body[i].TRXN_MODE,
                    TRXN_STAT: req.body[i].TRXN_STAT,
                    TRXN_ID: req.body[i].TRXN_ID,
                    IT_PAN_NO1: req.body[i].IT_PAN_NO1,
                    IT_PAN_NO2: req.body[i].IT_PAN_NO2,
                    IT_PAN_NO3: req.body[i].IT_PAN_NO3,
                    ISIN: req.body[i].ISIN,
                    ACCOUNT_16: req.body[i].ACCOUNT_16,
                    SOCIAL_S18: req.body[i].SOCIAL_S18,
                    HOLDING_19: req.body[i].HOLDING_19,
                    PLAN_TYPE: req.body[i].PLAN_TYPE,
                    BRANCH_C21: req.body[i].BRANCH_C21,
                    PBANK_NAME: req.body[i].PBANK_NAME,
                    PERSONAL23: req.body[i].PERSONAL23,
                    NOMINEE1: req.body[i].NOMINEE1,
                    NOMINEE2: req.body[i].NOMINEE2,
                    NOMINEE3: req.body[i].NOMINEE3,
                    NOMINEE_39: req.body[i].NOMINEE_39,
                    ACCOUNT_25: req.body[i].ACCOUNT_25,
                }
            },
            {
                "upsert": true
            },
            function (err, object) {
                if (err) {
                    console.warn(err.message);  // returns error if no matching object found
                }
            })

    }
    console.dir("successfully");
})

app.post("/api/saveallnav", function (req, res) {
    var model = mongoose.model('allnav', navcams, 'allnav');
    // var model = mongoose.model('test', camsna1, 'test');
    try {
        for (i = 0; i < req.body.length; i++) {
            var mod = new model(req.body[i]);
            mod.save(function (err, data) {
                if (err) {
                    console.warn(err.message);
                }
                else {
                    //console.log(data);
                }
            });
        }
    } catch (err) {
        console.log(e)
    }
})

app.post("/api/savelogin", function (req, res) {
    var model = mongoose.model('login', loginschema, 'login');
    try {
        for (i = 0; i < req.body.length; i++) {
            var mod = new model(req.body[i]);
            mod.save(function (err, data) {
                if (err) {
                    console.warn(err.message);
                }
                else {
                    console.log("Successfully");
                }
            });
        }
    } catch (err) {
        console.log(e)
    }
})

app.post("/api/savecamsnav", function (req, res) {
    db.collection('cams_nav').remove({});
    for (i = 0; i < req.body.length; i++) {
        camsn.updateMany(
            // { ISINDivPayoutISINGrowth: req.body[i].ISINDivPayoutISINGrowth, SchemeCode: req.body[i].SchemeCode },
            { $and: [{ SchemeCode: req.body[i].SchemeCode }, { ISINDivPayoutISINGrowth: req.body[i].ISINDivPayoutISINGrowth }, { ISINDivReinvestment: req.body[i].ISINDivReinvestment }, { SchemeName: req.body[i].SchemeName }, { NetAssetValue: Number(req.body[i].NetAssetValue) }, { Date: moment(new Date(req.body[i].Date)).format("YYYY-MM-DD") }] },
            {
                $set:
                {
                    SchemeCode: req.body[i].SchemeCode,
                    ISINDivPayoutISINGrowth: req.body[i].ISINDivPayoutISINGrowth,
                    ISINDivReinvestment: req.body[i].ISINDivReinvestment,
                    SchemeName: req.body[i].SchemeName,
                    NetAssetValue: Number(req.body[i].NetAssetValue),
                    Date: moment(new Date(req.body[i].Date)).format("YYYY-MM-DD"),
                }
            },
            {
                "upsert": true
            },
            function (err, object) {
                if (err) {
                    //       console.warn(err.message);  // returns error if no matching object found
                } else {

                }

            })

    }
    //  console.dir("successfully");

    var model = mongoose.model('cams_nav', navcams, 'cams_nav');
    model.find({}, function (err, data) {
        //      console.log("res=",data.length)
        if (err) {
            res.send(err);
        }
        else {
            //res.send(data);
            resdata = {
                status: 200,
                message: 'Success',
            }
            res.json(resdata);
            return resdata;
        }
    });

})
///upload data section ends

app.post("/api/Updatedata", function (req, res) {
    for (i = 0; i < req.body.length; i++) {
        db.collection('cams_nav').findAndModify(
            { trxnno: req.body[i].trxnno }, // query
            [['_id', 'asc']],  // sort order
            {
                $set: {
                    folio_no: req.body[i].folio_no,
                    scheme: req.body[i].scheme,
                    inv_name: req.body[i].inv_name,
                    traddate: req.body[i].traddate,
                    units: req.body[i].units,
                    amount: req.body[i].amount,
                    trxn_nature: req.body[i].trxn_nature,
                    scheme_type: req.body[i].scheme_type,
                    pan: req.body[i].pan,
                    trxn_type_flag: req.body[i].trxn_type_flag
                }
            }, // replacement, replaces only the field "hi"
            {}, // options
            function (err, object) {
                if (err) {
                    console.warn(err.message);  // returns error if no matching object found
                } else {
                    console.dir("successfully");
                    //console.dir(object);
                }
            })
    }

})

app.post("/api/days_change", function (req, res) {
    try {
        if (req.body.isin === "") {
            resdata = {
                status: 400,
                message: 'Please enter isin',
            }
            res.json(resdata);
            return resdata;
        } else {
            var dataarr = []; var cnav = 0;
            pipeline1 = [  //trans_karvy
                { $match: { ISINDivPayoutISINGrowth: req.body.isin } },
                { $group: { _id: { NetAssetValue: "$NetAssetValue", Date: "$Date" } } },
                { $project: { _id: 0, NetAssetValue: "$_id.NetAssetValue", Date: { $dateToString: { format: "%Y-%m-%d", date: "$_id.Date" } } } },
                { $sort: { Date: -1 } },
                { $limit: 2 }
            ]
            allcamsn.aggregate(pipeline1, (err, data1) => {
                var datacon = data1;
                console.log(datacon)
                resdata = {
                    status: 200,
                    message: 'Successfull',
                    data: datacon
                }
                // for (var i = 0; i < datacon.length; i++) {
                //     // cnav = parseFloat(datacon[i].NetAssetValue) - parseFloat(datacon[].NetAssetValue);
                //     dataarr.push(datacon[i].NetAssetValue);
                // }
                // cnav = dataarr[0] - dataarr[1];
                // resdata.data = parseFloat(cnav.toFixed(4));
                resdata.data = datacon[1].NetAssetValue
                res.json(resdata);
                // return resdata;
            });
        }
    } catch (err) {
        console.log(err)
    }
})

app.post("/api/listFamilyMember", function (req, res) {
    try {
        req.body.adminPan = req.body.adminPan.toUpperCase();
        if (req.body.adminPan != undefined) {
            let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
            if (req.body.adminPan === "") {
                resdata = {
                    status: 400,
                    message: 'Please enter admin pan!',
                }
                res.json(resdata);
                return resdata;
            } else if (!regex.test(req.body.adminPan)) {
                resdata = {
                    status: 400,
                    message: 'Please enter valid pan',
                }
                res.json(resdata);
                return resdata;
            } else {
                try {
                    var minorarray = []; var individualarray = [];
                    var foliocams = []; var foliokarvy = []; var transcams = []; var transkarvy = [];
                    pipeline1 = [  //familymember
                        { $match: { adminPan: req.body.adminPan } },
                        { $project: { _id: 0, memberPan: "$memberPan", adminPan: "$adminPan", memberRelation: "$memberRelation", date: "$date" } },
                    ]
                    family.aggregate(pipeline1, (err, member) => {
                        if (member != "") {
                            //   console.log("member=",member)
                            for (var j = 0; j < member.length; j++) {
                                transcams.push({ PAN: member[j].memberPan });
                                transkarvy.push({ PAN1: member[j].memberPan });
                                foliocams.push({ GUARD_PAN: member[j].memberPan });
                                foliokarvy.push({ GUARDPANNO: member[j].memberPan });
                            }
                            foliocams.push({ GUARD_PAN: req.body.adminPan });
                            foliokarvy.push({ GUARDPANNO: req.body.adminPan });

                            var strPan1 = { $or: foliocams };
                            var strPan2 = { $or: foliokarvy };
                            var strPan3 = { $or: transcams };
                            var strPan4 = { $or: transkarvy };
                            pipeline2 = [  //folio_cams
                                { $match: strPan1 },
                                { $project: { _id: 0, adminPan: req.body.adminPan, memberPan: "$PAN_NO", name: { "$toUpper": ["$INV_NAME"] }, guardianPan: "$GUARD_PAN", memberRelation: "" } },
                            ]
                            pipeline3 = [  //folio_karvy
                                { $match: strPan2 },
                                { $project: { _id: 0, adminPan: req.body.adminPan, memberPan: "$PANGNO", name: { "$toUpper": ["$INVNAME"] }, guardianPan: "$GUARDPANNO", memberRelation: "" } },
                            ]
                            const pipeline4 = [  //trans_cams
                                { $match: strPan3 },
                                { $project: { _id: 0, adminPan: req.body.adminPan, memberPan: "$PAN", name: { "$toUpper": ["$INV_NAME"] }, guardianPan: "", memberRelation: "" } },
                            ]
                            const pipeline5 = [  //trans_karvy
                                { $match: strPan4 },
                                { $project: { _id: 0, adminPan: req.body.adminPan, memberPan: "$PAN1", name: { "$toUpper": ["$INVNAME"] }, guardianPan: "", memberRelation: "" } },
                            ]
                            folioc.aggregate(pipeline2, (err, member1) => {
                                foliok.aggregate(pipeline3, (err, member2) => {
                                    transc.aggregate(pipeline4, (err, member3) => {
                                        transk.aggregate(pipeline5, (err, member4) => {
                                            var alldata = member1.concat(member2.concat(member3.concat(member4)));
                                            alldata = alldata.filter(
                                                (temp => a =>
                                                    (k => !temp[k] && (temp[k] = true))(a.memberPan + '|' + a.name)
                                                )(Object.create(null))
                                            );

                                            for (var k = 0; k < alldata.length; k++) {
                                                if (alldata[k]['guardianPan'].length > 0) {
                                                    alldata[k]['memberRelation'] = "Minor";
                                                    minorarray.push(alldata[k]);
                                                    // alldata.splice(k, 1); 
                                                } else {
                                                    individualarray.push(alldata[k])
                                                }
                                            }

                                            for (var i = 0; i < member.length; i++) {
                                                for (var k = 0; k < individualarray.length; k++) {
                                                    if (individualarray[k]['guardianPan'].length === 0) {
                                                        if (individualarray[k]['memberPan'] === member[i].memberPan) {
                                                            individualarray[k]['memberRelation'] = member[i].memberRelation;
                                                        }
                                                    }
                                                }
                                            }

                                            var finalarray = individualarray.concat(minorarray);
                                            resdata = {
                                                status: 200,
                                                message: 'Successful',
                                                data: finalarray
                                            }
                                            res.json(resdata)
                                            return resdata;
                                        });
                                    });
                                });
                            });
                        } else {
                            foliocams.push({ GUARD_PAN: req.body.adminPan });
                            foliokarvy.push({ GUARDPANNO: req.body.adminPan });
                            var strPan1 = { $or: foliocams };
                            var strPan2 = { $or: foliokarvy };
                            pipeline2 = [  //folio_cams
                                { $match: strPan1 },
                                { $project: { _id: 0, adminPan: req.body.adminPan, memberPan: "$PAN_NO", name: { "$toUpper": ["$INV_NAME"] }, guardianPan: "$GUARD_PAN", memberRelation: "" } },
                            ]
                            pipeline3 = [  //folio_karvy
                                { $match: strPan2 },
                                { $project: { _id: 0, adminPan: req.body.adminPan, memberPan: "$PANGNO", name: { "$toUpper": ["$INVNAME"] }, guardianPan: "$GUARDPANNO", memberRelation: "" } },
                            ]

                            folioc.aggregate(pipeline2, (err, member1) => {
                                foliok.aggregate(pipeline3, (err, member2) => {
                                    if (member1 != 0 || member2 != 0) {
                                        var alldata = member1.concat(member2);
                                        alldata = alldata.filter(
                                            (temp => a =>
                                                (k => !temp[k] && (temp[k] = true))(a.memberPan + '|' + a.name)
                                            )(Object.create(null))
                                        );

                                        for (var k = 0; k < alldata.length; k++) {
                                            if (alldata[k]['guardianPan'].length > 0) {
                                                alldata[k]['memberRelation'] = "Minor";
                                            }
                                        }
                                        resdata = {
                                            status: 200,
                                            message: 'Successful',
                                            data: alldata
                                        }
                                        res.json(resdata)
                                        return resdata;
                                    } else {
                                        resdata = {
                                            status: 400,
                                            message: 'Data not found!',
                                            data: alldata
                                        }
                                        res.json(resdata)
                                        return resdata;
                                    }

                                    //     });
                                    // });
                                });
                            });
                            // resdata = {
                            //     status: 400,
                            //     message: 'Data not found!',
                            // }
                            // res.json(resdata)
                            // return resdata;
                        }
                    });
                } catch (err) {
                    console.log(err)
                }
                //    }
            }

        } else {
            resdata = {
                status: 400,
                message: 'Key not found',
            }
            res.json(resdata);
        }
    } catch (err) {
        console.log(err)
    }
});

app.post("/api/snapshot", function (req, res) {
    try {
        if (req.body.pan != undefined) {
            var pp = req.body.pan
            req.body.pan = req.body.pan.toUpperCase();

            var regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
            if (req.body.pan === "") {
                resdata = {
                    status: 400,
                    message: 'Please enter pan',
                }
                res.json(resdata);
                return resdata;
            } else if (!regex.test(req.body.pan)) {
                resdata = {
                    status: 400,
                    message: 'Please enter valid pan',
                }
                res.json(resdata);
                return resdata;
            } else {
                var resdata = "";
                family.find({ adminPan: { $regex: `^${req.body.pan}.*`, $options: 'i' } }, { _id: 0, memberPan: 1 }, function (err, member) {
                    if (member != "") {
                        var arr1 = []; var arr2 = []; var panarray = [];
                        var guardpan1 = []; var guardpan2 = [];
                        member = [...new Set(member.map(({ memberPan }) => memberPan.toUpperCase()))];
                        for (var j = 0; j < member.length; j++) {
                            panarray.push(member[j]);
                            guardpan1.push({ GUARD_PAN: member[j] });
                            guardpan2.push({ GUARDPANNO: member[j] });
                            arr1.push({ PAN: member[j] });
                            arr2.push({ PAN1: member[j] });
                        }
                        guardpan1.push({ GUARD_PAN: req.body.pan.toUpperCase() });
                        guardpan2.push({ GUARDPANNO: req.body.pan.toUpperCase() });
                        arr1.push({ PAN: req.body.pan.toUpperCase() });
                        arr2.push({ PAN1: req.body.pan.toUpperCase() });
                        panarray.push(req.body.pan);
                        var strPan1 = { $or: guardpan1 };
                        var strPan2 = { $or: guardpan2 };

                        folioc.find(strPan1).distinct("FOLIOCHK", function (err, member1) {
                            foliok.find(strPan2).distinct("ACNO", function (err, member2) {
                                var alldata = member1.concat(member2);
                                panarray.push("");
                                for (var j = 0; j < alldata.length; j++) {
                                    arr1.push({ FOLIO_NO: alldata[j] });
                                    arr2.push({ TD_ACNO: alldata[j] });
                                }

                                var strFolio1 = { $or: arr1 };
                                var strFolio2 = { $or: arr2 };
                                console.log("panarray==", panarray)
                                console.log("strFolio1==", strFolio1)
                                pipeline1 = [  //trans_karvy
                                    { $match: strFolio2 },
                                    { $project: { _id: 0, NAME: "$INVNAME", PAN: "$PAN1", FOLIO: "$TD_ACNO", PRODCODE: "$FMCODE", SCHEME: "$FUNDDESC", RTA: "KARVY", } },
                                ]
                                pipeline2 = [  //trans_cams
                                    { $match: strFolio1 },
                                    { $project: { _id: 0, NAME: "$INV_NAME", PAN: "$PAN", FOLIO: "$FOLIO_NO", PRODCODE: "$PRODCODE", SCHEME: "$SCHEME", RTA: "CAMS", } },
                                ]
                                // pipeline3 = [  //trans_cams2A
                                //     { $match: strFolio1 },
                                //     { $project: { _id: 0, NAME: "$INV_NAME", PAN: "$PAN", FOLIO: "$FOLIO_NO", PRODCODE: "$PRODCODE", SCHEME: "$SCHEME", RTA: "CAMS2A" } },
                                // ]
                                transk.aggregate(pipeline1, (err, data1) => {
                                    transc.aggregate(pipeline2, (err, data2) => {
                                        //  transc2A.aggregate(pipeline3, (err, data3) => {
                                        //    console.log("2a===",data3)
                                        if (data1 != 0 || data2 != 0) {
                                            resdata = {
                                                status: 200,
                                                message: 'Successfull',
                                                data: data2
                                            }
                                            var datacon = data1.concat(data2);

                                            datacon = datacon.filter(
                                                (temp => a =>
                                                    (k => !temp[k] && (temp[k] = true))(a.PRODCODE + '|' + a.FOLIO)
                                                )(Object.create(null))
                                            );
                                            datacon = datacon.sort((a, b) => (a.SCHEME < b.SCHEME) ? 1 : -1);
                                            var dataarr = []; var lastarray = [];
                                            var finaldataarr = []; var hh = []; var gg = [];
                                            var newdataarr1 = []; var newdataarr2 = []; var newdataarr3 = [];
                                            datacon = datacon.sort((a, b) => (a.NAME > b.NAME) ? 1 : -1);
                                            console.log("datacon1=", datacon)
                                            portfolioApisnapshot(datacon, result => {
                                                lastarray.push(result);
                                                for (var j = 0; j < lastarray.length; j++) {
                                                    for (var k = 0; k < lastarray[j].length; k++) {
                                                        dataarr.push(lastarray[j][k]);
                                                    }
                                                }

                                                var date1 = ""; var date2 = "";
                                                var cnav = 0; var temp222 = 0; var finalarr = [];
                                                var finalsnapshotarr = [];
                                                var newsum1 = []; var newsum2 = []; var oldcnav = 0;

                                                if (dataarr != null && dataarr.length > 0) {
                                                    for (var a = 0; a < datacon.length; a++) {
                                                        newdataarr1 = []; newdataarr2 = []; newdataarr3 = [];
                                                        dataarr = dataarr.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime());
                                                        for (var ii = 0; ii < dataarr.length; ii++) {
                                                            if (datacon[a].FOLIO === dataarr[ii].FOLIO && datacon[a].PRODCODE === dataarr[ii].PRODCODE) {
                                                                if (dataarr[ii].RTA === "CAMS") {
                                                                    newdataarr1.push(dataarr[ii])
                                                                } else if (dataarr[ii].RTA === "CAMS2A") {
                                                                    newdataarr2.push(dataarr[ii])
                                                                } else {
                                                                    newdataarr3.push(dataarr[ii])
                                                                }
                                                            }
                                                        }
                                                        if (newdataarr2.length > 0) {
                                                            newdataarr1.shift();
                                                        }
                                                        hh = newdataarr2.concat(newdataarr1.concat(newdataarr3))
                                                        finaldataarr.push(hh);

                                                    }

                                                    for (var j = 0; j < finaldataarr.length; j++) {
                                                        for (var k = 0; k < finaldataarr[j].length; k++) {
                                                            gg.push(finaldataarr[j][k]);
                                                        }
                                                    }
                                                    dataarr = gg;
                                                    for (var c = 0; c < panarray.length; c++) {
                                                        var newarray = []; var oldarray = []; var purchase = []; var dayspurchase = [];
                                                        var name = "";
                                                        var cagrarray = []; var cagrsum1array = [];
                                                        var cagrsum2array = []; var finalsum1 = 0;
                                                        var finalsum2 = 0; var pan = "";
                                                        var equitytotal = 0; var debttotal = 0; var goldtotal = 0; var equitydebtgoldtotal = 0;
                                                        for (var a = 0; a < datacon.length; a++) {
                                                            var temp44 = 0; var temp444 = 0;
                                                            if (panarray[c] === datacon[a].PAN) {
                                                                name = datacon[a].NAME;
                                                                pan = panarray[c];
                                                                var amount = 0; var arrdays = []; var alldays = []; var days = 0;
                                                                var unit = 0; var arrpurchase = []; var arrunit = []; var arrnav = []; var scheme = "";
                                                                var temp4 = 0; var temp1, temp2 = 0; var temp3 = 0; var cnav = 0; var folio = "";
                                                                var cv = 0; var sum1 = []; var sum2 = [];
                                                                var temp222 = 0; var oldcv = 0;
                                                                dataarr = dataarr.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime());
                                                                var countlength = 0; var externelcount = 0;
                                                                //loop for external counter
                                                                for (var ii = 0; ii < dataarr.length; ii++) {
                                                                    if (datacon[a].FOLIO === dataarr[ii].FOLIO && datacon[a].PRODCODE === dataarr[ii].PRODCODE) {
                                                                        externelcount = externelcount + 1;
                                                                    }
                                                                }
                                                                for (var i = 0; i < dataarr.length; i++) {

                                                                    var currentval = 0; var balance = 0;
                                                                    var oldcurrentval = 0;
                                                                    if (datacon[a].FOLIO === dataarr[i].FOLIO && datacon[a].PRODCODE === dataarr[i].PRODCODE) {
                                                                        countlength = countlength + 1;
                                                                        if (Math.sign(dataarr[i].UNITS) != -1) {
                                                                            if (dataarr[i].NATURE === "Switch Out")
                                                                                for (var jj = 0; jj < arrunit.length; jj++) {
                                                                                    if (arrunit[jj] === 0)
                                                                                        arrunit.shift();
                                                                                    if (arrpurchase[jj] === 0)
                                                                                        arrpurchase.shift();
                                                                                    if (arrdays[jj] === 0)
                                                                                        arrdays.shift();
                                                                                    if (alldays[jj] === 0)
                                                                                        alldays.shift();
                                                                                    if (sum1[jj] === 0)
                                                                                        sum1.shift();
                                                                                    if (sum2[jj] === 0)
                                                                                        sum2.shift();
                                                                                    if (arrnav[jj] === 0)
                                                                                        arrnav.shift();
                                                                                }
                                                                        }
                                                                        cnav = dataarr[i].cnav[0];
                                                                        if (dataarr[i].NATURE != 'Switch Out' && dataarr[i].UNITS != 0) {
                                                                            unit = dataarr[i].UNITS
                                                                            amount = dataarr[i].AMOUNT;
                                                                            var date = dataarr[i].newdate;
                                                                            var navdate = dataarr[i].navdate[0];

                                                                            date1 = new Date(date);
                                                                            date2 = new Date(navdate);

                                                                            days = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
                                                                            arrunit.push(dataarr[i].UNITS);
                                                                            if (dataarr[i].TD_NAV === 0) {
                                                                                arrpurchase.push(0);
                                                                            } else {
                                                                                arrpurchase.push(dataarr[i].AMOUNT);
                                                                            }
                                                                            arrnav.push(dataarr[i].TD_NAV);
                                                                            var precagr = parseFloat((parseFloat(Math.pow(parseFloat((cnav * dataarr[i].UNITS) / (dataarr[i].AMOUNT)), parseFloat(1 / parseFloat(days / 365)))) - 1) * 100);
                                                                            if (precagr === Infinity) {
                                                                                precagr = 0;
                                                                            } else {
                                                                                precagr = precagr;
                                                                            }
                                                                            //sum1(purchase cost*days*cagr)
                                                                            if (days === 0 && isNaN(days)) {
                                                                                sum1.push(0);
                                                                                arrdays.push(0);
                                                                                alldays.push(0);
                                                                                sum2.push(0);
                                                                            } else {
                                                                                arrdays.push(parseFloat(days) * (parseFloat(dataarr[i].AMOUNT)));

                                                                                alldays.push(parseFloat(days));

                                                                                sum1.push(parseFloat(dataarr[i].AMOUNT) * parseFloat(days) * parseFloat(precagr));

                                                                                sum2.push(parseFloat(dataarr[i].AMOUNT) * parseFloat(days));
                                                                            }
                                                                        } else {

                                                                            unit = "-" + dataarr[i].UNITS
                                                                            amount = "-" + dataarr[i].AMOUNT
                                                                            temp2 = dataarr[i].UNITS;
                                                                            for (var p = 0; p < arrunit.length; p++) {
                                                                                if (arrunit[p] === 0) {
                                                                                    continue;
                                                                                }
                                                                                temp3 = arrunit[p];
                                                                                if (temp4 === 0) {

                                                                                    temp4 = parseFloat(temp3) - parseFloat(temp2);
                                                                                    temp4 = parseFloat(temp4.toFixed(4));

                                                                                    if (temp4 === 0) {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                        break;
                                                                                    } else if (temp4 > 0) {
                                                                                        arrunit[p] = temp4;
                                                                                        arrpurchase[p] = temp4 * arrnav[p];
                                                                                        arrdays[p] = parseFloat(alldays[p] * arrpurchase[p]);

                                                                                        sum1[p] = parseFloat(temp4 * arrnav[p]) * parseFloat(alldays[p]) * parseFloat((parseFloat(Math.pow(parseFloat((cnav * temp4) / (temp4 * arrnav[p])), parseFloat(1 / parseFloat(alldays[p] / 365)))) - 1) * 100);
                                                                                        sum2[p] = parseFloat(arrpurchase[p]) * parseFloat(alldays[p]);

                                                                                        break;
                                                                                    } else {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                    }
                                                                                } else if (temp4 > 0) {//+ve

                                                                                    if (countlength === arrnav.length + 1) {
                                                                                        temp4 = parseFloat(temp4) + parseFloat(temp3);
                                                                                        temp4 = parseFloat(temp4.toFixed(4));
                                                                                    }
                                                                                    else {
                                                                                        temp4 = parseFloat(temp4) - parseFloat(temp2);
                                                                                        temp4 = parseFloat(temp4.toFixed(4));
                                                                                    }
                                                                                    if (temp4 === 0) {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                        break;
                                                                                    } else if (temp4 > 0) {
                                                                                        arrunit[p] = temp4;

                                                                                        arrpurchase[p] = temp4 * arrnav[p];
                                                                                        arrdays[p] = parseFloat(alldays[p]) * arrpurchase[p];
                                                                                        sum1[p] = parseFloat(temp4 * arrnav[p]) * parseFloat(alldays[p]) * parseFloat((parseFloat(Math.pow(parseFloat((cnav * temp4) / (temp4 * arrnav[p])), parseFloat(1 / parseFloat(alldays[p] / 365)))) - 1) * 100);
                                                                                        sum2[p] = parseFloat(arrpurchase[p]) * parseFloat(alldays[p]);

                                                                                        break;
                                                                                    } else {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                    }
                                                                                } else {//-ve
                                                                                    temp4 = parseFloat(temp4) + parseFloat(temp3);
                                                                                    temp4 = parseFloat(temp4.toFixed(4));

                                                                                    if (temp4 === 0) {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;

                                                                                        break;
                                                                                    } else if (temp4 > 0) {
                                                                                        arrunit[p] = temp4;

                                                                                        arrpurchase[p] = temp4 * arrnav[p];
                                                                                        arrdays[p] = parseFloat(alldays[p]) * arrpurchase[p];
                                                                                        sum1[p] = parseFloat(temp4 * arrnav[p]) * parseFloat(alldays[p]) * parseFloat((parseFloat(Math.pow(parseFloat((cnav * temp4) / (temp4 * arrnav[p])), parseFloat(1 / parseFloat(alldays[p] / 365)))) - 1) * 100);
                                                                                        sum2[p] = parseFloat(arrpurchase[p]) * parseFloat(alldays[p]);

                                                                                        break;
                                                                                    } else {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                        // break;
                                                                                    }
                                                                                }
                                                                            }
                                                                        }//else condition equal switch

                                                                        balance = parseFloat(unit) + parseFloat(balance);
                                                                        cnav = dataarr[i].cnav[0];
                                                                        oldcnav = dataarr[i].daybefore[1];
                                                                        if (cnav === "" || cnav === undefined || isNaN(balance) || isNaN(cnav)) {
                                                                            balance = 0;
                                                                            cnav = 0;
                                                                            oldcnav = 0;
                                                                        }
                                                                        currentval = cnav * balance
                                                                        oldcurrentval = oldcnav * balance
                                                                        if (dataarr[i].TYPE === "EQUITY") {
                                                                            equitytotal = parseFloat(currentval) + equitytotal;
                                                                        } else if (dataarr[i].TYPE === "DEBT") {
                                                                            debttotal = parseFloat(currentval) + debttotal;
                                                                        } else {
                                                                            goldtotal = parseFloat(currentval) + goldtotal;
                                                                        }

                                                                        cv = currentval + cv;
                                                                        cv = parseFloat(cv.toFixed(4));
                                                                        oldcv = oldcurrentval + oldcv;
                                                                        oldcv = parseFloat(oldcv.toFixed(4));
                                                                        scheme = dataarr[i].SCHEME;
                                                                        folio = dataarr[i].FOLIO;
                                                                    }//if match scheme & folio 

                                                                } //dataarr inner loop

                                                                var sum1all = 0; var sum2all = 0;
                                                                for (var kk = 0; kk < sum1.length; kk++) {
                                                                    sum1all = sum1[kk] + sum1all;
                                                                }
                                                                for (var kkk = 0; kkk < sum2.length; kkk++) {
                                                                    sum2all = sum2[kkk] + sum2all;
                                                                }
                                                                var cagr = parseFloat((sum1all / sum2all).toFixed(2));

                                                                if (isNaN(cv) || cv < 0) {
                                                                    newarray.push(0)
                                                                    oldarray.push(0)
                                                                } else {
                                                                    if (scheme != "") {
                                                                        newarray.push(cv)
                                                                        oldarray.push(oldcv)
                                                                    }
                                                                }

                                                                temp22 = 0; temp33 = 0; var temp222 = 0;
                                                                for (var k = 0; k < arrpurchase.length; k++) {
                                                                    //temp33 = arrpurchase[k];
                                                                    //temp22 = temp33 + temp22;
                                                                    if (isNaN(arrpurchase[k])) {
                                                                        arrpurchase[k] = 0;
                                                                    } else {
                                                                        temp22 = arrpurchase[k] + temp22;
                                                                    }
                                                                    temp222 = arrdays[k] + temp222;
                                                                }
                                                                temp22 = parseFloat(temp22.toFixed(2));
                                                                if (temp222 === 0 || temp22 === 0 || isNaN(days)) {
                                                                    days = 0;
                                                                } else {
                                                                    days = temp222 / temp22;
                                                                    cagrsum2array.push(temp22 * days);
                                                                    cagrsum1array.push(temp22 * days * cagr);
                                                                }
                                                                if (temp22 > 0) {
                                                                    purchase.push(temp22);
                                                                    dayspurchase.push(days * temp22);
                                                                }

                                                            } // pan comparision
                                                        }
                                                        equitytotal = Math.round(equitytotal);
                                                        debttotal = Math.round(debttotal);
                                                        goldtotal = Math.round(goldtotal);
                                                        equitydebtgoldtotal = Math.round(parseFloat(equitytotal) + parseFloat(debttotal) + parseFloat(goldtotal));
                                                        sum1all = 0; sum2all = 0;
                                                        for (var kk = 0; kk < cagrsum1array.length; kk++) {
                                                            sum1all = cagrsum1array[kk] + sum1all;
                                                        }
                                                        for (var kkk = 0; kkk < cagrsum2array.length; kkk++) {
                                                            sum2all = cagrsum2array[kkk] + sum2all;
                                                        }
                                                        cagr = sum1all / sum2all;

                                                        for (var p = 0; p < newarray.length; p++) {
                                                            temp44 = newarray[p] + temp44;
                                                            temp444 = oldarray[p] + temp444;
                                                        }
                                                        temp22 = 0; temp33 = 0;
                                                        for (var k = 0; k < purchase.length; k++) {
                                                            temp22 = purchase[k] + temp22;
                                                            temp33 = dayspurchase[k] + temp33;
                                                        }
                                                        days = Math.round(temp33 / temp22);
                                                        temp22 = parseFloat(temp22.toFixed(2));
                                                        if (isNaN(cagr)) {
                                                            cagr = 0;
                                                        } else {
                                                            cagr = parseFloat(cagr.toFixed(2));
                                                        }
                                                        if (parseInt(temp22) === 0 && parseInt(temp44) === 0) {
                                                            equitytotal = 0;
                                                            debttotal = 0;
                                                            goldtotal = 0;
                                                            equitydebtgoldtotal = 0;
                                                            cagr = 0;
                                                            temp444 = 0;
                                                            finalarr.push({ name: name, purchasecost: Math.round(temp22), currentvalue: Math.round(temp44), days_change: temp444, equitytotal: equitytotal, debttotal: debttotal, goldtotal: goldtotal, equitydebtgoldtotal: equitydebtgoldtotal, cagr: cagr.toFixed(2), pan: pan, sum1: 0, sum2: 0 })
                                                            var pamt = 0; var mamt = 0; var camt = 0; var eamt = 0; var dayschangeamt = 0;
                                                            var sum1amt = 0; var sum2amt = 0;
                                                            var damt = 0; var gamt = 0; var tamt = 0;
                                                            for (var p = 0; p < finalarr.length; p++) {
                                                                pamt = finalarr[p].purchasecost + pamt;
                                                                mamt = finalarr[p].currentvalue + mamt;
                                                                eamt = finalarr[p].equitytotal + eamt;
                                                                damt = finalarr[p].debttotal + damt;
                                                                gamt = finalarr[p].goldtotal + gamt;
                                                                dayschangeamt = finalarr[p].days_change + dayschangeamt;
                                                                tamt = finalarr[p].equitydebtgoldtotal + tamt;
                                                                sum1amt = finalarr[p].sum1 + sum1amt;
                                                                sum2amt = finalarr[p].sum2 + sum2amt;
                                                            }
                                                        } else {
                                                            finalarr.push({ name: name, purchasecost: Math.round(temp22), currentvalue: Math.round(temp44), days_change: Math.round(temp44) - Math.round(temp444), equitytotal: equitytotal, debttotal: debttotal, goldtotal: goldtotal, equitydebtgoldtotal: equitydebtgoldtotal, cagr: cagr.toFixed(2), pan: pan, sum1: parseFloat(temp22 * days * cagr), sum2: parseFloat(temp22 * days) })
                                                            var pamt = 0; var mamt = 0; var camt = 0; var eamt = 0; var sum1amt = 0; var sum2amt = 0;
                                                            var damt = 0; var gamt = 0; var tamt = 0;
                                                            var dayschangeamt = 0;
                                                            for (var p = 0; p < finalarr.length; p++) {
                                                                pamt = finalarr[p].purchasecost + pamt;
                                                                mamt = finalarr[p].currentvalue + mamt;
                                                                eamt = finalarr[p].equitytotal + eamt;
                                                                damt = finalarr[p].debttotal + damt;
                                                                gamt = finalarr[p].goldtotal + gamt;
                                                                dayschangeamt = finalarr[p].days_change + dayschangeamt;
                                                                tamt = finalarr[p].equitydebtgoldtotal + tamt;
                                                                sum1amt = finalarr[p].sum1 + sum1amt;
                                                                sum2amt = finalarr[p].sum2 + sum2amt;
                                                            }


                                                        }
                                                        var equityper = 0;
                                                        var debtper = 0;
                                                        var goldper = 0;
                                                        equityper = (eamt / tamt) * 100;
                                                        debtper = (damt / tamt) * 100;
                                                        goldper = (gamt / tamt) * 100;
                                                        if (debtper > 100) {
                                                            debtper = 100;
                                                            equityper = 0;
                                                            goldper = 0;
                                                        } else if (goldper > 100) {
                                                            goldper = 100;
                                                            debtper = 0;
                                                            equityper = 0;
                                                        } else if (equityper > 100) {
                                                            equityper = 100;
                                                            debtper = 0;
                                                            goldper = 0;
                                                        }
                                                        // console.log("eamt=",equityper)
                                                        // console.log("damt=",debtper)
                                                        // console.log("gamt=",goldper)
                                                        resdata = {
                                                            status: 200,
                                                            message: "Successfull",
                                                            data: temp22
                                                        }
                                                        if (finalarr.length === panarray.length) {
                                                            finalsnapshotarr.push({
                                                                purchasecost: pamt.toLocaleString('en-IN'), currentvalue: mamt.toLocaleString('en-IN'), gain_str: (Math.round(mamt - pamt)).toLocaleString('en-IN'), gain: Math.round(mamt - pamt), dividend: 0,
                                                                days_change: dayschangeamt, days_change_str: dayschangeamt.toLocaleString('en-IN'), equity_perc: (equityper).toFixed(2), debt_perc: (debtper).toFixed(2), gold_perc: (goldper).toFixed(2), cagr: parseFloat((sum1amt / sum2amt).toFixed(2))
                                                            })
                                                            resdata.data = finalsnapshotarr[0];
                                                            res.json(resdata);
                                                        }
                                                    }
                                                } else {
                                                    console.log("purchase=", "Data Not Found!");
                                                    resdata = {
                                                        status: 400,
                                                        message: 'Data not found..',
                                                    }
                                                    res.json(resdata);
                                                }
                                            })
                                        } else {
                                            resdata = {
                                                status: 400,
                                                message: 'Data not found..',
                                            }
                                            res.json(resdata);
                                        }
                                        //   });
                                    });
                                })
                            });
                        });
                    } else {
                        var arr1 = []; var arr2 = []; var panarray = [];
                        var guardpan1 = []; var guardpan2 = [];
                        guardpan1.push({ GUARD_PAN: { $regex: req.body.pan.toUpperCase(), $options: 'i' } });//folio_cams
                        guardpan2.push({ GUARDPANNO: { $regex: req.body.pan.toUpperCase(), $options: 'i' } });//folio_karvy
                        arr1.push({ PAN: { $regex: req.body.pan.toUpperCase(), $options: 'i' } });
                        arr2.push({ PAN1: { $regex: req.body.pan.toUpperCase(), $options: 'i' } });
                        panarray.push({ pan: req.body.pan.toUpperCase(), name: "" });
                        var strPan1 = { $or: guardpan1 };//folio_cams
                        var strPan2 = { $or: guardpan2 };//folio_karvy

                        var pipeline3 = [  //folio_karvy
                            { $match: strPan2 },
                            { $project: { _id: 0, NAME: "$INVNAME", FOLIO: "$ACNO" } },
                        ]
                        var pipeline4 = [  //folio_cams
                            { $match: strPan1 },
                            { $project: { _id: 0, NAME: "$INV_NAME", FOLIO: "$FOLIOCHK" } },
                        ]
                        folioc.aggregate(pipeline4, (err, member1) => {
                            foliok.aggregate(pipeline3, (err, member2) => {
                                var alldata = member1.concat(member2);
                                alldata = alldata.filter(
                                    (temp => a =>
                                        (k => !temp[k] && (temp[k] = true))(a.NAME + '|' + a.FOLIO)
                                    )(Object.create(null))
                                );
                                var alldataname = alldata.filter(
                                    (temp => a =>
                                        (k => !temp[k] && (temp[k] = true))(a.NAME + '|' + a.NAME)
                                    )(Object.create(null))
                                );

                                for (var j = 0; j < alldataname.length; j++) {
                                    panarray.push({ pan: "", name: alldataname[j].NAME });
                                }
                                if (alldata.length != 0) {
                                    for (var j = 0; j < alldata.length; j++) {
                                        arr1.push({ FOLIO_NO: alldata[j].FOLIO });
                                        arr2.push({ TD_ACNO: alldata[j].FOLIO });
                                    }
                                }
                                var strFolio1 = { $or: arr1 };
                                var strFolio2 = { $or: arr2 };
                                pipeline1 = [  //trans_cams
                                    { $match: strFolio1 },
                                    { $project: { _id: 0, NAME: "$INV_NAME", PAN: { "$toUpper": ["$PAN"] }, FOLIO: "$FOLIO_NO", SCHEME: "$SCHEME", PRODCODE: "$PRODCODE", RTA: "CAMS" } }
                                ]
                                pipeline2 = [  //trans_karvy
                                    { $match: strFolio2 },
                                    { $project: { _id: 0, NAME: "$INVNAME", PAN: { "$toUpper": ["$PAN1"] }, FOLIO: "$TD_ACNO", SCHEME: "$FUNDDESC", PRODCODE: "$FMCODE", RTA: "KARVY" } }
                                ]
                                transc.aggregate(pipeline1, (err, data1) => {
                                    transk.aggregate(pipeline2, (err, data2) => {
                                        if (data1.length != 0 || data2.length != 0) {
                                            resdata = {
                                                status: 200,
                                                message: 'Successfull',
                                                data: data2
                                            }
                                            var datacon = data1.concat(data2);
                                            datacon = datacon.filter(
                                                (temp => a =>
                                                    (k => !temp[k] && (temp[k] = true))(a.PRODCODE + '|' + a.FOLIO)
                                                )(Object.create(null))
                                            );
                                            datacon = datacon.sort((a, b) => (a.SCHEME > b.SCHEME) ? 1 : -1);
                                            var dataarr = []; var lastarray = [];
                                            var finaldataarr = []; var hh = []; var gg = [];
                                            var newdataarr1 = []; var newdataarr2 = []; var newdataarr3 = [];
                                            var equitytotal = 0; var debttotal = 0; var goldtotal = 0; var equitydebtgoldtotal = 0;

                                            portfolioApisnapshot(datacon, result => {
                                                lastarray.push(result);
                                                for (var j = 0; j < lastarray.length; j++) {
                                                    for (var k = 0; k < lastarray[j].length; k++) {
                                                        dataarr.push(lastarray[j][k]);
                                                    }
                                                }
                                                var days = 0; var date1 = ""; var date2 = "";
                                                var arrdays = []; var alldays = [];
                                                var temp44 = 0; var finalsnapshotarr = [];
                                                var cnav = 0; var temp222 = 0; var finalarr = [];
                                                var oldcnav = 0; var newsum1 = []; var newsum2 = [];

                                                if (dataarr != null && dataarr.length > 0) {
                                                    for (var a = 0; a < datacon.length; a++) {
                                                        newdataarr1 = []; newdataarr2 = []; newdataarr3 = [];
                                                        dataarr = dataarr.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime());
                                                        for (var ii = 0; ii < dataarr.length; ii++) {
                                                            if (datacon[a].FOLIO === dataarr[ii].FOLIO && datacon[a].PRODCODE === dataarr[ii].PRODCODE) {
                                                                if (dataarr[ii].RTA === "CAMS") {
                                                                    newdataarr1.push(dataarr[ii])
                                                                } else if (dataarr[ii].RTA === "CAMS2A") {
                                                                    newdataarr2.push(dataarr[ii])
                                                                } else {
                                                                    newdataarr3.push(dataarr[ii])
                                                                }
                                                            }
                                                        }
                                                        if (newdataarr2.length > 0) {
                                                            newdataarr1.shift();
                                                        }
                                                        hh = newdataarr2.concat(newdataarr1.concat(newdataarr3))
                                                        finaldataarr.push(hh);
                                                    }
                                                    for (var j = 0; j < finaldataarr.length; j++) {
                                                        for (var k = 0; k < finaldataarr[j].length; k++) {
                                                            gg.push(finaldataarr[j][k]);
                                                        }
                                                    }
                                                    dataarr = gg;
                                                    for (var c = 0; c < panarray.length; c++) {
                                                        var newarray = []; var purchase = []; var name = ""; var pan = "";
                                                        var oldarray = [];
                                                        var cagrsum1array = []; var cagrsum2array = []; var finalsum1 = 0; var finalsum2 = 0;
                                                        for (var a = 0; a < datacon.length; a++) {
                                                            var temp44 = 0;
                                                            if (panarray[c].pan === datacon[a].PAN && (panarray[c].name === "" || panarray[c].name === datacon[a].NAME)) {

                                                                name = datacon[0].NAME;
                                                                pan = panarray[c].pan;
                                                                var amount = 0;
                                                                var unit = 0; var arrpurchase = []; var arrunit = [];
                                                                var temp4 = 0; var temp1, temp2 = 0; var temp3 = 0;
                                                                var cv = 0; var sum1 = []; var sum2 = [];
                                                                var balance = 0; var currentval = 0; var days = 0; var arrdays = []; var alldays = []; var arrnav = []; var scheme = ""; var cnav = 0; var type = "";
                                                                var oldcv = 0; var oldcnav = 0; var oldcurrentval = 0;
                                                                dataarr = dataarr.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime());
                                                                var countlength = 0; var externelcount = 0;
                                                                //loop for external counter
                                                                for (var ii = 0; ii < dataarr.length; ii++) {
                                                                    if (datacon[a].FOLIO === dataarr[ii].FOLIO && datacon[a].PRODCODE === dataarr[ii].PRODCODE) {
                                                                        externelcount = externelcount + 1;
                                                                    }
                                                                }
                                                                for (var i = 0; i < dataarr.length; i++) {
                                                                    if (datacon[a].FOLIO === dataarr[i].FOLIO && datacon[a].PRODCODE === dataarr[i].PRODCODE) {
                                                                        countlength = countlength + 1;
                                                                        if (Math.sign(dataarr[i].UNITS) != -1) {
                                                                            if (dataarr[i].NATURE === "Switch Out")
                                                                                for (var jj = 0; jj < arrunit.length; jj++) {

                                                                                    if (arrunit[jj] === 0)
                                                                                        arrunit.shift();
                                                                                    if (arrpurchase[jj] === 0)
                                                                                        arrpurchase.shift();
                                                                                    if (arrdays[jj] === 0)
                                                                                        arrdays.shift();
                                                                                    if (alldays[jj] === 0)
                                                                                        alldays.shift();
                                                                                    if (sum1[jj] === 0)
                                                                                        sum1.shift();
                                                                                    if (sum2[jj] === 0)
                                                                                        sum2.shift();
                                                                                    if (arrnav[jj] === 0)
                                                                                        arrnav.shift();
                                                                                }
                                                                        }
                                                                        cnav = dataarr[i].cnav[0];
                                                                        oldcnav = dataarr[i].daybefore[1];
                                                                        if (dataarr[i].NATURE != 'Switch Out' && dataarr[i].UNITS != 0) {

                                                                            unit = dataarr[i].UNITS
                                                                            amount = dataarr[i].AMOUNT;
                                                                            var date = dataarr[i].newdate;
                                                                            var navdate = dataarr[i].navdate[0];

                                                                            date1 = new Date(date);
                                                                            date2 = new Date(navdate);

                                                                            days = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));

                                                                            arrunit.push(dataarr[i].UNITS);
                                                                            if (dataarr[i].TD_NAV === 0) {
                                                                                arrpurchase.push(0);
                                                                            } else {
                                                                                arrpurchase.push(dataarr[i].AMOUNT);
                                                                            }
                                                                            arrnav.push(dataarr[i].TD_NAV)
                                                                            var precagr = parseFloat((parseFloat(Math.pow(parseFloat((cnav * dataarr[i].UNITS) / (dataarr[i].AMOUNT)), parseFloat(1 / parseFloat(days / 365)))) - 1) * 100);
                                                                            if (precagr === Infinity) {
                                                                                precagr = 0;
                                                                            } else {
                                                                                precagr = precagr;
                                                                            }
                                                                            //sum1(purchase cost*days*cagr)
                                                                            if (days === 0 && isNaN(days)) {
                                                                                sum1.push(0);
                                                                                arrdays.push(0);
                                                                                alldays.push(0);
                                                                                sum2.push(0);
                                                                            } else {
                                                                                arrdays.push(parseFloat(days) * parseFloat(dataarr[i].AMOUNT));

                                                                                alldays.push(parseFloat(days));

                                                                                sum1.push(parseFloat(dataarr[i].AMOUNT) * parseFloat(days) * parseFloat(precagr));

                                                                                sum2.push(parseFloat(dataarr[i].AMOUNT) * parseFloat(days));
                                                                            }
                                                                        } else {
                                                                            if (arrnav.length === 0) {
                                                                                arrnav[0] = 0;
                                                                            }
                                                                            unit = "-" + dataarr[i].UNITS
                                                                            amount = "-" + dataarr[i].AMOUNT
                                                                            temp2 = dataarr[i].UNITS;
                                                                            for (var p = 0; p < arrunit.length; p++) {
                                                                                if (arrunit[p] === 0) {
                                                                                    continue;
                                                                                }
                                                                                temp3 = arrunit[p];
                                                                                if (temp4 === 0) {
                                                                                    temp4 = parseFloat(temp3) - parseFloat(temp2);
                                                                                    temp4 = parseFloat(temp4.toFixed(4));

                                                                                    if (temp4 === 0) {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                        break;
                                                                                    } else if (temp4 > 0) {
                                                                                        arrunit[p] = temp4;
                                                                                        arrpurchase[p] = temp4 * arrnav[p];
                                                                                        arrdays[p] = parseFloat(alldays[p] * arrpurchase[p]);

                                                                                        sum1[p] = parseFloat(temp4 * arrnav[p]) * parseFloat(alldays[p]) * parseFloat((parseFloat(Math.pow(parseFloat((cnav * temp4) / (temp4 * arrnav[p])), parseFloat(1 / parseFloat(alldays[p] / 365)))) - 1) * 100);
                                                                                        sum2[p] = parseFloat(arrpurchase[p]) * parseFloat(alldays[p]);

                                                                                        break;
                                                                                    } else {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                    }
                                                                                } else if (temp4 > 0) {//+ve
                                                                                    if (countlength === arrnav.length + 1) {
                                                                                        temp4 = parseFloat(temp4) + parseFloat(temp3);
                                                                                        temp4 = parseFloat(temp4.toFixed(4));
                                                                                    }
                                                                                    else {
                                                                                        temp4 = parseFloat(temp4) - parseFloat(temp2);
                                                                                        temp4 = parseFloat(temp4.toFixed(4));
                                                                                    }
                                                                                    if (temp4 === 0) {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                        break;
                                                                                    } else if (temp4 > 0) {
                                                                                        arrunit[p] = temp4;
                                                                                        arrpurchase[p] = temp4 * arrnav[p];
                                                                                        arrdays[p] = parseFloat(alldays[p]) * arrpurchase[p];
                                                                                        sum1[p] = parseFloat(temp4 * arrnav[p]) * parseFloat(alldays[p]) * parseFloat((parseFloat(Math.pow(parseFloat((cnav * temp4) / (temp4 * arrnav[p])), parseFloat(1 / parseFloat(alldays[p] / 365)))) - 1) * 100);
                                                                                        sum2[p] = parseFloat(arrpurchase[p]) * parseFloat(alldays[p]);
                                                                                        break;
                                                                                    } else {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                    }
                                                                                } else {//-ve
                                                                                    temp4 = parseFloat(temp4) + parseFloat(temp3);
                                                                                    temp4 = parseFloat(temp4.toFixed(4));
                                                                                    if (temp4 === 0) {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                        break;
                                                                                    } else if (temp4 > 0) {
                                                                                        arrunit[p] = temp4;
                                                                                        arrpurchase[p] = temp4 * arrnav[p];
                                                                                        arrdays[p] = parseFloat(alldays[p]) * arrpurchase[p];
                                                                                        sum1[p] = parseFloat(temp4 * arrnav[p]) * parseFloat(alldays[p]) * parseFloat((parseFloat(Math.pow(parseFloat((cnav * temp4) / (temp4 * arrnav[p])), parseFloat(1 / parseFloat(alldays[p] / 365)))) - 1) * 100);
                                                                                        sum2[p] = parseFloat(arrpurchase[p]) * parseFloat(alldays[p]);
                                                                                        break;
                                                                                    } else {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                    }
                                                                                }
                                                                            }
                                                                        }//else condition equal switch

                                                                        balance = parseFloat(unit) + parseFloat(balance);
                                                                        cnav = dataarr[i].cnav[0];
                                                                        oldcnav = dataarr[i].daybefore[1];
                                                                        if (cnav === "" || cnav === undefined || isNaN(balance) || isNaN(cnav) || balance === 0) {
                                                                            balance = 0;
                                                                            cnav = 0;
                                                                        }
                                                                        currentval = cnav * balance;
                                                                        cv = parseFloat(currentval.toFixed(4));
                                                                        oldcurrentval = oldcnav * balance;
                                                                        oldcv = parseFloat(oldcurrentval.toFixed(4));

                                                                        type = dataarr[i].TYPE
                                                                        scheme = dataarr[i].SCHEME;

                                                                    }//if match two scheme and folio array 
                                                                } //dataarr inner loop
                                                                var sum1all = 0; var sum2all = 0;
                                                                for (var kk = 0; kk < sum1.length; kk++) {
                                                                    if (isNaN(sum1[kk])) {
                                                                        sum1[kk] = 0;
                                                                    } else {
                                                                        sum1all = sum1[kk] + sum1all;
                                                                    }
                                                                }
                                                                for (var kkk = 0; kkk < sum2.length; kkk++) {
                                                                    sum2all = sum2[kkk] + sum2all;
                                                                }

                                                                var cagr = parseFloat((sum1all / sum2all).toFixed(2));
                                                                if (cv > 0) {
                                                                    if (type === "EQUITY") {
                                                                        equitytotal = parseFloat(cv) + equitytotal;
                                                                    } else if (type === "DEBT") {
                                                                        debttotal = parseFloat(cv) + debttotal;
                                                                    } else {
                                                                        goldtotal = parseFloat(cv) + goldtotal;
                                                                    }
                                                                }

                                                                balance = parseFloat(balance.toFixed(3))
                                                                if (isNaN(cv) || cv < 0 || isNaN(oldcv) || balance < 0.002) {
                                                                    newarray.push(0)
                                                                    oldarray.push(0)
                                                                } else {
                                                                    if (scheme != "") {
                                                                        newarray.push(cv)
                                                                        oldarray.push(oldcv)
                                                                    }
                                                                }
                                                                temp22 = 0; temp33 = 0, temp222 = 0;
                                                                for (var k = 0; k < arrpurchase.length; k++) {
                                                                    temp33 = arrpurchase[k];
                                                                    temp22 = temp33 + temp22;
                                                                    temp222 = arrdays[k] + temp222;
                                                                }
                                                                if (balance < 0.002) {
                                                                    temp22 = 0;
                                                                } else {
                                                                    temp22 = parseFloat(temp22.toFixed(2));
                                                                }
                                                                if (temp222 === 0 || temp22 === 0 || isNaN(days)) {
                                                                    days = 0;
                                                                } else {
                                                                    days = Math.round(temp222 / temp22);
                                                                    cagrsum2array.push(temp22 * days);
                                                                    cagrsum1array.push(temp22 * days * cagr);
                                                                }
                                                                // console.log("ssssscv=",temp22, currentval, cv,scheme)
                                                                if (cv === 0 || balance === 0 || cv === -0 || balance === -0) {
                                                                    temp22 = 0;
                                                                } else {
                                                                    purchase.push(temp22);
                                                                }

                                                            }//pan comparision

                                                        } // datascheme first loop
                                                        equitytotal = Math.round(equitytotal);
                                                        debttotal = Math.round(debttotal);
                                                        goldtotal = Math.round(goldtotal);
                                                        equitydebtgoldtotal = parseFloat(equitytotal) + parseFloat(debttotal) + parseFloat(goldtotal);

                                                        temp22 = 0; temp33 = 0
                                                        finalsum1 = 0; finalsum2 = 0;
                                                        for (var p = 0; p < cagrsum1array.length; p++) {
                                                            finalsum1 = cagrsum1array[p] + finalsum1;
                                                        }
                                                        for (var p = 0; p < cagrsum2array.length; p++) {
                                                            finalsum2 = cagrsum2array[p] + finalsum2;
                                                        }
                                                        cagr = 0;

                                                        if (finalsum1 === 0 && finalsum2 === 0) {
                                                            cagr = 0;
                                                        } else {
                                                            cagr = finalsum1 / finalsum2;
                                                        }

                                                        temp44 = 0; var temp444 = 0;
                                                        temp33 = 0; temp22 = 0;

                                                        for (var p = 0; p < newarray.length; p++) {
                                                            temp44 = newarray[p] + temp44;
                                                            temp444 = oldarray[p] + temp444;
                                                        }

                                                        for (var k = 0; k < purchase.length; k++) {
                                                            temp33 = purchase[k];
                                                            temp22 = temp33 + temp22;
                                                        }
                                                        temp22 = parseFloat(temp22.toFixed(2));
                                                        resdata = {
                                                            status: 200,
                                                            message: "Successfull",
                                                            data: temp22
                                                        }

                                                        if (temp22 === 0 && temp44 === 0) {
                                                            equitytotal = 0;
                                                            debttotal = 0;
                                                            goldtotal = 0;
                                                            equitydebtgoldtotal = 0;
                                                            cagr = 0;
                                                            temp444 = 0;

                                                            finalarr.push({ name: name, purchasecost: Math.round(temp22), currentvalue: Math.round(temp44), dividend: 0, days_change: temp444, gain: Math.round(temp44 - temp22), cagr: parseFloat(cagr.toFixed(2)), equitytotal: equitytotal, debttotal: debttotal, goldtotal: goldtotal, equitydebtgoldtotal: equitydebtgoldtotal })

                                                        } else {
                                                            finalarr.push({ name: name, purchasecost: Math.round(temp22), currentvalue: Math.round(temp44), dividend: 0, days_change: Math.round(temp44) - Math.round(temp444), gain: Math.round(temp44 - temp22), cagr: parseFloat(cagr.toFixed(2)), equitytotal: equitytotal, debttotal: debttotal, goldtotal: goldtotal, equitydebtgoldtotal: equitydebtgoldtotal })
                                                        }

                                                        var pamt = 0; var mamt = 0; var camt = 0; var eamt = 0;
                                                        var damt = 0; var gamt = 0; var tamt = 0;
                                                        var dayschangeamt = 0; var equity_perc = 0;
                                                        var debt_perc = 0; var gold_perc = 0;
                                                        for (var p = 0; p < finalarr.length; p++) {
                                                            pamt = finalarr[p].purchasecost + pamt;
                                                            mamt = finalarr[p].currentvalue + mamt;
                                                            eamt = finalarr[p].equitytotal + eamt;
                                                            damt = finalarr[p].debttotal + damt;
                                                            gamt = finalarr[p].goldtotal + gamt;
                                                            dayschangeamt = finalarr[p].days_change + dayschangeamt;
                                                            tamt = finalarr[p].equitydebtgoldtotal + tamt;
                                                        }

                                                        if (eamt === 0 & tamt === 0) {
                                                            equity_perc = 0;
                                                        } else {
                                                            equity_perc = ((eamt / tamt) * 100).toFixed(2);
                                                        }
                                                        if (damt === 0 & tamt === 0) {
                                                            debt_perc = 0;
                                                        } else {
                                                            debt_perc = ((damt / tamt) * 100).toFixed(2);
                                                        }
                                                        if (gamt === 0 & tamt === 0) {
                                                            gold_perc = 0;
                                                        } else {
                                                            gold_perc = ((gamt / tamt) * 100).toFixed(2);
                                                        }

                                                        if (debt_perc > 100) {
                                                            debt_perc = 100;
                                                            equity_perc = 0;
                                                            gold_perc = 0;
                                                        } else if (gold_perc > 100) {
                                                            gold_perc = 100;
                                                            debt_perc = 0;
                                                            equity_perc = 0;
                                                        } else if (equity_perc > 100) {
                                                            equity_perc = 100;
                                                            debt_perc = 0;
                                                            gold_perc = 0;
                                                        }

                                                        if (finalarr.length === panarray.length) {
                                                            finalsnapshotarr.push({
                                                                name: name,
                                                                purchasecost: pamt.toLocaleString('en-IN'), currentvalue: mamt.toLocaleString('en-IN'), gain_str: (Math.round(mamt - pamt)).toLocaleString('en-IN'), gain: Math.round(mamt - pamt), dividend: 0,
                                                                days_change: dayschangeamt, days_change_str: dayschangeamt.toLocaleString('en-IN'), equity_perc: equity_perc, debt_perc: debt_perc, gold_perc: gold_perc, cagr: parseFloat(cagr.toFixed(2))
                                                            })
                                                            //  console.log("response=", finalsnapshotarr[0]);
                                                            resdata.data = finalsnapshotarr[0];
                                                            res.json(resdata);

                                                        }
                                                    }
                                                } else {
                                                    console.log("purchase=", "Data Not Found!")
                                                    resdata = {
                                                        status: 400,
                                                        message: 'Data not found',
                                                    }
                                                    res.json(resdata);
                                                }

                                            })

                                        } else {
                                            resdata = {
                                                status: 400,
                                                message: 'Data not found',
                                            }
                                            res.json(resdata);
                                        }
                                    });
                                })

                            })
                        })
                    }
                });
            }
        } else {
            resdata = {
                status: 400,
                message: 'Key not found',
            }
            res.json(resdata);
        }
    } catch (err) {
        console.log(err)
    }
})

app.post("/api/portfolio_api_data", function (req, res) {
    try {
        if (req.body.pan != undefined) {
            req.body.pan = req.body.pan.toUpperCase();
            var regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
            if (req.body.pan === "") {
                resdata = {
                    status: 400,
                    message: 'Please enter pan',
                }
                res.json(resdata);
                return resdata;
            } else if (!regex.test(req.body.pan)) {
                resdata = {
                    status: 400,
                    message: 'Please enter valid pan',
                }
                res.json(resdata);
                return resdata;
            } else {
                var resdata = "";
                family.find({ adminPan: { $regex: `^${req.body.pan}.*`, $options: 'i' } }, { _id: 0, memberPan: 1 }, function (err, member) {
                    if (member != "") {
                        var arr1 = []; var arr2 = []; var panarray = [];
                        var guardpan1 = []; var guardpan2 = [];
                        member = [...new Set(member.map(({ memberPan }) => memberPan.toUpperCase()))];
                        for (var j = 0; j < member.length; j++) {
                            panarray.push({ pan: member[j], name: "" })
                            guardpan1.push({ GUARD_PAN: member[j] });//folio_cams
                            guardpan2.push({ GUARDPANNO: member[j] });//folio_karvy
                            arr1.push({ PAN: member[j] });
                            arr2.push({ PAN1: member[j] });

                        }
                        guardpan1.push({ GUARD_PAN: req.body.pan.toUpperCase() });//folio_cams
                        guardpan2.push({ GUARDPANNO: req.body.pan.toUpperCase() });//folio_karvy
                        arr1.push({ PAN: req.body.pan.toUpperCase() });
                        arr2.push({ PAN1: req.body.pan.toUpperCase() });
                        panarray.push({ pan: req.body.pan, name: "" });
                        var strPan = { $or: guardpan1 };
                        var strPan1 = { $or: guardpan2 };
                        var pipeline3 = [  //folio_karvy
                            { $match: strPan1 },
                            { $project: { _id: 0, NAME: "$INVNAME", FOLIO: "$ACNO" } },
                        ]
                        var pipeline4 = [  //folio_cams
                            { $match: strPan },
                            { $project: { _id: 0, NAME: "$INV_NAME", FOLIO: "$FOLIOCHK" } },
                        ]
                        folioc.aggregate(pipeline4, (err, member1) => {
                            foliok.aggregate(pipeline3, (err, member2) => {
                                var alldata = member1.concat(member2);

                                alldata = alldata.filter(
                                    (temp => a =>
                                        (k => !temp[k] && (temp[k] = true))(a.NAME + '|' + a.FOLIO)
                                    )(Object.create(null))
                                );
                                var alldataname = alldata.filter(
                                    (temp => a =>
                                        (k => !temp[k] && (temp[k] = true))(a.NAME + '|' + a.NAME)
                                    )(Object.create(null))
                                );

                                for (var j = 0; j < alldataname.length; j++) {
                                    panarray.push({ pan: "", name: alldataname[j].NAME });
                                }
                                if (alldata.length != 0) {
                                    for (var j = 0; j < alldata.length; j++) {
                                        arr1.push({ FOLIO_NO: alldata[j].FOLIO });
                                        arr2.push({ TD_ACNO: alldata[j].FOLIO });
                                    }
                                }

                                var strFolio1 = { $or: arr1 };
                                var strFolio2 = { $or: arr2 };
                                pipeline1 = [  //trans_karvy
                                    { $match: strFolio2 },
                                    { $project: { _id: 0, NAME: "$INVNAME", PAN: "$PAN1", PRODCODE: "$FMCODE", SCHEME: "$FUNDDESC", FOLIO: "$TD_ACNO", RTA: "KARVY" } },
                                ]
                                pipeline2 = [  //trans_cams
                                    { $match: strFolio1 },
                                    { $project: { _id: 0, NAME: "$INV_NAME", PAN: "$PAN", PRODCODE: "$PRODCODE", SCHEME: "$SCHEME", FOLIO: "$FOLIO_NO", RTA: "CAMS" } },
                                ]
                                transk.aggregate(pipeline1, (err, data1) => {
                                    transc.aggregate(pipeline2, (err, data2) => {

                                        if (data1.length != 0 || data2.length != 0) {
                                            resdata = {
                                                status: 200,
                                                message: 'Successfull',
                                                data: data2
                                            }
                                            var datacon = data1.concat(data2);

                                            datacon = datacon.filter(
                                                (temp => a =>
                                                    (k => !temp[k] && (temp[k] = true))(a.PRODCODE + '|' + a.FOLIO)
                                                )(Object.create(null))
                                            );
                                            var dataarr = []; var lastarray = [];
                                            var finaldataarr = []; var hh = []; var gg = [];
                                            var newdataarr1 = []; var newdataarr2 = []; var newdataarr3 = [];
                                            datacon = datacon.sort((a, b) => (a.SCHEME > b.SCHEME) ? 1 : -1);

                                            portfolioApiDetail(datacon, result => {
                                                lastarray.push(result);
                                                for (var j = 0; j < lastarray.length; j++) {
                                                    for (var k = 0; k < lastarray[j].length; k++) {
                                                        dataarr.push(lastarray[j][k]);
                                                    }
                                                }
                                                var amount = 0; var date1 = ""; var date2 = "";

                                                var cnav = 0; var temp222 = 0; var finalarr = [];
                                                var navrate = 0; var lastfinalarr = [];

                                                if (dataarr != null && dataarr.length > 0) {
                                                    for (var a = 0; a < datacon.length; a++) {
                                                        newdataarr1 = []; newdataarr2 = []; newdataarr3 = [];
                                                        dataarr = dataarr.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime());
                                                        for (var ii = 0; ii < dataarr.length; ii++) {
                                                            if (datacon[a].FOLIO === dataarr[ii].FOLIO && datacon[a].PRODCODE === dataarr[ii].PRODCODE) {
                                                                if (dataarr[ii].RTA === "CAMS") {
                                                                    newdataarr1.push(dataarr[ii])
                                                                } else if (dataarr[ii].RTA === "CAMS2A") {
                                                                    newdataarr2.push(dataarr[ii])
                                                                } else {
                                                                    newdataarr3.push(dataarr[ii])
                                                                }
                                                            }
                                                        }
                                                        if (newdataarr2.length > 0) {
                                                            newdataarr1.shift();
                                                        }
                                                        hh = newdataarr2.concat(newdataarr1.concat(newdataarr3))
                                                        finaldataarr.push(hh);
                                                    }

                                                    for (var j = 0; j < finaldataarr.length; j++) {
                                                        for (var k = 0; k < finaldataarr[j].length; k++) {
                                                            gg.push(finaldataarr[j][k]);
                                                        }
                                                    }
                                                    dataarr = gg;
                                                    for (var c = 0; c < panarray.length; c++) {
                                                        var newarray = []; var purchase = []; var name = "";
                                                        var cagrarray = []; var cagrsum1array = [];
                                                        var cagrsum2array = []; var finalsum1 = 0;
                                                        var finalsum2 = 0; var pan = "";
                                                        var dayspurchase = [];
                                                        for (var a = 0; a < datacon.length; a++) {
                                                            var temp44 = 0;
                                                            if (panarray[c].pan === datacon[a].PAN && (panarray[c].name === "" || panarray[c].name === datacon[a].NAME)) {
                                                                name = datacon[a].NAME;
                                                                pan = panarray[c].pan;
                                                                var days = 0; var arrdays = []; var alldays = [];
                                                                var unit = 0; var arrpurchase = []; var arrunit = []; var arrnav = []; var scheme = "";
                                                                var temp4 = 0; var temp1, temp2 = 0; var temp3 = 0; var cnav = 0;
                                                                var cv = 0; var sum1 = []; var sum2 = [];
                                                                var arrdays = []; var alldays = [];
                                                                dataarr = dataarr.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime());
                                                                var countlength = 0; var externelcount = 0;
                                                                //loop for external counter
                                                                for (var ii = 0; ii < dataarr.length; ii++) {
                                                                    if (datacon[a].FOLIO === dataarr[ii].FOLIO && datacon[a].PRODCODE === dataarr[ii].PRODCODE) {
                                                                        externelcount = externelcount + 1;
                                                                    }
                                                                }
                                                                for (var i = 0; i < dataarr.length; i++) {
                                                                    var currentval = 0; var balance = 0;

                                                                    if (datacon[a].FOLIO === dataarr[i].FOLIO && datacon[a].PRODCODE === dataarr[i].PRODCODE) {
                                                                        countlength = countlength + 1;
                                                                        if (Math.sign(dataarr[i].UNITS) != -1) {
                                                                            if (dataarr[i].NATURE === "Switch Out")
                                                                                for (var jj = 0; jj < arrunit.length; jj++) {

                                                                                    if (arrunit[jj] === 0)
                                                                                        arrunit.shift();
                                                                                    if (arrpurchase[jj] === 0)
                                                                                        arrpurchase.shift();
                                                                                    if (arrdays[jj] === 0)
                                                                                        arrdays.shift();
                                                                                    if (alldays[jj] === 0)
                                                                                        alldays.shift();
                                                                                    if (sum1[jj] === 0)
                                                                                        sum1.shift();
                                                                                    if (sum2[jj] === 0)
                                                                                        sum2.shift();
                                                                                    if (arrnav[jj] === 0)
                                                                                        arrnav.shift();
                                                                                }
                                                                        }
                                                                        cnav = dataarr[i].cnav;
                                                                        if (dataarr[i].NATURE != 'Switch Out' && dataarr[i].UNITS != 0) {

                                                                            unit = dataarr[i].UNITS
                                                                            amount = dataarr[i].AMOUNT;
                                                                            var date = dataarr[i].newdate;
                                                                            var navdate = dataarr[i].navdate;

                                                                            date1 = new Date(date);
                                                                            date2 = new Date(navdate);

                                                                            days = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));

                                                                            arrunit.push(dataarr[i].UNITS);

                                                                            if (dataarr[i].TD_NAV === 0) {
                                                                                arrpurchase.push(0);
                                                                            } else {
                                                                                arrpurchase.push(dataarr[i].AMOUNT);
                                                                            }
                                                                            arrnav.push(dataarr[i].TD_NAV);

                                                                            var precagr = parseFloat((parseFloat(Math.pow(parseFloat((cnav * dataarr[i].UNITS) / (dataarr[i].AMOUNT)), parseFloat(1 / parseFloat(days / 365)))) - 1) * 100);
                                                                            if (precagr === Infinity) {
                                                                                precagr = 0;
                                                                            } else {
                                                                                precagr = precagr;
                                                                            }
                                                                            //sum1(purchase cost*days*cagr)
                                                                            if (days === 0 && isNaN(days)) {
                                                                                sum1.push(0);
                                                                                arrdays.push(0);
                                                                                alldays.push(0);
                                                                                sum2.push(0);
                                                                            } else {

                                                                                arrdays.push(parseFloat(days) * (parseFloat(dataarr[i].AMOUNT)));

                                                                                alldays.push(parseFloat(days));
                                                                                sum1.push(parseFloat(dataarr[i].AMOUNT) * parseFloat(days) * parseFloat(precagr));

                                                                                sum2.push(parseFloat(dataarr[i].AMOUNT) * parseFloat(days));

                                                                            }

                                                                        } else {
                                                                            var precagr = 0;
                                                                            unit = "-" + dataarr[i].UNITS
                                                                            amount = "-" + dataarr[i].AMOUNT
                                                                            temp2 = dataarr[i].UNITS;
                                                                            for (var p = 0; p < arrunit.length; p++) {
                                                                                if (arrunit[p] === 0) {
                                                                                    continue;
                                                                                }
                                                                                temp3 = arrunit[p];
                                                                                if (temp4 === 0) {

                                                                                    temp4 = parseFloat(temp3) - parseFloat(temp2);
                                                                                    temp4 = parseFloat(temp4.toFixed(4));

                                                                                    if (temp4 === 0) {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                        break;
                                                                                    } else if (temp4 > 0) {
                                                                                        arrunit[p] = temp4;
                                                                                        arrpurchase[p] = temp4 * arrnav[p];
                                                                                        arrdays[p] = parseFloat(alldays[p] * arrpurchase[p]);

                                                                                        precagr = parseFloat((Math.pow((temp4 * cnav / (arrpurchase[p])), (1 / (alldays[p] / 365))) - 1) * 100);


                                                                                        if (precagr === Infinity) {
                                                                                            precagr = 0;
                                                                                        } else {
                                                                                            precagr = precagr;
                                                                                        }

                                                                                        sum1[p] = parseFloat(parseFloat(temp4 * arrnav[p]) * parseFloat(alldays[p]) * precagr);


                                                                                        sum2[p] = parseFloat(arrpurchase[p]) * parseFloat(alldays[p]);

                                                                                        break;
                                                                                    } else {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                    }
                                                                                } else if (temp4 > 0) {//+ve

                                                                                    if (countlength === arrnav.length + 1) {

                                                                                        temp4 = parseFloat(temp4) + parseFloat(temp3);
                                                                                        temp4 = parseFloat(temp4.toFixed(4));

                                                                                    }
                                                                                    else {
                                                                                        temp4 = parseFloat(temp4) - parseFloat(temp2);
                                                                                        temp4 = parseFloat(temp4.toFixed(4));

                                                                                    }

                                                                                    if (temp4 === 0) {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                        break;
                                                                                    } else if (temp4 > 0) {
                                                                                        arrunit[p] = temp4;

                                                                                        arrpurchase[p] = temp4 * arrnav[p];
                                                                                        arrdays[p] = parseFloat(alldays[p]) * arrpurchase[p];

                                                                                        precagr = parseFloat((Math.pow((temp4 * cnav / (arrpurchase[p])), (1 / (alldays[p] / 365))) - 1) * 100);


                                                                                        if (precagr === Infinity) {
                                                                                            precagr = 0;
                                                                                        } else {
                                                                                            precagr = precagr;
                                                                                        }

                                                                                        sum1[p] = parseFloat(parseFloat(temp4 * arrnav[p]) * parseFloat(alldays[p]) * precagr);

                                                                                        sum2[p] = parseFloat(arrpurchase[p]) * parseFloat(alldays[p]);

                                                                                        break;
                                                                                    } else {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                    }
                                                                                } else {//-ve
                                                                                    temp4 = parseFloat(temp4) + parseFloat(temp3);
                                                                                    temp4 = parseFloat(temp4.toFixed(4));

                                                                                    if (temp4 === 0) {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;

                                                                                        break;
                                                                                    } else if (temp4 > 0) {
                                                                                        arrunit[p] = temp4;

                                                                                        arrpurchase[p] = temp4 * arrnav[p];
                                                                                        arrdays[p] = parseFloat(alldays[p]) * arrpurchase[p];

                                                                                        precagr = parseFloat((Math.pow((temp4 * cnav / (arrpurchase[p])), (1 / (alldays[p] / 365))) - 1) * 100);


                                                                                        if (precagr === Infinity) {
                                                                                            precagr = 0;
                                                                                        } else {
                                                                                            precagr = precagr;
                                                                                        }

                                                                                        sum1[p] = parseFloat(parseFloat(temp4 * arrnav[p]) * parseFloat(alldays[p]) * precagr);

                                                                                        sum2[p] = parseFloat(arrpurchase[p]) * parseFloat(alldays[p]);

                                                                                        break;
                                                                                    } else {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                        // break;
                                                                                    }
                                                                                }
                                                                            }

                                                                        }//else condition equal switch

                                                                        balance = parseFloat(unit) + parseFloat(balance);

                                                                        cnav = dataarr[i].cnav;
                                                                        if (cnav === "" || cnav === undefined || isNaN(balance) || isNaN(cnav)) {
                                                                            balance = 0;
                                                                            cnav = 0;
                                                                        }
                                                                        currentval = cnav * balance
                                                                        cv = currentval + cv;
                                                                        cv = parseFloat(cv.toFixed(4));
                                                                        scheme = dataarr[i].SCHEME;
                                                                    }//if match scheme & folio 

                                                                } //dataarr inner loop

                                                                var sum1all = 0; var sum2all = 0;

                                                                for (var kk = 0; kk < sum1.length; kk++) {
                                                                    sum1all = sum1[kk] + sum1all;
                                                                }
                                                                for (var kkk = 0; kkk < sum2.length; kkk++) {
                                                                    sum2all = sum2[kkk] + sum2all;
                                                                }
                                                                var cagr = parseFloat((sum1all / sum2all).toFixed(2));
                                                                if (isNaN(cagr) || cagr === Infinity) {
                                                                    cagr = 0;
                                                                } else {
                                                                    cagr = cagr;
                                                                }
                                                                if (isNaN(cv) || cv < 0) {
                                                                    newarray.push(0)
                                                                } else {
                                                                    if (scheme != "") {
                                                                        newarray.push(cv)
                                                                    }
                                                                }

                                                                temp22 = 0; temp33 = 0
                                                                var temp222 = 0;
                                                                for (var k = 0; k < arrpurchase.length; k++) {
                                                                    //temp33 = arrpurchase[k];
                                                                    //temp22 = temp33 + temp22;
                                                                    if (isNaN(arrpurchase[k])) {
                                                                        arrpurchase[k] = 0;
                                                                    } else {
                                                                        temp22 = arrpurchase[k] + temp22;
                                                                    }
                                                                    temp222 = arrdays[k] + temp222;
                                                                }
                                                                temp22 = parseFloat(temp22.toFixed(2));
                                                                temp222 = parseFloat(temp222.toFixed(2));
                                                                if (temp22 === 0) {
                                                                    days = 0;
                                                                } else {
                                                                    days = Math.round(temp222 / temp22);
                                                                    cagrsum2array.push(temp22 * days);
                                                                    cagrsum1array.push(temp22 * days * cagr);
                                                                }

                                                                if (temp22 != 0) {
                                                                    dayspurchase.push(days * temp22);
                                                                    purchase.push(temp22);
                                                                }

                                                                // if (isNaN(sum2all) || (sum2all) === Infinity || isNaN(sum1all) || (sum1all) === Infinity) {
                                                                //     cagrsum2array.push(0);
                                                                //     cagrsum1array.push(0);
                                                                // } else {
                                                                //     cagrsum2array.push(sum2all);
                                                                //     cagrsum1array.push(sum1all);
                                                                // }

                                                            } // pan comparision
                                                        }
                                                        temp22 = 0; temp33 = 0;
                                                        finalsum1 = 0; finalsum2 = 0;
                                                        for (var p = 0; p < cagrsum1array.length; p++) {
                                                            finalsum1 = cagrsum1array[p] + finalsum1;
                                                        }
                                                        for (var p = 0; p < cagrsum2array.length; p++) {
                                                            finalsum2 = cagrsum2array[p] + finalsum2;
                                                        }

                                                        cagr = finalsum1 / finalsum2;

                                                        for (var p = 0; p < newarray.length; p++) {
                                                            temp44 = newarray[p] + temp44;
                                                        }
                                                        for (var k = 0; k < purchase.length; k++) {
                                                            temp33 = purchase[k];
                                                            temp22 = temp33 + temp22;
                                                        }
                                                        temp22 = parseFloat(temp22.toFixed(2));
                                                        if (parseInt(temp22) === 0 && parseInt(temp44) === 0) {
                                                            // cagr = 0;
                                                            finalarr.push({ name: name, purchasecost: temp22, currentvalue: Math.round(temp44), cagr: parseFloat(cagr.toFixed(2)), pan: pan })
                                                        } else {
                                                            finalarr.push({ name: name, purchasecost: temp22.toLocaleString('en-IN'), currentvalue: (Math.round(temp44)).toLocaleString('en-IN'), cagr: parseFloat(cagr.toFixed(2)), pan: pan })

                                                            lastfinalarr.push({ name: name, purchasecost: (Math.round(temp22)).toLocaleString('en-IN'), currentvalue: (Math.round(temp44)).toLocaleString('en-IN'), cagr: parseFloat(cagr.toFixed(2)), pan: pan })
                                                        }
                                                        resdata = {
                                                            status: 200,
                                                            message: "Successfull",
                                                            data: temp22
                                                        }
                                                        resdata.data = finalarr;
                                                        if (finalarr.length === panarray.length) {
                                                            resdata.data = lastfinalarr;
                                                            res.json(resdata);
                                                        }
                                                    }
                                                } else {
                                                    console.log("purchase=", "Data Not Found!")
                                                    resdata = {
                                                        status: 400,
                                                        message: 'Data not found',
                                                    }
                                                    res.json(resdata);
                                                }
                                            })
                                        } else {
                                            resdata = {
                                                status: 400,
                                                message: 'Data not found',
                                            }
                                            res.json(resdata);
                                        }

                                    });
                                })
                            });
                        });
                    } else {

                        var resdata = ""; var arr1 = []; var arr2 = []; var panarray = [];
                        var guardpan1 = []; var guardpan2 = [];

                        guardpan1.push({ GUARD_PAN: { $regex: req.body.pan.toUpperCase(), $options: 'i' } });//folio_cams
                        guardpan2.push({ GUARDPANNO: { $regex: req.body.pan.toUpperCase(), $options: 'i' } });//folio_karvy
                        arr1.push({ PAN: { $regex: req.body.pan.toUpperCase(), $options: 'i' } });
                        arr2.push({ PAN1: { $regex: req.body.pan.toUpperCase(), $options: 'i' } });
                        panarray.push({ pan: req.body.pan.toUpperCase(), name: "" });
                        var strPan = { $or: guardpan1 };
                        var strPan1 = { $or: guardpan2 };
                        var pipeline3 = [  //folio_karvy
                            { $match: strPan1 },
                            { $project: { _id: 0, NAME: "$INVNAME", FOLIO: "$ACNO" } },
                        ]
                        var pipeline4 = [  //folio_cams
                            { $match: strPan },
                            { $project: { _id: 0, NAME: "$INV_NAME", FOLIO: "$FOLIOCHK" } },
                        ]
                        folioc.aggregate(pipeline4, (err, member1) => {
                            foliok.aggregate(pipeline3, (err, member2) => {
                                var alldata = member1.concat(member2);
                                //console.log("******alldata*******: ",alldata);

                                alldata = alldata.filter(
                                    (temp => a =>
                                        (k => !temp[k] && (temp[k] = true))(a.NAME + '|' + a.FOLIO)
                                    )(Object.create(null))
                                );
                                var alldataname = alldata.filter(
                                    (temp => a =>
                                        (k => !temp[k] && (temp[k] = true))(a.NAME + '|' + a.NAME)
                                    )(Object.create(null))
                                );

                                for (var j = 0; j < alldataname.length; j++) {
                                    panarray.push({ pan: "", name: alldataname[j].NAME });
                                }
                                if (alldata.length != 0) {
                                    for (var j = 0; j < alldata.length; j++) {
                                        arr1.push({ FOLIO_NO: alldata[j].FOLIO });
                                        arr2.push({ TD_ACNO: alldata[j].FOLIO });
                                    }
                                }
                                var strFolio1 = { $or: arr1 };
                                var strFolio2 = { $or: arr2 };
                                pipeline1 = [  //trans_cams
                                    { $match: strFolio1 },
                                    { $project: { _id: 0, NAME: "$INV_NAME", PAN: { "$toUpper": ["$PAN"] }, PRODCODE: "$PRODCODE", FOLIO: "$FOLIO_NO", SCHEME: "$SCHEME", RTA: "CAMS" } }
                                ]
                                pipeline2 = [  //trans_karvy
                                    { $match: strFolio2 },
                                    { $project: { _id: 0, NAME: "$INVNAME", PAN: { "$toUpper": ["$PAN1"] }, PRODCODE: "$FMCODE", FOLIO: "$TD_ACNO", SCHEME: "$FUNDDESC", RTA: "KARVY" } }
                                ]

                                transc.aggregate(pipeline1, (err, data1) => {
                                    transk.aggregate(pipeline2, (err, data2) => {
                                        if (data1.length != 0 || data2.length != 0) {
                                            resdata = {
                                                status: 200,
                                                message: 'Successfull',
                                                data: data2
                                            }
                                            var datacon = data1.concat(data2);

                                            datacon = datacon.filter(
                                                (temp => a =>
                                                    (k => !temp[k] && (temp[k] = true))(a.PRODCODE + '|' + a.FOLIO)
                                                )(Object.create(null))
                                            );
                                            var dataarr = []; var lastarray = [];
                                            var finaldataarr = []; var hh = []; var gg = [];
                                            var newdataarr1 = []; var newdataarr2 = []; var newdataarr3 = [];

                                            datacon = datacon.sort((a, b) => (a.SCHEME > b.SCHEME) ? 1 : -1);

                                            portfolioApiDetail(datacon, result => {
                                                lastarray.push(result);
                                                for (var j = 0; j < lastarray.length; j++) {
                                                    for (var k = 0; k < lastarray[j].length; k++) {
                                                        dataarr.push(lastarray[j][k]);
                                                    }
                                                }
                                                var amount = 0; var date1 = ""; var date2 = "";
                                                var temp44 = 0;
                                                var cnav = 0; var temp222 = 0; var finalarr = [];

                                                if (dataarr != null && dataarr.length > 0) {

                                                    for (var a = 0; a < datacon.length; a++) {
                                                        newdataarr1 = []; newdataarr2 = []; newdataarr3 = [];
                                                        dataarr = dataarr.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime());
                                                        for (var ii = 0; ii < dataarr.length; ii++) {
                                                            if (datacon[a].FOLIO === dataarr[ii].FOLIO && datacon[a].PRODCODE === dataarr[ii].PRODCODE) {
                                                                if (dataarr[ii].RTA === "CAMS") {
                                                                    newdataarr1.push(dataarr[ii])
                                                                } else if (dataarr[ii].RTA === "CAMS2A") {
                                                                    newdataarr2.push(dataarr[ii])
                                                                } else {
                                                                    newdataarr3.push(dataarr[ii])
                                                                }
                                                            }
                                                        }
                                                        if (newdataarr2.length > 0) {
                                                            newdataarr1.shift();
                                                        }
                                                        hh = newdataarr2.concat(newdataarr1.concat(newdataarr3))
                                                        finaldataarr.push(hh);
                                                    }

                                                    for (var j = 0; j < finaldataarr.length; j++) {
                                                        for (var k = 0; k < finaldataarr[j].length; k++) {
                                                            gg.push(finaldataarr[j][k]);
                                                        }
                                                    }
                                                    dataarr = gg;

                                                    for (var c = 0; c < panarray.length; c++) {
                                                        var newarray = []; var purchase = []; var name = "";
                                                        var cagrarray = []; var cagrsum1array = [];
                                                        var cagrsum2array = []; var finalsum1 = 0;
                                                        var finalsum2 = 0; var pan = "";
                                                        for (var a = 0; a < datacon.length; a++) {
                                                            var temp44 = 0;
                                                            if (panarray[c].pan === datacon[a].PAN && (panarray[c].name === "" || panarray[c].name === datacon[a].NAME)) {
                                                                name = datacon[a].NAME;
                                                                pan = panarray[c].pan;
                                                                var days = 0; var arrdays = []; var alldays = [];
                                                                var unit = 0; var arrpurchase = []; var arrunit = [];
                                                                var temp4 = 0; var temp1, temp2 = 0; var temp3 = 0;
                                                                var cv = 0; var sum1 = []; var sum2 = [];
                                                                var balance = 0; var currentval = 0;
                                                                var days = 0; var arrdays = []; var alldays = []; var arrnav = []; var scheme = ""; var cnav = 0;
                                                                dataarr = dataarr.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime());
                                                                var countlength = 0; var externelcount = 0;
                                                                //loop for external counter
                                                                for (var ii = 0; ii < dataarr.length; ii++) {
                                                                    if (datacon[a].FOLIO === dataarr[ii].FOLIO && datacon[a].PRODCODE === dataarr[ii].PRODCODE) {
                                                                        externelcount = externelcount + 1;
                                                                    }
                                                                }
                                                                for (var i = 0; i < dataarr.length; i++) {
                                                                    // var currentval = 0; var balance = 0;

                                                                    if (datacon[a].FOLIO === dataarr[i].FOLIO && datacon[a].PRODCODE === dataarr[i].PRODCODE) {
                                                                        countlength = countlength + 1;
                                                                        if (Math.sign(dataarr[i].UNITS) != -1) {
                                                                            if (dataarr[i].NATURE === "Switch Out")
                                                                                for (var jj = 0; jj < arrunit.length; jj++) {

                                                                                    if (arrunit[jj] === 0)
                                                                                        arrunit.shift();
                                                                                    if (arrpurchase[jj] === 0)
                                                                                        arrpurchase.shift();
                                                                                    if (arrdays[jj] === 0)
                                                                                        arrdays.shift();
                                                                                    if (alldays[jj] === 0)
                                                                                        alldays.shift();
                                                                                    if (sum1[jj] === 0)
                                                                                        sum1.shift();
                                                                                    if (sum2[jj] === 0)
                                                                                        sum2.shift();
                                                                                    if (arrnav[jj] === 0)
                                                                                        arrnav.shift();
                                                                                }
                                                                        }
                                                                        cnav = dataarr[i].cnav;
                                                                        if (dataarr[i].NATURE != 'Switch Out' && dataarr[i].UNITS != 0) {

                                                                            unit = dataarr[i].UNITS
                                                                            amount = dataarr[i].AMOUNT;
                                                                            var date = dataarr[i].newdate;
                                                                            var navdate = dataarr[i].navdate;

                                                                            date1 = new Date(date);
                                                                            date2 = new Date(navdate);

                                                                            days = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));

                                                                            arrunit.push(dataarr[i].UNITS);

                                                                            if (dataarr[i].TD_NAV === 0) {
                                                                                arrpurchase.push(0);
                                                                            } else {
                                                                                arrpurchase.push(dataarr[i].AMOUNT);
                                                                            }
                                                                            arrnav.push(dataarr[i].TD_NAV);

                                                                            var precagr = parseFloat((parseFloat(Math.pow(parseFloat((cnav * dataarr[i].UNITS) / (dataarr[i].AMOUNT)), parseFloat(1 / parseFloat(days / 365)))) - 1) * 100);
                                                                            if (precagr === Infinity) {
                                                                                precagr = 0;
                                                                            } else {
                                                                                precagr = precagr;
                                                                            }

                                                                            //sum1(purchase cost*days*cagr)
                                                                            if (days === 0 && isNaN(days)) {
                                                                                sum1.push(0);
                                                                                arrdays.push(0);
                                                                                alldays.push(0);
                                                                                sum2.push(0);
                                                                            } else {

                                                                                arrdays.push(parseFloat(days) * (parseFloat(dataarr[i].AMOUNT)));

                                                                                alldays.push(parseFloat(days));

                                                                                sum1.push(parseFloat(dataarr[i].AMOUNT) * parseFloat(days) * precagr);

                                                                                sum2.push(parseFloat(dataarr[i].AMOUNT) * parseFloat(days));

                                                                            }

                                                                        } else {
                                                                            if (arrnav.length === 0) {
                                                                                arrnav[0] = 0;
                                                                            }
                                                                            unit = "-" + dataarr[i].UNITS
                                                                            amount = "-" + dataarr[i].AMOUNT
                                                                            temp2 = dataarr[i].UNITS;
                                                                            for (var p = 0; p < arrunit.length; p++) {
                                                                                if (arrunit[p] === 0) {
                                                                                    continue;
                                                                                }
                                                                                temp3 = arrunit[p];
                                                                                if (temp4 === 0) {

                                                                                    temp4 = parseFloat(temp3) - parseFloat(temp2);
                                                                                    temp4 = parseFloat(temp4.toFixed(4));


                                                                                    if (temp4 === 0) {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                        break;
                                                                                    } else if (temp4 > 0) {
                                                                                        arrunit[p] = temp4;
                                                                                        arrpurchase[p] = temp4 * arrnav[p];
                                                                                        arrdays[p] = parseFloat(alldays[p] * arrpurchase[p]);

                                                                                        sum1[p] = parseFloat(temp4 * arrnav[p]) * parseFloat(alldays[p]) * parseFloat((parseFloat(Math.pow(parseFloat((cnav * temp4) / (temp4 * arrnav[p])), parseFloat(1 / parseFloat(alldays[p] / 365)))) - 1) * 100);
                                                                                        sum2[p] = parseFloat(arrpurchase[p]) * parseFloat(alldays[p]);

                                                                                        break;
                                                                                    } else {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                    }
                                                                                } else if (temp4 > 0) {//+ve

                                                                                    if (countlength === arrnav.length + 1) {
                                                                                        temp4 = parseFloat(temp4) + parseFloat(temp3);
                                                                                        temp4 = parseFloat(temp4.toFixed(4));
                                                                                    }
                                                                                    else {
                                                                                        temp4 = parseFloat(temp4) - parseFloat(temp2);
                                                                                        temp4 = parseFloat(temp4.toFixed(4));
                                                                                    }

                                                                                    if (temp4 === 0) {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;
                                                                                        break;
                                                                                    } else if (temp4 > 0) {
                                                                                        arrunit[p] = temp4;

                                                                                        arrpurchase[p] = temp4 * arrnav[p];
                                                                                        arrdays[p] = parseFloat(alldays[p]) * arrpurchase[p];
                                                                                        sum1[p] = parseFloat(temp4 * arrnav[p]) * parseFloat(alldays[p]) * parseFloat((parseFloat(Math.pow(parseFloat((cnav * temp4) / (temp4 * arrnav[p])), parseFloat(1 / parseFloat(alldays[p] / 365)))) - 1) * 100);
                                                                                        sum2[p] = parseFloat(arrpurchase[p]) * parseFloat(alldays[p]);

                                                                                        break;
                                                                                    } else {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;

                                                                                    }
                                                                                } else {//-ve

                                                                                    temp4 = parseFloat(temp4) + parseFloat(temp3);
                                                                                    temp4 = parseFloat(temp4.toFixed(4));

                                                                                    if (temp4 === 0) {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;

                                                                                        break;
                                                                                    } else if (temp4 > 0) {
                                                                                        arrunit[p] = temp4;

                                                                                        arrpurchase[p] = temp4 * arrnav[p];
                                                                                        arrdays[p] = parseFloat(alldays[p]) * arrpurchase[p];
                                                                                        sum1[p] = parseFloat(temp4 * arrnav[p]) * parseFloat(alldays[p]) * parseFloat((parseFloat(Math.pow(parseFloat((cnav * temp4) / (temp4 * arrnav[p])), parseFloat(1 / parseFloat(alldays[p] / 365)))) - 1) * 100);
                                                                                        sum2[p] = parseFloat(arrpurchase[p]) * parseFloat(alldays[p]);
                                                                                        break;
                                                                                    } else {
                                                                                        arrunit[p] = 0;
                                                                                        arrnav[p] = 0;
                                                                                        arrpurchase[p] = 0;
                                                                                        arrdays[p] = 0;
                                                                                        alldays[p] = 0;
                                                                                        sum1[p] = 0;
                                                                                        sum2[p] = 0;

                                                                                    }
                                                                                }
                                                                            }

                                                                        }//else condition equal switch

                                                                        balance = parseFloat(unit) + parseFloat(balance);
                                                                        cnav = dataarr[i].cnav;
                                                                        if (cnav === "" || cnav === undefined || isNaN(balance) || isNaN(cnav)) {
                                                                            balance = 0;
                                                                            cnav = 0;
                                                                        }
                                                                        currentval = cnav * balance;
                                                                        cv = parseFloat(currentval.toFixed(4));
                                                                        scheme = dataarr[i].SCHEME;

                                                                    }//if match two scheme and folio array 

                                                                } //dataarr inner loop

                                                                balance = parseFloat(balance.toFixed(3))
                                                                if (isNaN(cv) || cv < 0 || balance < 0.002) {
                                                                    newarray.push(0)
                                                                } else {
                                                                    if (scheme != "") {
                                                                        newarray.push(cv)
                                                                    }
                                                                }
                                                                var sum1all = 0; var sum2all = 0;
                                                                for (var kk = 0; kk < sum1.length; kk++) {
                                                                    if (isNaN(sum1[kk])) {
                                                                        sum1[kk] = 0;
                                                                    } else {
                                                                        sum1all = sum1[kk] + sum1all;
                                                                    }
                                                                }
                                                                for (var kkk = 0; kkk < sum2.length; kkk++) {
                                                                    sum2all = sum2[kkk] + sum2all;
                                                                }
                                                                var cagr = parseFloat((sum1all / sum2all).toFixed(2));
                                                                temp22 = 0; temp33 = 0
                                                                temp222 = 0;
                                                                for (var k = 0; k < arrpurchase.length; k++) {
                                                                    temp33 = arrpurchase[k];
                                                                    temp22 = temp33 + temp22;
                                                                    temp222 = arrdays[k] + temp222;
                                                                }
                                                                if (balance < 0.002) {
                                                                    temp22 = 0;
                                                                } else {
                                                                    temp22 = parseFloat(temp22.toFixed(2));
                                                                }

                                                                if (temp222 === 0 || temp22 === 0) {
                                                                    days = 0;
                                                                } else {
                                                                    days = Math.round(temp222 / temp22);
                                                                    cagrsum2array.push(temp22 * days);
                                                                    cagrsum1array.push(temp22 * days * cagr);
                                                                }
                                                                console.log("ssssscv=", temp22, cv, scheme)
                                                                if (currentval === 0 || balance === 0 || currentval === -0 || balance === -0) {
                                                                    temp22 = 0;
                                                                } else {
                                                                    purchase.push(temp22);
                                                                }

                                                                //  var sum1all = 0; var sum2all = 0;
                                                                //  for (var kk = 0; kk < sum1.length; kk++) {
                                                                //      sum1all = sum1[kk] + sum1all;
                                                                //  }
                                                                //  for (var kkk = 0; kkk < sum2.length; kkk++) {
                                                                //      sum2all = sum2[kkk] + sum2all;
                                                                //  }
                                                                var cagr = 0;

                                                                //if (isNaN(sum2all) || (sum2all) === Infinity || isNaN(sum1all) || (sum1all) === Infinity) {
                                                                //    cagrsum2array.push(0);
                                                                //    cagrsum1array.push(0);
                                                                //} else {
                                                                //   cagrsum2array.push(sum2all);
                                                                //   cagrsum1array.push(sum1all);
                                                                //}
                                                            }

                                                        } // datascheme first loop

                                                        temp22 = 0; temp33 = 0
                                                        for (var p = 0; p < cagrsum1array.length; p++) {
                                                            finalsum1 = cagrsum1array[p] + finalsum1;
                                                        }
                                                        for (var p = 0; p < cagrsum2array.length; p++) {
                                                            finalsum2 = cagrsum2array[p] + finalsum2;
                                                        }

                                                        //cagr = finalsum1 / finalsum2;
                                                        cagr = 0;
                                                        if (finalsum1 === 0 && finalsum2 === 0) {
                                                            cagr = 0;
                                                        } else {
                                                            cagr = finalsum1 / finalsum2;
                                                        }
                                                        for (var p = 0; p < newarray.length; p++) {
                                                            temp44 = newarray[p] + temp44;
                                                        }
                                                        for (var k = 0; k < purchase.length; k++) {
                                                            temp33 = purchase[k];
                                                            temp22 = temp33 + temp22;
                                                        }
                                                        temp22 = parseFloat(temp22.toFixed(2));
                                                        if (temp22 != 0 && temp44 != 0) {
                                                            finalarr.push({ name: name, purchasecost: (Math.round(temp22)).toLocaleString('en-IN'), currentvalue: (Math.round(temp44)).toLocaleString('en-IN'), cagr: parseFloat(cagr.toFixed(2)), pan: pan })
                                                        }
                                                        //   console.log("purchase=", finalarr)
                                                        resdata = {
                                                            status: 200,
                                                            message: "Successfull",
                                                            data: temp22
                                                        }
                                                        resdata.data = finalarr;
                                                        console.log(finalarr.length, panarray)
                                                        if (finalarr.length === panarray.length) {
                                                            resdata.data = finalarr;
                                                            res.json(resdata);
                                                        }

                                                    }

                                                } else {
                                                    console.log("purchase=", "Data Not Found!");
                                                    resdata = {
                                                        status: 400,
                                                        message: 'Data not found',
                                                    }
                                                    res.json(resdata);
                                                }

                                            })

                                        } else {
                                            resdata = {
                                                status: 400,
                                                message: 'Data not found',
                                            }
                                            res.json(resdata);
                                        }
                                    });
                                });
                            });
                        });
                    }
                });
            }
        } else {
            resdata = {
                status: 400,
                message: 'Key not found',
            }
            res.json(resdata);
        }
    } catch (err) {
        console.log(err)
    }
})

app.post("/api/clientIdPanwise", function (req, res) {
    try {
        var pipeline1 = [ //trans_karvy
            { $match: { PAN1: req.body.pan } },
            { $project: { _id: 0, userid: "$USER_ID", pan: "$PAN1", guard_pan: "" } }
        ]
        var pipeline2 = [ //folio_karvy
            { $match: { $or: [{ PANGNO: req.body.pan }, { GUARDPANNO: req.body.pan }] } },
            { $project: { _id: 0, userid: "$USER_ID", pan: "$PANGNO", guard_pan: "$GUARDPANNO" } }
        ]
        var pipeline3 = [ //folio_cams
            { $match: { $or: [{ PAN_NO: req.body.pan }, { GUARD_PAN: req.body.pan }] } },
            { $project: { _id: 0, userid: "$USER_ID", pan: "$PAN_NO", guard_pan: "$GUARD_PAN" } }
        ]
        var pipeline4 = [ //trans_cams
            { $match: { $or: [{ PAN_NO: req.body.pan }, { GUARD_PAN: req.body.pan }] } },
            { $project: { _id: 0, userid: "$USER_ID", pan: "$PAN_NO", guard_pan: "$GUARD_PAN" } }
        ]
        transk.aggregate(pipeline1, (err, data2) => {
            foliok.aggregate(pipeline2, (err, data1) => {
                folioc.aggregate(pipeline3, (err, data3) => {
                    transc.aggregate(pipeline4, (err, data4) => {
                        var data = data1.concat(data2.concat(data3.concat(data4)));
                        data = data.filter(
                            (temp => a =>
                                (k => !temp[k] && (temp[k] = true))(a.userid + '|' + a.pan + '|' + a.guard_pan)
                            )(Object.create(null))
                        );
                        console.log(data);
                        res.send(data);

                    });
                });
            });
        });
    } catch (err) {
        console.log(err)
    }
})

app.post("/api/portfolio_detailapi_data", function (req, res) {
    try {
        if (req.body.guard_pan != undefined && req.body.pan != undefined && req.body.name != undefined) {
            var regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
            if (req.body.name === "") {
                resdata = {
                    status: 400,
                    message: 'Please enter name',
                }
                res.json(resdata);
                return resdata;
            } else {
                if (req.body.guard_pan === "") {
                    if (req.body.pan === "") {
                        resdata = {
                            status: 400,
                            message: 'Please enter pan',

                        }
                        res.json(resdata);
                        return resdata;
                    } else if (!regex.test(req.body.pan)) {
                        resdata = {
                            status: 400,
                            message: 'Please enter valid pan',
                        }
                        res.json(resdata);
                        return resdata;
                    } else {

                        var dataarr = []; var lastarray = []; let newarray = []; var sum11 = []; var sum22 = []; var finaldataarr = []; var hh = []; var gg = [];
                        var newdataarr1 = []; var newdataarr2 = []; var newdataarr3 = [];
                        pipeline1 = [  //trans_cams
                            { $match: { $and: [{ PAN: { '$regex': req.body.pan, '$options': 'i' } }, { INV_NAME: { '$regex': req.body.name, '$options': 'i' } }] } },
                            { $project: { _id: 0, PRODCODE: "$PRODCODE", PAN: "$PAN", FOLIO: "$FOLIO_NO", NAME: { "$toUpper": ["$INV_NAME"] }, SCHEME: "$SCHEME", RTA: "CAMS", } },
                        ]
                        pipeline2 = [  //trans_karvy
                            { $match: { $and: [{ PAN1: { '$regex': req.body.pan, '$options': 'i' } }, { INVNAME: { '$regex': req.body.name, '$options': 'i' } }] } },
                            { $project: { _id: 0, PRODCODE: "$FMCODE", PAN: "$PAN1", FOLIO: "$TD_ACNO", NAME: { "$toUpper": ["$INVNAME"] }, SCHEME: "$FUNDDESC", RTA: "KARVY" } },
                        ]
                        transc.aggregate(pipeline1, (err, data1) => {
                            transk.aggregate(pipeline2, (err, data2) => {
                                if (data1 != 0 || data2 != 0) {
                                    resdata = {
                                        status: 200,
                                        message: 'Successfull',
                                        data: data2
                                    }
                                    let datacon = data1.concat(data2);

                                    datacon = datacon.filter(
                                        (temp => a =>
                                            (k => !temp[k] && (temp[k] = true))(a.PRODCODE + '|' + a.FOLIO)
                                        )(Object.create(null))
                                    );
                                    datacon = datacon.sort((a, b) => (a.SCHEME > b.SCHEME) ? 1 : -1);
                                    // console.log("datacon=",datacon)
                                    portfolioApiDetail(datacon, result => {
                                        lastarray.push(result);
                                        for (var j = 0; j < lastarray.length; j++) {
                                            for (var k = 0; k < lastarray[j].length; k++) {
                                                dataarr.push(lastarray[j][k]);
                                            }
                                        }
                                        // console.log("datarray=",dataarr)
                                        var amount = 0; var date1 = ""; var date2 = "";
                                        var navrate = 0;
                                        var purchase = []; var newpurchase = []; var temp44 = 0;
                                        var cnav = 0; var temp222 = 0; var finalarr = [];
                                        var portfolio_data = []; var tot_mkt_value = [];
                                        var tot_gain = []; var tot_cost = []; var tot_cagr = []; var type = "";
                                        if (dataarr != null && dataarr.length > 0) {
                                            var currentval = 0;

                                            for (var a = 0; a < datacon.length; a++) {
                                                newdataarr1 = []; newdataarr2 = []; newdataarr3 = [];
                                                dataarr = dataarr.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime());
                                                for (var ii = 0; ii < dataarr.length; ii++) {
                                                    if (datacon[a].FOLIO === dataarr[ii].FOLIO && datacon[a].PRODCODE === dataarr[ii].PRODCODE) {
                                                        if (dataarr[ii].RTA === "CAMS") {
                                                            newdataarr1.push(dataarr[ii])
                                                        } else if (dataarr[ii].RTA === "CAMS2A") {
                                                            newdataarr2.push(dataarr[ii])
                                                        } else {
                                                            newdataarr3.push(dataarr[ii])
                                                        }
                                                    }
                                                }
                                                if (newdataarr2.length > 0) {
                                                    newdataarr1.shift();
                                                }
                                                hh = newdataarr2.concat(newdataarr1.concat(newdataarr3))
                                                finaldataarr.push(hh);

                                            }

                                            for (var j = 0; j < finaldataarr.length; j++) {
                                                for (var k = 0; k < finaldataarr[j].length; k++) {
                                                    gg.push(finaldataarr[j][k]);
                                                }
                                            }
                                            dataarr = gg;
                                            for (var a = 0; a < datacon.length; a++) {
                                                var unit = 0; var arrpurchase = []; var arrunit = [];
                                                var temp4 = 0; var temp1, temp2 = 0; var temp3 = 0;
                                                var cv = 0; var sum1 = []; var sum2 = [];
                                                var balance = 0; var days = 0; var arrdays = [];
                                                var gain = 0; var alldays = []; var arrnav = [];
                                                dataarr = dataarr.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime());
                                                var scheme = ""; var name = ""; var pan = ""; var folio = "";
                                                var countlength = 0; var externelcount = 0;
                                                //loop for external counter
                                                for (var ii = 0; ii < dataarr.length; ii++) {
                                                    if (datacon[a].FOLIO === dataarr[ii].FOLIO && datacon[a].PRODCODE === dataarr[ii].PRODCODE) {
                                                        externelcount = externelcount + 1;
                                                    }
                                                }

                                                for (var i = 0; i < dataarr.length; i++) {
                                                    if (datacon[a].FOLIO === dataarr[i].FOLIO && datacon[a].PRODCODE === dataarr[i].PRODCODE) {
                                                        countlength = countlength + 1;

                                                        if (Math.sign(dataarr[i].UNITS) != -1) {
                                                            if (dataarr[i].NATURE === "Switch Out")
                                                                for (var jj = 0; jj < arrunit.length; jj++) {

                                                                    if (arrunit[jj] === 0)
                                                                        arrunit.shift();
                                                                    if (arrpurchase[jj] === 0)
                                                                        arrpurchase.shift();
                                                                    if (arrdays[jj] === 0)
                                                                        arrdays.shift();
                                                                    if (alldays[jj] === 0)
                                                                        alldays.shift();
                                                                    if (sum1[jj] === 0)
                                                                        sum1.shift();
                                                                    if (sum2[jj] === 0)
                                                                        sum2.shift();
                                                                    if (arrnav[jj] === 0)
                                                                        arrnav.shift();
                                                                }
                                                        }
                                                        cnav = dataarr[i].cnav;
                                                        if (dataarr[i].NATURE != 'Switch Out' && dataarr[i].UNITS != 0) {

                                                            unit = dataarr[i].UNITS
                                                            amount = dataarr[i].AMOUNT;
                                                            var date = dataarr[i].newdate;
                                                            var navdate = dataarr[i].navdate;

                                                            date1 = new Date(date);
                                                            date2 = new Date(navdate);

                                                            days = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
                                                            arrunit.push(dataarr[i].UNITS);
                                                            if (dataarr[i].TD_NAV === 0) {
                                                                arrpurchase.push(0);
                                                            } else {
                                                                arrpurchase.push(dataarr[i].AMOUNT);
                                                            }

                                                            arrnav.push(dataarr[i].TD_NAV)

                                                            var precagr = parseFloat((parseFloat(Math.pow(parseFloat((cnav * dataarr[i].UNITS) / (dataarr[i].AMOUNT)), parseFloat(1 / parseFloat(days / 365)))) - 1) * 100);
                                                            if (precagr === Infinity) {
                                                                precagr = 0;
                                                            } else {
                                                                precagr = precagr;
                                                            }
                                                            //sum1(purchase cost*days*cagr)
                                                            if (days === 0 && isNaN(days)) {
                                                                sum1.push(0);
                                                                arrdays.push(0);
                                                                alldays.push(0);
                                                                sum2.push(0);
                                                            } else {
                                                                arrdays.push(parseFloat(days) * (parseFloat(dataarr[i].AMOUNT)));
                                                                alldays.push(parseFloat(days));
                                                                sum1.push(parseFloat(dataarr[i].AMOUNT) * parseFloat(days) * precagr);
                                                                sum2.push(parseFloat(dataarr[i].AMOUNT) * parseFloat(days));

                                                            }

                                                        } else {
                                                            if (arrnav.length === 0) {
                                                                arrnav[0] = 0;
                                                            }
                                                            unit = "-" + dataarr[i].UNITS
                                                            amount = "-" + dataarr[i].AMOUNT
                                                            temp2 = dataarr[i].UNITS;
                                                            for (var p = 0; p < arrunit.length; p++) {
                                                                if (arrunit[p] === 0) {
                                                                    continue;
                                                                }
                                                                temp3 = arrunit[p];
                                                                if (temp4 === 0) {
                                                                    temp4 = parseFloat(temp3) - parseFloat(temp2);
                                                                    temp4 = parseFloat(temp4.toFixed(4));

                                                                    if (temp4 === 0) {
                                                                        arrunit[p] = 0;
                                                                        arrnav[p] = 0;
                                                                        arrpurchase[p] = 0;
                                                                        arrdays[p] = 0;
                                                                        alldays[p] = 0;
                                                                        sum1[p] = 0;
                                                                        sum2[p] = 0;
                                                                        break;
                                                                    } else if (temp4 > 0) {
                                                                        arrunit[p] = temp4;
                                                                        arrpurchase[p] = temp4 * arrnav[p];
                                                                        arrdays[p] = parseFloat(alldays[p] * arrpurchase[p]);

                                                                        sum1[p] = parseFloat(temp4 * arrnav[p]) * parseFloat(alldays[p]) * parseFloat((parseFloat(Math.pow(parseFloat((cnav * temp4) / (temp4 * arrnav[p])), parseFloat(1 / parseFloat(alldays[p] / 365)))) - 1) * 100);
                                                                        sum2[p] = parseFloat(arrpurchase[p]) * parseFloat(alldays[p]);

                                                                        break;
                                                                    } else {
                                                                        arrunit[p] = 0;
                                                                        arrnav[p] = 0;
                                                                        arrpurchase[p] = 0;
                                                                        arrdays[p] = 0;
                                                                        alldays[p] = 0;
                                                                        sum1[p] = 0;
                                                                        sum2[p] = 0;
                                                                    }
                                                                } else if (temp4 > 0) {//+ve

                                                                    if (countlength === arrnav.length + 1) {

                                                                        temp4 = parseFloat(temp4) + parseFloat(temp3);
                                                                        temp4 = parseFloat(temp4.toFixed(4));
                                                                    }
                                                                    else {
                                                                        // console.log("temp2 >> if temp4 +ve line 8987=", temp4,temp2)
                                                                        temp4 = parseFloat(temp4) - parseFloat(temp2);
                                                                        temp4 = parseFloat(temp4.toFixed(4));
                                                                        //  console.log("if temp4 +ve line 8989=", temp4)
                                                                    }

                                                                    if (temp4 === 0) {
                                                                        arrunit[p] = 0;
                                                                        arrnav[p] = 0;
                                                                        arrpurchase[p] = 0;
                                                                        arrdays[p] = 0;
                                                                        alldays[p] = 0;
                                                                        sum1[p] = 0;
                                                                        sum2[p] = 0;
                                                                        break;
                                                                    } else if (temp4 > 0) {
                                                                        arrunit[p] = temp4;

                                                                        arrpurchase[p] = temp4 * arrnav[p];
                                                                        arrdays[p] = parseFloat(alldays[p]) * arrpurchase[p];
                                                                        sum1[p] = parseFloat(temp4 * arrnav[p]) * parseFloat(alldays[p]) * parseFloat((parseFloat(Math.pow(parseFloat((cnav * temp4) / (temp4 * arrnav[p])), parseFloat(1 / parseFloat(alldays[p] / 365)))) - 1) * 100);
                                                                        sum2[p] = parseFloat(arrpurchase[p]) * parseFloat(alldays[p]);

                                                                        break;

                                                                    } else {
                                                                        arrunit[p] = 0;
                                                                        arrnav[p] = 0;
                                                                        arrpurchase[p] = 0;
                                                                        arrdays[p] = 0;
                                                                        alldays[p] = 0;
                                                                        sum1[p] = 0;
                                                                        sum2[p] = 0;

                                                                    }
                                                                } else {//-ve

                                                                    temp4 = parseFloat(temp4) + parseFloat(temp3);
                                                                    temp4 = parseFloat(temp4.toFixed(4));

                                                                    if (temp4 === 0) {
                                                                        arrunit[p] = 0;
                                                                        arrnav[p] = 0;
                                                                        arrpurchase[p] = 0;
                                                                        arrdays[p] = 0;
                                                                        alldays[p] = 0;
                                                                        sum1[p] = 0;
                                                                        sum2[p] = 0;

                                                                        break;
                                                                    } else if (temp4 > 0) {
                                                                        arrunit[p] = temp4;

                                                                        arrpurchase[p] = temp4 * arrnav[p];
                                                                        arrdays[p] = parseFloat(alldays[p]) * arrpurchase[p];
                                                                        sum1[p] = parseFloat(temp4 * arrnav[p]) * parseFloat(alldays[p]) * parseFloat((parseFloat(Math.pow(parseFloat((cnav * temp4) / (temp4 * arrnav[p])), parseFloat(1 / parseFloat(alldays[p] / 365)))) - 1) * 100);
                                                                        sum2[p] = parseFloat(arrpurchase[p]) * parseFloat(alldays[p]);
                                                                        break;

                                                                    } else {
                                                                        arrunit[p] = 0;
                                                                        arrnav[p] = 0;
                                                                        arrpurchase[p] = 0;
                                                                        arrdays[p] = 0;
                                                                        alldays[p] = 0;
                                                                        sum1[p] = 0;
                                                                        sum2[p] = 0;
                                                                        // break;
                                                                    }
                                                                }
                                                            }
                                                        }//else condition equal switch

                                                        balance = parseFloat(unit) + parseFloat(balance);

                                                        if (cnav === "" || cnav === undefined || isNaN(balance) || isNaN(cnav)) {
                                                            balance = 0;
                                                            cnav = 0;
                                                        }
                                                        currentval = cnav * balance
                                                        currentval = parseFloat(currentval.toFixed(2));
                                                        type = dataarr[i].TYPE;
                                                        scheme = dataarr[i].SCHEME;
                                                    }//if match two scheme and folio array 

                                                } //dataarr inner loop


                                                balance = parseFloat(balance.toFixed(3))
                                                temp22 = 0; temp33 = 0; var temp222 = 0;

                                                for (var k = 0; k < arrpurchase.length; k++) {
                                                    temp33 = arrpurchase[k];
                                                    temp22 = temp33 + temp22;
                                                    temp222 = arrdays[k] + temp222;
                                                }
                                                temp22 = parseFloat(temp22.toFixed(2))
                                                console.log("ssssscv=", temp22, currentval, cv, scheme)
                                                if (temp222 === 0 && temp22 === 0) {
                                                    days = 0;
                                                } else {
                                                    days = temp222 / temp22;
                                                }

                                                var sum1all = 0; var sum2all = 0;

                                                for (var kk = 0; kk < sum1.length; kk++) {
                                                    //sum1all = sum1[kk] + sum1all;
                                                    if (isNaN(sum1[kk])) {
                                                        sum1[kk] = 0;
                                                    } else {
                                                        sum1all = sum1[kk] + sum1all;
                                                    }
                                                }
                                                for (var kkk = 0; kkk < sum2.length; kkk++) {
                                                    sum2all = sum2[kkk] + sum2all;
                                                }

                                                var cagr = 0;
                                                if (sum1all === 0 && sum2all === 0) {
                                                    cagr = 0;
                                                } else {
                                                    cagr = sum1all / sum2all;
                                                }

                                                if (currentval === 0 || balance === 0 || currentval === -0 || balance === -0) {
                                                    temp22 = 0;
                                                }
                                                var absreturn = 0;
                                                if (temp22 === 0) {
                                                    absreturn = 0;
                                                    days = 0;
                                                } else {
                                                    absreturn = (((parseFloat(currentval) - parseFloat(temp22)) / parseFloat(temp22)) * 100).toFixed(2);
                                                }

                                                // gain = Math.round(currentval) - Math.round(temp22);
                                                gain = currentval - temp22;
                                                gain = parseFloat(gain.toFixed(2));
                                                // gain = Math.round(gain)
                                                if (balance === 0 || balance < 0.05 || currentval === 0) {
                                                    if (balance > 0.001) {
                                                        tot_mkt_value.push(currentval);
                                                        tot_cost.push(temp22);
                                                        tot_gain.push(gain);
                                                        purchase.push({
                                                            name: datacon[a].NAME, pan: datacon[a].PAN, scheme: datacon[a].SCHEME, product_code: datacon[a].PRODCODE, folio: datacon[a].FOLIO, cnav: cnav, absolute_return: absreturn, unit: balance.toFixed(3), purchase_cost: temp22.toLocaleString('en-IN'),
                                                            purchase_cost_new: temp22, mkt_value: currentval.toLocaleString('en-IN'), mkt_value_new: currentval, gain: gain, gain_str: gain.toLocaleString('en-IN'), cagr: cagr.toFixed(2), avg_days_str: days.toFixed(5), avg_days: Math.round(days), type: type, rta: datacon[a].RTA
                                                        });
                                                        newpurchase.push({ name: datacon[a].NAME, pan: datacon[a].PAN, scheme: datacon[a].SCHEME, product_code: datacon[a].PRODCODE, folio: datacon[a].FOLIO, absolute_return: absreturn, unit: balance.toFixed(3), purchase_cost: temp22, mkt_value: currentval, gain: gain, cagr: cagr.toFixed(2), avg_days: Math.round(days), type: type, rta: datacon[a].RTA });
                                                    }
                                                } else {
                                                    //  currentval = Math.round(currentval);
                                                    if (currentval != 0 || currentval != -0) {
                                                        tot_mkt_value.push(currentval);
                                                        tot_cost.push(temp22);
                                                        tot_gain.push(gain);
                                                        purchase.push({
                                                            name: datacon[a].NAME, pan: datacon[a].PAN, scheme: datacon[a].SCHEME, product_code: datacon[a].PRODCODE, folio: datacon[a].FOLIO, cnav: cnav, absolute_return: absreturn, unit: balance.toFixed(3), purchase_cost: temp22.toLocaleString('en-IN'),
                                                            purchase_cost_new: temp22, mkt_value: currentval.toLocaleString('en-IN'), mkt_value_new: currentval, gain: gain, gain_str: gain.toLocaleString('en-IN'), cagr: cagr.toFixed(2), avg_days_str: days.toFixed(5), avg_days: Math.round(days), type: type, rta: datacon[a].RTA
                                                        });
                                                        newpurchase.push({ name: datacon[a].NAME, pan: datacon[a].PAN, scheme: datacon[a].SCHEME, product_code: datacon[a].PRODCODE, folio: datacon[a].FOLIO, absolute_return: absreturn, unit: balance.toFixed(3), purchase_cost: temp22, mkt_value: currentval, gain: gain, cagr: cagr.toFixed(2), avg_days: Math.round(days), type: type, rta: datacon[a].RTA });
                                                    }
                                                }
                                            }

                                            // datascheme first loop
                                            for (var r = 0; r < newpurchase.length; r++) {
                                                sum11.push(newpurchase[r].purchase_cost * newpurchase[r].avg_days * newpurchase[r].cagr);
                                                sum22.push(newpurchase[r].purchase_cost * newpurchase[r].avg_days);
                                            }
                                            sum1all = 0; sum2all = 0;
                                            for (var kk = 0; kk < sum11.length; kk++) {
                                                sum1all = sum11[kk] + sum1all;
                                            }
                                            for (var kkk = 0; kkk < sum22.length; kkk++) {
                                                sum2all = sum22[kkk] + sum2all;
                                            }
                                            //var sumcagr = sum1all / sum2all;
                                            var sumcagr = 0;

                                            if (sum1all === 0 && sum2all === 0) {
                                                sumcagr = 0;
                                            } else {
                                                sumcagr = sum1all / sum2all;
                                            }
                                            var mkt = 0; var cost = 0; var totgain = 0;

                                            for (var p = 0; p < tot_mkt_value.length; p++) {
                                                mkt = tot_mkt_value[p] + mkt;
                                                cost = tot_cost[p] + cost;
                                                totgain = tot_gain[p] + totgain;

                                            }

                                            resdata.data = { portfolio_data: purchase, final_values: { tot_mkt_value: (Math.round(mkt)).toLocaleString('en-IN'), tot_cost: (Math.round(cost)).toLocaleString('en-IN'), tot_gain: totgain.toLocaleString('en-IN'), tot_cagr: sumcagr.toFixed(2) } };

                                            res.json(resdata);

                                        } else {
                                            console.log("purchase=", "Data Not Found!")
                                            resdata = {
                                                status: 400,
                                                message: 'Data not found',
                                            }
                                            res.json(resdata);
                                        }

                                    })


                                } else {
                                    resdata = {
                                        status: 400,
                                        message: 'Data not found',
                                    }
                                    console.log("1111=", "Data Not Found!")
                                    res.json(resdata);
                                }
                            });
                        })
                    }
                } else {
                    var arr1 = []; var arr2 = []; var dataarr = []; var lastarray = []; let newarray = []; var sum11 = []; var sum22 = [];
                    var finaldataarr = []; var hh = []; var gg = []; var newdataarr1 = []; var newdataarr2 = []; var newdataarr3 = [];
                    var regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

                    folioc.find({ GUARD_PAN: req.body.guard_pan, INV_NAME: { $regex: req.body.name, $options: 'i' } }).distinct("FOLIOCHK", function (err, member1) {
                        foliok.find({ GUARDPANNO: req.body.guard_pan, INVNAME: { $regex: req.body.name, $options: 'i' } }).distinct("ACNO", function (err, member2) {
                            var alldata = member1.concat(member2);
                            console.log("alldata=", alldata)
                            if (alldata.length != 0) {
                                for (var j = 0; j < alldata.length; j++) {
                                    arr1.push({ FOLIO_NO: alldata[j] });
                                    arr2.push({ TD_ACNO: alldata[j] });
                                }
                                // }

                                var strFolio1 = { $or: arr1 };
                                var strFolio2 = { $or: arr2 };


                                pipeline1 = [  //trans_cams
                                    { $match: strFolio1 },
                                    { $project: { _id: 0, PRODCODE: "$PRODCODE", PAN: "$PAN", FOLIO: "$FOLIO_NO", NAME: { "$toUpper": ["$INV_NAME"] }, SCHEME: "$SCHEME", RTA: "CAMS", } },
                                ]
                                pipeline2 = [  //trans_karvy
                                    { $match: strFolio2 },
                                    { $project: { _id: 0, PRODCODE: "$FMCODE", PAN: "$PAN1", FOLIO: "$TD_ACNO", NAME: { "$toUpper": ["$INVNAME"] }, SCHEME: "$FUNDDESC", RTA: "KARVY" } },
                                ]
                                transk.aggregate(pipeline2, (err, data1) => {
                                    transc.aggregate(pipeline1, (err, data2) => {

                                        if (data1.length != 0 || data2.length != 0) {
                                            resdata = {
                                                status: 200,
                                                message: 'Successfull',
                                                data: data2
                                            }
                                            let datacon = data1.concat(data2);
                                            datacon = datacon.filter(
                                                (temp => a =>
                                                    (k => !temp[k] && (temp[k] = true))(a.PRODCODE + '|' + a.FOLIO)
                                                )(Object.create(null))
                                            );
                                            var dataarr = []; var lastarray = [];
                                            datacon = datacon.sort((a, b) => (a.SCHEME > b.SCHEME) ? 1 : -1);
                                            portfolioApiDetail(datacon, result => {
                                                lastarray.push(result);
                                                for (var j = 0; j < lastarray.length; j++) {
                                                    for (var k = 0; k < lastarray[j].length; k++) {
                                                        dataarr.push(lastarray[j][k]);
                                                    }
                                                }
                                                var amount = 0; var date1 = ""; var date2 = "";
                                                var navrate = 0; var cnav = 0;
                                                var purchase = []; var newpurchase = []; var temp44 = 0;
                                                var temp222 = 0; var finalarr = [];
                                                var portfolio_data = []; var tot_mkt_value = [];
                                                var tot_gain = []; var tot_cost = []; var tot_cagr = []; var type = "";
                                                if (dataarr != null && dataarr.length > 0) {

                                                    for (var a = 0; a < datacon.length; a++) {
                                                        newdataarr1 = []; newdataarr2 = []; newdataarr3 = [];
                                                        dataarr = dataarr.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime());
                                                        for (var ii = 0; ii < dataarr.length; ii++) {
                                                            if (datacon[a].FOLIO === dataarr[ii].FOLIO && datacon[a].PRODCODE === dataarr[ii].PRODCODE) {
                                                                if (dataarr[ii].RTA === "CAMS") {
                                                                    newdataarr1.push(dataarr[ii])
                                                                } else if (dataarr[ii].RTA === "CAMS2A") {
                                                                    newdataarr2.push(dataarr[ii])
                                                                } else {
                                                                    newdataarr3.push(dataarr[ii])
                                                                }
                                                            }
                                                        }
                                                        if (newdataarr2.length > 0) {
                                                            newdataarr1.shift();
                                                        }
                                                        hh = newdataarr2.concat(newdataarr1.concat(newdataarr3))
                                                        finaldataarr.push(hh);

                                                    }

                                                    for (var j = 0; j < finaldataarr.length; j++) {
                                                        for (var k = 0; k < finaldataarr[j].length; k++) {
                                                            gg.push(finaldataarr[j][k]);
                                                        }
                                                    }
                                                    dataarr = gg;

                                                    for (var a = 0; a < datacon.length; a++) {
                                                        var unit = 0; var arrpurchase = []; var arrunit = [];
                                                        var temp4 = 0; var temp1, temp2 = 0; var temp3 = 0;
                                                        var cv = 0; var sum1 = []; var sum2 = []; var alldays = [];
                                                        var balance = 0; var days = 0; var arrdays = [];
                                                        var currentval = 0; var gain = 0; var arrnav = [];
                                                        dataarr = dataarr.sort((a, b) => new Date(a.TD_TRDT.split("-").reverse().join("/")).getTime() - new Date(b.TD_TRDT.split("-").reverse().join("/")).getTime());
                                                        var scheme = ""; var name = ""; var pan = "";
                                                        var countlength = 0;
                                                        var externelcount = 0;
                                                        //loop for external counter
                                                        for (var ii = 0; ii < dataarr.length; ii++) {
                                                            if (datacon[a].FOLIO === dataarr[ii].FOLIO && datacon[a].PRODCODE === dataarr[ii].PRODCODE) {
                                                                externelcount = externelcount + 1;
                                                            }
                                                        }
                                                        for (var i = 0; i < dataarr.length; i++) {

                                                            // var cnav = 0;
                                                            if (datacon[a].FOLIO === dataarr[i].FOLIO && datacon[a].PRODCODE === dataarr[i].PRODCODE) {
                                                                countlength = countlength + 1;

                                                                if (Math.sign(dataarr[i].UNITS) != -1) {
                                                                    if (dataarr[i].NATURE === "Switch Out")
                                                                        for (var jj = 0; jj < arrunit.length; jj++) {

                                                                            if (arrunit[jj] === 0)
                                                                                arrunit.shift();
                                                                            if (arrpurchase[jj] === 0)
                                                                                arrpurchase.shift();
                                                                            if (arrdays[jj] === 0)
                                                                                arrdays.shift();
                                                                            if (alldays[jj] === 0)
                                                                                alldays.shift();
                                                                            if (sum1[jj] === 0)
                                                                                sum1.shift();
                                                                            if (sum2[jj] === 0)
                                                                                sum2.shift();
                                                                            if (arrnav[jj] === 0)
                                                                                arrnav.shift();
                                                                        }
                                                                }
                                                                cnav = dataarr[i].cnav;
                                                                if (dataarr[i].NATURE != 'Switch Out' && dataarr[i].UNITS != 0) {

                                                                    unit = dataarr[i].UNITS
                                                                    amount = dataarr[i].AMOUNT;
                                                                    var date = dataarr[i].newdate;
                                                                    var navdate = dataarr[i].navdate;

                                                                    date1 = new Date(date);
                                                                    date2 = new Date(navdate);
                                                                    days = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));

                                                                    arrunit.push(dataarr[i].UNITS);
                                                                    arrnav.push(dataarr[i].TD_NAV);
                                                                    if (dataarr[i].TD_NAV === 0) {
                                                                        arrpurchase.push(0);
                                                                    } else {
                                                                        arrpurchase.push(dataarr[i].AMOUNT);
                                                                    }
                                                                    var precagr = parseFloat((parseFloat(Math.pow(parseFloat((cnav * dataarr[i].UNITS) / (dataarr[i].AMOUNT)), parseFloat(1 / parseFloat(days / 365)))) - 1) * 100);
                                                                    if (precagr === Infinity) {
                                                                        precagr = 0;
                                                                    } else {
                                                                        precagr = precagr;
                                                                    }
                                                                    //sum1(purchase cost*days*cagr)
                                                                    if (days === 0 && isNaN(days)) {
                                                                        sum1.push(0);
                                                                        arrdays.push(0);
                                                                        alldays.push(0);
                                                                        sum2.push(0);
                                                                    } else {


                                                                        arrdays.push(parseFloat(days) * (parseFloat(dataarr[i].AMOUNT)));
                                                                        alldays.push(parseFloat(days));
                                                                        sum1.push(parseFloat(dataarr[i].AMOUNT) * parseFloat(days) * parseFloat(precagr));
                                                                        sum2.push(parseFloat(dataarr[i].AMOUNT) * parseFloat(days));

                                                                    }

                                                                } else {
                                                                    unit = "-" + dataarr[i].UNITS
                                                                    amount = "-" + dataarr[i].AMOUNT
                                                                    temp2 = dataarr[i].UNITS;
                                                                    //var cnav = dataarr[i].cnav;
                                                                    for (var p = 0; p < arrunit.length; p++) {
                                                                        if (arrunit[p] === 0) {
                                                                            continue;
                                                                        }
                                                                        temp3 = arrunit[p];
                                                                        if (temp4 === 0) {

                                                                            temp4 = parseFloat(temp3) - parseFloat(temp2);
                                                                            temp4 = parseFloat(temp4.toFixed(4));
                                                                            if (temp4 === 0) {
                                                                                arrunit[p] = 0;
                                                                                arrnav[p] = 0;
                                                                                arrpurchase[p] = 0;
                                                                                arrdays[p] = 0;
                                                                                alldays[p] = 0;
                                                                                sum1[p] = 0;
                                                                                sum2[p] = 0;
                                                                                break;
                                                                            } else if (temp4 > 0) {
                                                                                arrunit[p] = temp4;
                                                                                arrpurchase[p] = temp4 * arrnav[p];
                                                                                arrdays[p] = parseFloat(alldays[p] * arrpurchase[p]);

                                                                                sum1[p] = parseFloat(temp4 * arrnav[p]) * parseFloat(alldays[p]) * parseFloat((parseFloat(Math.pow(parseFloat((cnav * temp4) / (temp4 * arrnav[p])), parseFloat(1 / parseFloat(alldays[p] / 365)))) - 1) * 100);
                                                                                sum2[p] = parseFloat(arrpurchase[p]) * parseFloat(alldays[p]);
                                                                                break;
                                                                            } else {
                                                                                arrunit[p] = 0;
                                                                                arrnav[p] = 0;
                                                                                arrpurchase[p] = 0;
                                                                                arrdays[p] = 0;
                                                                                alldays[p] = 0;
                                                                                sum1[p] = 0;
                                                                                sum2[p] = 0;
                                                                            }
                                                                        } else if (temp4 > 0) {//+ve

                                                                            if (countlength === arrnav.length + 1) {

                                                                                temp4 = parseFloat(temp4) + parseFloat(temp3);
                                                                                temp4 = parseFloat(temp4.toFixed(4));

                                                                            }
                                                                            else {
                                                                                temp4 = parseFloat(temp4) - parseFloat(temp2);
                                                                                temp4 = parseFloat(temp4.toFixed(4));

                                                                            }

                                                                            if (temp4 === 0) {
                                                                                arrunit[p] = 0;
                                                                                arrnav[p] = 0;
                                                                                arrpurchase[p] = 0;
                                                                                arrdays[p] = 0;
                                                                                alldays[p] = 0;
                                                                                sum1[p] = 0;
                                                                                sum2[p] = 0;
                                                                                break;
                                                                            } else if (temp4 > 0) {
                                                                                arrunit[p] = temp4;
                                                                                arrpurchase[p] = temp4 * arrnav[p];
                                                                                arrdays[p] = parseFloat(alldays[p]) * arrpurchase[p];
                                                                                sum1[p] = parseFloat(temp4 * arrnav[p]) * parseFloat(alldays[p]) * parseFloat((parseFloat(Math.pow(parseFloat((cnav * temp4) / (temp4 * arrnav[p])), parseFloat(1 / parseFloat(alldays[p] / 365)))) - 1) * 100);
                                                                                sum2[p] = parseFloat(arrpurchase[p]) * parseFloat(alldays[p]);

                                                                                break;
                                                                            } else {
                                                                                arrunit[p] = 0;
                                                                                arrnav[p] = 0;
                                                                                arrpurchase[p] = 0;
                                                                                arrdays[p] = 0;
                                                                                alldays[p] = 0;
                                                                                sum1[p] = 0;
                                                                                sum2[p] = 0;
                                                                            }
                                                                        } else {//-ve
                                                                            temp4 = parseFloat(temp4) + parseFloat(temp3);
                                                                            temp4 = parseFloat(temp4.toFixed(4));

                                                                            if (temp4 === 0) {
                                                                                arrunit[p] = 0;
                                                                                arrnav[p] = 0;
                                                                                arrpurchase[p] = 0;
                                                                                arrdays[p] = 0;
                                                                                alldays[p] = 0;
                                                                                sum1[p] = 0;
                                                                                sum2[p] = 0;

                                                                                break;
                                                                            } else if (temp4 > 0) {
                                                                                arrunit[p] = temp4;
                                                                                arrpurchase[p] = temp4 * arrnav[p];
                                                                                arrdays[p] = parseFloat(alldays[p]) * arrpurchase[p];
                                                                                sum1[p] = parseFloat(temp4 * arrnav[p]) * parseFloat(alldays[p]) * parseFloat((parseFloat(Math.pow(parseFloat((cnav * temp4) / (temp4 * arrnav[p])), parseFloat(1 / parseFloat(alldays[p] / 365)))) - 1) * 100);
                                                                                sum2[p] = parseFloat(arrpurchase[p]) * parseFloat(alldays[p]);

                                                                                break;
                                                                            } else {
                                                                                arrunit[p] = 0;
                                                                                arrnav[p] = 0;
                                                                                arrpurchase[p] = 0;
                                                                                arrdays[p] = 0;
                                                                                alldays[p] = 0;
                                                                                sum1[p] = 0;
                                                                                sum2[p] = 0;
                                                                                // break;
                                                                            }
                                                                        }
                                                                    }
                                                                }//else condition equal switch

                                                                balance = parseFloat(unit) + parseFloat(balance);
                                                                balance = parseFloat(balance.toFixed(4))
                                                                if (cnav === "" || cnav === undefined || isNaN(balance) || isNaN(cnav) || balance < 0.05) {
                                                                    balance = 0;
                                                                    cnav = 0;
                                                                }
                                                                currentval = cnav * balance
                                                                currentval = parseFloat(currentval.toFixed(2))
                                                                type = dataarr[i].TYPE;
                                                            }//if match two scheme and folio array 

                                                        } //dataarr inner loop
                                                        temp22 = 0; temp33 = 0; var temp222 = 0;

                                                        for (var k = 0; k < arrpurchase.length; k++) {
                                                            temp33 = arrpurchase[k];
                                                            temp22 = temp33 + temp22;
                                                            temp222 = arrdays[k] + temp222;
                                                        }
                                                        temp22 = parseFloat(temp22.toFixed(2))
                                                        if (temp222 === 0 && temp22 === 0) {
                                                            days = 0;
                                                        } else {
                                                            days = temp222 / temp22;
                                                        }
                                                        var sum1all = 0; var sum2all = 0;

                                                        for (var kk = 0; kk < sum1.length; kk++) {
                                                            sum1all = sum1[kk] + sum1all;
                                                        }
                                                        for (var kkk = 0; kkk < sum2.length; kkk++) {
                                                            sum2all = sum2[kkk] + sum2all;
                                                        }

                                                        var cagr = sum1all / sum2all;
                                                        var absreturn = (((parseFloat(currentval) - parseFloat(temp22)) / parseFloat(temp22)) * 100).toFixed(2);
                                                        // gain = Math.round(currentval) - Math.round(temp22);
                                                        gain = currentval - temp22;
                                                        gain = parseFloat(gain.toFixed(2));
                                                        if (isNaN(cv) || cv < 0 || temp22 === 0 || balance === 0 || balance < 0) {
                                                            if (balance > 0.001) {
                                                                tot_mkt_value.push(Math.round(currentval));
                                                                tot_cost.push(temp22);
                                                                tot_gain.push(gain);
                                                                purchase.push({
                                                                    name: datacon[a].NAME, pan: datacon[a].PAN, scheme: datacon[a].SCHEME, product_code: datacon[a].PRODCODE, folio: datacon[a].FOLIO, cnav: cnav, absolute_return: absreturn, unit: balance.toFixed(3), purchase_cost: temp22.toLocaleString('en-IN'),
                                                                    purchase_cost_new: temp22, mkt_value: currentval.toLocaleString('en-IN'), mkt_value_new: currentval, gain: gain, gain_str: gain.toLocaleString('en-IN'), cagr: cagr.toFixed(2), avg_days: Math.round(days), type: type, rta: datacon[a].RTA
                                                                });
                                                                newpurchase.push({ name: datacon[a].NAME, pan: datacon[a].PAN, scheme: datacon[a].SCHEME, product_code: datacon[a].PRODCODE, folio: datacon[a].FOLIO, absolute_return: absreturn, unit: balance.toFixed(3), purchase_cost: temp22, mkt_value: currentval, gain: gain, cagr: cagr.toFixed(2), avg_days: Math.round(days), type: type, rta: datacon[a].RTA });
                                                            }
                                                        } else {
                                                            tot_mkt_value.push(currentval);
                                                            tot_cost.push(temp22);
                                                            tot_gain.push(gain);
                                                            purchase.push({
                                                                name: datacon[a].NAME, pan: datacon[a].PAN, scheme: datacon[a].SCHEME, product_code: datacon[a].PRODCODE, folio: datacon[a].FOLIO, cnav: cnav, absolute_return: absreturn, unit: balance.toFixed(3), purchase_cost: temp22.toLocaleString('en-IN'),
                                                                purchase_cost_new: temp22, mkt_value: currentval.toLocaleString('en-IN'), mkt_value_new: currentval, gain: gain, gain_str: gain.toLocaleString('en-IN'), cagr: cagr.toFixed(2), avg_days: Math.round(days), type: type, rta: datacon[a].RTA
                                                            });
                                                            newpurchase.push({ name: datacon[a].NAME, pan: datacon[a].PAN, scheme: datacon[a].SCHEME, product_code: datacon[a].PRODCODE, folio: datacon[a].FOLIO, absolute_return: absreturn, unit: balance.toFixed(3), purchase_cost: temp22, mkt_value: currentval, gain: gain, cagr: cagr.toFixed(2), avg_days: Math.round(days), type: type, rta: datacon[a].RTA });
                                                        }
                                                    } // datascheme first loop
                                                    for (var r = 0; r < newpurchase.length; r++) {
                                                        sum11.push(newpurchase[r].purchase_cost * newpurchase[r].avg_days * newpurchase[r].cagr);
                                                        sum22.push(newpurchase[r].purchase_cost * newpurchase[r].avg_days);
                                                    }
                                                    sum1all = 0; sum2all = 0;
                                                    for (var kk = 0; kk < sum11.length; kk++) {
                                                        sum1all = sum11[kk] + sum1all;
                                                    }
                                                    for (var kkk = 0; kkk < sum22.length; kkk++) {
                                                        sum2all = sum22[kkk] + sum2all;
                                                    }
                                                    var sumcagr = sum1all / sum2all;
                                                    var mkt = 0; var cost = 0; var totgain = 0;
                                                    for (var p = 0; p < tot_mkt_value.length; p++) {
                                                        mkt = tot_mkt_value[p] + mkt;
                                                        cost = tot_cost[p] + cost;
                                                        totgain = tot_gain[p] + totgain;
                                                    }


                                                    resdata.data = { portfolio_data: purchase, final_values: { tot_mkt_value: mkt.toLocaleString('en-IN'), tot_cost: cost.toLocaleString('en-IN'), tot_gain: totgain.toLocaleString('en-IN'), tot_cagr: sumcagr.toFixed(1) } };

                                                    res.json(resdata);

                                                } else {
                                                    console.log("purchase=", "Data Not Found!")
                                                    resdata = {
                                                        status: 400,
                                                        message: 'Data not found',
                                                    }
                                                    res.json(resdata);
                                                }
                                            })
                                        } else {
                                            console.log("2222=", "Data Not Found!")
                                            resdata = {
                                                status: 400,
                                                message: 'Data not found',
                                            }
                                            res.json(resdata);
                                        }
                                    })
                                })
                            } else {
                                console.log("purchase=", "Data Not Found!")
                                resdata = {
                                    status: 400,
                                    message: 'Data not found',
                                }
                                res.json(resdata);
                            }
                        });
                    });
                }
            }
        } else {
            resdata = {
                status: 400,
                message: 'Key not found',
            }
            res.json(resdata);
        }
    } catch (err) {
        console.log(err)
    }
})

// call by default index.html page
// app.get("*", function (req, res) {
//     res.sendFile(srcpath + '/index.html');
// })

app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../build/index.html'))
);

//server stat on given port
app.listen(port, function () {
    console.log("server start on port" + port);
})


app.post("/api/abc", function (req, res) {
});

