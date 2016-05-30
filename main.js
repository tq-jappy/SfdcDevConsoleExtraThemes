$(function() {

  // コンテンツに差し込むJS
  document.body.appendChild(function() {
    var script = document.createElement('script');

    // 実行したいコード
    var code = function() {
      // TODO: 一時的な反映にしかならないので繰り返し呼び続けている
      setInterval(function() {
        if (typeof SfdcDevConsole !== 'undefined') {
          console.log('apply custom theme.');
          SfdcDevConsole.Themes.changeFontSize(14);
          SfdcDevConsole.Themes.changeTheme('ambiance');
        }
      }, 1000);
    }

    var src = '(' + code.toString() + ')()';
    script.type = 'text/javascript';
    script.text = src;

    return script;
  }()
  );
});
