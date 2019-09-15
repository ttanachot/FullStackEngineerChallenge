
export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employee', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.BIGINT },
      email: { allowNull: false, type: Sequelize.STRING },
      employee_number: { allowNull: false, type: Sequelize.STRING },
      first_name: { allowNull: false, type: Sequelize.STRING },
      last_name: { allowNull: false, type: Sequelize.STRING },
      phone_number: { allowNull: false, type: Sequelize.STRING },
      position: { type: Sequelize.STRING },
      created_at: { type: Sequelize.DATE },
      updated_at: { type: Sequelize.DATE },
      deleted_at: { type: Sequelize.DATE },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('employee');
  },
};
