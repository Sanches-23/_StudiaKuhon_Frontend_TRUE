import {defineStore} from "pinia";
import {DefaultAPIInstance} from "@/AxiosDefoultOptions/AxiosDfOpt";

export const useWishlistStore = defineStore("WishlistStore", {
    state: () => {
        return {
            showMessage: false,
            message: "Дякуємо за ваше замовлення, наш менеджер зв'яжеться з вами трішки пізніше.",
            products: [],
        };
    },
    actions: {
        get() {
            return this.products
        },
        add(id, title, description_shorted, thumbnail_photo) {
            if (this.products.find(x => x.id === id) == null) {
                this.products.push({
                    id: id,
                    title: title,
                    description_shorted: description_shorted,
                    main_photo: thumbnail_photo,
                });
            }
        },
        delete(id) {
            this.products = this.products.filter(obj => obj.id !== id)
        },
        order() {
            const message = this.products.map(product => {
                return `-------------------------\nДизайн: ${product.title}\nСсилка: http://localhost:8000/api/v1/products/${product.id}/\n-------------------------`;
            }).join('\n');
            DefaultAPIInstance.post('order', {'message': message, 'user': true})
                .catch(e => console.log(e));
            this.showMessage = true;
            this.products = [];
        },
        hideMessage() {
            this.showMessage = false;
        },
    },
    persist: true,
});