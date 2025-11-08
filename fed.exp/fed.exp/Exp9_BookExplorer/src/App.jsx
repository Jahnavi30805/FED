import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

const booksData = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho", description: "A story about following your dreams.", rating: 4.8 },
  { id: 2, title: "Atomic Habits", author: "James Clear", description: "Small habits, big results.", rating: 4.9 },
  { id: 3, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", description: "Personal finance and mindset.", rating: 4.7 },
];

function BookList() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-400 text-center">📚 Book Explorer</h1>
      <ul className="space-y-4 max-w-2xl mx-auto">
        {booksData.map((book) => (
          <li key={book.id} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-gray-400">by {book.author}</p>
            </div>
            <Link to={`/book/${book.id}`} className="text-blue-400 hover:text-blue-600 font-medium">
              View →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BookDetail() {
  const { id } = useParams();
  const book = booksData.find((b) => b.id === Number(id));

  if (!book)
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <p className="text-red-400 text-xl">❌ Book not found</p>
        <Link to="/" className="text-blue-400 mt-4 hover:text-blue-600">← Back</Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Link to="/" className="text-blue-400 hover:text-blue-600">← Back</Link>
      <div className="max-w-2xl mx-auto bg-gray-800 p-6 mt-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-yellow-400 mb-2">{book.title}</h1>
        <p className="text-gray-300 mb-4">by {book.author}</p>
        <p className="text-gray-400 mb-4">{book.description}</p>
        <p className="text-yellow-400">⭐ Rating: {book.rating}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
