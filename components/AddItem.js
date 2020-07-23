import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, Button, Alert } from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddPeople from "./AddPeople";

export default class AddItem extends Component {
    constructor(props){
      super(props);
    }

    render() {
        return (
            <View style={styles.menu}>
                <View style={{flexDirection: 'row'}}>

                    <View style={{flex:1, alignItems: 'flex-start'}}>
                        <Icon.Button
                            name="arrow-left"
                            color="white"
                            backgroundColor='#5f8dd3'
                            onPress={() => this.props.updateMenuStatus('AddPeople')}
                        />
                    </View>
                    <View style={{flex:1, alignItems: 'flex-end'}}>
                        <Icon.Button
                            name="undo"
                            color="white"
                            backgroundColor='#5f8dd3'
                            onPress={() => this.props.updateMenuStatus('AddPeople')}
                        />
                    </View>
                </View>
                <View style={styles.title_area}>
                    <Text style={styles.title}> Add item </Text>
                </View>
                <View style={styles.current_value_area}>
                    <Text style={styles.current_value}> $ {this.props.current_value} </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Button
                            title="Finish"
                            color="#999999"
                            onPress={() => this.props.updateMenuStatus('Finish')}
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <Button
                            title="Distribute"
                            color="#467bcc"
                            onPress={
                                this.props.current_value != 0 ?
                                    () => this.props.updateMenuStatus('DistributeItem') :
                                    () => this.props.showAlert('Oh ...', 'Add the value of an item to split!')
                            }
                        />
                    </View>
                </View>

                <View style={{flex:1, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <TouchableHighlight
                                style={styles.digit_button}
                                onPress={() => this.props.updateCurrentValue('1')}
                                underlayColor='#467bcc'>
                                <Text style={styles.digit_button_text}>1</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <TouchableHighlight
                                style={styles.digit_button}
                                onPress={() => this.props.updateCurrentValue('2')}
                                underlayColor='#467bcc'>
                                <Text style={styles.digit_button_text}>2</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <TouchableHighlight
                                style={styles.digit_button}
                                onPress={() => this.props.updateCurrentValue('3')}
                                underlayColor='#467bcc'>
                                <Text style={styles.digit_button_text}>3</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <View style={{flex:1, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <TouchableHighlight
                                style={styles.digit_button}
                                onPress={() => this.props.updateCurrentValue('4')}
                                underlayColor='#467bcc'>
                                <Text style={styles.digit_button_text}>4</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <TouchableHighlight
                                style={styles.digit_button}
                                onPress={() => this.props.updateCurrentValue('5')}
                                underlayColor='#467bcc'>
                                <Text style={styles.digit_button_text}>5</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <TouchableHighlight
                                style={styles.digit_button}
                                onPress={() => this.props.updateCurrentValue('6')}
                                underlayColor='#467bcc'>
                                <Text style={styles.digit_button_text}>6</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <View style={{flex:1, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <TouchableHighlight
                                style={styles.digit_button}
                                onPress={() => this.props.updateCurrentValue('7')}
                                underlayColor='#467bcc'>
                                <Text style={styles.digit_button_text}>7</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <TouchableHighlight
                                style={styles.digit_button}
                                onPress={() => this.props.updateCurrentValue('8')}
                                underlayColor='#467bcc'>
                                <Text style={styles.digit_button_text}>8</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <TouchableHighlight
                                style={styles.digit_button}
                                onPress={() => this.props.updateCurrentValue('9')}
                                underlayColor='#467bcc'>
                                <Text style={styles.digit_button_text}>9</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <View style={{flex:1, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <TouchableHighlight
                            style={styles.digit_button}
                            onPress={() => this.props.updateCurrentValue('0')}
                            underlayColor='#467bcc'>
                            <Text style={styles.digit_button_text}>0</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <TouchableHighlight
                            style={styles.digit_button}
                            onPress={() => this.props.updateCurrentValue('-1')}
                            underlayColor='#467bcc'>
                            <Text style={styles.digit_button_text}>⌫</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }  
}  