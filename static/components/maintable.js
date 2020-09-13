Vue.component(
    'maintable',{
        template: `
        <li v-for="res in results">
    ID={{ res.id }}<br>
    name={{ res.name }}<br>
    check={{ res.check }}
    </li>
            `,
            data: {
               results:[]
             },
             mounted() {
               axios.get("./datas/tabledata.json")
               .then(response => {
                 this.results = response.data
                 console.log(response.data)
               })
             },

             computed: {
               processedPosts() {
                 let posts = this.results;
               }
             }
    })
