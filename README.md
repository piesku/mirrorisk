# Mirrorisk

Remember playing Risk when you were a kid? What if you could recreate the feeling of excitement mixed with the frustration when the dice roll a bunch of 1s? Look no further — _Mirrorisk_ is your (not) favorite board game, as a video game, playable right here in the browser. Except it's not exactly how you remember it.

Play the board game classic on a weirdly familiar yet uncomfortable map of the Mirrored Earth. West is East and East is West in this virtual cardboard rendition of the 1957 _Risk_. The rules have changed, too: the game ends the first time a player is eliminated, so be sure to protect the underdogs before you take the lead!

_Mirrorisk_ is a submission to [Gamedev.js 2021 Jam](https://itch.io/jam/gamedevjs-2021/rate/1014384). The theme of the jam was _mirror_.

## Changelog

### v1.1

#### New Features

- Added the UI to configure the game.
    - You can now choose between 2 and 5 players, pick team colors and names.
    - It's now possible to play a hot seat game with other people.
    - It's also possible to host an AI-only game.
- Added support for touch interfaces. The UI is optimized for tablets; mobile form-factors are not supported.
- You can now end the deployment phase before deploying all units.

#### Bug fixes and other improvements

- Optimized textures to reduce the size of the game from 24 MB to 10 MB.
- Optimized spatial audio panners for much better performance in the late game when there are many units on the board.
- Fixed the freeze that happened when the user misclicked on another unit when giving orders to an army.
- Fixed issues with the mouse wheel which zoomed the game and scrolled the [parent itch.io page](http://piesku.itch.io/mirrorisk) at the same time.
- Fixed a bug which caused accidental deploys when the user clicked buttons in the UI.
- Fixed the singular forms of nouns like _army_ and _territory_, when the count is 1.

### v1.0 (The jam version)

- Submitted to [Gamedev.js 2021 Jam](https://itch.io/jam/gamedevjs-2021/) on April 26, 2021.

## Credits

- Army pawns by [BroamChomsky](https://www.thingiverse.com/thing:239075), licensed under CC BY-NC 4.0.
- Textures from [CC0Textures.com](https://cc0textures.com/), licensed under CC0 1.0 Universal.
- Map by [gappyfacets](https://www.blendswap.com/blend/14040), licensed under CC 0.

## Development

Risk is based on [Goodluck](https://github.com/piesku/goodluck), a hackable template for creating small and fast browser games.

### Running Locally

To run locally, install the dependencies and start the local dev server:

    npm install
    npm start

Then, open http://localhost:1234 in the browser.

In VS Code, Ctrl+Shift+B will show the available build tasks, including `npm start`, and F5 will open the browser.

### Building

To produce the optimized build, use the `Makefile` in `play/`.

    make -C play
