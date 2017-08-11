export default function(state = [], action) {
  switch (action.type) {
    case "FETCH_SENSOR_DATA": {
      // console.log("<<<>>><<<<>>><<<<>>>");
      // console.log(action.payload.data.data);
      return [...action.payload.data.data];
    }
    case "FETCH_SENSOR_ROW": {
      // console.log("===============================");
      const newRow = action.payload.data.data;
      const newState = [...state.slice(0, state.length), newRow];
      return newState;
    }
  }
  return state;
}
