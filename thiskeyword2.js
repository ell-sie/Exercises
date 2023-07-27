const user = {
    name: 'john',
    age: 25,
    career: {
        employer: 'google',
        title: 'developer',
        },

    info() {
            console.log (`${this.name} is a ${this.career.title} at ${this.career.employer}`)
        }
    }

user.info();