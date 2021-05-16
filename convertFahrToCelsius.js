
function convertFahrToCelsius(n) {
    if (n instanceof Array) {
        return `${n} is not a valid number but a/an array`;
    } else if (n instanceof Object) {
        return `${JSON.stringify(n)} is not a valid number but an object`;
    } else if (!Number.isInteger(n)) return `"${n}" is not a valid number but a/an ${typeof(n)}`;
    let num = Number(n);
    return ((num - 32) / 1.8).toFixed(4);
}
