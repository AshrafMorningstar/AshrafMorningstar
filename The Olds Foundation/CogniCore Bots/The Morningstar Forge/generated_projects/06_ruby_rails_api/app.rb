# Ruby Sinatra API
# Author: Ashraf Siddiqui
# GitHub: https://github.com/AshrafMorningstar

require 'sinatra'
require 'json'

set :port, 4567
set :bind, '0.0.0.0'

# In-memory storage
$books = []
$book_id = 1

before do
  content_type :json
end

get '/' do
  {
    message: 'Ruby Book API',
    author: 'Ashraf Siddiqui',
    github: 'https://github.com/AshrafMorningstar',
    endpoints: ['/books', '/books/:id']
  }.to_json
end

get '/books' do
  $books.to_json
end

post '/books' do
  request.body.rewind
  data = JSON.parse(request.body.read)

  book = {
    id: $book_id,
    title: data['title'],
    author: data['author'],
    year: data['year'],
    created_at: Time.now
  }

  $book_id += 1
  $books << book

  status 201
  book.to_json
end

get '/books/:id' do
  book = $books.find { |b| b[:id] == params[:id].to_i }

  if book
    book.to_json
  else
    status 404
    { error: 'Book not found' }.to_json
  end
end

delete '/books/:id' do
  book = $books.find { |b| b[:id] == params[:id].to_i }

  if book
    $books.delete(book)
    { message: 'Book deleted' }.to_json
  else
    status 404
    { error: 'Book not found' }.to_json
  end
end

puts "Starting Ruby API by Ashraf Siddiqui"
puts "GitHub: https://github.com/AshrafMorningstar"
