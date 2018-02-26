var container = document.querySelector('.container');
var lightBox = document.querySelector(".lightbox");
var lightBoxImg = document.querySelector(".lb-img  img");
var close = document.querySelector(".close");
var larrow = document.querySelector(".larrow");
var rarrow = document.querySelector(".rarrow");
// array of images
var imgArray = [
    {
        link: "images/img1.jpeg"
    },
    {
        link: "images/img2.jpeg"
    },
    {
        link: "images/img3.jpeg"
    },
    {
        link: "images/img4.jpeg"
    },
    {
        link: "images/img5.jpeg"
    },
    {
        link: "images/img6.jpeg"
    },
    {
        link: "images/img7.jpeg"
    },
    {
        link: "images/img8.jpeg"
    },
    {
        link: "images/img9.jpeg"
    },
    {
        link: "images/img10.jpeg"
    },
    {
        link: "images/img11.jpeg"
    },
    {
        link: "images/img12.jpeg"
    },
    {
        link: "images/img13.jpeg"
    },
    {
        link: "images/img14.jpeg"
    },
    {
        link: "images/img15.jpeg"
    }    
];

// forEach with a function expression!
imgArray.forEach(function(image) {
    var imageTag = document.createElement('img');
    imageTag.src = image.link;
    container.appendChild(imageTag);
    // imageTag.classList.add('img_class');
    imageTag.addEventListener('click', function() {
        lightBoxImg.src = image.link;
        selectedImg = image.link; 
        lightBox.classList.add("active");
        close.classList.add("active");
        var currentImgNumber = selectedImg.substring(selectedImg.lastIndexOf("img")+3, selectedImg.lastIndexOf(".jpeg"));
        if(parseInt(currentImgNumber) > 1) {
            larrow.classList.add("active");
        }
        if(parseInt(currentImgNumber) < 15) {
            rarrow.classList.add("active");
        }    
    })
});

var leftArrowFn = function() {
    var currentImgNumber = selectedImg.substring(selectedImg.lastIndexOf("img")+3, selectedImg.lastIndexOf(".jpeg"));
    if(parseInt(currentImgNumber) > 1) {
        var prevImgSrc = "images/img" + (parseInt(currentImgNumber)-1) + ".jpeg"; 
        lightBoxImg.setAttribute("src", prevImgSrc);
        selectedImg = prevImgSrc;
        if(parseInt(currentImgNumber) === 2){
            larrow.classList.remove("active");
        }
        if(parseInt(currentImgNumber) === 15){
            rarrow.classList.add("active");
        }
    }
    else {
        larrow.classList.remove("active");
    }
};

var rightArrowFn = function() {
    var currentImgNumber = selectedImg.substring(selectedImg.lastIndexOf("img")+3, selectedImg.lastIndexOf(".jpeg"));
    if(parseInt(currentImgNumber) < 15) {
        var nextImgSrc = "images/img" + (parseInt(currentImgNumber)+1) + ".jpeg"; 
        lightBoxImg.setAttribute("src", nextImgSrc);
        selectedImg = nextImgSrc;
        if(parseInt(currentImgNumber) === 14) {
            rarrow.classList.remove("active");
        } 
        if(parseInt(currentImgNumber) === 1) {
            larrow.classList.add("active");
        } 
    }
    else {
        rarrow.classList.remove("active");
    }
    if(parseInt(currentImgNumber) >= 2){
        larrow.classList.add("active");
    }
};

var closeFn = function () {
    lightBox.classList.remove("active");
    close.classList.remove("active");    
};

document.querySelector(".larrow-img").addEventListener("click", leftArrowFn);
document.querySelector(".rarrow-img").addEventListener("click", rightArrowFn);
document.querySelector(".close-img").addEventListener("click", closeFn);


