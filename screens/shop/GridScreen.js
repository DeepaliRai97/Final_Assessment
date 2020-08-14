import React,{useEffect} from 'react';
import { FlatList,StyleSheet,View,TouchableOpacity } from 'react-native';
import{useSelector,useDispatch} from 'react-redux';
import GridItem from '../../components/shop/GridItem';
import * as cartActions from '../../store/actions/cart';
import Axios from 'axios';
import {setProduct} from '../../store/actions/products';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const GridScreen = props => {
    const numcoloums=2;
    const products=useSelector(state=>state.products.availableProducts);
    const dispatch=useDispatch();
    useEffect(()=>{
         initz()
    },[])
    const initz = async () => {
        var raw = {
          category_id: 13,
          filter: '',
          page_num: 1,
          sort: '',
          customer_id: 96,
          wcode: 'DWK,HWH,S71',
        };
    const result = await Axios.post(
          'https://preprod.vestigebestdeals.com/api/rest/dynamickittingproductlistwithfiltersortwarehouse',
          raw,
        );
    console.log(result.data);
    const newArray = result.data.data.items.map((item,index)=>{
    console.log(item);
        return {
            id:item["product_id"],
            ownerId:'u1',
            imageUrl:item["images"],
            title:item.name,
            description:item.description,
            price:item.price,
            specialPrice:item.special_price
            }
        })
        dispatch(setProduct(newArray))
      };
        return (
        <View>
        <TouchableOpacity style={styles.icon}
               onPress={()=>{props.navigation.navigate('Cart')}}>
               <FontAwesome
                name="shopping-cart"
                color="#05375a"
                size={25} 
              />
        </TouchableOpacity>
        <FlatList
              data={products}
              keyExtractor={item=>item.id}
              renderItem={itemData=>
         <GridItem 
              image={itemData.item.imageUrl} 
              title={itemData.item.title} 
              price={itemData.item.price}
              onViewDetail={()=>{
              props.navigation.navigate('ProductDetail',{
              productId:itemData.item.id,
              productTitle:itemData.item.title
             })
          }} 
            onAddToCart={()=>{
                  dispatch(cartActions.addToCart(itemData.item));
          }}/>}
            numColumns={numcoloums}
             />
    </View>
    );
    
};
const styles = StyleSheet.create({
  icon:{
    alignItems:'center',
    textAlign:"center",
    flexDirection:'row',
    marginHorizontal:10,
    justifyContent:'flex-end'
  },
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    color:'#fff8dc'
  },
  item:{
    fontSize:23
  }
})

export default GridScreen;

