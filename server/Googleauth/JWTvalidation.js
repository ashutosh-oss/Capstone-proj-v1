import JwtPassport from "passport-jwt";

//database model
import { UserModel} from "../database/user";

const JWTStratergy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "AskSiddarth",
};

export default (passport) => {
    passport.use(
        new JWTStratergy(options, async (jwt__payload, done) => {
            try {
                const doesUserExist = await UserModel.findById(jwt__payload.user);
                if(!doesUserExist) return done(null, false);
                console.log(doesUserExist);
                return done(null, doesUserExist);
            } catch (error) {
                throw new Error(error);
            }
        })
    );
};