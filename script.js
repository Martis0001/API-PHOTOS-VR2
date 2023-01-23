console.log("test js failas");

const main_input = document.querySelector('input');
console.log(main_input)
// const photo = document.getElementById('photo');
const main_btn = document.querySelector('button');

const imgContainer = document.querySelector('.img-container');
console.log(imgContainer)



const apiKey = 'K2U3ETvr2reQJwoPCXM_KCxaC-kuVG6wBSGsbDADI8w'


async function getData(e) {
    e.preventDefault();

    if (document.querySelector('.deletible') !== undefined) {
        // console.log(newDiv.classList.contains('deletible'))
        document.querySelectorAll('.deletible').forEach(item => item.remove());

        // bandom.map(item => item.classList.remove('deletible'))

    }


    
    const word = main_input.value;
    const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${word}&client_id=${apiKey}&per_page=24`);
    const data = await res.json();

    const newDiv = document.createElement('div');

    console.log(data)



    // if (data.status === 404) {

    //     const userMsg = document.createElement('p');
    //     userMsg.classList.add('userMsg');
    //     userMsg.innerText = 'NOT FOUND'
    //     imgContainer.appendChild(userMsg);

    //     console.log('geras')
    // } else {
    //     // if (document.querySelector('.userMsg') !== undefined) {
    //     //     // console.log(newDiv.classList.contains('deletible'))
    //     //     document.querySelectorAll('.userMsg').forEach(item => item.remove());
    
    //     //     // bandom.map(item => item.classList.remove('deletible'))
    
    //     // }
        data.results.forEach(item => {

            newDiv.classList.add('deletible');
            imgContainer.appendChild(newDiv)

            const img = `<img src='${item.urls.small}'></img>`

            newDiv.innerHTML += img;

        })
    }

   











main_btn.addEventListener('click', getData)