/**
 * 
 */
let host="/rest";
var current_result;
mount_result = function(data){ 
	current_result = data;
	$("#result").append( 
			data.map(row => {
				let template_artist_result = `<div class="row">
													<div class="col">${row.artistId}</div>
													<div class="col-4">${row.name}</div>
													<div class="col-4">${row.sortName}</div>
													<div class="col">
														<div class="gid-result">
															<span  title="${row.gid}">${row.gid}</span>
														</div>
													</div>
												</div>`;
				return template_artist_result;
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
