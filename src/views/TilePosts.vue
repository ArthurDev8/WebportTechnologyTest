<template>
  <div class="tilePosts">
    <Loader v-if="loading" />
    <div v-else>
      <h2 class="title">Posts</h2>
      <button id="show-modal" class="modalButton" @click="showModal = true">
        Add Post
      </button>
      <ModalAddPost v-if="showModal" @close="showModal = false">
        <h3 slot="header">Add new post</h3>
      </ModalAddPost>
      <div class="posts"> 
        <PostItem
          class="post"
          v-for="(post, key) in paginationData"
          :key="key"
          :post="post"
          @click.native="changePost(post)"
        />
      </div>
      <Pagination :perPage="10" :data="posts" @processData="processData" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TilePosts",
  computed: {
    ...mapGetters({ posts: "posts/posts" }),
  },
  data: () => ({
    paginationData: [],
    loading: false,
    showModal: false,
  }),
  methods: {
    ...mapActions({
      fetchPosts: "posts/fetchAllPosts",
    }),
    changePost(post) {
      this.$router.push(`/posts/${post.id}`);
    },
    processData(data) {
      this.paginationData = data;
    },
  },
  async mounted() {
    this.loading = true;
    await this.fetchPosts();
    this.loading = false;
    
  },
  components: {
    PostItem: () => import("@/components/PostItem"),
    Pagination: () => import("@/components/Pagination"),
    Loader: () => import("@/components/Loader"),
    ModalAddPost: () => import("@/components/NewPostModal"),
  },
};
</script>
<style lang="scss" scoped>
.tilePosts {
  text-align: center;
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
  }
  .modalButton {
    padding: 10px 30px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    transition: 0.3s;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      background: #b4e1e8;
    }
  }
  .posts {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .post {
      transition: 0.3s;
      &:hover {
        cursor: pointer;
        background-color: #e8eaef;
      }
    }
  }
}
</style>