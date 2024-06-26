const mysql=require("mysql2");

//creating connection
const connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"Trendify",
    password:"AmmaAchyu@1389"
})

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database.');
});


//Mens
//men tshirt
let tshirtValues = [
    ['p01', 'https://m.media-amazon.com/images/I/616VuRO-4yL._SY741_.jpg', 'Van Heusen', 'Men’s Cotton Regular Fit T-Shirt', 419.00, 4.0, 120],
    ['p02', 'https://m.media-amazon.com/images/I/51d6wWFtkcL._SY741_.jpg', 'Levi’s', 'Men’s Regular Fit T-Shirt', 434.00, 4.0, 85],
    ['p03', 'https://m.media-amazon.com/images/I/81r473subGL._SX569_.jpg', 'Allen Solly', ' Men’s Regular Fit Polo', 689.00, 4.5, 65],
    ['p04', 'https://m.media-amazon.com/images/I/7157wAr9TSL._SX569_.jpg', 'Trendify Brand Symbol', 'Men’s Cotton Solid Round Neck Regular Fit T-Shirt', 1899.00, 4.8, 45],
    ['p05', 'https://m.media-amazon.com/images/I/7157wAr9TSL._SX569_.jpg', 'Van Heusen', 'Round Neck Regular Fit T-Shirt', 586.00, 4.2, 95],
    ['p06', 'https://m.media-amazon.com/images/I/817Yx8LQG9L._SX569_.jpg', 'Allen Solly', ' Men’s Regular Fit Polo T-Shirt', 709.00, 3.2, 105],
    ['p07', 'https://m.media-amazon.com/images/I/61eu3eZnzxL._SY741_.jpg', 'Allen Solly', 'Men’s Regular Fit Polo T-Shirt', 859.00, 4.6, 75],
    ['p08', 'https://m.media-amazon.com/images/I/71gSQmv5wzL._SX569_.jpg', 'Trendify Branged Logo Tshirt', ' Men’s Cotton Solid V-Neck Regular Fit T-Shirt(Pack of 3)', 579.00, 5.0, 90],
    ['p09', 'https://m.media-amazon.com/images/I/61n-5PCGEzL._SX569_.jpg', 'Van Heusen', 'Men Athleisure V-Neck T-Shirt 100% Combed Cotton Short Tshirt', 584.00, 4.5, 70],
    ['p10', 'https://m.media-amazon.com/images/I/71nOeBHfOSL._SX569_.jpg', 'Van Heusen', 'Men’s Fitted T-Shirt', 599.00, 4.6, 80],
    ['p11', 'https://m.media-amazon.com/images/I/91cVLeQFmcL._SX569_.jpg', 'Allen Solly', 'Men’s Regular Fit Polo', 679.00, 4.0, 50],
    ['p12', 'https://m.media-amazon.com/images/I/51R-cGYnKwL._SX679_.jpg', 'Levi’s', 'Men’s Regular Fit T-shirt with name on it', 549.00, 4.8, 65],
    ['p13', 'https://m.media-amazon.com/images/I/71H+s0szCNL._SX569_.jpg', 'Trendify-Logo Brand', '', 299.00, 4.6, 120],
    ['p14', 'https://m.media-amazon.com/images/I/61txmYAvREL._SY741_.jpg', 'Allen Solly', 'Men’s Regular Fit Polo T-shirt', 689.00, 4.8, 40],
    ['p15', 'https://m.media-amazon.com/images/I/51wg9OrM+oL._SY741_.jpg', 'Jack & Jones', 'Men’s Solid Body Fit Pound Neck T-Shirt', 974.00, 4.6, 110],
    ['p16', 'https://m.media-amazon.com/images/I/61mkNrOCZtL._SX679_.jpg', 'Van Heusen', 'Men’s Regular Fit T-Shirt', 599.00, 4.8, 85],
    ['p17', 'https://m.media-amazon.com/images/I/71b5JCgAR-L._SY741_.jpg', 'Levi’s', 'Men’s Regular Fit Batwing Brand Logo T-shirt', 999.00, 4.6, 55],
    ['p18', 'https://m.media-amazon.com/images/I/71fWDmV-T1L._AC_UL320_.jpg', 'Van Heusen', 'Men’s Regular fit with full hands T-Shirt', 799.00, 4.5, 95],
    ['p19', 'https://m.media-amazon.com/images/I/81htsBjgeZL._AC_UL320_.jpg', 'Plane T-Shirts', 'Men’s Cotton Solid Round Neck Regular Fit T-Shirt(Pack of 2)', 1899.00, 4.8, 60],
    ['p20','https://m.media-amazon.com/images/I/71yLNhXE+pL._AC_UL320_.jpg', 'Allen Solly', 'Men’s Regular Fit T-Shirt', 299.00, 4.6, 892],
];

let insertq1= "INSERT INTO Men_Tshirt(product_id,image,name,description,price,rating,available) VALUES ?";
connection.query(insertq1,[tshirtValues],(err,res)=>{
    if(err){console.log(err)}
    else{
        console.log("inserted into Men_Tshirts Succesfully");
    }
});
//menjeans values;
let JeansValues = [
    ['p01', 'https://m.media-amazon.com/images/I/71--b6NQctL._AC_UL320_.jpg', 'Instafab', 'Plus Men’s Classic Blue Dark-Washed Distressed Pattenerd Jeans', 950.00, 5.0, 123],
    ['p02', 'https://m.media-amazon.com/images/I/616I6SkLi+L._AC_UL320_.jpg', 'Pepe Jeans', 'Men’s Slim Jeans', 2249.00, 3.0, 234],
    ['p03', 'https://m.media-amazon.com/images/I/617+zBC43lL._AC_UL320_.jpg', 'Insta fab', ' Plus Men’s Classic Blue Dark-Washed Jeans', 1349.00, 4.5, 345],
    ['p04', 'https://m.media-amazon.com/images/I/61rzqc8L4rL._AC_UL320_.jpg','Instafab', 'Strechable Jeans', 874.00, 4.8, 456],
    ['p05', 'https://m.media-amazon.com/images/I/81WzIbilc9L._AC_UL320_.jpg', 'Lymio', ' Men Jeans || Men Jeans Pants || Denim Jeans || Baggy Jeans', 749.00, 4.0, 567],
    ['p06', 'https://m.media-amazon.com/images/I/616xchp1ECL._AC_UL320_.jpg', 'Ben Martin', 'Men’s Relaxed Fit Jeans'  , 649.00, 3.5, 678],
    ['p07', 'https://m.media-amazon.com/images/I/71HnyJgHaML._AC_UL320_.jpg', 'Lymio', 'Jeans for Men || Men Jeans || Men Jeans Pant || Dennis Jeans', 749.00, 4.0, 789],
    ['p08', 'https://m.media-amazon.com/images/I/61cxmVOEihL._AC_UL320_.jpg', 'Urbano Fashion', ' Men’s Slim Fit Washed Jeans Strechable', 587.00, 4.0, 890],
    ['p09', 'https://m.media-amazon.com/images/I/51nW98RxOLL._AC_UL320_.jpg', 'Levi’s', 'Men’s Regular Fit Jeans', 1879.00, 4.8, 901],
    ['p10', 'https://m.media-amazon.com/images/I/71OBVZ-69WL._AC_UL320_.jpg', 'Ben Martin', 'Men’s Dennim Cotton Oversized Loose Baggy Jeans Pants', 2699.00, 4.6, 912],
    ['p11', ' https://m.media-amazon.com/images/I/515vox5kqJL._AC_UL320_.jpg', 'Levi’s', 'Men’s 511 Slim Fit Mid Rise Jeans ', 1499.00, 4.5, 123],
    ['p12', 'https://m.media-amazon.com/images/I/51J9+RvQTkL._AC_UL320_.jpg', 'Levi’s', 'Men’s 511 Fit Mid Rise Jeans (Diiferent Colors available)', 1999.00, 4.8, 234],
    ['p13', 'https://m.media-amazon.com/images/I/515olk-XS-L._AC_UL320_.jpg', 'Ben Martin', 'Men’s Dennis Slim Fit Strechable Jeans', 2099.00, 4.6, 345],
    ['p14', 'https://m.media-amazon.com/images/I/51BmO8qmN+L._AC_UL320_.jpg', 'Levis', 'Men Regular Fit Jeans', 1631.00, 4.0, 456],
    ['p15', 'https://m.media-amazon.com/images/I/51aWSQ0TpIL._AC_UL320_.jpg', 'Levis', 'Men’s 512 Slim Tapered Fit Mid Rise Jeans', 1500.00, 4.6, 567],
    ['p16', 'https://m.media-amazon.com/images/I/71k5wTgEsjL._AC_UL320_.jpg', 'Allen Solly', 'Mens Jeans', 1209.00, 3.5, 678],
    ['p17','https://m.media-amazon.com/images/I/71SKt81CVKL._AC_UL320_.jpg', 'NeoStreak','Men’s Slim Fit Stretchable Jeans', 1999.00, 4.8, 789],
    ['p18', 'https://m.media-amazon.com/images/I/61EITRMkVTL._AC_UL320_.jpg', 'Ben Martin', 'Men’s Casual Stretchable Dennis Taperes Fit Carrot Jeans _ 1', 699.00, 4.5, 890],
    ['p19', 'https://m.media-amazon.com/images/I/51VY-VupBYL._AC_UL320_.jpg', 'Levis', 'Men’s 512 Slim Taperes Fit Jeans', 1799.00, 4.0, 901],
    ['p20', 'https://m.media-amazon.com/images/I/81-QIKqa3YL._AC_UL320_.jpg', 'Trendify Brand Symbol', 'Men’s Relaxed Fit Jogger Fit Cotton Blend Jeans', 1299.00, 4.6, 912],
];

