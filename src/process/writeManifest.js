let router = require("express").Router();
let fs = require("fs");

let sizes = [72, 96, 128, 144, 152, 192, 384, 512];

let iconObject = sizes.map(item => {
  let obj = {
    src: `images/icons/icon-${item}x${item}.png`,
    sizes: `${item}x${item}`,
    type: "image/png"
  };
  return obj;
});
let icons = iconObject;

let promise = req =>
  new Promise(function(resolve, reject) {
    let manifest = { ...req.manifest, icons };
    fs.writeFile(
      `${req.dir}/manifest.json`,
      JSON.stringify(manifest, null, "  "),
      err => {
        console.log(err);
        resolve();
      }
    );
  });

module.exports = promise;
