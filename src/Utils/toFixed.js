export default function toFixed(x = 0) {
    const rs = Math.floor(parseFloat(x) * 100) / 100;
    const len = rs.toString().split('.').length;
    if (len === 1) {
        return `${rs}.00`;
    } else if (len === 2 && rs.toString().split('.')[1].length < 2) {
        return `${rs}0`;
    }else if(len === 2 && rs.toString().split('.')[1].length > 2){
        let re = /([0-9]+.[0-9]{2})[0-9]*/;
        return rs.toString().replace(re, "$1");
    }else{
        return rs;
    }

}