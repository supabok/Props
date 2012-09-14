var ScoreView = Backbone.View.extend({
    tagName:'p',

    initialize:function(options){
    },

    events: {

    },

    render: function() {
        $(this.el).html('Score: '+this.model.getScore());
        return this;
    },

    setScore:function(_val){
        this.model.setScore(_val);
        this.render();
    }

});