const express=require('express');
const cors=require('cors');
const router=express.Router();
const landingController=require('../controllers/landing');

// Define allowed origins
const allowedOrigins = ['http://localhost:4200'];
// Configure CORS options
const corsOptions = {
    origin: function (origin, callback) {  
      // Allow requests with no origin (like mobile apps, curl, etc.)
      if (!origin) return callback(null, true);
   
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

// Enable CORS using the configured options  
router.use(cors(corsOptions));

router.use(express.json());

router.get('/', (req,res)=>{
    res.send('<h1>Hello from landing</h1>');
});

router.post('/signup', landingController.signup);

module.exports=router;