let insertq2 = "INSERT INTO Men_Jean(product_id, image, name, description, price, rating, available) VALUES ?";
connection.query(insertq2, [JeansValues], (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Data inserted into Mens_Jeans table.');
    }
});
// men_ethnic wear
let kurtasValues = [
    ['p01', 'https://m.media-amazon.com/images/I/613Az4yA4rL._AC_UL320_.jpg', 'Sanwara', 'Looking Attractive', 629.00, 4.6, 101],
    ['p02', 'https://m.media-amazon.com/images/I/612ozTWjreL._AC_UL320_.jpg', 'Trendify Brand - Symbol', 'Men’s Cotton Embroidered Long Kurta', 995.00, 4.0, 102],
    ['p03', 'https://m.media-amazon.com/images/I/612ozTWjreL._AC_UL320_.jpg', 'Brand', 'Men’s Cotton Embroidered Long Kurta', 1349.00, 4.2, 103],
    ['p04', 'https://m.media-amazon.com/images/I/814z+r1auYL._AC_UL320_.jpg', 'Luxio', 'Kurta for mem Cottaon Blend Long Abstract Printed Striaght Fit', 481.00, 4.5, 104],
    ['p05', 'https://m.media-amazon.com/images/I/71Z23VgN7XL._AC_UL320_.jpg', 'Amazon Brand - Symbol', 'Men’s Cotton Festival Dobby Long Kurta (Regular Fit)', 899.00, 4.6, 105],
    ['p06', 'https://m.media-amazon.com/images/I/81m5HECUVuL._AC_UL320_.jpg', 'Trendify Brand Pink', 'Men’s Cotton Stripes Long Kurta (Regular Fit)', 799.00, 4.5, 106],
    ['p07', 'https://m.media-amazon.com/images/I/814VKVYe80L._AC_UL320_.jpg', '', '', 299.00, 4.8, 107],
    ['p08', 'https://m.media-amazon.com/images/I/514Z1MD5RsL._AC_UL320_.jpg', 'Stripes', 'Cotton Men’s Length Regular Fit', 699.00, 4.6, 108],
    ['p09', 'https://m.media-amazon.com/images/I/516cmPoOWWL._AC_UL320_.jpg', 'Jompers5', 'Men’s Collar Embroidered Kurtas', 229.00, 4.8, 109],
    ['p10', 'https://m.media-amazon.com/images/I/6128j7bxK7L._AC_UL320_.jpg', 'Look Mark', 'Mens Kurta', 549.00, 4.6, 110],
    ['p11', 'https://m.media-amazon.com/images/I/51I6FEF+pfL._AC_UL320_.jpg', 'Sojanya', '(Since 1958, Men’s Cotton Btend Only Long Kurta', 745.00, 4.5, 111],
    ['p12', 'https://m.media-amazon.com/images/I/51q9Ni4v4wL._AC_UL320_.jpg', 'Vastraamy', 'Mens Cotton Linen Kurta- Timeless Elegance For Eid & Ramzan', 1999.00, 4.8, 112],
    ['p13', 'https://m.media-amazon.com/images/I/41ve9HJ2ReL._AC_UL320_.jpg', 'Sojanya', 'Plus (since 1958) Men’s Jacquard Silk Maroon Self Design ONLY...', 1817.00, 4.6, 113],
    ['p14', 'https://m.media-amazon.com/images/I/71xideHCm9L._AC_UL320_.jpg', 'Brand Colors', 'Men’s Cotton Solid Long Kurta (Regular Fit)', 749.00, 4.8, 114],
    ['p15', 'https://m.media-amazon.com/images/I/71HmofNNL-L._AC_UL320_.jpg', 'Amazon Brand', 'Men’s Cotton Regular Fits', 529.00, 4.6, 115],
    ['p16', 'https://m.media-amazon.com/images/I/71XY36s-s7L._AC_UL320_.jpg', 'Light Colors', 'Men’s Cotton COllection', 599.00, 4.8, 116],
    ['p17', 'https://m.media-amazon.com/images/I/61tIN1skQ9L._AC_UL320_.jpg', 'Alles', 'Men’s Rayon , Cotton Regular Festive Embellished Long Kurtas', 749.00, 4.6, 117],
    ['p18', 'https://m.media-amazon.com/images/I/71hIQvpQnQL._AC_UL320_.jpg', 'LightBright', 'Men’s Cotton Collection', 699.00, 4.5, 118],
    ['p19', 'https://m.media-amazon.com/images/I/71CpD7IuKFL._AC_UL320_.jpg', 'Majestic Man', 'Men Cotton Mandarian Collar Ethnic Motifs Printed Long Kurtas', 699.00, 4.8, 119],
    ['p20', 'https://m.media-amazon.com/images/I/61laPAsg1XL._AC_UL320_.jpg', 'Royal Kurta', 'Men’s Cotton A-Line Kurta', 1299.00, 4.6, 120],
];

let insertq3 = "INSERT INTO Men_Ethnic(product_id, image, name, description, price, rating, available) VALUES ?";
connection.query(insertq3, [kurtasValues], (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Data inserted into Men_Ethnic table.');
    }
});
// men_beach wear
let Beach_ShirtValues = [
    ['p01', 'https://m.media-amazon.com/images/I/71v2vIt3p6L._AC_UL320_.jpg', 'Bewakoof', 'Men’s All Oversized Fit Half Sleeve Resort Collar', 969.00, 4.0, 101],
    ['p02',  'https://m.media-amazon.com/images/I/61+3s3sYTWL._AC_UL320_.jpg', 'The Souled Store', 'Officical Daffy Duck:Go Hawali Men Holiday Shirts', 999.00, 5.0, 102],
    ['p03',  'https://m.media-amazon.com/images/I/61Cs63avetL._AC_UL320_.jpg', 'Bewakoof', 'Men’s Shirt', 869.00, 4.8, 103],
    ['p04', 'https://m.media-amazon.com/images/I/61AUBGRXiOL._AC_UL320_.jpg', 'The Souled Store', 'Men Iron Man: Bandana Pattern Half Sleeve Cotton Red MutliColor Shirt', 999.00, 5.0, 104],
    ['p05', 'https://m.media-amazon.com/images/I/81cmoZAsCtL._AC_UL320_.jpg', 'Max', 'Men Printed Half Sleeves Slim Fit Casual Shirt', 599.00, 4.6, 105],
    ['p06', 'https://m.media-amazon.com/images/I/61z2HlQC4xL._AC_UL320_.jpg', 'The Souled Store', 'Official Naruto Short Sleeve Collared Neck Button Down', 1699.00, 4.5, 106],
    ['p07', 'https://m.media-amazon.com/images/I/91nCgK-DFSL._AC_UL320_.jpg', 'Max', 'Men Regular Fit BlockPrint Resort Shirt Kurta', 7459.00, 4.8, 107],
    ['p08', 'https://m.media-amazon.com/images/I/81s3geaiBkL._AC_UL320_.jpg', 'Max', 'Men Boxy Fit Eco Liva Regular Fit Shirt', 899.00, 4.2, 108],
    ['p09', 'https://m.media-amazon.com/images/I/71LQTli8r+L._AC_UL320_.jpg', 'The Souled Store', 'Official Marvel : Cornic Nerd Men And Boys Relaxed Fit Graphics Shirt', 1399.00, 4.8, 109],
    ['p10', 'https://m.media-amazon.com/images/I/718+kv0nDSS._AC_UL320_.jpg', 'The Souled Store', 'Marvel: Comic Pattern Mens and Boys Graphic Printed SHirt', 899.00, 4.6, 110],
    ['p11', 'https://m.media-amazon.com/images/I/61AmeIKmSOL._AC_UL320_.jpg', 'The Souled Store', 'TSS Orginals: Outer Space Mens Regular Fit Graphic Printed Half Shirt', 1299.00, 4.5, 111],
    ['p12', 'https://m.media-amazon.com/images/I/61283r90QTL._AC_UL320_.jpg', 'Bewakoof', 'Men’s Shirt', 1269.00, 4.8, 112],
    ['p13', 'https://m.media-amazon.com/images/I/61tFgNa7QQL._AC_UL320_.jpg', 'The Souled Store', 'TSS Orginals: Dragonfly Distorted Men And Boys elaxed Fit Graphics shirt', 899.00, 4.6, 113],
    ['p14', 'https://m.media-amazon.com/images/I/61LMOVVsdpL._AC_UL320_.jpg', 'U.S. Polo Assn', 'Men’s Regular Fit Solid Pattern (UssHTCoo66_pink _shirt)', 919.00, 4.8, 114],
    ['p15', 'https://m.media-amazon.com/images/I/61+3s3sYTWL._AC_UL320_.jpg', 'The Souled Store', 'Men Shirt', 999.00, 4.6, 115],
    ['p16', 'https://m.media-amazon.com/images/I/71X6VBo+BiL._AC_UL320_.jpg', 'The Souled Store', 'Orginal Indie Tribe Cotton Holiday Shirts for Men', 799.00, 4.8, 116],
    ['p17', 'https://m.media-amazon.com/images/I/91NibXRwjmL._AC_UL320_.jpg', 'Max', 'Printed Regular Fit Resort Shirt', 899.00, 4.6, 117],
    ['p18', 'https://m.media-amazon.com/images/I/71ndvtAvTpL._AC_UL320_.jpg', 'Max', 'Men’s Regular Shirt', 899.00, 4.5, 118],
    ['p19', 'https://m.media-amazon.com/images/I/81mNbO4GKPL._AC_UL320_.jpg', 'Pepe Jeans', 'Men’s regular Fit SHirts', 911.00, 4.8, 119],
    ['p20', 'https://m.media-amazon.com/images/I/71ck2zlPMLL._AC_UL320_.jpg', 'The Souled Store', 'Men Officical Garfied amde to Lounger White Printed Summer Shirt', 1299.00, 4.6, 120],
];

let insertq4 = "INSERT INTO Men_Beach(product_id, image, name, description, price, rating, available) VALUES ?";
connection.query(insertq4, [Beach_ShirtValues], (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Data inserted into Men’s_BeachShirts table.');
    }
});
// men_shorts
let ShortsValues = [
    ['p01', 'https://m.media-amazon.com/images/I/61o+uaJipIL._AC_UL320_.jpg', 'O-Degree', 'Men’s Running Shorts', 880.00, 4.9, 101],
    ['p02', 'https://m.media-amazon.com/images/I/71PKpQcIouL._AC_UL320_.jpg', 'Jokey','Blue Distressed Cargo Denim Shorts for Casual Wear', 664.00, 5.0, 102],
    ['p03', 'https://m.media-amazon.com/images/I/61AqF2yredL._AC_UL320_.jpg', 'UNIONBAY', 'Men Cordova Belted Cargo Short Messenger – Reg and Big & Tall short', 8179.00, 5.0, 103],
    ['p04', 'https://m.media-amazon.com/images/I/41yuKYG9fLL._AC_UL320_.jpg', 'Our Brand', 'Men’s Boy’s 3/4 Cotton Cargo Shorts Pants Casual Loose Regular', 899.00, 4.8, 104],
    ['p05', 'https://m.media-amazon.com/images/I/61LdHDL5dFL._AC_UL320_.jpg', 'InstaFab', 'Plus Men’s Cargo Shorts for Casual Wear | 6 pockets', 1067.00, 4.6, 105],
    ['p06', 'https://m.media-amazon.com/images/I/61MT-FI9PUL._AC_UL320_.jpg', 'UZARUS', 'Men’s Cargo Capri Shorts with 9 pockets', 899.00, 4.5, 106],
    ['p07', 'https://m.media-amazon.com/images/I/5175Rgv+WSL._AC_UL320_.jpg', 'The Indian Ginger Co', 'Men Shorts', 553.00, 4.8, 107],
    ['p08', 'https://m.media-amazon.com/images/I/61RI2uKhX2L._AC_UL320_.jpg', 'Hence', 'Solid Cotton Stretchable Cargo Shorts for men (30, Light Grey)', 649.00, 4.6, 108],
    ['p09', 'https://m.media-amazon.com/images/I/31lnCBlI+aL._AC_UL320_.jpg', 'Krystle', 'Men’s & Boy’s Knee Length Cargo Short (Brown)', 979.00, 4.8, 109],
    ['p10', 'https://m.media-amazon.com/images/I/317oN9pXrHL._AC_UL320_.jpg', 'Only Brand', 'Cotton Stylish Cargo Shorts for Men’s Pista, 5XL', 799.00, 4.6, 110],
    ['p11', 'https://m.media-amazon.com/images/I/61lDUvKkYyL._AC_UL320_.jpg', 'Dennis Lingo', 'Mens Grey Slim Fit Mid Rise Casual Cotton Cargo Shorts', 599.00, 4.5, 111],
    ['p12', 'https://m.media-amazon.com/images/I/41dllPQ+gSL._AC_UL320_.jpg', 'ROL', 'Reoutlook Men’s Cotton Cargo Shorts / Bermuda', 645.00, 4.8, 112],
    ['p13', 'https://m.media-amazon.com/images/I/613U-w3O7wL._AC_UL320_.jpg', 'SAPPER', 'Men’s Cotton Casual Wear Three Fourth Shorts', 1519.00, 4.6, 113],
    ['p14', 'https://m.media-amazon.com/images/I/71fPnQrC+tL._AC_UL320_.jpg', 'A.KARTAVYA GARMENTS', 'Cotton Regular fit Classic Cargo Shorts for Men’s', 919.00, 4.8, 114],
    ['p15', 'https://m.media-amazon.com/images/I/419K6P04ygL._AC_UL320_.jpg', 'Krystle', 'Men’s & Boys Knee Length Cargo Short (Khaki)', 759.00, 4.6, 115],
    ['p16', 'https://m.media-amazon.com/images/I/61NDf6fQZrL._AC_UL320_.jpg', 'Campus Sutra', 'Men’s Denim Shorts for casual Wear | Medium-Wash | Regular Short', 901.00, 4.8, 116],
    ['p17', 'https://m.media-amazon.com/images/I/51SBvaqT6yL._AC_UL320_.jpg', 'V3E', 'Men’s Boys 3/4 Cotton Cargo Short Pants Casual Loose Short', 675.00, 4.8, 117],
    ['p18', 'https://m.media-amazon.com/images/I/31L7IYIyaSL._AC_UL320_.jpg', 'No 1 Brand','Boys Regular fit Stylish Cotton Cargo Shorts', 499.00, 4.5, 118],
    ['p19', 'https://m.media-amazon.com/images/I/61wDhvFfFiL._AC_UL320_.jpg', 'HYPERNATION', 'Green Color Cotton Men’s Shorts (HYPMOO2805)', 899.00, 4.8, 119],
    ['p20', 'https://m.media-amazon.com/images/I/51AbJPaMHNL._AC_UL320_.jpg', 'SAPPER', 'Men’s Cotton Three Fourth shorts with Cargo Pockets', 1599.00, 4.6, 120],
];

