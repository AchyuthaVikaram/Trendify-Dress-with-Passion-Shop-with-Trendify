const express=require("express");
const app=express();
const mysql=require("mysql2");
const port=8080;
const path=require("path");
const ejsMate=require("ejs-mate");
let userEmail="";

app.set("view enginge","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
// app.use(methodOverride('_method'));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"public")));

// creating mysql connection
const connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"Trendify",
    password:"AmmaAchyu@1389"
})

//home route
app.get("/",(req,res)=>{
     res.render("home.ejs");
    
})

//men
app.get("/men",(req,res)=>{
    let query="SELECT * FROM Men_Tshirt";
    connection.query(query,(err,result)=>{
        if(err) {console.log(err);
            res.send("error");
        }
        else{
            console.log(result);
            res.render("men/men.ejs",{result});
        }
    }) 
});

app.get("/men/tshirt",(req,res)=>{
    let query="SELECT * FROM Men_Tshirt";
    connection.query(query,(err,result)=>{
        if(err) {console.log(err);
            res.send("error");
        }
        else{
            console.log(result);
            res.render("men/men_tshirt.ejs",{result});
        }
    }) 
})
app.get("/men/jeans",(req,res)=>{
    let query="SELECT * FROM Men_Jean";
    connection.query(query,(err,result)=>{
        if(err) {console.log(err);
            res.send("error");
        }
        else{
            console.log(result);
            res.render("men/men_jean.ejs",{result});
        }
    }) 
})
app.get("/men/ethnic",(req,res)=>{
    let query="SELECT * FROM Men_Ethnic";
    connection.query(query,(err,result)=>{
        if(err) {console.log(err);
            res.send("error");
        }
        else{
            console.log(result);
            res.render("men/men_ethnic.ejs",{result});
        }
    }) 
})
app.get("/men/beachshirts",(req,res)=>{
    let query="SELECT * FROM Men_Beach";
    connection.query(query,(err,result)=>{
        if(err) {console.log(err);
            res.send("error");
        }
        else{
            console.log(result);
            res.render("men/men_beach.ejs",{result});
        }
    }) 
})
app.get("/men/shorts",(req,res)=>{
    let query="SELECT * FROM Men_Short";
    connection.query(query,(err,result)=>{
        if(err) {console.log(err);
            res.send("error");
        }
        else{
            console.log(result);
            res.render("men/men_short.ejs",{result});
        }
    }) 
})
app.get("/men/tshirt/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let query=`SELECT * FROM Men_Tshirt WHERE product_id="${id}"`;
    connection.query(query,(err,result)=>{
        if(err){console.log(err);}
        else{
            let product=result[0];
            res.render("men/show_tshirt.ejs",{product});
        }
    })
})
app.get("/men/jeans/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let query=`SELECT * FROM Men_Jean WHERE product_id="${id}"`;
    connection.query(query,(err,result)=>{
        if(err){console.log(err);}
        else{
            let product=result[0];
            res.render("men/show_jean.ejs",{product});
        }
    })
})
app.get("/men/ethnic/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let query=`SELECT * FROM Men_Ethnic WHERE product_id="${id}"`;
    connection.query(query,(err,result)=>{
        if(err){console.log(err);}
        else{
            let product=result[0];
            res.render("men/show_ethnic.ejs",{product});
        }
    })
})
app.get("/men/beachshirts/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let query=`SELECT * FROM Men_Beach WHERE product_id="${id}"`;
    connection.query(query,(err,result)=>{
        if(err){console.log(err);}
        else{
            let product=result[0];
            res.render("men/show_beach.ejs",{product});
        }
    })
})
app.get("/men/shorts/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let query=`SELECT * FROM Men_Short WHERE product_id="${id}"`;
    connection.query(query,(err,result)=>{
        if(err){console.log(err);}
        else{
            let product=result[0];
            res.render("men/show_short.ejs",{product});
        }
    })
})

