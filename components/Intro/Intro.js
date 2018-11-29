import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Form, Input, Label } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, ScrollView, Image, Dimensions } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { Color } from '@common'


export default class Intro extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })


    render() {

        return (
            <View style={styles.container}>
                <View style={styles.headerArea}>
                    <Text style={styles.headerText}>The Wall Poster</Text>
                </View>
                {/* <View style={styles.introImg}>
                    <Image source={require('../images/intro-img.png')} />
                </View> */}
                <View style={styles.caroselArea}>
                    <SwiperFlatList
                        paginationDefaultColor={Color.greyDot}
                        paginationActiveColor={Color.primary}
                        autoplay={false}
                        autoplayDelay={4}
                        autoplayLoop
                        index={0}
                        showPagination
                    >
                        <View style={styles.carasolBox}>
                            <Image style={styles.introImg} source={require('../images/intro-img.png')} />
                            <Text style={styles.carasolTilte}>Sign up</Text>
                            <Text style={styles.carasolTxt}>Let us know who you are?</Text>
                        </View>
                        <View style={styles.carasolBox}>
                            <Image style={styles.introImg} source={require('../images/intro-img.png')} />
                            <Text style={styles.carasolTilte}>Wall</Text>
                            <Text style={styles.carasolTxt}>Your favorite place to see job posters.</Text>
                        </View>
                        <View style={styles.carasolBox}>
                            <Image style={styles.introImg} source={require('../images/intro-img.png')} />
                            <Text style={styles.carasolTilte}>Support</Text>
                            <Text style={styles.carasolTxt}>We are always there for you!</Text>
                        </View>                        
                    </SwiperFlatList>
                </View>
                <View style={styles.footerArea}>
                    <View>
                        <TouchableOpacity style={styles.continueBtn} onPress={() => this.props.navigation.navigate('Index')}>
                            <Text style={styles.continueTxt}>CONTINUE</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={styles.footerLinks}>
                        <Text style={styles.footerTxt}>Already a user?</Text>
                        <TouchableOpacity>
                            <Text style={styles.linkTxt}>Log into App</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerArea: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 30,
    },
    headerText: {
        fontSize: 42,
        color: Color.primary,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    introImg: {        
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:20,
    },
    caroselArea: {
        flex:6,
        alignItems:'center',
    },
    footerArea: {
        flex:3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    continueBtn: {
        backgroundColor: Color.primary,
        width: 270,
        borderRadius: 40,
        paddingVertical: 12,
        marginBottom: 12,
        elevation: 2,
    },
    continueTxt: {
        color: Color.white,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    footerLinks: {
        flexDirection: 'row',
    },
    footerTxt: {
        fontSize: 16,
    },
    linkTxt: {
        color: Color.primary,
        paddingLeft: 10,
        fontSize: 16,
    },
    child: {
        // height: height * 0.5,
        // width,
        justifyContent: 'center',
    },
    text: {
        // fontSize: width * 0.5,
        textAlign: 'center',
    },
    carasolBox:{
        alignItems:'center',
        marginHorizontal:30,
        width:Dimensions.get('window').width - 60,        
    },
    carasolTilte:{
        fontSize:22,
        fontWeight:'bold',
        color:Color.black,
        textAlign:'center',
    },
    carasolTxt:{
        fontSize:14,        
        color:'#545454',
        textAlign:'center',
        flexWrap: 'wrap',
    },
});