let insertq5 = "INSERT INTO Men_Short(product_id, image, name, description, price, rating, available) VALUES ?";
connection.query(insertq5, [ShortsValues], (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Data inserted into Men’s_Shorts table.');
    }
});




// Womens

// women kurta
let q1= `
INSERT INTO Women_kurta (product_id, name, description, price, rating, available, image) VALUES ?
`;

let kurtaValues = [
    ['p01', 'Aurelia', 'Printed Cotton Katha Work Kurti', 1999.00, 4.5, 1, 'https://gaaba.co.in/wp-content/uploads/2024/03/SUBH2756-600x850.jpg'],
    ['p02', 'INDO ERA', 'Cotton Pink Kurti With Katha and Mirror Work', 1499.00, 4.2, 1, 'https://gaaba.co.in/wp-content/uploads/2024/04/SUBH2895-600x850.jpg'],
    ['p03', 'ANNI DESIGNER', 'Multicoloured stripes kurti with hand embroidery', 1539.00, 4.5, 1, 'https://gaaba.co.in/wp-content/uploads/2024/03/SUBH2753-500x708.jpg'],
    ['p04', 'GoSriKi', 'Embroidered Cotton Kurta Set', 1899.00, 4.8, 1, 'https://gaaba.co.in/wp-content/uploads/2024/03/SUBH2689-1-500x708.jpg'],
    ['p05', 'KLOSIA', 'Printed Pink Cotton Kurti with Mirror Work and Embroidered Dupatta', 2599.00, 4.6, 1, 'https://gaaba.co.in/wp-content/uploads/2024/03/SUBH2826-500x708.jpg'],
    ['p06', 'Ada', 'WHITE AND MAUVE BANDHEJ PRINT KURTI WITH KATHA', 1479.00, 4.5, 1, 'https://gaaba.co.in/wp-content/uploads/2023/03/1GB0571MV@1250-3-500x708.jpg'],
    ['p07', 'INDO ERA', 'Red cotton kurti with lakhnawi hand embroidery', 2899.00, 4.8, 1, 'https://gaaba.co.in/wp-content/uploads/2023/03/1GB0518RD@1650-2-600x850.jpg'],
    ['p08', 'Ada', 'PERFECT MAUVE COTTON STRIPE KURTI', 2599.00, 4.6, 1, 'https://gaaba.co.in/wp-content/uploads/2023/03/1GB0641MV@1250-3-500x708.jpg'],
    ['p09', 'VredeVogel', 'Maroon Gaurwi cotton embroidered kurti', 899.00, 4.8, 1, 'https://gaaba.co.in/wp-content/uploads/2022/09/1gb0339mr_1-500x708.jpg'],
    ['p10', 'ANNI DESIGNER', 'PRINTED BLUE FLORAL COTTON KURTI', 2699.00, 4.6, 1, 'https://gaaba.co.in/wp-content/uploads/2022/02/1gb1880bl_750_1_-500x708.jpg'],
    ['p11', 'SIRIL', 'Gaaba ‘digital’ Floral Print Digital Muslin Kurti Light Coral', 1799.00, 4.5, 1, ' https://gaaba.co.in/wp-content/uploads/2020/07/gaaba_mnq-107_1-500x708.jpg'],
    ['p12', 'GoSriKi', 'Blue Embroidered Ladies Collar Neck Designer Cotton Kurti', 1999.00, 4.8, 1, 'https://5.imimg.com/data5/LV/DJ/SB/SELLER-24410823/designer-girls-kurti-1000x1000.jpg'],
    ['p13', 'SIRIL', 'Full Sleeve Ladies Fancy Designer Net Kurti', 2099.00, 4.6, 1, 'https://5.imimg.com/data5/SELLER/Default/2023/10/353833904/LQ/TG/YB/27914486/img-8057-1000x1000.jpg'],
    ['p14', 'KLOSIA', 'Navy Cotton Yarndyed Kurti', 189.00, 4.8, 1, 'https://www.biba.in/on/demandware.static/-/Sites-biba-product-catalog/default/dw2da23c53/images/ss23/wrkvg18912ss23nvy_1.jpg'],
    ['p15', 'Ada', 'Girls Casual Wear Kurti Designs for Women', 3599.00, 4.6, 1, 'https://i.pinimg.com/736x/53/28/71/53287112080170d01718202c16012ea8.jpg'],
    ['p16', 'W for Woman', 'Ethnic Latest New Designer Ladies Long Kurti', 1999.00, 4.8, 1, 'https://5.imimg.com/data5/SELLER/Default/2023/9/344526947/FB/FY/QM/26140935/latest-new-designer-ladies-long-kurti-1000x1000.jpg'],
    ['p17', 'GoSriKi', 'Salwar Designs Kurta Designs Women Kurti', 2999.00, 4.6, 1, 'https://i.pinimg.com/736x/51/f1/c6/51f1c607a989d5c4aed3fa0b7f208699.jpg'],
    ['p18', 'KLOSIA', 'Embroidered Side Pocket Kurta Design', 2499.00, 4.5, 1, 'https://i.pinimg.com/564x/77/75/b3/7775b385b8e2088ce239acd68db6abce.jpg'],
    ['p19', 'W for Woman', 'Women Viscose Kurta Pant With Dupatta', 1899.00, 4.8, 1, 'https://m.media-amazon.com/images/I/71RbvzziCrL._AC_UL320_.jpg'],
    ['p20', 'INDO ERA', 'Women\'s Embroidered Silk Blend Straight Kurta & Pant', 1299.00, 4.6, 1, 'https://m.media-amazon.com/images/I/71Nlk+i0P0L._AC_UL320_.jpg']
];

connection.query(q1, [kurtaValues], (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Data inserted into Women_Kurtas table.');
    }
});
//women_ethnic 
let q2= `
INSERT INTO Women_Ethnic (product_id, name, description, price, rating, available, image) VALUES ?
`;

let EthnicwearValues = [
    ['p01', 'EthnicJunction', 'EthnicJunction Women\'s Embellished Woven Zari Work Banarasi Silk Straight Kurta Pant With Dupatta', 568.00, 4.5, 1, 'https://m.media-amazon.com/images/I/81uZh7-4ZsL._AC_UL320_.jpg'],
    ['p02', 'Pistaa\'s', 'Pistaa\'s Women Cotton Solid Ethnic Motifs Yoke Design Embroidered Work Suit Set', 1499.00, 5.0, 1, 'https://m.media-amazon.com/images/I/61xlthVk2hL._SY741_.jpg'],
    ['p03', 'ANNI DESIGNER', 'EthnicJunction Women\'s Chanderi Silk Woven Zari Mirror Work Stright Kurta Pant With Dupatta', 1539.00, 4.5, 1, 'https://m.media-amazon.com/images/I/81mUNxoTGrL._AC_UL320_.jpg'],
    ['p04', 'GoSriKi', 'Women\'s Geometric Print Cotton Kurta', 1899.00, 4.8, 1, 'https://m.media-amazon.com/images/I/71aTdEbFBFL._AC_UL320_.jpg'],
    ['p05', 'KLOSIA', 'EthnicJunction Women\'s Chanderi Silk Jacquard Straight Kurta Pant with Dupatta', 2599.00, 4.6, 1, 'https://m.media-amazon.com/images/I/719gv07liCL._AC_UL320_.jpg'],
    ['p06', 'Amayra', 'Amayra Women\'s Nayra Cut Embroidered Kurta with Pant and Dupatta Set', 1479.00, 4.5, 1, 'https://m.media-amazon.com/images/I/61se3QbO3WL._AC_UL320_.jpg'],
    ['p07', 'Nermosa', 'Nermosa Women\'s Rayon Anarkali Kurta Pant and Dupatta Ethnic Set (Blue) - Riya_NM', 2899.00, 4.8, 1, 'https://m.media-amazon.com/images/I/41f7Qo00+pL._AC_UL320_.jpg'],
    ['p08', 'VredeVogel', 'VredeVogel Women\'s Cotton Silk Jacquard Straight Kurta with Pant & Banarasi Silk Dupatta Set', 2599.00, 4.6, 1, 'https://m.media-amazon.com/images/I/61lq7-5J4EL._AC_UL320_.jpg'],
    ['p09', 'arriva fab', 'arriva fab Women\'s Chanderi Silk Embroidered Kurta Set with Jacquard Duppata', 899.00, 4.8, 1, 'https://m.media-amazon.com/images/I/71B4I8w1tqL._AC_UL320_.jpg'],
    ['p10', 'Yash Gallery', 'Yash Gallery Women\'s Cotton Slub Patch Work Angrakha Kurta for Women', 2699.00, 4.6, 1, 'https://m.media-amazon.com/images/I/61rEbcYH2WL._AC_UL320_.jpg'],
    ['p11', 'FIORRA', 'Women\'s Maroon Poly Crepe A-Line Kurta Set With Dupatta', 1799.00, 4.5, 1, 'https://m.media-amazon.com/images/I/81271aov+AL._AC_UL320_.jpg'],
    ['p12', 'INDO ERA', 'INDO ERA Women\'s Silk Blend Embroidered A-Line Kurta Pant With Dupatta Set', 1999.00, 4.8, 1, 'https://m.media-amazon.com/images/I/71acVISd1jL._AC_UL320_.jpg'],
    ['p13', 'VredeVogel', 'VredeVogel Women\'s Chanderi Modal Butti Straight Kurta With Stretchable Leggings & Organza Dupatta Set', 2099.00, 4.6, 1, 'https://m.media-amazon.com/images/I/81bABWiaMEL._AC_UL320_.jpg'],
    ['p14', 'INDO ERA', 'Women\'s Straight Printed Net Kurta with Pant & Dupatta Set', 189.00, 4.8, 1, 'https://m.media-amazon.com/images/I/613LMbg3AwL._AC_UL320_.jpg'],
    ['p15', 'Ada', 'Women\'s Cotton Blend Solid Anarkali Kurta with Pant & Dupatta', 3599.00, 4.6, 1, 'https://m.media-amazon.com/images/I/61lMytHgH6L._AC_UL320_.jpg'],
    ['p16', 'Rangriti', 'Women\'s Polyester a-line Suit Set', 1999.00, 4.8, 1, 'https://m.media-amazon.com/images/I/616ad0BBXGL._AC_UL320_.jpg'],
    ['p17', 'Riara', 'Riara Art Silk Women Long Anarkali Kurti with Pant Polka Dot A-line Ladies Ethnic Wear Dress (Medium, Steel Grey)', 2999.00, 4.6, 1, 'https://m.media-amazon.com/images/I/71qViY25w2L._AC_UL320_.jpg'],
    ['p18', 'KLOSIA', 'Women\'s Printed Georgette Regular Fit Full Sleeve Lightweight Casual Ethenic Wear Full Length Gown Kurti (R_K_C_20766)', 2499.00, 4.5, 1, 'https://m.media-amazon.com/images/I/414U3FnQInL._AC_UL320_.jpg'],
    ['p19', 'W for Woman', 'Women\'s Embroidered Straight Kurta With Pant & Dupatta Set', 1899.00, 4.8, 1, 'https://m.media-amazon.com/images/I/71r3B6xbxpL._AC_UL320_.jpg'],
    ['p20', 'INDO ERA', 'Women\'s Wine Georgette Printed Gown with Dupatta', 1299.00, 4.6, 1, 'https://m.media-amazon.com/images/I/71ykc3tcp4L._AC_UL320_.jpg']
];

