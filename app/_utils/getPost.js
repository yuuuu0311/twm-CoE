import setDelay from "./setDelay";

const getPosts = async (delay) => {
    // Add a fake delay to make waiting noticeable.
    await setDelay(delay);

    return Array(10).fill({ data: "test" });
};

export default getPosts;
