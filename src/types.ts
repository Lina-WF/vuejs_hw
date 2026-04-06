export type rating = {"rate": number,
                    "count":number};
export type product = {"id": number,
                    "title": string,
                    "price": number,
                    "description": string,
                    "category": string,
                    "image":string,
                    "rating": rating};
export type newPost = {authorId: number, 
                    title: string, 
                    text: string};
export type post = {authorId: number, 
                    title: string, 
                    text: string,
                    author: {
                        name: string,
                        avatar: string,
                    }};
export type authData = {login: string
                        password: string};
export type deliveryData = {fio: string,
                            bday: string,
                            city: string,
                            street: string,
                            building: string,
                            apartment: string};
export type cardData = {cardNum: string,
                        cardName: string,
                        cardYear: string,
                        cardCode: string,
                        agreement: string};
