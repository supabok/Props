var ScoreModel = Backbone.Model.extend({

    defaults: {
        'score': 000
    },

    getScore: function(){
        return this.get('score');
    },

    setScore: function(_val){
        var score = this.get('score');
        score += _val
        this.set({'score':score});
    }
})