import React from 'react';
import {Platform, StyleSheet, View, Text, Button} from 'react-native';
import { white } from 'ansi-colors';

export class Two extends React.Component {

    constructor(props){
        super(props);
        this.state = {"title" : "Hello Universe!!!"};
    }

    render() {
        return (
            <View style={[styles.container, styles.bgfy]}>
                <Text style={[styles.fontify]}>{this.state.title}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },

    bgfy : {
        backgroundColor: 'royalblue'
    },

    fontify : {
        color : 'white', 
        fontSize: 50,
        fontFamily : 'cursive'
    }
});
