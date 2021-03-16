// import fetcher from "@lib/fetcher";
// import withSession from "@lib/session";

// export default withSession(async (req: any, res: any) => {
//   const username = await req.body;


//   const url = `https://api.github.com/users/${username}`;


//   try {
//     // we check that the user exists on GitHub and store some data in session
//     const data = await fetcher(url);

//     const { login, avatar_url: avatarUrl } = data
//     const user = { isLoggedIn: true, login, avatarUrl };

//     req.session.set("user", user);

//     await req.session.save();

//     res.json(user);

//   } catch (error) {
//     const { response: fetchResponse } = error;
//     res.status(fetchResponse?.status || 500).json(error.data);
//   }
// })

import { signIn } from 'next-auth/client'

export default signIn
