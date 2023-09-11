import React from 'react';
import { isTablet, isDesktop } from 'react-device-detect';

const DeviceInfo = () => {
    return (
        <div>
            {isTablet || isDesktop ? (
                <p>Hello PC</p>
            ) : (
                <p>invalid Device</p>
            )}
        </div>
    );
};

export default DeviceInfo;
