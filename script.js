function removeHtmlExtension() {
  var currentLocation = window.location;
  var pathName = currentLocation.pathname;

  if (pathName.endsWith('.html')) {
      var newPath = pathName.slice(0, -5);
      history.replaceState({}, '', newPath);
  }
}

window.onload = removeHtmlExtension;