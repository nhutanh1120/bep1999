import React, { useEffect, useRef } from "react";
import "./style.css";

const ScrollTop = () => {
    const scroll = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const ref = useRef(null);

    const changeStyle = () => {
        if (window.scrollY > 100) {
            ref.current?.classList.add("active");
        } else {
            ref.current?.classList.remove("active");
        }
    };
    useEffect(() => {
        document.addEventListener("scroll", changeStyle);
        return () => {
            document.removeEventListener("scroll", changeStyle);
        };
    }, []);
    return (
        <div className="scroll" onClick={scroll} ref={ref}>
            <i className="bx bx-up-arrow-alt"></i>
        </div>
    );
};

export default ScrollTop;
