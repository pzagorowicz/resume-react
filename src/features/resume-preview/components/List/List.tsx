import * as React from 'react';
import './List.css';

type ListProps = {
  title?: string;
  items: string[];
};

const List: React.FunctionComponent<ListProps> = ({ title, items }) => {
  return (
    <section className='abilities'>
      {title && <h2>{title}</h2>}
      <ul className='abilities__list'>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default List;
