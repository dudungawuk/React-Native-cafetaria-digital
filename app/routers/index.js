import { SwitchNavigator } from 'react-navigation';
import { KeranjangStack,DetailStack,DetailProsesStack,AccountStack,ProsesStack,PembayaranStack,PesananStack,SplashScreenStack, LoginStack, ListMenuStack , HomeStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    Keranjang: KeranjangStack,
    Detail :DetailStack,
    DetailProses :DetailProsesStack,
    SplashScreen: SplashScreenStack,
    Account: AccountStack,
    Proses: ProsesStack,
    Pembayaran: PembayaranStack,
    Pesanan: PesananStack,
    List: ListMenuStack,
    Login: LoginStack,
    Home: HomeStack,
    App: Drawer,
    SplashScreen: SplashScreenStack
  },
  {
    initialRouteName: 'DetailProses'
  }
);
