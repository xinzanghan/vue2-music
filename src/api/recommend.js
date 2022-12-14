import jsonp from "common/js/jsonp";
import { commonParams, options } from "./config";

// 利用jsonp抓取数据
export function getRecommend() {
  const url =
    "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";
  const data = Object.assign({}, commonParams, {
    platform: "h5",
    uni: 0,
    needNewCode: 1
  });
  return jsonp(url, data, options);
}
