export default async function fetchBooks() {
  const response = await fetch("http://localhost:3000/api/books");
  const books = await response.json();
  return (
    <main>
      <h1>Books List</h1>
      <ul>
        {books.map((book: { id: number; title: string; author: string }) => (
          <li key={book.id} className="text-2xl">
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </main>
  );
}
