import React from 'react';
import PropTypes from 'utils/propTypes';

import classNames from 'classnames';

import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Typography from '../Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconWidget = ({
  color,
  icon: Icon,
  iconProps,
  title,
  subtitle,
  className,
  ...restProps
}) => {
  const classes = classNames('cr-widget', className, {
    [`${color}`]: color,
  });
  return (
    <Card className={classes} {...restProps}>
      <CardBody className={'cr-widget__icon text-' + color}>
      <FontAwesomeIcon size='3x' icon={Icon} />
      </CardBody>
      <CardBody>
        <CardTitle>
          <Typography className="mb-0">
            <strong>{title}</strong>
          </Typography>
        </CardTitle>
        <CardSubtitle><Typography className="mb-0 text-muted">{subtitle}</Typography></CardSubtitle>
      </CardBody>
    </Card>
  );
};

IconWidget.propTypes = {
  bgColor: PropTypes.string,
  icon: PropTypes.component,
  iconProps: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

IconWidget.defaultProps = {
  bgColor: 'primary',
  icon: 'span',
  iconProps: { size: 50 },
};

export default IconWidget;
