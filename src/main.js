import {navigate} from './router';
import App from './components/App.svelte';

const app = new App({
	target: document.body
});

navigate(window.location.pathname);