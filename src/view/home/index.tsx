// import React from 'react';

import CardItemComponent from "../../components/box/card-item.tsx";
import {useAppSelector} from "../../redux/hooks.ts";
import React from "react";
import {formatter} from "../../config/servise.ts";

export default function Home() {

    const {products, baskets} = useAppSelector(state => state.variables)

    const [amount, setAmount] = React.useState<number>(0)

    React.useEffect(()=> {
        let sum = 0
        for (const basket of baskets) {
            sum += (Number(basket.price) * basket.amount)
        }
        setAmount(sum)
    }, [baskets])

    return (
        <div className={"w-full flex flex-col gap-2 justify-center items-start mt-10 "}>
            <div className="title w-full text-center mb-5">
                <h1 className={'h1'}>Menu</h1>
                <p>Umumiy narx: <b className={"sum-format"}>{formatter.format(amount)}</b></p>
            </div>
            <div
                className="grid 2xl:grid-cols-8 xl:grid-cols-7 md:grid-cols-6 sm:grid-cols-5 grid-cols-3 md:gap-3 gap-5">
                {
                    products.map(({name, price, img}, ind) => {
                        return (
                            <CardItemComponent
                                key={ind}
                                name={name}
                                price={price}
                                img={img}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}