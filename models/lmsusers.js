
const BaseModel = require("./basemodel");
class Lmsusers extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true  },
				role_id: {name: 'role_id', type:Sequelize.INTEGER},
				login_id: {name: 'Login ID', type:Sequelize.STRING},
				password: {name: 'password', type:Sequelize.STRING},
				email: {name: 'email', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				schema: "public", 
				tableName: "lmsusers",
				modelName: "lmsusers",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'role_id', 
			sequelize.literal('Login ID AS login_id'), 
			'email'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'role_id', 
			sequelize.literal('Login ID AS login_id'), 
			'email'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'role_id', 
			sequelize.literal('Login ID AS login_id'), 
			'email'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'role_id', 
			sequelize.literal('Login ID AS login_id'), 
			'email'
		];
	}

	static accounteditFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'role_id', 
			sequelize.literal('Login ID AS login_id'), 
			'email'
		];
	}

	static accountviewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'role_id', 
			sequelize.literal('Login ID AS login_id'), 
			'email'
		];
	}

	static exportAccountviewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'role_id', 
			sequelize.literal('Login ID AS login_id'), 
			'email'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("email iLIKE :search"),
		];
	}

	
	
}
module.exports = Lmsusers;
