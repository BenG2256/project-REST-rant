const db = require('../models')

//in order to use await, we need an async function
async function seed() {
    let place = await db.Place.findOne({ name: 'H-Thai-ML'})

    //fake sample comment 

    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    //add comment to the places coment array
    place.comments.push(comment.id)

    //save the place now that it has a comment
    await place.save()

    //exit the program
    process.exit()
}

seed()