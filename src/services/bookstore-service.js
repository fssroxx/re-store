export default class BookstoreService{
    getBooks() {
        return [
            { id: 1, title: 'SMTH interesting', author: 'fssroxx', price: 20, coverImage: "https://cv8.litres.ru/pub/c/elektronnaya-kniga/cover_415/51598283-stiven-king-institut.jpg" },
            { id: 2, title: 'SMTH interesting else', author: 'fssroxx', price: 50, coverImage: 'https://cv0.litres.ru/pub/c/elektronnaya-kniga/cover_415/6538809-robert-gelbreyt-zov-kukushki.jpg' }
        ];
    }
}