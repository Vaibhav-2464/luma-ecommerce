const express = require('express');
const cors = require('cors');
require("dotenv").config();


const connection = require("./config/db");


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.json({
        message:"E-commerce is running"
    })
})

//Products API

app.get("/products", (req, res)=>{
  connection.query("SELECT * FROM products", (err, results)=>{
    res.send(results);
  })
});


app.get("/products/:id",  (req, res)=>{
    connection.query("SELECT * FROM products WHERE id= ?",
        [req.params.id],
        (err, results)=>{
            if(err){
                return res.status(500).json({error:err.message})
            }
            if(results.length > 0){
                return res.send(results[0])
            }
        else{
            return res.status(500).json({message:"product doesnt exist"})
        }
    })
});


app.post("/products",  (req, res)=>{
    console.log(req.body)
if(req.body.name && req.body.description && req.body.price && req.body.category && req.body.image && req.body.stock){
    const products = {
        name: req.body.name,
        description : req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image,
        stock : req.body.stock,
      
    }
    connection.query(`INSERT  INTO products (name, description,  price, category, image, stock)
        VALUES(?,?,?,?,?,?)`,
        [products.name,
            products.description,
            products.price,
            products.category,
            products.image,
            products.stock,
        

        ],
        (err, results)=>{
            if(err){
              return  res.status(500).json({error:err.message})
            }
           return res.status(200).json({message:"Product added succssfully"})
        }
    )
} else{
return res.status(400).json({message :" all fields are require"})
}
})


app.put("/products/:id", (req, res)=>{
    connection.query(`UPDATE products SET name=?, description =?, price=?, category=?, image=?, stock = ? WHERE id = ?`, [req.body.name, req.body.description, req.body.price, req.body.category, req.body.image, req.body.stock,req.params.id],
        (err, results)=>{
            if(err){
                return res.status(500).json({error: err.message})
            }
            if(results.affectedRows){
                return res.status(201).json({message:"Updated sucessfully"})
            }
            else{
            return res.status(200).json({message:"product doesnt exist"})}
        }
    )
})


app.delete("/products/:id", (req, res)=>{
    connection.query(`DELETE FROM products WHERE id = ?`,
        [req.params.id],
        (err, results)=>{
            if(err){
                return res.status(500).json({error: err.message})
            }
            if(results.affectedRows){
            return res.status(201).json({message:"product deleted successfully"})
        }
        else{
            return res.status(500).json({message:"Product doesnt exist"})
        }
        }
    )
})



//orders API

app.get("/orders", (req, res)=>{
    connection.query(`SELECT * FROM  orders`,
        (err, results)=>{
            if(err){
                return res.status(500).json({error : err.message})
            }  
           
                return res.json(results)
            
        }
    )
})


app.get("/orders/:order_id",(req, res)=>{
    connection.query(`SELECT * FROM orders WHERE order_id= ?`, [req.params.order_id],
        (err, results)=>{
            if(err){
                return res.status(500).json({error: err.message})
            }
            return res.json(results)
        }
    )
})


app.post("/orders", (req, res) => {

    if (req.body.customer_name && req.body.address && req.body.phone && req.body.payment_method && req.body.total_amount) {

        const order = {
            customer_name: req.body.customer_name,
            address: req.body.address,
            phone: req.body.phone,
            payment_method: req.body.payment_method,
            total_amount: req.body.total_amount
        };

        connection.query(
            `INSERT INTO orders
            (customer_name, address, phone, payment_method, total_amount)
            VALUES (?, ?, ?, ?, ?)`,
            [
                order.customer_name,
                order.address,
                order.phone,
                order.payment_method,
                order.total_amount
            ],
            (err, results) => {

                if (err) {
                    return res.status(500).json({
                        error: err.message
                    });
                }

                return res.status(201).json({
                    message: "Order placed successfully"
                });
            }
        );

    } else {

        return res.status(400).json({
            message: "All fields are required"
        });

    }
});


app.put("/orders/:order_id", (req, res)=>{
    connection.query(`UPDATE orders SET customer_name=?, total_amount =?, status= ? WHERE order_id = ?`, [req.body.customer_name, req.body.total_amount, req.body.status,req.params.order_id],
        (err, results)=>{
            if(err){
                return res.status(500).json({error: err.message})
            }
            if(results.affectedRows){
                return res.status(201).json({message:"Updated sucessfully"})
            }
            else{
            return res.status(200).json({message:"order doesnt exist"})}
        }
    )
})


app.delete("/orders/:order_id", (req, res)=>{
    connection.query(`DELETE FROM orders WHERE order_id = ?`,
        [req.params.order_id],
        (err, results)=>{
            if(err){
                return res.status(500).json({error: err.message})
            }
            if(results.affectedRows){
            return res.status(201).json({message:"order deleted successfully"})
        }
        else{
            return res.status(500).json({message:"Order doesnt exist"})
        }
        }
    )
})


//Admin api

app.get("/admin/stats", (req, res) => {
    connection.query(`SELECT
    (SELECT COUNT(*) FROM products) AS totalProducts,
    (SELECT COUNT(*) FROM orders) AS totalOrders,
    (SELECT SUM(total_amount) FROM orders) AS totalRevenue,
    (SELECT COUNT(*) FROM orders WHERE status = 'Pending') AS pendingOrders,
    (SELECT COUNT(*) FROM products WHERE stock < 10) AS lowStockProducts`,
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message })
            }

           return res.json(results[0]);
        }
    )
})


app.get("/admin/sales", (req, res)=>{
    connection.query(`SELECT
        MONTH(created_at) AS month,
        SUM(total_amount) AS revenue
        FROM orders
        GROUP BY MONTH(created_at)
ORDER BY MONTH(created_at)`,
 (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message })
            }

           return res.json(results);
        })
})

app.get("/admin/categories", (req, res) => {

    connection.query(`
        SELECT
            category,
            COUNT(*) AS totalProducts
        FROM products
        GROUP BY category
    `,

    (err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            })
        }

       return res.json(results);
    })
})



app.get("/admin/order-status", (req, res) => {

    connection.query(`
        SELECT
            status,
            COUNT(*) AS totalOrders
        FROM orders
        GROUP BY status
    `,

    (err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            })
        }

        return res.json(results);
    })
})

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
});