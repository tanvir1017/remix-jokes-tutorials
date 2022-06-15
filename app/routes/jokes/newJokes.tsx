import type { ActionFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
  const value = await request.formData();
  const entries = Object.fromEntries(value);
  console.log(entries);
  return null;
};
const NewJokes = () => {
  const action = useActionData();

  console.log(action);
  return (
    <Form method="post">
      <div>
        <label>Name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Content</label>
        <textarea name="content" />
      </div>
      <button type="submit">Submit</button>
    </Form>
  );
};

export default NewJokes;
