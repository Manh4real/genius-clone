export function format(
  num,
  precision = 1,
  units = ["", "k", "m", "b", "t", "p", "z"]
) {
  // if (isNaN(parseFloat(num))) return num;
  if (!Number(num)) return num;
  let temp = num;

  let i = 0;
  while (temp >= 1000 && i < units.length) {
    temp = Math.floor(temp / 1000);
    ++i;
  }
  let a = Math.pow(1000, i);
  let result =
    i == 0 ? num : parseFloat((num / a).toFixed(precision)) + units[i];

  return result;
}
