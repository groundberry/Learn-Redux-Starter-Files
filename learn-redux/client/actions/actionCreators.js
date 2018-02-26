// Increment
export function increment(index) {
 return {
   type: 'INCREMENT_LIKES',
   index
 }
}

//  Add comment
export function addComment(postId, author, comment) {
 return {
   type: 'ADD_COMMENT',
   postId,
   author,
   comment
 }
}

//  Remove comment
export function removeComment(postId, i) {
  console.log('Removing a comment');
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}