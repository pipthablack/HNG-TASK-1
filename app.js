const express = require ('express');    
const app = express();

// define a route for my endpoint

app.get('/get-info', (req, res) => {
    const slackName = req.query.slack_name;
    const track = req.query.track;


    // validate 

    if(!slackName || !track) {
        return res.status(400).send('Please provide a slack name and track');
    } ;


    // get day and time 

    const currentDate = new Date();
    const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const utcTime = currentDate.toISOString();


    // send response

    const response = {  
        slack_name: slackName,
        track: track,
        current_day: currentDay,
        utc_time: utcTime,
        github_file_url: 
        github_repo_url:
        status_code: 200,
    };


    // JSON response 
    res.status(200).json(response);

});

// start server 

app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});
