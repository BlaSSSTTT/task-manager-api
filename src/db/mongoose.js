const mongoose = require("mongoose");

const connectionURL = "mongodb+srv://antonchykvladyslav:gbY8WOPNtNJmGymT@cluster0.3nt7jvy.mongodb.net/task-manager-api?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(connectionURL)