import {writable} from 'svelte/store';

import Home from './components/Home.svelte';
import About from './components/About.svelte';
import Contact from './components/Contact.svelte';

export const currentComponent = writable(null);

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/about',
		component: About
	},
	{
		path: '/contact',
		component: Contact
	}
]

export function navigate (path) {
	const route = routes.find((route) => route.path === path);
	currentComponent.set(route.component);
	window.history.pushState({}, '', path);
}
