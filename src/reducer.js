const reducer = (state, action) => {
    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_STORIES":
        return {
          ...state,
          isLoading:false,
          hits: action.payload.hits,
          nbpages: action.payload.nbpages,
        };
      case "REMOVE_POST":
        return {
          ...state,
          hits: state.hits.filter((curElem) => curElem.objectID !== action.payload),
        };
      case "SEARCH_QUERY":
        return {
          ...state,
          query: action.payload,
        };
      case "NEXT_PAGE":
        let pageNumInc = state.page + 1;
        if (pageNumInc >= state.nbpages) {
          pageNumInc = 0;
        }
        return {
          ...state,
          page: pageNumInc,
        };
      case "PREV_PAGE":
        let pageNum = state.page;
        if (pageNum <= 0) {
          pageNum = 0;
        }
        return {
          ...state,
          page: pageNum,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  