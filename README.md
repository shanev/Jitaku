# Jitaku

Jitaku is a home automation dashboard. Currently it only works with Philips Hue lights.

Roadmap:
- [X] Turn off/on Hue lights
- [ ] Color picker
- [ ] Brightness slider
- [ ] Plugin architecture for other components

## Running

1. Clone repo: `git clone https://github.com/shanev/Jitaku`
2. Edit `.env` and replace the values for `REACT_APP_HUE_BRIDGE_API_URL` and `REACT_APP_HUE_USER_ID` with yours. Follow instructions at the [Hue developer site](https://www.developers.meethue.com/documentation/getting-started) to get them. Alternatively, create `.env.local` with your configuration.
3. `npm install`
4. `npm start`

