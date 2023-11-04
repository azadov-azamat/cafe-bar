export interface InitialStateProps {
    lang: string;
    loading: boolean;
    userData: userDataProps | null;
    products: ProductsDataProps[] | [];
    baskets: BasketDataProps[] | [];
}

export interface ProductsDataProps {
    name: string;
    price: string;
    img: string;
}

export interface BasketDataProps extends ProductsDataProps {
    amount: number;
}

export interface userDataProps {
    full_name: string;
    birthdate: string;
    address: string;
    description: string;
    phone_number: string;

}