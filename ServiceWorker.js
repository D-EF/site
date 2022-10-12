var version ="DEF's_Green_static_doc",
  cacheNames = [version];

this.onmessage=function(msg){

}
this.oninstall=function(e){
    console.log(e);
    e.waitUntil(
        caches.open(version).then(function(cache){
            console.log(version+" install");  
            return cache.addAll([
                ".",
                "./favicon.ico",
                "./index.html",
                "./css/import/DEF_UI_Lib/img/iconSprites.svg",
                "./css/import/DEF_UI_Lib/img/logo.svg",
                "./css/import/DEF_UI_Lib/img/logoicon.svg",
                "./css/import/DEF_UI_Lib/img/SpritesMap.svg",
                "./css/import/DEF_UI_Lib/fonts/Ubuntu Mono derivative Powerline.ttf",
                "./css/import/DEF_UI_Lib/fonts/Ubuntu Mono derivative Powerline Bold.ttf",
                "./css/import/DEF_UI_Lib/fonts/Ubuntu Mono derivative Powerline Bold Italic.ttf",
                "./css/import/DEF_UI_Lib/fonts/Ubuntu Mono derivative Powerline Italic.ttf",
                "./css/import/DEF_UI_Lib/fonts/DejaVuSansMono-1.ttf",
                "./css/import/DEF_UI_Lib/css/basics.css",
                "./css/import/DEF_UI_Lib/css/index.css",
            ]);
        }).then(function(){
            self.skipWaiting();
        })
    )
}
this.activate=function(e){
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all[keys.map(key => {
        if (!cacheNames.includes(key)) {
          console.log(key);
          return caches.delete(key); // 删除不在白名单中的 Cache Stroage
        }
      })]
    })
  );
}

this.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(res => {
            return res ||
            fetch(event.request)
            .then(responese => {
                // 全局缓存
                // const responeseClone = responese.clone();
                // caches.open(version).then(cache => {
                //   cache.put(event.request, responeseClone);
                // })
              return responese;
            })
            .catch(err => {
              console.log(err);
              return res;
            });
      })
    )
  });