var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://amwayiallan:Vigilante85@cluster0.qxfkjxn.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Cluster0',
    development: 'mongodb+srv://amwayiallan:Vigilante85@@cluster0.qxfkjxn.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=Cluster0',
    test: 'mongodb+srv://amwayiallan:Vigilante85@@cluster0.qxfkjxn.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=Cluster0',
}
module.exports = config;
