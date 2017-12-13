require('./header.css');
const Header = {
	init(){
		if(process.env.NODE_ENV == "pp"){
			console.loig(2222);
		}
		console.log('header');
	}
}
export default Header;