
function checkYuGiOh(n) {
    if (typeof(n) === 'boolean' || !Number(n)) {
        return (n instanceof Object) ? `invalid parameter: ${JSON.stringify(n)}` : `invalid parameter: ${n}`
    };
    n = Number(n);
    let newArray = [];
    for (i=1; i<=n; i++) {
        let str = "";
        if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
            str = i;        
        }
        if(i % 2 === 0) {
            str += "yu "
        } 
        if (i % 3 === 0) {
            str += "gi "
        } 
        if (i % 5 === 0) {
            str += "oh "
        } 
        if (Number.isInteger(str)) {str} 
        else { 
            str = str.trim().replace(/[" "]/g, "-")
        }
        newArray.push(str);
        str = "";
    }
    return newArray;
};
