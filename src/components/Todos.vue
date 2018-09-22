<template>
  <el-table
    empty-text="No Items"
    v-loading="loading"
    :show-header="false"
    :data="todos"
    style="width: 100%"
    class-name="todo-table"
    size="small">
    <el-table-column width="55">
      <template slot-scope='scope'>
        <el-checkbox v-model="scope.row.completed" size="small" :border="true" @change="onChangeTodoStatus(scope.row)"></el-checkbox>
      </template>
    </el-table-column>
    <el-table-column>
      <template slot-scope='scope'>
        <span
          v-show="scope.row.editable == false" 
          @click="handleClick(scope.row)"
          :class="[{'completed': scope.row.completed}]"
          >{{scope.row.value}}</span>
        <el-form v-show="scope.row.editable"
          :model="scope.row"
          :rules="rules"
          ref="todo"
          class="todo-item"
          @submit.native.prevent >
          <el-form-item prop="value">
            <el-input
              v-show="scope.row.editable"
              :autofocus="scope.row.editable" style="width: 80%; "
              :ref="scope.row.id.toString()"
              v-model="scope.row.value"
              @blur.prevent="hideForm('todo', scope.row)"
              @keyup.enter.native.prevent="submitForm('todo', scope.row)"
            >
            </el-input>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column width="55">
      <template slot-scope="scope">
        <i class="el-icon-close" @click="deleteTodo(scope.row)"></i>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
export default {
  name: 'Todos',
  data() {
    return {
      rules: {
        value: [
          { required: true, message: 'Please type your todo', trigger: 'blur' },
          { min: 3, message: 'Length at least 3 characters', trigger: 'blur' }
        ]
      }
    };
  },
  /*components: {
    TodoItem
  },*/

  computed: {
    ...mapGetters(['todos', 'loading'])
  },
  mounted() {
    this.getTodo();
  },
  methods: {
    ...mapActions({
      getTodo: 'GET_TODO',
      removeTodo: 'REMOVE_TODO',
      updateTodo: 'UPDATE_TODO'
    }),

    onChangeTodoStatus(todo) {
      this.updateTodo(todo);
    },

    handleClick(todo) {
      todo.editable = !todo.editable;
      this.$nextTick(() => {
        this.$refs[todo.id.toString()].$el.querySelector('input').focus();
      });
    },

    submitForm(formName, todo) {
      this.$refs[formName].validate(valid => {
        if (!valid) {
          return false;
        }
        todo.editable = false;
        this.updateTodo(todo);
      });
    },

    hideForm(formName, todo) {
      this.$refs[formName].validate(valid => {
        if (!valid) {
          return false;
        }
        todo.editable = false;
      });
    },

    deleteTodo(todo) {
      this.$confirm(
        'This will permanently delete the file. Continue?',
        'Warning',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }
      )
        .then(() => {
          this.removeTodo(todo);
        })
        .catch(() => console.log('canceled'));
    }
  }
};
</script>


