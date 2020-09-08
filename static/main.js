var App = new Vue({
  el: '#app',
  template: `
  <div>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
          <el-menu-item-group>
            <template slot="title">Group 1</template>
            <el-menu-item index="1-1">Option 1</el-menu-item>
            <el-menu-item index="1-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="1-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">Option4</template>
            <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>Navigator Two</template>
          <el-menu-item-group>
            <template slot="title">Group 1</template>
            <el-menu-item index="2-1">Option 1</el-menu-item>
            <el-menu-item index="2-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="2-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">Option 4</template>
            <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>Navigator Three</template>
          <el-menu-item-group>
            <template slot="title">Group 1</template>
            <el-menu-item index="3-1">Option 1</el-menu-item>
            <el-menu-item index="3-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="3-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">Option 4</template>
            <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-col :span="1">
      <h1>Name</h1>
      </el-col>
      <el-col :span="23">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </el-col>
    </el-header>

        <el-main>
        <el-row :gutter="20">
        <el-col :span="12">
          <el-tabs type="card" @tab-click="handleClick">
              <el-tab-pane label="Message">
              <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>Recent Message</span>
                    <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
                  </div>
                  <div v-for="o in 4" :key="o" class="text item">
                    {{'List item ' + o }}
                  </div>
              </el-tab-pane>
              <el-tab-pane label="Files">
                  <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <span>Recent Message</span>
                        <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
                      </div>
                      <div v-for="o in 4" :key="o" class="text item">
                        {{'List item ' + o }}
                      </div>
              </el-tab-pane>
            </el-tabs>
          </el-col>
          <el-col :span="12">
            <el-table :data="tableData">
              <el-table-column prop="date" label="Date" width="140">
              </el-table-column>
              <el-table-column prop="name" label="Name" width="120">
              </el-table-column>
              <el-table-column prop="address" label="Address">
              </el-table-column>
            </el-table>
            </el-col>
        </el-main>
      </el-container>
    </el-container>
  </div>

  <style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
  `,

  data: function(){
    const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item),
        activeName: 'first'
      }
  },

  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
})
