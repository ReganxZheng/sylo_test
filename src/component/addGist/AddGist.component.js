import React, { useState } from 'react';
import { Input, Button, List } from 'antd';

import * as Styled from './addGist.styled';

const { TextArea } = Input;
let indexId = 0;

const AddGist = ({ gist, actions }) => {
  const [gistDetail, setGistDetail] = useState();

  const submitNewGist = (e, addNewGist) => {
    e.preventDefault();

    if (gistDetail) {
      setGistDetail('');
      return addNewGist([{ id: indexId++, value: gistDetail.split('\n'), isEditDisable: true }]);
    }
  };

  const getGistList = item => (
    <List.Item>
      <List.Item.Meta
        description={
          <Styled.ContentTextWrapper>
            <div>ID: {item.id}</div>
            <div style={{ margin: '0' }}>
              Content:
              <TextArea
                value={item.value.join('\n')}
                disabled={item.isEditDisable}
                autoSize={true}
                style={{ width: 500, background: '#ffffff', color: '#2f2f2f' }}
                onChange={e => onEditGist(e, item.id, item.value)}
              />
              {item.hash ? <div>Hash: {item.hash}</div> : ''}
            </div>
            {item.isEditDisable ? (
              <Button type='primary' onClick={e => allowEditGist(item.id)}>
                Edit
              </Button>
            ) : (
              <Button type='primary' onClick={e => allowEditGist(item.id)}>
                Confirm
              </Button>
            )}
            <Button type='danger' onClick={e => toDeleteGist(item.id)}>
              Delete
            </Button>
          </Styled.ContentTextWrapper>
        }
      />
    </List.Item>
  );

  const onEditGist = (e, item) => actions.editGist({ id: item, input: e.target.value.split('\n') });

  const allowEditGist = item => actions.allowEdit(item);

  const toDeleteGist = item => actions.deleteGist(item);
  return (
    <div className='container'>
      <Styled.TextAreaWrapper>
        <TextArea
          rows={15}
          style={{ width: '80%', fontSize: '18px' }}
          onChange={e => setGistDetail(e.target.value)}
          value={gistDetail}
        />
      </Styled.TextAreaWrapper>
      <div style={{ margin: '20px 0', textAlign: 'center' }}>
        <Button type='primary' onClick={e => submitNewGist(e, actions.addNewGist)}>
          Add New Gist
        </Button>
      </div>
      <List dataSource={gist.gistList} renderItem={item => getGistList(item)} itemLayout='vertical' />
    </div>
  );
};

export default AddGist;
