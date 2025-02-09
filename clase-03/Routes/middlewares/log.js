export const logger = async (req, res, next) => {
	
	// si el usuario esta autenticado
	if (0 == true) {
		console.info('usuario valido');
		next();
	} else {
		console.error('usuario no autenticado');
		res.status(403).json('not authenticated');
	}
}; // logger
