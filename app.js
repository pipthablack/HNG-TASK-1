const express = require ('express');  
const moment = require ('moment');
const app = express();

// define a route for my endpoint

app.get('/api', (req, res) => {
    const slackName = req.query.slack_name;
    const track = req.query.track;


    // validate 

    if(!slackName || !track) {
        return res.status(400).send('Please provide a slack name and track');
    } ;


    // get day of the week

    const currentDay = moment().utc().format('dddd');

    // current UTC with time validation of +/-2 mins
    const currentUtcTime = moment().utcOffset(0).format('YYYY-MM-DDTHH:mm:ss[Z]');





    // send response

    const response = {  
        slack_name: slackName,
        track: track,
        current_day: currentDay,
        utc_time: currentUtcTime,
        github_file_url: 'https://github.com/pipthablack/hngt1/blob/main/app.js',
        github_repo_url:'https://github.com/pipthablack/hngt1',
        status_code: 200,
    };


    // JSON response 
    res.status(200).json(response);

});

// start server 

app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});
