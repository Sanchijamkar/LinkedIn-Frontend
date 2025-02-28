import React from 'react';

const NetworkPageMainPanel = () => {
    return (
        <div className='network-page-main-panel'>
            <div className='network-page-main-panel-selection flex justify-around py-3'>
                <p>Grow</p>
                <p>Catch up</p>
            </div>
            <div className='network-page-invitations flex justify-between py-3 mt-2 px-2'>
                <p>No pending invitations</p>
                <div>Manage</div>
            </div>
        </div>
    )
}

export default NetworkPageMainPanel;