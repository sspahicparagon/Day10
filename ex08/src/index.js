function getUsername(email) {
    var username = '';


    // Only change code below this line
    username = {
        "user1@gmail.com": "user1",
        "user2@gmail.com": "user2",
        "user3@gmail.com": "user3",
        "user4@gmail.com": "user4",
        "user5@gmail.com": "user5",
        "user6@gmail.com": "user6"
    };

    // Only change code above this line
    username = username[email];
    return username;
}

getUsername("user1@gmail.com");
getUsername("user2@gmail.com");
getUsername("user3@gmail.com");
getUsername("user4@gmail.com");
getUsername("user5@gmail.com");
getUsername("user6@gmail.com");
getUsername("");

module.exports = getUsername;