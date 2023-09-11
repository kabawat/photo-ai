"use client"
import React, { useEffect, useState } from 'react';
import UAParser from 'ua-parser-js';

const DeviceInfo = () => {
    const [deviceInfo, setDeviceInfo] = useState(null);
    const [isLoad, setIsLoad] = useState(false)
    useEffect(() => {
        const parser = new UAParser();
        const result = parser.getResult();
        setDeviceInfo(result);
    }, []);

    useEffect(() => {
        if (deviceInfo?.os?.name === 'Windows') {
            setIsLoad(true)
        } else {
            setIsLoad(false)
        }
    }, [deviceInfo]);
    return (

        isLoad ? <>
            welcome to event {deviceInfo?.os?.name}
        </> : <>
            {deviceInfo?.os?.name}
        </>

    );
};

export default DeviceInfo;
