export const populationString = (value: number): string => {
  if(value < 10000){
    return `${value.toString()}`;
  }
    if (value < 1000000) {
    return `${(value / 1000).toFixed(1)}k`;
  } else if (value >= 1000000 && value < 1000000000) {
    return `${(value / 1000000).toFixed(1)} million`;
  } else {
    return `${(value / 1000000000).toFixed(1)} billion`;
  }
};
