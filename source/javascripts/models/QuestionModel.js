var QuestionModel = Backbone.Model.extend({

    defaults: {
        title:'',
        question:'',
        answers:[],
        correctAnswer:''
    },


    validate: function(attrs) {
        if (!attrs.question || attrs.answers.length < 1) {
            if(!attrs.question){
                console.log('no question provided')
                return "cannot have an empty question";
            }  else if (attrs.possibleAnswers.length < 1) {
                console.log('no answers set');
                return "cannot have empty answers";
            }
        };
    },

   getCorrectAnswer: function(){
       return this.correctAnswer;
   }

});