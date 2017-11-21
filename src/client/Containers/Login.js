import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../Services/Actions'; 
import { StyleSheet, Text, View, Alert, AppRegistry, TextInput, Image, Dimensions, NavigatorIOS } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, SocialIcon, Divider, Card } from 'react-native-elements';
const {width, height} = Dimensions.get('window');

import styles from '../Public/css/style';
        
class Login extends React.Component {

    static navigationOptions = {
        title: null,
        header: null,
    }; 
    
//    componentDidMount() {
//        Orientation.lockToLandscape();
//    }
    
    constructor(props) {
        super(props);
        
        this.state = {
            title:"Welcome Home",
            email : "",
            password : "",
            errorCallback : false
        }
        
        this.handleInputOnChange = this.handleInputOnChange.bind(this);
    }
 
    handleInputOnChange = (e) => { 
        const { email, password } = this.state;
        
        if(!email){ 
            alert("Please enter email first");
            return;
        }
        
        if(!password){
            alert("Please enter password");
            return;
        }
        
        this.props.pressLogin(email, password);
    }
    
    errorHandler() {
        if (this.state.error) {
          this.formInput.shake()
        }   
    }
    
    componentDidUpdate() {
        
        const { authentication } = this.props;
        const { errorObj } = this.props.authentication;
        const { navigate } = this.props.navigation;
            
        if(typeof errorObj !== "undefined" && !errorObj.status) {
            if(!this.state.errorCallback){
                alert(errorObj.message);
                this.setState({errorCallback : true});
            }
        }  
        
        if(typeof authentication.data !== "undefined" && authentication.data.status) { 
            alert(authentication.data.message);
            //This is to navigate to profile or any other route
//            navigate('Profile', { name: 'Jane' })
        } 
    } 
 
    render() { 
        return (
                <View style={{
                    flex : 1,
                    paddingLeft : 10, 
                    paddingRight : 10,
                    marginTop : 50,
                    flexDirection: 'column',
//                    justifyContent: 'space-around', 
                    alignContent : 'center',
                    alignItems: 'center', width:width, }}>
                        
                        <View style={{flexDirection: 'column', alignSelf:'auto', justifyContent: 'space-between'}}>
                                <FormInput 
                                    placeholder={`Email Address`}  
                                    inputStyle={styles.input} 
                                    underlineColorAndroid ={'transparent'}
                                    ref= {(el) => { this.email = el; }}
                                    onChangeText={(email) => this.setState({email})}
                                    value={this.state.email} />
                                
                                <FormInput 
                                    secureTextEntry={true}
                                    placeholder={`Password`} 
                                    inputStyle={styles.input} 
                                    underlineColorAndroid={'transparent'}
                                    ref= {(el) => { this.password = el; }}
                                    onChangeText={(password) => this.setState({password})}
                                    value={this.state.password} />
                                    
                                        <Button 
                                            raised
                                            onPress={this.handleInputOnChange}
                                            textStyle={{textAlign: 'center'}}
                                            title={`Log in`}
                                            backgroundColor="#D01A33"
                                            fontSize={20}
                                            borderRadius={8}
                                            color={`#fff`}
                                            fontWeight='bold'
                                            marginTop={40}
                                          />
                        </View> 
                </View> 
                        );
            }
        }
        
        
const mapState = (state = {}) => {
      return {...state};
};
  
const mapDispatch = (dispatch) => {
      return {
          pressLogin:(email, password) => {
              dispatch(actions.Login.makeAuthentication(email, password))
          }, 
      }
};
  
export default connect(mapState, mapDispatch)(Login)