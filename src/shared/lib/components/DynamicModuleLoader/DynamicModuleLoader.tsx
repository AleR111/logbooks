import { Reducer } from '@reduxjs/toolkit';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from '@/app/providers/StoreProvider';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    remoteAfterUnmount?: boolean;
    children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { children, reducers, remoteAfterUnmount = true } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        let name: StateSchemaKey;
        const mountedReducers = store.reducerManager.getReducerMap();
        for (name in reducers) {
            if (reducers[name]) {
                const mounted = mountedReducers[name];

                if (!mounted) {
                    store.reducerManager.add(name, reducers[name] as Reducer);
                    dispatch({ type: `@INIT ${name} reducer` });
                }
            }
        }

        return () => {
            if (remoteAfterUnmount) {
                let name: StateSchemaKey;
                for (name in reducers) {
                    if (reducers[name]) {
                        store.reducerManager.remove(name);
                        dispatch({ type: `@DESTROY ${name} reducer` });
                    }
                }
            }
        };

        // eslint-disable-next-line
    }, []);

    return <>{children}</>;
};
