const url = 'http://localhost:3001';

const headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
  	'Authorization': 'yanirguezgallo-05-16-88'
};

const get = function(endPoint) {
	return fetch(`${url}/${endPoint}`, { headers });
}; 


const post = function(endPoint, body) {
	return fetch(`${url}/${endPoint}`, {
		method: 'POST',
		headers,
		body: JSON.stringify(body)
	});	
};

const put = function(endPoint, body) {
	return fetch(`${url}/${endPoint}`, {
		method: 'PUT',
		headers,
		body: JSON.stringify(body)
	});	
};

const remove = function(endPoint) {
	return fetch(`${url}/${endPoint}`, {
		method: 'DELETE',
		headers
	});	
};

const handleErr = function(err) {
	console.log('There was an error: ', err);
	return false;
};

//Get all of the categories available
export const getAllCategories = function() {
	return get('categories')
			.then(response => response.json())
			.catch(err => handleErr(err));
};

//Get all of the posts for a particular category
export const getCategoryPost = function(category) {
	get(`${category}/posts`)
		.then(response => response.json())
		.then(data => data )
		.catch(err => handleErr(err));
};

//Get all of the posts.
export const getAllPosts = function() {
	return	get('posts')
				.then(response => response.json())
				.catch(err => handleErr(err));
};

//Add a new post.
export const addNewPost = function(newPost) {
	return post('posts', newPost)
			.then(result => result.ok)
			.catch(err => handleErr(err));
};

//Get the details of a single post
export const getPostDetail = function(id) {
	return get(`posts/${id}`)
			.then(result => result.json())
			.catch(err => handleErr(err));
};

//Used for voting on a post
export const votePost = function(id, option){
	return post(`posts/${id}`, { 
			option 
		})
			.then( result => result.ok)
			.catch( err => handleErr(err) );	
};

//Edit the details of an existing post
export const editPost = function(id, title, body) {
	put(`posts/${id}`, {
		title,
		body
	})
		.then(result => result.ok)
		.catch( err => handleErr(err) );
};

//Sets the deleted flag for a post to 'true' and the post comments
export const deletePost = function(id) {
	return remove(`posts/${id}`)
			.then(result => result.ok)
			.catch( err => handleErr(err) );
};

//Get all the comments for a single post.
export const getPostComments = function(id) {
	return get(`posts/${id}/comments`)
			.then(result => result.json())
			.catch( err => handleErr(err) );
};

//Add a comment to a post
export const addCommentToPost = function(comment) {
	return post(`comments`, comment)
			.then( result => result )
			.catch( err => handleErr(err) );
};

//Get the details for a single comment.
export const getDetailComment = function(id) {
	return get(`comments/${id}`)
			.then(result => result.json())
			.catch( err => handleErr(err) );
};

//Used for voting on a comment
export const voteComment = function(id, option) {
	post(`comments/${id}`, {
			option
	})
		.then(result => result.ok)
		.catch(err => handleErr(err));
};

//Edit the details of an existing comment.
export const editCommentDetail = function(id, timestamp, body) {
	return put(`comments/${id}`, {	
			timestamp,
			body		
		})
		.then(result => result.ok)
		.catch(err => handleErr(err));
};

//Sets a comment's deleted flag to true
export const deletePostComment = function(id) {
	return remove(`comments/${id}`)
			.then(result => result.ok)
			.catch( err => handleErr(err) );
};