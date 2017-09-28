$(function(){
	let database=[//数据库中的src要复制粘贴，可能会少空格
		{id:'list1',name:'长安忆',src:'music/双笙 - 长安忆.mp3',icon:'icon-img/ss.jpg',bigimg:'img/fo1.jpg',zp:'img/radio03.png',author:'双笙',zhuanji:'双笙专辑',lyrics:[
			{time:'00:01',lyric:'长安忆' },
			{time:'00:05',lyric:'词：枕衣de糖罐唲 '},
			{time:'00:12',lyric:'曲：武部聪志<かざぐるま> 唱：音频怪物'},
			{time:'00:22',lyric:'长安雨，一夜落秋意'},
			{time:'00:27',lyric:'路千里，朔风吹客衣'},
			{time:'00:33',lyric:'江船夜雨听笛，倚晚晴'},
			{time:'00:39',lyric:'平沙漠漠兮愁无际'},
			{time:'00:44',lyric:'长安堤，垂杨送别离'},
			{time:'00:50',lyric:'千山月，一片伤心碧'},
			{time:'00:56',lyric:'长门又误佳期，声清凄'},
			{time:'01:02',lyric:'朱颜染尘兮梦中语'},
			{time:'01:07',lyric:'。。。'},
			{time:'01:10',lyric:'二十三弦急，落花人独立'},
			{time:'01:16',lyric:'惟有此曲能寄心中意'},
			{time:'01:21',lyric:'月落子规啼，飞絮衔霜去'},
			{time:'01:27',lyric:'然诺重，只愿君从此记'},
			{time:'01:32',lyric:'。。。'},
			{time:'01:44',lyric:'长安去，辞家三千里'},
			{time:'01:49',lyric:'涯无垠，却问愁几许'},
			{time:'01:55',lyric:'试剑更须钟吕，伴君起'},
			{time:'02:01',lyric:'风渡萧萧兮烟迷离'},
			{time:'02:06',lyric:'长安居，陇头谁吹笛'},
			{time:'02:12',lyric:'灯花落，瘦尽又一夕'},
			{time:'02:17',lyric:'醉乡路隐难行，风露清'},
			{time:'02:23',lyric:'君向潇湘兮我向秦'},
			{time:'02:28',lyric:'。。。'},
			{time:'02:32',lyric:'醉笑三千席，不诉离别意，惟有此曲能忘人间景'},
			{time:'02:43',lyric:'年华落丹青，一片碧空洗，知音稀，弦断有谁来听'},
			{time:'02:55',lyric:'醉笑三千席，不诉离别意，惟有此曲能忘人间景'},
			{time:'03:05',lyric:'年华落丹青，一片碧空洗，知音稀，弦断有谁来听'},
			{time:'03:20',lyric:'落日孤城闭，燕然归无计'},
			{time:'03:25',lyric:'惟有此曲能解断肠情'},
			{time:'03:31',lyric:'边声连角起，人去无留意'},
			{time:'03:37',lyric:'羌管难续，悠悠霜满地'},
			{time:'03:42',lyric:'去留两无意，停云杯难息'},
			{time:'03:48',lyric:'此曲声成，自有身后名'},
			{time:'03:54',lyric:'长安忆，重楼倚城隅'},
			{time:'03:59',lyric:'陌上雪，沉醉复又醒'},
			{time:'04:05',lyric:'早知如此相遇，不如不遇'},
			{time:'04:11',lyric:'笙歌歇尽兮人散去'},
			{time:'04:18',lyric:'长安忆'}
		]},
		{id:'list2',name:'其实都没有',src:'music/杨宗纬 - 其实都没有.mp3',icon:'icon-img/y1.jpg',bigimg:'img/fo2.jpg',zp:'img/radio04.png',author:'杨宗纬',zhuanji:'杨宗纬专辑',lyrics:[
			{time:'00:00',lyric:'杨宗纬 - 其实都没有'},
			{time:'00:02',lyric:'词:杨宗纬'},
			{time:'00:04',lyric:'曲:伍冠谚 易桀齐'},
			{time:'00:07',lyric:''},
			{time:'00:13',lyric:''},
			{time:'00:15',lyric:'从什么都没有的地方'},
			{time:'00:19',lyric:'到什么都没有的地方'},
			{time:'00:21',lyric:'我们 像没发生事一样'},
			{time:'00:25',lyric:'自顾地 走在路上'},
			{time:'00:29',lyric:'忘掉了的人只是泡沫'},
			{time:'00:33',lyric:'用双手轻轻一触就破'},
			{time:'00:36',lyric:'泛黄 有他泛黄的理由'},
			{time:'00:39',lyric:'思念将 越来越薄'},
			{time:'00:42',lyric:'你微风中浮现的 从前的面容'},
			{time:'00:46',lyric:'已被吹送到天空'},
			{time:'00:50',lyric:'我在脚步急促的城市之中'},
			{time:'00:53',lyric:'依然一个人生活'},
			{time:'00:57',lyric:'我也曾经憧憬过 后来没结果'},
			{time:'01:00',lyric:'只能靠一首歌真的在说我'},
			{time:'01:04',lyric:'是用那种特别干哑的喉咙'},
			{time:'01:07',lyric:'唱着淡淡的哀愁'},
			{time:'01:11',lyric:'我也曾经作梦过 后来更寂寞'},
			{time:'01:15',lyric:'我们能留下的其实都没有'},
			{time:'01:18',lyric:'原谅我用特别沧桑的喉咙'},
			{time:'01:21',lyric:'假装我很怀旧'},
			{time:'01:25',lyric:'假装我很痛'},
			{time:'01:27',lyric:''},
			{time:'01:43',lyric:'从什么都没有的地方'},
			{time:'01:47',lyric:'到什么都没有的地方'},
			{time:'01:50',lyric:'我们 像没发生事一样'},
			{time:'01:53',lyric:'自顾地 走在路上'},
			{time:'01:57',lyric:'忘掉了的人只是泡沫'},
			{time:'02:01',lyric:'用双手轻轻一触就破'},
			{time:'02:04',lyric:'泛黄 有他泛黄的理由'},
			{time:'02:07',lyric:'思念将 越来越薄'},
			{time:'02:11',lyric:'你微风中浮现的 从前的面容'},
			{time:'02:14',lyric:'已被吹送到天空'},
			{time:'02:18',lyric:'我在脚步急促的城市之中'},
			{time:'02:21',lyric:'依然一个人生活'},
			{time:'02:26',lyric:''},
			{time:'02:28',lyric:'我也曾经憧憬过 后来没结果'},
			{time:'02:32',lyric:'只能靠一首歌真的在说我'},
			{time:'02:36',lyric:'是用那种特别干哑的喉咙'},
			{time:'02:39',lyric:'唱着淡淡的哀愁'},
			{time:'02:42',lyric:'我也曾经作梦过 后来更寂寞'},
			{time:'02:46',lyric:'我们能留下的其实都没有'},
			{time:'02:50',lyric:'原谅我用特别沧桑的喉咙'},
			{time:'02:53',lyric:'假装我很怀旧'},
			{time:'02:57',lyric:'假装我很痛'},
			{time:'03:00',lyric:'我也曾经憧憬过 后来没结果'},
			{time:'03:04',lyric:'只能靠一首歌真的在说我'},
			{time:'03:07',lyric:'是用那种特别干哑的喉咙'},
			{time:'03:11.34',lyric:'唱着淡淡的哀愁'},
			{time:'03:14',lyric:'我也曾经作梦过 后来更寂寞'},
			{time:'03:18',lyric:'我们能留下的其实都没有'},
			{time:'03:22',lyric:'原谅我用特别沧桑的喉咙'},
			{time:'03:25',lyric:'假装我很怀旧'},
			{time:'03:28',lyric:'假装我很痛'},
			{time:'03:32',lyric:'其实我真的很怀旧'},
			{time:'03:36',lyric:'而且也很痛'},
			{time:'03:39',lyric:''}
		]},
		{id:'list3',name:'答应不爱你',src:'music/郑中基 - 答应不爱你.mp3',icon:'icon-img/z1.jpg',bigimg:'img/fo3.jpg',zp:'img/radio05.png',author:'郑中基',zhuanji:'郑中基专辑',lyrics:[
			{time:'00:-0',lyric:''},
			{time:'00:01',lyric:''},
			{time:'00:03',lyric:'答应不爱你'},
			{time:'00:05',lyric:'演唱：李维'},
			{time:'00:07',lyric:'作词：孙艺 作曲：金大洲'},
			{time:'00:09',lyric:''},
			{time:'00:14',lyric:''},
			{time:'00:17',lyric:''},
			{time:'00:21',lyric:'明明爱很清晰'},
			{time:'00:28',lyric:'却又接受分离'},
			{time:'00:31',lyric:'我只剩思念的权利'},
			{time:'00:35',lyric:'难过还来不及'},
			{time:'00:41',lyric:'爱早已融入呼吸'},
			{time:'00:42',lyric:'不存在的存在心底'},
			{time:'00:46',lyric:''},
			{time:'00:49',lyric:'虽然很努力'},
			{time:'00:56',lyric:'练习着忘记'},
			{time:'01:00',lyric:'我的心却还没答应可以放弃了你'},
			{time:'01:07',lyric:'真的对不起'},
			{time:'01:14',lyric:'答应了你不再爱你'},
			{time:'01:15',lyric:'我却还没答应我自己'},
			{time:'01:19',lyric:''},
			{time:'01:23',lyric:'明明爱很清晰'},
			{time:'01:30',lyric:'却要接受分离'},
			{time:'01:33',lyric:'我只剩思念的权利'},
			{time:'01:37',lyric:'难过还来不及'},
			{time:'01:43',lyric:'就让爱融入空气'},
			{time:'02:28',lyric:'不存在的存在心底'},
			{time:'02:31',lyric:''},
			{time:'02:35',lyric:'明明爱很清晰'},
			{time:'02:42',lyric:'却又接受分离'},
			{time:'02:46',lyric:'我只剩思念的权利'},
			{time:'02:50',lyric:'难过还来不及'},
			{time:'02:56',lyric:'爱早已融入呼吸'},
			{time:'02:56',lyric:'不存在的存在心底'},
			{time:'03:00',lyric:''},
			{time:'03:04',lyric:'说好要忘记'},
			{time:'03:11',lyric:'偏偏又想起'},
			{time:'03:14',lyric:'原来我的心还没有答应放弃了你'},
			{time:'03:22',lyric:'真的对不起'},
			{time:'03:30',lyric:'虽然曾经答应了你'},
			{time:'03:37',lyric:'我却还没答应我自己'},
            {time:'03:42',lyric:'却又如何真的不爱你'},
		]},
		{id:'list4',name:'关不上的窗',src:'music/周传雄 - 关不上的窗.mp3',icon:'icon-img/x1.jpg',bigimg:'img/fo7.jpg',zp:'img/radio03.png',author:'周传雄',zhuanji:'周传雄专辑',lyrics:[
            {time:'00:00',lyric:'歌词网.谢谢您支持'},
			{time:'00:03',lyric:'关不上的窗'},
			{time:'00:05',lyric:'词：陈信荣 曲：周传雄'},
			{time:'00:09',lyric:'唱：小刚(周传雄)'},
			{time:'00:12',lyric:'Lrc歌词：六月吹雪 制作'},
			{time:'00:17',lyric:'QQ：356568547'},
			{time:'00:26',lyric:'☆★☆music☆★☆'},
			{time:'00:46',lyric:'我听见寒风 扰乱了夜落'},
			{time:'00:55',lyric:'在寂寞阴暗窗居中的像梦'},
			{time:'01:04',lyric:'我听见孤单 在隐忍的夜晚'},
			{time:'01:13',lyric:'是悲哀刺痛搓曲折的胸膛'},
			{time:'01:22',lyric:'我是心门上了锁的一扇窗'},
			{time:'01:27',lyric:'任寒风来来去去关不上'},
			{time:'01:32',lyric:'这些年无法修补的风霜'},
			{time:'01:36',lyric:'看来缘外的凄凉'},
			{time:'01:41',lyric:'风来时撩过过往的忧伤'},
			{time:'01:45',lyric:'像唱歌季节恋家的狂欢'},
			{time:'01:50',lyric:'让我们从头来吧如梦如幻'},
			{time:'01:59',lyric:'我听见直觉 又嘲笑了黑夜'},
			{time:'02:08',lyric:'我只是寒冬向着喜悲的霜'},
			{time:'02:20',lyric:'._.送给最爱的芳._.'},
			{time:'02:37',lyric:'我听见孤单 在隐忍的夜晚'},
			{time:'02:46',lyric:'是悲哀刺痛搓曲折的胸膛'},
			{time:'02:55',lyric:'我是心门上了锁的一扇窗'},
			{time:'03:00',lyric:'任寒风来来去去关不上'},
			{time:'03:04',lyric:'这些年无法修补的风霜'},
			{time:'03:09',lyric:'看来缘外的凄凉'},
			{time:'03:15',lyric:'风来时撩过过往的忧伤'},
			{time:'03:19',lyric:'像唱歌季节恋家的狂欢'},
			{time:'03:23',lyric:'让我们从头来吧如梦如幻'},
			{time:'03:31',lyric:'我是心门上了锁的一扇窗'},
			{time:'03:37',lyric:'任寒风来来去去关不上'},
			{time:'03:41',lyric:'这些年无法修补的风霜'},
			{time:'03:45',lyric:'看来缘外的凄凉'},
			{time:'03:50',lyric:'风来时撩过过往的忧伤'},
			{time:'03:55',lyric:'像唱歌季节恋家的狂欢'},
			{time:'03:59',lyric:'让我们从头来吧如梦如幻'},
			{time:'04:09',lyric:'我听见直觉 又嘲笑了黑夜'},
			{time:'04:18',lyric:'我只是寒冬向着喜悲的霜'},
			{time:'04:27',lyric:'我只是寒冬向着喜悲的霜'},
			{time:'04:46',lyric:'the endじ☆ve'},

		]},
		{id:'list5',name:'认真的雪',src:'music/认真的雪.mp3',icon:'icon-img/icon-img7.jpg',bigimg:'img/fo5.jpg',zp:'img/radio04.png',author:'薛之谦',zhuanji:'薛之谦专辑',lyrics:[
			{time:'00:00',lyric:'歌名：认真的雪'},
			{time:'00:11',lyric:'词曲唱：薛之谦'},
			{time:'00:27',lyric:''},
			{time:'00:37',lyric:'夜深人静 那是爱情'},
			{time:'00:46',lyric:'偷偷的控制着我的心'},
			{time:'00:49',lyric:'提醒我 爱你要随时'},
			{time:'00:55',lyric:'音乐安静 还是爱情'},
			{time:'01:04',lyric:'一步一步吞噬着我的'},
			{time:'01:07',lyric:'爱上你我失去了我自'},
			{time:'01:13',lyric:'爱得那么认真'},
			{time:'01:16',lyric:'爱得那么认真'},
			{time:'01:19',lyric:'可还是听见了你说不'},
			{time:'01:23',lyric:'已经十几年没下雪的'},
			{time:'01:26',lyric:'突然飘雪'},
			{time:'01:28',lyric:'就在你说了分手的瞬'},
			{time:'01:32',lyric:'雪下得那么深 下得'},
			{time:'01:37',lyric:'倒映出我淌在雪中的伤痕'},
			{time:'01:41',lyric:'我并不在乎自己究竟'},
			{time:'01:46',lyric:'可我在乎今后你要谁'},
			{time:'01:51',lyric:''},
			{time:'02:17',lyric:'音乐安静 还是爱情'},
			{time:'02:26',lyric:'一步一步吞噬着我的'},
			{time:'02:30',lyric:'爱上你我失去了我自'},
			{time:'02:35',lyric:'爱得那么认真'},
			{time:'02:38',lyric:'爱得那么认真'},
			{time:'02:41',lyric:'可还是听见了你说不'},
			{time:'02:45',lyric:'已经十几年没下雪的'},
			{time:'02:48',lyric:'突然飘雪'},
			{time:'02:50',lyric:'就在你说了分手的瞬'},
			{time:'02:54',lyric:'雪下得那么深 下得'},
			{time:'02:59',lyric:'倒映出我淌在雪中的'},
			{time:'03:04',lyric:'我并不在乎自己究竟'},
			{time:'03:08',lyric:'可我在乎今后你要谁'},
			{time:'03:15',lyric:'爱得那么深'},
			{time:'03:17',lyric:'爱得那么认真'},
			{time:'03:20',lyric:'可还是听见了你说不'},
			{time:'03:24',lyric:'已经十几年没下雪的'},
			{time:'03:27',lyric:'突然飘雪'},
			{time:'03:29',lyric:'就在你说了分手的瞬'},
			{time:'03:33',lyric:'雪下得那么深 下得'},
			{time:'03:38',lyric:'倒映出我淌在雪中的'},
			{time:'03:42',lyric:'我并不在乎自己究竟'},
			{time:'03:47',lyric:'可我在乎今后你要谁'},
			{time:'03:53',lyric:'爱得那么深 比谁都'},
			{time:'03:59',lyric:'可最后还是只剩我一'},
			{time:'04:03',lyric:'漫天风雪请别再把我'},
			{time:'04:08',lyric:'毕竟那是我最爱得女'},
			{time:'04:13',lyric:'毕竟我曾是她深爱得'},
		]},
	];
	let listul=$(".list ul:nth-of-type(2)");
	let current=0;//全局变量，保存当前第几首播放
	//1.向页面中添加数据库中的歌单内容
	$(database).each(function(index,obj){
		let li=$("<li>",{
			id:$(this).attr('id')
		});
		li.html(`<span class="iconfont "></span>
						<span>${obj.name}</span>
						<span>${obj.author}</span>
						<span>${obj.zhuanji}</span>
						<span class="iconfont icon-shanchu" id="del"></span>`);
		if(index==0){
			li.addClass("active");
		}
		li.appendTo(listul);
	});
	//向页面中添加歌词
	let lyricul=$(".lyric ul");//获取到lyric下的ul(保存歌词)
	let lyricspan=$('.lyric');
	database[current].lyrics.forEach(function(obj,index){//遍历数据库中的歌词添加到页面中
		let li=$("<li>").html(`${obj.lyric}`);
		li.appendTo(lyricul);
		li.appendTo($('.ci'));
	});
	//点击播放
	let audio=$('audio');
	let load=$('div.load').eq(0);
	let play=$('.play>span');
	//2.当浏览器可以播放音频或视频时触发事件
	audio.get(0).oncanplay=function(){
		load.css({'width':'100%'});
	};
	//3.点击播放按钮，播放歌曲
	play.click(function(){
		if(audio.get(0).paused){//如果是暂停的，就播放，换相应的图标，并且当播放时让播放的长短条显示
			audio.get(0).play();
			play.removeClass("icon-bofang");
			play.addClass("icon-weibiaoti1");
			listul.get(0).children[current].children[0].classList.add("icon-yinle");
		}else{//如果是播放的，就暂停，换相应的图标，并且当播放时让播放的长短条消失
			audio.get(0).pause();
			play.addClass("icon-bofang");
			play.removeClass("icon-weibiaoti1");
			listul.get(0).children[current].children[0].classList.remove("icon-yinle");
		}
	});
	//4.当目前的播放位置已更改时，触发事件（timeupdate）
	let played=$(".played").eq(0);
	let circle=$(".circle").eq(0);
	let i;
	audio.get(0).ontimeupdate=function(){
		function getTime(time){//让歌曲的时间格式化，改变为分钟计时，如果分钟数（time/60取整）大于10，就为该数，如果小于10，就在前面加个0。   如果（time取整）除以60取余数大于10就为现在的秒数，如果小于10，就在前面加个0；
			let m=Math.trunc(time/60)>=10?Math.trunc(time/60):'0'+Math.trunc(time/60);
			let s=Math.trunc(time)%60>=10?Math.trunc(time)%60:'0'+Math.trunc(time)%60;//小数不能取余
			return m+':'+s
		}
		let quantime=getTime(audio.get(0).duration);//得到当前播放的长度(以秒计)
		let playedtime=getTime(audio.get(0).currentTime);//得到播放中的长度
		let span=$(".time");
		span.children('span').eq(2).html(`${quantime}`);
		span.children('span').eq(0).html(`${playedtime}`)
		played.css({'width':audio.get(0).currentTime/audio.get(0).duration*document.querySelector(".tiao").offsetWidth+"px"});
		circle.css({'left':audio.get(0).currentTime/audio.get(0).duration*document.querySelector(".tiao").offsetWidth-5+"px"});
		

		database[current].lyrics.forEach(function(obj,index){			
			if(obj.time==getTime(audio.get(0).currentTime)){
				let a=index;
				if(index<=5){
					index=0
				}else{
					index=index-5;
					a=a-index;
				}
				lyricul.html('');
				for(let j=index;j<database[current].lyrics.length;j++){
					let li=$("<li>").html(database[current].lyrics[j].lyric);
					li.appendTo(lyricul);
				}
				$('li',lyricul).eq(a).addClass('ly')
			}
		});
        database[current].lyrics.forEach(function(obj,index){
            if(obj.time==getTime(audio.get(0).currentTime)){
                let a=index;
                if(index<=2){
                    index=0
                }else{
                    index=index-2;
                    a=a-index;
                }
                $('.ci').html('');
                for(let j=index;j<database[current].lyrics.length;j++){
                    let gli=$("<li>").html(database[current].lyrics[j].lyric);
                    gli.appendTo($('.ci'));
                }
                $('li',$('.ci')).eq(a).addClass('g_f');
            }
        });
	};
	//5.点击进度条，使played的宽度变到点击的位置
	let tiao=$(".tiao").eq(0);
	// audio.get(0).oncanplaythrough=function(){
		tiao.get(0).onclick=function(e){
			let left=e.offsetX;
			audio.get(0).currentTime=left/tiao.get(0).offsetWidth*audio.get(0).duration;
		}
	// }
	//6.点击音量按钮
	let v=1;//默认当前音量为1
	let voice=$(".voice-l span");
	let voicetiao=$(".voice-r .tiao")
	let voiceplayed=$(".voice-r .played");
	let voicecircle=$(".voice-r .circle");
	voice.click(function(){
		if(audio.get(0).volume){//如果音频的音量有值
			v=audio.get(0).volume;
			audio.get(0).volume=0;
			$(this).addClass("icon-jingyin");
			$(this).removeClass("icon-yinliang");
			
		}else{
			audio.get(0).volume=v;
			$(this).removeClass("icon-jingyin");
			$(this).addClass("icon-yinliang")
		}
	})
	voicetiao.get(0).onclick=function(e){
		let left=e.offsetX;
		audio.get(0).volume=e.offsetX/voicetiao.get(0).offsetWidth;
	}
	//7.当音量改变时，触发事件
	audio.get(0).onvolumechange=function(){
		voiceplayed.css({'width':audio.get(0).volume*voicetiao.get(0).offsetWidth+'px'});
		voicecircle.css({'left':audio.get(0).volume*voicetiao.get(0).offsetWidth-5+'px'});
	}
	//点击菜单按钮，换背景
	let menu=$(".menu span");
	menu.click(function(){
		$(".box>div:nth-child(2)").toggleClass("list-o");
		$(".box>div:nth-child(3)").toggleClass("lyric-o");
	})
	//8.双击事件源换背景
	let icon=$(".icon");
	let author=$(".author");
    let oo=$("#g_one");
    let zp=$('.zp');
	listul.dblclick(function(e){
		let num;
		if(e.target.nodeName=="SPAN"&&e.target.id!="del"){
			num=database.findIndex(function(value,index){
					return e.target.parentNode.id==value.id;
			})
			current=num;
			[...e.target.parentNode.parentNode.children].forEach(function(value){
				value.classList.remove("active");//移除li的类名，不再选中
				value.children[0].classList.remove("icon-yinle");
			})
			e.target.parentNode.classList.add("active");//给li添加active类名（选中的效果）	
			e.target.parentNode.children[0].classList.add("icon-yinle")
			oo.get(0).style.backgroundImage=`url(${database[num].bigimg})`;
			zp.attr({ src: `${database[num].zp}` });
			$('.t_name').html(`歌曲名：${database[num].name}`)
			$('.t_aut').html(`作者：${database[num].author}`)
			$('.t_zj').html(`专辑：${database[num].zhuanji}`)
			icon.css({'backgroundImage':`url(${database[num].icon})`});
			author.children().eq(2).html(`${database[num].author}`);
			author.children().eq(0).html(`${database[num].name}`);
            lyricspan.children().eq(0).html(`${database[num].name}`)
            lyricspan.children().eq(1).html(`${database[num].author}`)
            audio.attr('src',`${database[num].src}`);
			play.addClass("icon-weibiaoti1");
			audio.get(0).play();
		}else if(e.target.nodeName=="SPAN"&&e.target.id=="del"){
			num=database.findIndex(function(value,index){
				return e.target.parentNode.id==value.id;
			})
			if(num==current){
				return ;
			}
			listul.get(0).removeChild(e.target.parentNode);
			database.splice(num,1);
			if(num<current){//让current随时更新，保证了目前播放的歌曲不能删除掉
				current--;
			}
		}
	})
	//9.上一曲
	let pre=$(".pre");
	let next=$(".next");
	//点击上一首事件
	pre.click(function(){
		current--;
		if(current<0){
			current=database.length-1;
		}

		listul.children().each(function(index,value){
			$(this).removeClass("active");
			$(this).children().eq(0).removeClass("icon-yinle");
		})
		listul.children().eq([current]).addClass('active')
		listul.children().eq([current]).children().eq(0).addClass("icon-yinle")
        oo.get(0).style.backgroundImage=`url(${database[current].bigimg})`;
        zp.attr({ src: `${database[num].zp}` });
        $('.t_name').html(`歌曲名：${database[num].name}`)
        $('.t_aut').html(`作者：${database[num].author}`)
        $('.t_zj').html(`专辑：${database[num].zhuanji}`)
		icon.css({'backgroundImage':`url(${database[current].icon})`});
		author.children().eq(2).html(`${database[current].author}`);
		author.children().eq(0).html(`${database[current].name}`);
        lyricspan.children().eq(0).html(`${database[current].name}`)
        lyricspan.children().eq(1).html(`${database[current].author}`)
		audio.attr('src',`${database[current].src}`);
		play.addClass("icon-weibiaoti1");
		audio.get(0).play();
	})
	//10.点击下一首事件
	next.click(function(){
		current++;
		if(current>=database.length){
			current=0;
		}
		listul.children().each(function(index,value){
			$(this).removeClass("active");
			$(this).children().eq(0).removeClass("icon-yinle");
		})
		listul.get(0).children[current].classList.add("active");	
		listul.get(0).children[current].children[0].classList.add("icon-yinle")
        oo.get(0).style.backgroundImage=`url(${database[current].bigimg})`;
        zp.attr({ src: `${database[num].zp}` });
        $('.t_name').html(`歌曲名：${database[num].name}`)
        $('.t_aut').html(`作者：${database[num].author}`)
        $('.t_zj').html(`专辑：${database[num].zhuanji}`)
		icon.css({'backgroundImage':`url(${database[current].icon})`});
		author.children().eq(2).html(`${database[current].author}`);
		author.children().eq(0).html(`${database[current].name}`);
        lyricspan.children().eq(0).html(`${database[current].name}`)
        lyricspan.children().eq(1).html(`${database[current].author}`)
		audio.attr('src',`${database[current].src}`);
		play.addClass("icon-weibiaoti1");
		audio.get(0).play();
	})
	//放完一首，自动播放
	audio.get(0).onended=function(){
		next.click();
	}
	
	
	
	
})