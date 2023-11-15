import express from 'express';

const app = express();

app.listen(3000, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server is running on port 3000 HOMECD');
    }
});