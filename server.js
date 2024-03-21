const { PORT } = require("./config/settings");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config')
// Esto sirve para darle la ruta base a UserRoutes entonces desde ahi creamos el enrutamiento a partir de ahi ya sin repetir
const UserRouter = require("./routes/jokes.routes")
app.use("/api/jokes", UserRouter)


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));