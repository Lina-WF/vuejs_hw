type Rating = {"rate": number,
                    "count":number};
export type NewProduct = {"id": number,
                    "title": string,
                    "price": number,
                    "description": string,
                    "category": string,
                    "image":string};
export type Product = NewProduct & {"rating": Rating};
export type NewPost = {authorId: number, 
                    title: string, 
                    text: string};
export type Post = {id: number, 
                    title: string, 
                    text: string,
                    author: {
                        name: string,
                        avatar: string,
                    }};
export type AuthData = {login: string
                        password: string};
export type DeliveryData = {fio: string,
                            bday: string,
                            city: string,
                            street: string,
                            building: string,
                            apartment: string};
export type CardData = {cardNum: string,
                        cardName: string,
                        cardYear: string,
                        cardCode: string,
                        agreement: string};
type SearchTerm = {which: "searchTerm",
                   filter: string};
type PriceFrom = {which: "priceFrom",
                  filter: number};
type PriceTo = {which: "priceTo",
                filter: number};
export type Filter = SearchTerm | PriceFrom | PriceTo;