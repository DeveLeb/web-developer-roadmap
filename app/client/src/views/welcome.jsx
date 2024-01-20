import { Fragment } from 'react';
import { Card } from 'components/lib';

export function Welcome(props){

  return (
    <Fragment>
      <Card title='Welcome'>
        <p className='mb-4 text-lg font-semibold'>This is a simple fullstack webapp</p>
      </Card>
      <Card title='Getting Started'>
        <ol className='mb-4'>
          <li>1. Read the README.md file</li>
          <li>2. Add new views to <code>/client/src/views</code></li>
          <li>3. Route the views in <code>/routes</code></li>
        </ol>
      </Card>
    </Fragment>
  )
}