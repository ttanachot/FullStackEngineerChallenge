import { compose, mapValues, snakeCase } from 'lodash/fp';
import Sequelize from 'sequelize';

const { DataTypes } = Sequelize;
const mapValuesWithKey = mapValues.convert({ cap: false });

const tranformKeyToField = (value, key) => {
  return { ...value, field: value.field || snakeCase(key) };
};

const appendDefaultAttributes = (model) => {
  return {
    ...model,
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
    deletedAt: { type: DataTypes.DATE },
  };
};

export default compose(
  mapValuesWithKey(tranformKeyToField),
  appendDefaultAttributes,
);
