const sentences = [
    "The quick brown fox jumps over the lazy dog",
    "Pack my box with five dozen liquor jugs",
    "How vexingly quick daft zebras jump",
    "The five boxing wizards jump quickly",
    "Sphinx of black quartz, judge my vow",
    "Two driven jocks help fax my big quiz",
    "Waltz, nymph, for quick jigs vex Bud",
    "Glib jocks quiz nymph to vex dwarf",
    "Jackdaws love my big sphinx of quartz",
    "The job requires extra pluck and zeal from every young wage earner",
    "Bright vixens jump; dozy fowl quack",
    "Jumpy felines vex the black wizard",
    "Watch Jeopardy!, Alex Trebek's fun TV quiz game",
    "Grumpy wizards make toxic brew for the evil Queen and Jack",
    "Amazingly few discotheques provide jukeboxes",
];

const paragraphs = [
    "Programming is the art of telling another human what one wants the computer to do. The computer will do exactly what it is told, no more and no less. This is why programming can be both rewarding and frustrating at the same time.",
    "In computer science, artificial intelligence, sometimes called machine intelligence, is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals. Leading AI textbooks define the field as the study of intelligent agents.",
    "The World Wide Web is an information system enabling documents and other web resources to be accessed over the Internet. Documents and downloadable media are made available to the network through web servers and can be accessed by programs such as web browsers.",
    "A database is an organized collection of data, generally stored and accessed electronically from a computer system. Where databases are more complex they are often developed using formal design and modeling techniques. The database management system is the software that interacts with end users, applications.",
    "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. The term is generally used to describe data centers available to many users over the Internet.",
    "Cybersecurity involves protecting computer systems and networks from digital attacks. These cyber threats include unauthorized access, data breaches, and system disruptions, which can result in financial losses and reputational damage.",
    "The software development life cycle consists of stages such as planning, designing, coding, testing, deployment, and maintenance. Each phase ensures that the final product meets user requirements and functions efficiently.",
];

export function generateRandomText(type = "sentences", count = 3) {
    const source = type === "sentences" ? sentences : paragraphs;
    const shuffled = source.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count).join(". ") + ".";
}

export function getRandomParagraph() {
    return paragraphs[Math.floor(Math.random() * paragraphs.length)];
}

export function getRandomSentences(count = 3) {
    return generateRandomText("sentences", count);
}
