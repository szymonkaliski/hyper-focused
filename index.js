const jsRemoveFocused = `
  var hyperMain = document.querySelector(".hyper_main");
  hyperMain.className = hyperMain.className.replace(" focused", "");
`;

const jsAddFocused = `
  var hyperMain = document.querySelector(".hyper_main");
  hyperMain.className += " focused";
`;

module.exports.onWindow = win => {
  win.on("blur", () => {
    win.webContents.executeJavaScript(jsRemoveFocused);
  });

  win.on("focus", () => {
    win.webContents.executeJavaScript(jsAddFocused);
  });
};
