import { DOMKeyframesDefinition, DynamicAnimationOptions, ElementOrSelector, motion, useAnimate } from "framer-motion";
import React, { useEffect, useRef } from "react";


interface AnimateTimelineProps {
    keyframes: any; // Replace 'any' with the appropriate type
    count?: number;
    children: React.ReactNode;
}

type AnimateParams = [
    ElementOrSelector,
    DOMKeyframesDefinition,
    (DynamicAnimationOptions | undefined)?,
]

type Animation = AnimateParams | Animation[];

const isAnimationArray = (animation: Animation): animation is Animation[] => {
    return Array.isArray(animation[0]);
};

const AnimateTimeline: React.FC<AnimateTimelineProps> = ({ keyframes, count = 1, children }) => {
    const mounted = useRef(true);
    const [scope, animate] = useAnimate();

    useEffect(() => {
        mounted.current = true;

        handleAnimate();
        return () => {
            mounted.current = false;
        };
    }, []);

    const processAnimation = async (animation: Animation) => {
        if (isAnimationArray(animation)) {
            await Promise.all(
                animation.map(async a => {
                    await processAnimation(a);
                })
            );
        } else {
            await animate(... animation)
        }
    }


    const handleAnimate = async () => {
        for (let i = 0; i < count; i++) {
            for (const animation of keyframes) {
                if (!mounted.current) return;

                await processAnimation(animation);
            }
        }
    };

    return (
        <motion.div ref={scope}>
            {children}
        </motion.div>
    );
};

export default AnimateTimeline;