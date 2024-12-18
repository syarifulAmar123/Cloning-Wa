// import React, {useEffect} from 'react';
// import {View, Text} from 'react-native';
// import {launchCamera} from 'react-native-image-picker';

// const Pindai = () => {
//   useEffect(() => {
//     // Opsi konfigurasi untuk membuka kamera saja
//     const options = {
//       mediaType: 'video', // Hanya ambil gambar (bukan video)
//       cameraType: 'back', // Gunakan kamera belakang
//       quality: 1, // Kualitas gambar maksimal
//       saveToPhotos: false, // Jangan simpan foto langsung ke galeri
//     };

//     // Membuka kamera otomatis setelah layar dimuat
//     launchCamera(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled camera picker');
//       } else if (response.errorCode) {
//         console.log('Camera Error: ', response.errorMessage);
//       } else {
//         console.log('Photo taken:', response.assets[0].uri);
//       }
//     });
//   }, []);

//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: '#001414',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text style={{color: 'white', fontSize: 18}}>Opening Camera...</Text>
//     </View>
//   );
// };

// export default Pindai;

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera'; // Atau bisa menggunakan react-native-vision-camera

const Pindai = () => {
  const [cameraPermission, setCameraPermission] = useState(false);

  useEffect(() => {
    // Meminta izin akses kamera jika belum ada izin
    const checkCameraPermission = async () => {
      const permission = await RNCamera.requestPermissions();
      setCameraPermission(permission === 'authorized');
    };

    checkCameraPermission();
  }, []);

  if (!cameraPermission) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Please grant camera permission</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraFrame}>
        <RNCamera
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001414',
  },
  cameraFrame: {
    width: 300, // Lebar bingkai
    height: 400, // Tinggi bingkai
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden', // Agar kamera hanya terlihat di dalam bingkai
  },
  camera: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default Pindai;
