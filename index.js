const express = require('express')
const app = express()
const { dataGambar, dataGambar2 } = require('./data/data')
//!set up
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.render('index', { judul: 'album' })
})
app.get('/gambar', (req, res) => {
    res.render('index', { judul: 'gambar', dataGambar: dataGambar(), dataGambar2: dataGambar2() })
})
app.get('/gambar/:nama?', (req, res) => {
    const data = dataGambar2(req.params.nama)
    console.log(data);
    res.render('index', { judul: `gambar-${data.tanda}`, dataGambar: dataGambar(), dataGambar2: dataGambar2(), rl: req.url, dataGambar2: data })

})
app.get('/vidio', (req, res) => {
    res.render('index', { judul: 'vidio' })
})
app.get('/music', (req, res) => {
    res.render('index', { judul: 'music' })
})





app.use('/', (req, res) => {
    res.send('url salah')
})

    .listen(3000, () => {
        console.log('open in browser');
    })
