const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const btnMudarImagem = document.getElementById('change-cat')

const changeCat = async () => {
    try {
    const data = await fetch(BASE_URL)
    const json = await data.json()
    return json.webpurl
    } catch(e) {
        console.log(e.message)
    }
}

const loadImg = async () => {
    const catImg = document.getElementById('cat')
    catImg.src = await changeCat()
}

btnMudarImagem.addEventListener('click', loadImg)
loadImg()