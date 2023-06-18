import { PostProps } from "@/types";

export default function Post({ post }: PostProps) {
  const { title, body, id } = post;
  return (
    <>
      <div>
        <p>
          {id}. {title}
        </p>
        <p>{body}</p>
      </div>
    </>
  );
}
