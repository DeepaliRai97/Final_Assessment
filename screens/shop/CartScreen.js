import React from 'react';
import {View,Text,FlatList,Button,StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constant/Colors';
import CartItem from '../../components/shop/CartItem';
const CartScreen = props => {
const cartTotalAmount = useSelector(state=>state.cart.totalAmount);
const cartItems= useSelector(state=>{
    const transformedCartItems = [];
        for (const key in state.cart.item){
            transformedCartItems.push({
                productId: key,
                productTitle:state.cart.items[key].title,
                productPrice:state.cart.items[key].price,
                quantity:state.cart.items[key].quantity,
                sum:state.cart.items[key].sum
            })
        }
        return transformedCartItems;
    })
    console.log(cartTotalAmount)
    console.log(cartItems)
    return (
    <View style={styles.screen}>
        <View style={styles.summary}>
       <Text style={styles.summaryText}>
    Total:{''}
    <Text style={styles.amount}>${cartTotalAmount}</Text>
    </Text>
    
    <Button color={Colors.accent} title = "Order Now" />
        </View>
        <FlatList
        data={cartItems}
        keyExtractor={item => item.productId}
        renderItem={itemData => {console.log(itemData.item)
         return( <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            onRemove={() => {}}
          />)
        }}
      />
       </View>
    )
};

const styles=StyleSheet.create({
    screen:{
        margin:20
    },
    summary:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
        padding:10,
        elevation:5,
        borderRadius:10,
        backgroundColor:'white',
    },
    summaryText:{
        fontFamily:'open-sans-bold',
        fontSize:18,
    },
    amount:{
        color:Colors.accent
    },
});

export default CartScreen;