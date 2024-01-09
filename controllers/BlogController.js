const Blog = require('../models/blog')

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch(err => {
        res.status(404).render('404', { title: '404' });
    });
}


const blog_detail = (req, res) => {
    const id = req.params.id
    Blog.findById(id)
      .then(result => {
          res.render('details', {blog: result, title: "Blog Details"})
      })
      .catch((error) => {
        res.status(404).render('404', { title: '404' });
      })
}

const create_blog = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((error) => {
            res.status(404).render('404', { title: '404' });
        })
}

const show_create_form = (req, res) => {
    res.render('create', { title: 'Create a new blog' });
}

const delete_blog_post = (req,res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
      .then(result => {
          res.json({redirect: '/blogs'})
      })
      .catch((error) => {
        console.log(error)
      })
  }

module.exports = {
    blog_index, blog_detail, create_blog, show_create_form, delete_blog_post
}