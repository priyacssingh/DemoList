import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../lib/normalize';

const Styles = StyleSheet.create({
  flatList: {
    flex:1
  },
  item: {
    marginTop: hp('3%'),
    flexDirection: 'row',
  },
  justify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('85%'),
  },
  title: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginLeft: wp('5%'),
  },
  imageFont: {
    fontSize: hp('3%'),
    opacity: 0.7,
    color: 'white',
    alignSelf: 'center',
    marginLeft: wp('5%'),
  },
})

export default Styles;