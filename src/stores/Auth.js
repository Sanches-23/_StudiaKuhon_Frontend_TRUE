import {defineStore} from "pinia";
import {DefaultAPIInstance} from "@/AxiosDefoultOptions/AxiosDfOpt";

export const useUserStore = defineStore("authUser", {
    state: () => ({
        authUser: null,
        authToken: null,
    }),
    getters: {
        user: (state) => state.authUser,
        authToken: (state) => state.Token,
    },
    actions: {
        Login(login, password) {
            const url = "auth/token/login/";
            const data = {username: login, password: password};
            DefaultAPIInstance.post(url, data)
                .then(response => {
                    this.Token = response.data.auth_token;
                    // alert(this.Token)
                    localStorage.setItem('Token', this.Token)
                    DefaultAPIInstance.defaults.headers.common['Authorization'] = 'Token ' + this.Token
                })
            .catch(e => alert(e))
        },

        Logout() {
            const url = "auth/token/logout/"
            DefaultAPIInstance.post(url)
                .then(() => {
                    delete DefaultAPIInstance.defaults.headers.common['Authorization']
                    this.Token = null
                    localStorage.removeItem('Token')
                })
                .catch(e => alert(e))
        },

        SignUp(email, login, password) {
            const url = "auth/users/";
            const data = { email: email, username: login, password: password };
            DefaultAPIInstance.post(url, data)
                .then(response => {
                    this.Token = response.data.auth_token;
                    alert(this.Token)
                    localStorage.setItem('Token', this.Token)
                    DefaultAPIInstance.defaults.headers.common['Authorization'] = 'Token ' + this.Token
                })
                .catch(e => alert(e))
        },

        // SignUp(email, login, password) {
        //     const url = "auth/users/";
        //     const data = { email: email, username: login, password: password };
        //     DefaultAPIInstance.post(url, data)
        //         .then(response => {
        //             // this.Token = response.data.auth_token;
        //             alert(response)
        //             // localStorage.setItem('Token', this.Token)
        //             // DefaultAPIInstance.defaults.headers.common['Authorization'] = 'Token ' + this.Token
        //         })
        //         // .catch(e => alert(e))
        // },



        // async fetchUser() {
        //     const res = await fetch(DefaultAPIInstance + "auth/token/login/");
        //
        //     const user = await res.json();
        //     this.user = user;
        // },
        // async signU(email, password) {
        //     const res = await fetch("https://localhost:3000/register", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({ email, password }),
        //     });
        //     const user = await res.json()
        //     this.user = user;
        // },
        // async signIn(email, password) {
        //     const res = await fetch("https://localhost:3000/register", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({ email, password }),
        //     });
        //     const user = await res.json();
        //     this.user = user;
        // },
    },
});