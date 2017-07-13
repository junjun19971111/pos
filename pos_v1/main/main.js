'use strict';
function main() {
    var itemArry = [];

    itemArry = getItem(barcodeItem);

    goodItem = getGoodItem(itemArry);

    itemArry = getItemPrice(itemArry);

    var allPrice = getAllPrice(itemArry);

    var allReducePrice = getAllReducePrice(itemArry);

    var result = "***<没钱赚商店>收据***";

    for (var i = 0; i < itemArry.length; i++) {
        result += '名称：' + itemArry[i].name + '，数量：' + itemArry[i].count + '，单价：' + itemArry[i].price + '(元)，小计：' + itemArry[i].tol_price + '(元)\n';
    }
    result += '----------------------\n';
    result += '总计：' + allPrice + '(元)\n';
    result += '总计：' + allReducePrice + '(元)\n';
    result += '**********************';

    console.log(result);

}
    const barcodeItem = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2.5',
    'ITEM000005',
    'ITEM000005-2',
];
function getItem(arryx) {
    var barcodeArry=arryx;
    var item_arry=[];
    var arry=[];
    for(var i=0;i<barcodeArry.length;i++){
        for(var e=0;e<barcodeArry[i].length;e++) {
            arry=barcodeArry[i];
            if (arry[e].indexOf('-')) {
                var ware=new  Object();
                ware.count=arry[e+1];
                arry.slice(e,2);
                ware.barcode=arry;
                item_arry.push(ware);
            }
        }
    }
    for(var j=0;j<barcodeArry.length;j++){
        for(var k=0;k<item_arry.length;k++){
            if(barcodeArry[j]===item_arry[k].barcode){
                item_arry[k].count++;
            }
            else{
                item_arry.push({barcode:barcodeArry[j],count:1});
            }
        }

    }
    return item_arry;
}      // 计算每个商品的购买数量，并建立一个对象数组
function getGoodItem(itemArry1) {
    var allItem=loadAllItems();
    var promotions=loadPromotions();
    for(var i=0;i<itemArry1.length;i++){
        for(var j=0;j<allItem.length;j++) {
            if (itemArry1[i].barcode===allItem[j].barcode){
                itemArry1[i].name=allItem[j].name;
                itemArry1[i].unit=allItem[j].unit;
                itemArry1[i].price=allItem[j].price;
                itemArry1[i].reduce_count=0;
                itemArry1[i].reducePrice=0;
            }
        }
    }
    for(var k=0;k<itemArry1.length;k++){
        for(var y=0;y<promotions.length;k++){
            if (itemArry1[k]===promotions[y]&&itemArry1[k].count>2){
                itemArry1[k].count=itemArry1[k].count-1;
                itemArry1[k].reduce_count=1;
            }
        }

    }
    return itemArry1;
}   //计算实际购买的商品数量，和节省数量
function getItemPrice(arry) {
    var arry1=arry;
    for(var i=0;i<arry1.length;i++){
        arry1[i].itemPrice=arry1[i].count*arry1[i].price;
        arry1[i].reducePrice=arry1[i].price*arry1[i].reduce_count;
    }
    return arry1;
}    //计算出每一类商品的小计和节省的价格
function  getAllPrice(arry2) {
    var all_price=0;
    for(var i=0;i<arry2.length;i++){
        all_price+=arry2[i].itemPrice;
    }
    return all_price;
}//计算总价
function getAllReducePrice(arry3) {
    var  all_reduce=0;
    for(var i=0;i<arry3.length;i++){
        all_reduce+=arry3[i].reducePrice;
    }
    return all_reduce;
}






function loadAllItems() {
    return [
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }
    ];
}
function loadPromotions() {
    return [
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'
    ];


}
main();
