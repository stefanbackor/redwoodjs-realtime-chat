import { faker } from '@faker-js/faker'
import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
import { sample } from 'lodash'

export default async () => {
  try {
    const users: Prisma.UserCreateManyInput[] = [
      { id: 1, name: 'alice', email: 'alice@example.com' },
      { id: 2, name: 'mark', email: 'mark@example.com' },
      { id: 3, name: 'jackie', email: 'jackie@example.com' },
      { id: 4, name: 'bob', email: 'bob@example.com' },
      { id: 5, name: 'mark', email: 'mark@example.com' },
    ]

    const rooms: Prisma.RoomCreateManyInput[] = [
      { id: 1, name: faker.company.name() },
      { id: 2, name: faker.company.name() },
    ]

    const messages: Prisma.MessageCreateManyInput[] = Array.from(Array(15)).map(
      () => ({
        roomId: sample([1, 2]),
        content: faker.hacker.phrase(),
        userId: sample([1, 2]),
        createdAt: faker.date.past(),
      })
    )

    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    await Promise.all([
      db.user.createMany({ data: users, skipDuplicates: true }),
      db.room.createMany({ data: rooms, skipDuplicates: true }),
      db.message.createMany({ data: messages }),
    ])

    const dbUsers = await db.user.findMany()
    await db.profile.createMany({
      data: dbUsers.map((user) => ({
        userId: user.id,
        bio: faker.lorem.paragraph(),
        avatar: faker.image.avatar(),
      })),
      skipDuplicates: true,
    })

    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //
    //   import { hashPassword } from '@redwoodjs/auth-dbauth-api'
    //
    //   const users = [
    //     { name: 'john', email: 'john@example.com', password: 'secret1' },
    //     { name: 'jane', email: 'jane@example.com', password: 'secret2' }
    //   ]
    //
    //   for (const user of users) {
    //     const [hashedPassword, salt] = hashPassword(user.password)
    //     await db.user.create({
    //       data: {
    //         name: user.name,
    //         email: user.email,
    //         hashedPassword,
    //         salt
    //       }
    //     })
    //   }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
