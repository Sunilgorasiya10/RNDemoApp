import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, } from 'react-native';
import AppStyles from '../config/Styles'
import AppImages from '../images/index'
import txtInput from '../components/TextInputComponent';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import withForm from '../hoc/withForm'

class Registration extends Component {
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
                            <View style={styles.registrationView}>
                                <View style={styles.appTitleContainer}>
                                    <Text style={styles.profileTextStyle}>{'CREATE'}</Text>
                                    <Text style={[styles.profileTextStyle, { fontWeight: 'bold', paddingLeft: AppStyles.countPixelRatio(10) }]}>{'PROFILE'}</Text>
                                    <Text style={[styles.profileTextStyle, { fontWeight: 'bold', color: 'red' }]}>{'!'}</Text>
                                </View>
                                <Text style={styles.bottomProfileTextStyle}>{'There is a lot to learn..'}</Text>
                                <Image source={AppImages.imagePlaceholder} style={styles.topImageStyle} />
                                <Field
                                    name='FName'
                                    ref='FName'
                                    refField={ref => (this['FName'] = ref)}
                                    placeholder="Enter First Name"
                                    placeholderTextColor="red"
                                    nextField={'LName'}
                                    returnKeyType={'next'}
                                    onSubmitEdit={(event) => { this['LName'].focus() }}
                                    component={txtInput}
                                />
                                <Field
                                    name='LName'
                                    ref='LName'
                                    refField={ref => (this['LName'] = ref)}
                                    placeholder="Enter Last Name"
                                    placeholderTextColor="red"
                                    nextField={'email'}
                                    returnKeyType={'next'}
                                    onSubmitEdit={(event) => { this['email'].focus() }}
                                    component={txtInput}
                                />
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
                                        <Text style={styles.btnLoginTextStyle}>{'Create'}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.txtResetView, { marginTop: AppStyles.countPixelRatio(27) }]}
                                        onPress={() => this.props.navigation.navigate('Login')} >
                                        <Text style={styles.txtResetStyle}>{'already have an account?'}</Text>
                                        <Text style={[styles.txtResetStyle, { color: 'red', paddingLeft: AppStyles.countPixelRatio(3) }]}>{'Login'}</Text>
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
export default connect(mapStateToProps, null)(withForm(Registration));

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
        borderBottomWidth: 2,
        borderBottomColor: 'red',
    },

    registrationView: {
        marginTop: AppStyles.countPixelRatio(20),
    },

    topImageStyle: {
        height: AppStyles.responsiveHeight(11),
        width: AppStyles.responsiveWidth(22),
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        marginTop: AppStyles.countPixelRatio(20),
        marginBottom: AppStyles.countPixelRatio(20)
    },

    profileTextStyle: {
        fontSize: AppStyles.fontSizeH2,
        color: AppStyles.COLOR.WHITE,
    },

    bottomProfileTextStyle: {
        fontSize: AppStyles.fontSizeParagraph,
        color: 'grey',
        marginTop: AppStyles.countPixelRatio(5)
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
        marginTop: AppStyles.countPixelRatio(10)
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
