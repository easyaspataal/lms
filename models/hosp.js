
const BaseModel = require("./basemodel");
class Hosp extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				contact: {name: 'contact', type:Sequelize.DECIMAL},
				hid: {name: 'hid', type:Sequelize.STRING},
				email: {name: 'email', type:Sequelize.STRING},
				name: {name: 'name', type:Sequelize.STRING},
				password: {name: 'password', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				schema: "public", 
				tableName: "hosp",
				modelName: "hosp",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'contact', 
			'hid', 
			'email', 
			'name'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'contact', 
			'hid', 
			'email', 
			'name'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'contact', 
			'hid', 
			'email', 
			'name'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'contact', 
			'hid', 
			'email', 
			'name'
		];
	}

	static accounteditFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'contact', 
			'hid', 
			'name'
		];
	}

	static accountviewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'contact', 
			'hid', 
			'email', 
			'name'
		];
	}

	static exportAccountviewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'contact', 
			'hid', 
			'email', 
			'name'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'contact', 
			'hid', 
			'name'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("hid iLIKE :search"), 
			sequelize.literal("email iLIKE :search"), 
			sequelize.literal("name iLIKE :search"),
		];
	}

	
	
}
module.exports = Hosp;
