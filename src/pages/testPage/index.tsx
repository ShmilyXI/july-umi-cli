import React, { FC } from 'react';
import { IndexModelState, ConnectProps, Loading } from 'umi';
import { connect } from 'dva';

interface PageProps extends ConnectProps {
  index: IndexModelState;
  loading: boolean;
}
const IndexPage: FC<PageProps> = ({ index, dispatch }) => {
  const { name } = index;
  return (
    <div>
      <h1
        onClick={() => {
          dispatch({ type: 'index/query', payload: '123' });
          console.log(123);
        }}
      >
        click
      </h1>
      <h1>Hello {name}</h1>
    </div>
  );
};
export default connect(({ index, loading }: { index: IndexModelState; loading: Loading }) => ({
  index,
  loading: loading.models.index,
}))(IndexPage);
