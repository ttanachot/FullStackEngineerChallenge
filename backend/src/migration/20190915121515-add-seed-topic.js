export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      `
      BEGIN;
        INSERT INTO topic (id, title, start_at, end_at, created_at, updated_at) VALUES (10, '2019 END-YEAR employee review', NOW(), NOW(), NOW(), NOW());
      COMMIT;
      `
      ,
    );
  },
  down: (queryInterface, Sequelize) => {
    return {};
  },
};
