import ElMenuItem from './el-menu-item.vue';
import ElSubmenu from './el-submenu.vue';
import ElMenu from './el-menu.vue';
import resub from './resub.vue';

export default {
  props: {
    data: {}
  },
  components: {
    ElMenuItem,
    ElSubmenu,
    ElMenu,
    resub
  },
  render() {
    let renderChildren = (data) => {
      return data.map(child => (
        child.children ?
          <el-submenu>
            <div slot="title">{child.title}</div>
            {renderChildren(child.children)}
          </el-submenu> :
          <el-menu-item>{child.title}</el-menu-item>
      ))
    }
    return (<el-menu>
      {renderChildren(this.data)}
    </el-menu>)
  }
}