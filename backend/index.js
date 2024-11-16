import express from "express";
import cors from "cors";
import mysql from "mysql";
import path from "path";  // Import the path module

const app = express();
app.use(cors());
app.use(express.json());

// Define the path to your images folder
const imagesPath = path.join('C:\\Users\\ashok\\Downloads\\udemy\\web dev\\MINIPROJECT\\final', 'project', 'src', 'components', 'images', 'pizzasimgs');


// Serve static files from the images folder
app.use('/images', express.static(imagesPath));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Abraham@007",  // Update with your MySQL password
    database: "pizza_store",  // Make sure the database exists
});


// Endpoint to get all pizzas
app.get('/pizzas', (req, res) => {
    db.query('SELECT * FROM pizzas', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error fetching pizzas.");
        } else {
            res.json(results);
        }
    });
});

// Endpoint to add a pizza to the cart
// Endpoint to add a pizza to the cart
app.post('/cart', (req, res) => {
    const { pizza_id, qty } = req.body;

    if (!pizza_id || !qty) {
        return res.status(400).json({ error: "Missing pizza_id or qty in request body." });
    }

    db.query('SELECT * FROM pizzas WHERE id = ?', [pizza_id], (err, results) => {
        if (err) {
            console.error("Error checking pizza existence:", err);
            return res.status(500).json({ error: "Error checking pizza existence." });
        }

        if (results.length === 0) {
            return res.status(400).json({ error: "Pizza not found." });
        }

        db.query('INSERT INTO cart (pizza_id, qty) VALUES (?, ?)', [pizza_id, qty], (err, results) => {
            if (err) {
                console.error("Error adding pizza to cart:", err);
                return res.status(500).json({ error: "Error adding pizza to cart." });
            } else {
                res.json({ message: 'Pizza added to cart', cartId: results.insertId });
            }
        });
    });
});





// Endpoint to get the cart items
// Get cart item by pizza_id
app.get('/cart/pizza/:pizza_id', (req, res) => {
    const pizzaId = req.params.pizza_id;

    db.query(`
        SELECT cart.id, pizzas.name, pizzas.price, pizzas.pizzaimg, cart.qty
        FROM cart
        JOIN pizzas ON cart.pizza_id = pizzas.id
        WHERE cart.pizza_id = ?
    `, [pizzaId], (err, results) => {
        if (err) {
            console.error("Error fetching cart item:", err);
            return res.status(500).json({ error: "Error fetching cart item." });
        } else if (results.length === 0) {
            return res.status(404).json({ error: "Cart item with specified pizza_id not found." });
        } else {
            res.json(results[0]); // Return the single item found
        }
    });
});


app.delete('/cart/pizza/:pizza_id', (req, res) => {
    const pizzaId = req.params.pizza_id;

    db.query('DELETE FROM cart WHERE pizza_id = ?', [pizzaId], (err, results) => {
        if (err) {
            console.error("Error deleting item from cart:", err);
            return res.status(500).json({ error: "Error deleting item from cart." });
        } else if (results.affectedRows === 0) {
            return res.status(404).json({ error: "Item with specified pizza_id not found in cart." });
        } else {
            res.json({ message: 'Item deleted from cart' });
        }
    });
});


// Update cart item quantity by pizza_id
app.put('/cart/pizza/:pizza_id', (req, res) => {
    const pizzaId = req.params.pizza_id;
    const { qty } = req.body;

    if (!qty || qty < 1) {
        return res.status(400).json({ error: "Invalid quantity." });
    }

    db.query('UPDATE cart SET qty = ? WHERE pizza_id = ?', [qty, pizzaId], (err, results) => {
        if (err) {
            console.error("Error updating cart item quantity:", err);
            return res.status(500).json({ error: "Error updating cart item quantity." });
        } else if (results.affectedRows === 0) {
            return res.status(404).json({ error: "Cart item with specified pizza_id not found." });
        } else {
            res.json({ message: 'Cart item quantity updated' });
        }
    });
});


// Start the server
app.listen(8800, () => {
    console.log("Connected to Backend!");
});
