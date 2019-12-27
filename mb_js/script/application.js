/**
 * 
 */

let host="/rest";
var current_result;
mount_result = function(data){ 
	current_result = data;
	$("#result").append( 
			data.map(row => {
				let template_artist_result = `<tr>
													<td class="td-artist-id">${row.artistId}</td>
													<td class="name_result">${row.name}</td>
													<td class="name_result">${row.sortName}</td>
													<td class="td-artist-gid">${row.gid}</td>
												</tr>`;
				return template_artist_result;
	}));
	$(".div-result").css("display" , "block");
}
$(document).ready(function(){
		$("#search").on("click" , () => {
			$(".div-result").css("display" , "none");
			$("#result").html("");
			let name = $('#name').val();
			$.get (
			`${host}/artist/artist_name/${name}`
			,function (data){
				current_result = data;
				mount_result(data);
			});
		}
	);
});
