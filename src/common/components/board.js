import React, { Component, PropTypes } from 'react';
import Cell from 'common/components/cell';

function transform(data, size) {
  const [ cols, rows ] = size;
  const mat = [];
  while (0 < data.length) {
    const part = data.slice(0, cols);
    mat.push(part);
    data = data.slice(cols);
  }
  return mat;
}

export default class Board extends Component {
  static get propTypes() {
    return {
      data: PropTypes.array.isRequired,
    };
  }

  render() {
    const { data: line, size } = this.props;
    const data = transform(line, size);
    return <div>
      <table>
        <tbody>
          {data.map(row =>
            <tr>
              {row.map(state =>
                <Cell state={state} />
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>;
  }
}
