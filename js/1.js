var ctboxs=document.getElementById('ct1');
var ctbox=ctboxs.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var contentWidth=600;
var titleWidth=50;
var n=0;
for(var i=0;i<title.length;i++){
	title[i].idx=i;
	title[i].onclick=function () {
		for (var i=0;i<ctbox.length;i++) {
			n=this.idx;
			if(i<=n){
				ctbox[i].style.left=i*titleWidth+'px';
			}
			if(i>n){
				ctbox[i].style.left=i*titleWidth+contentWidth+'px';
			}
		}
	}
}
//点击的序号记为n，则
//ctbox序号小于等于n时
//ctbox的left值  序号*titleWidth
//ctbox序号大于n时
//ctbox的left值  序号*titleWidth+contentWidth
// 点击0号标题
// 0 650px 700px 750px
// 点击1号标题
// 0 50px 700px 750px
// 点击2号标题
// 0 50px 100px 750px
// 点击3号标题
// 0 50px 100px 150px