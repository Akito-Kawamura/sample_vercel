Vue.component(
    'maintable',{
        template: `
        <el-table v-for="person in vtuber">
          <el-table-column prop="{{person.id}}" label="ID" width="140">
          </el-table-column>
          <el-table-column prop="{{person.name}}" label="Name" width="120">
          </el-table-column>
        </el-table>
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
