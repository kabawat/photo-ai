"use client"
import React, { useEffect, useState } from 'react';
import UAParser from 'ua-parser-js';

const DeviceInfo = () => {
    const [deviceInfo, setDeviceInfo] = useState(null);

    useEffect(() => {
        const parser = new UAParser();
        const result = parser.getResult();
        setDeviceInfo(result);
    }, []);

    return (
        <div>
            {deviceInfo ? (
                <div>
                    <h2>Device Information</h2>
                    <ul>
                        <li>Browser: {deviceInfo.browser.name}</li>
                        <li>Browser Version: {deviceInfo.browser.version}</li>
                        <li>OS: {deviceInfo.os.name}</li>
                        <li>OS Version: {deviceInfo.os.version}</li>
                        <li>Device: {deviceInfo.device.model}</li>
                    </ul>
                </div>
            ) : (
                <p>Loading device information...</p>
            )}
        </div>
    );
};

export default DeviceInfo;
