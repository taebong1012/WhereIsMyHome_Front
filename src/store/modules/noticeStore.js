import router from "@/router";
import { getNoticeList, getNoticeOne, createNotice, searchNotice } from "@/api/notice";

const noticeStore = {
  namespaced: true,

  state: {
    noticelist: [],
    noticeObject: Object,
  },
  getters: {
    getNoticeListObserver(context) {
      return context.noticelist;
    },

    getNoticeObjectObserver(context) {
      return context.noticeObject;
    },
  },
  actions: {
    getNoticeList({ commit }) {
      commit("SET_NOTICE_LIST", []);
      getNoticeList(({ data }) => {
        console.log(data);
        commit("SET_NOTICE_LIST", data);
      });
    },
    getNoticeOne({ commit }, uid) {
      commit("SET_NOTICE_OBJECT", null);
      getNoticeOne(uid, ({ data }) => {
        console.log(data);
        commit("SET_NOTICE_OBJECT", data);
      });
    },
    createNotice({ commit }, params) {
      console.log(JSON.stringify(params));
      createNotice(params, ({ data }) => {
        router.push({
          name: "noticelist",
        });
      });
    },
    searchNotice({ commit }, word) {
      commit("SET_NOTICE_LIST", []);
      searchNotice(word, ({ data }) => {
        commit("SET_NOTICE_LIST", data);
      });
    },
  },
  mutations: {
    SET_NOTICE_LIST(state, payload) {
      state.noticelist = payload;
    },

    SET_NOTICE_OBJECT(state, payload) {
      state.noticeObject = payload;
    },
  },
};

export default noticeStore;
