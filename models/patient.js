
const BaseModel = require("./basemodel");
class Patient extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				amount: {name: 'amount', type:Sequelize.DECIMAL},
				date_added: {name: 'date_added', type:Sequelize.DATE},
				agent_id: {name: 'agent_id', type:Sequelize.INTEGER},
				patient_id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				policy_doc: {name: 'policy_doc', type:Sequelize.STRING},
				hospital_invoice: {name: 'hospital_invoice', type:Sequelize.STRING},
				status: {name: 'status', type:Sequelize.STRING},
				photo: {name: 'photo', type:Sequelize.STRING},
				category: {name: 'category', type:Sequelize.STRING},
				email: {name: 'email', type:Sequelize.STRING},
				hosid: {name: 'hosid', type:Sequelize.STRING},
				first_name: {name: 'first_name', type:Sequelize.STRING},
				last_name: {name: 'last_name', type:Sequelize.STRING},
				phone_number: {name: 'phone_number', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				schema: "public", 
				tableName: "patient",
				modelName: "patient",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'amount', 
			'date_added', 
			'agent_id', 
			'patient_id', 
			'policy_doc', 
			'hospital_invoice', 
			'status', 
			'photo', 
			'category', 
			'email', 
			'hosid', 
			'first_name', 
			'last_name', 
			'phone_number'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'amount', 
			'date_added', 
			'agent_id', 
			'patient_id', 
			'policy_doc', 
			'hospital_invoice', 
			'status', 
			'photo', 
			'category', 
			'email', 
			'hosid', 
			'first_name', 
			'last_name', 
			'phone_number'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'amount', 
			'date_added', 
			'agent_id', 
			'patient_id', 
			'policy_doc', 
			'hospital_invoice', 
			'status', 
			'photo', 
			'category', 
			'email', 
			'hosid', 
			'first_name', 
			'last_name', 
			'phone_number'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'amount', 
			'date_added', 
			'agent_id', 
			'patient_id', 
			'policy_doc', 
			'hospital_invoice', 
			'status', 
			'photo', 
			'category', 
			'email', 
			'hosid', 
			'first_name', 
			'last_name', 
			'phone_number'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'amount', 
			'date_added', 
			'agent_id', 
			'patient_id', 
			'policy_doc', 
			'hospital_invoice', 
			'status', 
			'photo', 
			'category', 
			'email', 
			'hosid', 
			'first_name', 
			'last_name', 
			'phone_number'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("policy_doc iLIKE :search"), 
			sequelize.literal("hospital_invoice iLIKE :search"), 
			sequelize.literal("status iLIKE :search"), 
			sequelize.literal("category iLIKE :search"), 
			sequelize.literal("email iLIKE :search"), 
			sequelize.literal("hosid iLIKE :search"), 
			sequelize.literal("first_name iLIKE :search"), 
			sequelize.literal("last_name iLIKE :search"), 
			sequelize.literal("phone_number iLIKE :search"),
		];
	}

	
	
}
module.exports = Patient;
