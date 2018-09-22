<template>
  <div id="app">
    <el-container>
      <navbar></navbar>
      <el-main class="main-container">
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>
