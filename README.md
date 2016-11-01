# Bomb_Squad

Bomb Squad is a mobile friendly, single-page web version of the popular computer game "Keep Talking and Nobody Explodes".
Our app's web components were built using custom CSS, [Bootstrap](http://getbootstrap.com/), and [AngularJS](https://angularjs.org/). The multiplayer component
is powered by [Firebase](https://firebase.google.com/?utm_source=firechat).

Watch the presentation for our app here: https://www.youtube.com/watch?v=dffKZcUzj4M

This game is meant for two or more players, so make sure you have buddy before starting to play!

## Live Demo

Visit [bomb-squad-game.com](http://bomb-squad-game.com) to see a live demo of our game!

Either sign up or use OAuth (via Passport) and log-in via [facebook](http://facebook.com).
Once logged in, swipe right to enter the lobby chat and see if anyone is actively looking
for a game. 

If you're planning on playing with friends, feel free to create a game and then
share your gamekey (a four letter combination).

## Setup

Make sure you are running the latest versions of [Node](https://nodejs.org/en/), [Gulp](http://gulpjs.com/), and [PostgresSQL](https://www.postgresql.org/).

Open your terminal...
```HTML
git clone https://github.com/arr213/bomb_squad.git
cd bomb_squad
npm install
createdb bdc
```

Open another terminal window with the same directory:
```HTML
gulp
```

Go back to your previous terminal:
```HTML
npm start
```

By default the game is hosted on localhost:1337

Have fun!

## Help

All research/planning documents are saved in the following google drive:
https://drive.google.com/drive/folders/0B9kMZIlbgvTpaWdkYV9yQjJTYUU?usp=sharing

:)
