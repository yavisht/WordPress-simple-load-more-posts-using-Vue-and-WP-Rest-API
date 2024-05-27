const { createApp, ref, onMounted } = Vue;

const Posts = {
  template: `
        <ul>
            <slot></slot>
        </ul>
      `,
};

const Post = {
  props: ["title", "permalink"],
  template: `
        <li>
            <h3 v-html="title"></h3>
            <a :href="permalink">Read More</a>
            <hr />
        </li>
      `,
};

const App = {
  components: { Posts, Post },
  setup() {
    const greeting = ref("Load more Posts Vue + WP REST API");
    const page = ref(0);
    const posts = ref([]);
    const totalPages = ref("");
    const perPage = ref(4);
    const apiURL = `https://wordpress.org/news/wp-json/wp/v2/posts?per_page=${perPage.value}&page=`;
    const isLoading = ref("");
    const show = ref(true);

    const getPosts = () => {
      const xhr = new XMLHttpRequest();

      page.value++;
      isLoading.value = "is-loading";

      xhr.open("GET", apiURL + page.value);

      xhr.onload = () => {
        totalPages.value = xhr.getResponseHeader("X-WP-TotalPages");
        if (page.value == totalPages.value) {
          show.value = false;
        }
        const newPosts = JSON.parse(xhr.responseText);
        newPosts.forEach((element) => {
          posts.value.push(element);
        });
        isLoading.value = null;
      };

      xhr.send();
    };

    onMounted(() => {
      getPosts();
    });

    return {
      greeting,
      page,
      posts,
      totalPages,
      apiURL,
      isLoading,
      show,
      getPosts,
    };
  },
};

createApp(App).component("Posts", Posts).component("Post", Post).mount("#app");
