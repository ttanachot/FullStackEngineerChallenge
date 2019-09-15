import { transformModel } from '../util';

export default (sequelize, DataTypes) => {
  const model = {
    reviewerId: {
      type: DataTypes.BIGINT,
      references: {
        model: 'employee',
        key: 'id',
      },
    },
    revieweeId: {
      type: DataTypes.BIGINT,
      references: {
        model: 'employee',
        key: 'id',
      },
    },
  };

  const employeeReview = sequelize.define(
    'employee_review',
    transformModel(model),
    { paranoid: true }
  );

  return employeeReview;
};
