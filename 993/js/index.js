(function() {
	require([config.configUrl], function() {
		var rArr = ['typed', 'vue', 'resLoader', 'jquery', 'toast'];
		require(rArr, requireCB);
	})

	function requireCB(Typed, Vue, resLoader, jquery, toast) {
		console.log('123');
		//声音播放
        window.bgMusic = document.getElementById('bg_muisc');
        //解决微信中声音播放
        function bgMusicPlay() {
            if(typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
                WeixinJSBridge.invoke('getNetworkType', {}, function (res) {
                    bgMusic.play();
                });
            }else{
                bgMusic.play();
            }
        }

        var selfData = {
        	bg: config.baseUrl + 'images/bg.png',
        	gif: config.baseUrl + 'images/001.gif',
        	img_01: config.baseUrl + 'images/01.png',
        	img_02: config.baseUrl + 'images/02.jpg',
        	img_03: config.baseUrl + 'images/03.jpg',
        	img_04: config.baseUrl + 'images/04.jpg',
        }

        var indexPage = new Vue({
        	el: '#container',
        	data() {
        		return {
        			selfData: selfData,
        			currPage: '',
        			btnShow: false,
        			btn_refuse: false,
        		}
        	},
        	mounted: function() {

        	},
        	methods: {
        		init: function() {
        			console.log("abc".repeat(3) == "aaabbccc")
        			var _this = this;
        			_this.currPage = 'index';
                    setTimeout(function() {
                        var typed = new Typed('.element', {
                            strings: ['喜欢是乍见之欢❤ <br> 爱是久处不厌❤ <br>时光赐予我们爱人❤ <br> 爱人赋予我们生命❤', '愿有生之年 <br> 只诉温暖不言殇 <br> 倾心相遇, 安暖相陪 <br> 爱你的小鱼丫❤'], //输入内容, 支持html标签
                            typeSpeed: 150, //打字速度
                            backSpeed: 50, //回退速度
                            onComplete: (self) => {
                                _this.btnShow = true;
                                console.log('onComplete')
                            },
                        });
                    }, 1000)
	        	},
	        	agreeHandle: function() {
	        		var _this = this;
	        		toast.y_alert('酸甜苦辣', function() {
	        			toast.y_alert('与你分享', function() {
	        				toast.y_alert('三餐四季', function() {
	        					toast.y_alert('与你共度', function() {
	        						_this.currPage = 'two';
                                    setTimeout(function() {
                                        bubbly({
                                            colorStart: "#fff4e6",
                                            colorStop: "#ffe9e4",
                                            blur: 1,
                                            compose: "source-over",
                                            bubbleFunc: () => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
                                        });
                                    }, 1000)
	        					})
	        				})
	        			})
	        		});
	        	},
	        	refuseHandle: function() {
	        		var _this = this;
	        		toast.y_alert('怎么能拒绝你家小鱼呢', function() {
	        			toast.y_alert('小鱼生气了哇!', function() {
	        				toast.y_alert('快去点 同意 丫!!')
	        			})
	        		});
	        	}
        	}
        })

        var loader = new resLoader({
            resources : [
            	selfData.bg,
            	selfData.gif,
            	selfData.img_01,
            	selfData.img_02,
            	selfData.img_03,
            	selfData.img_04,
            ],
            onStart : function(total){
                console.log('start:'+total);
            },
            onProgress : function(current, total){
                var percent = current/total*100;
                jquery('.loading-text').text(parseInt(percent)+'%');
            },
            onComplete : function(total){
                var timeid = setTimeout(function() {
                    clearTimeout(timeid);
                   	jquery('#loadingPage').hide();
                    indexPage.init();
                }, 200);
            }
        });
        loader.start();
	}
}());