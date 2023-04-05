/**
 * @description Creates a new cell object
 * @param {Number} newX 
 * @param {Number} newY 
 */
export default function Cell(newX, newY) {
  let collapsed = false;
  let index = null;
  let inQueue = false;
  const x = newX;
  const y = newY;
  let options = null

  return {
    collapsed,
    index,
    inQueue,
    x,
    y,
    options
  }
}