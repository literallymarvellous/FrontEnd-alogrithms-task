
function convertFahrToCelsius(n) {
    if (n.length === 0) {
        return `"${n}" is not a valid number but a/an ${(Array.isArray(n)) ? 'array' : typeof(n)}`;
    } else if (n instanceof Array) {
        return `${n} is not a valid number but a/an array`;
    } else if (n instanceof Object) {
        return `${JSON.stringify(n)} is not a valid number but an object`;
    } else if (!Number.isInteger(Number(n))) return `"${n}" is not a valid number but a/an ${typeof(n)}`;
    let num = Number(n);
    return ((num - 32) / 1.8).toFixed(4);
}
