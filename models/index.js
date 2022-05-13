
const Sequelize = require('sequelize');
const dbConfig    = require('../config.js').database;

const sequelize = new Sequelize(dbConfig.name, dbConfig.username, dbConfig.password, {
		dialect: dbConfig.type,
		host: dbConfig.host,
		port: dbConfig.port,
		pool: {
			max: 15,
			min: 5,
			idle: 20000,
			evict: 15000,
			acquire: 30000
		},
		define: {
			timestamps: false,
			freezeTableName: true
		},
		operatorsAliases: 0
	}
);


// Override timezone formatting
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
	return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss');
};

const Admin =  require("./admin").init(sequelize, Sequelize);
const Categories =  require("./categories").init(sequelize, Sequelize);
const Edesk =  require("./edesk").init(sequelize, Sequelize);
const Hos =  require("./hos").init(sequelize, Sequelize);
const Hospital =  require("./hospital").init(sequelize, Sequelize);
const Lms =  require("./lms").init(sequelize, Sequelize);
const Lmsusers =  require("./lmsusers").init(sequelize, Sequelize);
const Patient =  require("./patient").init(sequelize, Sequelize);
const Permissions =  require("./permissions").init(sequelize, Sequelize);
const Requestkyc =  require("./requestkyc").init(sequelize, Sequelize);
const Roles =  require("./roles").init(sequelize, Sequelize);
const Userdata =  require("./userdata").init(sequelize, Sequelize);
const Users =  require("./users").init(sequelize, Sequelize);

const Op = Sequelize.Op;
module.exports = {
	sequelize,
	Op,
	Admin,
	Categories,
	Edesk,
	Hos,
	Hospital,
	Lms,
	Lmsusers,
	Patient,
	Permissions,
	Requestkyc,
	Roles,
	Userdata,
	Users
}
