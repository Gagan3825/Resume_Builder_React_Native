import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Button, ToastAndroid } from 'react-native'
import { useState } from 'react'
import React from 'react'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import Ionicons from 'react-native-vector-icons/Ionicons';
const Details = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    avatarUrl: '',
    profTitle: '',
    bio:'',
    phoneNo: '',
    email: '',
    website: '',
    company: '',
    jobTitle: '',
    jobStartDate: '',
    jobEndDate: '',
    experience: '',
    profSummary: '',
    certificate: '',
    collegeName: '',
    edudetail: '',
    cgpa: '',
    skill: '',
    hobby: ''
  });
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', height: "100%" }}>
        <View style={styles.mainconatier}>
          <Text style={styles.textconatier}>Resume</Text>
        </View>
        <View style={styles.personal}>
          <Text style={{ fontSize: responsiveFontSize(3), color: "#e69456", textDecorationLine: 'underline', marginLeft: 10 }}>Personal Info</Text>
        </View>
        <View style={styles.personalinfo}>

          <TextInput placeholder='Enter your full name'
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              borderRadius: 15,
              // borderColor:'yellow',
              padding: 10,
            }}
            value={userDetails.fullName}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'fullName': e }
              }));
            }}

          />
          <TextInput placeholder='Enter designation '
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              borderRadius: 15,
              padding: 10,
            }}
            value={userDetails.profTitle}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'profTitle': e }
              }));
            }}

          />
          <TextInput placeholder='Enter your Bio '
          editable
          multiline
          numberOfLines={4}
          maxLength={100}
            style={{
              height: 80,
              margin: 12,
              borderWidth: 1,
              borderRadius: 15,
              padding: 10,
              
            }}
            value={userDetails.bio}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'bio': e }
              }));
            }}

          />

        </View>
        <View style={styles.contact}>
          <Text style={{ fontSize: responsiveFontSize(3), color: "#e69456", textDecorationLine: 'underline', marginLeft: 10 }} onPress={() => { ToastAndroid.showWithGravity("Contact", ToastAndroid.SHORT, ToastAndroid.CENTER,) }}>Contact Info</Text>
        </View>
        {/*  */}
        <View style={styles.personalinfo}>

          <TextInput placeholder='Enter your number'
           keyboardType="numeric"
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              borderRadius: 15,
              padding: 10,
            }}
            value={userDetails.phoneNo}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'phoneNo': e }
              }));
            }}


          />
          <TextInput placeholder='Enter your email '
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              borderRadius: 15,
              padding: 10,
            }}
            value={userDetails.email}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'email': e }
              }));
            }}

          />
          <TextInput placeholder='Enter website name'
            style={{
              height: 40,
              margin: 12,
              borderRadius: 15,
              borderWidth: 1,
              padding: 10,
            }}
            value={userDetails.website}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'website': e }
              }));
            }}

          />

        </View>

        <View style={styles.contact}>
          <Text style={{ fontSize: responsiveFontSize(3), color: "#e69456", textDecorationLine: 'underline', marginLeft: 10 }}>Skills & Hobbies</Text>
        </View>

        <View style={styles.personalinfo}>

          <TextInput placeholder='Skills:-Java,c++..'
            style={{
              height: 40,
              margin: 12,
              borderRadius: 15,
              borderWidth: 1,
              padding: 10,
            }}
            value={userDetails.skill}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'skill': e }
              }));
            }}


          />
          <TextInput placeholder=' Hobbies '
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              borderRadius: 15,
              padding: 10,
            }}
            value={userDetails.hobby}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'hobby': e }
              }));
            }}


          />
        </View>
        <View style={styles.contact}>
          <Text style={{ fontSize: responsiveFontSize(3), color: "#e69456", textDecorationLine: 'underline', marginLeft: 10 }}>Education Info</Text>
        </View>
        <View style={styles.personalinfo}>

          <TextInput placeholder='Current edu'
            style={{
              height: 40,
              margin: 12,
              borderRadius: 15,
              borderWidth: 1,
              padding: 10,
            }}
            value={userDetails.edudetail}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'edudetail': e }
              }));
            }}


          />
          <TextInput placeholder='College name '
            style={{
              height: 40,
              margin: 12,
              borderRadius: 15,
              borderWidth: 1,
              padding: 10,
            }}
            value={userDetails.collegeName}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'collegeName': e }
              }));
            }}

          />
          <TextInput placeholder='Cgpa'
           keyboardType="numeric"
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              borderRadius: 15,
              padding: 10,
            }}
            value={userDetails.cgpa}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'cgpa': e }
              }));
            }}


          />

        </View>
        <View style={styles.contact}>
          <Text style={{ fontSize: responsiveFontSize(3), color: "#e69456", textDecorationLine: 'underline', marginLeft: 10 }}>Experience</Text>
        </View>
        <View style={styles.personalinfo}>

          <TextInput placeholder='Job-Title'
            style={{
              height: 40,
              margin: 12,
              borderRadius: 15,
              borderWidth: 1,
              padding: 10,
            }}
            value={userDetails.jobTitle}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'jobTitle': e }
              }));
            }}


          />
          <TextInput placeholder='Company'
            style={{
              height: 40,
              margin: 12,
              borderRadius: 15,
              borderWidth: 1,
              padding: 10,
            }}
            value={userDetails.company}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'company': e }
              }));
            }}

          />
          <TextInput placeholder='Start year'
           keyboardType="numeric"
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              borderRadius: 15,
              padding: 10,
            }}
            value={userDetails.jobStartDate}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'jobStartDate': e }
              }));
            }}


          />
           <TextInput placeholder='End year'
           keyboardType="numeric"
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              borderRadius: 15,
              padding: 10,
            }}
            value={userDetails.jobEndDate}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'jobEndDate': e }
              }));
            }}


          />

        </View>
        <View style={{
          height: responsiveHeight(7), alignItems: 'center', backgroundColor: "#8CBBF1", marginTop: 10, borderRadius: 20, margin: 100
        }}>
          <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => navigation.navigate('Resume', userDetails)}
          >
            <Text style={{ fontSize: responsiveFontSize(3), color: 'white', textAlign: 'center' }}>Genrate</Text>

          </TouchableOpacity>
        </View>


      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  mainconatier: {
    backgroundColor: "#8CBBF1",
    height: responsiveHeight(8),
  },
  textconatier: {
    textAlign: 'center',
    top: 10,
    fontSize: responsiveFontSize(4),
    color: "#ffffff"
  },
  personal: {
    top: 10,
    height: responsiveHeight(5),
    //   backgroundColor:"red"
  },
  personalinfo: {
    top: 10
  },
  contact: {
    marginTop: 20
  }
})

export default Details