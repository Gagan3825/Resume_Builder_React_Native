import { View, Text, Image, ImageProps, ScrollView, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
// import { ScrollView } from 'react-native/Libraries/Components/ScrollView/ScrollView'
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';




const Resume = ({ navigation, route }) => {
  let obj = route.params
  //  const[uri,setUri] = React.useState(props.source?.uri || undefined)
  const [img, setImg] = useState('https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change.jpg')
  const [img1, setImg1] = useState('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80')

  const pick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setImg(image.path)
    });

  };
  const pick2 = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 100,
      cropping: true
    }).then(image => {
      console.log(image)
      setImg1(image.path)
    });
  };

  return (
    <ScrollView >
      <View >
        <View>
          <TouchableOpacity onPress={pick2}>
            <Image
              source={{ uri: img1 }}
              style={{ width: responsiveWidth(100), height: responsiveHeight(18) }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: responsiveWidth(10), height: responsiveHeight(10) }}>
          <TouchableOpacity onPress={pick}>
            <Image
              source={{ uri: img }}
              style={{ width: responsiveWidth(32), height: responsiveHeight(17), borderRadius: 60, bottom: 80, marginLeft: 15 }}
            // {...props}
            // source={uri?{uri}:props.source}
            />
          </TouchableOpacity>

        </View >
        <View style={{ width: "100%", height: responsiveHeight(10) }}>
          <Text style={{ marginLeft: 10, fontSize: responsiveFontSize(3), color: 'black' }} >
            {obj.fullName}
          </Text>
          <Text style={{ marginLeft: 10, fontSize: responsiveFontSize(2) }} >
            {obj.profTitle}🧑‍🎓
          </Text>

        </View>
        <View>
          <Text style={{ marginLeft: 10, fontSize: responsiveFontSize(3), color: 'black' }} >
            Bio:-
          </Text>
          <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 20, width: '100%', height: responsiveHeight(10) }} >
            {obj.bio}
          </Text>

        </View>
        <View >
          <Text style={{ fontSize: responsiveFontSize(3), color: "#e69456", textDecorationLine: 'underline', marginLeft: 10, top: 10 }} onPress={() => { ToastAndroid.showWithGravity("Contact", ToastAndroid.SHORT, ToastAndroid.CENTER,) }}>Contact Info</Text>
        </View>
        <View style={{ width: "100%", height: responsiveHeight(15), top: 10 }}>

          <Text style={{ marginLeft: 20, fontSize: responsiveFontSize(2), color: 'black' }} >
            PhoneNo:-  {obj.phoneNo}📳
          </Text>
          <Text style={{ marginLeft: 20, fontSize: responsiveFontSize(2), color: 'black', top: 10 }} on>
            Email:-  {obj.email}
          </Text>
          <Text style={{ marginLeft: 20, fontSize: responsiveFontSize(2), color: 'black', top: 20 }} on>
            Website:-  {obj.website}
          </Text>
        </View>

        <View >
          <Text style={{ fontSize: responsiveFontSize(3), color: "#e69456", textDecorationLine: 'underline', marginLeft: 10, top: 10 }} >Skills & Hobbies</Text>
        </View>
        <View style={{ width: "100%", height: responsiveHeight(12), top: 10 }}>

          <Text style={{ marginLeft: 20, fontSize: responsiveFontSize(2), color: 'black', }} L>
            Skills:-  {obj.skill}
          </Text>
          <Text style={{ marginLeft: 20, fontSize: responsiveFontSize(2), color: 'black', top: 10 }} on>
            Hobbies:-  {obj.hobby}
          </Text>
         
        </View>


        

       
          <View >
            <Text style={{ fontSize: responsiveFontSize(3), color: "#e69456", textDecorationLine: 'underline', marginLeft: 10 }}>Education Info</Text>
          </View>
          <View style={{ width: "100%", height: responsiveHeight(12) }}>
            <Text style={{ marginLeft: 20, fontSize: responsiveFontSize(2), color: 'black' }} >
              Education:-  {obj.edudetail}
            </Text>
            <Text style={{ marginLeft: 20, fontSize: responsiveFontSize(2), color: 'black', top: 10 }} >
              College:-  {obj.collegeName}
            </Text>
            <Text style={{ marginLeft: 20, fontSize: responsiveFontSize(2), color: 'black', top: 20 }} >
              Cgpa:-  {obj.cgpa}
            </Text>
           
          </View>

          <View style={{top:10}} >
            <Text style={{ fontSize: responsiveFontSize(3), color: "#e69456", textDecorationLine: 'underline', marginLeft: 10 }}>Experience
            </Text>
          </View>
          <View style={{ width: "100%", height: responsiveHeight(20),top:10 }}>
            <Text style={{ marginLeft: 20, fontSize: responsiveFontSize(2), color: 'black' }} >
            Company:-  {obj.company}
            </Text>
            <Text style={{ marginLeft: 20, fontSize: responsiveFontSize(2), color: 'black', top: 10 }} >
            Job-Title:-  {obj.jobTitle}
            </Text>
            <Text style={{ marginLeft: 20, fontSize: responsiveFontSize(2), color: 'black', top: 20 }} >
            Start year:-  {obj.jobStartDate}
            </Text>
            <Text style={{ marginLeft: 20, fontSize: responsiveFontSize(2), color: 'black', top: 30 }} >
            End year:-  {obj.jobEndDate}
            </Text>
           
          </View>
          

        <View>
          <TouchableOpacity
          style={{justifyContent:'center',alignItems:'center'}}
          onPress={()=>{Linking.openURL('https://www.linkedin.com/in/gagandeep-singh-060187209/')}}
          >
         <Ionicons name='ios-logo-linkedin' size={40} color="blue" />


          </TouchableOpacity>
          <TouchableOpacity
          style={{justifyContent:'center',alignItems:'center'}}
          onPress={()=>{Linking.openURL('https://github.com/Gagan3825')}}
          >
         <Ionicons name='ios-logo-github' size={40} color="black" />


          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  personal: {
    top: 10,
    height: responsiveHeight(5),
    //   backgroundColor:"red"
  },
})

export default Resume