export const activeSelector = (store) => store.orderReducer.active;

export const citySelector = (store) => store.orderReducer.location.city;
export const pointSelector = (store) => store.orderReducer.location.point;

export const categorySelector = (store) => store.orderReducer.car.category;
export const modelSelector = (store) => store.orderReducer.car.model;

export const locationIsFilledSelector = (store) =>
  !!store.orderReducer.location.city && !!store.orderReducer.location.point;
export const carIsFilledSelector = (store) => !!store.orderReducer.car.model.name;
export const additionIsFilledSelector = (store) =>
  !!store.orderReducer.addition.dateFrom && !!store.orderReducer.addition.dateTo;
