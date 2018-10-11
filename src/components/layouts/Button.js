import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type Props = {};
export default class Button extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableOpacity
                disabled={this.props.isDisable}
                activeOpacity={0.6}
                style={[styles.button, { opacity: this.props.isDisable ? 0.6 : 1 }]}
                onPress={this.props.login}
            >
                <Text style={styles.button_text}>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
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
        justifyContent: 'center'
    },
    button_text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});
