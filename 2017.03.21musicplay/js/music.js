"use strict"
window.onload=function(){
	let database=[//数据库中的src要复制粘贴，可能会少空格
		{id:'list1',name:'长安忆',src:'music/双笙 - 长安忆.mp3',icon:'icon-img/icon-img1.jpg',bigimg:'img/back1.jpg',author:'双笙',zhuanji:'双笙专辑',lyrics:[
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
		
		{id:'list2',name:'其实都没有',src:'music/杨宗纬 - 其实都没有.mp3',icon:'icon-img/icon-img2.jpg',bigimg:'img/back2.jpg',author:'杨宗纬',zhuanji:'杨宗纬专辑',lyrics:[
			{time:'00:01',lyric:'其实都没有' },
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
		{id:'list3',name:'答应不爱你',src:'music/郑中基 - 答应不爱你.mp3',icon:'icon-img/icon-img3.jpg',bigimg:'img/back9.jpg',author:'郑中基',zhuanji:'郑中基专辑',lyrics:[
			{time:'00:01',lyric:'答应不爱你' },
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
		{id:'list4',name:'关不上的窗',src:'music/周传雄 - 关不上的窗.mp3',icon:'icon-img/icon-img4.jpg',bigimg:'img/back4.jpg',author:'周传雄',zhuanji:'周传雄专辑',lyrics:[
			{time:'00:01',lyric:'关不上的窗' },
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
		{id:'list5',name:'认真的雪',src:'music/ 认真的雪.mp3',icon:'icon-img/icon-img7.jpg',bigimg:'img/back11.jpg',author:'薛之谦',zhuanji:'薛之谦专辑',lyrics:[
			{time:'00:01',lyric:'认真的雪' },
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
	]
	
	let listul=document.querySelector(".list ul:nth-of-type(2)");
	let current=0;//全局变量，保存当前第几首播放
	//1.向页面中添加数据库中的歌单内容
	database.forEach(function(obj,index){
		let li=document.createElement("li");
		li.id=obj.id;
		li.innerHTML=`<span class="iconfont "></span>
						<span>${obj.name}</span>
						<span>${obj.author}</span>
						<span>${obj.zhuanji}</span>
						<span class="iconfont icon-shanchu" id="del"></span>`;
		if(index==0){
			li.classList.add("active");
//			li.children[0].classList.add("icon-yinle");
		}
		listul.appendChild(li);
	})
	
	
	
	
	//向页面中添加歌词
	let lyricul=document.querySelector(".lyric ul");//获取到lyric下的ul(保存歌词)
	database[current].lyrics.forEach(function(obj,index){//遍历数据库中的歌词添加到页面中
		let li=document.createElement("li");
		li.innerHTML=`<span>${obj.lyric}</span>`;
		lyricul.appendChild(li);
	})
	
	
	
	
	//点击播放
	let audio=document.querySelector("audio");
	let load=document.querySelectorAll("div.load")[0];
	let play=document.querySelector(".play>span");
	//2.当浏览器可以播放音频或视频时触发事件
	audio.oncanplay=function(){
		load.style.width='100%';
	}
	//3.点击播放按钮，播放歌曲
	play.onclick=function(){
		if(audio.paused){//如果是暂停的，就播放，换相应的图标，并且当播放时让播放的长短条显示
			audio.play();
			play.classList.remove("icon-bofang");
			play.classList.add("icon-weibiaoti1");
			listul.children[current].children[0].classList.add("icon-yinle");
		}else{//如果是播放的，就暂停，换相应的图标，并且当播放时让播放的长短条消失
			audio.pause();
			play.classList.add("icon-bofang");
			play.classList.remove("icon-weibiaoti1");
			listul.children[current].children[0].classList.remove("icon-yinle");
		}
	}
	
	
	//4.当目前的播放位置已更改时，触发事件（timeupdate）
	let played=document.querySelector(".played");
	let circle=document.querySelector(".circle");
	let i;
	audio.ontimeupdate=function(){
		function getTime(time){//让歌曲的时间格式化，改变为分钟计时，如果分钟数（time/60取整）大于10，就为该数，如果小于10，就在前面加个0。   如果（time取整）除以60取余数大于10就为现在的秒数，如果小于10，就在前面加个0；
			let m=Math.trunc(time/60)>=10?Math.trunc(time/60):'0'+Math.trunc(time/60);
			let s=Math.trunc(time)%60>=10?Math.trunc(time)%60:'0'+Math.trunc(time)%60;//小数不能取余
			return m+':'+s
		}
		let quantime=getTime(audio.duration);//得到当前播放的长度(以秒计)
		let playedtime=getTime(audio.currentTime);//得到播放中的长度
		let span=document.querySelector(".time");
		span.children[2].innerHTML=`${quantime}`;//
		span.children[0].innerHTML=`${playedtime}`;
		played.style.width=audio.currentTime/audio.duration*document.querySelector(".tiao").offsetWidth+'px';
		circle.style.left=audio.currentTime/audio.duration*document.querySelector(".tiao").offsetWidth-5+'px';
		
		i=[...database[current].lyrics].findIndex(function(val){
			return val.time==getTime(audio.currentTime);
		})
		console.log(i);
		console.log(lyricul.querySelectorAll("span"));
		lyricul.querySelectorAll("span")[i].classList.add("ly");
	}
	
	//5.点击进度条，使played的宽度变到点击的位置
	let tiao=document.querySelector(".tiao");
//	audio.oncanplaythrough=function(){
		tiao.onclick=function(e){
			let left=e.offsetX;
			audio.currentTime=left/tiao.offsetWidth*audio.duration;
		}	
//	}
	//6.点击音量按钮
	let v=1;//默认当前音量为1
	let voice=document.querySelector(".voice-l span");
	let voicetiao=document.querySelector(".voice-r .tiao")
	let voiceplayed=document.querySelector(".voice-r .played");
	let voicecircle=document.querySelector(".voice-r .circle");
	voice.onclick=function(){
		if(audio.volume){//如果音频的音量有值
			v=audio.volume;
			audio.volume=0;
			voice.classList.add("icon-jingyin");
			voice.classList.remove("icon-yinliang");
			
		}else{
			audio.volume=v;
			voice.classList.remove("icon-jingyin");
			voice.classList.add("icon-yinliang")
		}
	}
	voicetiao.onclick=function(e){
		let left=e.offsetX;
		audio.volume=e.offsetX/voicetiao.offsetWidth;
	}
	//7.当音量改变时，触发事件
	audio.onvolumechange=function(){
		voiceplayed.style.width=audio.volume*voicetiao.offsetWidth+'px';
		voicecircle.style.left=audio.volume*voicetiao.offsetWidth-5+'px';
	}
	
	//点击菜单按钮，换背景
	let menu=document.querySelector(".menu span");
	menu.onclick=function(){
		document.querySelector(".box>div:nth-child(2)").classList.toggle("list-o");
		document.querySelector(".box>div:nth-child(3)").classList.toggle("lyric-o");
	}
	
	
	//8.双击事件源换背景
	let icon=document.querySelector(".icon");
	let author=document.querySelector(".author");
	let oo=document.querySelector("#g_one");
	listul.ondblclick=function(e){
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
			oo.style.backgroundImage=`url(${database[num].bigimg})`;
			icon.style.backgroundImage=`url(${database[num].icon})`;
			author.children[2].innerHTML=`${database[num].author}`;
			author.children[0].innerHTML=`${database[num].name}`;
			audio.src=`${database[num].src}`;
			play.classList.add("icon-weibiaoti1");
			audio.play();
		}else if(e.target.nodeName=="SPAN"&&e.target.id=="del"){
			num=database.findIndex(function(value,index){
				return e.target.parentNode.id==value.id;
			})
			if(num==current){
				return ;
			}
			
			listul.removeChild(e.target.parentNode);
			database.splice(num,1);
			console.log(current)
			if(num<current){//让current随时更新，保证了目前播放的歌曲不能删除掉
				current--;
			}
		}
		
	}
	//9.上一曲
	let pre=document.querySelector(".pre");
	let next=document.querySelector(".next");
	//点击上一首事件
	pre.onclick=function(){
		current--;
		if(current<0){
			current=database.length-1;
		}
		
		[...listul.children].forEach(function(value){
			value.classList.remove("active");
			value.children[0].classList.remove("icon-yinle");
		})
		listul.children[current].classList.add("active");	
		listul.children[current].children[0].classList.add("icon-yinle")
		oo.style.backgroundImage=`url(${database[current].bigimg})`;
		icon.style.backgroundImage=`url(${database[current].icon})`;
		author.children[2].innerHTML=`${database[current].author}`;
		author.children[0].innerHTML=`${database[current].name}`;
		audio.src=`${database[current].src}`;
		play.classList.add("icon-weibiaoti1");
		audio.play();
	}
	//10.点击下一首事件
	next.onclick=function(){
		current++;
		if(current>=database.length){
			current=0;
		}
		[...listul.children].forEach(function(value){
			value.classList.remove("active");
			value.children[0].classList.remove("icon-yinle");
		})
		listul.children[current].classList.add("active");	
		listul.children[current].children[0].classList.add("icon-yinle")
		oo.style.backgroundImage=`url(${database[current].bigimg})`;
		icon.style.backgroundImage=`url(${database[current].icon})`;
		author.children[2].innerHTML=`${database[current].author}`;
		author.children[0].innerHTML=`${database[current].name}`;
		audio.src=`${database[current].src}`;
		play.classList.add("icon-weibiaoti1");
		audio.play();
	}
	//放完一首，自动播放
	audio.onended=function(){
		next.onclick();
	}











}
