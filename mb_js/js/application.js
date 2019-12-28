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
					<div class="col-4">${this.name}</div>
					<div class="col-4">${this.sortName}</div>
					<div class="col">
						<div class="gid-result">
							<span  title="${this.gid}">${this.gid}</span>
						</div>
					</div>
				</div>`;
	}
}

let host="/rest";
var current_result;
mount_result = function(data){ 
	current_result = data;
	$("#result").append( 
			data.map(row => {
				return new ArtistView(row.artistId , row.name , row.sortName, row.gid).render();
			}));
};

$(document).ready(function(){
	$("#search1").on("click" , () => {
			$("#result").html("");
				let name = $('#search-text').val();
				$.get (
						`${host}/artist/artist_name/${name}`
						,function (data){
							current_result = data;
							mount_result(data);
							$("#artist-container").removeClass("d-none");
						});
				}
			);
});
