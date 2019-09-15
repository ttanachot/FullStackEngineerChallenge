const convertModelToObject = (model = {}) => JSON.parse(JSON.stringify(model));

export default convertModelToObject;
