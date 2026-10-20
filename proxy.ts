// import { NextRequest } from "next/server";

// export default async function Proxy(request: NextRequest) {
//     const {auth} = await import("@/lib/auth/server");
//     return auth.middleware({loginUrl: "/auth/sign-in"})(request);
// }

import { NextRequest } from "next/server";

export default async function Proxy(request: NextRequest) {
 return null;
}