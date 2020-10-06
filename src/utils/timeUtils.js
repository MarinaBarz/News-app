export const timeDifference = (date) => {
  return new Date().getTime() - new Date(date).getTime();
};
