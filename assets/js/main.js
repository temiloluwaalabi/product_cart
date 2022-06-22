const cart = document.querySelector("#cart"),
    menu = document.querySelector(".menu"),
    cartBody = document.querySelector(".cart"),
    mainImage = document.querySelector(".main-image"),
    thumbnailOne = document.querySelector(".thumbnail-one"),
    thumbnailtwo = document.querySelector(".thumbnail-two"),
    thumbnailthree = document.querySelector(".thumbnail-three"),
    overlayOne = document.querySelector(".overlay-one"),
    overlaytwo = document.querySelector(".overlay-two"),
    overlaythree = document.querySelector(".overlay-three"),
    overlayfour = document.querySelector(".overlay-four"),
    lightBox = document.querySelector(".lightbox"),
    closeIcon = document.querySelector(".close-icon"),
    mobileIcon = document.querySelector(".mobile-icon-bars"),
    mobileClose = document.querySelector(".mobile-icon-close"),
    thumbnailfour = document.querySelector(".thumbnail-four");





mobileClose.addEventListener("click", () => {
    //menu.style.transform = "translateX(-100%)";
    menu.classList.remove("show");
    // menu.style.display = "none";
})

cart.addEventListener("click", () => {
    cartBody.classList.toggle("show");
})

mobileIcon.addEventListener("click", () => {
    //menu.style.visibility = "visible";
    menu.classList.add("show");
})

closeIcon.addEventListener("click", () => {
    lightBox.style.display = "none"
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
})

// lightBox.addEventListener("click", ()=>{
//     lightBox.style.display = "none";
// })

thumbnailtwo.addEventListener("click", () => {
    mainImage.src = "images/image-product-2.jpg";
    thumbnailtwo.style.border = "2px solid hsl(26, 100%, 55%)";
    thumbnailOne.style.border = "none";
    thumbnailthree.style.border = "none";
    thumbnailfour.style.border = "none";
    overlaytwo.style.display = "block";
    overlayOne.style.display = "none"
    overlaythree.style.display = "none"
    overlayfour.style.display = "none"

})
thumbnailthree.addEventListener("click", () => {
    mainImage.src = "images/image-product-3.jpg";
    thumbnailthree.style.border = "2px solid hsl(26, 100%, 55%)";
    thumbnailtwo.style.border = "none";
    thumbnailOne.style.border = "none";
    thumbnailfour.style.border = "none";
    overlaythree.style.display = "block";
    overlayOne.style.display = "none"
    overlaytwo.style.display = "none"
    overlayfour.style.display = "none"
})
thumbnailfour.addEventListener("click", () => {
    mainImage.src = "images/image-product-4.jpg";
    thumbnailfour.style.border = "2px solid hsl(26, 100%, 55%)";
    thumbnailtwo.style.border = "none";
    thumbnailthree.style.border = "none";
    thumbnailOne.style.border = "none";
    overlayfour.style.display = "block";
    overlayOne.style.display = "none"
    overlaythree.style.display = "none"
    overlaytwo.style.display = "none"
})
thumbnailOne.addEventListener("click", () => {
    mainImage.src = "images/image-product-1.jpg";
    thumbnailOne.style.border = "2px solid hsl(26, 100%, 55%)";
    thumbnailtwo.style.border = "none";
    thumbnailthree.style.border = "none";
    thumbnailfour.style.border = "none";
    overlayOne.style.display = "block";
    overlaytwo.style.display = "none";
    overlaythree.style.display = "none"
    overlayfour.style.display = "none"

})

mainImage.addEventListener("click", () => {
    lightBox.style.display = "block";
})

const slide = document.querySelectorAll(".slide");
const mainSlide = document.querySelector(".main-slide")
const mainSlideImg = mainSlide.querySelector("img");
const slideImg = document.querySelectorAll(".main-image-carousel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const prevMobileBtn = document.querySelector(".prevMobile");
const nextMobileBtn = document.querySelector(".nextMobile");

window.onload = () => {
    for (let i = 0; i < slide.length; i++) {
        let newIndex = i;
        function preview() {
            let selectedIndex = slide[newIndex].querySelector(".main-image-carousel").src;
            mainSlideImg.src = selectedIndex;
        };

        nextBtn.onclick = ()=>{
            newIndex++;

            if(newIndex === slide.length){
                newIndex = 0;
                newIndex++;
                for (let x = 0; x < length -1; x++) {
                   newIndex = x;
                   newIndex++  
                    console.log(newIndex);
                    preview();
                   // nextMobileBtn.style.display = "none";       
                }
               // console.log(i);
                preview();
                nextBtn.style.display = "none";
            }else{
                    preview();
                    prevBtn.style.display = "flex";
                }
            // preview();
            //     console.log(mainSlideImg.src);
            //     prevBtn.style.display = "block";
            //    // nextBtn.style.display = "none";
            // if(newIndex >= slide.length){
            //     console.log(slide.length);
            //     preview();
            //     nextBtn.style.visibility = "hidden";
                
            // }
        }

        prevBtn.onclick = () => {
            newIndex--;
            if (newIndex === 0) {
                preview();
                console.log(mainSlideImg.src);
                prevBtn.style.display = "none";
            } else {
                preview();
                console.log(mainSlideImg.src);
                nextBtn.style.display = "flex";
            }

        }
        

        // nextBtn.addEventListener("click", () => {
        //     newIndex++;
        //     preview();
        //     if (newIndex >= slide.length) {
        //         nextBtn.style.display = "none";
        //         preview()
        //     } else {
        //         preview();
        //     }
        // });


        // console.log(selectedImageUrl);


    }



}

let imageLink = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
]

let length = imageLink.length;
for (let i = 0; i < length; i++) {
    function previewMobile() {
        let imageSrc = imageLink[i];
        mainImage.src = imageSrc;
    };
    nextMobileBtn.onclick = ()=>{
        i++
        if(i === length){
            i = 0;
            i++;
            for (let x = 0; x < length -1; x++) {
               i = x;
               i++  
                console.log(i);
                previewMobile();
               // nextMobileBtn.style.display = "none";       
            }
           // console.log(i);
            previewMobile();
            nextMobileBtn.style.display = "none";
        }else{
                previewMobile();
                prevMobileBtn.style.display = "flex";
            }
    }

    prevMobileBtn.onclick = () => {
        i--;
        console.log(i);
        if (i === 0) {

            previewMobile();
            console.log(mainSlideImg.src);
            prevMobileBtn.style.display = "none";
        }
        
        else {
            previewMobile();
            nextMobileBtn.style.display = "flex";
            //nextMobileBtn.style.display
            //console.log(mainSlideImg.src);
        }

    }


}