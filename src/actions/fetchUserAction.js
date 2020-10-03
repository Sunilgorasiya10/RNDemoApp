import { USER_LIST, FETCH_USER_ACTION } from '../statics/GlobalConst';
import API from '../lib/Api/index'

export const FetchUserList = () => {
    return async dispatch => {

        let res = await API(USER_LIST, null, 'get')

        if (res.title == 'success') {
            dispatch({
                type: FETCH_USER_ACTION,
                payload: json.data,
            })
        } else if (res.title == 'error') {
            alert('Something Wrong')
        }
    }
}