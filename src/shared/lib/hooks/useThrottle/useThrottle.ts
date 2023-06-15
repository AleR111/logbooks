import { useCallback, useRef } from 'react';

export const useThrottle = (
    callback: (...args: any[]) => void,
    delay: number,
) => {
    const throttle = useRef(false);

    return useCallback(
        (...args: any[]) => {
            if (!throttle.current) {
                callback(...args);
                throttle.current = true;

                setTimeout(() => {
                    throttle.current = false;
                }, delay);
            }
        },
        [callback, delay],
    );
};
