import model from '../model';

const findById = async (id) => {
  const response = await model.topic.findOne(
    {
      where: { id },
      include: [
        { model: model.question, as: 'questions' },
        { model: model.review, as: 'reviews' },
      ],
    }
  );
  return response;
};

export default {
  findById,
};
