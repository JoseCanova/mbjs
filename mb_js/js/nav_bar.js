import {LitElement, html, css} from './node_modules/lit-element/lit-element.js';

import './jquery.js';

const host="/rest/brainz";

export class NavBar extends LitElement {
	 constructor() {
		    super();
		  }
	 
	  render() {
		    return html`
		    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
		    	<a class="navbar-brand" href="#" @click=${this._ajaxCall}>Top navbar</a>
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
	  
	  createRenderRoot() {
		  return this;
		}
}
window.customElements.define('nav-bar', NavBar);
