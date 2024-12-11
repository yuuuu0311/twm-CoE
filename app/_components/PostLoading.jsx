const PostLoading = () => {
    const data = Array(10).fill({ data: "test" });

    return (
        <>
            {data.map((item, index) => (
                <div
                    div
                    className="p-4 pt-6 pb-8 border-b-[0.25px] animate-pulse border-b-slate-400"
                >
                    <div className="flex gap-4 h-12 mb-4">
                        <div className="aspect-square h-full w-auto bg-slate-200 rounded-full"></div>

                        <div className="flex flex-col flex-1 gap-2">
                            <div className="rounded-full w-1/5 h-4 bg-slate-200"></div>
                            <div className="rounded-full w-1/6 h-3 bg-slate-200"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="rounded-full w-full h-4 bg-slate-200"></div>
                        <div className="rounded-full w-3/4 h-4 bg-slate-200"></div>
                        <div className="rounded-full w-3/5 h-4 bg-slate-200"></div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default PostLoading;
