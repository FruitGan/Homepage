/**
 * Created by wo on 2017/4/10.
 */
$(document).ready(function(){
    let arr=[];//保存纸牌,除大小王外有52张纸牌
    let hrr=['c','d','s','h'];//保存花色的数组
    let sign={        // 2_c:true,
        // 3_d:true
    }//标记每次产生的纸牌，避免出现相同的，只要产生了，就变为true
    let i=0;
    while(arr.length<52){//遍历将纸牌存入arr数组中
        i++;
        let num=Math.ceil(Math.random()*13);//每种花色的有13张，向上取整（1~13）
        let flower=hrr[Math.floor(Math.random()*hrr.length)];//遍历hrr，将每种花色的字母随机产生
        if(!sign[num+'_'+flower]){//如果标记中的每个名字为假值，说明没有产生该纸牌，就将该纸牌放入arr数组中
            sign[num+'_'+flower]=true;
            arr.push({num,flower});
        }
    }
    //
    for(let k=0;k<52;k++){
        $('<div class="wan">').attr('id','s'+k).css({'background-image':`url(img/${arr[`${51-k}`].num}${arr[`${51-k}`].flower}.png)`}).appendTo('.pai')
    }

    //画上边的牌
    let n=0;
    for(let i=0;i<7;i++){
        for(let j=0;j<i+1;j++){
            $('<div class="card-c">').attr('id',i+'_'+j).attr('value',arr[n].num).css({'background-image':`url(img/${arr[n].num}${arr[n].flower}.png)`}).appendTo('.card').delay(50*n).animate({
                left:300-50*i+100*j,
                top:50*i,
                opacity:1
            },400,function(){
                    $(".wan").last().remove()
            });
            n++;
        }
    }
    //画下边的牌
    for(n;n<52;n++){
        $('<div class="card-c left">').attr('id',7+'_'+n).attr('value',arr[n].num).css({'background-image':`url(img/${arr[n].num}${arr[n].flower}.png)`}).appendTo('.card').delay(50*n).animate({
            left:170,
            top:468,
            opacity:1
        },400,function(){
                $(".wan").last().remove()
        });
    }
    //点击每一张
    let current=null;//保存第一次点击的那个
    let sc=0;
    $('.card-c').click(function(){
        let x=parseInt($(this).attr('id').split('_')[0]);
        let y=parseInt($(this).attr('id').split('_')[1]);
        //压着的不能点击
        if(x<6){
            if($(`#${x+1}_${y}`).length==1||$(`#${x+1}_${y+1}`).length==1){
                return;
            }
        }
        $(this).toggleClass('active');
        //两张相加等于13 让它们消失
        if(!current){
            if($(this).attr('value')==13){
                $('.active').animate({
                    left:729,
                    top:10,
                    opacity:0
                    // display:'none'
                },function () {
                    $('.active').remove();
                    currents=null;
                });
                sc+=10;
                $('.score>span').html(`${sc}`)
            }else{
                current=$(this);
            }
        }else{
            if(parseInt(`${current.attr('value')} `)+parseInt(`${$(this).attr('value')}`)===13){
                $('.active').animate({
                    left:729,
                    top:10,
                    opacity:0
                    // display:'none'

                },function () {
                    $('.active').remove();
                    current=null;
                })
                sc+=10;
                $('.score>span').html(`${sc}`)
            }else{
                let t=setTimeout(function(){
                    $('.active').removeClass('active');
                    current=null;
                },400);
            }
        }
    });


    //点击下一张
    let index=1;
    $('.next').click(function(){
        $('.left').last().addClass('right').removeClass('left').css('z-index',++index).animate({
            left:440
        })
    });
    $('.pre').click(function(){
        $('.right').addClass('left').removeClass('right').css('z-index',++index).each(function(index){
                $(this).delay(index*50).animate({
                    left:170
                })
        })
    });

    $('.redo').click(function(){
        location.reload()
    })



});