
const BaseModel = require("./basemodel");
class Requestkyc extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				_id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				created_date: {name: 'created_date', type:Sequelize.DATE},
				adhar: {name: 'adhar', type:Sequelize.STRING},
				fromm: {name: 'fromm', type:Sequelize.STRING},
				status: {name: 'status', type:Sequelize.STRING},
				eid: {name: 'eid', type:Sequelize.STRING},
				pan: {name: 'pan', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				schema: "public", 
				tableName: "requestkyc",
				modelName: "requestkyc",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'_id', 
			'created_date', 
			'adhar', 
			'fromm', 
			'status', 
			'eid', 
			'pan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'_id', 
			'created_date', 
			'adhar', 
			'fromm', 
			'status', 
			'eid', 
			'pan'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'_id', 
			'created_date', 
			'adhar', 
			'fromm', 
			'status', 
			'eid', 
			'pan'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'_id', 
			'created_date', 
			'adhar', 
			'fromm', 
			'status', 
			'eid', 
			'pan'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'_id', 
			'created_date', 
			'adhar', 
			'fromm', 
			'status', 
			'eid', 
			'pan'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("adhar iLIKE :search"), 
			sequelize.literal("fromm iLIKE :search"), 
			sequelize.literal("status iLIKE :search"), 
			sequelize.literal("eid iLIKE :search"), 
			sequelize.literal("pan iLIKE :search"),
		];
	}

	
	
}
module.exports = Requestkyc;
