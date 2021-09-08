export default (state, action) => {
  switch (action.type) {
    case 'SEARCH_EVENTS':
      return {
        ...state,
        events: action.payload,
        loading: false
      };
    case 'CLEAR_EVENTS':
      return {
        ...state,
        events: [],
        loading: false
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}