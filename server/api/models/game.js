const mongoose=require('mongoose');
const gameSchema =mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: true,
    unique:true
  },
  priceForRent: {
    type:Number,
    required:true
  },
  difficultyLevel:String,
  age:{
    type:Number,
    required:true
  },
  description: String,
  imageUrl:String,
});

module.exports=mongoose.model('Games', gameSchema)