const { DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = (sequelize) => {
    const SoldProduct = sequelize.define('SoldProduct', {
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: true
        }
      },
      country : {
        type: DataTypes.STRING,
        allowNull: true
      },
      company: {
        type: DataTypes.STRING,
        allowNull: true
      },
      phonenumber: {
        type: DataTypes.STRING,
        allowNull: true
      },
      paymentMethod: {
        type: DataTypes.ENUM,
        values: ['Credit Card', 'PayPal', 'Mercadopago', 'Bank Transfer', 'Crypto'],
        allowNull: true
      },
      webpage: {
        type: DataTypes.ENUM,
        values: ['One Page', 'Landing Page', 'E Commerce'],
        allowNull: true
      },
      webpagePrice: {
        type: DataTypes.FLOAT,
        allowNull: true
       },
      domainPlan: {
        type: DataTypes.ENUM,
        values: ['com', 'net', 'online', 'io', 'icu', 'xyz', 'pro', 'cloud'],
        allowNull: true
      },
      domainPrice: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      emailPlan: {
        type: DataTypes.ENUM,
        values: ['Entrepreneur', 'Corporate'],
        allowNull: true
      },
      emailPrice: {
        type: DataTypes.FLOAT,
        allowNull: true
      }
    }, {
      timestamps: true,
      paranoid: true
    });
  
    return SoldProduct;
  };