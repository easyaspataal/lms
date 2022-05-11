/** Express router providing Hos related routes
 * @module routers/Hos
 * @requires express
 * @requires config - app config
 * @requires utils - app utils functions
 * @requires express-validator - form validation module
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
 * App utils functions module
 * @const
 */
const utils = require('../helpers/utils.js');


/**
 * Form input validation module
 * @const
 */
const { body, validationResult } = require('express-validator');


/**
 * Hos models
 * @const
 */
const models = require('../models/index.js');
const Hos = models.Hos;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators




/**
 * Route to list hos records
 * @route {GET} /hos/index/{fieldname}/{fieldvalue}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req, res) => {  
	try{
		let query = {};  // sequelize query object
		let where = {};  // sequelize where conditions
		let replacements = {};  // sequelize query params
		let fieldname = req.params.fieldname;
		let fieldvalue = req.params.fieldvalue;
		
		if (fieldname){
			where[Op.and] = [
				sequelize.literal(`(${fieldname} = :fieldvalue)`)
			];
			replacements.fieldvalue = fieldvalue;
		}
		let search = req.query.search;
		if(search){
			let searchFields = Hos.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Hos.getOrderBy(req);
		query.attributes = Hos.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Hos.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Hos record
 * @route {GET} /hos/view/{recid}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get(['/view/:recid'], async (req, res) => {
	try{
		let recid = req.params.recid || null;
		let query = {}
		let where = {}
		where['ID'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Hos.viewFields();
		let record = await Hos.findOne(query);
		if(!record){
			return res.notFound();
		}
		return res.ok(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to insert Hos record
 * @route {POST} /hos/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('beds').optional().isNumeric(),
		body('contact').optional().isNumeric(),
		body('hid').optional().isNumeric(),
		body('area').optional(),
		body('avg_patients').optional(),
		body('branches').optional(),
		body('city').optional(),
		body('createdat').optional(),
		body('discount_rate').optional(),
		body('district').optional(),
		body('email').optional().isEmail(),
		body('emergency_service').optional(),
		body('icu_beds').optional(),
		body('insurance_accepted').optional(),
		body('latitude').optional(),
		body('logo').optional(),
		body('longitude').optional(),
		body('medical_tourism_accepted').optional(),
		body('medical_tourism_rate').optional(),
		body('name').optional(),
		body('ownership').optional(),
		body('password').optional(),
		body('confirm_password', 'Passwords do not match').custom((value, {req}) => (value === req.body.password)),
		body('patients_per_day').optional(),
		body('payment_id').optional(),
		body('pincode').optional(),
		body('referral_rate').optional(),
		body('registration_no').optional(),
		body('rohini_id').optional(),
		body('staff').optional(),
		body('state').optional(),
		body('status').optional(),
		body('tagline').optional(),
		body('type').optional(),
		body('url').optional(),
		body('ventilator_beds').optional(),
		body('website').optional(),
		body('tv_installed').optional(),
		body('about').optional(),
		body('accreditation').optional(),
		body('address').optional(),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		modeldata.password = utils.passwordHash(modeldata.password);
		
		//save Hos record
		let record = await Hos.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Hos record for edit
 * @route {GET} /hos/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/edit/:recid', async (req, res) => {
	try{
		let recid = req.params.recid;
		let query = {};
		let where = {};
		where['ID'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Hos.editFields();
		let record = await Hos.findOne(query);
		if(!record){
			return res.notFound();
		}
		return res.ok(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to update  Hos record
 * @route {POST} /hos/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('beds').optional().isNumeric(),
		body('contact').optional().isNumeric(),
		body('hid').optional().isNumeric(),
		body('area').optional(),
		body('avg_patients').optional(),
		body('branches').optional(),
		body('city').optional(),
		body('createdat').optional(),
		body('discount_rate').optional(),
		body('district').optional(),
		body('email').optional().isEmail(),
		body('emergency_service').optional(),
		body('icu_beds').optional(),
		body('insurance_accepted').optional(),
		body('latitude').optional(),
		body('logo').optional(),
		body('longitude').optional(),
		body('medical_tourism_accepted').optional(),
		body('medical_tourism_rate').optional(),
		body('name').optional(),
		body('ownership').optional(),
		body('patients_per_day').optional(),
		body('payment_id').optional(),
		body('pincode').optional(),
		body('referral_rate').optional(),
		body('registration_no').optional(),
		body('rohini_id').optional(),
		body('staff').optional(),
		body('state').optional(),
		body('status').optional(),
		body('tagline').optional(),
		body('type').optional(),
		body('url').optional(),
		body('ventilator_beds').optional(),
		body('website').optional(),
		body('tv_installed').optional(),
		body('about').optional(),
		body('accreditation').optional(),
		body('address').optional(),
	]
, async (req, res) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let recid = req.params.recid;
		let modeldata = req.body;
		let query = {};
		let where = {};
		where['ID'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Hos.editFields();
		let record = await Hos.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Hos.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Hos record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /hos/delete/{recid}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/delete/:recid', async (req, res) => {
	try{
		let recid = req.params.recid || '';
		recid = recid.split(',');
		let query = {};
		let where = {};
		where['ID'] = recid;
		query.raw = true;
		query.where = where;
		let records = await Hos.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Hos.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
