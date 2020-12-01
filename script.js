const submitBTN = document.querySelector(".submitBTN")

const ul = document.querySelector("ul")

const song = document.querySelector(".song")

const urlName = document.querySelector(".urlName")

const url = document.querySelector(".url")

const container = document.querySelector(".container")

const songName = document.querySelector(".songName")




submitBTN.addEventListener('click', (e) =>{

     e.preventDefault()

     if (songName.value == '' || urlName.value == '') {

          alert('Please enter the song name')

          
     }else{

          const li = document.createElement("li")   

          const label = document.createElement("label")

          const a = document.createElement("a")   

          const button = document.createElement("button")

          label.textContent = songName.value

          button.textContent = "Link"

          a.href = urlName.value

          a.setAttribute('target', '_blank')

          a.appendChild(button)

          li.appendChild(label)   

          li.appendChild(a)   

          ul.appendChild(li)

                  

          setTimeout(() => {
               
               button.click()

          }, 6000);

     }

})

