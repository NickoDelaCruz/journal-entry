export function numberOfWords (entry) {
  return entry.split(" ").length;
}
export function numberOfVowels(entry) {
  var count = 0;

  for (var i = 0; i < entry.length; i++) {
    if ("aeiouAEIOU".includes(entry[i])) {
      count++;
    }
  }
  return count;
}
export function numberOfConsts(entry) {
  var count = 0;

  for (var i = 0; i < entry.length; i++) {
    if (!"aeiouAEIOU ".includes(entry[i])) {
      count++;
    }
  }
  return count;
}
export function getTeaser(entry) {
  var words = entry.split(" ");
  words.splice(8);
  return words.join(' ');
}

// export function getTitle(title) {
//   var title = title.split(" ");
//   title.splice(8)
//   return title.join(' ');
// }