connection.query(q2, [EthnicwearValues], (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Data inserted into Women_Ethnicwear table.');
    }
});

//women short kurti
let q3= `
INSERT INTO Women_Short (product_id, name, description, price, rating, available, image) VALUES ?
`;

let shortkurtiValues = [
    ['p01', 'feranoid', 'Women Cotton Angrakha Kurti', 668.00, 4.5, 1, 'https://m.media-amazon.com/images/I/71E8gHk2lDL._AC_UL320_.jpg'],
    ['p02', 'Pistaa\'s', 'Short Kurtis for Women| Cotton Kurtis| Kurtis for Women', 299.00, 5.0, 1, 'https://m.media-amazon.com/images/I/715FfGR6rYL._AC_UL320_.jpg'],
    ['p03', 'ANNI DESIGNER', 'Women\'s Beautiful Straight Cotton Short Kurti, Casual Wear Tunic, Office Wear (MFTN_213_P)', 1539.00, 4.5, 1, 'https://m.media-amazon.com/images/I/61bk2j-5pTL._AC_UL320_.jpg'],
    ['p04', 'GoSriKi', 'Short Kurtis for Women| Cotton Kurtis| Kurtis for Women', 899.00, 4.8, 1, 'https://m.media-amazon.com/images/I/91E3oZaTGoL._AC_UL320_.jpg'],
    ['p05', 'KLOSIA', 'Women\'s Floral Printed Cotton Top', 599.00, 4.6, 1, 'https://m.media-amazon.com/images/I/713wEcCIKRL._AC_UL320_.jpg'],
    ['p06', 'Amayra', 'Women\'s Cotton Floral Printed Short Kurti Tunic Top', 409.00, 4.5, 1, 'https://m.media-amazon.com/images/I/71AbFYLqSFL._AC_UL320_.jpg'],
    ['p07', 'Nermosa', 'Women\'s Cotton Printed Regular Fit top', 299.00, 4.8, 1, 'https://m.media-amazon.com/images/I/61Hl7iiheHL._AC_UL320_.jpg'],
    ['p08', 'VredeVogel', 'Short Kurtis for Women| Cotton Kurtis| Kurtis for Women', 599.00, 4.6, 1, 'https://m.media-amazon.com/images/I/81uXH5YRzDL._AC_UL320_.jpg'],
    ['p09', 'arriva fab', 'Short Kurtis for Women| Cotton Kurtis| Kurtis for Women', 979.00, 4.8, 1, 'https://m.media-amazon.com/images/I/81c528spcpL._AC_UL320_.jpg'],
    ['p10', 'Yash Gallery', 'Short Kurtis for Women| Cotton Kurtis| Kurtis for Women', 699.00, 4.6, 1, 'https://m.media-amazon.com/images/I/91E3oZaTGoL._AC_UL320_.jpg'],
    ['p11', 'FIORRA', 'Women\'s Cotton A-Line Short Kurti', 799.00, 4.5, 1, 'https://m.media-amazon.com/images/I/81ZcgdIk-xL._AC_UL320_.jpg'],
    ['p12', 'INDO ERA', 'Women\'s Georgette Chikankari Embroidered Short Kurti', 1999.00, 4.8, 1, 'https://m.media-amazon.com/images/I/81LX+m7-YoL._AC_UL320_.jpg'],
    ['p13', 'VredeVogel', 'Designer V-Neck Short Straight Kurti with 3Quarter Sleeves', 2099.00, 4.6, 1, 'https://m.media-amazon.com/images/I/71+DBukbCZL._AC_UL320_.jpg'],
    ['p14', 'INDO ERA', 'Women Cotton Printed Straight Short Kurti', 919.00, 4.8, 1, 'https://m.media-amazon.com/images/I/714r5exbMVL._AC_UL320_.jpg'],
    ['p15', 'Ada', 'NANAK FEB Women\'s Rayon Casual Wear Printed Short Kurti/Tunic/Top for Girls', 359.00, 4.6, 1, 'https://m.media-amazon.com/images/I/71K2yg7s2YL._AC_UL320_.jpg'],
    ['p16', 'Rangriti', 'Women Cotton Regular Kurti', 199.00, 4.8, 1, 'https://m.media-amazon.com/images/I/81oUVqpQYYL._AC_UL320_.jpg'],
    ['p17', 'Riara', 'LIBOZA Short Kurta for Women – Lakhnavi Chikankari Embroidered Ladies Kurti, Stylish Girls Top, Ethnic Half Kurtas, Tunic Design Woman Kurtis', 299.00, 4.6, 1, 'https://m.media-amazon.com/images/I/71ubNT4L9RL._AC_UL320_.jpg'],
    ['p18', 'KLOSIA', 'Women\'s Cotton Floral Printed 3/4 Sleeve V Neck Casual Short Kurta', 499.00, 4.5, 1, 'https://m.media-amazon.com/images/I/611oqJEKHoL._AC_UL320_.jpg'],
    ['p19', 'Shiv Textiles', 'Shiv Textiles Rayon Fabric Printed Round Neck Short Kurtis for Women Top Dresses Kurti for Ladies & Girls Kurtis', 899.00, 4.8, 1, 'https://m.media-amazon.com/images/I/81zADUFsUgS._AC_UL320_.jpg'],
    ['p20', 'Ada', 'Ada Hand Embroidered Lucknow Chikankari Cotton Blend Floral Short Kurti Top Tunic for Women', 1299.00, 4.6, 1, 'https://m.media-amazon.com/images/I/71h33ejfkzL._AC_UL320_.jpg']
];

connection.query(q3, [shortkurtiValues], (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Data inserted into Women_shortkurti table.');
    }
});
// women jean
let q4 = `
INSERT INTO Women_Jean (product_id, name, description, price, rating, available, image) VALUES ?
`;

let jeansValues = [
    ['p01', 'Symbol Premium', 'Symbol Premium Women\'s Skinny 4-Way Stretch Jeans (Mid Rise | Ankle Length | Desk-to-Dinner', 1668.00, 4.9, 1, 'https://m.media-amazon.com/images/I/71H4vKvP-fL._AC_UL320_.jpg'],
    ['p02', 'Miss Chase', 'Miss Chase Women\'s Skinny Fit High Rise Clean Look Regular Length Clean Look Stretchable Denim Jeans', 679.00, 5.0, 1, 'https://m.media-amazon.com/images/I/71ThYMHtmPL._AC_UL320_.jpg'],
    ['p03', 'KOTTY', 'KOTTY Women High Rise Relaxed Fit Cotton Lycra Blend Ankle Length Jeans', 1539.00, 4.5, 1, 'https://m.media-amazon.com/images/I/61mQibjz7FL._AC_UL320_.jpg'],
    ['p04', 'GoSriKi', 'Women\'s Straight Fit High-Rise Jeans', 899.00, 4.8, 1, 'https://m.media-amazon.com/images/I/51RJryDCumL._AC_UL320_.jpg'],
    ['p05', 'ADBUCKS', 'Women Denim Straight Fit Jeans', 599.00, 4.6, 1, 'https://m.media-amazon.com/images/I/51v5j-MRimL._AC_UL320_.jpg'],
    ['p06', 'Amayra', 'Women\'s 711 Skinny Fit Mid Rise Jeans', 1409.00, 4.5, 1, 'https://m.media-amazon.com/images/I/517KQR7IxYL._AC_UL320_.jpg'],
    ['p07', 'Nermosa', 'Women Jeans', 1299.00, 4.8, 1, 'https://m.media-amazon.com/images/I/714vTy7scDL._AC_UL320_.jpg'],
    ['p08', 'VredeVogel', 'Women Regular Fit Jeans', 599.00, 4.6, 1, 'https://m.media-amazon.com/images/I/61p1lnZ1sYL._AC_UL320_.jpg'],
    ['p09', 'arriva fab', 'Women\'s Denim Stretchable High Waist Jeans', 979.00, 4.8, 1, 'https://m.media-amazon.com/images/I/61i6yloR4nL._AC_UL320_.jpg'],
    ['p10', 'Nifty', 'Women\'s Stretchable Flare Jeans', 699.00, 4.6, 1, 'https://m.media-amazon.com/images/I/61QloN2sLTL._AC_UL320_.jpg'],
    ['p11', 'VEYVOR', 'Women\'s Solid High Rise Relaxed Fit Cargo Jeans', 799.00, 4.5, 1, 'https://m.media-amazon.com/images/I/51V0Z2oKHNL._AC_UL320_.jpg'],
    ['p12', 'INKD', 'Women\'s Contrast Stitch Stretchable Skinny Fit Jeans', 1999.00, 4.8, 1, 'https://m.media-amazon.com/images/I/61o2nrLeAWL._SX569_.jpg'],
    ['p13', 'Levi\'s', 'Women\'s 721 Mid Rise Skinny Jeans', 2099.00, 4.6, 1, 'https://m.media-amazon.com/images/I/511FYxCbHeL._AC_UL320_.jpg'],
    ['p14', 'KOTTY', 'Women\'s High Rise Flared Fit Cotton Lycra Jeans', 919.00, 4.8, 1, 'https://m.media-amazon.com/images/I/61TtiWN7nsL._AC_UL320_.jpg'],
    ['p15', 'Ada', 'Women\'s Denim Stretchable High Waist Jeans', 759.00, 4.6, 1, 'https://m.media-amazon.com/images/I/61zi31F5yvL._AC_UL320_.jpg'],
    ['p16', 'GRECIILOOKS', 'Women\'s Baggy Bootcut Fit Jeans', 799.00, 4.8, 1, 'https://m.media-amazon.com/images/I/61fC6cqMyUL._AC_UL320_.jpg'],
    ['p17', 'Riara', 'Women\'s High Rise Cotton Lycra Blend Ankle Length Slim fit Jeans', 299.00, 4.6, 1, 'https://m.media-amazon.com/images/I/714RJPqPb6L._AC_UL320_.jpg'],
    ['p18', 'KLOSIA', 'Women\'s 726 Bootcut Fit High Rise Jeans', 499.00, 4.5, 1, 'https://m.media-amazon.com/images/I/81s8IH-K25L._AC_UL320_.jpg'],
    ['p19', 'Miss Chase', 'Women\'s Skinny Fit High/Mid Rise Regular Length Stretchable Denim Jeans', 899.00, 4.8, 1, 'https://m.media-amazon.com/images/I/611Ka32K7zL._AC_UL320_.jpg'],
    ['p20', 'Ada', 'Women\'s Navy Blue Skinny Fit High Rise Shaded Regular Length Stretchable Denim Jeans', 1299.00, 4.6, 1, 'https://m.media-amazon.com/images/I/712MF9MI81L._AC_UL320_.jpg'],
];

