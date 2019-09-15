export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      `
      BEGIN;
        INSERT INTO employee_review (reviewer_id, reviewee_id, created_at, updated_at) VALUES (10, 11, NOW(), NOW());
        INSERT INTO employee_review (reviewer_id, reviewee_id, created_at, updated_at) VALUES (10, 12, NOW(), NOW());
        INSERT INTO employee_review (reviewer_id, reviewee_id, created_at, updated_at) VALUES (11, 10, NOW(), NOW());
        INSERT INTO employee_review (reviewer_id, reviewee_id, created_at, updated_at) VALUES (11, 12, NOW(), NOW());
        INSERT INTO employee_review (reviewer_id, reviewee_id, created_at, updated_at) VALUES (12, 10, NOW(), NOW());
        INSERT INTO employee_review (reviewer_id, reviewee_id, created_at, updated_at) VALUES (12, 11, NOW(), NOW());
      COMMIT;
      `
      ,
    );
  },
  down: (queryInterface, Sequelize) => {
    return {};
  },
};
