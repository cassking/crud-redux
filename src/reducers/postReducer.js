const postReducer = (state = [], action) =>{
  switch(action.type) {
    case 'ADD_POST':
    return state.concat( [action.datapayload] )

    default:
    return state;
  }
}
export default postReducer;
