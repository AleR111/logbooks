import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    remoteAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
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
