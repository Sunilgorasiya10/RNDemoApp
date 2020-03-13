import { connect } from 'react-redux';
import { FetchUserList } from '../actions/fetchUserAction';

const mapDispatchToProps = (dispatch) => ({
    getUserList: () =>
        dispatch(FetchUserList()),

})

const mapStateToProps = (state) => {
    return {
        List: state.form1,
    }
}

export default connect(mapStateToProps, mapDispatchToProps);