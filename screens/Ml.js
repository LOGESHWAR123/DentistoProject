import React ,{useState,useEffect}from 'react';
import { Modal, View, Image, Button,Text,StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
const Ml = () => {

  const [result, setResult] = useState(null);
    const [box, setbox] = useState(null);

    const handleUpload = async () => {
       
      const formData = new FormData();
      formData.append('file', {
        uri: 'https://2.bp.blogspot.com/-Jr6_NU1TGgE/WxFgqdOOi3I/AAAAAAAAIPg/86y69VZyX4QHIVpM5UkuB6K8rqMtcFxIQCLcBGAs/s1600/gold-pre.jpg',
        type: 'image/jpg',
        name: 'image.jpg',
      });
  
      try {
        const response = await axios.post('https://dentiso-api2.onrender.com/docs/', formData, {
          headers: {
              'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        });
        setResult(`data:image/jpeg;base64,${response.data.uri}`);
        setbox(response.data.data);
        console.log("hi");
      } catch (error) {
        console.error('Error detecting objects:', error);
      }
    };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{handleUpload}}>
        <Text>Hi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Ml;
