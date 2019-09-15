import { UnauthorizedError } from '../error';
import { Base64 } from 'js-base64';
import service from '../service';

const auth = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if(!authorization) {
    return next(new UnauthorizedError());
  }
  try {
    // TODO: Use `Oauth` to handle token and identity
    const accessToken = authorization.replace('Bearer ', '');
    // btoa(`email@email.com:2019-09-14T16:04:59.314Z`)
    const email = Base64.decode(accessToken).split(':')[0];
    const identity = await service.user.findIdentity({ email });
    if (identity && identity.employee) {
      req.identity = identity;
      return next();
    }
  } catch (err) {
    next(new UnauthorizedError());
  }
};

export default auth;
