<template>
  <el-header height="20">
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <a href="/about">About</a>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>


<script>
export default {
  name: 'Navbar',
  data() {
    return {
      todoForm: {
        todo: ''
      }
    };
  }
};
</script>

