import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import art from './assets/art.png';
import mile from './assets/mile.png';
import pier from './assets/pier.png';
import water from './assets/water.png';
import willis from './assets/willis.png';
import * as WebBrowser from 'expo-web-browser';
import Button from './Button';

function ArtInstituteOfChicago(navigation) {
  const url = "https://www.artic.edu/"
  return(
    <View style={styles.container}>
      <Image source={art} style={styles.image} />
      <Button info style={styles.button} onPress = {() => WebBrowser.openBrowserAsync(url)}>
        More Information
      </Button>
    </View>
  )
}

function MagnificentMile(navigation) {
  const url = "https://www.themagnificentmile.com/"
  return (
    <View style={styles.container}>
      <Image source={mile} style={styles.image} />
      <Button info style={styles.button} onPress = {() => WebBrowser.openBrowserAsync(url)}>
        More Information
      </Button>
    </View>
  )
}

function NavyPier(navigation) {
  const url ="https://navypier.org/"
  return (
    <View style={styles.container}>
      <Image source={pier} style={styles.image} />
      <Button info style={styles.button} onPress = {() => WebBrowser.openBrowserAsync(url)}>
        More Information
      </Button>
    </View>
  )
}

function WaterTower(navigation) {
  const url ="https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html"
  return (
    <View style={styles.container}>
      <Image source={water} style={styles.image} />
      <Button info style={styles.button} onPress = {() => WebBrowser.openBrowserAsync(url)}>
        More Information
      </Button>
    </View>
  )
}

function WillisTower(navigation) {
  const url = "https://www.willistower.com/"
  return (
    <View style={styles.container}>
      <Image source={willis} style={styles.image} />
      <Button info style={styles.button} onPress = {() => WebBrowser.openBrowserAsync(url)}>
        More Information
      </Button>
    </View>
  )
}
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="ArtInstituteOfChicago">
        <Drawer.Screen name="Art Institute of Chicago" component={ArtInstituteOfChicago} />
        <Drawer.Screen name="Magnificent Mile" component={MagnificentMile} />
        <Drawer.Screen name="Navy Pier" component={NavyPier} />
        <Drawer.Screen name="Water Tower" component={WaterTower} />
        <Drawer.Screen name="Willis Tower" component={WillisTower} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 240,
    height: 360,
  }, 
  button: {
    margin: 20,
    padding: 20,
  }
});
