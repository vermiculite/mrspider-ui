FlowRouter.route('/', {
    action(params) {
        ReactLayout.render(MainLayout, {content: <App />});
    }
});