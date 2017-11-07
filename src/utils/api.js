const axios = require('axios');

const baseUrl = process.env.REACT_APP_HUE_BRIDGE_API_URL
const userId = process.env.REACT_APP_HUE_USER_ID

// {
//   "1": {
//     "state": {
//       "on": true,
//       "bri": 144,
//       "hue": 13088,
//       "sat": 212,
//       "xy": [0.5128,0.4147],
//       "ct": 467,
//       "alert": "none",
//       "effect": "none",
//       "colormode": "xy",
//       "reachable": true
//     },
//     "type": "Extended color light",
//     "name": "Hue Lamp 1",
//     "modelid": "LCT001",
//     "swversion": "66009461",
//     "pointsymbol": {
//       "1": "none",
//       "2": "none",
//       "3": "none",
//       "4": "none",
//       "5": "none",
//       "6": "none",
//       "7": "none",
//       "8": "none"
//     }
//   },
//   "2": {
//     "state": {
//       "on": false,
//       "bri": 0,
//       "hue": 0,
//       "sat": 0,
//       "xy": [0,0],
//       "ct": 0,
//       "alert": "none",
//       "effect": "none",
//       "colormode": "hs",
//       "reachable": true
//     },
//     "type": "Extended color light",
//     "name": "Hue Lamp 2",
//     "modelid": "LCT001",
//     "swversion": "66009461",
//     "pointsymbol": {
//       "1": "none",
//       "2": "none",
//       "3": "none",
//       "4": "none",
//       "5": "none",
//       "6": "none",
//       "7": "none",
//       "8": "none"
//     }
//   }
// }

// transform to:
// [{ id: 1, state: { on: true }, name: "Hue Lamp 1" },
//  { id: 2, state: { on: false }, name: "Hue Lamp 2" }]

export function getLights() {
  return axios.get(baseUrl + userId + '/lights')
    .then((res) => {
      const data = res.data;
      return Object.keys(data).map((e) => {
        var light = {};
        light["id"] = e;
        light["state"] = data[e].state;
        light["name"] = data[e].name;
        return light;
      });
    });
}

export function setLight() {
  const lightId = 2;
  const url = baseUrl + userId + '/lights/' + lightId + '/state';
  return axios.put(url, {
    on: true
  }).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
}
