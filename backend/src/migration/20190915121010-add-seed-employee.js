export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      `
      BEGIN;
      INSERT INTO employee (id, employee_number, phone_number, email, first_name, last_name, created_at, updated_at) VALUES(10, '10','0899999999', 'employee10@test.com', 'Duncan', 'Edward', NOW(), NOW());
      INSERT INTO employee (id, employee_number, phone_number, email, first_name, last_name, created_at, updated_at) VALUES(11, '11','0899999999', 'employee11@test.com', 'Janifer', 'Anis', NOW(), NOW());
      INSERT INTO employee (id, employee_number, phone_number, email, first_name, last_name, created_at, updated_at) VALUES(12, '12','0899999999', 'employee12@test.com', 'James', 'Bucker', NOW(), NOW());
      COMMIT;
      `
      ,
    );
  },
  down: (queryInterface, Sequelize) => {
    return {};
  },
};
