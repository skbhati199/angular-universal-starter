var fs = require('fs')
const someFile = './server.js';
fs.readFile(someFile, 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace('var isWebkit = css.transition.indexOf(\'webkit\') > -1;', 'if (css.transition === undefined){ return; } ;var isWebkit = css.transition.indexOf(\'webkit\') > -1;');
    var result = data.replace('return win[\'__zone_symbol__setTimeout\'](callback, timeout);', 'if (typeof win[\'__zone_symbol__setTimeout\']=== \'undefined\') { return; } return win[\'__zone_symbol__setTimeout\'](callback, timeout);');
    var result = data.replace('if (win.screen.width > 0 && win.screen.height > 0) {', 'if (win.screen !== undefined && win.screen.width > 0 && win.screen.height > 0) {');
    
    fs.writeFile(someFile, result, 'utf8', function(err) {
        if (err) return console.log(err);
    });
});