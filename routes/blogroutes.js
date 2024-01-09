const express = require('express')
const router = express.Router();
const BlogController =  require('../controllers/BlogController')


// blog routes
  router.get('/blogs/create', BlogController.show_create_form);
  
  router.get('/blogs', BlogController.blog_index);
  
  router.post('/blogs', BlogController.create_blog)
  
  router.get('/blogs/:id', BlogController.blog_detail)
  
  router.delete('/blogs/:id', BlogController.delete_blog_post )
  

module.exports = router;