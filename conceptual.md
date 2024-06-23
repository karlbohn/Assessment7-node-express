### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
A JWT is a JSON Webt Token

- What is the signature portion of the JWT?  What does it do?
The signature portion of the JWT is the last section, and using a secret key it allows the source of the data to be verified.

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes

- How can you implement authentication with a JWT?  Describe how it works at a high level.
Once a user is logged in, each subsequent request will include the generated JWT and allow user access to routes or services that require authorization.

- Compare and contrast unit, integration and end-to-end tests.
All of these tests are designed to verify functionality, but differ in their approaches. Unit tests are written to independently test the functionality of each function or small piece of code. Integration tests are written to test the functionality of instances where multiple code blocks interact. End-to-end tests are written to fully simulate an end-user experience and ensure that nothing breaks throughout the full flow of the code.

- What is a mock? What are some things you would mock?
A mock is an object that simulates the behavior of a real object. You might mock something like a database or an external API so that your tests would function without relying on an external API to also be functioning.

- What is continuous integration?
CI is the process of routinely integrating all code changes to catch any potential conflicts as quickly as possible.

- What is an environment variable and what are they used for?
An environment variable is a dynamic value that exists in the environment where a process runs. They can be used to pass configuration information to applications and system utilities or set environment-specific settings.

- What is TDD? What are some benefits and drawbacks?
TDD is Test-Driven Devlopment. It is beneficial as it requires developers to think about the requirements and design before writing, as well as leading to less debugging since each new bit of functionality is tested as it is written.

- What is the value of using JSONSchema for validation?
JSON Schema allows you to validate JSON data against a defined schema. This ensures that the data conforms to the expected format and constraints before it is processed, reducing the risk of errors and improving data integrity.

- What are some ways to decide which code to test?
All code that alters a database or makes a request should be tested.

- What does `RETURNING` do in SQL? When would you use it?
RETURNING acts as a new SELECT query that only returns rows in which data was just altered. This is useful for retrieving data that was just being worked with or altered.

- What are some differences between Web Sockets and HTTP?
Web Sockets create a persistent connection that allows for bidirectional communication. HTTP connections are transient and a new connection must be made for every request/response cycle.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
I prefered Flask, because working within Python on a strictly server-side file was more intuitive to me. When using JS for back-end AND front-end development, the lines between what content belongs in what file seemed less clear.