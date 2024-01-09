# NodeJS Blog App

Welcome to the NodeJS Blog App! This simple blog application allows you to create and manage your blog posts using Node.js and MongoDB.

## Getting Started

Follow these simple steps to get the NodeJS Blog App up and running on your local machine.

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/youngyusuff6/node_blog.git
```

### 2. Configure MongoDB

Open the `app.js` file in the project directory and replace `your_mongodb_name` with your MongoDB database name:

```javascript
// app.js

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/your_mongodb_name', { useNewUrlParser: true, useUnifiedTopology: true });
```

### 3. Install Dependencies

Navigate to the project directory and install the required Node.js modules:

```bash
cd node_blog
npm install
```

### 4. Start the Application

Now, you can start the application using `nodemon` (if you have it installed) or another preferred method:

```bash
nodemon app
```

If you don't have `nodemon`, you can use the following command:

```bash
node app
```

### 5. Explore the Blog App

Once the application is running, visit [http://localhost:3000](http://localhost:3000) in your web browser to access the NodeJS Blog App. You can start creating and managing your blog posts.

Enjoy using the NodeJS Blog App! If you encounter any issues or have suggestions, feel free to contribute or open an issue on the GitHub repository.
