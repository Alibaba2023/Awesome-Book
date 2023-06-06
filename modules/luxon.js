const currentDateAndTime = () => {
  const datePage = document.querySelector('.date-page');
  const newdate = new Date();
  datePage.textContent = newdate.toDateString();
};

export default currentDateAndTime;