//women
app.get("/women",(req,res)=>{
    let query="SELECT * FROM Women_kurta";
    connection.query(query,(err,result)=>{
        if(err) {console.log(err);
            res.send(err);
        }
        else{
            console.log(result);
            res.render("women/women.ejs",{result});
        }
    }) 
});
app.get("/women/kurta",(req,res)=>{
    let query="SELECT * FROM Women_kurta";
    connection.query(query,(err,result)=>{
        if(err) {console.log(err);
            res.send("error");
        }
        else{
            console.log(result);
            res.render("women/women_kurta.ejs",{result});
        }
    }) 
})
app.get("/women/jean",(req,res)=>{
    let query="SELECT * FROM Women_Jean";
    connection.query(query,(err,result)=>{
        if(err) {console.log(err);
            res.send("error");
        }
        else{
            console.log(result);
            res.render("women/women_jean.ejs",{result});
        }
    }) 
})
app.get("/women/ethnic",(req,res)=>{
    let query="SELECT * FROM Women_Ethnic";
    connection.query(query,(err,result)=>{
        if(err) {console.log(err);
            res.send("error");
        }
        else{
            console.log(result);
            res.render("women/women_ethnic.ejs",{result});
        }
    }) 
})
app.get("/women/modern",(req,res)=>{
    let query="SELECT * FROM Women_Modern";
    connection.query(query,(err,result)=>{
        if(err) {console.log(err);
            res.send("error");
        }
        else{
            console.log(result);
            res.render("women/women_modern.ejs",{result});
        }
    }) 
})
app.get("/women/short",(req,res)=>{
    let query="SELECT * FROM Women_Short";
    connection.query(query,(err,result)=>{
        if(err) {console.log(err);
            res.send("error");
        }
        else{
            console.log(result);
            res.render("women/women_shortkurta.ejs",{result});
        }
    }) 
})
app.get("/women/kurta/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let query=`SELECT * FROM Women_kurta WHERE product_id="${id}"`;
    connection.query(query,(err,result)=>{
        if(err){console.log(err);}
        else{
            let product=result[0];
            res.render("women/show_kurta.ejs",{product});
        }
    })
})
app.get("/women/jean/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let query=`SELECT * FROM Women_Jean WHERE product_id="${id}"`;
    connection.query(query,(err,result)=>{
        if(err){console.log(err);}
        else{
            let product=result[0];
            res.render("women/show_jean.ejs",{product});
        }
    })
})
app.get("/women/ethnic/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let query=`SELECT * FROM Women_Ethnic WHERE product_id="${id}"`;
    connection.query(query,(err,result)=>{
        if(err){console.log(err);}
        else{
            let product=result[0];
            res.render("women/show_ethnic.ejs",{product});
        }
    })
})
app.get("/women/modern/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let query=`SELECT * FROM Women_Modern WHERE product_id="${id}"`;
    connection.query(query,(err,result)=>{
        if(err){console.log(err);}
        else{
            let product=result[0];
            res.render("women/show_modern.ejs",{product});
        }
    })
})
app.get("/women/shortkurta/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let query=`SELECT * FROM Women_Short WHERE product_id="${id}"`;
    connection.query(query,(err,result)=>{
        if(err){console.log(err);}
        else{
            let product=result[0];
            res.render("women/show_shortkurta.ejs",{product});
        }
    })
})
//kids
app.get("/kids",(req,res)=>{
    let query="SELECT * FROM Kids_Dress";
    connection.query(query,(err,result)=>{
        if(err) {console.log(err);
            res.send("error");
        }
        else{
            console.log(result);
            res.render("kids/kids.ejs",{result});
        }
    }) 
});
app.get("/kids/dress",(req,res)=>{
    let query="SELECT * FROM Kids_Dress";
    connection.query(query,(err,result)=>{
        if(err) {console.log(err);
            res.send("error");
        }
        else{
            console.log(result);
            res.render("kids/kids_dress.ejs",{result});
        }
    })
    
})

app.get("/kids/tshirt",(req,res)=>{
    let query="SELECT * FROM Kids_Tshirt";
    connection.query(query,(err,result)=>{
        if(err) {console.log(err);
            res.send("error");
        }
        else{
            console.log(result);
            res.render("kids/kids_tshirt.ejs",{result});
        }
    })
})

