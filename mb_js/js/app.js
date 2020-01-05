import {ArtistView , Artist} from "./artist.js";
import {ArtistCreditView , ArtistCredit} from "./artist_credit.js";

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
	
	$('#exampleModalCenter').on('show.bs.modal', function (event) {
		  let button = $(event.relatedTarget) // Button that triggered the modal
		  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		  let modal = $(this)
		  let id = button.data('artist');
		  $("#modal-credits").html("");
		  			$.get (
						`${host}/artist/artistId/${id}`
						,function (data){
							let result = data[0];
							let credits = result.artistCredits;
							modal.find('.modal-title').text(data[0].name);
							$("#modal-credits").append( 
										credits.map(row => {
											return new ArtistCreditView(row.artistCreditId , row.name).render();
										})
									);
//							$("#artist-container").removeClass("d-none");
					});
		  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
/*		  modal.find('.modal-title').text('New message to ' + recipient)
		  modal.find('.modal-body input').val(recipient)*/
		});

	
});