import React from 'react';
import PropTypes from 'prop-types';
import upperFirst from 'lodash/upperFirst';
import { useClassNames } from '../utils';
import { RsRefForwardingComponent, WithAsProps } from '../@types/common';
import { useCalendarContext } from './CalendarContext';

export type TableHeaderRowProps = WithAsProps;

const weekKeys = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const TableHeaderRow: RsRefForwardingComponent<'div', TableHeaderRowProps> = React.forwardRef(
  (props: TableHeaderRowProps, ref) => {
    const { as: Component = 'div', className, classPrefix = 'calendar-table', ...rest } = props;
    const { locale, showWeekNumbers, isoWeek } = useCalendarContext();
    const { merge, prefix } = useClassNames(classPrefix);
    const classes = merge(className, prefix('row', 'header-row'));
    let items = weekKeys;

    if (isoWeek) {
      items = weekKeys.filter(v => v !== 'sunday');
      items.push('sunday');
    }

    return (
      <Component role="row" {...rest} ref={ref} className={classes}>
        {showWeekNumbers && <div className={prefix('header-cell')} role="columnheader" />}
        {items.map(key => (
          <div
            key={key}
            className={prefix('header-cell')}
            role="columnheader"
            aria-label={upperFirst(key)}
          >
            <span className={prefix('header-cell-content')}>{locale?.[key]}</span>
          </div>
        ))}
      </Component>
    );
  }
);

TableHeaderRow.displayName = 'CalendarTableHeaderRow';
TableHeaderRow.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  classPrefix: PropTypes.string
};

export default TableHeaderRow;
