import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('node-complete', 'root', 'sqlpassword', {dialect : 'mysql', host : 'localhost'});