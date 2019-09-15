import { transformModel } from '../util';

export default (sequelize, DataTypes) => {
  const model = {
    reviewerId: { type: DataTypes.BIGINT },
    revieweeId: { type: DataTypes.BIGINT },
    topicId: { type: DataTypes.BIGINT },
  };

  const review = sequelize.define(
    'review',
    transformModel(model),
    { paranoid: true }
  );

  review.associate = (models) => {
    review.belongsTo(models.topic);
    review.belongsTo(
      models.employee,
      {
        as: 'reviewer',
        foreignKey: 'reviewerId',
      }
    );
    review.belongsTo(
      models.employee,
      {
        as: 'reviewee',
        foreignKey: 'revieweeId',
      }
    );
    review.hasMany(
      models.questionReview,
      { as: 'questionReviews' },
    );
  };

  return review;
};
