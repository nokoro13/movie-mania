import React from "react";
import { HeartFill } from 'react-bootstrap-icons';
import { useState } from 'react';
const AddFavourites = () => {

    const [fillHeart, setFillHeart] = useState(true);
    const handleToggle = () => {
    setFillHeart(prev=>!prev);
    console.log(fillHeart);
}

    return (
        <div onClick={handleToggle}>
            <HeartFill className={fillHeart ? "heart-nofill": "heart-fill"}/>
        </div>
        
    )
}

export default AddFavourites;