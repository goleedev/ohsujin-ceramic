import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
    // Footer Pointing
    let amountScrolled = 200;
    let amountScrolledNav = 25;

    window.scroll(function() {
    if ( window.scrollTop() > amountScrolled ) {
        document.getElementById('scroll').addClass('show');
    } else {
        document.getElementById('scroll').removeClass('show');
    }
    });

    const onClick = async (event) => {
        document.body.animate({
            scrollTop : 0                   
        }, 500);
    }
    return (
        <>
            <div onClick={onClick} id="scroll" className="scroll-to-top">
                <FontAwesomeIcon className="scroll-to-top" icon={faChevronCircleUp} color={"#f1f1f1f1"} size="3x" />
            </div>
        </>
    )
}

export default ScrollToTop;
