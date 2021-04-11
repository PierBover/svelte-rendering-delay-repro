<script>
	import {navigate} from '../router';

	function onClick (event) {
		event.preventDefault();
		navigate(event.target.pathname);
	}
</script>


<nav class="navbar navbar-expand navbar-dark bg-primary fixed-top">
	<div class="container-fluid">
		<a class="navbar-brand" href="/" on:click={onClick}>Router Demo App</a>
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link" href="/about" on:click={onClick}>About</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/contact" on:click={onClick}>Contact</a>
			</li>
		</ul>
	</div>
</nav>