var config = (function() {
    var arr = window.location.hostname.split('.')[0];
    var isDebug = (arr == '192') || (arr == '127') || (arr == 'localhost') || (arr == '');
    var baseUrl = isDebug ? '' :'https://ykyk299.github.io/993/';
    return {
        isDebug: isDebug,	// 是否为调试状态
        baseUrl: baseUrl,
        configUrl: (isDebug ? '' : baseUrl) + '../utils/require.config.js'
    }
}());