import react, { useContext } from 'react';
import Img from "react-cool-img";

import './Slideshow.scss';

import { StaticContext } from '../../contexts/StaticContext';

const Slideshow = () => {
    const { staticState: { slideshowImages } } = useContext(StaticContext);
    return (
        <>
            <div id="iposSlideshow" className="ipos-slideshow carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#iposSlideshow" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#iposSlideshow" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#iposSlideshow" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="ipos-slideshow-image-container carousel-inner">
                    {
                        slideshowImages.map(image => {
                            const { id, imagePath, imageAlt } = image;
                            let classImageSlideshow = "";
                            if(id == 1) {
                                classImageSlideshow = "carousel-item active";
                            } 
                            else {
                                classImageSlideshow = "carousel-item"
                            }
                            return (
                                <div className={classImageSlideshow} key={id}>
                                    <Img 
                                        src={imagePath} 
                                        className="d-block w-100 ipos-slideshow-image" 
                                        alt={imageAlt}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#iposSlideshow" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#iposSlideshow" data-bs-slide="next">
                    <span className="carousel-control-next-icon ipos-slideshow-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Slideshow;