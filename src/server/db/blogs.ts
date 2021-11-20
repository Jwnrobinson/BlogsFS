import { Connection } from './index';


import { Query } from '../config';

export const all = async () => {
return new Promise((resolve, reject) =>{
    Connection.query('SELECT * from blogs', (err, results) =>{
        if(err) {
            return reject(err);
        }
        resolve(results);
    });
});
}
const one = (blogid: string) => Query("SELECT blogs.id, blogs.content, blogs._created, users.name FROM blogs JOIN users on blogs.userid = users.id WHERE blogs.id = ?", [blogid]);

const deleteOne = (blogid: string) => Query("DELETE FROM blogs WHERE id = ?", [blogid]);

const insert = (userid: string, content: string) => Query("INSERT INTO blogs (userid, content) VALUES (?, ?)", [userid, content]);

const edit = (content: string, blogid: string) => Query("UPDATE blogs SET content = ? WHERE blogs.id = ?", [content, blogid])


export default {
    all,
    one,
    deleteOne,
    insert,
    edit
    
}