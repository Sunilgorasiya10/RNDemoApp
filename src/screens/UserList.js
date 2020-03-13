import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppStyles from '../config/Styles'

class UserList extends Component {
    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

export default UserList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.COLOR.BLACK
    },

});