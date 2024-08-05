import { RouteObject } from 'react-router-dom';

type Routes = 'login' | 'register' | 'home';

export interface IRouteConstant {
	[key: string]: Routes;
}

export interface RouterProps {
	routes: RouteObject[];
}
