---
title: TypeScript. Type ‘Promise<() ⇒ Promise<any>>’ is not assignable to type ‘Promise<User>’
subtitle: My first acquaintance with Promise in TypeScript
date: 'June 26, 2023'
# description: Learning Google Sheets Conditional Formatting
thumbnailUrl: ''
tags: ['typescript', 'promise', 'error']
---
<base target="_blank">

![Promise](./1.png "Naruto Promises")

# Introduction

If you're new to TypeScript, you must pay special attention to the types. Or you will get an error. But an error can also appear if everything is fine with the types. To see this, you must know the types well anyway.

***

> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

In short, Promise in JavaScript is like a promise in the human world. You can promise to do something and will do it (success) or lose/die (failure).
In more detail, you can read about Promise in the related links below the article.

In this article, I will show you how I found a mistake that occurred the error: `Type ‘Promise<() ⇒ Promise<any>>’ is not assignable to type ‘Promise<User>’`.

![Promise is not assignable](./2.png "Promise is not assignable")

# Solution

Let me show you the pieces of code where I got the error. Maybe you can find it yourself 😁

In this file, I'm fetching data from jsonplaceholder.typicode.com. And then return a result as a JSON object.

*lib/getUser.tsx*:

    export default async function getUser(userId: string) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`
        
        if (!res.ok) throw new Error('failed to fetch user')

        return res.json
    }

Then I created a dynamic route for each user. As you noticed, I used `async/await`, which always returns Promise. So, the const `userData` has a type `Promise<User>` that I defined in `types.d.ts` file.

*app/users/[userId]/page.tsx*:

    import getUser from '@/lib/getUser'

    export default async function UserPage({ params: { userId } } : Params) {
        const userData: Promise<User> = getUser(userId)

        const user = await userData

        return (
            <>
                <h2>{user.name}</h2>
                <br />
            </>
        )
    }

*types.d.ts*:

    type User = {
        "id": number,
        "name": string,
        "username": string,
        "email": string,
        "address": {
            "street": string,
            "suite": string,
            "city": string,
            "zipcode": string,
            "geo": {
            "lat": string,
            "lng": string
            }
        },
        "phone": string,
        "website": string,
        "company": {
            "name": string,
            "catchPhrase": string,
            "bs": string
        }
    }

Thus, we learned what a `Promise` is and checked the types. So the problem is somewhere else! <br />
I focused on other parts of the code. After that, I found the error. I wrote `res.json` without parentheses.

    return res.json()

# Conclusion

You can advise yourself to be much more careful. But only those who do nothing do not make mistakes. Mistakes are always stressful, but they help you get better.

## Related Links

- [*Type 'Promise' is not assignable to type in TypeScript*](https://bobbyhadz.com/blog/typescript-type-promise-is-not-assignable-to-type)
- [*Promise*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [*Promise basics*](https://javascript.info/promise-basics)