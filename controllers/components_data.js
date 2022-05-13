/** Express router providing related routes to page component data
 * @module routers/components_data
 * @requires express
 * @requires config - app config
 * @requires models- app model module
 */


 /**
 * express module
 * @const
 */
const express = require('express');


/**
 * Express router to mount user page functions.
 * @type {object}
 * @const
 */
const router = express.Router();


/**
 * App config module
 * @const
 */
const config = require('../config.js');


/**
 *  models
 * @const
 */
const models = require('../models/index.js');
const utils = require('../helpers/utils.js');


const sequelize = models.sequelize;
const Op = models.Op; // sequelize query operators


 /**
 * Route to check if field value already exist in a Hospital table
 * @route {GET} /components_data/hospital_hid_exist/{fieldvalue}
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/hospital_hid_exist/:fieldvalue', async (req, res) => {
	try{
		let val = req.params.fieldvalue
		let count = await models.Hospital.count({ where:{ 'hid': val } });
		if(count > 0){
			return res.ok("true");
		}
		return res.ok("false");
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to check if field value already exist in a Hospital table
 * @route {GET} /components_data/hospital_email_exist/{fieldvalue}
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/hospital_email_exist/:fieldvalue', async (req, res) => {
	try{
		let val = req.params.fieldvalue
		let count = await models.Hospital.count({ where:{ 'email': val } });
		if(count > 0){
			return res.ok("true");
		}
		return res.ok("false");
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to check if field value already exist in a Lmsusers table
 * @route {GET} /components_data/lmsusers_login_id_exist/{fieldvalue}
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/lmsusers_login_id_exist/:fieldvalue', async (req, res) => {
	try{
		let val = req.params.fieldvalue
		let count = await models.Lmsusers.count({ where:{ 'login_id': val } });
		if(count > 0){
			return res.ok("true");
		}
		return res.ok("false");
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to check if field value already exist in a Lmsusers table
 * @route {GET} /components_data/lmsusers_email_exist/{fieldvalue}
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/lmsusers_email_exist/:fieldvalue', async (req, res) => {
	try{
		let val = req.params.fieldvalue
		let count = await models.Lmsusers.count({ where:{ 'email': val } });
		if(count > 0){
			return res.ok("true");
		}
		return res.ok("false");
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to check if field value already exist in a Lmsusers table
 * @route {GET} /components_data/lmsusers_id_exist/{fieldvalue}
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/lmsusers_id_exist/:fieldvalue', async (req, res) => {
	try{
		let val = req.params.fieldvalue
		let count = await models.Lmsusers.count({ where:{ 'id': val } });
		if(count > 0){
			return res.ok("true");
		}
		return res.ok("false");
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get agent_id_option_list records
 * @route {GET} /components_data/agent_id_option_list
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/agent_id_option_list', async (req, res) => {
	try{
		let sqltext = `SELECT user_id as value, user_id as label FROM users` ;
		let records = await sequelize.query(sqltext, { type: sequelize.QueryTypes.SELECT });
		return res.ok(records);
	}
	catch(err){
		console.error(err)
		return res.serverError(err);
	}
});


 /**
 * Route to get role_id_option_list records
 * @route {GET} /components_data/role_id_option_list
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/role_id_option_list', async (req, res) => {
	try{
		let sqltext = `SELECT role_id as value, role_name as label FROM roles` ;
		let records = await sequelize.query(sqltext, { type: sequelize.QueryTypes.SELECT });
		return res.ok(records);
	}
	catch(err){
		console.error(err)
		return res.serverError(err);
	}
});


 /**
 * Route to get user_role_id_option_list records
 * @route {GET} /components_data/user_role_id_option_list
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/user_role_id_option_list', async (req, res) => {
	try{
		let sqltext = `SELECT role_id as value, role_id as label FROM roles` ;
		let records = await sequelize.query(sqltext, { type: sequelize.QueryTypes.SELECT });
		return res.ok(records);
	}
	catch(err){
		console.error(err)
		return res.serverError(err);
	}
});
router.post('/lms', async (req, res) => {
    try{
        let axios = require("axios");
        let email = req.body.email_id; //prayag@easyaspataal.com
        let url = "https://bk2-gwli64osaq-el.a.run.app/hospital/lmsjiralist?reporterId="+email;
        let response = await axios.get(url);
        console.log(response.data);
        return res.ok(response.data);
    }
    catch(error){
        console.log(error)
    }
});
 router.post('/cibil', async (req, res) => {  
    try{
        let axios = require("axios");
        console.log(req.body)
        console.log('req.body')
       let url = 'https://bk2-7k5qcren2q-el.a.run.app/admin/getequifax?name='+req.body.name+'&address='+req.body.address+'&state='+req.body.state+'&pin='+req.body.pin+'&contact='+req.body.contact+'&email='+req.body.email+'&pan='+req.body.pan+'&dob='+req.body.dob;
        let response = await axios.get(url);
        console.log(response.data);
        return res.ok(response.data);
    }
    catch(error){
        console.log(error)
    }
});router.post('/tpp', async (req, res) => {
    try{
        let axios = require("axios");
        console.log(req.body.start);
var config = {
  method: 'get',
  url: 'https://easylos.atlassian.net/rest/api/2/search?jql=status!=%20"Ignore%20Mails"&startAt='+req.body.start+'&maxResults=100',
  headers: {
    'Authorization': 'Basic Y2hpcmFnQGVhc3lhc3BhdGFhbC5jb206RngzaHZOeXpzWmRQZjRNcmtzN0s5RUUw'
  }
};
axios(config)
.then(function (response) {
    var patientarr = [];
    var amountarr = [];
    var datearr = [];
    var keyarr = [];
    var statusarr = [];
    var summaryarr = [];
    var createdarr = [];
    var contactarr = [];
    var hosnamearr = [];
    var hoslocarr = [];
    var hosconarr = [];
    var hosaddarr = [];
    var hoshidarr = [];
    var hosbankarr = [];
    var hosaccnoarr = [];
    var hosifschosarr = [];
    var hospayeearr = [];
    var disdatearr = [];
    var disamtarr = [];
    var disutrarr = [];
    var repaydatearr = [];
    var repayamtarr = [];
    response.data.issues.map((issue, index) => {
    const patientresult = issue.fields.customfield_10040
patientarr.push(patientresult)
const amountresult = issue.fields.customfield_10182
amountarr.push(amountresult)
const dateresult = issue.fields.customfield_10090
datearr.push(dateresult)
 const keyresult = issue.key;
 keyarr.push(keyresult)
 const statusresult = issue.fields.status.name;
 statusarr.push(statusresult);
 const summaryresult = issue.fields.summary;
 summaryarr.push(summaryresult);
 const createdresult = new Date(Date.parse(issue.fields.created)).toLocaleString().replace(","," ");
 createdarr.push(createdresult)
 const contactresult = issue.fields.customfield_10107;
 contactarr.push(contactresult);
 const hosnamearrresult = issue.fields.customfield_10067;
 hosnamearr.push(hosnamearrresult);
 const hoslocarrresult = issue.fields.customfield_10216;
 hoslocarr.push(hoslocarrresult);
 const hosconarrresult = issue.fields.customfield_10105;
 hosconarr.push(hosconarrresult);
 const hosaddarrresult = issue.fields.customfield_10319;
 hosaddarr.push(hosaddarrresult);
 const hoshidarrresult = issue.fields.customfield_10318;
 hoshidarr.push(hoshidarrresult);
 const hosbankarrresult = issue.fields.customfield_10321;
 hosbankarr.push(hosbankarrresult);
 const hosaccnoarrresult = issue.fields.customfield_10320;
 hosaccnoarr.push(hosaccnoarrresult);
 const hosifschosarrresult = issue.fields.customfield_10322;
 hosifschosarr.push(hosifschosarrresult);
 const hospayeearrresult = issue.fields.customfield_10323;
 hospayeearr.push(hospayeearrresult);
 const disdatearrresult = new Date(Date.parse(issue.fields.customfield_10090)).toLocaleString().replace(","," ");
 disdatearr.push(disdatearrresult);
 const disutrarrresult = issue.fields.customfield_10108;
 disutrarr.push(disutrarrresult);
 const disamtarrresult = issue.fields.customfield_10089;
 disamtarr.push(disamtarrresult);
 const repaydatearrresult = new Date(Date.parse(issue.fields.customfield_10384)).toLocaleString().replace(","," ");
 repaydatearr.push(repaydatearrresult);
 const repayamtarrresult = issue.fields.customfield_10330;
 repayamtarr.push(repayamtarrresult);
    })
var items = keyarr.map((keyarr, index) => {
    return {
      key: keyarr,
      status: statusarr[index],
      summary: summaryarr[index],
      created: createdarr[index],
      patient: patientarr[index],
      amount : amountarr[index],
      date: datearr[index],
      contact: contactarr[index],
      type: 'cashless',
      hosname   :   hosnamearr[index],
      hosloc    :   hoslocarr   [index],
      hoscon    :   hosconarr   [index],
      hosadd    :   hosaddarr   [index],
      hoshid    :   hoshidarr   [index],
      hosbank  :   hosbankarr  [index],
      hosaccno  :   hosaccnoarr [index],
      hosifschos:   hosifschosarr[index],
      hospayee  :   hospayeearr [index],
      disdate   :   disdatearr  [index],
      disamt   :   disamtarr   [index],
      disutr   :   disutrarr   [index],
      repaydate :   repaydatearr[index],
      repayamt  :   repayamtarr[index]
    }
  });
    const result = {
    code: 200,
    status: true,
    message:items
}
res.json(result);
console.log("rendeing");
})
.catch(function (error) {
  console.log(error);
});
    }
    catch(err) {
        return res.serverError(err);
    }
});router.post('/alldetails', async (req, res) => {
    try{
        let axios = require("axios");
var config = {
  method: 'get',
  url: 'https://easylos.atlassian.net/rest/api/3/issue/'+req.body.claim_no,
  headers: {
    'Authorization': 'Basic Y2hpcmFnQGVhc3lhc3BhdGFhbC5jb206RngzaHZOeXpzWmRQZjRNcmtzN0s5RUUw'
  }
};
axios(config)
.then(function (response) {
 var patientarr = [];
                  var amountarr = [];
                  var datearr = [];
                  var keyarr = [];
                  var statusarr = [];
                  var summaryarr = [];
                  var createdarr = [];
                  var contactarr = [];
                  var hosnamearr = [];
                  var hoslocarr = [];
                  var hosconarr = [];
                  var hosaddarr = [];
                  var hoshidarr = [];
                  var hosbankarr = [];
                  var hosaccnoarr = [];
                  var hosifschosarr = [];
                  var hospayeearr = [];
                  var disdatearr = [];
                  var disamtarr = [];
                  var disutrarr = [];
                  var repaydatearr = [];
                  var repayamtarr = [];
                  var statearr=[];
                   var pinarr = [];
                  var aadhararr = [];
                  var statearr=[];
                  var cityarr = [];
                  var panarr = [];
                  var dobarr = [];
                  var policyholdernamearr = [];
                  var approvalamountarr = [];
                    policyholdernamearr.push(response.data.fields.customfield_10041)
                    statearr.push(response.data.fields.customfield_10395[0].value)
            approvalamountarr.push(response.data.fields.customfield_10180)
            cityarr.push(response.data.fields.customfield_10189)
            panarr.push(response.data.fields.customfield_10057)
            contactarr.push(response.data.fields.customfield_10107)
            pinarr.push(response.data.fields.customfield_10231)
            aadhararr.push(response.data.fields.customfield_10104)
            dobarr.push(response.data.fields.customfield_10103)
                  patientarr.push(response.data.fields.customfield_10040)
                  amountarr.push(response.data.fields.customfield_10182)
                  datearr.push(response.data.fields.customfield_10090)
                  keyarr.push(response.data.key)
                   statusarr.push(response.data.fields.name)
                   summaryarr.push(response.data.fields.summary)
                   createdarr.push(new Date(Date.parse(response.data.fields.created)).toLocaleString().replace(","," "))
                   contactarr.push(response.data.fields.customfield_10107)
                   hosnamearr.push(response.data.fields.customfield_10067)
                   hoslocarr.push(response.data.fields.customfield_10216)
                   hosconarr.push(response.data.fields.customfield_10105)
                   hosaddarr.push(response.data.fields.customfield_10319)
                   hoshidarr.push(response.data.fields.customfield_10318)
                   hosbankarr.push(response.data.fields.customfield_10321)
                   hosaccnoarr.push(response.data.fields.customfield_10320)
                   hosifschosarr.push(response.data.fields.customfield_10322)
                   hospayeearr.push(response.data.fields.customfield_10323)
                   if(response.data.fields.customfield_10090==null){
                       disdatearr.push('Not Updated');
                       }else{
                           disdatearr.push(new Date(Date.parse(response.data.fields.customfield_10090)).toLocaleString().replace(","," "))
                       }
                   disutrarr.push(response.data.fields.customfield_10108)
                   disamtarr.push(response.data.fields.customfield_10089)
                   console.log(response.data.fields.customfield_10384);
                   if(response.data.fields.customfield_10384==null){
                        repaydatearr.push('Not Updated');
                     }else{
                           repaydatearr.push(new Date(Date.parse(response.data.fields.customfield_10384)).toLocaleString().replace(","," "))
                       }
                   repayamtarr.push(response.data.fields.customfield_10330)
var items = keyarr.map((keyarr, index) => {
    return {
        key: keyarr,
                    status: statusarr[index],
                    summary: summaryarr[index],
                    created: createdarr[index],
                    patient: patientarr[index],
                    amount : amountarr[index],
                    date: datearr[index],
                    contact: contactarr[index],
                    type: 'cashless',
                    hosname   :   hosnamearr[index],
                    hosloc    :   hoslocarr   [index],
                    hoscon    :   hosconarr   [index],
                    hosadd    :   hosaddarr   [index],
                    hoshid    :   hoshidarr   [index],
                    hosbank  :   hosbankarr  [index],
                    hosaccno  :   hosaccnoarr [index],
                    hosifschos:   hosifschosarr[index],
                    hospayee  :   hospayeearr [index],
                    disdate   :   disdatearr  [index],
                    disamt   :   disamtarr   [index],
                    disutr   :   disutrarr   [index],
                    repaydate :   repaydatearr[index],
                    repayamt  :   repayamtarr[index],
                    state: statearr[index],
                    city: cityarr[index],
                    pan: panarr[index],
                    contact: contactarr[index],
                    policyholdername: policyholdernamearr[index],
                    approvalamount: approvalamountarr[index],
                    pin: pinarr[index],
                    dob: dobarr[index],
                    aadhar: aadhararr[index]
    }
  });
    const result = {
    code: 200,
    status: true,
    message:items
}
res.json(result);
console.log(result);
})
.catch(function (error) {
  console.log(error);
});
    }
    catch(err) {
        return res.serverError(err);
    }
});
module.exports = router;
