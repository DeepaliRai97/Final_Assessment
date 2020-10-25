import React,{useEffect} from 'react';
import { FlatList,StyleSheet, View,TouchableOpacity } from 'react-native';
import{useSelector,useDispatch} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import Axios from 'axios';
import {setProduct} from '../../store/actions/products';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProductsOverviewScreen = props => {
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
                <TouchableOpacity 
                      style={styles.icon} 
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
                <ProductItem 
                  image={itemData.item.imageUrl} 
                  title={itemData.item.title} 
                  price={itemData.item.price}
                  onViewDetail={()=>{
                  props.navigation.navigate('ProductDetail',{
                  productId:itemData.item.id,
                  productTitle:itemData.item.title,
                  productImage:itemData.item.imageUrl,
                 })
              }} 
                onAddToCart={()=>{
                  dispatch(cartActions.addToCart(itemData.item));
                }}/>}
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


export default ProductsOverviewScreen;

 /* const result=
 await fetch('https://preprod.vestigebestdeals.com/api/rest/dynamickittingproductlistwithfiltersortwarehouse',
 {
            method:'POST',
            headers: {
                // the content type header value is usually auto-set
                // depending on the request body
                "Content-Type": "application/json"
              },
            body:JSON.stringify({
                "category_id":13,
                "filter":"",
                "page_num":1,
                "sort":"",
              "customer_id":96,
              "wcode":"DWK,HWH,S71"
            })
        })
       // const jsonResult = await result.json()
        console.log(result);*/
        //var myHeaders = new Headers();
/*myHeaders.append("Content-Type", "application/json");
//myHeaders.append("Cookie", "PHPSESSID=uok6hrpqmnitv99k9gdj74qk66; _cid=09RAmx5Khg1AhVVr");

var raw = JSON.stringify({"category_id":13,"filter":"","page_num":1,"sort":"","customer_id":96,"wcode":"DWK,HWH,S71"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://preprod.vestigebestdeals.com/api/rest/dynamickittingproductlistwithfiltersortwarehouse", requestOptions)
  .then(response => {console.log(response)
      response.text()})
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }*/
   
   /*ProductsOverviewScreen.navigationOptions=navData=>{
    return{
    headerTitle:'All Products',
    headerRight:()=><Icon name="shoppingcart" size={20} onPress={()=>{
      navData.navigation.navigate('Cart')
    }}
    />
    }
}*/
