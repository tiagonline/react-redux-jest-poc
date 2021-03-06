import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ConfigRow extends Component {
  render() {
    const { title, description, type, value, defaultValue, onChange } = this.props;

    let input;
    switch (type) {
      case 'number':
        input = (
          <input
            type="number"
            value={value}
            placeholder={defaultValue}
            onChange={e => onChange(e.target.value)}
          />
        );
        break;
      case 'text':
        input = (
          <input
            type="text"
            value={value}
            placeholder={defaultValue}
            onChange={e => onChange(e.target.value)}
          />
        );
        break;
      default:
        input = <span>Invalid input type</span>;
        break;
    }

    return (
      <div>
        <p className="row-title">
          { title }
        </p>
        <p className="row-description" style={{ display: 'none' }}>
          { description }
        </p>
        <div className="row-right-content">{ input }</div>
      </div>
    );
  }
}

ConfigRow.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

ConfigRow.defaultProps = {
  description: '',
};

export default ConfigRow;
