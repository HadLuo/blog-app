//var url = 'http://172.29.2.194:9000';
var url = 'https://hadluo.cn/api';
//湘ICP备20016463号-1


function menu() {
	$.get(url + "/blog/menu", function(data) {
		$('#item_total').text(data.data.itemCount)
		$('#type_total').text(data.data.typeTotal)
		$('#nickname').html(data.data.nickName)
		$('#desc').html(data.data.desc)
		let pay = data.data.pay
		$('#wechat_qr').attr('src' , pay)
	});
}

// 计算页数
function getTotalPageNum(totalRecord, pageSize) {
    return pageNum = parseInt((totalRecord + pageSize - 1) / pageSize);
}
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
	if (r != null) return unescape(r[2]);
	return null; //返回参数值
}

// 时间轴 添加文章
function appendDirItem(year,datas){
	var dom = '<div class="collection-title" style="opacity: 1; display: block; transform: translateX(0px);">'
	           +'<h2 class="archive-year" id="archive-year-'+year+'" style="opacity: 1; display: block; transform: translateX(0px);">'+year+'</h2>'
			   +'</div>'
	$('#dir_content').append(dom)
	
	for(let i =0;i<datas.length;i++){
		let id = datas[i].id
		let title = datas[i].title
		let createTime = datas[i].createTime
		let year = datas[i].year
		let mon = datas[i].mon
		let day = datas[i].day
		let dom2 = '<article class="post post-type-normal" itemscope="" itemtype="http://schema.org/Article">'
									+'<header class="post-header" style="opacity: 1; display: block; transform: translateY(0px);">'
										+'<h3 class="post-title">'
											+'<a class="post-title-link" href="content.html?id='+id+'" itemprop="url">'
												+'<span itemprop="name">'+title+'</span>'
											+'</a>'
										+'</h3>'
										+'<div class="post-meta">'
											+'<time class="post-time" itemprop="dateCreated" datetime="'+createTime+'" content="'+year+'-'+mon+'-'+day+'">'
												+  mon + "-" + day
											+'</time>'
										+'</div>'
									+'</header>'
								+'</article>'
		$('#dir_content').append(dom2)
	}
		
	
}