connection.query(q4, [jeansValues], (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Data inserted into Women_jean table.');
    }
});
//women modern
let q5= "INSERT INTO Women_Modern(product_id,name,description,price,rating,available,image) VALUES ?"
let modernwearValues = [
    ['p01', 'OM SAI LATEST CREATION', 'One Piece Dress for Women | Beach Wear for Women | Western Dress | Vacation Outfits for Women | Picnic Dress for Women | Casual, Party Dresses for Women.', 668.00, 4.9, 902, 'https://m.media-amazon.com/images/I/71tF9O0WgwL._AC_UL320_.jpg'],
    ['p02', 'Stylum', 'Women\'s Printed Rayon Blend Shirt Skirt Set', 789.00, 5.0, 182, 'https://m.media-amazon.com/images/I/718OptyhccL._AC_UL320_.jpg'],
    ['p03', 'AASK', 'AASK Dress for Women|one Piece for Women', 539.00, 4.5,931, 'https://m.media-amazon.com/images/I/71hEc93Z22L._AC_UL320_.jpg'],
    ['p04', 'LookMark', 'Women\'s Printed Cotton Blend Straight Kurta Pant Set - Elegant Ethnic Wear Ensemble for Modern Women, Perfect for Any Occasion', 499.00, 4.8, 189, 'https://m.media-amazon.com/images/I/5126WoTDQnL._AC_UL320_.jpg'],
    ['p05', 'Freydis', 'Women\'s Georgette Regular Fit Top and Skirt Set with Elegant Design', 599.00, 4.6, 631, 'https://m.media-amazon.com/images/I/61+Gsz4BmQL._AC_UL320_.jpg'],
    ['p06', 'Leriya Fashion', 'Western Dress || Rayon Solid Button Front Shirt Dress for Women', 409.00, 4.5, 891, 'https://m.media-amazon.com/images/I/51fJfuRXiVL._AC_UL320_.jpg'],
    ['p07', 'Nermosa', 'Women\'s Rayon Solid Dual Colored Ankle Length Anarakli Dress', 569.00, 4.8, 119, 'https://m.media-amazon.com/images/I/41UceQHAFzL._AC_UL320_.jpg'],
    ['p08', 'GRECIILOOKS', 'Women\'s Regular Fit Shirt', 599.00, 4.6, 729, 'https://m.media-amazon.com/images/I/61j+kZSF8tL._AC_UL320_.jpg'],
    ['p09', 'PURVAJA', 'Women Dress', 979.00, 4.8, 1001, 'https://m.media-amazon.com/images/I/5136bu+0ELL._AC_UL320_.jpg'],
    ['p10', 'Nifty', 'Women\'s High-Low Knee Length Dress', 639.00, 4.6, 901, 'https://m.media-amazon.com/images/I/51G9HRFhtrL._SY741_.jpg'],
    ['p11', 'VEYVOR', 'Women\'s Brick Red & Dusty Green Boat Neck Sleeveless Self Design Lace Overlaid Regular Dress ', 699.00, 4.5, 902, 'https://m.media-amazon.com/images/I/71q+7G89EgL._AC_UL320_.jpg'],
    ['p12', 'INKD', 'Women\'s Relaxed Fit Top', 459.00, 4.8, 281, 'https://m.media-amazon.com/images/I/81ZvKvcS4LL._AC_UL320_.jpg'],
    ['p13', 'Levi\'s', 'Women\'s Crepe A-Line Maxi Dress', 499.00, 4.6, 892, 'https://m.media-amazon.com/images/I/71JsuLbh0ML._AC_UL320_.jpg'],
    ['p14', 'LookMark', 'Women\'s Printed Cotton Blend Straight Kurta Pant Set - Elegant Ethnic Wear Ensemble for Modern Women, Perfect for Any Occasion', 919.00, 4.8,191, 'https://m.media-amazon.com/images/I/514MGqjT26L._AC_UL320_.jpg'],
    ['p15', 'Ada', 'Women Long Dress', 759.00, 4.6, 801, 'https://m.media-amazon.com/images/I/81bCiJ2-HvL._AC_UL320_.jpg'],
    ['p16', 'GRECIILOOKS', 'Women Dress', 599.00, 4.8, 901, 'https://m.media-amazon.com/images/I/517ynJMsj1L._AC_UL320_.jpg'],
    ['p17', 'Riara', 'Women\'s Floral Printed Top', 799.00, 4.6,291, 'https://m.media-amazon.com/images/I/71+0qLScjRL._AC_UL320_.jpg'],
    ['p18', 'Generic', ' Women\'s Satin Silk Fit and Flare Knee Length Western Dress', 499.00, 4.5, 682, 'https://m.media-amazon.com/images/I/41kCEmQSUjL._AC_UL320_.jpg'],
    ['p19', 'DEEBACO', 'Smocked Midi Dress with Shrug for Women\'s|Tie-up Neck 3/4 Bell Sleeves Straps Shoulder Fit & Flare Western Party Causal Wear Ladies Dresses|Summer Wear Shrug Dress Set ', 899.00, 4.8, 782, 'https://m.media-amazon.com/images/I/614V+WBzK4L._AC_UL320_.jpg'],
    ['p20', 'Janasya', 'Women\'s Cotton Woven Midi Dress', 999.00, 4.6, 802, 'https://m.media-amazon.com/images/I/81xOlaqarlL._AC_UL320_.jpg'],
];

connection.query(q5,[modernwearValues],(err,res)=>{
    if(err){console.log(err)}
    else{
        console.log("data inserted successfully");
    }
})


// kids

// kids Dress
let kidsDressValues = [
    ['kd001', 'H&M Kids Floral Dress', 'Cute floral dress for kids.', 499, 4.5, 120, 'https://m.media-amazon.com/images/I/61ljZR7U4ZL._MCnd_AC_UL320_.jpg'],
    ['kd002', 'Zara Kids Summer Dress', 'Stylish summer dress.', 599, 4.2, 85, 'https://m.media-amazon.com/images/I/61ohbtqZ+fL._MCnd_AC_UL320_.jpg'],
    ['kd003', 'Gap Kids Cotton Dress', 'Comfortable cotton dress.', 399, 4.0, 150, 'https://m.media-amazon.com/images/I/81vrab9DBzL._MCnd_AC_UL320_.jpg'],
    ['kd004', 'Carter"s Party Dress', 'Elegant party dress.', 699, 4.8, 95, 'https://m.media-amazon.com/images/I/611KhLL8RXL._MCnd_AC_UL320_.jpg'],
    ['kd005', 'Old Navy Denim Dress', 'Casual denim dress.', 799, 4.1, 110, 'https://m.media-amazon.com/images/I/61M6ScB0B2L._MCnd_AC_UL320_.jpg'],
    ['kd006', 'The Children"s Place Festive Dress', 'Festive dress with embroidery.', 899, 4.7, 75, 'https://m.media-amazon.com/images/I/81EKc9O+ljL._MCnd_AC_UL320_.jpg'],
    ['kd007', 'OshKosh B"gosh Summer Dress', 'Printed summer dress.', 499, 4.3, 130, 'https://m.media-amazon.com/images/I/71RWqRozqrL._MCnd_AC_UL320_.jpg'],
    ['kd008', 'Mango Kids Black Dress', 'Classic black dress.', 599, 4.4, 90, 'https://m.media-amazon.com/images/I/71xb43FVS5L._MCnd_AC_UL320_.jpg'],
    ['kd009', 'Tommy Hilfiger Yellow Dress', 'Bright yellow dress.', 399, 4.2, 145, 'https://m.media-amazon.com/images/I/71mIekpj2nL._MCnd_AC_UL320_.jpg'],
    ['kd010', 'Ralph Lauren Polka Dot Dress', 'Polka dot dress.', 699, 4.5, 80, 'https://m.media-amazon.com/images/I/61PLg7oMSNL._MCnd_AC_UL320_.jpg'],
    ['kd011', 'Gymboree Striped Cotton Dress', 'Striped cotton dress.', 799, 4.6, 105, 'https://m.media-amazon.com/images/I/71+emu+F4BL._MCnd_AC_UL320_.jpg'],
    ['kd012', 'Burberry Floral Print Dress', 'Floral print dress.', 899, 4.0, 70, 'https://m.media-amazon.com/images/I/81Sr4XCRpeL._MCnd_AC_UL320_.jpg'],
    ['kd013', 'Polo Ralph Lauren Lace Dress', 'Lace party dress.', 499, 4.7, 115, 'https://m.media-amazon.com/images/I/91XLhVtxMAL._MCnd_AC_UL320_.jpg'],
    ['kd014', 'Next Ruffled Dress', 'Ruffled dress.', 599, 4.3, 135, 'https://m.media-amazon.com/images/I/71m-ScmTwGL._MCnd_AC_UL320_.jpg'],
    ['kd015', 'Jacadi Long Sleeve Dress', 'Long sleeve dress.', 399, 4.1, 120, 'https://m.media-amazon.com/images/I/61v6UMSE0VL._MCnd_AC_UL320_.jpg'],
    ['kd016', 'Petit Bateau Bow Dress', 'Summer dress with bow.', 699, 4.5, 100, 'https://m.media-amazon.com/images/I/61y6NLXb9UL._MCnd_AC_UL320_.jpg'],
    ['kd017', 'Monsoon Tunic Dress', 'Tunic dress.', 799, 4.2, 85, 'https://m.media-amazon.com/images/I/61xt-b+ChxL._MCnd_AC_UL320_.jpg'],
    ['kd018', 'Abercrombie Tiered Dress', 'Tiered dress.', 899, 4.6, 75, 'https://m.media-amazon.com/images/I/81-cTe752qL._MCnd_AC_UL320_.jpg'],
    ['kd019', 'H&M Kids Maxi Dress', 'Printed maxi dress.', 499, 4.4, 110, 'https://m.media-amazon.com/images/I/71tK9qAUIZL._MCnd_AC_UL320_.jpg'],
    ['kd020', 'Zara Kids Sequin Dress', 'Sequin party dress.', 599, 4.8, 95, 'https://m.media-amazon.com/images/I/71Ou-Fg8HuL._MCnd_AC_UL320_.jpg'],
    ['kd021', 'Gap Kids Pockets Dress', 'Dress with pockets.', 399, 4.0, 125, 'https://m.media-amazon.com/images/I/61OxJkqWRTL._MCnd_AC_UL320_.jpg'],
    ['kd022', 'Carter"s Smocked Dress', 'Smocked dress.', 699, 4.7, 105, 'https://m.media-amazon.com/images/I/61vfjiHvH0L._MCnd_AC_UL320_.jpg'],
    ['kd023', 'Old Navy Corduroy Dress', 'Corduroy dress.', 799, 4.3, 115, 'https://m.media-amazon.com/images/I/71XZelKFStL._MCnd_AC_UL320_.jpg'],
    ['kd024', 'The Children"s Place Checked Dress', 'Checked dress.', 899, 4.6, 80, 'https://m.media-amazon.com/images/I/718J1laiICL._MCnd_AC_UL320_.jpg'],
    ['kd025', 'OshKosh B"gosh Tulle Dress', 'Tulle dress.', 499, 4.2, 145, 'https://m.media-amazon.com/images/I/512cW2PCwyL._MCnd_AC_UL320_.jpg'],
    ['kd026', 'Mango Kids Animal Print Dress', 'Animal print dress.', 599, 4.1, 90, 'https://m.media-amazon.com/images/I/610RmWF3w1L._MCnd_AC_UL320_.jpg'],
    ['kd027', 'Tommy Hilfiger Velvet Dress', 'Velvet dress.', 399, 4.5, 135, 'https://m.media-amazon.com/images/I/71Qh2AMc66L._MCnd_AC_UL320_.jpg'],
    ['kd028', 'Ralph Lauren Embroidered Dress', 'Embroidered dress.', 699, 4.4, 120, 'https://m.media-amazon.com/images/I/61SiqlTuydL._MCnd_AC_UL320_.jpg'],
    ['kd029', 'Gymboree Tie-Dye Dress', 'Tie-dye dress.', 799, 4.3, 115, 'https://m.media-amazon.com/images/I/81ha4+nWQoL._MCnd_AC_UL320_.jpg'],
    ['kd030', 'Burberry Satin Dress', 'Satin dress.', 899, 4.7, 75, 'https://m.media-amazon.com/images/I/7149Wkn72DL._MCnd_AC_UL320_.jpg']
]

