const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({msg: 'hello kerolos in your first api app I wanna be happy'}));

//define routes
app.use('/api/users', require('./Routes/users'));
app.use('/api/auth', require('./Routes/auth'));
app.use('/api/contacts', require('./Routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));