import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, } from 'react-native';
import AppStyles from '../config/Styles'
import AppImages from '../images/index'
import txtInput from '../components/TextInputComponent';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import withForm from '../hoc/withForm'

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView behavior={'height'}>
                    <ScrollView>
                        <View style={styles.subContainer}>
                            <View style={styles.appTitleContainer}>
                                <Text style={styles.titleTextStyle}>{'BE'}</Text>
                                <Text style={[styles.titleTextStyle, { fontWeight: 'bold' }]}>{'BOLD.'}</Text>
                            </View>
                            <View style={styles.loginView}>
                                <Image source={AppImages.loginProfile2} style={styles.topImageStyle} />
                                <View style={styles.appTitleContainer}>
                                    <Text style={styles.welcomeTextStyle}>{'WELCOME'}</Text>
                                    <Text style={[styles.welcomeTextStyle, { fontWeight: 'bold', paddingLeft: AppStyles.countPixelRatio(10) }]}>{'BACK'}</Text>
                                    <Text style={[styles.welcomeTextStyle, { fontWeight: 'bold', color: 'red' }]}>{'!'}</Text>
                                </View>
                                <Text style={styles.bottomWelcomeTextStyle}>{'There is a lot to learn..'}</Text>
                                <Field
                                    name='email'
                                    ref='email'
                                    refField={ref => (this['email'] = ref)}
                                    placeholder="Enter Email"
                                    placeholderTextColor="red"
                                    nextField={'password'}
                                    returnKeyType={'next'}
                                    onSubmitEdit={(event) => { this['password'].focus() }}
                                    component={txtInput}
                                />
                                <Field
                                    name='password'
                                    ref='password'
                                    refField={ref => (this['password'] = ref)}
                                    placeholder='Enter Password'
                                    placeholderTextColor='red'
                                    secureTextEntry={true}
                                    component={txtInput}
                                />
                                <View style={styles.btnLoginView}>
                                    <TouchableOpacity style={styles.btnLoginStyle}>
                                        <Text style={styles.btnLoginTextStyle}>{'Login'}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.txtResetView}>
                                        <Text style={styles.txtResetStyle}>{'Forgotten your login details?'}</Text>
                                        <Text style={[styles.txtResetStyle, { color: 'red', paddingLeft: AppStyles.countPixelRatio(3) }]}>{'Reset'}</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.socialLoginTextStyle}>{'Login with'}</Text>
                                    <View style={styles.socialBtnView}>
                                        <TouchableOpacity style={[styles.socialBtnStyle, { backgroundColor: AppStyles.COLOR.FACEBOOK_BLUE }]}>
                                            <Image source={AppImages.facebook}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.socialBtnStyle, { backgroundColor: AppStyles.COLOR.GOOGLE_CINABAR, marginLeft: AppStyles.countPixelRatio(40) }]}>
                                            <Image source={AppImages.google}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.socialBtnStyle, { backgroundColor: AppStyles.COLOR.Dodger_Blue, marginLeft: AppStyles.countPixelRatio(40) }]}>
                                            <Image source={AppImages.twitter}></Image>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('UserList')} >
                                        <Text style={styles.txtResetStyle}>{'UserList'}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.txtResetView, { marginTop: AppStyles.countPixelRatio(30) }]}
                                        onPress={() => this.props.navigation.navigate('Registration')} >
                                        <Text style={styles.txtResetStyle}>{'Dont have an account?'}</Text>
                                        <Text style={[styles.txtResetStyle, { color: 'red', paddingLeft: AppStyles.countPixelRatio(3) }]}>{'Create Profile'}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView >
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state,
    }
}

export default connect(mapStateToProps, null)(withForm(Login));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.COLOR.BLACK
    },

    subContainer: {
        marginHorizontal: AppStyles.responsiveWidth(7),
    },

    appTitleContainer: {
        flexDirection: 'row',
        marginTop: AppStyles.responsiveHeight(1.5)
    },

    titleTextStyle: {
        fontSize: AppStyles.fontSizeH1,
        color: AppStyles.COLOR.WHITE,
        borderBottomWidth: 4,
        borderBottomColor: 'red',
    },

    loginView: {
        marginTop: AppStyles.countPixelRatio(40),
    },

    topImageStyle: {
        height: AppStyles.responsiveHeight(12),
        width: AppStyles.responsiveWidth(25),
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5
    },

    welcomeTextStyle: {
        fontSize: AppStyles.fontSizeH2,
        color: AppStyles.COLOR.WHITE,
    },

    bottomWelcomeTextStyle: {
        fontSize: AppStyles.fontSizeParagraph,
        color: 'grey',
        marginVertical: AppStyles.countPixelRatio(12)
    },

    btnLoginView: {
        alignItems: 'center',
        marginTop: AppStyles.countPixelRatio(30)
    },

    btnLoginTextStyle: {
        color: 'red',
        fontWeight: 'bold'
    },

    btnLoginStyle: {
        height: AppStyles.responsiveHeight(7.5),
        width: AppStyles.responsiveWidth(50),
        backgroundColor: AppStyles.COLOR.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

    txtResetView: {
        flexDirection: 'row',
        marginTop: AppStyles.countPixelRatio(15)
    },

    txtResetStyle: {
        color: 'grey',
        fontSize: AppStyles.fontSizeParagraph
    },

    socialLoginTextStyle: {
        color: AppStyles.COLOR.WHITE,
        marginTop: AppStyles.countPixelRatio(15)
    },

    socialBtnView: {
        flexDirection: 'row',
        // backgroundColor: 'yellow',
        marginTop: AppStyles.countPixelRatio(15)
    },

    socialBtnStyle: {
        height: AppStyles.responsiveHeight(7),
        width: AppStyles.responsiveWidth(13),
        justifyContent: 'center',
        alignItems: 'center'
    }

})