[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Load more posts using Vue.js and WP Rest API

## Whats New?
- Now uses Vue 3@latest (CDN)
- No server or build step needed, simply run index.html in your browser!

We will go through a minimalist Vue component based example that will fetch posts using WordPress Rest API.

![demo](https://github.com/yavisht/WordPress-simple-load-more-posts-using-Vue-and-WP-Rest-API/assets/6112201/bc262c1b-53fd-4939-a318-54cfd40f01b1)

Wouldn't it be cool to use something like this in your markup?

      <posts>
        <post
          class="post"
          :id="post.id"
          :title="post.title.rendered"
          :permalink="post.link">
        </post>
      </posts>

      <button @click="getPosts(page)">Load Posts</button>

With an ability to output any markup you desire in html on compile for your styling needs. So the next time you need to make load more for your websites, your HTML markup remains the same.

Or perhaps try something like the code below for another post type.

      <movies>
        <movie
          class="movie"
          :id="movie.id"
          :title="movie.title.rendered"
          :permalink="movie.link"
          :genre="movie.genre"
          :duration="movie.duration
          :rating="movie.rating">
        </movie>
      </movies>
