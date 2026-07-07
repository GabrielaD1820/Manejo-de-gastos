const mongoose=require('mongoose');
const URI='mongodb+srv://gdiazz_db_user:HdYZs3w7RbjshSd4@gastos.7paw2ag.mongodb.net/?appName=gastos';
mongoose.connect(URI)
    .then(db=> console.log('BD conectada'))
    .catch(err => console.error(err));
module.exports=mongoose;