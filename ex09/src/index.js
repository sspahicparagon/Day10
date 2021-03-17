function myFunction(myObj, checkProp) {
    // Only change code below this line
    return (myObj.hasOwnProperty(checkProp)) ? myObj[checkProp]: "Not Found";
    // Only change code above this line
}

myFunction({title: "Titanic", song: "My Hear Will Go On", genre: "drama"}, "title");
myFunction({title: "Titanic", song: "My Hear Will Go On", genre: "drama"}, "song");
myFunction({title: "Titanic", song: "My Hear Will Go On", genre: "drama"}, "genre");
myFunction({title: "Titanic", song: "My Hear Will Go On", genre: "drama"}, "actor");
module.exports = myFunction;