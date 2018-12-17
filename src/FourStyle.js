import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },

    bgfy : {
        backgroundColor : Platform.OS == 'android'?'tomato': 'royalblue'
    },

    textify : {
        color : Platform.OS == 'android'? 'ghostwhite' : 'yellow',
        fontSize: 40,
        fontFamily: Platform.OS == 'android'?'cursive': 'Helvetica',
        fontWeight: Platform.OS == 'android'? 'normal' : 'bold',
        fontStyle : Platform.OS == 'android' ? 'normal' : 'italic'
    }
});

export {styles}