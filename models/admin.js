
const BaseModel = require("./basemodel");
class Admin extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				user_id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				user_name: {name: 'user_name', type:Sequelize.STRING},
				email: {name: 'email', type:Sequelize.STRING},
				password: {name: 'password', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				schema: "public", 
				tableName: "admin",
				modelName: "admin",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'user_id', 
			'user_name', 
			'email'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'user_id', 
			'user_name', 
			'email'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'user_id', 
			'user_name', 
			'email'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'user_id', 
			'user_name', 
			'email'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'user_id', 
			'user_name', 
			'email'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("user_name iLIKE :search"), 
			sequelize.literal("email iLIKE :search"), 
			sequelize.literal("password iLIKE :search"),
		];
	}

	
	
}
module.exports = Admin;
