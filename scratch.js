/* 

BuyAgain:
const item : {
 prop1,
 prop1,
 prop1,
 itemPrice : {
  itemInitialPrice : $...,
  itemLowerLimitPrice : $...,
  itemHigherLimitPrice : $...,
 }
 category : ['' , '' , ''],
 metdata : {
  isAvailable : boolean,
  deliveryTime : Math.random(1-9) days,
 }
}













*/

const item = {
  itemName: 'Amazon Kitchen, Garlic Hummus, 8 oz',
  itemImage:
    'https://images-na.ssl-images-amazon.com/images/I/81enKloyHSL.AC_SL240_.jpg',
  itemRating: '8,454',
  itemPrice: {
    itemInitialPrice: '$2.19',
    itemLowerLimitPrice: '$1.00', //logic
    itemHigherLimitPrice: '$5.00', //logic
  },
  category: ['pantry', 'snacks'],
  metdata: {
    isAvailable: true, //boolean random
    deliveryTime: 'randomNum + days',
  },
};
