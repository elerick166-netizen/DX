var APP_DATA = {
  "scenes": [
    {
      "id": "0-blanco",
      "name": "blanco",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.038090417362623086,
          "pitch": 0.1653354458560461,
          "rotation": 0,
          "target": "1-edificio-azul"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-edificio-azul",
      "name": "Edificio Azul",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "yaw": 0.0575904215209917,
        "pitch": 0.00019843770230210112,
        "fov": 1.2834448202484945
      },
      "linkHotspots": [
        {
          "yaw": -0.1238260545950336,
          "pitch": -0.2648114396853618,
          "rotation": 0,
          "target": "0-blanco"
        },
        {
          "yaw": 0.43675442707452383,
          "pitch": 0.6337665725244701,
          "rotation": 0,
          "target": "2-suelo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-suelo",
      "name": "Suelo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "yaw": 0.07392887450664531,
        "pitch": -0.2141642989491892,
        "fov": 1.2834448202484945
      },
      "linkHotspots": [
        {
          "yaw": -0.3057247876212408,
          "pitch": -0.46286544853344225,
          "rotation": 0,
          "target": "1-edificio-azul"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
