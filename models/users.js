
const BaseModel = require("./basemodel");
class Users extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				user_id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				user_role_id: {name: 'user_role_id', type:Sequelize.INTEGER},
				otp_date: {name: 'otp_date', type:Sequelize.DATE},
				curr_date: {name: 'curr_date', type:Sequelize.DATE},
				email: {name: 'email', type:Sequelize.STRING},
				irda_code: {name: 'irda_code', type:Sequelize.STRING},
				photo: {name: 'photo', type:Sequelize.STRING},
				otp_code: {name: 'otp_code', type:Sequelize.STRING},
				password: {name: 'password', type:Sequelize.STRING},
				username: {name: 'username', type:Sequelize.STRING},
				first_name: {name: 'first_name', type:Sequelize.STRING},
				last_name: {name: 'last_name', type:Sequelize.STRING},
				telephone: {name: 'telephone', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				schema: "public", 
				tableName: "users",
				modelName: "users",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'user_id', 
			'user_role_id', 
			'otp_date', 
			'curr_date', 
			'email', 
			'irda_code', 
			'photo', 
			'otp_code', 
			'username', 
			'first_name', 
			'last_name', 
			'telephone'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'user_id', 
			'user_role_id', 
			'otp_date', 
			'curr_date', 
			'email', 
			'irda_code', 
			'photo', 
			'otp_code', 
			'username', 
			'first_name', 
			'last_name', 
			'telephone'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'user_id', 
			'user_role_id', 
			'otp_date', 
			'curr_date', 
			'email', 
			'irda_code', 
			'photo', 
			'otp_code', 
			'username', 
			'first_name', 
			'last_name', 
			'telephone'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'user_id', 
			'user_role_id', 
			'otp_date', 
			'curr_date', 
			'email', 
			'irda_code', 
			'photo', 
			'otp_code', 
			'username', 
			'first_name', 
			'last_name', 
			'telephone'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'user_id', 
			'user_role_id', 
			'otp_date', 
			'curr_date', 
			'email', 
			'irda_code', 
			'photo', 
			'otp_code', 
			'username', 
			'first_name', 
			'last_name', 
			'telephone'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("email iLIKE :search"), 
			sequelize.literal("irda_code iLIKE :search"), 
			sequelize.literal("otp_code iLIKE :search"), 
			sequelize.literal("password iLIKE :search"), 
			sequelize.literal("username iLIKE :search"), 
			sequelize.literal("first_name iLIKE :search"), 
			sequelize.literal("last_name iLIKE :search"), 
			sequelize.literal("telephone iLIKE :search"),
		];
	}

	
	
}
module.exports = Users;
