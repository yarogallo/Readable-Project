function formatData(timestamp) {
	const postDate = new Date(timestamp);
	return `${postDate.getMonth()}/${postDate.getDate()}/${postDate.getFullYear()}`;
}

export default formatData;
