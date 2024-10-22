document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    // Current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed in JavaScript
    const currentDay = currentDate.getDate();

    // Calculate the age in years, months, and days
    let ageYears = currentYear - year;
    let ageMonths = currentMonth - month;
    let ageDays = currentDay - day;

    // Adjust for negative days and months
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(currentYear, currentMonth - 1, 0).getDate(); // Get days in the previous month
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Update the result
    document.getElementById('years').innerHTML = `<span class="text-black">${ageYears}</span> years`;
    document.getElementById('months').innerHTML = `<span class="text-black">${ageMonths}</span> months`;
    document.getElementById('days').innerHTML = `<span class="text-black">${ageDays}</span> days`;

    // Show result section
    document.getElementById('result').classList.remove('hidden');
});
