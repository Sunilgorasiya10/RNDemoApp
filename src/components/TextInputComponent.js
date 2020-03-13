import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import AppStyles from '../config/Styles'

const TextInputComponent = (props) => {
    const { placeholderTextColor,
        placeholder,
        secureTextEntry,
        refField,
        returnKeyType,
        keyboardType,
        input: { onChange, value },
        onSubmitEdit } = props;

    return (
        <View>
            <TextInput
                ref={refField}
                returnKeyType={returnKeyType}
                style={styles.txtInputStyle}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChange}
                keyboardType={keyboardType}
                onSubmitEditing={() => {
                    if (onSubmitEdit) {
                        onSubmitEdit()
                    }
                }}>
            </TextInput>
        </View>
    )
}

export default TextInputComponent;

const styles = StyleSheet.create({
    txtInputStyle: {
        borderWidth: 1,
        borderColor: 'red',
        paddingHorizontal: AppStyles.countPixelRatio(15),
        borderRadius: 6,
        marginVertical: AppStyles.countPixelRatio(8),
        color: AppStyles.COLOR.WHITE,
    }
})