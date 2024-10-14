// Sections.js
import React from 'react';
import '../../styles/Sections.css' // Importa el archivo CSS

const updateSegments = (num) => {
    const newSegments = Array(6).fill(0); // Inicializa un nuevo arreglo de segmentos
    const numString = num.toString().padStart(6, '0'); // Asegura que el número tenga 6 dígitos

    for (let i = 0; i < numString.length; i++) {
        newSegments[i] = parseInt(numString[i], 10); // Llena el arreglo con cada dígito
    }

    return(newSegments);
};

const Sections = (props) => {
    let segundosSegmentados =updateSegments(props.seconds);
    return (
        <div className="sections d-flex align-items-center w-75 justify-content-center">
            <div className="section">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" className="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                </svg>

            </div>

            <div className="section">{segundosSegmentados[1]}</div>
            <div className="section">{segundosSegmentados[2]}</div>
            <div className="section">{segundosSegmentados[3]}</div>
            <div className="section">{segundosSegmentados[4]}</div>
            <div className="section">{segundosSegmentados[5]}</div> 
        </div>
    );
};

export default Sections;
