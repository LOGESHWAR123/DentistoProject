import React from 'react';
import { Modal, View, Image, Button, Text, StyleSheet, Dimensions } from 'react-native'; // Import Dimensions
import Colors from '../Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width; // Get the device's window width

const AppointmentCard = ({ name, role, location, image }) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          height: windowWidth * 0.4, // Set the card height relative to the window width
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: 10,
          borderWidth: 1,
          margin: 5,
          marginBottom: 10,
          borderColor: Colors.gray,
        }}
      >
        <View
          style={{
            width: '35%', // Use percentage-based width for the image container
            backgroundColor: Colors.primary,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={{ uri: image }}
            style={{ height: '100%', width: '100%', borderRadius: 10 }}
          />
        </View>

        <View style={{ flex: 1, marginLeft: 20, justifyContent: 'space-around', padding: 20 }}>
          <Text style={{ fontSize: windowWidth * 0.04, fontWeight: '500' }}>
            {name}
          </Text>
          <Text style={{ color: Colors.gray }}>{role}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="location-sharp" size={20} color="grey" style={{ marginRight: 5 }} />
            <Text>{location}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 100,
    backgroundColor: Colors.primary,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,
  },
  subcontainer: {
    padding: 15,
  },
});

export default AppointmentCard;
