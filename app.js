const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogroutes')

//express app
const app = express();
// Connection URL and database name
// const url = 'mongodb://localhost:27017/school';

mongoose.connect('mongodb://127.0.0.1:27017/blogs', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => app.listen(3000))
.catch(err => console.error('Error connecting to MongoDB:', err));



//use ejs
app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.use(morgan('dev'))


const nouns = ["journey", "adventure", "secret", "lesson", "discovery", "transformation", "challenge", "awakening", "whisper", "echo"];
const adjectives = ["unexpected", "hidden", "forgotten", "unveiled", "uncharted", "forbidden", "transformative", "whispered", "forgotten", "echoing"];
const verbs = ["uncover", "reveal", "confront", "embrace", "navigate", "unlock", "transform", "awaken", "remember", "listen"];
function generateBlogTitle() {
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  return `${adjective} ${noun}: ${verb}ing the ${noun}`;
}

function generateBlogSnippet() {
    const sentenceStructures = [
      "Have you ever ",
      "What if ",
      "Imagine ",
      "In a world where ",
      "The day I "
    ];
    const intro = sentenceStructures[Math.floor(Math.random() * sentenceStructures.length)];
  
    const nouns = [
      "journey",
      "adventure",
      "secret",
      "lesson",
      "discovery",
      "transformation",
      "challenge",
      "awakening",
      "whisper",
      "echo"
    ];
    const subject = nouns[Math.floor(Math.random() * nouns.length)];
  
    const verbs = [
      "uncover",
      "reveal",
      "confront",
      "embrace",
      "navigate",
      "unlock",
      "transform",
      "awaken",
      "remember",
      "listen"
    ];
    const action = verbs[Math.floor(Math.random() * verbs.length)];
  
    const adjectives = [
      "unexpected",
      "hidden",
      "forgotten",
      "unveiled",
      "uncharted",
      "forbidden",
      "transformative",
      "whispered",
      "forgotten",
      "echoing"
    ];
    const consequence = adjectives[Math.floor(Math.random() * adjectives.length)];
  
    const includeImage = Math.random() < 0.5;
    let snippet = `${intro} ${subject} ${action}ed, and the world became ${consequence}.`; 
    return snippet;
  }
  
  function generateBlogBody() {
    const paragraphs = [];
    for (let i = 0; i < 5; i++) {
      const sentenceLength = Math.floor(Math.random() * 5) + 5; // Generate sentences of varying lengths
      const paragraph = [];
      for (let j = 0; j < sentenceLength; j++) {
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        const verb = verbs[Math.floor(Math.random() * verbs.length)];
        const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        paragraph.push(`The ${adjective} ${noun} ${verb}ed through the ${adjective} landscape.`); // Example sentence structure
      }
      paragraphs.push(paragraph.join(" "));
    }
  
    return paragraphs.join("<br><br>");
  }
  
  
//Create Random Blog Post For Testing
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: generateBlogTitle(),
        snippet: generateBlogSnippet(),
        body: generateBlogBody(),
    })
    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            console.log(err)
        })
})
app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Blog.findById('5ea99b49b8531f40c0fde689')
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});


app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.use(blogRoutes)

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});