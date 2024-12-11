import setDelay from "./setDelay";

const getPosts = async (delay) => {
    // Add a fake delay to make waiting noticeable.
    await setDelay(delay);

    return { id: "yuuuu0311" };
};

export default getPosts;
