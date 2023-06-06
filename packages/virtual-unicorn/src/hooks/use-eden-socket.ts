// import { EdenWS } from "@elysiajs/eden/dist/treaty";
// import { Static, TSchema } from "@sinclair/typebox";
// import { TypedSchema } from "elysia";
// import { TypedWSRouteToEden, UnwrapSchema } from "elysia/dist/types";
// import { useEffect, useRef, useState } from "react";
//
// import { menagerieClient } from "../http/menagerie-client.ts";
//
// type x = typeof menagerieClient.state.subscribe;
// type y = ReturnType<typeof menagerieClient.state.subscribe>;
//
// type Params = { $query?: Record<string, string> | undefined };
//
// export const useEdenSocket = <
//   Schema extends TypedSchema,
//   Route extends TypedWSRouteToEden<Schema> = TypedWSRouteToEden<Schema>,
//   T extends EdenWS<Route> = EdenWS<Route>
// >(
//   ws: {
//     subscribe: (params?: Params) => EdenWS<TypedWSRouteToEden<Schema>>;
//   },
//   options?: {
//     params?: Params;
//   }
// ): readonly [
//   TypedWSRouteToEden<Schema>["body"] | undefined,
//   T["send"] | undefined
// ] => {
//   const [state, setState] = useState<Route["body"]>();
//   const sender = useRef<T["send"]>();
//
//   useEffect(() => {
//     const socket = ws.subscribe(options?.params);
//     socket.subscribe((x) => {
//       setState(x.data);
//     });
//     sender.current = socket.send;
//     return () => {
//       sender.current = undefined;
//       socket.close();
//     };
//   }, [options?.params]);
//
//   return [state, sender.current] as const;
// };
