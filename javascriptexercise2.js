let name1 = "Eric";
let name2 = "Emily";
let name3 = "Amy";

if(name1.length > name2.length && name1.length > name3.length) {
    console.log("" + name1 + " has the longest name!");
} else if(name1.length == name2.length && name1.length > name3.length) {
    console.log ("" + name1 + " and " + name2 + " are tied for the longest name!");
} else if(name1.length == name3.length && name1.length > name2.length) {
    console.log("" + name1 + " and " + name3 + " are tied for the longest name!")
} else if(name2.length > name1.length && name2.length > name3.length) {
    console.log("" + name2 + " has the longest name!");
} else if(name2.length == name3.length && name2.length > name1.length) {
    console.log("" + name2 + " and " + name3 + " are tied for the longest name!");
} else if (name3.length > name1.length && name3.length > name2.length) {
    console.log("" + name3 + " has the longest name!");
} else {
    console.log("" + name1 + "," + name2 + ",and " + name3 + " all have the same length");
}

