import React, {useEffect, useState} from "react";
import {Animate} from "react-move";

const AnimatedProgressBar = ({valueStart, valueEnd, duration, easingFunction, repeat=null, children}) => {

    const interval = undefined;

    const [isAnimated, setIsAnimated] = useState(false);
    useEffect(() => {
        if (repeat) {
            const interval = setInterval(() => {
                setIsAnimated(!isAnimated);
            }, duration * 1000);
        } else {
            setIsAnimated(!isAnimated);
        }

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <Animate
            start={() => ({
                value: valueStart
            })}
            update={() => ({
                value: [
                    isAnimated ? valueEnd : valueStart
                ],
                timing: {
                    duration: duration * 1000,
                    ease: easingFunction
                }
            })}
        >
            {({ value }) => children(value)}
        </Animate>
    );
}

export default AnimatedProgressBar;