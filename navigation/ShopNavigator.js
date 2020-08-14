import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductsDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import GridScreen from '../screens/shop/GridScreen';
import SortScreen from '../screens/shop/SortScreen';
import ProfileScreen from '../screens/user/ProfileScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SignIn from '../screens/user/SignIn';
import SignUp from '../screens/user/SignUp';
import FaceBook from '../screens/user/FaceBook';
import EditProfileScreen from '../screens/user/EditProfileScreen';


const AllProducts = createMaterialBottomTabNavigator({
   Sort:{
            screen:SortScreen,
        },
    GridScreen:{
            screen:GridScreen,
        },
    ProductOverview:{
            screen:ProductsOverviewScreen,
            }
         },
    
  )
  const DrawerNavigator = createDrawerNavigator({
    Profile:{
        screen:ProfileScreen,
        navigationOptions:({headerShown:false})
    },
    Sort:{
          screen:AllProducts
      },
    
},
{
    contentComponent:ProfileScreen
}
)
const ProductsNavigator = createStackNavigator({
      Sign: {
        screen:SignIn,
        navigationOptions:({headerShown:false})
    },
      SiUp:
      {screen:SignUp,
       navigationOptions:({headerShown:false})},

       FaceBook:{
           screen:FaceBook
    },
       Profile:{
        screen:DrawerNavigator,
        navigationOptions:({headerShown:false})
    },
       EditProfileScreen:{
        screen:EditProfileScreen,
        navigationOptions:({headerShown:false})
    
    },
       AllProducts:{
        screen:AllProducts,
        navigationOptions:{
            headerShown:false
        }
    },
    Cart:CartScreen,
    ProductDetail:ProductDetailScreen,
},
);

 const SwitchNavigator = createSwitchNavigator({
     GridScreen:{
            screen:ProductsNavigator
        },
     },
)

export default createAppContainer( SwitchNavigator);
