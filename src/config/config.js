import dotenv from 'dotenv'

dotenv.config()
export default {
    PERSISTENCE: process.env.PERSISTENCE,
    PORT: process.env.PORT || 8080,
    DBURL: process.env.DBURL,
    DBNAME: 'eccommerce',
    SECRET : process.env.SECRET, 
    GOOGLE_CLIENT_ID : process.env.GOOGLE_CLIENT_ID, 
    GOOGLE_CLIENT_SECRET : process.env.GOOGLE_CLIENT_SECRET, 
    CLIENTID: process.env.CLIENTID,
    CLIENTSECRET: process.env.CLIENTSECRET,
    CALLBACKURL: process.env.CALLBACKURL
}