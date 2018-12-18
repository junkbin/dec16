import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },

    bgfy : {
        ...Platform.select({
            'android' : {
               backgroundColor: 'tomato' 
            },

            'ios' : {
                backgroundColor: 'royalblue'
            }
        })
    },

    textify : {
        ...Platform.select({
            android: {
                color : 'ghostwhite',
                fontSize : 50,
                fontFamily : 'cursive'
            },

            ios : {
                color : 'green',
                fontSize : 40,
                fontStyle: 'italic', 
                fontFamily: "Helvetica"
            }
        })
    }

});

export {styles};