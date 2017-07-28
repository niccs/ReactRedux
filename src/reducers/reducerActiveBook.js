export default function(state = null, action) {
  // this is reducers state
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
  }
  return state;
}
