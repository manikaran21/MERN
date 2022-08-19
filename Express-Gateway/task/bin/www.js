const app = require('../app.js') ;
const config = require('../config/config.js') ;

const _port = ( config.WWW_PORT || 3000 ) ;


app.listen(3000,() => {
    console.log(`user microservices running in  ${_port}`) ;
})