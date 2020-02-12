(function(factory) {
	define([], function () {
        return factory();
    });
}(function() {
	function Toast() {}

	Toast.fn = Toast.prototype = {
		y_alert: function(text, cb) {
           var _this = this;
           var alert_bg = document.createElement('div');
           alert_bg.id = 'M-alertbg';
           alert_box = document.createElement('div'),
           alert_title = document.createElement('div'),
           alert_text = document.createElement('div'),
           alert_btn = document.createElement('div'),
           // titleNode = document.createTextNode('提 示');
           textNode = document.createTextNode(text ? text : ''),
           btnText = document.createTextNode('确 定');

            // 控制样式
            _this.y_cssStyle(alert_bg, {
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'right': '0',
                'bottom': '0',
                'background-color': 'rgba(0, 0, 0, 0.4)',
                'z-index': '999999999'
            });

            _this.y_cssStyle(alert_box, {
                'width': '270px',
                'max-width': '90%',
                'font-size': '16px',
                'text-align': 'center',
                'background-color': '#fff',
                'border-radius': '6px',
                'position': 'absolute',
                'top': '50%',
                'left': '50%',
                'transform': 'translate(-50%, -50%)'
            });

            // _this.y_cssStyle(alert_title, {
            //     'padding': '10px 15px',
            // });

            _this.y_cssStyle(alert_text, {
                'padding': '14px 15px',
                'border-bottom': '1px solid #ddd'
            });

            _this.y_cssStyle(alert_btn, {
                'padding': '10px 0',
                'color': '#007aff',
                'font-weight': '600',
                'cursor': 'pointer'
            });

            // 内部结构套入
            // alert_title.appendChild(titleNode);
            alert_text.appendChild(textNode);
            alert_btn.appendChild(btnText);
            alert_box.appendChild(alert_title);
            alert_box.appendChild(alert_text);
            alert_box.appendChild(alert_btn);
            alert_bg.appendChild(alert_box);
            document.body.appendChild(alert_bg);
            // 确定绑定点击事件删除标签
            alert_btn.onclick = function() {
                if (typeof cb === 'function') {
                    _this.y_remove("M-alertbg");
                    cb(); //回调
                } else {
                    _this.y_remove("M-alertbg");
                }
            }
        },
        y_cssStyle: function(targetObj, cssObj) {
            var str = targetObj.getAttribute("style") ? targetObj.getAttribute('style') : '';
            for (var i in cssObj) {
                str += i + ':' + cssObj[i] + ';';
            }
            targetObj.style.cssText = str;
        },
        y_remove: function(id) {
            var body = document.getElementsByTagName('body')[0];
            var idN = document.getElementById(id);
            body.removeChild(idN);
        },
	}
	return new Toast();
}));