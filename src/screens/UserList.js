import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AppStyles from '../config/Styles'
import withUserList from '../hoc/withUserList';

class UserList extends Component {

    componentDidMount() {
        const {
            List: { firstTime },
            getUserList,

        } = this.props;
        if (firstTime == false) {
            getUserList();
        }
    }
    render() {
        const { List: { uList }, getUserList } = this.props;
        return (
            <View style={styles.container}>
                <FlatList
                    data={uList}
                    renderItem={({ item }) =>
                        <View>
                            <TouchableOpacity style={styles.listStyle} onPress={() => { alert('pressed') }}>
                                <Text style={styles.listTxtStyle}>{item.email}</Text>
                            </TouchableOpacity>
                        </View>
                    }

                />
            </View>
        )
    }
}

export default withUserList(UserList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.COLOR.BLACK
    },

    listStyle: {

    },

    listTxtStyle: {
        color: 'white'
    }

});