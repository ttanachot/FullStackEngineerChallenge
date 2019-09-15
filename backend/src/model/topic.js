import { transformModel } from '../util';

export default (sequelize, DataTypes) => {
  const model = {
    title: { type: DataTypes.TEXT },
    startAt: { type: DataTypes.DATE },
    endAt: { type: DataTypes.DATE },
  };

  const topic = sequelize.define(
    'topic',
    transformModel(model),
    { paranoid: true }
  );

  topic.associate = (models) => {
    topic.hasMany(models.question);
    topic.hasMany(models.review);
  };

  return topic;
};
