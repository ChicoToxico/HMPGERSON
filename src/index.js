const cors = require('cors');
const express = require('express');
const app = express();
const IndexRoutes = require('./routes/index');
const TaskRoutes = require('./routes/task');
// configuracion del puerto
app.set('port',process.env.PORT || 3000)

// html desde el servidor
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// rutas

app.use(IndexRoutes);// se puede almacenar tambien como constante
app.use(TaskRoutes);


app.listen(app.get('port'), ()=>{
  console.log('escuchando en el puesto ' , app.get('port'));
});
