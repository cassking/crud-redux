const postReducer = (state = [], action) =>{
  switch(action.type) {
    case 'ADD_POST':
    return state.concat( [action.datapayload] )

    case 'DELETE_POST':
    //filter function takes a function as
    //argument, return new array and
    //keep all post.id not matching action.id, thisone
    //we want to remove
    return state.filter( (post) => post.id !== action.id)
    default:
    return state;
  }
}
export default postReducer;
