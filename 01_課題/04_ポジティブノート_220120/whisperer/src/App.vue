<template>
  <div id="app">
    <Header />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap')

body
  margin 0
  font-size 14px
  font-family: 'Quicksand','YuGothic','Yu Gothic', serif
:link,
:visited
  text-decoration none
  color inherit
main
  margin 80px auto 0
  width 95%
  max-width 600px
.btns
  display flex
  flex-wrap nowrap
  justify-content center
button
  margin 0 0 0 5px
  width 40px
  height 40px
  border none
  border-radius 5px
  background #555
  background-size cover
  color white
  font-family: 'Quicksand','YuGothic','Yu Gothic', serif
  font-size 1.2rem
  transition .3s
  cursor pointer
  &:hover
    opacity .8
  &:focus
    outline none
.list
  box-shadow 0 0 6px rgba(0,0,0,.1)
  border-radius 3px
  background white
/* ここまで追加 */
</style>
</style>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
};
</script>
