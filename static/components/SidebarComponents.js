Vue.component(
    'sidebar',{
        template: `
            <el-menu>
                <el-submenu index={{fesdata.fesnum}}, v-for="fesdata in fesdatas">
                    <template slot="title" index = "{{fesdata.fesnum}}">{{fesdata.prefecture}}</template>
                        <el-menu-item-group>{{fesdata.fes_name}}</el-menu-item>
                </el-submenu>
            </el-menu>
            `,
            data: function(){
              const data = [{
                  fesnum : 0,
                  prefecture: 'Kumamoto',
                  fes_name: 'Gassai'
                },
                {
                    fesnum : 1,
                    prefecture: 'Fukuoka',
                    fes_name: 'Fukukoi'
                  }
              ];
                return {
                  fesdatas: data,
                  activeName: 'first',
                  pref:'kumamoto'
                }
            },
            methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
    })
