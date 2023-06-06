const initializeNavigation = () => {
  const aList = document.querySelector('.a-list');
  const aAdd = document.querySelector('.a-add');
  const aContact = document.querySelector('.a-contact');

  const addContainer = document.querySelector('.add-container');
  const formContainer = document.querySelector('.form-container');
  const contactContainer = document.querySelector('.contact-container');

  aList.addEventListener('click', () => {
    addContainer.classList.remove('display-none');
    formContainer.classList.add('display-none');
    contactContainer.classList.add('display-none');
  });

  aAdd.addEventListener('click', () => {
    formContainer.classList.remove('display-none');
    addContainer.classList.add('display-none');
    contactContainer.classList.add('display-none');
  });

  aContact.addEventListener('click', () => {
    contactContainer.classList.remove('display-none');
    addContainer.classList.add('display-none');
    formContainer.classList.add('display-none');
  });
};

export default initializeNavigation();