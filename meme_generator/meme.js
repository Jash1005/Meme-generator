const generatebtn = document.querySelector('.generator-button');
const authorname = document.querySelector('.author');
const heading = document.querySelector('.heading');
const image = document.querySelector('section img');
const memeby = document.querySelector('.meme-by');
let newdata;

generatebtn.addEventListener('click',loading);

function loading(){
      memeby.style.display = 'flex';
      heading.innerHTML = 'Loading...';
      getdata();
}

function getdata() {
    
    fetch('https://meme-api.com/gimme/wholesomememes')
.then((res)=> res.json())
.then((data) => {
               const {title,author,url} = data;
               authorname.innerHTML = author;
               heading.innerHTML = title;
               image.src = url;
               console.log(data);
})
}

