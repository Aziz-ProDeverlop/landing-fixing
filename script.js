function sale() {
    let saleDate = new Date(2024, 9, 30)
    let currentDate= new Date()
    let date = saleDate-currentDate
    let day = Math.floor (date/(24+60*60*1000));
    let hours = Math.floor ((date%(24+60*60*1000))/(60*1000*60))
    let minuts = Math.floor((date%(60*60*1000))/(60*1000))
    let seconds = Math.floor((date%(60*1000))/1000)
    let timeValue= document.getElementsByClassName("date")
    timeValue[0].innerHTML=day
    timeValue[1].innerHTML=hours
    timeValue[2].innerHTML=minuts
    timeValue[3].innerHTML=seconds


}

let wrapper = document.querySelector(".wrapper")
let popUp = document.querySelector(".wrapper .popUp")
let typ = document.querySelector(".wrapper .thankYouPage")
let btns = document.querySelectorAll("section button")
btns.forEach( btn => {
    btn.addEventListener('click', showpopUp)
})

wrapper.addEventListener('click', hidepopUp )

function showpopUp() {
    wrapper.style.display = "flex"
    popUp.style.display = "flex"
    typ.style.display = "none"
}


function hidepopUp() {
    let elem = event.target

    if(elem == wrapper) {
        wrapper.style.display = "none"
    }
}

