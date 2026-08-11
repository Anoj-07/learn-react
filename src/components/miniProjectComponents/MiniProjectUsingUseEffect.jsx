import { useEffect, useState } from "react";

function MiniProjectUsingUseEffect(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        document.title = `size: ${width} x ${height}`
    }, [width, height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHight(window.innerHeight);
    }

    return(
        <>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
        </>
    );
}

export default MiniProjectUsingUseEffect