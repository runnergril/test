var ctboxs=document.getElementById('ct1');
var ctbox=ctboxs.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var contentHeight=340;
var titleHeight=50;
var n=0;
for(var i=0;i<title.length;i++){
	title[i].idx=i;
	title[i].onclick=function () {
		n=this.idx;
		for (var i=0;i<ctbox.length;i++) {
			if (i<=n) {
			    ctbox[i].style.top=i*titleHeight+'px';
		    }else{
			    ctbox[i].style.top=i*titleHeight+contentHeight+'px';
		    }
		}
	}
}
//点击的序号记为n，则
//ctbox序号小于等于n时
//ctbox的top值  ctbox序号*titleHeight
//ctbox序号大于n时
//ctbox的left值  ctbox序号*titleWidth+contentHeight