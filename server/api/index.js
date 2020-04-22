const {Router} = require('express');
const blogPostsFull = require('../data/blog_data');
const Flickr = require('flickr-sdk');

const apiRouter = new Router();
const flickr = new Flickr(process.env.FLICKR_API_KEY);

apiRouter.get('/photoList', (req,res) => {
    const page = req.query.pageNo || 1;
    flickr.photosets.getPhotos({
        photoset_id: '72157713980787711',
        user_id: '148788824@N07',
        extras: 'url_s,url_t,url_l,description,tags',
        page,
        per_page: 100,
    }).then((data)=>{
        res.send(data.body);
    });
});

apiRouter.get('/blogList', (_req, res) => {
    res.send(blogPostsFull.map(blogPostMapper));
});

apiRouter.get('/blogPost/:id', (req, res) => {
    const result = blogPostMapper(blogPostsFull.find(item => item.slug === req.params.id));
    res.send(result);
});

function blogPostMapper(blogPost) {
    return {
        id: blogPost.id,
        title: blogPost.title,
        date: new Date(blogPost.created_at).toDateString(),
        summary: blogPost.plaintext.substring(0, 200) + '...',
        slug: blogPost.slug,
        html: blogPost.html,
    };
}

module.exports = apiRouter;