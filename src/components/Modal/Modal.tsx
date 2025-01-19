import React, { PropsWithChildren } from 'react';
import './modal.css';
import { Layout } from './Layout';

interface IModalProps {
  visible: boolean;
  title: string;
}

export const Modal = ({ visible, title, children }: PropsWithChildren<IModalProps>) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <Layout />
        <div className="modal__header">
          <div className="modal__title">{title}</div>
        </div>
        <div className="modal__body">
          {children}
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
          <br />
          Текст писать тут
        </div>
        <div className="modal__footer">
          <button>Закрыть</button>
        </div>
      </div>
    </div>
  );
};
