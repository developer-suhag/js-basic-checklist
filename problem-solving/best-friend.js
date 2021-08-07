// bestFriend 

function bestFriend(names) {
    let biggerName = names[0];

    for (const name of names) {

        if (name.length > biggerName.length) {
            biggerName = name;

        }
    }

    // for (let i = 0; i < names.length; i++) {
    //     let name = names[i]
    //     // console.log('Name:', name);
    //     // console.log();
    //     if (name.length > biggerName.length) {
    //         biggerName = name;
    //         console.log(biggerName);
    //     }
    // }
    return biggerName;
}

const friendNames = ['Md Farhan Sakib', 'MD Aryan Ahmed Selim', 'Nazmoon Nahar Tisha', 'Florance Nightangle', 'Amran', 'Sohan', 'Sanjida Kabir Srite', 'Suhag Al Amin', 'Mehrin Niti'];


const biggestName = bestFriend(friendNames);
console.log('The biggest person is:', biggestName);