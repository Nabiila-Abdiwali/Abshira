let image = document.getElementById('image');
let images = ['37.jpg','best1.jpg','3.jpg','4.jpg','5.jpg','6.jpg','product-2.png','product-1.png']
setInterval(function(){

    let random = Math.floor(Math.random() * 8);
    image.src = images[random];
}
    
    
   ,500 
    
    );



    const but = document.querySelector(".but");
const link = document.querySelector(".link");




but.addEventListener("click", () => {
link.classList.toggle("active")

})