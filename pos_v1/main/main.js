'use strict';

//TODO: 请在该文件中实现练习要求并删除此注释
'use strict';
function main() {
    var Item=[];

    Item=getItem(barcodeItem);

    goodItem=getGoodItem(Item);

    Item=getItemPrice(Item);

    var allPrice=getAllPrice(Item);

    var allReducePrice=getAllReducePrice(Item);

    var result="***<没钱赚商店>收据***";
    for()
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
function getItem(barcodeArry) {
    var Item_arry=[];
    for(var i=0;i<barcodeArry.length;i++){
        if(barcodeArry[i].length>barcodeArry[0].length) {
            barcodeArry[i].split('-');
            var ware=new Object();
            ware.barcode=barcodeArry[i][0];
            ware.count=barcodeArry[i][1];
            Item_arry.push(ware);
            barcodeArry.splice(i,1);
        }
    }
    for(var j=0;j<barcodeArry.length;j++){
        for(var k=0;k<Item_arry.length;k++){
            if(barcodeArry[j]===Item_arry.[k].barcode){
                Item_arry.[k].count++;
            }
            else{
                Item_arry.push({barcode:barcodeArry[j],count:1});
            }
        }

    }
    return Item_arry;
}      // 计算每个商品的购买数量，并建立一个对象数组
function getGoodItem(itemArry) {
    var allItem=loadAllItems();
    var promotions=loadPromotions();
    for(var i=0;i<itemArry.length;i++){
        for(j=0;j<allItem.length;j++) {
            if (itemArry[i].barcode===allItem[j].barcode){
                itemArry[i].name=allItem[j].name;
                itemArry[i].unit=allItem[j].unit;
                itemArry[i].price=allItem[j].price;
                itemArry[i].reduce_count=0;
                itemArry[i].reducePrice=0;
            }
        }
    }
    for(var k=0;k<itemArry.length;k++){
        for(var y=0;y<promotions[barcodes].length;k++){
            if (itemArry[k]===promotions[barcodes][y]&&itemArry[k].count>2){
                itemArry[k].count=itemArry.count-1;
                itemArry[k].reduce_count=1;
            }
        }

    }
    return itemArry;
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
        {
            type: 'BUY_TWO_GET_ONE_FREE',
            barcodes: [
                'ITEM000000',
                'ITEM000001',
                'ITEM000005'
            ]
        }
    ];
}
