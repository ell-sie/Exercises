let book = {
    title: 'Compliquer', 
    author: 'Elsie',
    info() {
        console.log(`${this.title} by ${this.author}`)
    }
}
book.info();