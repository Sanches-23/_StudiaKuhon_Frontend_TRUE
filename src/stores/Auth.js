import {defineStore} from "pinia";
import {DefaultAPIInstance} from "@/AxiosDefoultOptions/AxiosDfOpt";

export const useUserStore = defineStore("authUser", {
    state: () => ({
        Token: $cookies.get('token') ?? null,
    }),
    actions: {
        login(login, password) {
            const url = "auth/token/login/";
            const data = {username: login, password: password};
            DefaultAPIInstance.post(url, data)
                .then(response => {
                    this.Token = response.data.auth_token;
                    $cookies.set('token', this.Token)
                    DefaultAPIInstance.defaults.headers.common['Authorization'] = 'Token ' + response.data.auth_token;
                })
            .catch(e => console.log(e))
        },
        logout() {
            const url = "auth/token/logout/"
            DefaultAPIInstance.post(url)
                .then(() => {
                    delete DefaultAPIInstance.defaults.headers.common['Authorization']
                    $cookies.remove('token')
                    this.Token = null
                })
                .catch(e => console.log(e))
        },
        register(email, login, password) {
            const url = "auth/users/";
            const data = { email: email, username: login, password: password };
            DefaultAPIInstance.post(url, data)
                .catch(e => console.log(e))
        },
    },
});