module.exports = {
  apps : [{
    name   : "expressApp",
    script : "./app.js",
    env: {
      NODE_ENV: "development",
      PORT: 3000,
    },
    instances: 2,
    watch: true
  }
  ]
}
