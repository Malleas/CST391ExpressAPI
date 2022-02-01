const express = require('express')
const bodyParser = require("body-parser");
const {ProductsDAO} = require("./lib/app/database/ProductsDAO");
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const {Product} = require("./lib/app/models/Product");
const {UsersDAO} = require("./lib/app/database/UsersDAO");
const {User} = require("./lib/app/models/User");
const app = express();
const port = 3000;

const dbHost = 'localhost';
const dbPort = 8889;
const dbUsername = 'root';
const dbPassword = 'root';

app.get("/", (req, res) => res.send("Express API Milestone"))
app.listen(port);
app.use(bodyParser.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get("/products", function (_req, res){
    let dao = new ProductsDAO(dbHost,dbPort, dbUsername, dbPassword)
    dao.findAllProducts(function (products){
        if(products != null){
            res.status(200).json(products)
        }else {
            res.status(400).json({error: "No products found."})
        }
    })
})

app.get("/products/:id", function (_req, res){
    let dao = new ProductsDAO(dbHost, dbPort, dbUsername,dbPassword)
    dao.findProductById(_req.params.id, function (product){
        if(product != null){
            res.status(200).json(product)
        }else {
            res.status(400).json({error: "ID not found"})
        }
    })
})

app.post("/product", function (_req, res){
    let dao = new ProductsDAO(dbHost, dbPort, dbUsername,dbPassword)
    let product = new Product(_req.body.productName, _req.body.productDescription, _req.body.productPrice, _req.body.productQuantity);
    dao.createProduct(product, function (status){
        if(status === 1){
            res.status(200).json({success: "Product added"})
        }else {
            res.status(400).json({error: "Not found"})
        }
    })
})

app.post("/product/:id", function (_req, res){
    let dao = new ProductsDAO(dbHost, dbPort, dbUsername,dbPassword)
    let product = new Product(_req.body.productName, _req.body.productDescription, _req.body.productPrice, _req.body.productQuantity);
    dao.updateProduct(product, _req.params.id, function (status){
        if(status === 1){
            res.status(200).json({success: "Product updated"})
        }else {
            res.status(400).json({error: "Not found"})
        }
    })
})

app.delete("/product/:id", function (_req, res){
    let dao = new ProductsDAO(dbHost, dbPort, dbUsername,dbPassword)
    dao.deleteProduct(_req.params.id, function (status){
        if(status === 1){
            res.status(200).json({success: "Product Deleted"})
        }else {
            res.status(400).json({error: "Not found"})
        }
    })
})

app.get("/users", function (_req, res){
    let dao = new UsersDAO(dbHost,dbPort, dbUsername, dbPassword)
    dao.findAllUsers(function (users){
        if(users != null){
            res.status(200).json(users)
        }else {
            res.status(400).json({error: "No users found."})
        }
    })
})

app.get("/users/:id", function (_req, res){
    let dao = new UsersDAO(dbHost, dbPort, dbUsername,dbPassword)
    dao.findUserById(_req.params.id, function (user){
        if(user != null){
            res.status(200).json(user)
        }else {
            res.status(400).json({error: "ID not found"})
        }
    })
})

app.post("/users", function (_req, res){
    let dao = new UsersDAO(dbHost, dbPort, dbUsername,dbPassword)
    let user = new User(_req.body.firstName, _req.body.lastName, _req.body.email, _req.body.phoneNumber, _req.body.username, _req.body.password);
    dao.createProduct(user, function (status){
        if(status === 1){
            res.status(200).json({success: "User added"})
        }else {
            res.status(400).json({error: "Not found"})
        }
    })
})

app.post("/users/:id", function (_req, res){
    let dao = new UsersDAO(dbHost, dbPort, dbUsername,dbPassword)
    let user = new User(_req.body.firstName, _req.body.lastName, _req.body.email, _req.body.phoneNumber, _req.body.username, _req.body.password);
    dao.updateProduct(user, _req.params.id, function (status){
        if(status === 1){
            res.status(200).json({success: "User Updated"})
        }else {
            res.status(400).json({error: "Not found"})
        }
    })
})

app.delete("/user/:id", function (_req, res){
    let dao = new UsersDAO(dbHost, dbPort, dbUsername,dbPassword)
    dao.deleteProduct(_req.params.id, function (status){
        if(status === 1){
            res.status(200).json({success: "User deleted"})
        }else {
            res.status(400).json({error: "Not found"})
        }
    })
})

