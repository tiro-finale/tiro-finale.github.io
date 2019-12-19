// Display

var f = function(components){

  console.log(components)

  // Make elements.
  var overall = document.createElement("div");
  overall.id = "components"
  document.body.appendChild(overall)

  // Get FingerPrint.
  for(var component of components){

    var key = component["key"]
    var value = component["value"]

    // Draw FingerPrint as image.
    if(key === "canvas"){
      var image = document.createElement("img")
      image.id = "image"
      image.src = value[1].substr("canvas fp:".length)
      overall.insertBefore(image, overall.firstChild)
    }

    /*
     * <div class="box" id=key+data>
     *   <div class="box-title" id=key>key</div>
     *   <p id=value>value</div>
     * </div>
     */
    var div = document.createElement("div")
    div.className = "box"
    div.id = key
    var title = document.createElement("div")
    title.className = "box-title"
    title.id = key
    title.innerHTML = key
    var content = document.createElement("p")
    content.id = value
    content.innerHTML = value

    document.getElementById(overall.id).appendChild(div)
    document.getElementById(key).appendChild(title)
    document.getElementById(key).appendChild(content)
  }
}

if (window.requestIdleCallback) {
    requestIdleCallback(function () {
        Fingerprint2.get(f)
    })
} else {
    setTimeout(function () {
        Fingerprint2.get(f)
    }, 500)
}
