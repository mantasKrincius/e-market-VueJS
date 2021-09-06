import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        url: "http://localhost:3000/api/v1",
        user: {},
        allPosts: [],
        userPosts: [],
        singlePost: {},
        singleProduct: {},
        userCart: [],
        token: "",
        message: "",
        userQuantity: 0,
        totalPay: 0,
    },
    mutations: {
        userInfo(state, payload) {
            state.user = payload
        },
        allProducts(state, payload) {
            state.allPosts = payload
        },
        userPosts(state, payload) {
            state.userPosts = payload
        },
        moreInfo(state, payload) {
            state.singlePost = payload
        },
        userCart(state, payload) {
            state.userCart = [payload, ...state.userCart]
        },
        quantity(state, payload) {
            state.userQuantity = payload
        },
        add(state, payload) {
            state.userQuantity = payload
            console.log("user " + state.userQuantity)
        },
        minus(state, payload) {
            state.userQuantity = payload
            console.log("user " + state.userQuantity)
        }
    },

    actions: {
        addToCart({commit, state}, payload) {
            console.log(payload)
            commit('userCart', payload)
        },
        add({commit, state}, payload) {
         commit('add', payload)
        },
        minus({commit, state}, payload) {
            commit('minus', payload)
        },
        async register({commit, state}, payload) {
            let response = await fetch(`${state.url}/user/signUp`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            console.log(response);
            if (response.status !== 200) return alert("Something went wrong");
            let data = await response.json();
            console.log(data);
        },
        async login({commit, state}, payload) {
            try {
                let response = await fetch(`${state.url}/user/signIn`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                });
                console.log(response)
                if (response.status !== 200) throw await response.json();
                let token = response.headers.get("userauth");

                localStorage.setItem("userauth", token);
                localStorage.setItem("shop-user", await JSON.stringify(await response.json()));
                window.location.reload()

            } catch (e) {
                console.log(e);
                state.message = e.message
            }
        },
        getUserName({commit, state}, payload) {
            if (JSON.parse(localStorage.getItem("shop-user"))) {
                let user = JSON.parse(localStorage.getItem("shop-user"))
                let token = localStorage.getItem("userauth");
                commit('userInfo', user)
                state.token = token

            } else {
                state.user.name = "Login Please"
            }
        },
        async logout({commit, state}, payload) {
            //need to check this solution later
            await fetch(`${state.url}/user/logOut`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    userauth: state.token,
                },
            });
            window.location.reload()
            state.user.userStatus = false
            state.user.name = ""
            state.user.token = ""
            localStorage.removeItem("userauth");
            localStorage.removeItem("shop-user");
        },
        async addPost({commit, state}, payload) {
            const formData = new FormData();
            if (!payload.name && !payload.price && !payload.quantity) {
                return state.message = "need to fill"
            }

            if (payload.productImage !== 0) {
                formData.append("productImage", payload.productImage);
                //paziureti
            }

            formData.append("name", payload.name);
            formData.append("price", payload.price);
            formData.append("description", payload.description);
            formData.append("quantity", payload.quantity);

            try {
                let response = await fetch(`${state.url}/products/myPosts`, {
                    method: "POST",
                    headers: {
                        userauth: state.token,
                    },

                    body: formData,
                });

                if (response.status !== 200) throw await response.json();
                let data = await response.json();
                console.log(data);
                window.location.reload()

            } catch (e) {
                console.log(e);
            }
        },
        async getAllPosts({commit, state}, payload) {
            let response = await fetch(`${state.url}/products`, {
                method: 'GET'
            })

            let products = await response.json()
            commit('allProducts', products)

        },
        async getUserPosts({commit, state}, payload) {
            let response = await fetch(`${state.url}/products/myPosts`, {
                method: "GET",
                headers: {
                    userauth: state.token,
                },
            });

            let data = await response.json();
            commit('userPosts', data)
        },
        async deletePost({commit, state}, payload) {
            let body = {
                id: payload
            };
            await fetch(`${state.url}/products/delete`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    userauth: state.token,
                },
                body: JSON.stringify(body),
            });
            location.reload();
        },
        async buy({commit, state}, payload) {
            let body = {
                userId: state.user._id,
                products: state.userCart
            }
            try {
                let response = await fetch(`${state.url}/user/cart`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        userauth: state.token,
                    },
                    body: JSON.stringify(body)
                });

                if (response.status !== 200) throw await response.json();
                let data = await response.json();

                commit('userCart', data)
            } catch (e) {
                console.log(e);
            }
        },
        async moreInfo({commit, state}, payload) {
            let body = {
                id: payload._id,
            };

            let response = await fetch(`${state.url}/products/single`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    userauth: state.token,
                },
                body: JSON.stringify(body),
            });

            let car = await response.json();
            commit('moreInfo', car)
        },
        async changeQuantity({commit, state}, payload) {
            let amount = payload.data.quantity - payload.quantity
            let body = {
                _id: payload.data._id,
                quantity: amount,
            }
            console.log( state.user._id,)
            state.message = ""
            let response = await fetch(`${state.url}/products/quantity`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    userauth: state.token,
                },
                body: JSON.stringify(body),
            });
            console.log(response);
            if (response.status !== 200) return alert("Something went wrong");
            let data = await response.json();
            console.log(data);
        }

    },

})
