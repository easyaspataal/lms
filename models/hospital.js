
const BaseModel = require("./basemodel");
class Hospital extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				contact: { type: Sequelize.DECIMAL, primaryKey: true  },
				hid: {name: 'hid', type:Sequelize.STRING},
				email: {name: 'email', type:Sequelize.STRING},
				name: {name: 'name', type:Sequelize.STRING},
				password: {name: 'password', type:Sequelize.STRING}
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
			'name'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'contact', 
			'hid', 
			'email', 
			'name'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("hid iLIKE :search"), 
			sequelize.literal("email iLIKE :search"), 
			sequelize.literal("name iLIKE :search"), 
			sequelize.literal("password iLIKE :search"),
		];
	}

	
	
}
module.exports = Hospital;
