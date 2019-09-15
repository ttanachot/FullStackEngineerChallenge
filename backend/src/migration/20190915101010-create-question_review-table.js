
export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('question_review', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.BIGINT },
      review_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'review',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      question_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'question',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      answer: {
        type: Sequelize.TEXT,
      },
      created_at: { type: Sequelize.DATE },
      updated_at: { type: Sequelize.DATE },
      deleted_at: { type: Sequelize.DATE },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('question_review');
  },
};
