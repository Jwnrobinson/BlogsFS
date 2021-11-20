import config from '../config';
import * as mysql from 'mysql';
import Blogs from './blogs' ;

export const Connection = mysql.createConnection(config.mysql)

Connection.connect(err => {
    if(err)console.log(err);
 
});
export default {
    Blogs,
    
}