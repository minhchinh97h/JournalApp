import React from 'react';
import AppCard from './AppCard';

interface Props {
  title: string;
  content: string;
}

const QuoteCard = (props: Props) => {
  const {title, content} = props;

  return <AppCard title={title} content={content} />;
};

export default QuoteCard;
