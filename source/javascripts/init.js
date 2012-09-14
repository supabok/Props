//= require_tree ./views
//= require_tree ./models
//= require_tree ./collection

(function(){
     obj = {};
    _.extend(obj, Backbone.Events);
})();


$(document).ready(function() {

    var collection,
        scoreView,
        questionListView,
        questionView,
        quesIndex = 0,
        clicked = 0;

    function createQuestionCollection() {
        collection = new QuestionCollection(dataStore)
    }

    function initViewDisplay(){
        scoreView = new ScoreView({model: new ScoreModel()});
        $('.score').append(scoreView.render().el);

        questionListView = new QuestionListView();
        $('.container').append(questionListView.render().el);

        getNextQuestion();
        getNextQuestion();
        getNextQuestion();
    };

    function initListeners(){
        obj.on("onQuestionAnswered", function(displayObj) {
            var score = calculateScore();
            var source = "<p class='scoreDisplay'>+"+score+"</p>";
            //simulate answer being displayed after 10 secs
            $(source).appendTo(displayObj.displayObj).hide().fadeIn(10000);
            howManyClicked();
        });
    }

    function calculateScore(){
        return Math.floor(Math.random() * (1 - 0 + 1)) + 0;

    }

    function howManyClicked(){

        clicked++;
        if(clicked >= 3){
           setTimeout(function(){console.log('get answer points')}, 2000)
       }
    }

    function getNextQuestion(){
        questionView = new QuestionView({model:collection.at(quesIndex)})
        $('.ques').append(questionView.render().el);
        quesIndex = ++quesIndex >= collection.length ? 0 : quesIndex;
    }

    createQuestionCollection();
    initViewDisplay();
    initListeners();

});