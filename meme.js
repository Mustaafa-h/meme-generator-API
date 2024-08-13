const generatememebtn = document.querySelector('.memegen .genmemebtn');
const memeimg = document.querySelector('.memegen img')
const memetitle = document.querySelector('.memegen .memetitle')
const memeAuthor = document.querySelector('.memegen .memeau');

console.log(generatememebtn,memeimg,memeAuthor,memetitle)

const updateDetails = (url, title, author) => {
    memeimg.setAttribute('src', url)
    memetitle.innerHTML = title;
    memeAuthor.innerHTML =  `Meme by: ${author}`;
}

const generateMeme = () => {
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((response) => response.json())
    .then(data => {
        updateDetails(data.url, data.title, data.author)
    })
}

generatememebtn.addEventListener('click', generateMeme)