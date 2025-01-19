import React from 'react';
import s from './basketrow.module.sass';
import { BasketButton } from '../BasketButton/BasketButton';
import delete_logo from './icon_delete.svg';

interface BasketRowProps {
  img: string;
  name: string;
  price: number;
  count: number;
}

export function BasketRow({ img, name, count, price }: BasketRowProps) {
  if (count <= 0) count = 1;
  return (
    <>
      <tr>
        <td>
          <img className={s.imgProduct} src={img} alt="ProductImg" />
        </td>
        <td>{name}</td>
        <td>Цена товара: {price} руб.</td>
        <td>
          <BasketButton count={count} />
        </td>
        <td>Итого: {price * count} руб.</td>
        <td>
          <button>
            <img className={s.imgDelete} src={delete_logo} alt="Delete logo" />
          </button>
        </td>
      </tr>
    </>
  );
}
