export const age = (planet, seconds) => {
  let result;
  if (planet === 'earth') {
    result = seconds / 31557600;
  } else if (planet === 'mercury') {
    result = seconds / 31557600 / 0.2408467;
  } else if (planet === 'venus') {
    result = seconds / 31557600 / 0.61519726;
  } else if (planet === 'mars') {
    result = seconds / 31557600 / 1.8808158;
  } else if (planet === 'jupiter') {
    result = seconds / 31557600 / 11.862615;
  } else if (planet === 'saturn') {
    result = seconds / 31557600 / 29.447498;
  } else if (planet === 'uranus') {
    result = seconds / 31557600 / 84.016846;
  } else if (planet === 'neptune') {
    result = seconds / 31557600 / 164.79132;
  }
  return Number(result.toFixed(2));
};
