/**
 * 
 */
class Artist{
	constructor (id,name,sortName,gid){ 
		this.id = id; 
		this.name = name; 
		this.sortName = sortName; 
		this.gid = gid;
	}
};

class ArtistView extends Artist { 
	constructor (id,name,sortName,gid) { 
		super(id,name,sortName,gid);
	}
	
	render (){ 
		return `<div class="row">
					<div class="col">${this.id}</div>
					<div class="col-4">${this.mountQuery()}${this.name}</a></div>
					<div class="col-4">${this.sortName}</div>
					<div class="col">
						<div class="gid-result">
							<span  title="${this.gid}">${this.gid}</span>
						</div>
					</div>
				</div>`;
	}
	
	mountQuery(){ 
		return  `<a href="https://www.google.com/search?q=${this.name.replace(" " , "+")}" target="new">`;
	}
};

export { Artist, ArtistView }; 