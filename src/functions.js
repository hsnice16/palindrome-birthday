export const checkPalindrome = (birthDayString) => {
  const splitedBirthDayString = birthDayString.split("");
  const reversedSplitedBirthDayString = splitedBirthDayString.reverse();
  const reversedBirthDayString = reversedSplitedBirthDayString.join("");

  return birthDayString === reversedBirthDayString;
};

export const getPalindromeFormat = (date, month, year) => {
  // first format
  if (checkPalindrome(date + month + year)) return `${date}-${month}-${year}`;

  // second format
  if (checkPalindrome(month + date + year)) return `${month}-${date}-${year}`;

  // third format
  if (checkPalindrome(month + date + year.substring(2)))
    return `${month}-${date}-${year.substring(2)}`;

  // fourth format
  if (checkPalindrome(year + month + date)) return `${year}-${month}-${date}`;

  return "";
};

export const checkCurrentDateIsPalindromeOrNot = (date, month, year) => {
  let yearStr = String(year);
  let monthStr = String(month);
  let dateStr = String(date);

  if (monthStr.length === 1) monthStr = "0" + monthStr;

  if (dateStr.length === 1) dateStr = "0" + dateStr;

  return getPalindromeFormat(dateStr, monthStr, yearStr);
};

export const daysInMonth = (month) => {
  return [
    31,
    Number(`${new Date().getFullYear() % 4 ? 29 : 28}`),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ][month];
};

export const findNearestPalindromeDateAndMissedDays = (date, month, year) => {
  let forwardDate = Number(date);
  let backwardDate = Number(date);

  let forwardMonth = Number(month);
  let backwardMonth = Number(month);

  let forwardYear = Number(year);
  let backwardYear = Number(year);

  let missedDays = 0;
  while (true) {
    missedDays += 1;

    // check after birthdate
    forwardDate += 1;
    if (forwardDate > daysInMonth(forwardMonth - 1)) {
      forwardDate = 1;
      forwardMonth += 1;

      if (forwardMonth > 12) {
        forwardMonth = 1;
        forwardYear += 1;
      }
    }

    const forwardPalindromeFormat = checkCurrentDateIsPalindromeOrNot(
      forwardDate,
      forwardMonth,
      forwardYear
    );
    if (forwardPalindromeFormat !== "")
      return [forwardPalindromeFormat, missedDays];

    // check before birthdate
    backwardDate -= 1;
    if (backwardDate < 1) {
      backwardMonth -= 1;

      if (backwardMonth < 1) {
        backwardYear -= 1;

        if (backwardYear < 1) {
          return ["", ""];
        } else {
          backwardMonth = 12;
          backwardDate = 31;
        } // end else
      } else {
        backwardDate = daysInMonth(backwardMonth - 1);
      } // end else
    } // end if

    const backwardPalindromeFormat = checkCurrentDateIsPalindromeOrNot(
      backwardDate,
      backwardMonth,
      backwardYear
    );
    if (backwardPalindromeFormat !== "")
      return [backwardPalindromeFormat, missedDays];
  }
};
