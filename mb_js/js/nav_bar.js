import {LitElement, html, css} from './node_modules/lit-element/lit-element.js';

import './jquery.js';
const host="/rest/brainz";

class TopNav extends LitElement{ 

	constructor() {
		super();
	}
	
	createRenderRoot() {
		return this;
	}

}

export class NavBar extends TopNav {
	constructor() {
		super();
	}
	render() {
		return html`
		<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
		<a class="navbar-brand" href="#" @click=${this._ajaxCall}>Top navbar</a>
		<search-box></search-box>
		</nav>
		`;
	}


	_ajaxCall(){ 
		$.get(
				`${host}/artist/id/30`,
				function(data){ 
					console.log(data);
				}

		);
	}
}

export class SearchBox extends TopNav{ 
	constructor(){ 
		super();
	}

	render(){ 
		return html 
		`
		<div class="form-inline mt-2 mt-md-0">
		<input id="search-text" class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
		<button id="search1" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		</div>
		`;
	}

}

window.customElements.define('nav-bar', NavBar);
window.customElements.define('search-box', SearchBox);
