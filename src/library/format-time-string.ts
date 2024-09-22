export const formatTimeString = (date: Date) =>{
  const year = String(date.getFullYear());
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
