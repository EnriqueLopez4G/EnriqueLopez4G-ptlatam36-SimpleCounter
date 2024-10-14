import React from "react";
import Sections from "./Sections";

const SecondsCounter=(props)=> {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
            <div className="d-flex justify-content-center w-100"> {/* Contenedor adicional para centrar */}
                <Sections seconds = {props.seconds}/>
            </div>
        </div>
    )
}

export default SecondsCounter;