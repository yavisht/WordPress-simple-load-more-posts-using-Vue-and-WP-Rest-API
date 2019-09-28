Vue.component("posts", {
  template: `
    <ul>
        <slot></slot>
    </ul>
    `,
});

Vue.component("post", {
  props: ["title", "permalink"],
  template: `
    <li>
        <h3 v-html="title"></h3>
        <a :href="permalink">Read More</a>
        <hr />
    </li>
    `,
});

var App = new Vue({
  el: "#app",
  data: {
    greeting: "Load more Posts Vue + WP REST API",
    page: 0,
    posts: [],
    totalPages: "",
    apiURL: "https://wordpress.org/news/wp-json/wp/v2/posts?per_page=2&page=",
    isLoading: "",
    show: true,
  },
  methods: {
    getPosts: function() {
      var xhr = new XMLHttpRequest();
      var self = this;

      self.page++;
      self.isLoading = "is-loading";

      xhr.open("GET", self.apiURL + self.page);

      xhr.onload = function() {
        self.totalPages = xhr.getResponseHeader("X-WP-TotalPages");
        if (self.page == self.totalPages) {
          self.show = false;
        }
        var newPosts = JSON.parse(xhr.responseText);
        newPosts.forEach(function(element) {
          self.posts.push(element);
        });
        self.isLoading = null;
      };

      xhr.send();
    },
  },
});