app.get("/kids/pant",(req,res)=>{
    let query="SELECT * FROM Kids_Pant";
    connection.query(query,(err,result)=>{
        if(err) {console.log(err);
            res.send("error");
        }
        else{
            console.log(result);
            res.render("kids/kids_pants.ejs",{result});
        }
    })
    
})
app.get("/kids/ethnic",(req,res)=>{
    let query="SELECT * FROM Kids_Ethnic";
    connection.query(query,(err,result)=>{
        if(err) {console.log(err);
            res.send("error");
        }
        else{
            console.log(result);
            res.render("kids/kids_ethnic.ejs",{result});
        }
    })
})
app.get("/kids/nightwear",(req,res)=>{
    let query="SELECT * FROM Kids_Night";
    connection.query(query,(err,result)=>{
        if(err) {console.log(err);
            res.send("error");
        }
        else{
            console.log(result);
            res.render("kids/kids_night.ejs",{result});
        }
    })
})
app.get("/kids/dress/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let query=`SELECT * FROM Kids_Dress WHERE product_id="${id}"`;
    connection.query(query,(err,result)=>{
        if(err){console.log(err);}
        else{
            let product=result[0];
            res.render("kids/show_dress.ejs",{product});
        }
    })
})
app.get("/kids/tshirt/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let query=`SELECT * FROM Kids_Tshirt WHERE product_id="${id}"`;
    connection.query(query,(err,result)=>{
        if(err){console.log(err);}
        else{
            let product=result[0];
            res.render("kids/show_tshirt.ejs",{product});
        }
    })
})
app.get("/kids/pants/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let query=`SELECT * FROM Kids_Pant WHERE product_id="${id}"`;
    connection.query(query,(err,result)=>{
        if(err){console.log(err);}
        else{
            let product=result[0];
            res.render("kids/show_pant.ejs",{product});
        }
    })
})
app.get("/kids/ethnic/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let query=`SELECT * FROM Kids_Ethnic WHERE product_id="${id}"`;
    connection.query(query,(err,result)=>{
        if(err){console.log(err);}
        else{
            let product=result[0];
            res.render("kids/show_ethnic.ejs",{product});
        }
    })
})
app.get("/kids/nightwear/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let query=`SELECT * FROM Kids_Night WHERE product_id="${id}"`;
    connection.query(query,(err,result)=>{
        if(err){console.log(err);}
        else{
            let product=result[0];
            res.render("kids/show_night.ejs",{product});
        }
    })
})


//login form
app.get("/login",(req,res)=>{
    res.render("loginform.ejs");
})
app.post("/login",(req,res)=>{
    let user=req.body.user;
    userEmail=user.email;
    let values=[user.email,user.password,user.name,user.city,user.state,user.country,user.pincode,user.mobile_no];
    let q='INSERT INTO Users(email,password,name,city,state,country,pincode,mobile_no) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(q,values,(err,result)=>{
        if(err){console.log(err);}
        else{
            console.log(result);
        }
    })
    res.redirect("/");
})
app.get("/signup",(req,res)=>{
    res.render("signupform.ejs");
})
app.post("/signup",(req,res)=>{
    let user=req.body.user;
    userEmail=user.email;
    let values=[user.email,user.password];
    let q=`SELECT *  FROM Users WHERE email="${user.email}"`;
    connection.query(q,values,(err,result)=>{
        if(err){console.log(err)}
        else{
            if(result.length==0){
                text="User does not exist Please Login!"
                res.render("error.ejs",{msg:text});
            }
            else if(result[0].password!=user.password){
                text="Password is Incorrect.Please enter correct password & try again !!"
                res.render("error.ejs",{msg:text});
            }else
              res.redirect("/");
        }
    })
})

app.get("/profile",(req,res)=>{
    if(userEmail=== ""){
        text="Please Login/Signup !!"
        res.render("error.ejs",{msg:text});
    }
    let q=`SELECT *  FROM Users WHERE email="${userEmail}"`;
    connection.query(q,(err,result)=>{
        if(err){console.log(err)}
        else{
            let user=result[0];
            res.render("profile.ejs",{user});
        }
    })

})

//  cart 
app.get("/cart/product/:id",(req,res)=>{
    let {id}=req.params;
    let q=`SELECT * FROM cart WHERE order_id="${id}"`
    connection.query(q,(err,result)=>{
        if(err){
            text="Error while Fetching the data !!"
        res.render("error.ejs",{msg:text});
        }else{
            let product=result[0];
            res.render("show_cart.ejs",{product})
        }
    })
})

