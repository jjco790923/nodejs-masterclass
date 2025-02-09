/**
 * este controller nos regresa una lista de posts
 *
 * @async
 * @function getPost
 * @access PUBLIC
 * @route  /api/v1/post
 * @param {import('express').Request} req - The HTTP request object.
 * @param {import('express').Response} res - The HTTP response object used to send a response.
 * @param {import('express').NextFunction} next - The next middleware function in the stack.
 *   Used for passing errors or continuing to subsequent middleware.
 * @throws {Error} If an error occurs during processing, it should be passed to `next`.
 * @returns {Promise<void>} Resolves when the response is sent.
 */
export const getPost = (req, res, next) => {
	
	res.status(200).json({
		success: true,
		method: 'GET'
	});
}; // getPost


/**
 * este crea un post
 *
 * @async
 * @function createPost
 * @access private
 * @route POST /
 * @param {import('express').Request} req - The HTTP request object.
 * @param {import('express').Response} res - The HTTP response object used to send a response.
 * @param {import('express').NextFunction} next - The next middleware function in the stack.
 *   Used for passing errors or continuing to subsequent middleware.
 * @throws {Error} If an error occurs during processing, it should be passed to `next`.
 * @returns {Promise<void>} Resolves when the response is sent.
 */
export const createPost = async (req, res, next) => {
	
	res.status(200).json({
		success: true,
		method: 'POST'
	});
}; // createPost


export const updatePost = async (req, res, next) => {
	
	res.status(200).json({
		success: true,
		method: 'PUT'
	});
}; // updatePost


export const deletePost = async (req, res, next) => {
	
	res.status(200).json({
		success: true,
		method: 'DELETE'
	});
}; // deletePost



//
//
// export const createPost = async (req, res, next) => {
//
// 	res.status(200).json({
// 		success: true,
// 		method: 'POST'
// 	});
// }; // createPost
//

