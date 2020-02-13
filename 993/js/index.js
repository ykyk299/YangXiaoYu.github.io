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

        var container = new Vue({
        	el: '#container',
        	data() {
        		return {
        			selfData: selfData,
        			currPage: '',
        			btnShow: false,
        			btn_refuse: false,
                    clientHeight: 0,
                    twoEnd: false,
                    toggleMusic: true,
        		}
        	},
        	mounted: function() {
                bgMusicPlay()
        	},
        	methods: {
        		init: function() {
        			var _this = this;
                    _this.clientHeight = document.documentElement.clientHeight;
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
	        						_this.twoPageInit();
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
	        	},
                twoPageInit: function() {
                    let _this = this;
                    this.currPage = 'two';
                    setTimeout(function() {
                        var typed = new Typed('.twoElement', {
                            strings: [
                                '爱宝宝的小鱼丫☞❤ <br><br> 2019.04.09-2020.02.14, 311天的相处. 我们有过欢笑,有过吵闹,当然也有过不开心❤. 但是我们还是坚持了过来丫❤. <br><br> 想和宝宝说一声谢谢❤: 对我坏毛病的包容; 对我无条件的信任,也不怕我拐跑你,哈哈略略略❤ <br><br> 也想和宝宝说一声对不起: 你在最好的年纪,最纯真的心灵下, 遇到我这个乱糟糟的人. 让宝宝难过,伤心,流眼泪,有时候会在想你没遇到我应该过得比现在开心吧(说这句话不要生气奥)❤ <br><br> 在宝宝没出现的时候, 我习惯的喜欢孤独一个人. 一个人做事,一个人吃饭,一个人出行 <br><br> 和宝宝在一起之后, 我只想像向日葵一样 <br><br> 入目无他人,四下皆是你 <br><br> 有你时,你是太阳我目不转睛 <br><br> 无你时,我低下头谁也不见'
                            ], //输入内容, 支持html标签
                            typeSpeed: 120, //打字速度
                            backSpeed: 50, //回退速度
                            onComplete: (self) => {
                                _this.twoEnd = true;
                            },
                        });
                    }, 1000)
                },
                endHandle: function() {
                    toast.y_alert('嘻嘻,其实没有彩蛋的了, 只有一个爱你的杨小鱼, 爱你呀我的小宝宝. 做的不好不要介意呀, 只想给宝宝一个小惊喜,让宝宝在这个特别的2020情人节能开心开心. 很爱你的小鱼哦');
                },
                toggleMusicHandle() {
                    this.toggleMusic = !this.toggleMusic;
                    if (bgMusic.paused) {
                        bgMusic.play();
                    } else {
                        bgMusic.pause();
                    }
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
                    container.init();
                }, 200);
            }
        });
        loader.start();
	}
}());