# Project Setup Instructions

Follow these steps to set up the project on your local machine.

## Prerequisites

- Ensure you have [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/) installed.

> run `pnpm --version` or `npm --version` to check if you have them installed.

## Steps to Get Started

1. **Fork the Repository**

   Click the `Fork` button at the top right of the repository page to create a copy of this repository under your GitHub account.

2. **Clone the Repository**

   Clone your forked repository to your local machine using:

   ```sh
   git clone https://github.com/your-username/your-forked-repo.git
   ```

3. **Change Directory**

   Move to the directory containing the project's files.

   ```sh
   cd your-forked-repo
   ```

4. **Install Dependencies**

   Install the project dependencies by running the following command in the root directory:

   ```sh
   pnpm install
   ```

   Next, move to the client directory and install the dependencies:

   ```sh
   cd client
   pnpm install
   ```

5. **Start the Development Server**

   Start the development server by running the following command in the **root** directory:

   ```sh
   pnpm run dev
   ```

   The development server will start running at `http://localhost:3000/`.

   - ### run the client
     Start the development server by running the following command in the client directory:

   ```sh
   pnpm run client
   ```

   The development server will start running at `http://localhost:3000/`.
