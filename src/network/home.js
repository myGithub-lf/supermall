import {request} from 'network/request'

export function getHomeMultiData(){
   return request({
      // url: '/test/getBanners'
      url: '/home/multidata'
   })
}

export function getGoodsData(type, page) {
   return request({
     url:'/test/getGoods',
     params:{
       type,
       page
     }
   });
 }