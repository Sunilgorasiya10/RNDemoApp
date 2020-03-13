import { MAIN_API, USER_LIST, FETCH_USER_ACTION } from '../statics/GlobalConst';

export const FetchUserList = () => {
    return async dispatch => {
        await fetch(MAIN_API + USER_LIST)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.error('error', response);
                }
            })
            .then(json => {
                console.log(json);
                dispatch({
                    type: FETCH_USER_ACTION,
                    payload: json.data,
                })
            })
            .catch(error => console.error('error', error));
    }
}