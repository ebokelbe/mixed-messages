// Every time a user runs a program, they should get a new, randomized output.
// To make your program truly random, the message that it outputs should be made up of at least three different pieces of data.

const messageGenerator = () => {
    // message should be composed of 3 different parts, randomly pick each one

    const part1 = ['Once upon a time ', 'In a far off land ', 'In a hole in the ground '];

    const part2 = ['there was a heroic king ', 'there was a famous explorer ', 'there lived a hobbit, '];

    const part3 = ['named Arthur, king of the Britons.', 'named Marco Polo.', 'named Bilbo Baggins.'];

    console.log(part1[Math.floor(Math.random() * 3)] + part2[Math.floor(Math.random() * 3)] + part3[Math.floor(Math.random() * 3)]);

}

