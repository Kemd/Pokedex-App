// dependencies
const { clear } = require('console')
const express = require('express')
const pokemons = require('./models/pokemon')
// console.log(pokemon)

const app = express()

const port = 3000

// MIDDLEMAN
app.use(express.urlencoded({ extended: false}))

// ROUTES Start

// INDEX as HOMEPAGE
app.get('/', (req, res) => {
    res.render('index.ejs', { pokemons })
})

// NEW - add form to new.ejs to add new pokemon POST
app.get('/new', (req, res) => {
    res.render('new.ejs')
})

// DELETE

// UPDATE

// CREATE with POST
app.post('/', (req, res) => {
    pokemons.push(req.body)
    console.log(req.body)
    res.redirect('/')
})

// EDIT
app.get('/:id/edit', (req, res) => {
    res.send('you good?')
})

// SHOW
app.get('/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon: pokemons[req.params.id]
    })
})

// ROUTES END

app.listen(port, () => {
    console.log('port', port, 'active')
})