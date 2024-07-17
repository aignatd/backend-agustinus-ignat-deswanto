const { DataTypes } = require('sequelize');
const { dbCon: db } = require('../config/dbcon');

module.exports = db.define('product', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  product_price: { type: DataTypes.DECIMAL(10, 0) },
  product_name: { type: DataTypes.STRING(100) },
  product_category: { type: DataTypes.STRING(50) },
  product_description: { type: DataTypes.TEXT() },
}, {
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});