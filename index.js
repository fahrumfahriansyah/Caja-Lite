const express = require('express')
const app = express()
const { dataGambar, dataGambar2, dataVidio, dataVidio2, dataMusic, dataMusic2 } = require('./data/data')
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
    res.render('index', { judul: `gambar-${data.tanda}`, dataGambar: dataGambar(), rl: req.url, dataGambar2: data })

})
app.get('/vidio', (req, res) => {
    res.render('vidio', { judul: `vidio`, dataVidio: dataVidio() })
})

app.get('/vidio/:name?', (req, res) => {
    const data = dataVidio2(req.params.name)
    console.log(data);
    res.render('vidio', { judul: `vidio-${data.tanda}`, dataVidio: dataVidio(), rl: req.url, dataVidio2: data })

})
app.get('/music', (req, res) => {
    res.render('music', { judul: 'music', dataMusic: dataMusic() })
})
app.get('/music/:namanya?', (req, res) => {
    const data = dataMusic2(req.params.namanya)
    console.log(data);
    res.render('music', { judul: `music-${data.tanda}`, dataMusic: dataMusic(), rl: req.url, dataMusic2: data })

})





app.use('/', (req, res) => {
    res.send('url salah')
})

    .listen(3000, () => {
        console.log('open in browser');
    })
