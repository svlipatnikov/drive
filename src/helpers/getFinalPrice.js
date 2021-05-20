import getDateRange from './getDateRange';

const getFinalPrice = (rate, dateFrom, dateTo, fullTank, babyChair, rightSteering) => {
  const [range] = getDateRange(dateFrom, dateTo);
  if (!rate || !range) return null;

  let price = 0;
  if (fullTank.checked) price += 500;
  if (babyChair.checked) price += 200;
  if (rightSteering.checked) price += 1600;

  switch (rate.rateTypeId.unit) {
    case 'мин':
      price += rate.price * Math.ceil(range / (1000 * 60));
      break;

    case 'сутки':
      price += rate.price * Math.ceil(range / (1000 * 60 * 60 * 24));
      break;

    case '7 дней':
      price += rate.price * Math.ceil(range / (1000 * 60 * 60 * 24 * 7));
      break;

    default:
      price += 0;
      break;
  }

  return price;
};

export default getFinalPrice;
