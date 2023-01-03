import mongoose from "mongoose";
//  @UserSchema
//  - user: address
//  - name: String (optional) 
//  - question_status[]: question[]
//  - score: Number
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    user: {
      type: String,
      required: [true, "Address Field is required!"]
    },
    name: String, 
    questionStatus: [{
      type: Schema.Types.ObjectId,
      ref: 'Question'
    }],
    score: Number
  });
  
const User = mongoose.model('User', UserSchema);
  
//  @QuestionSchema
//  user: address
//  questionNum: Number 
//  status[]: String[]
const QuestionSchema = new Schema({
  user: {
    type: String,
    required: [true, "Address Field is required!"]
  }, 
  questionNum: Number,
  isCorrect: Boolean
});

const Question = mongoose.model('Question', QuestionSchema);

export default { User, Question }
;
