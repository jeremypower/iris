require('dotenv').config();

module.exports = {
    witToken: process.env.WIT_TOKEN,
    slackToken: process.env.SLACK_TOKEN,
    slackLogLevel: 'vebose',
    serviceTimeout: 30
};