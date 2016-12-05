/**
 * Converts data along a highland stream to JSON in various ways
 * It can map data directly like stream.map(toJSON({ hello: 'world' }))
 * Format incoming data like stream.map(toJSON())
 * Format incoming data with function stream.map(toJSON(myFunc))
 * @param {funct|object|null} jsonData - JSON data or formatter function
 * @returns {function} A function to execute from data in a highland stream
 */
function toJSON (jsonData) {
  if (!jsonData) {
    return (jsonData) => JSON.stringify(jsonData);
  }
  else if (typeof jsonData === 'function') {
    let fn = jsonData;

    return (jsonData) => JSON.stringify(fn(jsonData));
  }

  return () => JSON.stringify(jsonData);
}

module.exports = toJSON;
