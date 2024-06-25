function saklar(params) {
  let k1 = document.getElementById("k1")
  
  if(params == "hurung") {
    k1.src = "Assets/open.png"
  }
  if(params == "paeh") {
    k1.src = "Assets/Closed.png"
  }
}