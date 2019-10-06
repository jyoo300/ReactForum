//reducer that interacts with the posts data

export default (state = [], action) => {
	switch(action.type) {
		case 'FETCH_POST':
			return {...state, [action.payload.id]: action.payload};
		case 'FETCH_POSTS':
			return action.payload;
		case 'CREATE_POSTS': 
			return {...state, [action.payload.id]: action.payload};
		default:
			return state;
	}
};