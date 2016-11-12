import * as React from 'react';

type Children = { children?: React.ReactNode};

function columnClassNames(span, offset) {
  if (!span) {
    return '';
  }
  const classNames = `columns medium-${span}`;

  return classNames;
}

export function Column({span = 4, offset, children}: { span?: number, offset?: number, children?: any }) {
  const classNames = columnClassNames(span, offset);
  return <div className={classNames}>
    {children}
  </div>;
}

export function Row({children}: Children) {
  return <div className='row'>{children}</div>;
}

export function ColumnRow({children}: Children) {
  return <div className='row column'>{children}</div>;
}


const TwoColumns = ({children}: Children) => <Row>{children}</Row>;
const Left = ({children}: Children) => <Column span={4}>{children}</Column>;
const Right = ({children}: Children) => <Column span={7} offset={1}>{children}</Column>;

export const Layout = {
  TwoColumns, Left, Right
};