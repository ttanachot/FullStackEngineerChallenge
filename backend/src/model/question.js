import { transformModel } from '../util';

export default (sequelize, DataTypes) => {
  const model = {
    title: { type: DataTypes.TEXT, allowNull: false },
    topicId: { type: DataTypes.BIGINT },
  };

  const question = sequelize.define(
    'question',
    transformModel(model),
    { paranoid: true }
  );

  question.associate = (models) => {
    question.belongsTo(models.topic);
  };

  return question;
};
