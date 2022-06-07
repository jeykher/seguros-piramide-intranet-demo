import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

import './Carrousel.scss';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

const Carrousel = () => {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    const addItem = () => {
      const nextItem = Math.max(1, items.length + 1);
      setItems([...items, nextItem]);
    };
    const removeItem = () => {
      const endRange = Math.max(0, items.length - 1);
      setItems(items.slice(0, endRange));
    };
    return (
        <div className="ipos-carrousel-container">
            <div className="ipos-carrousel-wrapper">
                <Carousel breakPoints={breakPoints}>
                    {items.map((item) => (
                    <Item key={item}>{item}</Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Carrousel;