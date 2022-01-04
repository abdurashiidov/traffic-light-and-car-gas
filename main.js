


// // balon_start.style.transform = "translateX(200%)"

// function alertName(name){
// document.body.append(name)
// }
// let az = setTimeout(alertName, 1000, 'Komil')
// let as = setTimeout(alertName, 1500, 'Olim' + '\n')

// // as.style.transition = "1s"

// console.log(az, as);
let bos = document.querySelector(".gaz")
let  qayt = document.querySelector(".tormoz")
let car_go = document.querySelector(".car")


// function alertName(name){
// document.body.append(name)
// }
//     let bos = setTimeout(alertName, 6000, bos)

    
bos.addEventListener("click", ()=>{
    car_go.style.marginLeft = "2000px"
    car_go.style.transition = "5s"
})
qayt.addEventListener("click", ()=>{
    car_go.style.marginLeft = "-1800px"
    car_go.style.transformRotate3D = "18deg"
    car_go.style.transition = "9s"
})

function gaz () {
    bos.click()
}

let timegaz = setTimeout(gaz, 5500)