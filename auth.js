const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = function (passport) {
  const opts = {
    jwtFrontRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secret0rKey: "pokeapi", // debe sacarlo de la variable de entorno
  };
  passport.use(
    new JwtStrategy(opts, (decode, done) => {
      console.log("decoded jwt", decoded);
      return done(null, decode);
    })
  );
};
