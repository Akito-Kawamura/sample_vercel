Vue.component(
    'maintable',{
        template: `
        <ol>
      <li v-for="person in vtuber">{{ person.name }}</li>
        </ol>
            `,
            data: {
                vtuber: []
            },
            // json読み込み
            mounted: function() {
              var self = this;
              axios
              .get('./datas/tabledata.json')
            .then(function(response) {
                self.vtuber = response.data.vtuber;
            })
            .catch(function(error) {
                console.log('取得に失敗しました。', error);
            })
    }
    })
