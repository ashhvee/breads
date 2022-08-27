// require mongoose
const mongoose = require('mongoose')

// creating shorthand for the Schema constructor
const { Schema } = mongoose

const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://sallysbakingaddiction.com/wp-content/uploads/2019/12/homemade-artisan-bread.jpg' },
  baker: {
    type: Schema.Types.ObjectId,
    ref: 'Baker'
  }
})

// helper methods 
breadSchema.methods.getBakedBy = function(){
  return
    `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear}`
}


// model & export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread