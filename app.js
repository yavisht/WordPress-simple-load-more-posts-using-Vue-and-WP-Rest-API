Vue.component('posts', {
    template: `
    <ul>
        <slot></slot>
    </ul>
    `
});

Vue.component('post', {
    props: ['title', 'excerpt'],
    template: `
    <li>
        <p>{{title}}</p>
        <p v-html="excerpt"></p>
    </li>
    `
    
});

// var apiURL = 'http://playground.dev/wp-json/wp/v2/posts';

new Vue({
    el: '#app',
    data: {
        greeting: 'Load more Posts Vue + WP REST API',
        page : 0,
        posts: [],
        totalPages: '',
        apiURL : 'http://playground.dev/wp-json/wp/v2/posts?per_page=2&page=',
        show : true
    },
    methods: {
        getPosts: function(){
            
            var xhr = new XMLHttpRequest()
            var self = this
            
            self.page++
            
            xhr.open('GET', self.apiURL + self.page)
            
            xhr.onload = function () {
                
                self.totalPages = xhr.getResponseHeader('X-WP-TotalPages')
                
                if(self.page == self.totalPages){
                    self.show = false
                }

                var newPosts = JSON.parse(xhr.responseText)
                
                newPosts.forEach(function(element) {
                    self.posts.push(element)
                })
                
                //console.log(self.apiURL + self.page)
            
            }
            xhr.send()
        }
    }
})
