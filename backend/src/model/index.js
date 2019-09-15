import Sequelize from 'sequelize';
import config from '../config';

import Topic from './topic';
import Employee from './employee';
import Question from './question';
import EmployeeReview from './employee-review';
import QuestionReview from './question-review';
import Review from './review';

Sequelize.postgres.DECIMAL.parse = (value) => parseFloat(value);

const sequelize = new Sequelize(
  config.dbScheme,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: 'postgres',
    operatorAliases: false,
    logging: !config.disableSqlLog, // Note. false is not to print on console.
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      timestamps: true,
      freezeTableName: true,
    },
  }
);

const db = {
  topic: sequelize.import('topic', Topic),
  employee: sequelize.import('employee', Employee),
  employeeReview: sequelize.import('employeeReview', EmployeeReview),
  question: sequelize.import('question', Question),
  review: sequelize.import('review', Review),
  questionReview: sequelize.import('questionReview', QuestionReview),
};

Object.keys(db).forEach(model => {
  if (db[model].associate) {
    db[model].associate(db);
  }
});

db.sequelize = sequelize; // Configured model
db.Sequelize = Sequelize; // Sequelize library

export default db;
