Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    pathname: {
      type: String,
      value: '',
    }
  },
  data: {
    // 这里是一些组件内部数据
    bottom_menu:[
      {id:1,name:'首页',src:'/static/tabbar/homepage.png',path_name:'index',path:'/pages/index/index'},
      {id:2,name:'文章',src:'/static/tabbar/document.png',path_name:'article',path:'/pages/articles/article'},
      {id:3,name:'地图',src:'/static/tabbar/map.png',path_name:'map',path:'/pages/articles/article'},
      {id:4,name:'我的',src:'/static/tabbar/addpeople.png',path_name:'mine',path:'/pages/articles/article'}
    ]
  },
  methods: {
    // 这里是一个自定义方法
    clickMenu:function(e)
    {
      console.log(e);
      let id = e.currentTarget.id;
      let menu = this.data.bottom_menu;
      let path = '';
      for(let i =0;i<menu.length;i++){
          if(menu[i].id == id){
            path =  menu[i].path;
            break;
          }
      }
      console.log(path);
      wx.navigateTo({
        url: path
      })
    }
  }
})