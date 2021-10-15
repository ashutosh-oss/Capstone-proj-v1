//Importing dotenv variables
require("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//DataBase connecttions
import ConnectDB from "./database/connection"

//microservices
import Auth from "./API/Auth";
import restaurants from "./API/restaurants";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Images from "./API/Images";
import Orders from "./API/Orders";
import Reviews from "./API/Reviews";
import User from "./API/User";
import MailService from "./API/Mail";
import Payments from "./API/Payments"


//configs
import googleAuthConfig from "./Googleauth/GoogleAuth"
import routeConfig from "./Googleauth/JWTvalidation"

const zomato = express();

//application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

//passport configuration
googleAuthConfig(passport);
routeConfig(passport);

//Applicatin Routes
zomato.use("/auth", Auth);
zomato.use("/restaurants", restaurants);
zomato.use("/food",Food);
zomato.use("/menu",Menu);
zomato.use("/images", Images);
zomato.use("/order", Orders);
zomato.use("/reviews", Reviews);
zomato.use("/user", User);
zomato.use("/mail", MailService);
zomato.use("/payments", Payments)


zomato.get("/", (req,res) => res.json({message: "setup, success"}));

zomato.listen(4000, () => ConnectDB().then(() => console.log("server is running"))
.catch(() => console.log("Server is running, but database connection failed"))
);
