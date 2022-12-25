<template>
  <div>
    About组件的内容
  </div>
</template>

<script>
export default {
  name:'About',
  // before entering this component
  beforeRouteEnter(to,from,next) {
    if (to.meta.isAuth) {
      if (localStorage.getItem('student') === 'zhangsan') {
        next();
      } else {
        alert('you do not have permission to visit')
      }
    } else {
      next();
    }
  },
  // called before leaving this component
  beforeRouteLeave(to, from, next) {
    console.log(to,from,next);
  }
}
</script>

<style>

</style>