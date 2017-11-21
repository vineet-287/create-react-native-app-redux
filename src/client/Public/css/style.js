import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    input : {paddingLeft:10, textAlign: 'left', fontWeight:'900', borderColor: '#B2B7B1', borderWidth: 2, borderRadius : 4, marginBottom : 10, color : '#B2B7B1'},
    inputSmall : {paddingLeft:10, marginTop : 20, fontWeight:'900', borderColor: '#B2B7B1', borderWidth: 2, borderRadius : 4, color : '#B2B7B1', width : ((width * 41) / 100)}, 
    logoMain : {alignSelf: 'center', width:(width - 50)}, 
});

export default styles;