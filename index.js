import initializeNavigation from './modules/navigation.js';
import Library from './modules/libray.js';
import currentDateAndTime from './modules/luxon.js';

const subLibrary = new Library();
subLibrary();
initializeNavigation();
currentDateAndTime();