app.get("/cart/:tablename/:id", (req, res) => {
    let { tablename, id } = req.params;
    if (userEmail === "") {
        text="Please Login/SignUp!"
        res.render("error.ejs",{msg:text});
    } else {
        let q = `SELECT * FROM ${tablename} WHERE product_id="${id}"`;
        connection.query(q, (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error fetching product details");
            } else {
                if (results.length > 0) {
                    let order = results[0];
                    let q2 = `INSERT INTO cart(order_id, name, description, price, rating, available, image, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
                    let values = [order.product_id, order.name, order.description, order.price, order.rating, order.available, order.image, userEmail];
                    connection.query(q2, values, (err2, res2) => {
                        if (err2) {
                            console.log(err2);
                            res.status(500).send("Error inserting into cart");
                        } else {
                            console.log(res2);
                            res.redirect("/cart");
                        }
                    });
                } else {
                    res.status(404).send("Product not found");
                }
            }
        });
    }
});

app.get("/cart",(req,res)=>{
    // userEmail='achyuthavikaram@gmail.com'
    if(userEmail=== ""){
        text="Please Login/Signup !!"
        res.render("error.ejs",{msg:text});
    }
    let q=`SELECT * FROM cart WHERE email="${userEmail}"`;
    connection.query(q,(err,results)=>{
        if(err){
            text="Error While Fetching the data!!"
            res.render("error.ejs",{msg:text});
        }else{
            console.log(results);
            res.render("cart.ejs",{results});
        }
    })
})

// wishlist 
app.get("/wishlist/product/:id",(req,res)=>{
    let {id}=req.params;
    let q=`SELECT * FROM wishlist WHERE order_id="${id}"`
    connection.query(q,(err,result)=>{
        if(err){
            text="Error While Fetching the data!!"
            res.render("error.ejs",{msg:text});
        }else{
            let product=result[0];
            res.render("show_wishlist.ejs",{product})
        }
    })
})
app.get("/wishlist/:tablename/:id", (req, res) => {
    let { tablename, id } = req.params;
    // let userEmail = "achyuthavikaram@gmail.com";
    if (userEmail === "") {
        text="Please login/signup"
        res.render("error.ejs",{msg:text});
    } else {
        let q = `SELECT * FROM ${tablename} WHERE product_id="${id}"`;
        connection.query(q, (err, results) => {
            if (err) {
                text="Error While Fetching the data!!"
                res.render("error.ejs",{msg:text});
            } else {
                if (results.length > 0) {
                    let order = results[0];
                    let q2 = `INSERT INTO wishlist(order_id, name, description, price, rating, available, image, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
                    let values = [order.product_id, order.name, order.description, order.price, order.rating, order.available, order.image, userEmail];
                    connection.query(q2, values, (err2, res2) => {
                        if (err2) {
                            text="Error in insert=ing into wishlist Please TRy again later!!"
                            res.render("error.ejs",{msg:text});
                        } else {
                            console.log(res2);
                            res.redirect("/wishlist");
                        }
                    });
                } else {
                    text="Product not found!!"
                    res.render("error.ejs",{msg:text});
                }
            }
        });
    }
});

app.get("/wishlist",(req,res)=>{
    // userEmail='achyuthavikaram@gmail.com'
    if(userEmail=== ""){
        text="Please Login/Signup"
        res.render("error.ejs",{msg:text});
    }
    let q=`SELECT * FROM wishlist WHERE email="${userEmail}"`;
    connection.query(q,(err,results)=>{
        if(err){
            text="Error While Fetching the data!!"
            res.render("error.ejs",{msg:text});
        }else{
            console.log(results);
            res.render("wishlist.ejs",{results});
        }
    })
})

//orders
app.get("/order/:tablename/:id", (req, res) => {
    let { tablename, id } = req.params;
    // let userEmail = "achyuthavikaram@gmail.com";
    if (userEmail === "") {
        text="Please Login/Signup"
        res.render("error.ejs",{msg:text});
    } else {
        let q = `SELECT * FROM ${tablename} WHERE product_id="${id}"`;
        connection.query(q, (err, results) => {
            if (err) {
                text="Error While Fetching the data!!"
                res.render("error.ejs",{msg:text});
            } else {
                if (results.length > 0) {
                    let order = results[0];
                    let q2 = `INSERT INTO Orders(order_id, name, description, price, rating, available, image, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
                    let values = [order.product_id, order.name, order.description, order.price, order.rating, order.available, order.image, userEmail];
                    connection.query(q2, values, (err2, res2) => {
                        if (err2) {
                            text="Error in making an order plase try agian later"
                            res.render("error.ejs",{msg:text});;
                        } else {
                            console.log(res2);
                            res.redirect("/order");
                        }
                    });
                } else {
                    text="Product not found"
                    res.render("error.ejs",{msg:text});
                }
            }
        });
    }
});

app.get("/order",(req,res)=>{
    // userEmail='achyuthavikaram@gmail.com'
    if(userEmail=== ""){
        text="Please Login/Signup"
        res.render("error.ejs",{msg:text});
    }
    let q=`SELECT * FROM Orders WHERE email="${userEmail}"`;
    connection.query(q,(err,results)=>{
        if(err){
            text="Error While Fetching the data!!"
            res.render("error.ejs",{msg:text});
        }else{
            console.log(results);
            res.render("order.ejs",{results});
        }
    })
})
app.get("/order/:id",(req,res)=>{
    let {id}=req.params;
    let q=`SELECT * FROM Orders WHERE order_id="${id}"`
    connection.query(q,(err,result)=>{
        if(err){
            text="Error While Fetching the data!!"
            res.render("error.ejs",{msg:text});
        }else{
            let product=result[0];
            res.render("show_order.ejs",{product})
        }
    })
})


// privacy 
app.get("/privacy",(req,res)=>{
    res.render("privacy.ejs");
})

// terms&conditions
app.get("/terms",(req,res)=>{
    res.render("terms.ejs");
})

//server
app.listen(port,()=>{
    console.log("app is listening to port 8080");
})