var $container = $('.container');
var $lightBox = $('.lightbox');
var $lightBoxImg = $('.lb-img img');
var $close = $('.close');
var $larrowImg = $('.larrow-img');
$larrowImg.fadeOut('fast');
var $rarrowImg = $('.rarrow-img');
$rarrowImg.fadeOut('fast');
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

imgArray.forEach(function(image) {
    var $imageTag = $('<img>', {'src': image.link});
    $container.append($imageTag);
        $imageTag.on('click', function() {
            $lightBoxImg.attr('src', image.link);
            selectedImg = image.link;
            $lightBox.addClass('active');
            $close.addClass('active');
            
        var currentImgNumber = selectedImg.substring(selectedImg.lastIndexOf("img")+3, selectedImg.lastIndexOf(".jpeg"));
        if(parseInt(currentImgNumber) > 1) {
            $larrowImg.fadeIn('fast');
        }
        if(parseInt(currentImgNumber) < 15) {
            $rarrowImg.fadeIn('fast');
        }    
    })
});

var leftArrowFn = function() {
    var currentImgNumber = selectedImg.substring(selectedImg.lastIndexOf("img")+3, selectedImg.lastIndexOf(".jpeg"));
    if(parseInt(currentImgNumber) > 1) {
        var prevImgSrc = "images/img" + (parseInt(currentImgNumber)-1) + ".jpeg"; 
        $lightBoxImg.attr('src', prevImgSrc);
        selectedImg = prevImgSrc;
        if(parseInt(currentImgNumber) === 2){
            $larrowImg.fadeOut('fast');
        }
        if(parseInt(currentImgNumber) === 15){  
            $rarrowImg.fadeIn('fast');                  
        }
    }
    else {
        $larrowImg.fadeOut('fast');

    }
};

var rightArrowFn = function() {
    var currentImgNumber = selectedImg.substring(selectedImg.lastIndexOf("img")+3, selectedImg.lastIndexOf(".jpeg"));
    if(parseInt(currentImgNumber) < 15) {
        var nextImgSrc = "images/img" + (parseInt(currentImgNumber)+1) + ".jpeg"; 
        $lightBoxImg.attr('src', nextImgSrc);
        selectedImg = nextImgSrc;
        if(parseInt(currentImgNumber) === 14) {
            $rarrowImg.fadeOut('fast');
        } 
        if(parseInt(currentImgNumber) === 1) {
            $larrowImg.fadeIn('fast');
        } 
    }
    else {
        $rarrowImg.fadeOut('fast');
    }
    if(parseInt(currentImgNumber) >= 2){
        $larrowImg.fadeIn('fast');
    }
};

var closeFn = function () {
    $lightBox.removeClass('active');
    $close.removeClass('active'); 
};

$larrowImg.on('click', leftArrowFn);
$rarrowImg.on('click', rightArrowFn);
$('.close-img').on('click', closeFn);


