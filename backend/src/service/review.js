import model from '../model';
import { pick } from 'lodash';

const create = async (body, modelOptions = {}) => {
  const reviewPayload = pick(body, ['reviewerId', 'revieweeId']);
  const review = await model.review.create(reviewPayload, modelOptions);
  const reviewId = review.id;

  const { questions } = pick(body, ['questions']);
  for (const question of questions) {
    const createPayload = { reviewId, ...question };
    await model.questionReview.create(createPayload, modelOptions);
  }
  return review.reload({ include: [ { model: model.questionReview, as: 'questionReviews' }], ...modelOptions });
};

const findById = async (data) => {
  const { id, reviewerId } = data;
  const response = await model.review.findOne(
    {
      where: { id, reviewerId },
      include: [
        {
          model: model.questionReview,
          as: 'questionReviews',
          include: [ { model: model.question } ],
        },
      ],
    }
  );
  return response;
};

export default {
  create,
  findById
};
