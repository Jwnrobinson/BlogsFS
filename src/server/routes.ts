import * as express from 'express';
import db from './db';
import blogs from './db/blogs';
import * as mysql from 'mysql'

import DB from './db';


const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('./api/blogs', async (req, res) => {
    try{
    let blogs = await DB.Blogs.all();
    res.json(blogs);
    } catch(e) {
    console.log(e);
    res.sendStatus(500);
    }
});

router.delete("/:blog.id", async (req, res, next) => {
    try {
        const blogid = req.params.blog;

        const dbRes = await db.Blogs.deleteOne(blogid);

        res.send(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const userid = req.body.userid;
        const content = req.body.content;

        const dbRes = await db.Blogs.insert(userid, content);

        res.send(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.put("/:blogid", async (req, res, next) => {
    try {
        const blogid = req.params.blogid;
        const content = req.body.content;

        const dbRes = await db.Blogs.edit(content, blogid);

        res.send(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});
export default router;