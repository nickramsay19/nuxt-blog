import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      posts: [
        {
          title: 'My trip to the dog park',
          date: '30/11/18',
          content: 'Proin blandit, dui hendrerit dignissim congue, sapien nisi lobortis mauris, commodo facilisis dui odio sit amet lorem. Vivamus vitae porttitor quam, vitae faucibus purus.'
        },
        {
          title: 'Coffee by the bay',
          date: '24/11/18',
          content: 'Curabitur semper orci at faucibus pretium. Proin blandit, dui hendrerit dignissim congue, sapien nisi lobortis mauris, commodo facilisis dui odio sit amet lorem. Vivamus vitae porttitor quam, vitae faucibus purus. Suspendisse lobortis dui neque, eu ultrices justo consequat at. Sed et nunc dui. Mauris imperdiet diam eu felis dignissim porttitor. Maecenas finibus elementum sem, vel placerat erat. Integer tempor diam a nisi viverra, quis efficitur ipsum vehicula. Morbi eu luctus orci, quis commodo ante. Pellentesque ut ipsum commodo, vehicula turpis in, dictum mi. Cras pharetra purus eget nisi suscipit rhoncus.'
        },
        {
          title: 'My DIY magazine rack project',
          date: '20/11/18',
          content: 'Pellentesque facilisis eu tellus sit amet feugiat. Nam id nisl erat. Duis sed diam neque. Maecenas commodo mauris ac turpis dignissim, vitae commodo lectus faucibus. Quisque porta sem ipsum, ut efficitur ex pretium at. In dapibus erat eu leo accumsan, vel feugiat mi condimentum. Duis aliquam est consectetur, porta sapien sit amet, posuere dui. Etiam ut sodales nisl. Fusce metus elit, tincidunt vulputate neque ut, viverra sollicitudin nulla. Aenean venenatis leo vestibulum erat venenatis laoreet. Pellentesque laoreet leo a arcu ultrices, at pulvinar ante scelerisque.'
        },
        {
          title: 'My trip to the circus',
          date: '19/11/18',
          content: 'Proin blandit, dui hendrerit dignissim congue, sapien nisi lobortis mauris, commodo facilisis dui odio sit amet lorem. Vivamus vitae porttitor quam, vitae faucibus purus.'
        },
        {
          title: 'Holiday in Japan',
          date: '15/11/18',
          content: 'Proin blandit, dui hendrerit dignissim congue, sapien nisi lobortis mauris, commodo facilisis dui odio sit amet lorem. Vivamus vitae porttitor quam, vitae faucibus purus.'
        },
        {
          title: 'My daily routine in review',
          date: '11/11/18',
          content: 'Proin blandit, dui hendrerit dignissim congue, sapien nisi lobortis mauris, commodo facilisis dui odio sit amet lorem. Vivamus vitae porttitor quam, vitae faucibus purus.'
        },
      ]
    }),

    mutations: {

    }
  })
}

export default createStore
