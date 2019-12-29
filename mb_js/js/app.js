import {ArtistView , Artist} from "./artist.js";

const host="/rest";

$(document).ready(function(){
	$("#search1").on("click" , () => {
			$("#result").html("");
				let name = $('#search-text').val();
				$.get (
						`${host}/artist/artist_name/${name}`
						,function (data){
							$("#result").append( 
									data.map(row => {
										return new ArtistView(row.artistId , row.name , row.sortName, row.gid).render();
									}));
							$("#artist-container").removeClass("d-none");
						});
				}
			);
});