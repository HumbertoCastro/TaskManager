const ReturnMinutes = [];
let inter = 0
for (let i = 8; i < 24; i += 1) {
  const hour = i;
  if (i < 10) {
    ReturnMinutes.push(`0${hour}:00`);
    ReturnMinutes.push(`0${hour}:30`);
  } else {
    ReturnMinutes.push(`${hour}:00`);
    ReturnMinutes.push(`${hour}:30`);
  }
}

export default ReturnMinutes;