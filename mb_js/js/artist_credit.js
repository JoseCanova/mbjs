class ArtistCredit{ 
	constructor (artistCreditId , name){ 
		this.artistCreditId = artistCreditId; 
		this.name = name;
	}
} 

class ArtistCreditView extends ArtistCredit{ 
	constructor (artistCreditId , name){ 
		super (artistCreditId , name); 
	}
	
	render (){
		return `<div class="row">${this.name}</div>`;
	}
} 

export {ArtistCredit, ArtistCreditView};