"use strict";

require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
function teste(texto1, texto2) {
  alert("".concat(texto1, "\n").concat(texto2));
}
var promise = Promise.resolve();