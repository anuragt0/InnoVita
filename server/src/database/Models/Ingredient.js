const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredientSchema = new Schema({
    
  ingredientName: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  nutritionalInformation: {
    calories: Number,
    protein: Number,
    carbohydrates: Number,
    fiber: Number,
    sugars: Number,
    fats: Number,
    saturatedFat: Number,
    transFat: Number,
    cholesterol: Number,
    sodium: Number,
    vitamins: {
      vitaminA: Number,
      vitaminC: Number,
    },
    minerals: {
      calcium: Number,
      iron: Number,
    },
  },
  allergens: [String],
  healthConsiderations: {
    diabetes: Boolean,
    coughOrRespiratoryIssues: Boolean,
    otherHealthConditions: [String],
  },
  advantages: {
    nutritionalBenefits: String,
    healthBenefits: String,
  },
  harmfulEffects: {
    negativeEffects: String,
    allergicReactions: String,
  },
  references: [String],
  userFeedback: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Replace with your User schema if applicable
      },
      feedback: String,
    },
  ],
  overallAssessment: String,
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
