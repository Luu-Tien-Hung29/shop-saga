import {
  getDataApi,
  getDataApiSuccess,
} from "./contant";

const initState = {
  totalProduct: 0,
  load: false,
  listProduct: [],
  listCart: [],
};
const reducer = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {
    

    case getDataApi:
      console.log(action.payload);
      return {
        ...state,
        load: true,
      };

    case getDataApiSuccess:
      const datas = action.payload.map((data) => {
        return {
          ...data,
          quantityItem: 0,
        };
      });
      return {
        ...state,
        load: false,
        listProduct: datas,
      };

    default:
      return newState;
  }
};
export default reducer;
