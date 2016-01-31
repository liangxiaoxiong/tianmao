window.onload=function(){                        
    function getClass(classname,father){
        var obj=father || document;
        if (obj.getElementsClassNme) {
            obj.getElementsByClassNme(classname);
        }else{
            var alls=obj.getElementsByTagName("*");
            var arr=[];
            for (var i = 0; i < alls.length; i++) {
                if (Check(alls[i].className,classname)) {
                    arr.push(alls[i]);
                };
            };
        };
        return arr;
        }
        function Check(str,classname){
        var newarr=str.split(" ");
        for (var i = 0; i < newarr.length; i++) {
            if (newarr[i]==classname) {
                return true;
            };
        };
        return false;
    }
    //选项卡
    var onea=$(".onea");
    var pinbb=$(".pin-bb")[0];
    var pinbba=$(".pin-bba");
    var huan=$(".huan")[0];
    //alert(pinbba.length)
    var arr1=[];
    var arr2=[];
    var arr3=[];
    var arr4=[];
    for (var i = 4; i <28; i++) {
        arr1.push("./images/"+i+".jpg");
        arr2.push("./images/"+i+".jpg");
        arr3.push("./images/"+i+".jpg");
        arr4.push("./images/"+i+".jpg");
    };
    function random(arr6){
        var arr5=[];
        for (var i = 0; i < 24; i++) {
            arr5.push(arr6[parseInt(Math.random()*24)]);
        };
        return arr5;
    }
    var arr7=[arr1,arr2,arr3,arr4];
    function show(num){
        var imgarr=random(arr7[num]);
        for (var i = 0; i < imgarr.length; i++) {
            var div=document.createElement("div");
            div.style.cssText="width:132px;height:79px;background:#fff;float:left;margin-left:2px;margin-top:2px;position:relative;cursor:pointer;"
            div.className="divs"
            var img=document.createElement("img");
            img.src=imgarr[i];
            img.style.cssText="width:90px;height:45px;position:relative;left:21px;top:17px;"
            div.appendChild(img);
            var img2=document.createElement("img");
            img2.src="./images/taoxin.png";
            img2.style.cssText="position:absolute;top:5px;right:5px;display:none;"
            img2.className="tao"
            div.appendChild(img2);

            pinbba[num].appendChild(div);
        };
        var divs=$(".divs");
        var taos=$(".tao");
        for (var i = 0; i < divs.length; i++) {
            divs[i].index=i;
            hover(divs[i],function(){
                ss=this.index;
                taos[ss].style.display="block";
            },function(){
                taos[ss].style.display="none";
            })
        };
    }
    show(0);


    var index=0;
    for (var i = 0; i < onea.length; i++) {
        onea[i].index=i;
        onea[i].flags=true;
        onea[0].flags=false;
        onea[i].onclick=function(){
            index=this.index;
            for(var j=0;j<pinbba.length;j++){
                pinbba[j].style.display="none";
                onea[j].style.fontWeight="normal";
                onea[j].style.textDecoration="none";
                onea[j].style.color="#666";
            }
            pinbba[this.index].style.display="block";
            onea[this.index].style.fontWeight="bold";
            onea[this.index].style.textDecoration="underline";
            onea[this.index].style.color="black";
            if (this.flags) {
                show(this.index);
                this.flags=false;
            };
        }
    };






    huan.onclick=function(){
        pinbba[index].innerHTML="";
        //pinbba[index].style.cssText="color:red;"
        show(index);
    }

    


    //品牌桃心
    /*var lis=$(".lis");
    var pinbbab=$(".pinbbab");
    for (var i=0; i<lis.length; i++) {
        lis[i].index=i;
        lis[i].onmouseover=function(){
            pinbbab[this.index].style.display="block";
        }
        lis[i].onmouseout=function(){
            pinbbab[this.index].style.display="none";
        }
    };*/
    //input中value的内容
    var text1=$("#inputs");
        text1.onfocus=function(){//获得焦点
            if (text1.value=="施华洛世奇华丽入住，璀璨好礼疯狂送") {
                text1.value=""
            };
            
        }
        text1.onblur=function(){//失去焦点
            if (text1.value) {

            } else{
                text1.value="施华洛世奇华丽入住，璀璨好礼疯狂送"
            };
            
            
        }
        var text2=$(".syd-a")[0];
        text2.onfocus=function(){//获得焦点
            if (text2.value=="施华洛世奇华丽入住，璀璨好礼疯狂送") {
                text2.value=""
            };
            
        }
        text2.onblur=function(){//失去焦点
            if (text2.value) {

            } else{
                text2.value="施华洛世奇华丽入住，璀璨好礼疯狂送"
            };
            
            
        }
//轮播
    var lists=$(".daos-bb-ca");
    var imgs=$(".ba");
    var daos=$(".daos")[0];
    // var daoboxs=$(".daoboxs")[0];
    var daosbc=$(".daos-bcd")[0];
    var daosbcs=$(".daos-bcs");
    var bgcolor=["#b70bf5","#76eec8","#f3edf1","#e2e2e2","#dadada","#dbdbdb"];
    //手控
    for (var i = 0; i < lists.length; i++) {
        lists[i].index=i;
        lists[i].onmouseover=function(){
            clearInterval(t);
            for(var j=0;j<imgs.length;j++){
                imgs[j].style.zIndex=4;
                lists[j].style.background="black";
                
            }
            for(var k=0;k<daosbcs.length;k++){
                daosbcs[k].style.display="none";
                //daosbcs[k].style.zIndex=4;
                //lists[k].style.background="black";
            }
            daosbcs[this.index].style.display="block";
            imgs[this.index].style.zIndex=5;
            lists[this.index].style.background="red";
            daos.style.background=bgcolor[this.index];
            }
        lists[i].onmouseout=function(){
        t=setInterval(move,2000);
        num=this.index+1;
        }
    }; 
    //自动
    var t=setInterval(move,2000);
    var num=1;
    function move(){
                
        if (num==6) {
            num=0;
        };
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.zIndex=4;
            lists[i].style.background="black";

        };
        for(var k=0;k<daosbcs.length;k++){
            daosbcs[k].style.display="none";
        }
        daosbcs[num].style.display="block";
        imgs[num].style.zIndex=5;
        lists[num].style.background="red";
        daos.style.background=bgcolor[num];
        num++;
    } 

    window.onscroll=function(){
        //document.write(document.documentElement.scrollTop)
        //兼容问题
        var flag=true;//滚动条往下拉时的开关，第一次开，这个开关要保证每一次往下拉时，开关都是开的
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        //document.write(obj.scrollTop)
        var syd=$(".syd")[0];
        var scrollT=obj.scrollTop;
        if (scrollT>=700 /*&& obj.scrollTop<=7000*/) {
            if (flag) {
                animate(syd,{top:0},500,Tween.Linear);
                flag=false;
                var flag2=true;
            };
            syd.style.display="block";
        }else{
            if (flag2) {
                animate(syd,{top:-50},500,Tween.Linear);
                flag=true;
                flag2=false;
            };
            syd.style.display="none";
        }; 
        //返回顶部
        var hddb=$(".hddb")[1];
        hddb.onclick=function(){
            animate(obj,{scrollTop:0},1000,Tween.Linear);
        }
        //按需加载
        var floor=$(".tibox");
        var ch=document.documentElement.clientHeight;
        for (var y = 0; y < floor.length; y++) {
            if (floor[y].offsetTop<obj.scrollTop+ch) {
                var imgs=$("img",floor[y]);
                for(u=0;u<imgs.length;u++){
                    imgs[u].src=imgs[u].getAttribute("aa");
                }
            };
        };
        //左浮动  楼层转换 
        var zfd=$(".zfd")[0]; 
        var floor=$(".tia"); 
        var ti=$(".ti")[0];
        var scrollT=obj.scrollTop;
        var lis=$(".zfd-a");  
        var cW=document.documentElement.clientWidth;
        window.onresize=function(){
            cW=document.documentElement.clientWidth;
            zfd.style.left=(cW-1349)/2+"px";
        }
        if (obj.scrollTop>=1000 && obj.scrollTop<=6561) {
            zfd.style.display="block";
        }else{
            zfd.style.display="none";
        };
        for (var i = 0; i < floor.length; i++) {
            floor[i].aa=floor[i].offsetTop;
            if (obj.scrollTop>=floor[i].aa-100) {
                for (var j=0;j<lis.length;j++){
                    lis[j].style.background=""
                }
                lis[i].style.background="red";
            };
                    
        };

        //通过小按钮来控制楼层
        for (var k= 0; k<lis.length; k++) {
            lis[k].index=k;
            lis[k].onclick=function(){
                animate(obj,{scrollTop:floor[this.index].aa-100},700,Tween.Quad.easeIn);
                //obj.scrollTop=floor[this.index].aa
            }
        };

        
    }

