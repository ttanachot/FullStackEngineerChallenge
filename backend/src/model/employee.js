import { transformModel } from '../util';

export default (sequelize, DataTypes) => {
  const model = {
    employeeNumber: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    phoneNumber: { type: DataTypes.STRING },
    position: { type: DataTypes.STRING },
  };

  const employee = sequelize.define(
    'employee',
    transformModel(model),
    { paranoid: true }
  );

  employee.associate = (models) => {
    employee.belongsToMany(
      models.employee,
      {
        as: 'reviewees',
        through: models.employeeReview,
        foreignKey: 'reviewee_id',
        otherKey: 'reviewer_id',
      }
    );
    employee.belongsToMany(
      models.employee,
      {
        as: 'reviewers',
        through: models.employeeReview,
        foreignKey: 'reviewer_id',
        otherKey: 'reviewee_id',
      }
    );
  };

  return employee;
};
