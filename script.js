const submitBTN = document.querySelector(".submitBTN")

const song = document.querySelector(".song")

const urlName = document.querySelector(".urlName")

const url = document.querySelector(".url")

const container = document.querySelector(".container")

const songName = document.querySelector(".songName")

console.log(submitBTN, songName, urlName, url, song, container)


submitBTN.addEventListener('click', (e) =>{

     e.preventDefault()

     if (songName.value == '' || urlName.value == '') {

          alert('Please enter the song name')

          
     }else{

          const ul = document.createElement("ul")

          const li = document.createElement("li")   

          const label = document.createElement("label")

          const a = document.createElement("a")   

          const button = document.createElement("button")

          label.textContent = songName.value

          button.textContent = "Link"

          a.href = urlName.value

          a.appendChild(button)

          li.appendChild(label)   

          li.appendChild(a)   

          ul.appendChild(li)

          container.appendChild(ul)
          

          setTimeout(() => {
               
               button.click()

          }, 6000);

     }

})
