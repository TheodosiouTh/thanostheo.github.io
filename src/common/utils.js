export function readFile(path, headers, callback) {
  return fetch(path, { headers })
    .then(file => file.text())
    .then(data => callback(data));
}
