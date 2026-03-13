const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

// mock db
const books = [
    { id: 1, title: 'Book One', author: 'Author One' },
    { id: 2, title: 'Book Two', author: 'Author Two' },
];

//Read
app.get('/books', (req, res) => {
    res.json(books);
});

//Read specific book
app.get('/books/:id', (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: 'id must be of type number' });
    }

    const book = books.find((e) => e.id === id);
    if (!book) {
        return res.status(404).json({ error: `Book with id ${id} does not exist!` });
    }
    return res.json(book);
});

//Create
app.post('/books', (req, res) => {
    const { title, author } = req.body;

    const maxId = books.length > 0 ? Math.max(...books.map(b => b.id)) : 0;
    const id = maxId + 1;

    if (!title || title.trim() === '') {
        return res.status(400).json({ error: 'title is required' });
    }

    if (!author || author.trim() === '') {
        return res.status(400).json({ error: 'author is required' });
    }

    const book = { id, title, author };
    books.push(book);

    return res.status(201).json({ message: 'Book created successfully', id });
});

//Delete
app.delete('/books/:id', (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: 'id must be of type number' });
    }

    const elementIndex = books.findIndex((e) => e.id === id);
    if (elementIndex < 0) {
        return res.status(404).json({ error: `Book with id ${id} does not exist!` });
    }

    books.splice(elementIndex, 1);
    return res.status(200).json({ message: `Book of id: ${id} is deleted` });
});

//Update
app.put('/books/:id', (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: 'id must be of type number' });
    }

    const elementIndex = books.findIndex((e) => e.id === id);
    if (elementIndex < 0) {
        return res.status(404).json({ error: `Book with id ${id} does not exist!` });
    }

    books[elementIndex].title = req.body.title;
    books[elementIndex].author = req.body.author;

    res.status(200).json({ message: 'books detail updated successfully' });
});

app.listen(port, () => console.log(`Server started at port ${port}`));