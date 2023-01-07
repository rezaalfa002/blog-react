const initialState = {
    dataBlogs:[],
    name : 'reza'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME') {
     return {
        ...state,
        name: 'Hudoro'
      }
    }
    return state;
}

export default globalReducer