function goBack() {
  window.history.back();
}

function getArticle() {
  //Get elements
  let source = document.getElementById("source");

  //Store them in an array
  let sources = [];

  //Assign values to array
  sources[0] = "The Medium is the Message";
  sources[1] = "URLs";
  sources[2] = "Metadata";

  //Random number
  let i = Math.floor(Math.random() * sources.length);

  //Set article
  source.innerHTML = sources[i];
}
