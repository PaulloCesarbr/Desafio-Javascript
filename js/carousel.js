

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(image, title, url){
        this.image=image;
        this.title=title;
        this.url=url;
    }         

    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Show(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);

                document.getElementById("avanc-btn").addEventListener("click",function(){Carousel.Next();});

                
                document.getElementById("ret-btn").addEventListener("click",function(){Carousel.Next();});
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Show(){
        let item=carouselArr[Carousel._sequence];

        let carouselDiv= document.getElementById("carousel");

        let carouselTitleDiv= document.getElementById("carousel-title");

        carouselDiv.style.backgroundImage=`url('img/${item.image}')`;

        carouselDiv.style.backgroundSize= "cover";

        carouselDiv.style.backgroundPosition="center";

        carouselDiv.style.transition = "all .5s ease-in-out";

        carouselTitleDiv.innerHTML =`<a href="${item.url}">${item.title}</a>`;

        

    }

    static Next(){
        Carousel._sequence++;

        if(Carousel._sequence>=Carousel._size){
                Carousel._sequence=0;
        }

        Carousel.Show();
    }

    static Prev(){
        Carousel._sequence--;
        if(Carousel._sequence<0){
            Carousel._sequence= Carousel._size -1;
        }

        Carousel.Show();
    }
};
