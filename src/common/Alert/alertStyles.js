import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../lib/normalize';

const Styles = StyleSheet.create({
  modal: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'black',
    alignSelf: 'center',
    width: wp('70%'),
    height: hp('25%'),
    marginTop: hp('35%'),
    borderColor:'white'
  },
  textInput: {
    marginTop: hp('2%'),
    height: hp('7%'),
    width: wp('20%'),
    borderWidth: 1,
    borderColor: 'white',
    width: wp('60%'),
    alignSelf: 'center',
    color:'white'
  },
  title: {
      fontSize: hp('3%'),
      alignSelf: 'center',
      marginTop: hp('1%'),
      fontWeight: 'bold',
      color: 'white'
  },
  button: {
    alignSelf: 'center',
    marginTop: hp('2%'),
    color: 'white'
  }
})

export default Styles;