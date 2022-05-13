
const BaseModel = require("./basemodel");
class Hospital extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				contact: {name: 'contact', type:Sequelize.DECIMAL},
				hid: {name: 'hid', type:Sequelize.STRING},
				email: {name: 'email', type:Sequelize.STRING},
				name: {name: 'name', type:Sequelize.STRING},
				password: {name: 'password', type:Sequelize.STRING},
				_id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true }
			}, 
			{ 
				sequelize,
				schema: "public", 
				tableName: "hospital",
				modelName: "hospital",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'contact', 
			'hid', 
			'email', 
			'name', 
			'_id'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'contact', 
			'hid', 
			'email', 
			'name', 
			'_id'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'contact', 
			'hid', 
			'email', 
			'name', 
			'_id'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'contact', 
			'hid', 
			'email', 
			'name', 
			'_id'
		];
	}

	static accounteditFields() {
		let sequelize = this.sequelize;
		return [
			'contact', 
			'hid', 
			'name', 
			'_id'
		];
	}

	static accountviewFields() {
		let sequelize = this.sequelize;
		return [
			'contact', 
			'hid', 
			'email', 
			'name', 
			'_id'
		];
	}

	static exportAccountviewFields() {
		let sequelize = this.sequelize;
		return [
			'contact', 
			'hid', 
			'email', 
			'name', 
			'_id'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'contact', 
			'hid', 
			'name', 
			'_id'
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
module.exports = Hospital;
