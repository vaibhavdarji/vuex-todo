<template>
  <el-form :model="todoForm" :rules="rules" ref="todoForm" class="todo-form" @submit.native.prevent>
    <el-form-item prop="todoItem">
      <el-col :span="20">
        <el-input
          v-model="todoForm.todoItem"
          placeholder="Add Todo"
          class="todo-input"
          @keyup.enter.native="submitForm('todoForm')">
        </el-input>
      </el-col>
      <el-col :span="2" :push="3">
        <el-button type="primary" @click="submitForm('todoForm')">Add</el-button>
      </el-col>
    </el-form-item>
  </el-form>
</template>


<script>
import { mapActions } from 'vuex';
export default {
  name: 'Home',
  data() {
    return {
      todoForm: {
        todoItem: ''
      },
      rules: {
        todoItem: [
          {
            required: true,
            message: 'Please type your todo',
            trigger: 'submit'
          },
          { min: 3, message: 'Length at least 3 characters', trigger: 'blur' }
        ]
      }
    };
  },

  methods: {
    ...mapActions({
      addTodo: 'ADD_TODO'
    }),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) {
          return false;
        } else {
          this.addTodo(this.todoForm.todoItem);
          this.todoForm.todoItem = '';
        }
      });
    }
  }
};
</script>

