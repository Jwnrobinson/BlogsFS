import * as mysql from 'mysql';
import blogs from '../db/blogs';

const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'blogapp',
    database: 'blogs',
    password: 'password'
});
export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};
export default {
    blogs

    
    };
