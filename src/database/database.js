const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect(process.env.URL_DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB conectado...");
    }).catch((e) => {
        return console.log(`Erro conectando ao banco: ${e}`);
    })
}

module.exports = connectDB;
