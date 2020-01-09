import * as reactNavigation from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SplashScreen from '../screens/SplashScreen';
import Search from '../screens/Search';
import UploadPhoto from '../screens/UploadPhoto';
import History from '../screens/History';
import Account from '../screens/Account';
import OnBoarding from '../screens/OnBoarding';
import ListMenu from '../screens/ListMenu';
import Pesanan from '../screens/Pesanan';
import Pembayaran from '../screens/Pembayaran';
import Proses from '../screens/Proses';
import Detail from '../screens/Detail';
import Keranjang from '../screens/Keranjang';
import DetailProses from '../screens/DetailProses';

//export const MenuStack = reactNavigation.StackNavigator(
  //{
    //Menu: {
      //screen: Menu,
      //navigationOptions: {
        //tabBarVisible: true
      //}
    //}
  //},
  //{ headerMode: 'none', navigationOptions: { tabBarVisible: false } }
//);
export const KeranjangStack = reactNavigation.StackNavigator(
  {
    Keranjang: {
      screen: Keranjang,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);


export const DetailStack = reactNavigation.StackNavigator(
  {
    Detail: {
      screen: Detail,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const DetailProsesStack = reactNavigation.StackNavigator(
  {
    DetailProses: {
      screen: DetailProses,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const ProsesStack = reactNavigation.StackNavigator(
  {
    Proses: {
      screen: Proses,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const PembayaranStack = reactNavigation.StackNavigator(
  {
    Pembayaran: {
      screen: Pembayaran,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);


export const PesananStack = reactNavigation.StackNavigator(
  {
    Pesanan: {
      screen: Pesanan,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const ListMenuStack = reactNavigation.StackNavigator(
  {
    ListMenu: {
      screen: ListMenu,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const LoginStack = reactNavigation.StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SplashScreenStack = reactNavigation.StackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const HomeStack = reactNavigation.StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SearchStack = reactNavigation.StackNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const UploadPhotoStack = reactNavigation.StackNavigator(
  {
    UploadPhoto: {
      screen: UploadPhoto,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const HistoryStack = reactNavigation.StackNavigator(
  {
    History: {
      screen: History,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const AccountStack = reactNavigation.StackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

//export const OnBoardingStack = reactNavigation.StackNavigator(
  //{
    //OnBoarding: {
      //screen: OnBoarding,
      //navigationOptions: {
        //tabBarVisible: false
      //}
    //}
  //},
  //{ headerMode: 'none', navigationOptions: { tabBarVisible: false } }
//);

