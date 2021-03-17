<template>
  <div class="post">
    <div class="title">{{ post.title }}</div>
    <div class="description">{{ post.body }}</div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="scss" scoped>
.post {
  display: flex;
  flex-direction: column;
  width: 45%;
  padding: 1rem;
  margin: 1%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 7px;
  background: rgb(219, 225, 232);
  background: linear-gradient(
    90deg,
    rgba(219, 225, 232, 1) 100%,
    rgba(17, 66, 43, 0.8575805322128851) 100%
  );
  .title {
    font-size: 18px;
    color: #756a6a;
    margin-bottom: 10px;
    font-weight: bold;
  }
  .description {
    color: #2b2020;
  }
}
@media screen and (max-width: 900px) {
 .post {
    width: 80%;
    margin: 3% 1%;
  }

}
</style>