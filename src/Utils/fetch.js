import {Toast} from 'antd-mobile';

function requestGetParam(paramName) {
    try {
        const patt = new RegExp(`${paramName}=[A-Za-z0-9=]+&?`);
        let rs = patt.exec(window.location.href);
        rs = rs[0].replace(`${paramName}=`, '');
        rs = rs.replace('&', '');
        return rs;
    } catch (ex) {
        return "";
    }
};
const identifier = requestGetParam('identifier');
export default function* Fetch(url, params = '', isToast = true) {
    isToast && Toast.loading('加载中...');
    return yield fetch(url, {
        method: 'post',
        body: `distributorid=1&identifier=${identifier}&${params}`,
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    })
        .then((data) => {
            setTimeout(Toast.hide, 500);
            return data.json();
        })
};