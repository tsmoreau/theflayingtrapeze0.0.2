export default function Alert() {
  return (
    <div class="bg-gradient-to-br from-purple-600 via-blue-500 to-green-300 text-center py-4 lg:px-4">
      <div
        class="mx-auto mr-8 ml-8 inline-flex max-w-xl rounded-full flex p-2 bg-blue-800 items-center text-indigo-100 leading-none "
        role="alert"
      >
        <span class="flex rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-bold mr-3">
          New
        </span>
        <span class="flex align-middle font-extralight text-center flex-auto">
          Alpha Launch Generative NFTs Available Now!{" "}
        </span>
        <span class="ml-2 ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 8c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.104 0-2-.897-2-2s.896-2 2-2 2 .897 2 2-.896 2-2 2zm0-12c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.914 20.526c-2.625-.902-4.697-2.978-5.592-5.606l1.02-.127c.807 2.174 2.529 3.901 4.699 4.714l-.127 1.019zm.258-2.054c-1.723-.71-3.098-2.085-3.807-3.807l1.041-.13c.596 1.272 1.623 2.299 2.895 2.896l-.129 1.041zm8.095-9.007c-.598-1.272-1.625-2.3-2.896-2.896l.131-1.041c1.721.71 3.096 2.085 3.807 3.807l-1.042.13zm2.049-.256c-.814-2.157-2.529-3.869-4.691-4.677l.129-1.019c2.613.896 4.68 2.958 5.582 5.568l-1.02.128z" />
          </svg>
        </span>
        <svg
          class="fill-current opacity-75 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </div>
    </div>
  );
}
