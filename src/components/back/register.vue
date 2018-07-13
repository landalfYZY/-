<template>
    <div style="width:100%">
        <div style="margin:auto;width:500px;background:#fff;padding:20px;margin-top:50px">
            <div style="font-size:18px;margin-bottom:20px">公司注册</div>
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <FormItem label="用户名" prop="username" >
                    <Input v-model="formValidate.username" placeholder="用户名"></Input>
                </FormItem>
                <FormItem label="密码" prop="password">
                    <Input type="password" v-model="formValidate.password" placeholder="密码"></Input>
                </FormItem>
                <FormItem label="确认密码" prop="rpassword">
                    <Input type="password" v-model="formValidate.rpassword" placeholder="确认密码"></Input>
                </FormItem>
                <FormItem label="地址" prop="address" >
                    <Input v-model="formValidate.address" placeholder="地址"></Input>
                </FormItem>
                <FormItem label="描述"  >
                    <Input v-model="formValidate.description" placeholder="描述"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" :loading="loading" @click="handleSubmit('formValidate')">保存提交</Button>
                    <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
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
      loading: false,
      formValidate: {
        username: "",
        password: "",
        rpassword: "",
        description: "",
        address: ""
      },
      ruleValidate: {
        username: [{ required: true, message: "必填", trigger: "blur" }],
        password: [{ required: true, message: "必填", trigger: "blur" }],
        rpassword: [{ required: true, message: "必填", trigger: "blur" }],
        address: [{ required: true, message: "必填", trigger: "blur" }]
      }
    };
  },
  mounted() {
    that = this;
  },
  methods: {
    handleSubmit(name) {
      this.loading = true;
      this.$refs[name].validate(valid => {
        if (valid) {
          delete that.formValidate.rpassword
          that.com.http("POST", "stCompany", JSON.stringify(that.formValidate), function(res) {
            that.loading = false
          });
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
