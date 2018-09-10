/*
* @Author: 我的文档
* @Date:   2018-09-09 11:27:27
* @Last Modified by:   我的文档
* @Last Modified time: 2018-09-09 11:35:50
*/
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay:true,
    autoplay: {
        delay: 2000,//2秒切换一次
    },
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    

  
  })        
