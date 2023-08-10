"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner
          name="Kawin Choosin"
          id="650610745"
          like="1000"
          pic="/profileImages/355707823_1004223197418569_2525837408793592052_n.jpg"
          post="Quiz ยากจังเลยครับ ของ่าย ๆ กว่านี้ได้ไหม #261207"
        />

        {comments.map((choose) => (
          <Comment
            key={choose.username}
            userImagePath={choose.userImagePath}
            username={choose.username}
            likeNum={choose.likeNum}
            commentText={choose.commentText}
            replies={choose.replies}
          />
        ))}
        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
