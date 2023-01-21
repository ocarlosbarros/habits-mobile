import './src/lib/dayjs';

import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';

import {
    useFonts,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
} from '@expo-google-fonts/inter';

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold
    });

    if (!fontsLoaded) {
        return (
            <Loading />
        );
    }

  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  );
}
