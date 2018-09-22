<template>
  <el-container>
    <el-row type="flex" justify="space-around" class="todo-details">
      <el-col :span="20">
        <el-card class="box-card" body-style="padding: 0px">
          <div slot="header" class="clearfix">
            <todo-form></todo-form>
          </div>
          <todos></todos>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
</template>


<script>
import TodoForm from '@/components/TodoForm';
import Todos from '@/components/Todos';
export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    TodoForm,
    Todos
  }
};
</script>

<style>
</style>

