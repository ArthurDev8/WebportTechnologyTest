<template>
  <div class="usersTable">
    <table class="table">
      <thead class="head">
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Website</th>
        <th></th>
      </thead>
      <tbody class="body">
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.name }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.website }}</td>
          <td>
            <button id="show-modal" @click="activeModal(user)">info</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "UsersTable",
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
  methods:{
    activeModal(user){
      this.$emit('showActiveModal', user)
    }
  }
};
</script>
<style lang="scss">
.table {
  text-align: left;
  width: 100%;
  .head {
    th {
      padding: 10px;
      border-bottom: 1px solid gray;
      background-color: #ffffe8;
      color: gray;
    }
  }
  .body {
    tr {
      border-bottom: 1px solid gray;
      transition: 0.2s;
      &:hover {
        background-color: #edede6;
        cursor: pointer;
      }
      td {
        padding: 10px;
        border: 0 1px solid gray;
        button {
          padding: 10px 20px;
          cursor: pointer;
          border: none;
          border-radius: 5px;
          &:hover {
            background-color: #ffffe8;
            border: none;
          }
        }
      }
    }
  }
}
</style>