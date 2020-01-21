import * as axios from "axios";

export async function loadBookTitles(title) {
  let result = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=intitle:" + title
  );

  let titles = [];
  for (let book of result.data.items) {
    titles.push(book.volumeInfo.title);
  }
  return titles;
}