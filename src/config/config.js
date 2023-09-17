import dotenv from 'dotenv'

dotenv.config()
export default {
    persistence: process.env.PERSISTENCE,
    port: process.env.PORT || 8080,
    dbUrl: 'mongodb+srv://gerlian:1234@clusterger.mgws5uk.mongodb.net/',
    dbName: 'eccommerce'
}