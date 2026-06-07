import express from "express";
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let posts = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

app.get('/posts/edit/:index', (req, res) => {
  const id = req.params.index;
  const postToEdit = posts[id];

  res.render("edit.ejs", { post: postToEdit, index: id });
});

//stats for more page
app.get("/more", (req, res) => {
  const totalBlogs = posts.length;
  let totalWords = 0;
  posts.forEach(post => {
    const words = post.content.trim().split(/\s+/);
    totalWords += post.content.trim() === "" ? 0 : words.length;
  });

  res.render("more.ejs", {
    totalBlogs: totalBlogs,
    totalWords: totalWords
  });
});

app.post('/posts/update/:index', (req, res) => {
  const id = req.params.index;

  // Overwrite the old object at that specific array index with the new form data
  posts[id] = {
    title: req.body.title,
    content: req.body.content
  };

  console.log(`--- Post Updated at index ${id} ---`);
  
  // Send them back to the homepage to see the updated changes!
  res.redirect('/');
});

app.post('/posts', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  console.log("--- New Blog Post Submitted ---");
  console.log("Title Entered:", title);
  console.log("Content Entered:", content);

  posts.push({ title: title, content: content });

  res.redirect('/');

});

app.post('/posts/delete/:index', (req, res) => {
  const indexToDelete = req.params.index;

  posts.splice(indexToDelete, 1);

  res.redirect('/?message=Post is deleted');

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});