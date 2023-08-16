import React from 'react';
import { SingletonRouter } from 'next/router';
import { Structure } from './types';
type ConnectedRouterProps = {
    children?: React.ReactNode;
    reducerKey?: string;
    Router?: SingletonRouter;
};
declare const createConnectedRouter: (structure: Structure) => React.FC<ConnectedRouterProps>;
export default createConnectedRouter;
