var container = document.querySelector('.container');

var lightBox = function () {
    lightbox = document.querySelector(".lightbox");
    lightBoxImg = document.querySelector(".lightbox  img");
    lightBoxImg.setAttribute("src", this.getAttribute("src"));
    lightbox.classList.add("active");
    close = document.querySelector(".close");
    close.classList.add("active");
};

var closeImg = function () {
    console.log("You clicked me");
    lightbox = document.querySelector(".lightbox");
    lightbox.classList.remove("active");
    close = document.querySelector(".close");
    close.classList.remove("active");    
};

document.querySelector(".close");
document.querySelector(".close-img").addEventListener("click", closeImg);

var img_urls = [
    "images/img1.jpeg",
    "images/img2.jpeg",
    "images/img3.jpeg",
    "images/img4.jpeg",
    "images/img5.jpeg",
    "images/img6.jpeg",
    "images/img7.jpeg",
    "images/img8.jpeg",
    "images/img9.jpeg",
    "images/img10.jpeg",
    "images/img11.jpeg",
    "images/img12.jpeg",
    "images/img13.jpeg",
    "images/img14.jpeg",
    "images/img15.jpeg"
];

var displayImages = function (img_urls) { 
    for(i=0; i<img_urls.length; i++) {
        var image = document.createElement('img');
        image.setAttribute('src', img_urls[i]);
        image.classList.add('img_'+(i+1));
        container.appendChild(image);   
        image.addEventListener('click', lightBox);
    }
};

displayImages(img_urls);

