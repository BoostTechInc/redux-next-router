import { LocationChangeAction } from './actions';
import { RouterState, Structure } from './types';
import { Reducer, AnyAction } from 'redux';
type CreateRouterReducer = (structure: Structure) => Reducer<RouterState, LocationChangeAction | AnyAction>;
declare const createRouterReducer: CreateRouterReducer;
export default createRouterReducer;
