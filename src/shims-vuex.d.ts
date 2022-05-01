/*
 * @Author: liruihong
 * @Date: 2022-04-30 22:43:19
 * @LastEditTime: 2022-04-30 22:43:19
 * @LastEditors: liruihong
 * @Description:
 */

import store from "@/store" // path to store file

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: store
  }
}
