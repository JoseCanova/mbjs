/**
 * 
 */

let host="/rest"

$(document).ready(function(){	
		$("#search").on("click" , () => {
			$("#result").html("");
			let name = $('#name').val();
			$.get (
			`${host}/artist/artist_name/${name}`
			,function (data){
				$("#result").append( 
						data.map(row => {
							let template_artist_result = `<tr><td class="id_result">${row.artistId}</td><td class="name_result">${row.name}</td><td class="name_result">${row.sortName}</td><td class="gid_result">${row.gid}</td></tr>`;
							return template_artist_result;
				}));
			});
		}
	);
});
