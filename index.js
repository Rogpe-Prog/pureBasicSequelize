const Sequelize = require('sequelize')

const sequelize = new Sequelize('sequelize-db', 'root', '', {
    dialect: 'mysql',
    host: '127.0.0.1'
})

const user = sequelize.define('user', {
    user: Sequelize.STRING,
    password: Sequelize.STRING
})

const initDB = async() => {
    await sequelize.sync()
    Usuario.create({
        user: 'Aloko',
        password: '12345'
    })
}

initDB()

sequelize.authenticate().then(() => console.log('connecting...'))