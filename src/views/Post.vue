<template>
  <div class="post">
    <Loader v-if="loading" class="loader"/>
    <template v-else>
      <div class="post">
        <PostItem :post="post" class="post-item" />
      </div>

      <div class="comment" v-for="{ name, body } in comment" :key="name">
        <div>
          <div class="name">{{ name }}</div>
          <div class="body">{{ body }}</div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Post",
  data: () => ({
    loading: false,
  }),
  components: {
    PostItem: () => import("@/components/PostItem"),
    Loader: () => import("@/components/Loader"),
  },
  methods: {
    ...mapActions({
      getPost: "posts/fetchPost",
      getComment: "posts/fetchComment",
    }),
  },
  computed: {
    ...mapGetters({
      post: "posts/post",
      comment: "posts/comment",
    }),
  },
  async mounted() {
    this.loading = true;
    await this.getPost(this.$route.params);
    await this.getComment(this.$route.params);
    this.loading = false;
  },
};
</script>
<style lang="scss">
.post {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .comment {
    width: 45%;
    padding: 1rem;
    margin: 1%;
    border-radius: 100px 10px /150px;
    background: rgb(156, 176, 198);
    background: linear-gradient(
      90deg,
      rgba(156, 176, 198, 1) 100%,
      rgba(17, 66, 43, 0.8575805322128851) 100%
    );

    .name {
      font-size: 18px;
      color: white;
      margin-bottom: 10px;
      font-weight: bold;
    }
    .body {
      color: white;
    }
  }
}
@media screen and (max-width: 900px) {
 .comment {
    border-radius: 10px !important;
    width: 80% !important;
  }

}
</style>