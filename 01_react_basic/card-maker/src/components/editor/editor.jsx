import React from 'react';
import CardAdd from '../card_add/card_add';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards, addCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {
      cards.map(card => (
        <CardEditForm card={card} key={card.id} />
      ))
    }
    <CardAdd onAdd={addCard} />
  </section>
);

export default Editor;
