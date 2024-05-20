import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/home';
import Remedies from './components/remedies';
import About from './components/about';
import Contact from './components/contact';
import Search from './components/search';
import mobileAds from 'react-native-google-mobile-ads';


const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    (async () => {
      // Google AdMob will show any messages here that you just set up on the AdMob Privacy & Messaging page
      const { status: trackingStatus } = await requestTrackingPermissionsAsync();
      if (trackingStatus !== 'granted') {
        // Do something here such as turn off Sentry tracking, store in context/redux to allow for personalized ads, etc.
      }

      // Initialize the ads
      await mobileAds().initialize();
    })();
  }, [])
  
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Handle the search query as needed
    console.log(query);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home Remedies" component={Home}
        initialParams={{ title: "Home Remedies"}}
        // options={{
        //   header: ({ navigation, route, options }) => {
        //     return (
        //       <Search
        //         title={route.params.title}
        //         onSearch={handleSearch}
        //       />
        //     );
        //   }
        // }}
        />
        <Stack.Screen name="Remedies" component={Remedies} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

