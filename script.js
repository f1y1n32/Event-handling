let btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    let image =document.createElement("img")
    image.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    document.body.appendChild(image)

})