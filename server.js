const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: "http://localhost:5173", credentials: true
}));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'demo_db',
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
  }
  else {
    console.log('Connected to database.');
  }
})

app.post('/add_user', (req, res) => {
  const { name, email, password } = req.body;
  const sql = "INSERT INTO users (name,email,password) values (?,?,?)";
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).send('Error inserting user');
    }
    else {
      res.status(200).send('User added successfully');
    }
  })
});


app.get('/list_users', (req, res) => {
  const sql = "SELECT * from users";
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Error fetching users');
    }
    else {
      res.status(200).json(result);
    }
  })
})

app.put('/update_user/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const sql = "UPDATE users SET name=?, email=?, password=? WHERE id=?";
  db.query(sql, [name, email, password, id], (err, result) => {
    if (err) {
      console.error('Error updating user:', err);
      res.status(500).send('Error updating user');
    }
    else {
      res.status(200).send('User updated successfully');
    }
  })
})

app.delete('/delete_user/:id', (req, res) => {
  const { id } = req.params;
  const sql =
    "DELETE FROM users WHERE id=?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error deleting User:', err);
      res.status(500).send('Error deleting User');
    }
    else {
      res.status(200).send('User deleted successfully');
    }
  })
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})