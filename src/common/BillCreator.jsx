import React from 'react'
import Popup from 'reactjs-popup'

class BillCreator extends React.Component {
  render() {
    return (
      <Popup trigger={<button type="button" className="btn btn-block" style={{ backgroundColor: 'gray', color: 'white' }}>+</button>} position="right center" modal nested>
        {(close) => (
          <div className="cvpopup">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">
              {' '}
              Bill Creator
              {' '}
            </div>
            <div className="content">
              form here
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  close();
                }}
              >
                Save
              </button>
              <button
                className="button"
                onClick={() => {
                  close();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </Popup>
    )
  }
}

export default BillCreator
