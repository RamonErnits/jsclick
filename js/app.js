const mainImage = document.querySelector('.gallery-image1 img');
const imageToClick = document.querySelectorAll('.gallery img');
console.log(imageToClick);

imageToClick.forEach(img => img.addEventListener('click', changeImage));

function changeImage(event){
    imageToClick.forEach(img => (img.style.opacity = 1));
    mainImage.src = event.target.src;
    console.log(event.target);
    event.target.style.opacity = 0.5;
    

    if(event.target === mainImage){
        mainImage.src = "img/image1.jpg";
        mainImage.style.opacity = 1;
    }
}


