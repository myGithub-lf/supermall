<template>
  <div>
     <swiper>
        <swiper-item v-for="item in banners" :key="item.image">
           <a :href="item.link">
              <img :src="item.image" alt="" />
           </a>
        </swiper-item>
     </swiper>
   </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swipper'
export default {
   name: "HomeSwipper",
   props: {
      banners: {
         type: Array,
         default() {
            return []
         }
      }
   },
   components: {
     Swiper,
     SwiperItem
   },
   data() {
      return {

      }
   }
}
</script>

<style>

</style>