exports.getHome = (req, res) => {
    res.render('index');
    console.log('Homepage hit');
}