//下拉菜单
    var yiji=$(".yiji");
    var erji=$(".erji");
    var menubox=$(".menubox")[0];
    for (var i = 0; i < yiji.length; i++) {
        yiji[i].index=i;
        hover(yiji[i],function(){
            // var sons=$("li",erji[this.index]);
            // var h=sons[0].offsetHeight;
            //     erji[this.index].style.height=0;
            //     animate(erji[this.index],{height:h*sons.length},600,Tween.Linear)
            erji[this.index].style.display="block";
            },function(){
                // animate(erji[this.index],{height:0},600,Tween.Linear)
                erji[this.index].style.display="none";
        })
    };

//节点
    //八楼
    jdlb(".tihas",".leftbtn7",".rightbtn7",".ti-ha-ba");
    //五楼
    jdlb(".tieas",".leftbtn5",".rightbtn5",".ti-ea-ba");
    //四楼
    jdlb(".tidas",".leftbtn4",".rightbtn4",".ti-da-ba");
    //三楼
    jdlb(".ticas",".leftbtn3",".rightbtn3",".ti-ca-ba"); 
    //二楼
    jdlb(".tibas",".leftbtn2",".rightbtn2",".ti-ba-ba");
    //一楼
    jdlb(".tiaas",".leftbtn1",".rightbtn1",".ti-aa-ba");
    



    var daosbaa=$(".daosba-a")[0];
    var daosbb=$(".daosbb")[0];
    hover(daosbaa,function(){
        daosbb.style.display="block";
    },function(){
        daosbb.style.display="none";
    })
    var daosba=$(".daosba");
    var nsub=$(".n-sub");
    var daosbds=$(".daos-bds");
    var daosbd=$(".daos-bd");
    var bgcolor2=["#d40c54","#fe4157","#e8e8e8","#f1345e","#7909ab","#6fdbdd","#d8ede6","#253be7","#ffb700","#ff507b","#f63a3b","#ed0445","#cdffa4","#328de0","#ff489b"];
    var daosbe=$(".daos-be")[0];
    var daosbes=$(".daos-bes");
    for (var i = 0; i < daosba.length; i++) {
        daosba[i].index=i;
        hover(daosba[i],function(){
            clearInterval(t);
            nsub[this.index].style.display="block";
            daosbd[0].style.display="block";
            daosbe.style.display="block";
            daosbc.style.display="none";
            for(j=0;j<daosbds.length;j++){  
                daosbds[j].style.display="none";
            }
            for(k=0;k<daosbes.length;k++){
                daosbes[k].style.display="none";
            }
            daosbes[this.index].style.display="block";
            daosbds[this.index].style.display="block";
            daos.style.background=bgcolor2[this.index];
        },function(){
            daosbc.style.display="block";
            nsub[this.index].style.display="none";
            daosbe.style.display="none";
            daosbd[0].style.display="none";
            t=setInterval(move,2000);
        })
    };


    var yfd=$(".yfd")[0];
    var dH=document.documentElement.clientHeight;
    yfd.style.height=dH+"px";
    var yfda=$(".yfd-a");
    var fua=$(".fu-a");
    for (var i = 0; i < yfda.length; i++) {
            yfda[i].index=i;
            hover(yfda[i],function(){
                //fua[this.index].style.display="block";
                animate(fua[this.index],{left:-95},200,Tween.Linear)
            },function(){
                //fua[this.index].style.display="none";
                animate(fua[this.index],{left:50},200,Tween.Linear)
            })
        };
    



    
}
            