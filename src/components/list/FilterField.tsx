import * as React from 'react';

import { IContact } from '../../types';

export default function FilterField({filter, onFilterChangeHandler}) {
  return <div className='input-group'>
    <input value={filter || ''} onChange={e => onFilterChangeHandler((e.target as any).value)} className='input-group-field' type='text' placeholder='filter' />
    <div className='input-group-button'>
      <input type='button' className='button' value='X' onClick={() => onFilterChangeHandler(null)}/>
    </div>
  </div>;
}