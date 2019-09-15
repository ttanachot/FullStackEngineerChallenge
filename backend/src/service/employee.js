import model from '../model';
import { convertModelToObject } from '../util';


const getProfile = async (email) => {
  const employeeModel = await model.employee.findOne(
    {
      where: { email },
      include: [
        {
          model: model.employee,
          as: 'reviewers',
        },
      ],
    }
  );
  const topicsModel = await model.topic.findAll();

  return {
    ...convertModelToObject(employeeModel),
    topics: convertModelToObject(topicsModel),
  };
};

export default {
  getProfile,
};
