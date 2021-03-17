<template>
  <div class="users">
    <Loader v-if="loading" />
    <div v-else>
      <h2 class="title">Users table</h2>
      <div class="usersTable">
        <UsersTable :users="users" @showActiveModal="showModalActive" />
      </div>
      <ModalShowInfoUser
        v-if="showModal"
        @close="showModal = false"
        :user="user"
      >
        <h3 slot="header">User company info:</h3>
      </ModalShowInfoUser>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Users",
  computed: {
    ...mapGetters({ users: "users/users" }),
  },
  data: () => ({
    loading: false,
    showModal: false,
    user: {},
  }),
  methods: {
    ...mapActions({
      fetchUsers: "users/fetchAllUsers",
    }),
    showModalActive(data) {
      this.showModal = true;
      this.user = data;
    },
  },
  async mounted() {
    this.loading = true;
    await this.fetchUsers();
    this.loading = false;
  },
  components: {
    UsersTable: () => import("@/components/UsersTable"),
    Loader: () => import("@/components/Loader"),
    ModalShowInfoUser: () => import("@/components/ModalShowInfoUser"),
  },
};
</script>
<style lang="scss">
.title {
  text-align: center;
  margin-bottom: 20px;
}
</style>