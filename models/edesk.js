
const BaseModel = require("./basemodel");
class Edesk extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				_id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				requestinitiated: {name: 'requestinitiated', type:Sequelize.STRING},
				created_date: {name: 'created_date', type:Sequelize.DATE},
				hid: {name: 'hid', type:Sequelize.STRING},
				userid: {name: 'userid', type:Sequelize.STRING},
				hospitalid: {name: 'hospitalid', type:Sequelize.STRING},
				fromm: {name: 'fromm', type:Sequelize.STRING},
				status: {name: 'status', type:Sequelize.STRING},
				eid: {name: 'eid', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				schema: "public", 
				tableName: "edesk",
				modelName: "edesk",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'_id', 
			'requestinitiated', 
			'created_date', 
			'hid', 
			'userid', 
			'hospitalid', 
			'fromm', 
			'status', 
			'eid'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'_id', 
			'requestinitiated', 
			'created_date', 
			'hid', 
			'userid', 
			'hospitalid', 
			'fromm', 
			'status', 
			'eid'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'_id', 
			'requestinitiated', 
			'created_date', 
			'hid', 
			'userid', 
			'hospitalid', 
			'fromm', 
			'status', 
			'eid'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'_id', 
			'requestinitiated', 
			'created_date', 
			'hid', 
			'userid', 
			'hospitalid', 
			'fromm', 
			'status', 
			'eid'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'_id', 
			'requestinitiated', 
			'created_date', 
			'hid', 
			'userid', 
			'hospitalid', 
			'fromm', 
			'status', 
			'eid'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("hid iLIKE :search"), 
			sequelize.literal("userid iLIKE :search"), 
			sequelize.literal("hospitalid iLIKE :search"), 
			sequelize.literal("fromm iLIKE :search"), 
			sequelize.literal("status iLIKE :search"), 
			sequelize.literal("eid iLIKE :search"),
		];
	}

	
	
}
module.exports = Edesk;
