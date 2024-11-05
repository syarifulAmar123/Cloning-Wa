import React, {useState} from 'react';
import {View, Button, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Masuk = () => {
  const [photo, setPhoto] = useState(null);

  const selectImage = () => {
    // Buka galeri perangkat
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        // Set image ke state
        setPhoto(response.assets[0].uri);
      }
    });
  };

  const takePhoto = () => {
    // Buka kamera perangkat
    launchCamera({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        // Set image ke state
        setPhoto(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {photo && (
        <Image
          source={{uri: photo}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
      )}
      <Button title="Select from Gallery" onPress={selectImage} />
      <Button title="Take a Photo" onPress={takePhoto} />
    </View>
  );
};

export default Masuk;
