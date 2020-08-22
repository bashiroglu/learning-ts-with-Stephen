export const convertStringToDate = (dateString: string): Date => {
  const dateArray = dateString.split("/").map((value) => {
    return parseInt(value);
  });

  return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
};
