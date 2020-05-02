import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import Button from '../../common/Button'
import List from '../../common/List';
import Styles from './listComponentStyles';
import Alert from '../../common/Alert';
import {
  DEPOSIT, WITHDRAW, US_DOLLAR, RECENT_TRANSACTIONS, DATA, REGEX,
  WITHDRAW_ERROR_MSG, INVALID_ERROR_MSG
} from '../../constants/AppConstants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../lib/normalize';

const lastValue = DATA.slice(-1)
class ListComponent extends PureComponent {

  state = {
    data: DATA,
    value: '',
    modalVisible: false,
    total: lastValue[0].total,
  }

  onPress = (label) => {
    const { modalVisible, total } = this.state;
    this.label = label;
    const totalValue = total.substring(1)
    if (totalValue == 0.00 && label == WITHDRAW) {
      alert(WITHDRAW_ERROR_MSG)
    }
    else {
      this.setState({ modalVisible: !modalVisible })
    }
  }

  onChangeText = (text) => {
    let value = text.replace(/[^0-9.]/g, "")
      this.setState({ value })
  }

  onAlertButtonPress = () => {
    const { data, modalVisible, value, total } = this.state;
    if (value != '' && REGEX.test(value)) {
      const date = new Date().toDateString()
      const [, month, day, year] = date.split(' ')
      const mon = month.substring(0, 3)
      const formatteddate = `${mon} ${day}, ${year}`
      const filterTotal = total.substring(1)
      let totalValue = this.label == DEPOSIT ? JSON.parse(filterTotal) + JSON.parse(value) : JSON.parse(filterTotal) - JSON.parse(value)
      totalValue = Math.round((totalValue + Number.EPSILON) * 100) / 100
      const addOrSpentValue = this.label == DEPOSIT ? `$${value}` : `-$${value}`
      const depositData = {
        total: `$${totalValue}`,
        addSpent: addOrSpentValue,
        date: formatteddate,
        name: this.label
      }
      if (this.label == WITHDRAW && totalValue < 0) {
        alert(WITHDRAW_ERROR_MSG)
      }
      else {
        this.setState({ modalVisible: !modalVisible, data: [depositData, ...data], value: '', total: `$${totalValue}` })
      }
    }
    else {
    alert(INVALID_ERROR_MSG)
   }
  }

  onRequestClose = () => {
    this.setState({modalVisible: false})
  }

  render() {
    const { data, value, modalVisible, total } = this.state;
    return (
      <View style={Styles.container}>
        
        <View style={Styles.titleView}>
          <Text style={Styles.imageFont}>{'<'}</Text>
          <View style={Styles.left}>
          <View style={Styles.image}>
            <Text style={[Styles.title, Styles.font]}>{'$'}</Text>
          </View>
          <Text style={[Styles.title,{ marginLeft: wp('2%')}]}>{US_DOLLAR}</Text>
        </View>  
        </View>

        <View style={Styles.line} />

        <View style={Styles.value}>
        <Text style={Styles.title}>{total}</Text>
        <Text style={[Styles.imageFont,{fontSize: hp('2%'),  marginLeft: wp('2%')}]}>{total}</Text>
        </View>

        <View style={Styles.button}>
        <Button
          onPress={() => this.onPress(DEPOSIT)}
          buttonLabel={DEPOSIT}
        />
        <Button
          onPress={() => this.onPress(WITHDRAW)}
          buttonLabel={WITHDRAW}
          />
        </View>

        <View style={[Styles.titleView, {justifyContent: 'space-between'}]}>
          <Text style={[Styles.imageFont, { fontSize: hp('2.5%') }]}>{RECENT_TRANSACTIONS}</Text>
          <View style={[Styles.image,{backgroundColor: 'grey', marginRight: wp('5%')}]}>
            <Text style={[Styles.title, Styles.font, {color: 'white'}]}>{'='}</Text>
          </View>
        </View>
        <List
            data={data}
          />
        <Alert
          modalVisible={modalVisible}
          onRequestClose={this.onRequestClose}
          onPress={this.onAlertButtonPress}
          onChangeText={(text)=>this.onChangeText(text)}
          value={value}
        />
      </View>
    )
  }
}

export default ListComponent;