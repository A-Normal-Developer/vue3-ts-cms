/*
 * @Author: liruihong
 * @Date: 2022-04-30 22:27:15
 * @LastEditTime: 2022-04-30 22:28:16
 * @LastEditors: liruihong
 * @Description:
 */

import { createStore } from "vuex"

const store = createStore({
  state: () => {
    return {
      name: "liruihong"
    }
  }
})

export default store