// Query to insert data into the Kids_Dress table
let query = "INSERT INTO Kids_Dress (product_id, name, description, price, rating, available, image) VALUES ?";
connection.query(query, [kidsDressValues], (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
});


//kids Tshirt
let kidsTshirtsValues = [
    ['kt001', 'Nike Kids T-shirt', 'Comfortable cotton t-shirt.', 499, 4.5, 120, 'https://m.media-amazon.com/images/I/81ZsraEJyML._AC_UL320_.jpg'],
    ['kt002', 'Adidas Kids T-shirt', 'Stylish summer t-shirt.', 599, 4.2, 85, 'https://m.media-amazon.com/images/I/71jFlKe91WL._AC_UL320_.jpg'],
    ['kt003', 'Puma Kids T-shirt', 'Breathable sports t-shirt.', 399, 4.0, 150, 'https://m.media-amazon.com/images/I/61BXRud2pUL._AC_UL320_.jpg'],
    ['kt004', 'H&M Kids T-shirt', 'Cool graphic t-shirt.', 699, 4.8, 95, 'https://m.media-amazon.com/images/I/61ddUPAe4tL._AC_UL320_.jpg'],
    ['kt005', 'Gap Kids T-shirt', 'Casual denim t-shirt.', 799, 4.1, 110, 'https://m.media-amazon.com/images/I/51MnHNpgyfL._AC_UL320_.jpg'],
    ['kt006', 'Tommy Hilfiger Kids T-shirt', 'Classic striped t-shirt.', 899, 4.7, 75, 'https://m.media-amazon.com/images/I/71Ib7-CvugL._AC_UL320_.jpg'],
    ['kt007', 'Zara Kids T-shirt', 'Trendy printed t-shirt.', 499, 4.3, 130, 'https://m.media-amazon.com/images/I/71IbjZDPmNL._AC_UL320_.jpg'],
    ['kt008', 'Uniqlo Kids T-shirt', 'Soft basic t-shirt.', 599, 4.4, 90, 'https://m.media-amazon.com/images/I/71+Ck1JhXLL._AC_UL320_.jpg'],
    ['kt009', 'Levi\'s Kids T-shirt', 'Vintage logo t-shirt.', 399, 4.2, 145, 'https://m.media-amazon.com/images/I/61iRbJjv3QL._AC_UL320_.jpg'],
    ['kt010', 'Benetton Kids T-shirt', 'Bright colored t-shirt.', 699, 4.5, 80, 'https://m.media-amazon.com/images/I/519J+6WnooL._AC_UL320_.jpg'],
    ['kt011', 'Next Kids T-shirt', 'Striped cotton t-shirt.', 799, 4.6, 105, 'https://m.media-amazon.com/images/I/711sam6F+JL._AC_UL320_.jpg'],
    ['kt012', 'Mango Kids T-shirt', 'Tlet kidsDressValues ',892,4.7,107,""],
    ['kd001', 'H&M Kids Floral Dress', 'Cute floral dress for kids.', 499, 4.5, 120, 'https://m.media-amazon.com/images/I/61ljZR7U4ZL._MCnd_AC_UL320_.jpg'],
    ['kd002', 'Zara Kids Summer Dress', 'Stylish summer dress.', 599, 4.2, 85, 'https://m.media-amazon.com/images/I/61ohbtqZ+fL._MCnd_AC_UL320_.jpg'],
    ['kd003', 'Gap Kids Cotton Dress', 'Comfortable cotton dress.', 399, 4.0, 150, 'https://m.media-amazon.com/images/I/81vrab9DBzL._MCnd_AC_UL320_.jpg'],
    ['kd004', 'Carter"s Party Dress', 'Elegant party dress.', 699, 4.8, 95, 'https://m.media-amazon.com/images/I/611KhLL8RXL._MCnd_AC_UL320_.jpg'],
    ['kd005', 'Old Navy Denim Dress', 'Casual denim dress.', 799, 4.1, 110, 'https://m.media-amazon.com/images/I/61M6ScB0B2L._MCnd_AC_UL320_.jpg'],
    ['kd006', 'The Children"s Place Festive Dress', 'Festive dress with embroidery.', 899, 4.7, 75, 'https://m.media-amazon.com/images/I/81EKc9O+ljL._MCnd_AC_UL320_.jpg'],
    ['kd007', 'OshKosh B"gosh Summer Dress', 'Printed summer dress.', 499, 4.3, 130, 'https://m.media-amazon.com/images/I/71RWqRozqrL._MCnd_AC_UL320_.jpg'],
    ['kd008', 'Mango Kids Black Dress', 'Classic black dress.', 599, 4.4, 90, 'https://m.media-amazon.com/images/I/71xb43FVS5L._MCnd_AC_UL320_.jpg'],
    ['kd009', 'Tommy Hilfiger Yellow Dress', 'Bright yellow dress.', 399, 4.2, 145, 'https://m.media-amazon.com/images/I/71mIekpj2nL._MCnd_AC_UL320_.jpg'],
    ['kd010', 'Ralph Lauren Polka Dot Dress', 'Polka dot dress.', 699, 4.5, 80, 'https://m.media-amazon.com/images/I/61PLg7oMSNL._MCnd_AC_UL320_.jpg'],
    ['kd011', 'Gymboree Striped Cotton Dress', 'Striped cotton dress.', 799, 4.6, 105, 'https://m.media-amazon.com/images/I/71+emu+F4BL._MCnd_AC_UL320_.jpg'],
    ['kd012', 'Burberry Floral Print Dress', 'Floral print dress.', 899, 4.0, 70, 'https://m.media-amazon.com/images/I/81Sr4XCRpeL._MCnd_AC_UL320_.jpg'],
    ['kd013', 'Polo Ralph Lauren Lace Dress', 'Lace party dress.', 499, 4.7, 115, 'https://m.media-amazon.com/images/I/91XLhVtxMAL._MCnd_AC_UL320_.jpg'],
    ['kd014', 'Next Ruffled Dress', 'Ruffled dress.', 599, 4.3, 135, 'https://m.media-amazon.com/images/I/71m-ScmTwGL._MCnd_AC_UL320_.jpg'],
    ['kd015', 'Jacadi Long Sleeve Dress', 'Long sleeve dress.', 399, 4.1, 120, 'https://m.media-amazon.com/images/I/61v6UMSE0VL._MCnd_AC_UL320_.jpg'],
    ['kd016', 'Petit Bateau Bow Dress', 'Summer dress with bow.', 699, 4.5, 100, 'https://m.media-amazon.com/images/I/61y6NLXb9UL._MCnd_AC_UL320_.jpg'],
    ['kd017', 'Monsoon Tunic Dress', 'Tunic dress.', 799, 4.2, 85, 'https://m.media-amazon.com/images/I/61xt-b+ChxL._MCnd_AC_UL320_.jpg'],
    ['kd018', 'Abercrombie Tiered Dress', 'Tiered dress.', 899, 4.6, 75, 'https://m.media-amazon.com/images/I/81-cTe752qL._MCnd_AC_UL320_.jpg'],
    ['kd019', 'H&M Kids Maxi Dress', 'Printed maxi dress.', 499, 4.4, 110, 'https://m.media-amazon.com/images/I/71tK9qAUIZL._MCnd_AC_UL320_.jpg'],
    ['kd020', 'Zara Kids Sequin Dress', 'Sequin party dress.', 599, 4.8, 95, 'https://m.media-amazon.com/images/I/71Ou-Fg8HuL._MCnd_AC_UL320_.jpg'],
    ['kd021', 'Gap Kids Pockets Dress', 'Dress with pockets.', 399, 4.0, 125, 'https://m.media-amazon.com/images/I/61OxJkqWRTL._MCnd_AC_UL320_.jpg'],
    ['kd022', 'Carter"s Smocked Dress', 'Smocked dress.', 699, 4.7, 105, 'https://m.media-amazon.com/images/I/61vfjiHvH0L._MCnd_AC_UL320_.jpg'],
    ['kd023', 'Old Navy Corduroy Dress', 'Corduroy dress.', 799, 4.3, 115, 'https://m.media-amazon.com/images/I/71XZelKFStL._MCnd_AC_UL320_.jpg'],
    ['kd024', 'The Children"s Place Checked Dress', 'Checked dress.', 899, 4.6, 80, 'https://m.media-amazon.com/images/I/718J1laiICL._MCnd_AC_UL320_.jpg'],
    ['kd025', 'OshKosh B"gosh Tulle Dress', 'Tulle dress.', 499, 4.2, 145, 'https://m.media-amazon.com/images/I/512cW2PCwyL._MCnd_AC_UL320_.jpg'],
    ['kd026', 'Mango Kids Animal Print Dress', 'Animal print dress.', 599, 4.1, 90, 'https://m.media-amazon.com/images/I/610RmWF3w1L._MCnd_AC_UL320_.jpg'],
    ['kd027', 'Tommy Hilfiger Velvet Dress', 'Velvet dress.', 399, 4.5, 135, 'https://m.media-amazon.com/images/I/71Qh2AMc66L._MCnd_AC_UL320_.jpg'],
    ['kd028', 'Ralph Lauren Embroidered Dress', 'Embroidered dress.', 699, 4.4, 120, 'https://m.media-amazon.com/images/I/61SiqlTuydL._MCnd_AC_UL320_.jpg'],
    ['kd029', 'Gymboree Tie-Dye Dress', 'Tie-dye dress.', 799, 4.3, 115, 'https://m.media-amazon.com/images/I/81ha4+nWQoL._MCnd_AC_UL320_.jpg'],
    ['kd030', 'Burberry Satin Dress', 'Satin dress.', 899, 4.7, 75, 'https://m.media-amazon.com/images/I/7149Wkn72DL._MCnd_AC_UL320_.jpg']
];

