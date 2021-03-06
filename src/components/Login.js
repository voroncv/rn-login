import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Keyboard} from 'react-native';
import { connect } from 'react-redux';
import { login } from '../store/actions';

import Logo from './layouts/Logo';
import Button from './layouts/Button';

type Props = {};
class LoginPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        };
    }

    static navigationOptions = ({navigation}) => {
        return {
            header: null,
        };
    };

    openTermsPage() {
        this.props.navigation.navigate('Terms');
    }

    login() {
        Keyboard.dismiss();

        this.props.loginToAccount({
            email: this.state.login,
            password: this.state.password
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <View style={styles.form}>
                    <TextInput
                        placeholder="Логин"
                        placeholderTextColor="#B6ADAD"
                        style={styles.textInput}
                        onChangeText={(login) => this.setState({login})}
                        value={this.state.login}
                        returnKeyType={"next"}
                        onSubmitEditing={() => { this.passwordTextInput.focus(); }}
                    />
                    <TextInput
                        placeholder="Пароль"
                        placeholderTextColor="#B6ADAD"
                        style={styles.textInput}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        secureTextEntry={true}
                        ref={(input) => { this.passwordTextInput = input; }}
                        returnKeyType={"go"}
                        onSubmitEditing={() => { this.login() }}
                    />

                    <Button
                        label='Войти'
                        isDisable={this.props.isDisableLoginButton}
                        login={this.login.bind(this)}
                    />
                    
                    <View style={styles.terms}>
                        <Text style={styles.terms_text}>Нажимая войти, вы подверждаете ознакомление с</Text>
                        <TouchableOpacity
                            onPress={this.openTermsPage.bind(this)}
                        >
                            <Text style={[styles.terms_text, styles.terms_link]}>пользовательским соглашением</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    form: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 60,
    },
    textInput: {
        height: 40,
        borderWidth: 1.5,
        width: '90%',
        color: '#B6ADAD',
        borderBottomColor: '#FF0089',
        borderTopColor: '#FF0089',
        borderLeftColor: '#FF0089',
        borderRightColor: '#FF0089',
        fontSize: 16,
        borderRadius: 20,
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    terms: {
        width: '90%',
        display: 'flex',
        alignItems: 'center',
    },
    terms_text: {
        fontSize: 12,
        fontWeight: '500',
        color: '#808080',
        lineHeight: 18,
    },
    terms_link: {
        color: '#FF0089',
    },
});

const mapStateToProps = state => {
    return {
        isDisableLoginButton: state.users.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginToAccount: (data) => {
            dispatch(login(data))
                .then(function success (data) {
                    if (data.payload) {
                        return Alert.alert(JSON.stringify(data.payload.data));
                    }
                    return Alert.alert(JSON.stringify(data.error.request.response))
                });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);