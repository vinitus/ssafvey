const parseDateToString = (date: Date) => {
  const reflectedTimeForTimezone = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return reflectedTimeForTimezone.toISOString().slice(0, 19);
};

export default parseDateToString;
