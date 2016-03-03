var onMessageHandler = function(message){
    chrome.runtime.onMessage.removeListener(onMessageHandler);
  var f = document.createElement("form");
  f.setAttribute("method", "post");
  f.setAttribute("action", message.url);
  for (var key in message.data) {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", message.data[key]);
    f.appendChild(hiddenField);
  }
  document.body.appendChild(f);
  f.submit();
}
chrome.runtime.onMessage.addListener(onMessageHandler);
