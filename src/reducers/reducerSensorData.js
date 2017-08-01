export default function(state = [], action) {
  switch (action.type) {
    case "FETCH_SENSOR_DATA":
      console.log(action.payload.data);
      return [action.payload.data.sensorsData, ...state];
  }
  return state;
}
