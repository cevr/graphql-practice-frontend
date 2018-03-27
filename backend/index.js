const app = require('./server');
const IP = require('./ipHandler').ip;
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`local: http://${IP}:${PORT}`);
    console.log(`local: http://localhost:${PORT}`);
    console.log(`graphiql: http://localhost:${PORT}/graphql`);
});
