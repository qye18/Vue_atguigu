<<template>
  <div>
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>
<script>
//引入一个混合
import {mixin} from '../mixin'
export default {
  name:'School',
  data(){
    return {
      name:'张三',
      sex:'male'
    }
  },
  mixins:[mixin]
}
</script>