import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../lib/normalize';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  button: {
    justifyContent: 'space-around',
    flexDirection:'row'
  },
  image: {
    backgroundColor: 'white',
    width: wp('4%'),
    height: hp('2.5%'),
    borderRadius: hp('1.5%'),
    alignSelf: 'center',
  },
  title: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  titleView: {
    flexDirection: 'row',
    marginTop: hp('3%'),
  },
  font: {
    color: 'black',
    fontSize: hp('1.7%'),
  },
  imageFont: {
    fontSize: hp('6%'),
    opacity: 0.7,
    marginLeft: wp('5%'),
    color: 'white',
  },
  left: {
    marginLeft: wp('25%'),
    flexDirection: 'row',
    alignSelf:'center'
  },
  line: {
    height: 1,
    backgroundColor: 'white',
    opacity: 0.3,
    marginTop: hp('3%')
  },
  value: {
    marginVertical: hp('4%'),
    alignSelf:'center'
  }
})

export default Styles;