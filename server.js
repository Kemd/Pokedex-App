// dependencies
const { clear } = require('console')
const express = require('express')
const res = require('express/lib/response')
const methodOverride = require('method-override')
const pokemons = require('./models/pokemon')
// console.log(pokemon)

const app = express()

const port = 3000

// MIDDLEMAN
app.use(express.urlencoded({ extended: false}))
app.use('/public', express.static('public'))

// override form POST GET default
app.use(methodOverride('_method'))


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
app.delete('/:id', (req, res) => {
    pokemons.splice(req.params.id, 1)
    res.redirect('/')
})

// UPDATE w/ put
app.put('/:id', (req, res) => {
    pokemons[req.params.id] = req.body
    res.redirect('/')
})

// CREATE with POST
app.post('/', (req, res) => {
    pokemons.push(req.body)
    // console.log(pokemons)
    res.redirect('/')
})

// EDIT
app.get('/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        pokemon: pokemons[req.params.id],
        pokeedit: req.params.id
    })
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