// Query to insert data into the Kids_Dress table
let query0 = "INSERT INTO Kids_Tshirt (product_id, name, description, price, rating, available, image) VALUES ?";
connection.query(query0, [kidsTshirtValues], (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
});

//kids ethnic
let kidsEthnicValues = [
    ['ke001', 'Mini King Ethnic Wear', 'Beautiful traditional outfit for kids.', 999, 4.5, 100, 'https://m.media-amazon.com/images/I/81o+KHgz-gL._AC_UL320_.jpg'],
    ['ke002', 'Tiny Traditions', 'Elegant ethnic wear for special occasions.', 1299, 4.7, 80, 'https://m.media-amazon.com/images/I/91pK9lE-kyL._AC_UL320_.jpg'],
    ['ke003', 'Junior Heritage', 'Comfortable and stylish ethnic dress.', 899, 4.2, 120, 'https://m.media-amazon.com/images/I/61BGedNXfQL._AC_UL320_.jpg'],
    ['ke004', 'Little Maharaja', 'Festive ethnic wear for kids.', 1499, 4.8, 90, 'https://m.media-amazon.com/images/I/61GMFyXD6NL._AC_UL320_.jpg'],
    ['ke005', 'Chota Nawab', 'Colorful traditional outfit for kids.', 799, 4.3, 110, 'https://m.media-amazon.com/images/I/61AHquj0vuL._MCnd_AC_UL320_.jpg'],
    ['ke006', 'Royal Blossoms', 'Embroidered ethnic wear.', 999, 4.6, 75, 'https://m.media-amazon.com/images/I/51DmFuUE98L._MCnd_AC_UL320_.jpg'],
    ['ke007', 'Kiddie Couture', 'Printed ethnic dress.', 699, 4.1, 130, 'https://m.media-amazon.com/images/I/6141yb0bowL._MCnd_AC_UL320_.jpg'],
    ['ke008', 'Tiny Regal', 'Classic ethnic attire for kids.', 899, 4.4, 85, 'https://m.media-amazon.com/images/I/71QRE6nz3AL._MCnd_AC_UL320_.jpg'],
    ['ke009', 'Little Rajasthani', 'Traditional outfit with intricate designs.', 1099, 4.2, 95, 'https://m.media-amazon.com/images/I/81SHJHb+IML._AC_UL320_.jpg'],
    ['ke010', 'Desi Delight', 'Ethnic wear with modern touch.', 1299, 4.5, 100, 'https://m.media-amazon.com/images/I/71ZWSW7bJLL._AC_UL320_.jpg'],
    ['ke011', 'Heritage Hues', 'Elegant traditional dress.', 799, 4.0, 110, 'https://m.media-amazon.com/images/I/91kYW8ONoYL._AC_UL320_.jpg'],
    ['ke012', 'Vivid Traditions', 'Ethnic wear with unique patterns.', 999, 4.7, 80, 'https://m.media-amazon.com/images/I/91MneDCgAnL._AC_UL320_.jpg'],
    ['ke013', 'Tiny Tandoor', 'Vibrant traditional outfit.', 899, 4.3, 90, 'https://m.media-amazon.com/images/I/91z8pb3orcL._AC_UL320_.jpg'],
    ['ke014', 'Mini Maestro', 'Comfortable ethnic wear.', 699, 4.1, 120, 'https://m.media-amazon.com/images/I/71TWafuHR6L._AC_UL320_.jpg'],
    ['ke015', 'Royal Rasoi', 'Ethnic wear with embroidery.', 1299, 4.6, 75, 'https://m.media-amazon.com/images/I/71wbyw1802L._AC_UL320_.jpg'],
    ['ke016', 'Little Lotus', 'Ethnic wear with vibrant colors.', 999, 4.4, 85, 'https://m.media-amazon.com/images/I/81svlukwDOL._AC_UL320_.jpg'],
    ['ke017', 'Desi Darlings', 'Festive traditional outfit.', 1099, 4.5, 100, 'https://m.media-amazon.com/images/I/51kc35hJfgL._MCnd_AC_UL320_.jpg'],
    ['ke018', 'Chota Prince', 'Elegant ethnic wear for kids.', 899, 4.2, 90, 'https://m.media-amazon.com/images/I/61fH2PwZLQL._AC_UL320_.jpg'],
    ['ke019', 'Tradition Treasures', 'Ethnic wear with traditional motifs.', 799, 4.0, 110, 'https://m.media-amazon.com/images/I/71qpL5jVqaL._AC_UL320_.jpg'],
    ['ke020', 'Little Legends', 'Stylish ethnic attire.', 1299, 4.7, 80, 'https://m.media-amazon.com/images/I/81qdJAGOQQL._AC_UL320_.jpg'],
    ['ke021', 'Royal Kiddo', 'Colorful ethnic outfit.', 999, 4.3, 85, 'https://m.media-amazon.com/images/I/51dLfimbh4S._AC_UL320_.jpg'],
    ['ke022', 'Modern Maharaja', 'Modern ethnic wear.', 1099, 4.5, 100, 'https://m.media-amazon.com/images/I/81TvJ0QZ2uL._AC_UL320_.jpg'],
    ['ke023', 'Chota Sultan', 'Ethnic dress with unique design.', 899, 4.2, 90, 'https://m.media-amazon.com/images/I/71-0CGFrQpL._AC_UL320_.jpg'],
    ['ke024', 'Classic Couture', 'Classic ethnic outfit.', 799, 4.0, 110, 'https://m.media-amazon.com/images/I/613qtq7jGKL._AC_UL320_.jpg'],
    ['ke025', 'Tiny Tycoon', 'Elegant ethnic attire.', 1299, 4.7, 80, 'https://m.media-amazon.com/images/I/61Ke3rOGBHL._AC_UL320_.jpg'],
    ['ke026', 'Embroidered Elegance', 'Ethnic wear with embroidery.', 999, 4.4, 85, 'https://m.media-amazon.com/images/I/51T-FwcuVCL._AC_UL320_.jpg'],
    ['ke027', 'Stylish Sprouts', 'Stylish ethnic dress.', 1099, 4.5, 100, 'https://m.media-amazon.com/images/I/81SdefiU+iL._AC_UL320_.jpg'],
    ['ke028', 'Vibrant Ventures', 'Vibrant ethnic outfit.', 899, 4.2, 90, 'https://m.media-amazon.com/images/I/81RJ6zlLzGL._AC_UL320_.jpg'],
    ['ke029', 'Comfort Couture', 'Comfortable ethnic attire.', 799, 4.0, 110, 'https://m.media-amazon.com/images/I/71D397CVKHL._AC_UL320_.jpg'],
    ['ke030', 'Festive Fables', 'Festive ethnic wear.', 1299, 4.7, 80, 'https://m.media-amazon.com/images/I/51B0WOPZ4mL._MCnd_AC_UL320_.jpg']
];

// Query to insert data into the Kids_Ethnic table
let query2 = "INSERT INTO Kids_Ethnic (product_id, name, description, price, rating, available, image) VALUES ?";
connection.query(query2, [kidsEthnicValues], (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
});

