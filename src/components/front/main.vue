<template>
    <transition name="fade-in">
        <div>
            <header class="header">
                <div class=" panel-between item-center max-width" style="height:100px;">
                    <div class="panel-start item-center">
                        <div class="logo" >
                            <img src="../../assets/img/logo.png" width="50px" alt="">
                        </div>
                        <div class="logo-text">兼职</div>
                        <Button type="text">杭州 <Icon type="chevron-down" size="10"></Icon></Button>
                        <div class="panel-start item-center">
                            <a href="#" class="hrf" @click="navTo('/home')">首页</a>
                            <a href="#" class="hrf" @click="navTo('/pengyouquan')">朋友圈</a>
                        </div>
                    </div>
                    <div>
                        <Button type="text">登录/注册</Button>
                    </div>
                </div>
            </header>
            <header class="header2">
                <div class="panel-between item-center">
                    <div class="panel-start item-center">
                        <Button type="ghost" icon="navicon" size="small"></Button>
                        <img src="../../assets/img/logo.png" width="20px" style="margin-left:15px" alt="">
                    </div>
                    
                    <div>登录/注册</div>
                </div>
            </header>
            <div class="main" style="width:100%">
                <div class="max-width">
                    <router-view/>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    watch:{
        $route(){
            if(this.$route.fullPath == '/'){
                this.$router.push('/home')   
            }
        }
    },
    mounted(){
        if(this.$route.fullPath == '/'){
            this.$router.push('/home')   
        }
    },
    methods:{
        navTo(path){
            this.$router.push(path)
        }
    }
}
</script>
