import React from '@astrojs/react';
import FunctionComponent from "@astrojs/react"
import classnames from 'classnames';
import type { FC } from 'react';

interface ButtonProps {
    onClick?: () => void;
    bold?: boolean;
    type?: 'button' | 'submit' | 'reset';
    form?: string;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'default' | 'warn' | 'dropdown';
    disable?: boolean;
    uppercase?: boolean;
    active?: boolean;
    children: any
}

const Button: FC<ButtonProps> = ({
    onClick,
    bold = false,
    type = 'button',
    form,
    children,
    className,
    variant = 'default',
    disable,
    uppercase,
    active = false,
}) => (
    <button
        type={type}
        onClick={onClick}
        disabled={disable}
        className={classnames(
            'flex items-center justify-center px-4 py-2 mr-1 text-sm rounded-md shadow outline-none',
            { 'font-bold': bold },
            { uppercase: uppercase },
            {
                'text-sm py-2 px-4 font-normal border-none border-0 rounded-none shadow-none block w-full whitespace-nowrap bg-transparent text-purple-800 hover:bg-purple-700 hover:text-white':
                    variant === 'dropdown',
            },
            {
                'bg-purple-700 text-white p-2 border-2 border-purple-700 hover:bg-purple-600 font-bold':
                    !active && variant === 'default',
            },
            {
                'bg-purple-400 text-white p-2 border-2 border-purple-700':
                    active && variant === 'default',
            },
            {
                'bg-emerald-500 text-white active:bg-green-500 hover:shadow-lg focus:outline-none':
                    variant === 'primary',
            },
            {
                'bg-orange-500 text-white active:bg-green-500 hover:shadow-lg focus:outline-none':
                    variant === 'warn',
            },
            {
                'bg-white  border-2 border-gray-400 text-gray-400 focus:outline-none hover:border-purple-700 hover:text-purple-700':
                    variant === 'outline',
            },
            {
                'bg-red-500 text-white active:bg-green-500 hover:shadow-lg focus:outline-none':
                    variant === 'secondary',
            },
            {
                'bg-gray-500 text-white active:bg-gray-600 cursor-not-allowed hover:shadow-lg focus:outline-none':
                    disable,
            },
            className,
        )}
        form={form}
    >
        {children}
    </button>
);

export default Button;