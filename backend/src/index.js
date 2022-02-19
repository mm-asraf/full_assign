const express = require('express')
const app = express()



// controllers
const { getAllBooks, addBook, getById, updateBook, deleteBook } = require('./controllers/book.controller')




app.use(express.json())




app.post('/books', addBook)
app.get('/books', getAllBooks)
app.get('/books/:id', getById)
app.put('/books/:id', updateBook)
app.delete('/books/:id', deleteBook)

const connect = require('./configs/db')
app.listen(4477, async () => {
    await connect()
    console.log('port is listening at 4477')
})