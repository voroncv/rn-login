import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import SVGImage from 'react-native-remote-svg';

const width = Dimensions.get('window').width;

type Props = {};
export default class Logo extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.logo}>
                <SVGImage
                    source={require('../../assets/images/logo.svg')}
                    style={styles.logo_icon}
                />
                <Text style={styles.logo_title}>Nature inc.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
    logo_icon: {
        width: width/2,
        height: width/2,
    },
    logo_title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
});
