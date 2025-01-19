import React, { PropsWithChildren } from 'react';
import './shortproductcard.css';
import logo from './img.png';
import { BasketButton } from '../BasketButton/BasketButton';

interface IModalProps {
  img: string;
  price: number;
  name: string;
  description: string;
  count: number;
}

export const ShortProductCard = ({ img, price, name, description, count }: PropsWithChildren<IModalProps>) => {
  return (
    <table>
      <tbody>
        <tr>
          <td rowSpan={3}>
            <img src={logo} alt="fireSpot" />
          </td>
          <td colSpan={2}>
            <h1>{name}</h1>
          </td>
        </tr>
        <tr>
          <td>
            <p>{price} руб.</p>
          </td>
          <td>
            <BasketButton size={'small'} count={count} />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <div className={'div-max-height'}>{description}</div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
