import { DateTime } from '../node_modules/luxon/src/luxon.js';

const currentDateAndTime = () => {
  const currentTime = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  const datePage = document.querySelector('.date-page');
  datePage.textContent = currentTime;
};

export default currentDateAndTime;