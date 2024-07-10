// code your solution here

// Write the function
superbowlWin = (record) => {
    const result = record.find(record => record.result === "W");
    //return the year
    return !!result ? result.year :undefined;
}