// kids pants
let kidsPantsValues = [
    ['kp001', "Carter's Boys' Pull-On Pants", 'Comfortable pull-on pants for boys.', 699, 4.5, 100, 'https://m.media-amazon.com/images/I/61r1xiZt9VL._AC_UL320_.jpg'],
    ['kp002', "Levi's Kids 511 Slim Fit Jeans", 'Stylish slim fit jeans for kids.', 1299, 4.7, 80, 'https://m.media-amazon.com/images/I/71bSVw05MZL._AC_UL320_.jpg'],
    ['kp003', "The Children's Place Boys' Jogger Pants", 'Casual jogger pants for boys.', 899, 4.2, 120, 'https://m.media-amazon.com/images/I/81lO6urAyCS._AC_UL320_.jpg'],
    ['kp004', "OshKosh B'gosh Boys' Straight Fit Jeans", 'Durable straight fit jeans.', 1499, 4.8, 90, 'https://m.media-amazon.com/images/I/714ar3AP2ZL._AC_UL320_.jpg'],
    ['kp005', "Spotted Zebra Boys' Knit Pants", 'Soft knit pants for everyday wear.', 799, 4.3, 110, 'https://m.media-amazon.com/images/I/91OTTTri+YL._AC_UL320_.jpg'],
    ['kp006', "Simple Joys by Carter's Toddler Pants", 'Comfortable pants for toddlers.', 999, 4.6, 75, 'https://m.media-amazon.com/images/I/91HhTt39jUL._AC_UL320_.jpg'],
    ['kp007', "Wrangler Authentics Boys' Classic Cargo Pants", 'Classic cargo pants with multiple pockets.', 699, 4.1, 130, 'https://m.media-amazon.com/images/I/61bg1ONG-vL._AC_UL320_.jpg'],
    ['kp008', "Amazon Essentials Boys' Fleece Jogger Pants", 'Warm fleece jogger pants.', 899, 4.4, 85, 'https://m.media-amazon.com/images/I/51OBAzu8EsL._AC_UL320_.jpg'],
    ['kp009', "Under Armour Kids' Brawler Pants", 'Sporty pants for active kids.', 1099, 4.2, 95, 'https://m.media-amazon.com/images/I/61f3-CIxemL._AC_UL320_.jpg'],
    ['kp010', "Adidas Kids' Tiro 21 Track Pants", 'Comfortable track pants for kids.', 1299, 4.5, 100, 'https://m.media-amazon.com/images/I/61x6-gTlMlL._AC_UL320_.jpg'],
    ['kp011', "Gymboree Boys' Chino Pants", 'Stylish chino pants for boys.', 799, 4.0, 110, 'https://m.media-amazon.com/images/I/71aM+oP4JxL._AC_UL320_.jpg'],
    ['kp012', "Nike Kids' Dri-FIT Pants", 'Breathable pants for sports.', 999, 4.7, 80, 'https://m.media-amazon.com/images/I/61MY-d2gfEL._AC_UL320_.jpg'],
    ['kp013', "Hanes Boys' EcoSmart Fleece Pants", 'Eco-friendly fleece pants.', 899, 4.3, 90, 'https://m.media-amazon.com/images/I/61YxXOZWSbL._AC_UL320_.jpg'],
    ['kp014', "Columbia Boys' Silver Ridge Pull-On Pants", 'Durable pants for outdoor activities.', 699, 4.1, 120, 'https://m.media-amazon.com/images/I/91vacU3vEuL._AC_UL320_.jpg'],
    ['kp015', "Lee Boys' Performance Series Comfort Slim Pant", 'Comfortable slim pants for kids.', 1299, 4.6, 75, 'https://m.media-amazon.com/images/I/71FKTA4FX6L._AC_UL320_.jpg'],
    ['kp016', "Disney Girls' Character Pants", 'Fun pants with Disney characters.', 999, 4.4, 85, 'https://m.media-amazon.com/images/I/51mCLO7WCDL._AC_UL320_.jpg'],
    ['kp017', "Fruit of the Loom Girls' Fleece Sweatpants", 'Cozy sweatpants for boys.', 1099, 4.5, 100, 'https://m.media-amazon.com/images/I/51mCLO7WCDL._AC_UL320_.jpg'],
    ['kp018', "PUMA Boys' Active Pants", 'Active pants for sports and play.', 899, 4.2, 90, 'https://m.media-amazon.com/images/I/71iMFmej1nL._AC_UL320_.jpg'],
    ['kp019', "Tommy Hilfiger Boys' Stretch Twill Chino Pants", 'Stylish stretch chino pants.', 799, 4.0, 110, 'https://m.media-amazon.com/images/I/71+Wq+4oXBL._AC_UL320_.jpg'],
    ['kp020', "Jordan Kids' Jumpman Air Pants", 'Cool pants for active kids.', 1299, 4.7, 80, 'https://m.media-amazon.com/images/I/61UknC+UJJL._AC_UL320_.jpg'],
    ['kp021', "H&M Girlss' Jogger Pants", 'Comfortable jogger pants for boys.', 999, 4.3, 85, 'https://m.media-amazon.com/images/I/71tPcJGvuIL._AC_UL320_.jpg'],
    ['kp022', "Zara Boys' Skinny Fit Jeans", 'Trendy skinny fit jeans.', 1099, 4.5, 100, 'https://m.media-amazon.com/images/I/61byrE4bPCL._AC_UL320_.jpg'],
    ['kp023', "Gap Kids Girls' Cargo jagger Pants", 'Easy pull-on pants for boys.', 899, 4.2, 90, 'https://m.media-amazon.com/images/I/51hR19vJzjL._AC_UL320_.jpg'],
    ['kp024', "Old Navy Boys' Straight Fit Jeans", 'Classic straight fit jeans.', 799, 4.0, 110, 'https://m.media-amazon.com/images/I/81ebvdo9MSL._AC_UL320_.jpg'],
    ['kp025', "Uniqlo Boys' Dry Stretch Sweatpants", 'Stretchy sweatpants for active kids.', 1299, 4.7, 80, 'https://m.media-amazon.com/images/I/61m6by0o1mL._AC_UL320_.jpg'],
    ['kp026', "Abercrombie Kids' Cargo Jogger Pants", 'Stylish cargo jogger pants.', 999, 4.4, 85, 'https://m.media-amazon.com/images/I/51ygnJcbYdL._AC_UL320_.jpg'],
    ['kp027', "Patagonia Boys' Baggies Shorts", 'Comfortable shorts for boys.', 1099, 4.5, 100, 'https://m.media-amazon.com/images/I/A1b-2-6mm3L._AC_UL320_.jpg'],
    ['kp028', "Reebok Boys' Active Pants", 'Active pants for running and play.', 899, 4.2, 90, 'https://m.media-amazon.com/images/I/51NEQEiqSUL._AC_UL320_.jpg'],
    ['kp029', "L.L.Bean Boys' Athletic Pants", 'Athletic pants for kids.', 799, 4.0, 110, 'https://m.media-amazon.com/images/I/81A4xFns1jL._AC_UL320_.jpg'],
    ['kp030', "North Face Boys' Winter Pants", 'Warm pants for winter.', 1299, 4.7, 80, 'https://m.media-amazon.com/images/I/6100jpIH65L._AC_UL320_.jpg']
];


// Query to insert data into the Kids_Pants table
let query3 = "INSERT INTO Kids_Pant (product_id, name, description, price, rating, available, image) VALUES ?";
connection.query(query3, [kidsPantsValues], (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
}); 


//kids_night wear
let kids_nightwearValues = [
    ['p01', 'RANJ', 'Satin Fabric Front Open Multi Printed Colored Night Suit with Pocket for Girls Nightwear Loungewear Clothes Set', 668.00, 4.9, 100, 'https://m.media-amazon.com/images/I/81cAyUcO9xL._AC_UL320_.jpg'],
    ['p02', 'Generic', 'Mickey Print Nightsuit for Kids - Stylish and Comfortable Sleepwear', 679.00, 5.0, 100, 'https://m.media-amazon.com/images/I/61gmZzazG+L._AC_UL320_.jpg'],
    ['p03', 'NITE FLITE', 'Boy\'s Cotton Starred Top & Pajama Set', 1539.00, 4.5, 100, 'https://m.media-amazon.com/images/I/616GY+iQVjL._AC_UL320_.jpg'],
    ['p04', 'TotzTouch', 'Kids Girls Night Wear T Shirt & Pyjama | Night Dress for Girl Kids | Night Dresses Tee Top & Pajama Pant Set of 3 & 2 (Size Options - Age 6 Months to 15 Years)', 1899.00, 4.8, 100, 'https://m.media-amazon.com/images/I/81ujbvQj8sL._AC_UL320_.jpg'],
    ['p05', 'Generic', 'Fancy Printed Kids Night Suit Pink Heart', 599.00, 4.6, 100, 'https://m.media-amazon.com/images/I/51-2XyaO4HL._AC_UL320_.jpg'],
    ['p06', 'Kiddos', 'Pyjama Set for Girls/Night Suit for Girls/Nightwear/Sleepwear/Loungewear for Girls Combo Pack of 5', 1409.00, 4.5, 100, 'https://m.media-amazon.com/images/I/91ZsKi8FLIL._AC_UL320_.jpg'],
    ['p07', 'BLANCD', 'Girls Nightwear Colourblock tshirt & Pyjama Set (Lavender/Party Pink, 10 Yrs)', 699.00, 4.8, 100, 'https://m.media-amazon.com/images/I/51ck-M-QUdL._AC_UL320_.jpg'],
    ['p08', 'Ninos Dreams', 'Cotton Boys Full Sleeves Coord Set ! Night Suit for Boy\'s ! Tshirt with Jogger Set', 599.00, 4.6, 100, 'https://m.media-amazon.com/images/I/61Zr63EjmJL._AC_UL320_.jpg'],
    ['p09', 'arriva fab', 'Unisex Pure Cotton Short Sleeve Kids Night Dress for Boys & Girls Nightwear/Sleepsuit/Sleepwear/Loungewear Night Suit for Boys and Girls Top and Pyjama Combo Set', 979.00, 4.8, 100, 'https://m.media-amazon.com/images/I/417812ovYWL._AC_UL320_.jpg'],
    ['p10', 'Hopscotch', 'Boys Cotton All-Over Print Top and Pajama Set', 699.00, 4.6, 100, 'https://m.media-amazon.com/images/I/61n7vIJPBiL._AC_UL320_.jpg'],
    ['p11', 'The Mom Store', 'Kids Pajama Set Combo | Cotton | Nightwear |Night Suit | Sleepwear for Baby/Kids | Soft | Comfortable | Cool Prints | for Boys and Girls', 799.00, 4.5, 100, 'https://m.media-amazon.com/images/I/716GPxEao2L._AC_UL320_.jpg'],
    ['p12', 'Clothe Funn', 'Girls Co-Ord Set, Girls Nightwear Set', 1999.00, 4.8, 100, 'https://m.media-amazon.com/images/I/61qa6C0oyyL._AC_UL320_.jpg'],
    ['p13', 'Tweeny Mini', 'Kids Girls Sleepwear | Night Suit | Night Wear | Top & Pyjama Set Full Sleeve with Pockets for Girls with Buttons (Pure Rayon)', 2099.00, 4.6, 100, 'https://m.media-amazon.com/images/I/71DzXaBL6nL._AC_UL320_.jpg'],
    ['p14', 'Li\'l Tomatoes', 'Lil Tomatoes Girls Disney Cotton Night Suits, Green', 919.00, 4.8, 100, 'https://m.media-amazon.com/images/I/61XKbN8Xa3L._AC_UL320_.jpg'],
    ['p15', 'YouGotPlanB', 'Unisex 100% Cotton Short & Tee Night Suit -Glow in The Dark  Kids Nightwear/Nightdress for Boys and Girls T-Shirt & Shorts Set', 759.00, 4.6, 100, 'https://m.media-amazon.com/images/I/61jPCXn94NL._AC_UL320_.jpg'],
    ['p16', 'TotzTouch', 'Boys Pure Cotton Night Suit | Pajamas | Nightwear Raglan Full Sleeves Dress Set of 5 Multicolor Size 1 to 2 Y', 1799.00, 4.8,902, 'https://m.media-amazon.com/images/I/61UCtXzDApL._AC_UL320_.jpg'],
    ['p17', 'NITE FLITE', 'Boys Airplane Printed 100% Cotton Nightwear Full Sleeve | Top and Pyjama Set', 599.00, 4.6,789,'https://m.media-amazon.com/images/I/61Kx4ERQcAL._AC_UL320_.jpg'],
    ['p18', 'JUST4YOU', 'Girls Cotton Night Wear T-Shirt & Pyjama Set', 499.00, 4.5,465, 'https://m.media-amazon.com/images/I/41UqWBIQjTL._AC_UL320_.jpg'],
    ['p19',  'Ninos Dreams','100% Cotton Girls Night Suit with Pyjama Half Sleeves', 899.00, 4.8,785,'https://m.media-amazon.com/images/I/61XOZgnaxLL._AC_UL320_.jpg'],
    ['p20', 'Hush Bunny', 'Boys Cotton Text Print Top And Pajama Set', 701.00, 4.6, 542, 'https://m.media-amazon.com/images/I/41PELFxBVaL._AC_UL320_.jpg'],
];

let query4 = "INSERT INTO Kids_Night(product_id,name, description, price, rating, available,image) VALUES ?";
connection.query(query4, [kids_nightwearValues], (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Data inserted into kids_nightwear table.');
    }
});
// Close the connection
connection.end();




