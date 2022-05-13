
const BaseModel = require("./basemodel");
class Lms extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true  },
				login_id: {name: 'Login ID', type:Sequelize.STRING},
				hospital_name: {name: 'Hospital Name', type:Sequelize.STRING},
				area: {name: 'Area', type:Sequelize.STRING},
				subvention_fee: {name: 'Subvention fee', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				schema: "public", 
				tableName: "lms",
				modelName: "lms",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			sequelize.literal('Login ID AS login_id'), 
			sequelize.literal('Hospital Name AS hospital_name'), 
			sequelize.literal('Area AS area'), 
			sequelize.literal('Subvention fee AS subvention_fee')
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			sequelize.literal('Login ID AS login_id'), 
			sequelize.literal('Hospital Name AS hospital_name'), 
			sequelize.literal('Area AS area'), 
			sequelize.literal('Subvention fee AS subvention_fee')
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			sequelize.literal('Login ID AS login_id'), 
			sequelize.literal('Hospital Name AS hospital_name'), 
			sequelize.literal('Area AS area'), 
			sequelize.literal('Subvention fee AS subvention_fee')
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			sequelize.literal('Login ID AS login_id'), 
			sequelize.literal('Hospital Name AS hospital_name'), 
			sequelize.literal('Area AS area'), 
			sequelize.literal('Subvention fee AS subvention_fee')
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			sequelize.literal('Login ID AS login_id'), 
			sequelize.literal('Hospital Name AS hospital_name'), 
			sequelize.literal('Area AS area'), 
			sequelize.literal('Subvention fee AS subvention_fee')
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("Hospital Name iLIKE :search"), 
			sequelize.literal("Area iLIKE :search"), 
			sequelize.literal("Subvention fee iLIKE :search"),
		];
	}

	
	
}
module.exports = Lms;
