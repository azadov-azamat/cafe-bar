import React from 'react';
import {Button} from "@material-tailwind/react";
import {BiLoader} from "react-icons/bi";

interface TextInputProps {
    type?: 'submit' | 'reset' | 'button';
    label: any;
    className?: string;
    variant?: 'text' | 'filled' | 'gradient' | 'outlined';
    disabled?: boolean
    loading?: boolean
    outline?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonComponent({
                                            type = "button",
                                            label,
                                            className,
                                            disabled = false,
                                            onClick,
                                            variant = 'text',
                                            loading = false
                                        }: TextInputProps) {

    return (
        <div id={"btn-component"}>
            <Button
                className={`btn ${className}`}
                type={type} fullWidth
                onClick={onClick}
                variant={variant}
                disabled={disabled}
            >
                {label}
                {
                    loading && <>
                        <BiLoader className={"text-white text-base animate-spin"}/>
                    </>
                }
            </Button>
        </div>
    );
}