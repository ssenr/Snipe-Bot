<div align="center">
  <p>
    <a href="https://github.com/Soucouyant/Snipe-Bot"><img src="https://github.com/Soucouyant/Snipe-Bot/blob/master/assets/images/logoedit.png" width="546" alt="snipe-bot" /
  </p>
  <p>
    <a href="https://github.com/Soucouyant/Snipe-Bot/releases/tag/v2.0.2-alpha"><img src="https://img.shields.io/github/v/tag/Soucouyant/Snipe-Bot?color=critical" alt="Latest Release" /></a>
    <a href="https://github.com/Soucouyant/Snipe-Bot/commit/8d933b3c1d707cd02907aa287a1b2af2b46cbfbb"><img src="https://img.shields.io/github/last-commit/Soucouyant/Snipe-Bot" alt="Latest Commit Date" /></a>
    <a href="https://github.com/Soucouyant/Snipe-Bot/commits/master"><img src="https://img.shields.io/github/commit-activity/m/Soucouyant/Snipe-Bot?color=blue" alt="Number of Commits this month" /></a>
  </p>
</div>

## About

The snipe bot is a simple discord bot that retrieves deleted messages using:
- [Node.js](https://nodejs.org) module which easily interacts with the [Discord API](https://discord.com/developers/docs/intro)
- [Discord.JS](https://discord.js.org/#/) library which provides easy to use JS methods and functions to make coding the bot a lot easier and smoother.
- [MongoDB](https://www.mongodb.com/) and [MongooseJS](https://mongoosejs.com/) which provide a AWS database and easy to use object modelling to interact with the database.

## Installing Dependencies
**Node.js 16.9.0 or newer is required.**
    

## Code Explanation
https://docs.google.com/document/d/1i5gMkZXHbUhkEc2OmUa38NbIFNFD0Xo-2eRV4x8AGD4/edit?usp=sharing

## TO DO
- [x] Get bot online
- [x] Created Events (/commands)
- [x] Connected MongoDB
- [x] Used events to write to MongoDB Database
- [x] Seperated Complete Log and Deleted Messages Log
- [x] Read database queries
- [x] Sort (Aggregate) database queries based on unqiue value [time]
- [x] Return database query with limit

### Unneccessary TO-DO's (Not inherently essential to code functionality)
- [x] Optimize code with event and command handling
- [x] Beautify Code
- [x] Host it!
- [ ] Handle multiple snipes (given num)
- [ ] Mute and ban
- [x] Show person who sent message
- [ ] Edit Snipe
- [ ] bot pins! Bot can pin an infinite amount of attachments and/or messages
