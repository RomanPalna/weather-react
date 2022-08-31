export default function addDaysToCurrentDate(noofDays) {
  const date = new Date();
  const next_date = new Date(date.setDate(date.getDate() + noofDays));
  const IncrementedDate = next_date.toISOString().slice(0, 10);
  return IncrementedDate;
}
