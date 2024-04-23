'use client'
import React, { useState, useEffect } from 'react';

const DynamicYears: React.FC = () => {
    const [years, setYears] = useState<number>(0);

    useEffect(() => {
        const startMonth = 6; // June
        const startDay = 1;
        const startYear = 2021;
        const startDate = new Date(startYear, startMonth - 1, startDay, 0);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
        const yearsSinceStart = Math.floor((currentDate.getTime() - startDate.getTime()) / millisecondsPerYear);
        

        setYears(yearsSinceStart);
    }, []);

    return (
        <p>{`I've been working for ${years} years.`}</p>
    );
};

export default DynamicYears;