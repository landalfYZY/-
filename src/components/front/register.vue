<template>
    <div style="width:100%">
        <div style="margin:auto;max-width:600px;padding:15px;background:#fff;margin-top:20px">
            <div style="width:100%;text-align:center;font-size:16px;margin-top:20px;">用户注册</div>
            <Form  :label-width="80" style="margin-top:20px">
                <FormItem label="用户名">
                    <Input v-model="formData.username" placeholder="用户名" />
                </FormItem>
                <FormItem label="密码">
                    <Input v-model="formData.password" type="password" placeholder="密码" />
                </FormItem>
                <hr>
                <FormItem label="姓名" style="margin-top:20px">
                    <Input v-model="formData.name" placeholder="姓名" />
                </FormItem>
                <FormItem label="年龄">
                    <Input v-model="formData.age" placeholder="年龄" />
                </FormItem>
                <FormItem label="生日">
                    <Input v-model="formData.birthday" placeholder="生日" />
                </FormItem>
                <FormItem label="手机号">
                    <Input v-model="formData.phone" placeholder="手机号" />
                </FormItem>
                <FormItem label="邮箱">
                    <Input v-model="formData.email" placeholder="邮箱" />
                </FormItem>
                <FormItem label="毕业院校">
                    <Input v-model="formData.college" placeholder="毕业院校" />
                </FormItem>
                <FormItem label="现居住地址">
                    <Input v-model="formData.nowLive" placeholder="现居住地址" />
                </FormItem>
                
                <FormItem >
                    <Button type="primary" :loading="loading" @click="submitData()" style="width:90%">立即注册</Button>
                </FormItem>
            </Form>
        </div>
        
    </div>
</template>
<script>
var that;
export default {
  data() {
    return {
      loading:false,
      formData: {
        
        age: null,
        birthday: "",
        college: "",
        email: "",
        name: "",
        nowLive: "",
        password: "",
        phone: null,
        username: "",
      }
    };
  },
  mounted(){
      that = this;
  },
  methods:{
      submitData(){
          this.loading = true
          this.com.http('post','stUser',this.formData,function(res){
              that.loading = false
              console.log(res)
          })
      }
  }
};
</script>
