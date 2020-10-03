import { MAIN_API } from '../../statics/GlobalConst'

export default async (path, params, method) => {
    let options;
    options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // ...(token && { token: token }),
        },
        method: method,
        ...(params && { body: JSON.stringify(params) }),
    };

    return await fetch(MAIN_API + path, options)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else console.error('Error : ', response);
        }).then(json => {
            console.log('API Data : ', json);
            data = {
                title: 'success',
                json,
            }
            return data;
        }).catch(error => {
            console.error('API Error :', error);
            data = {
                title: 'error',
                error,
            }
            return data;
        });

}