
function convertFahrToCelsius(n) {
    let num = Number(n);
    if (n instanceof Array) {
        return `${n} is not a valid number but a/an array`;
    } else if (n instanceof Object) {
        return `${JSON.stringify(n)} is not a/an valid number but an object`;
    } else if (Number.isNaN(num)) return `"${n}" is not a valid number but a/an ${typeof(n)}`;
    return ((num - 32) / 1.8).toFixed(4);
}
