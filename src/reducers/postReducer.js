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

    case 'EDIT_POST':
    //map over each itekncheck id of post
    //if match, return a new object and change
    //value of EDITING to it's opposite
    //if not match do nothing
    return state.map(
      (post)=>post.id === action.id ? {...post, editing: !post.editing}:post)

    case 'UPDATE':
    return state.map((post)=>{
      if(post.id===action.id){
        return {
          ...post,
          title: action.datapayload.newTitle,
          message: action.datapayload.newMessage,
          editing: !post.editing//flip state to opposite
        }
      } else return post;
    })
    default:
    return state;
  }
}
export default postReducer;
