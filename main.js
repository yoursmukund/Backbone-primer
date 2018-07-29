$(function () {
    let TodoModel = Backbone.Model.extend({
        defaults: {
            name: ''
        },
    });


    let ItemView = Backbone.View.extend({
        tagName: 'li',

        template: _.template($('#todoItem').html()),

        initialize: function () {
        },

        render: function () {
            let view = this.template({ name: this.model.get('name') });
            this.$el.html(view)
            return this;
        }
    });


    $('#todoAdd').click(() => {
        let todoItem = new TodoModel({
            name: $('#todoInput').val()
        });
        let itemView = new ItemView({ model: todoItem });
        $('#todo').append(itemView.render().el);
    })
});


