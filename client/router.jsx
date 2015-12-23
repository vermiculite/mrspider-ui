FlowRouter.route('/', {
    action(params) {
        ReactLayout.render(MainLayout, {content: <App />});
    }
});

FlowRouter.route('/spider/:id', {
   action(params) {
       ReactLayout.render(MainLayout, {content: <SpiderDetail {...params} />});
   }
});