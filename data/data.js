
function dataGambar() {
    const arr = [{ nama: "slank2.jpg", tanda: 'slank' }, { nama: "qu.jpg", tanda: 'queen' }, { nama: "the_beatles2.jpg", tanda: 'beatles' }, { nama: "code.png", tanda: 'code' }, { nama: "json.png", tanda: 'json' }]
    return arr
}
function dataGambar2(name) {
    const data = dataGambar()
    const find = data.find((a) => a.tanda === name)
    return find
}
module.exports = { dataGambar, dataGambar2 }