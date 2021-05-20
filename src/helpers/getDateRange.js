const getDateRange = (dateFrom, dateTo) => {
  const range = dateFrom && dateTo ? dateTo - dateFrom : null;
  const daysRange = range ? Math.floor(range / (1000 * 60 * 60 * 24)) : null;
  const hoursRange = range
    ? Math.round(((range - daysRange * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) * 10) / 10
    : null;

  return [range, daysRange, hoursRange];
};

export default getDateRange;
