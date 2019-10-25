import Sequelize from "sequelize";

import database_config from "../config/database";

const models = [];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(database_config);
        models.map(model => model.init(this.connection));
    }
}

export default new Database();
