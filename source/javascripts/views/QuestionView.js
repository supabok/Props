var QuestionView = Backbone.View.extend({
    template:'',
    className: "questionHolder",
    tagName: 'li',

    initialize: function(options) {
        //define template structure
        var source = "<p class='spanText'>{{title}}</p><p>{{question}}</p><p class='answers'>{{#answers}}<a href='#'>{{answer}}</a>{{/answers}}</p>";

        //compile template using Handlebars
        this.template = Handlebars.compile(source);
    },

    events: {
        "click a": "onClicked"
    },

    render: function() {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    onClicked: function(e) {
       
        this.questionScore(e);

    },

    questionScore: function(evt){
        var parentDiv   = $(evt.target).closest('.questionHolder');
        var val         = $(evt.target).text();
        var source      = "<p class='scoreDisplay'>"+val+"</p>";

        $('.answers', parentDiv).remove();
        $(source).appendTo(parentDiv).hide().fadeIn();
         obj.trigger("onQuestionAnswered", {displayObj: parentDiv});
    },

    addScore: function(_val){

    },

    removeMe: function(_obj){
        $(this.el).fadeOut(1000, function(){
            _obj.remove();
            obj.trigger("questionFadeOut");
        });
    }

});