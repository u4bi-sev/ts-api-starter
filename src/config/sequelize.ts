import path from 'path'
import { Sequelize } from 'sequelize-typescript'

import { SequelizeOptions } from '../interfaces/sequelize.interface'

import Debug from 'debug'

const debug = Debug('ts-api-starter:sequelize')

export const init = (): Sequelize => {

    const sequelize: Sequelize = new Sequelize(process.env.DB_CONNECTION || 'postgres://postgres:postgres@localhost:5432/postgres')

    sequelize.addModels([path.resolve(__dirname,'../models')]);

    return sequelize
}

export const run = async (sequelize: Sequelize, options: SequelizeOptions) => {

    await sequelize.sync({ force: options.force || false })

    debug('Databse Sync Done')

}

