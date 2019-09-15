import model from '../model';
import { Base64 } from 'js-base64';
import { UnauthorizedError } from '../error';

const findIdentity = async (identity) => {
  const { email } = identity;
  const employee = await model.employee.findOne({ where: { email } });
  return { employee };
};

const login = async (body) => {
  const { username, password } = body;
  const employee = await model.employee.findOne({ where: { email: username } });
  if (employee) {
    const token = `${employee.email}:${new Date().toISOString()}`;
    return { accessToken: Base64.encodeURI(token) };
  }
  throw new UnauthorizedError();
};

export default {
  findIdentity,
  login,
};
