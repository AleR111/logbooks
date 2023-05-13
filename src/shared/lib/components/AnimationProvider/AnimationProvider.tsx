import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationProviderPayload {
    Spring?: SpringType;
    Gesture?: GestureType;
    isLoading?: boolean;
}

const AnimationContext = createContext<AnimationProviderPayload>({});

export const useAnimationLibs = () => useContext(AnimationContext) as Required<AnimationProviderPayload>;

const getAsyncAnimationModules = () => Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);

interface AnimationProviderProps {
    children: ReactNode;
}

export const AnimationProvider = (props: AnimationProviderProps) => {
    const { children } = props;

    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoading(true);
        });
    }, []);

    const value = useMemo(
        () => ({
            Spring: SpringRef.current,
            Gesture: GestureRef.current,
            isLoading,
        }),
        [isLoading],
    );

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    );
};
