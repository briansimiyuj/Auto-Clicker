const submitBTN = document.querySelector(".submitBTN")

const song = document.querySelector(".song")

const urlName = document.querySelector(".urlName")

const url = document.querySelector(".url")

const songName = document.querySelector(".songName")

console.log(submitBTN, songName, urlName, url, song)


submitBTN.addEventListener('click', (e) =>{

     e.preventDefault()

     if (songName.value == '' || urlName.value == '') {

          alert('Please enter the song name')

          
     }

})
