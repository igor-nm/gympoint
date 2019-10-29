module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("students", {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            email: {
                unique: true,
                allowNull: false,
                type: Sequelize.STRING,
            },
            age: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            height: {
                allowNull: false,
                type: Sequelize.DECIMAL,
            },
            weight: {
                allowNull: false,
                type: Sequelize.DECIMAL,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    down: queryInterface => queryInterface.dropTable("students"),
};
