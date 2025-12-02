const CUSTOMER_SITES = {
   dyttzy: {
      api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
      name: '电影天堂资源',
      'detail': 'http://caiji.dyttzyapi.com',
      'is_adult': false
    },
    heimuer: {
      api: 'https://json.heimuer.xyz/api.php/provide/vod',
      name: '黑木耳',
      'detail': 'https://heimuer.tv',
      'is_adult': false
    },
    ruyi: {
      api: 'https://cj.rycjapi.com/api.php/provide/vod',
      name: '如意资源',
      'is_adult': false
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
