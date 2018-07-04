<template>
    <div>
        <div class="tgl">
            <div class="panel-between item-center">
                <div>
                    <a href="#" class="title">{{title}}</a>
                    <div class="panel-start" style="margin-top:15px">
                        <div style="width:200px">
                            <div class="font-16"><span class="grey">工作时间：</span>{{time}}</div>
                            <div class="font-16"><span class="grey">工作地点：</span>{{address}}</div>
                        </div>
                        <div style="width:200px;margin-left:30px">
                            <div class="font-16"><span class="grey">兼职类型：</span>{{type}}</div>
                            <div class="font-16"><span class="grey">招聘人数：</span>{{num}}</div>
                        </div>
                    </div>
                </div>
                <div class="panel-end item-center">
                    <div class="panel-start item-center">
                        <span class="pri">300</span>
                        <span class="grey" style="margin-left:10px">{{unit}}</span>
                        <span class="grey" style="margin-left:30px ">{{pay}}</span>
                    </div>
                    <Button type="error" size="large" style="margin-left:30px;border-radius:0;width:120px">报名参加</Button>
                </div>
                
            </div>
        </div>

        <div class="tgl2">
            <div class="panel-between">
                <div  style="font-size:14px">{{title}}</div>
                <span class="grey" style="margin-left:5px ">{{pay}}</span>
            </div>
            
            <div class="panel-between">
                <div class="panel-start" style="margin-top:15px">
                        <div style="width:80px">
                            <div style="font-size:12px">{{time}}</div>
                            <div style="font-size:12px">{{address}}</div>
                        </div>
                        <div style="width:80px;margin-left:10px">
                            <div style="font-size:12px">{{type}}</div>
                            <div style="font-size:12px">{{num}}</div>
                        </div>
                    </div>
                <div class="panel-end item-center">
                    <div class="panel-start item-center">
                        <span class="pri">300</span>
                        <span class="grey" style="margin-left:5px">{{unit}}</span>
                        
                    </div>
                    <Button type="error"  style="margin-left:5px;border-radius:0;width:80px">报名参加</Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['title','time','type','address','num','price','pay','unit']
}
</script>
