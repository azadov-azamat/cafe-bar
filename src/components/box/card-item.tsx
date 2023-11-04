// import React from 'react';

import {LazyLoadImage} from "react-lazy-load-image-component";
import {formatter} from "../../config/servise.ts";
import React from "react";
import ButtonComponent from "../button";
import {BiMinus, BiPlus} from "react-icons/bi";
import {ProductsDataProps} from "../../interface/redux/variable.interface.ts";
import {useAppDispatch} from "../../redux/hooks.ts";
import {setBasketItem} from "../../redux/reducers/variable.ts";

export default function CardItemComponent({name, price, img}: ProductsDataProps) {

    const dispatch = useAppDispatch()
    const [isBasket, setBasket] = React.useState<boolean>(false)
    const [amount, setAmount] = React.useState<number>(0)

    React.useEffect(() => {
        if (amount > 0) {
            setBasket(true)
        } else {
            setBasket(false)
        }
    }, [amount])
    const increment = () => {
        setAmount(previous => previous += 1)
    }

    const decrement = () => {
        setAmount(previous => previous -= 1)
    }

    return (
        <div id={'card-item'} className={"relative"}>
            <div className="image">
                <LazyLoadImage effect={"black-and-white"}
                               className={""}
                               alt={name + price}
                               src={img}
                />
            </div>
            <div className="name">
                <p>{name}</p>
                <p className={'flex items-center gap-2'}>
                    <span/>
                    <b className={"sum-format"}>{formatter.format(Number(price))}</b>
                    <span/>
                </p>
            </div>
            <div className="btns">
                {
                    isBasket ? <div className={"w-full flex justify-between gap-2"}>
                        <ButtonComponent label={<BiMinus/>} className={"danger"} onClick={decrement}/>
                        <ButtonComponent label={<BiPlus/>} className={"primary"} onClick={increment}/>
                    </div> : <ButtonComponent label={"Add"} className={"primary"} onClick={() => {
                        dispatch(setBasketItem({name, price, img, amount: 1}))
                        increment()
                    }}/>
                }
            </div>
            {isBasket && <span
                className={"absolute -top-3 -right-2 flex justify-center items-center w-6 h-6 rounded-full bg-primary_yellow text-sm text-white font-bold"}>
                {amount}
            </span>}
        </div>
    );
}