/**
 * A bemeneti tömb első elemét string-ként visszaadja, nagybetűssé alakítva.
 * @param {array} items - Számokat tartalmazó tömb.
 * @returns {string} - A kimenet a tömb első eleme átalakítva.
 */
function getFirstAsString(items) {
  return items[0].toString().toUpperCase()
}

/**
 * Eldönti egy számról, hogy páros vagy páratlan.
 * @param {number} param - Bemeneti szám paraméter.
 * @returns {boolean} - Kimeneti igaz/hamis érték.
 */
function numberIsEven(param) {
	if (param % 2 === 0)
		return true
	return false
}


getFirstAsString([3, 45, 5, 0, 10])

numberIsEven(3)