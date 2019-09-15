import { transformModel } from '../util';

export default (sequelize, DataTypes) => {
  const model = {
    reviewId: { type: DataTypes.BIGINT },
    questionId: { type: DataTypes.BIGINT },
    answer: { type: DataTypes.TEXT },
  };

  const questionReview = sequelize.define(
    'question_review',
    transformModel(model),
    { paranoid: true }
  );

  questionReview.associate = (models) => {
    questionReview.belongsTo(models.review);
    questionReview.belongsTo(models.question);
  };

  return questionReview;
};
