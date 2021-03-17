<template>
  <div class="pagination">
    <button @click="prevPage()" :disabled="this.page == 1">prev</button>
    <div class="pages">
      <div
        class="page"
        v-for="p in setPages"
        :key="p"
        :class="{ active: p === page }"
        @click="changePage(p)"
      >
        {{ p }}
      </div>
    </div>
    <button @click="nextPage()" :disabled="this.page == perPage">next</button>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  data: () => ({
    page: 1,
  }),
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    perPage: {
      type: Number,
      default: 10,
    },
  },
  methods: {
    nextPage() {
      this.page += 1;
    },
    prevPage() {
      this.page -= 1;
    },
    changePage(p) {
      this.page = p;
    },
  },
  computed: {
    paginated() {
      let from = this.page * this.perPage - this.perPage;
      let to = this.page * this.perPage;
      return this.data.slice(from, to);
    },
    setPages() {
      return Math.ceil(this.data.length / this.perPage);
    },
  },
  watch: {
    paginated() {
      this.$emit("processData", this.paginated);
    },
  },
  mounted() {
    this.$emit("processData", this.paginated);
  },
};
</script>
<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  flex-direction: row;
  .pages {
    display: flex;
    .page {
      padding: 5px 10px;
      margin: 0 5px;
      font-size: 18px;
      border: 1px solid gray;
      color: gray;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.2s;
      &:hover {
        cursor: pointer;
        background-color: #e8e9ea;
      }
      &.active {
        color: #1162dc;
        border: 2px solid #1162dc;
        background-color: #e8e9ea;
      }
    }
  }
  button {
    cursor: pointer;
  }
}
@media screen and (max-width: 900px) {
  .pagination .pages {
    display: none;
  }
}
</style>