import React from "react";
import "./BackToTopBtn.css";

export default function BackToTopBtn() {
    const [display, setDisplay] = React.useState("none");

    const listenScrollEvent = () => {
        if (window.scrollY > 150) {
            setDisplay("block")
        } else {
            setDisplay("none")
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
      }, []);

    return (
        <button
                type="button"
                className="btn btn-secondary btn-floating btn-lg"
                id="btn-back-to-top"
                onClick={() => {  
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }}
                style={{ display: `${display}` }}
                >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
}