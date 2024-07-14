//import chalk from "chalk";
//import { z } from 'zod';
// import _ from 'lodash'
import 'colors'
import express, { Response, Request } from "express";
import ViteExpress from "vite-express";
import { adderFn } from './server-add/adder';

adderFn(2,3)

// const userSchema = z.object({     
//   name: z.string(),
//   age: z.number().min(0),
// });

// const userData = {
//   name: 'John Doe',
//   age: 30,
// };

// // lodash sample
// const obj = ['a', 'b', 'c', 'a']       

// console.log(_.sortBy(obj)) 

// const result = userSchema.safeParse(userData);

// if (result.success) {
//   console.log('Valid data:', result.data);
// } else {
//   console.log('Validation errors:', result.error.errors); 
// }


// PORT $ HOST

const PORT: any = process.env.PROD_PORT || '3000'

const app = express();

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, PORT, () =>
  console.log(`the server is running >>>>> @http://localhost:${PORT}/`.bgMagenta),      
);

