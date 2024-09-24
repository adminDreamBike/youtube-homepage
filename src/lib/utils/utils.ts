// export function getCategories() {
//   const newMap = new Map();
//   newMap.set("1", "Film & Animation");
//   newMap.set("2", "Autos & Vehicles");
//   newMap.set("10", "Music");
//   newMap.set("15", "Pets & Animals");
//   newMap.set("17", "Sports");
//   newMap.set("18", "Short Movies");
//   newMap.set("19", "Travel & Events");
//   newMap.set("20", "Gaming");
//   newMap.set("21", "Videoblogging");
//   newMap.set("22", "People & Blogs");
//   newMap.set("23", "Comedy");
//   newMap.set("24", "Entertainment");
//   newMap.set("25", "News & Politics");
//   newMap.set("26", "Howto & Style");
//   newMap.set("27", "Education");
//   newMap.set("28", "Science & Technology");
//   newMap.set("29", "Nonprofits & Activism");
//   newMap.set("30", "Movies");

//   return newMap;
// }

export function getCategories() {
  const newCategories = [
    { 1: "Film & Animation" },
    { 2: "Autos & Vehicles" },
    { 10: "Music" },
    { 15: "Pets & Animals" },
    { 17: "Sports" },
    { 18: "Short Movies" },
    { 19: "Travel & Events" },
    { 20: "Gaming" },
    { 21: "Videoblogging" },
    { 22: "People & Blogs" },
    { 23: "Comedy" },
    { 24: "Entertainment" },
    { 25: "News & Politics" },
    { 26: "Howto & Style" },
    { 27: "Education" },
    { 28: "Science & Technology" },
    { 29: "Nonprofits & Activism" },
    { 30: "Movies" },
  ];
  return newCategories;
}
// export function getCategories(idCategories: Array<string>) {
//   if (!idCategories) return null;
//   const categories = setCategory();

//   const category = [];

//   idCategories.map((item, index) => {
//     if (categories.get(item) && !category.find((elem) => elem[item])) {
//       category.push({ [item]: categories.get(item) });
//     }
//   });
//   return category;
// }
