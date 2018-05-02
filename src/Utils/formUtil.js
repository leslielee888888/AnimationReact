export function transfer(obj = {}) {
    const $obj = {};
    for (let i in obj) {
        $obj[i] = {
            value: obj[i]
        };
    }
    return $obj;
}
