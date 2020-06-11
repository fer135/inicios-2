/* OBJETOS LITERALES */
const superHeroe = {
	nombre: "tony stark",
	codeName: "IronMan",
	vivo: false,
	edad: 40,
	trajes: ["Mark I", "Mark V", "HulkBuster"],
	coors: {
		lat: 34.04,
		lng: -118.7,
	},
};

//console.log(superHeroe.trajes);
//console.log(superHeroe.coors.lat);
//console.log(superHeroe.trajes.length)
//console.log(superHeroe.trajes[superHeroe.trejes.length-2])

const superHeroeSinDatoVivo = delete superHeroe.vivo;

console.log(superHeroeSinDatoVivo, superHeroe);
superHeroe.vivo = true;
console.log(superHeroe);
