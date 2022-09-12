import React, { useEffect, useState } from 'react';
import { CarouselService } from './services/carousel.service';
import { FcPrevious,FcNext } from 'react-icons/fc';

const Carousel = ({
    slides = 10,
    infinite = false
}) => {
    const [slidesList, setSlides] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        CarouselService.getSlides(slides, setSlides)
    }, []);
    const previous=()=>{
        setIndex(preIndex=>{
            if(preIndex === 0){
                return slidesList.length - 1;
            }else{
                preIndex --;
                return preIndex;
            }
        })
    }

    const next=()=>{
        setIndex(preIndex=>{
            console.log(preIndex)
            preIndex ++;
            return (preIndex % slidesList.length);
        });
    }
    return (
        <div className='slide-main'>
            <div class="slider">
              <div class="img-overlay">
                  <div class="overlay-detail">
                    <span id="slidertext">
                      <h2>{slidesList[index]?.title}</h2>
                      <h3>{slidesList[index]?.subTitle}</h3>
                    </span>
                  </div>
              </div>
            {slides!==1 ? <button class="icon icon-pre" onClick={previous}>
                <FcPrevious size={40} color="white" />
            </button>:null}
            {slides!==1 || (infinite && index === slidesList.length - 1) ?<button class="icon icon-next" onClick={next} >
                <FcNext size={40}/>
            </button>:null}
            </div>
            <img src={slidesList[index]?.image}  alt='Not found' className='slider-img'/>            
        </div>
    );
}

export { Carousel };