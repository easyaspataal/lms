
const BaseModel = require("./basemodel");
class Userdata extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				user_id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				created_date: {name: 'created_date', type:Sequelize.DATE},
				kyc_verified: {name: 'kyc_verified', type:Sequelize.STRING},
				otp_verified: {name: 'otp_verified', type:Sequelize.STRING},
				cmobile: {name: 'cmobile', type:Sequelize.STRING},
				eid: {name: 'eid', type:Sequelize.STRING},
				corporate_id: {name: 'corporate_id', type:Sequelize.STRING},
				age: {name: 'age', type:Sequelize.STRING},
				dob: {name: 'dob', type:Sequelize.STRING},
				cemail: {name: 'cemail', type:Sequelize.STRING},
				address_area: {name: 'address_area', type:Sequelize.STRING},
				fromm: {name: 'fromm', type:Sequelize.STRING},
				marital_status: {name: 'marital_status', type:Sequelize.STRING},
				father_name: {name: 'father_name', type:Sequelize.STRING},
				relation: {name: 'relation', type:Sequelize.STRING},
				mother_name: {name: 'mother_name', type:Sequelize.STRING},
				address_line1: {name: 'address_line1', type:Sequelize.STRING},
				address_line2: {name: 'address_line2', type:Sequelize.STRING},
				pincode: {name: 'pincode', type:Sequelize.STRING},
				city: {name: 'city', type:Sequelize.STRING},
				state: {name: 'state', type:Sequelize.STRING},
				gender: {name: 'gender', type:Sequelize.STRING},
				_relations: {name: ' relations', type:Sequelize.STRING},
				name: {name: 'name', type:Sequelize.STRING},
				email: {name: 'email', type:Sequelize.STRING},
				mobile: {name: 'mobile', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				schema: "public", 
				tableName: "userdata",
				modelName: "userdata",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'user_id', 
			'created_date', 
			'kyc_verified', 
			'otp_verified', 
			'cmobile', 
			'eid', 
			'corporate_id', 
			'age', 
			'dob', 
			'cemail', 
			'address_area', 
			'fromm', 
			'marital_status', 
			'father_name', 
			'relation', 
			'mother_name', 
			'address_line1', 
			'address_line2', 
			'pincode', 
			'city', 
			'state', 
			'gender', 
			sequelize.literal(' relations AS _relations'), 
			'name', 
			'email', 
			'mobile'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'user_id', 
			'created_date', 
			'kyc_verified', 
			'otp_verified', 
			'cmobile', 
			'eid', 
			'corporate_id', 
			'age', 
			'dob', 
			'cemail', 
			'address_area', 
			'fromm', 
			'marital_status', 
			'father_name', 
			'relation', 
			'mother_name', 
			'address_line1', 
			'address_line2', 
			'pincode', 
			'city', 
			'state', 
			'gender', 
			sequelize.literal(' relations AS _relations'), 
			'name', 
			'email', 
			'mobile'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'user_id', 
			'created_date', 
			'kyc_verified', 
			'otp_verified', 
			'cmobile', 
			'eid', 
			'corporate_id', 
			'age', 
			'dob', 
			'cemail', 
			'address_area', 
			'fromm', 
			'marital_status', 
			'father_name', 
			'relation', 
			'mother_name', 
			'address_line1', 
			'address_line2', 
			'pincode', 
			'city', 
			'state', 
			'gender', 
			sequelize.literal(' relations AS _relations'), 
			'name', 
			'email', 
			'mobile'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'user_id', 
			'created_date', 
			'kyc_verified', 
			'otp_verified', 
			'cmobile', 
			'eid', 
			'corporate_id', 
			'age', 
			'dob', 
			'cemail', 
			'address_area', 
			'fromm', 
			'marital_status', 
			'father_name', 
			'relation', 
			'mother_name', 
			'address_line1', 
			'address_line2', 
			'pincode', 
			'city', 
			'state', 
			'gender', 
			sequelize.literal(' relations AS _relations'), 
			'name', 
			'email', 
			'mobile'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'user_id', 
			'created_date', 
			'kyc_verified', 
			'otp_verified', 
			'cmobile', 
			'eid', 
			'corporate_id', 
			'age', 
			'dob', 
			'cemail', 
			'address_area', 
			'fromm', 
			'marital_status', 
			'father_name', 
			'relation', 
			'mother_name', 
			'address_line1', 
			'address_line2', 
			'pincode', 
			'city', 
			'state', 
			'gender', 
			sequelize.literal(' relations AS _relations'), 
			'name', 
			'email', 
			'mobile'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("cmobile iLIKE :search"), 
			sequelize.literal("eid iLIKE :search"), 
			sequelize.literal("age iLIKE :search"), 
			sequelize.literal("dob iLIKE :search"), 
			sequelize.literal("cemail iLIKE :search"), 
			sequelize.literal("address_area iLIKE :search"), 
			sequelize.literal("fromm iLIKE :search"), 
			sequelize.literal("marital_status iLIKE :search"), 
			sequelize.literal("father_name iLIKE :search"), 
			sequelize.literal("relation iLIKE :search"), 
			sequelize.literal("mother_name iLIKE :search"), 
			sequelize.literal("address_line1 iLIKE :search"), 
			sequelize.literal("address_line2 iLIKE :search"), 
			sequelize.literal("pincode iLIKE :search"), 
			sequelize.literal("city iLIKE :search"), 
			sequelize.literal("state iLIKE :search"), 
			sequelize.literal("gender iLIKE :search"), 
			sequelize.literal("name iLIKE :search"), 
			sequelize.literal("email iLIKE :search"), 
			sequelize.literal("mobile iLIKE :search"),
		];
	}

	
	
}
module.exports = Userdata;
