
export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('question', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.BIGINT },
      title: { allowNull: false, type: Sequelize.TEXT },
      topic_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'topic',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      created_at: { type: Sequelize.DATE },
      updated_at: { type: Sequelize.DATE },
      deleted_at: { type: Sequelize.DATE },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('question');
  },
};
