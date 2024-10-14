import React, {useState, useEffect} from "react";
import SecondsCounter from './SecondsCounter';


//create your first component
const Home = () => {
	const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        // Limpieza del intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, []);

	return (
		
		<SecondsCounter  seconds = {seconds}/>
	);
};

export default Home;