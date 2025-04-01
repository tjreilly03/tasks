import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {act} from "react";

// Define the holidays and their respective dates (simplified for this example)
const holidays = [
    { name: "New Year's Day", emoji: "🎉", date: new Date("1/1/2025") },
    { name: "Halloween", emoji: "🎃", date: new Date("8/31/2025") },
    { name: "Christmas", emoji: "🎄", date: new Date("12/25/2025") },
    { name: "Thanksgiving", emoji: "🦃", date: new Date("11/20/2025") },
    { name: "Saint Patty's Day", emoji: "🍀", date: new Date("3/16/2025") },
];

// Alphabetical order function
const getNextHolidayAlphabetically = (currentHoliday: string): string => {
    const sortedHolidays = holidays
        .sort((a, b) => a.name.localeCompare(b.name)) // Sort alphabetically
        .map((holiday) => holiday.name);

    const currentIndex = sortedHolidays.indexOf(currentHoliday);
    const nextIndex = (currentIndex + 1) % sortedHolidays.length; // Cycle back to the start
    return sortedHolidays[nextIndex];
};

// Chronological order function (based on the holiday date)
const getNextHolidayByYear = (currentHoliday: string): string => {
    const sortedHolidays = holidays
        .sort((a, b) => a.date.getTime() - b.date.getTime()) // Sort by the date
        .map((holiday) => holiday.name);

    const currentIndex = sortedHolidays.indexOf(currentHoliday);
    const nextIndex = (currentIndex + 1) % sortedHolidays.length; // Cycle back to the start
    return sortedHolidays[nextIndex];
};

export function CycleHoliday(): React.JSX.Element {
    // Initial state with New Year's Day as the default holiday
    const [currentHoliday, setCurrentHoliday] = useState<string>("New Year's Day");

    // Handle advance by Alphabet
    const handleAlphabetical = () => {
         act(() => {
            const nextHoliday = getNextHolidayAlphabetically(currentHoliday);
            setCurrentHoliday(nextHoliday);
        });
        
    };

    // Handle advance by Year
    const handleYear = () => {
        act(() => {
            const nextHoliday = getNextHolidayByYear(currentHoliday);
        setCurrentHoliday(nextHoliday);
        });
    };

    // Get the emoji for the current holiday
    const currentHolidayEmoji = holidays.find(
        (holiday) => holiday.name === currentHoliday
    )?.emoji;

    return (
        <div>
            <h3>Holiday: {currentHolidayEmoji}</h3>

            {/* Buttons to cycle through holidays */}
            <Button onClick={handleAlphabetical}>Alphabet</Button>
            <Button onClick={handleYear}>Year</Button>
        </div>
    );
}
