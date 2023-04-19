const express = require("express");
const passport = require("passport");
const app = express();
require("./auth")(passport); //importar el archivo de autenticacion

const port = 3000;

app.get("/", (req, res) => {
  //req es la petición del cliente
  //res es la respuesta del servidor

  res.status(200).send("Hello World!");
});

app.post("/login", (req, res) => {
  //comprobamos las credenciales

  //si no son validas

  //si son validos generamos un jwt y lo devolvemos
  res.status(200).send.json({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.-siyFA5t7Zs2wH0GSXB-ctxPxSHUW-2o_bhk-le32h0",
  });
});

app.post("/tema/pokemons", (req, res) => {
  res.status(200).send("Teams!");
});

app.get(
  "/team",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).send("obteenr equipos");
  }
);

app.delete("/team/pokemons/:pokeid", () => {
  res.status(200).send("borarr un pokemon");
});

app.put("/team", () => {
  res.status(200).send("Cambiar equipo");
});

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto: ${port}`);
});

exports.app = app; //exportar la app para poder testearla
