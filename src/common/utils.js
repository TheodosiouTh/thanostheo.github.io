import moment from 'moment';

/**
 * Reads a file and executes a callback with the file data
 * @param {string} path The path of the fail
 * @param {object} headers The headers like what type of  file its
 * @param {function} callback  A funciton that handles the file data
 */
export function readFile(path, headers, callback) {
  return fetch(path, { headers })
    .then(file => file.text())
    .then(data => callback(data));
}

/**
 * Formats a date to  Do MMM YYYY
 * @param {string} date The date string to be formated
 */
export function getFormatedDate(date) {
  return moment(date).format('Do MMM YYYY');
}
