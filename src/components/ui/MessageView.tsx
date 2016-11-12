import * as React from 'react';

import { IMessagesState } from '../../types';
import { Layout } from './FoundationComponents';

type MessageViewProps = {
  messages: IMessagesState
}

const renderMessagePanel = (message: string, type: string) => {
  if (message) {
    return <div className='MessageView'>
      <div className={`callout ${type}`} data-closable>{message}<button className='close-button' aria-label='Dismiss alert' type='button' data-close>
    <span aria-hidden='true'>&times;</span>
  </button></div>
    </div>;
  }
};

const MessageView = ({messages}: MessageViewProps) => {
  return <span>
    {renderMessagePanel(messages.success, 'success')}
    {renderMessagePanel(messages.error, 'alert')}
  </span>;
};

export default MessageView;
