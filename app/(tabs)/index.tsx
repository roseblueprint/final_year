import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const recentSearch = ["Hexagon", "Friconazole", "Syrop", "Oxitoxine", "Doliprane", "Sinutab"];

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>

      {/* 🔍 Barre de recherche */}
      <View style={styles.searchContainer}>
  {/* Logo à gauche */}
  <Image
    source={require('../../assets/images/logo1.png')}
    style={styles.logo}
  />

  {/* Barre de recherche étendue */}
  <View style={styles.inputWrapper}>
    <Ionicons name="search" size={20} color="#0B82DC" />
    <TextInput
      placeholder="Search Your Drug"
      placeholderTextColor="#666"
      style={styles.searchInput}
    />
    <Ionicons name="camera-outline" size={22} color="#444" />
  </View>

  {/* Icône de profil à droite */}
  <TouchableOpacity onPress={() => router.push('/profile')}>
    <Ionicons name="person-circle-outline" size={30} color="#0B82DC" />
  </TouchableOpacity>
</View>


      {/* 🗺️ Map Placeholder */}
      <Image
        source={require('../../assets/images/logo2.jpg')}
        style={styles.mapImage}
        contentFit="cover"
      />

      {/* 🏥 Pharmacies List */}
      <Text style={styles.sectionTitle}>View Pharmacies around your area</Text>

      <FlatList
        data={[1, 2, 3]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => (
          <View style={styles.pharmacyCard}>
            <Image
              source={require('../../assets/images/logo2.jpg')}
              style={styles.pharmacyImage}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.pharmacyName}>Royal Pharmacies</Text>
              <Text style={styles.pharmacyDetails}>📍 Buea, Small soppo</Text>
              <Text style={styles.pharmacyDetails}>🕒 Monday to Monday | 7 am - 7 pm</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.phoneNumber}>📞 671-584-233</Text>
              <TouchableOpacity>
                <Text style={styles.viewDrug}>View drugs</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Text style={styles.viewAll}>View all nearby</Text>

      {/* 🕵️ Recent Search */}
      <Text style={styles.sectionTitle}>Recent search</Text>
      <View style={styles.searchTags}>
        {recentSearch.map((item, index) => (
          <Text key={index} style={styles.searchTag}>{item}</Text>
        ))}
      </View>

      {/* 🕐 Update drug notification */}
      <View style={styles.noticeContainer}>
        <Text style={styles.noticeText}>You haven’t Updated any drugs yet</Text>
        <TouchableOpacity>
          <Text style={styles.noticeLink}>Date Drug Now</Text>
        </TouchableOpacity>
      </View>

      {/* 📱 Bottom Navigation Bar */}
      {/* <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomTab}>
          <Ionicons name="qr-code-outline" size={22} />
          <Text>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}>
          <Ionicons name="medkit-outline" size={22} />
          <Text>Pharmacies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.bottomTab, styles.activeTab]}>
          <Ionicons name="home" size={22} color="#0B82DC" />
          <Text style={{ color: '#0B82DC' }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}>
          <Ionicons name="alarm-outline" size={22} />
          <Text>Reminder</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}>
          <Ionicons name="document-text-outline" size={22} />
          <Text>Documents</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 10, backgroundColor: '#fff' },
  searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 2,
  paddingVertical: 0,
  backgroundColor: '#fff',
  marginHorizontal: 10,
  borderRadius: 12,
},

logo: {
  width: 30,
  height: 30,
  resizeMode: 'contain',
  marginRight: 8,
},

inputWrapper: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#f2f2f2',
  borderRadius: 30,
  paddingHorizontal: 10,
  paddingVertical: 6,
  marginRight: 10,
},

searchInput: {
  flex: 1,
  fontSize: 15,
  marginHorizontal: 8,
  color: '#000',
},

profileIcon: {
  marginLeft: 8,
},

  mapImage: {
    height: 180,
    width: '100%',
    resizeMode: 'cover',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 10,
    marginTop: 10
  },
  pharmacyCard: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    borderRadius: 12,
    alignItems: 'flex-start'
  },
  pharmacyImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  pharmacyName: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2
  },
  pharmacyDetails: {
    fontSize: 12,
    color: '#555'
  },
  phoneNumber: {
    fontSize: 12,
    color: '#333',
    marginBottom: 5
  },
  viewDrug: {
    color: '#0B82DC',
    textDecorationLine: 'underline',
    fontSize: 12
  },
  viewAll: {
    color: '#0B82DC',
    textAlign: 'right',
    marginRight: 15,
    fontSize: 12
  },
  searchTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    marginTop: 5
  },
  searchTag: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    paddingVertical: 4,
    margin: 4,
    borderRadius: 20,
    fontSize: 12
  },
  noticeContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  noticeText: {
    fontSize: 12,
    color: '#777'
  },
  noticeLink: {
    color: '#0B82DC',
    fontSize: 13,
    fontWeight: 'bold'
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff'
  },
  bottomTab: {
    alignItems: 'center'
  },
  activeTab: {
    borderTopColor: '#0B82DC',
    borderTopWidth: 2,
    paddingTop: 5
  }
});
