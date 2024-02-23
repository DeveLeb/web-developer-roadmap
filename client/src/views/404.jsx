import { Fragment } from 'react';
import { Card, Link } from 'components/lib';

export function FourOhFour(props) {
  return (
    <Fragment>
      <Card title="404: Not Found">
        <Link url="/">Go Home</Link>
      </Card>
    </Fragment>
  );
}
