/**
 * A bemeneti tömb első elemét string-ként visszaadja, nagybetűssé alakítva.
 * @param {array} items - Számokat tartalmazó tömb.
 * @returns {string} - A kimenet a tömb első eleme átalakítva.
 */
function getFirstAsString(items) {
  return items[0].toString().toUpperCase()
}

getFirstAsString([3, 45, 5, 0, 10])
