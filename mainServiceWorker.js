/*
 * @Author: DestinyV
 * @Date: 2021-05-10 15:34:49
 * @Last Modified by: DestinyV
 * @Last Modified time: 2021-05-10 18:08:00
 */

/**
 * @description Service Worker
 */

const CACHE_NAME = `cache_version_${new Date().getFullYear()}_${new Date().getMonth() + 1}_${new Date().getDate()}}`;
const CACHE_LIST = [
  "/js/",
  "/img/",
  "/style/",
  "/js/chunk-vendors.js",
  "/js/app.js",
  "/js/devEntry.js",
  "/editor/",
  "/dashboard/",
  "/publish/",
  "/sockjs-node/"
];

/* 监听安装事件，install 事件一般是被用来设置你的浏览器的离线缓存逻辑 */
self.addEventListener("install", function (event) {
  console.log("install-------------->", event);
  /* 通过这个方法可以防止缓存未完成，就关闭serviceWorker */
  event.waitUntil(
    /* 创建一个名叫V1的缓存版本 */
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("cache---------->", cache);
      /* 指定要缓存的内容，地址为相对于跟域名的访问路径 */
      return cache.addAll(CACHE_LIST);
    })
  );
});

/* 当激活事件被触发的时候，service-worker.js 文件更新时，一个很好的机会去清除过时的缓存 */
self.addEventListener("activate", function (event) {
  console.log("activate-------------->", event);
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) {
            return key !== CACHE_NAME;
          })
          .map(function (key) {
            return caches.delete(key);
          })
      );
    })
  );
});

/* 注册fetch事件，拦截全站的请求 */
self.addEventListener("fetch", function (event) {
  var request = event.request;
  console.log("request-------------->", request);
  // event.respondWith(
  //   // magic goes here
  //   /* 在缓存中匹配对应请求资源直接返回 */
  //   caches.match(event.request)
  // );

  // 非GET请求
  if (request.method !== "GET") {
    event.respondWith(
      fetch(request, { mode: "no-cors" }).catch(function () {
        // 如果都是接口请求的话
        return new Response('{code: 200, msg: "当前网络不佳"}', {
          headers: { "Content-Type": "application/json" }
        });
      })
    );
    return;
  }

  // HTML页面处理
  if (request.headers.get("Accept").indexOf("text/html") !== -1) {
    event.respondWith(
      fetch(request, { credentials: "include", mode: "no-cors" })
        .then(function (response) {
          var copy = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(request, copy);
          });
          return response;
        })
        .catch(function () {
          return caches.match(request).then(function (response) {
            return response || caches.match("/");
          });
        })
    );
    return;
  }

  // get 接口 请求处理

  if (request.headers.get("Accept").indexOf("application/json") !== -1) {
    event.respondWith(
      fetch(request, { credentials: "include", mode: "no-cors" })
        .then(function (response) {
          var copy = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(request, copy);
          });
          return response;
        })
        .catch(function () {
          return caches.match(request).then(function (response) {
            return (
              response ||
              new Response('{code: 200, msg: "网络忙"}', { headers: { "Content-Type": "application/json" } })
            );
          });
        })
    );
    return;
  }

  if (request.url.indexOf("sockjs-node") !== -1) {
    return;
  }

  // get请求 且 非 html 文件 且 非请求接口处理
  event.respondWith(
    caches.match(request).then(function (response) {
      return (
        response ||
        fetch(request, { mode: "no-cors" }).catch(function () {
          if (request.headers.get("Accept").indexOf("image") !== -1) {
            return new Response("<svg>...</svg>", { headers: { "Content-Type": "image/svg+xml" } });
          }
        })
      );
    })
  );
});
