export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      `
      BEGIN;
        INSERT INTO question (topic_id, title, created_at, updated_at) VALUES (10, 'What is your biggest motivation for the work you do?', NOW(), NOW());
        INSERT INTO question (topic_id, title, created_at, updated_at) VALUES (10, 'What do you hope to accomplish in the next (year)(quarter)?', NOW(), NOW());
      COMMIT;
      `
      ,
    );
  },
  down: (queryInterface, Sequelize) => {
    return {};
  },
};
