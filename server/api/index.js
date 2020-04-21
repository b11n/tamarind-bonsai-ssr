const {Router} = require('express');
const axios = require('axios');
const blogPostsFull = require('../data/blog_data');

const apiRouter = new Router();

apiRouter.get('/photoList', (req,res) => {

    const apiKey = process.env.FLICKR_API_KEY;
    const endpoint = `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&user_id=148788824@N07&format=json&nojsoncallback=1&api_key=${apiKey}&gallery_id=72157678182521264&extras=url_s,url_t,url_l,description`;
    axios.request({
        url: endpoint,
    }).then(async (response) => {
        const photos = response.data.photos;
        const resp = photos.photo.map((item) => {
            return {
                id: item.id,
                title: item.title,
                url_s: item.url_s,
                url_l: item.url_l,
                height_s: item.height_s,
                width_s: item.width_s,
                height_l: item.height_l,
                width_l: item.width_l,
            };
        });
        res.send(resp);
    }).catch((e) => {
        res.send(e)
    })
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