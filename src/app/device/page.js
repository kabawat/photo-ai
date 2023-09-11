import React from 'react';
import { isTablet, isDesktop } from 'react-device-detect';

const DeviceInfo = () => {
    if (isDesktop) {
        return <p>isDesktop</p>
    } else if (isTablet) {
        return <p>isTablet Device</p>
    } else {
        return <p>invalid Device</p>
    }
};

export default DeviceInfo;
