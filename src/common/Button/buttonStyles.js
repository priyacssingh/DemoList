import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../lib/normalize';

const Styles = StyleSheet.create({
  button: {
    height: hp('7%'),
    width: wp('35%'),
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
  },
  label: {
    fontSize: hp('3%'),
    alignSelf: 'center',
    marginTop: hp('1%'),
    fontWeight: 'bold'
  }
})

export default Styles;