<template>
    <transition name="el-fade-in-linear">
        <div>
            <div class="panel-between">
                <div class="panel-start item-center">
                    <ButtonGroup>
                        <Button type="ghost" @click="navTo('/roleInsert')"><Icon type="android-add"></Icon> 新增角色</Button>
                    </ButtonGroup>
                    <span class="font-grey" style="margin-left:10px">可以按回车进行筛选</span>
                </div>
                
            </div>
          
            <Table ref="selection" border :columns="columns" :data="data" style="margin-top:15px" ></Table>
          
        </div>
    </transition>
</template>

<script>
var that;
export default {
  data() {
    return {
      columns: [
        { type: "selection", width: 60, align: "center" },
        { title: "用户名", key: "username" },
        { title: "描述", key: "description" },
        { title: "地址", key: "address" },
        { title: "创建时间", key: "createTime" },
      ],
      data: [],
      
    };
  },
  mounted() {
    that = this;
    that.getList();
  },
  methods: {
    getList() {
      this.com.http('get','stCompany/all',{},function(res){
         if(res){
             that.data = res
         }
      },'tableLoading')
      
    },
    navTo(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>
