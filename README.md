[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Load more posts using Vue.js and WP Rest API

We will go through a minimalist Vue component based example that will fetch posts using WordPress Rest API.

![enter image description here](https://drive.google.com/uc?id=1DvoN6jqz0pU7MmJuULe9UXnb1ivdWKCa)

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
