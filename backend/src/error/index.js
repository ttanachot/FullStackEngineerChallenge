
export const UnauthorizedError = () => {
  const err = new Error('Unauthozied error!');
  err.status = 401;
  return err;
}