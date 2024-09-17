import React, { useState, useEffect } from 'react';
import { FaCircleArrowUp } from "react-icons/fa6";
import './Buttonscroll.css';

const ScrollToTopButton = () => {
// State to control the visibility of the button
const [showButton, setShowButton] = useState(false);

// Function to handle the scroll behavior
const scrollFunction = () => {
if (window.scrollY > 300) {
    setShowButton(true); // Show the button when scrolled down 300px
} else {
    setShowButton(false); // Hide the button when at the top
}
};

// Function to scroll to the top
const topFunction = () => {
window.scrollTo({
    top: 0,
    behavior: 'smooth', // Smooth scroll effect
});
};

// Attach the scroll event listener when the component mounts
useEffect(() => {
window.onscroll = scrollFunction;

// Clean up the event listener when the component unmounts
return () => {
    window.onscroll = null;
};
}, []);

return (
<div>
    {/* Only render the button if showButton is true */}
    {showButton && (
    <button className='btn-go-top' onClick={topFunction} >
        <i className=' text-cyan-400 text-5xl '>
            <FaCircleArrowUp />
        </i>
    </button>
    )}
</div>
);
};

export default React.memo(ScrollToTopButton);
