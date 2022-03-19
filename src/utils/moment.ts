export const getTodayDate = () => {
  const rawToday = new Date();
  const yyyy = rawToday.getFullYear();
  let mm = rawToday.getMonth() + 1; // Months start at 0!
  let dd = rawToday.getDate();

  let formatedMm: string = mm.toString();
  let formatedDd: string = dd.toString();

  if (mm < 10) formatedMm = "0" + mm;
  if (dd < 10) formatedDd = "0" + dd;

  return formatedDd + "/" + formatedMm + "/" + yyyy;
};
