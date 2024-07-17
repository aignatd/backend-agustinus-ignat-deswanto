const { DataTypes } = require('sequelize');
const { dbCon: db } = require('../config/dbcon');

module.exports = db.define('transaction_customer', {
  transaction_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  customer_id: { type: DataTypes.INTEGER },
  total: { type: DataTypes.DECIMAL(10, 0) },
  delivery_price: { type: DataTypes.DECIMAL(10, 0) },
  delivery_address: { type: DataTypes.TEXT() },
}, {
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});