import {LitElement, html, css} from './node_modules/lit-element/lit-element.js';


export class MainContainer extends LitElement{ 

	contructor(){ 
		super();
	}

	render(){ 
		return html`
		<div class="container-fluid">
		</div>
		`;
	}

	createRenderRoot() {
		return this;
	}

}

window.customElements.define('main-container', MainContainer);