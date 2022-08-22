
function dataGambar() {
    const arr = [{ nama: "slank2.jpg", tanda: 'slank' }, { nama: "qu.jpg", tanda: 'queen' }, { nama: "the_beatles2.jpg", tanda: 'beatles' }, { nama: "code.png", tanda: 'code' }, { nama: "json.png", tanda: 'json' }]
    return arr
}
function dataGambar2(name) {
    const data = dataGambar()
    const find = data.find((a) => a.tanda === name)
    return find
}

function dataVidio() {
    const arr = [{ nama: "aot.mp4", tanda: 'Attack_of_titan' }, { nama: "trailer_demon.mp4", tanda: 'Demon_Slayer' }]
    return arr
}
function dataVidio2(name) {
    const data = dataVidio()
    const find = data.find((a) => a.tanda === name)
    return find
}

function dataMusic() {
    const arr = [{ nama: "Crazy-Little-Thing-Called-Love.mp3", tanda: 'Crazy-Little-Thing-Called-Love' }, { nama: "hey_jude.mp3", tanda: 'hey_jude' }, { nama: "imagine.mp3", tanda: 'imagine' }, { nama: "Love-of-My-Life.mp3", tanda: 'Love-of-My-Life' }, { nama: "We-Are-The-Champions.mp3", tanda: 'We-Are-The-Champions' }, { nama: "yesterday.mp3", tanda: 'yesterday' }]
    return arr
}
function dataMusic2(name) {
    const data = dataMusic()
    const find = data.find((a) => a.tanda === name)
    return find
}
module.exports = { dataGambar, dataGambar2, dataVidio, dataVidio2, dataMusic, dataMusic2 }
