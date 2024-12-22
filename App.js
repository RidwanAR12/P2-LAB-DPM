import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <Text style={styles.text}>Tugas 2</Text>
      <View style={styles.box2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Warna latar belakang abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // Mengatur tata letak secara horizontal
  },
  text: {
    fontSize: 24,
    color: '#2E5077', // Warna teks biru
    fontWeight: 'bold', // Gaya teks tebal
    marginHorizontal: 100, // Jarak antara teks dan kotak
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#4DA1A9', // Ganti dengan warna yang diinginkan
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#79D7BE', // Ganti dengan warna yang diinginkan
  },
});
