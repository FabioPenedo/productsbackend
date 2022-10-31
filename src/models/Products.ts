import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/mysql';

export interface UserInstance extends Model {
  id: number;
  name: string;
  price: number;
  inventory: number;
  description: string;
}

export const ProductData = sequelize.define<UserInstance>('ProductData', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT
  },
  inventory: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'productdata',
  timestamps: false
});