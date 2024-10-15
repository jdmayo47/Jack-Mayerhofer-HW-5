/**
 * Gets the number in the specified input box.
 * @returns The number if it exists, else NaN
 */
function getAttributeValue(name) {
    const inp = document.getElementById(name).value.trim();
    if (inp === '') {
        return NaN;  // Return NaN for empty values
    } else {
        return parseFloat(inp);  // Use parseFloat to handle decimal numbers
    }
}

