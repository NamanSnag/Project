module.exports.homepage = function(request, response){
    return response.render('home.ejs', {
        title: "home"
    });
};