const { DataTypes } = require('sequelize');
const { dbCon: db } = require('@config/dbcon');

module.exports = db.define('transaction_item', {
  item_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  transaction_id: { type: DataTypes.INTEGER },
  product_id: { type: DataTypes.INTEGER },
  quantity: { type: DataTypes.INTEGER },
  sum: { type: DataTypes.DECIMAL(10, 0) },
}, {
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});