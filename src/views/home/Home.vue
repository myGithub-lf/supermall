<template>
   <div id="home">
      <nav-bar class="home-nav">
         <div slot="center">购物街</div>
      </nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <feature-view></feature-view>
   </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import FeatureView from './childComps/FeatureView'

import {getHomeMultiData} from 'network/home'

export default {
   name: "Home",
   components: {
     NavBar,
     HomeSwiper,
     HomeRecommendView,
     FeatureView
   },
   data() {
      return {
         banners: [],
         recommends: []
      }
   },
   created() {
      // 1. 请求多个数据
      getHomeMultiData().then(res => {
         console.log(res);
         this.banners = res.data.banner.list;
         this.recommends = res.data.recommend.list;
      })
   }
}
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>