import { defineStore } from "pinia";
import { NOTICE_TIMEOUT } from "../constants.js";

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      loading: false,
      user: null,
      view: null,
      notices: [],
    }
  },

  actions: {
    isAdmin() {
      if (!this.user)
        return false;

      for (let perm of this.user.perms || []){
        if (perm.model === '*' && perm.action === '*' && perm.id === '*')
          return true;
      }

      return false;
    },
    
    pushNotice(type, message){
      this.notices.push({ type, message, at: Date.now() });
    },

    autoCleanNotice(){
      setInterval(() => {
        const now = Date.now();

        do {
          let notice = this.notices[0];
          if (!notice)
            break;

          if (now - notice.at > NOTICE_TIMEOUT)
            this.notices.shift();
          else
            break;
            
        } while (this.notices.length > 0);
      }, 100);
    }
  }
});