
export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('topic', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.BIGINT },
      title: { type: Sequelize.TEXT },
      start_at: { type: Sequelize.DATE },
      end_at: { type: Sequelize.DATE },
      created_at: { type: Sequelize.DATE },
      updated_at: { type: Sequelize.DATE },
      deleted_at: { type: Sequelize.DATE },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('topic');
  },
};
