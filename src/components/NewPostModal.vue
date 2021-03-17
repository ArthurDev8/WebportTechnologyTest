<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"> default header </slot>
          </div>

          <div class="modal-body">
            <form @submit.prevent="createPost">
              <div><input v-model="form.title" placeholder="title" /></div>
              <div><input v-model="form.body" placeholder="body" /></div>
              <div>
                <button :disabled="disabled" type="submit">Create Post</button>
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <button class="modal-default-button" @click="$emit('close')">
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    disabled: false,
    form: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
  }),
  methods: {
    ...mapActions({
      addPost: "posts/createPost",
    }),
    async createPost() {
      this.disabled = true;
      await this.addPost(this.form);
      this.$emit("close");
      this.disabled = false;
    },
  },
};
</script>
<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  .modal-footer {
    margin-bottom: 12%;
  }
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
  input {
    padding: 5px;
    margin: 5px 0;
    font-size: 15px;
  }
  button {
    margin: 5px 0;
    padding: 10px;
    cursor: pointer;
    border: none;
    transition: 0.3s;
    border-radius: 3px;
    &:hover {
      background-color: gray;
      color: white;
    }
  }
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
  