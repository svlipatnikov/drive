export const orderSelector = (store) => store.orderReducer;

// location
export const locationSelector = (store) => store.orderReducer.location;
export const citySelector = (store) => store.orderReducer.location.city;
export const pointSelector = (store) => store.orderReducer.location.point;

// car
export const carSelector = (store) => store.orderReducer.car;
export const categorySelector = (store) => store.orderReducer.car.category;
export const modelSelector = (store) => store.orderReducer.car.model;

// addition
export const additionSelector = (store) => store.orderReducer.addition;
export const rateSelector = (store) => store.orderReducer.addition.rate;
export const colorSelector = (store) => store.orderReducer.addition.color;
export const optionsSelector = (store) => store.orderReducer.addition.options;
export const dateFromSelector = (store) => store.orderReducer.addition.dateFrom;
export const dateToSelector = (store) => store.orderReducer.addition.dateTo;

// finalPrice
export const finalPriceSelector = (store) => store.orderReducer.finalPrice;

// is filled
export const locationIsFilledSelector = (store) =>
  !!store.orderReducer.location.city && !!store.orderReducer.location.point;
export const carIsFilledSelector = (store) => !!store.orderReducer.car.model.name;
export const additionIsFilledSelector = (store) =>
  !!store.orderReducer.addition.dateFrom &&
  !!store.orderReducer.addition.dateTo &&
  !!store.orderReducer.addition.rate;
