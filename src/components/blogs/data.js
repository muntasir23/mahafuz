import imgOne from "../../assets/contextVsRedux.jpg";

export const blogsData = [
  {
    id: 1,
    title: "Redux Vs Context API",
    imgUrl: imgOne,
    description: (
      <div className="text-white">
        <p className="text-[14px] font-bold text-zinc-200 border-b border-zinc-800 pb-2">
          Redux and Context API are both solutions for managing state in React
          applications, but they serve different purposes and offer unique
          advantages:
        </p>
        <div className="mt-3 text-[14px]">
          <p className="text-[#ffbd59]">1. Use Case and Complexity</p>
          <ul className="list-disc ml-[30px] mt-4">
            <li>
              <strong>Context API</strong> is best suited for relatively simple
              state management scenarios, such as managing user authentication,
              theme settings, or small pieces of data that need to be accessed
              at different parts of the app. It’s ideal for smaller projects or
              parts of the app where minimal state sharing is needed.
            </li>
            <li>
              <strong>Redux</strong> is a more powerful solution designed to
              handle complex, large-scale applications where state changes are
              frequent and need more control and predictability. It’s excellent
              for cases where you need advanced state management tools like
              middleware (for async operations) and actions that interact with
              reducers.
            </li>
          </ul>
        </div>
        <div className="mt-3 text-[14px]">
          <p className="text-[#ffbd59]">2. Scalability</p>
          <ul className="list-disc ml-[30px] mt-4">
            <li>
              <strong>Context API</strong> becomes less efficient as
              applications grow because every change in the context provider
              triggers a re-render of all components that consume the context.
              This can affect performance in larger applications.
            </li>
            <li>
              <strong>Redux</strong> excels in scalability because it
              centralizes state in a single store and allows components to
              subscribe to specific pieces of state, reducing unnecessary
              re-renders. Its use of selectors and middleware makes it more
              performance-oriented in larger applications.
            </li>
          </ul>
        </div>
        <div className="mt-3 text-[14px]">
          <p className="text-[#ffbd59]">3. Performance</p>
          <ul className="list-disc ml-[30px] mt-4">
            <li>
              <strong>Context API</strong> can slow down applications if used
              for high-frequency updates because it re-renders all components
              subscribing to the context.
            </li>
            <li>
              <strong>Redux</strong> allows fine-grained control over which
              components re-render through selectors, making it more efficient
              for handling frequent updates in larger apps..
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];
