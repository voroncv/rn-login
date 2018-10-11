import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import SVGImage from 'react-native-remote-svg';

type Props = {};
export default class LoginPage extends Component<Props> {
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
        Alert.alert('LOGIN...');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <SVGImage
                        source={require('../assets/images/logo.svg')}
                        style={styles.logo_icon}
                    />
                    <Text style={styles.logo_title}>Nature inc.</Text>
                </View>
                <View style={{width: '100%', display: 'flex', alignItems: 'center'}}>
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

                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={styles.button}
                        onPress={this.login.bind(this)}
                    >
                        <Text style={styles.button_text}>Войти</Text>
                    </TouchableOpacity>
                    
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
    logo: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 70,
    },
    logo_icon: {
        width: 200,
        height: 200,
    },
    logo_title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
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
        paddingHorizontal: 20,
    },
    button: {
        marginTop: 20,
        marginBottom: 40,
        backgroundColor: '#FF0089',
        width: '90%',
        padding: 15,
        borderRadius: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
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
