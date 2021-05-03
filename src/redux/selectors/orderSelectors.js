export const activeSelector = (store) => store.orderReducer.active;
export const citySelector = (store) => store.orderReducer.location.city;
export const pointSelector = (store) => store.orderReducer.location.point;

export const locationIsFilledSelector = (store) =>
  !!store.orderReducer.location.city && !!store.orderReducer.location.point;
export const carIsFilledSelector = (store) => !!store.orderReducer.car.model;
export const additionIsFilledSelector = (store) =>
  !!store.orderReducer.addition.dateFrom && !!store.orderReducer.addition.dateTo;
