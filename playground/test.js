var products = [
    {
        title: 'hello',
        price: 400
        
    },
    {
        title: 'buffalo',
        price: 100
        
    },
    {
        title: 'hii',
        price: 300
        
    },
    {
        title: 'hey',
        price: 200
        
    }
]

var output = {}

for (var i = 0; i < products.length; i++) {
    var j = i+1;
    output['merge_title'+j] = products[i].title
    output['merge_price'+j] = products[i].price
}

console.log(output);


var object = {
    merge_title1: 'Maths book',
    merge_author1 : 'RD Sharma',
    merge_publisher1 : 'Dhanpat Rai Publication',
    merge_title2: 'Maths book',
    merge_author2 : 'RD Sharma',
    merge_publisher2 : 'Dhanpat Rai Publication'
}
