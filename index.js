const express = require('express');
const cookieParser = require('cookie-parser')


const app = express();
app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({cool: "Yes"})
})

app.listen(process.env.PORT || 5000, () => console.log('Server is on'))