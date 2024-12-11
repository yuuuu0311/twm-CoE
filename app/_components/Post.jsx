import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Post = () => {
    return (
        <div className="p-4 pt-6 pb-8 border-b-[0.25px] border-b-slate-400 animate-fadeIn">
            <div className="flex gap-4 h-12 mb-4">
                <Avatar className="aspect-square h-full w-auto">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <div className="font-bold text-xl">User ID</div>
                    <div className="text-md">18 mins ago</div>
                </div>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim exercitationem labore iusto corrupti eaque sint
                    pariatur eligendi? Tempore iure quos, maxime, modi ducimus
                    laboriosam corrupti obcaecati quasi asperiores dolores
                    ratione!
                </p>
            </div>
        </div>
    );
};

export default Post;
